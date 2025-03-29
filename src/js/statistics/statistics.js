import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Modal } from 'bootstrap';

import statistics2018 from './statistics2018-data';
import statistics2019 from './statistics2019-data';
import statistics2020 from './statistics2020-data';
import statistics2021 from './statistics2021-data';
import statistics2022 from './statistics2022-data';
import statistics2023 from './statistics2023-data';
import statistics2024 from './statistics2024-data';
import statistics2025 from './statistics2025-data';

require('../../css/statistics.scss');

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const defaultColors = [
  '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC',
];

const year = parseInt(document.getElementById('statistics')
  .getAttribute('data-year'), 10);

const yearToStats = {
  2018: statistics2018,
  2019: statistics2019,
  2020: statistics2020,
  2021: statistics2021,
  2022: statistics2022,
  2023: statistics2023,
  2024: statistics2024,
  2025: statistics2025,
};
const statistics = yearToStats[year];
const githubProjectsCfg = {
  statsKey: 'langToProjects',
  gitLang: 'Java',
};

const chartsData = [
  {
    canvasId: 'tiobeCurrentYear',
    title: 'Tiobe index - ranking',
    subtitle: 'Popularność języków programowania na podstawie liczby wyszukiwań danego hasła w internecie',
    yAxisLabel: 'Pozycja',
    cfg: { reverse: true },
  },
  {
    canvasId: 'tiobeLastYear',
    title: 'Tiobe index - ranking - poprzedni rok',
    yAxisLabel: 'Pozycja',
    cfg: { reverse: true },
  },
  {
    canvasId: 'stackQuestions',
    title: 'Stack Overflow - liczba pytań',
    subtitle: 'Stack Overflow to portal, gdzie można zadawać pytania dotyczące programowania',
    yAxisLabel: 'Liczba pytań',
  },
  {
    canvasId: 'meetupMeetupsLocal',
    title: 'Meetup - ilość grup - Polska',
    subtitle: 'Meetup to platforma, gdzie możemy znaleźć spotkania dla entuzjastów danej dziedziny',
    yAxisLabel: 'Liczba grup',
  },
  {
    canvasId: 'meetupMeetupsGlobal',
    title: 'Meetup - ilość grup - cały świat',
    yAxisLabel: 'Liczba grup',
  },
  {
    canvasId: 'meetupMembersLocal',
    title: 'Meetup - wielkość społeczności - Polska',
    yAxisLabel: 'Liczba członków',
  },
  {
    canvasId: 'meetupMembersGlobal',
    title: 'Meetup - wielkość społeczności - cały świat',
    yAxisLabel: 'Liczba członków',
  },
  {
    canvasId: 'githubProjects',
    title: 'Github - liczba projektów',
    subtitle: 'Github jest to najpopularniejsze miejsce do przechowywanania projektów programistycznych',
    yAxisLabel: 'Liczba projektów',
  },
  {
    canvasId: 'githubMoreThen1000Stars',
    title: 'Github - ilość projektów z liczbą gwiazdek większą niż 1000',
    yAxisLabel: 'Pozycja',
  },
  {
    canvasId: 'github-projects-for-lang',
    title: 'Github - top 10 projektów ',
    yAxisLabel: 'Liczba gwiazdek',
    cfg: githubProjectsCfg,
  },
];

const githubTop10ChartsData = {
  forEachLang: {
    canvasId: 'github-projects-for-lang',
    title: 'Github - top 10 projektów ',
    yAxisLabel: 'Liczba gwiazdek',
  },
  overall: {
    canvasId: 'top10GithubProjects',
    title: 'Github - porównanie najlepszych projektów z każdego języka',
    yAxisLabel: 'Liczba gwiazdek',
  },
};

chartsData.forEach((data) => createLineChart(data.canvasId, data.title, data.yAxisLabel, statistics, data.cfg, data.subtitle));

createTop10GithubProjectsChartsOnButtonClick(githubTop10ChartsData.forEachLang);
createTop10GithubProjectsOverall(githubTop10ChartsData.overall);
createLogicForHowToUseDialog();

function createTop10GithubProjectsChartsOnButtonClick(data) {
  let previousBtn = document.querySelector('.git-lang-switcher');

  const activeBtnBgColor = '#4d4d4d';
  previousBtn.style.background = activeBtnBgColor;

  const langProjects = document.getElementById('lang-projects');

  document.querySelectorAll('.git-lang-switcher')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        previousBtn.style.background = '';
        btn.style.background = activeBtnBgColor;
        langProjects.innerHTML = '<canvas class="chart" id="github-projects-for-lang"></canvas>';
        githubProjectsCfg.gitLang = btn.getAttribute('data-lang');
        createLineChart(data.canvasId, data.title, data.yAxisLabel, statistics, githubProjectsCfg);
        previousBtn = btn;
      });
    });
}

function createTop10GithubProjectsOverall(data) {
  createLineChart(data.canvasId, data.title, data.yAxisLabel, statistics);
}

function createLineChart(canvasId, title, yAxisLabel, stats, cfg = {
  reverse: false,
  gitLang: null,
  statsKey: null,
}, subtitle) {
  const { gitLang } = cfg;

  const key = cfg.statsKey || canvasId;
  const datasets = gitLang ? stats[key][gitLang] : stats[key];

  const elementById = document.getElementById(canvasId);
  if (elementById == null) {
    return;
  }
  const ctx = elementById.getContext('2d');
  if (ctx === null) {
    throw Error('Invalid ctx id');
  }

  const header = document.createElement('h2');
  header.innerText = gitLang ? title + gitLang : title;
  ctx.canvas.parentElement.insertBefore(header, ctx.canvas);

  if (subtitle) {
    const subheader = document.createElement('p');
    subheader.classList.add('text-muted');
    subheader.innerText = subtitle;
    ctx.canvas.parentElement.insertBefore(subheader, ctx.canvas);
  }

  if (window.matchMedia('(max-width: 768px)').matches) ctx.canvas.height = 500;

  datasets.forEach((entry, i) => {
    const color = defaultColors[i];
    entry.borderColor = color;
    entry.backgroundColor = color;
    entry.fill = false;
  });

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: canvasId.includes('Last') ? stats.lastYearLabels : stats.labels,
      datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      clip: 10,
      scales: {
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
        y: {
          reverse: cfg.reverse,
          min: cfg.reverse ? 1 : null,
          ticks: {
            font: { size: 14 },
          },
          title: {
            display: true,
            text: yAxisLabel,
            font: { size: 16 },
          },
        },
      },
    },
  });
}

function createLogicForHowToUseDialog() {
  const demoEl = document.getElementById('demo');
  const demoModal = new Modal(demoEl);

  if (localStorage.getItem('stats-demo-closed') !== 'true') {
    demoModal.show();
  } else {
    demoModal.hide();
  }

  demoEl.addEventListener('hidden.bs.modal', () => {
    localStorage.setItem('stats-demo-closed', 'true');
  });
}
