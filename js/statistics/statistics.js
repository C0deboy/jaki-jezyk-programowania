import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { Modal } from 'bootstrap';

import statistics2018 from './statistics2018-data';
import statistics2019 from './statistics2019-data';
import statistics2020 from './statistics2020-data';
import statistics2021 from './statistics2021-data';
import statistics2022 from './statistics2022-data';

require('../../css/statistics.css');

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const defaultColors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00',
  '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];

const year = parseInt(document.getElementById('statistics').getAttribute('data-year'), 10);

const yearToStats = {
  2018: statistics2018,
  2019: statistics2019,
  2020: statistics2020,
  2021: statistics2021,
  2022: statistics2022,
};
const statistics = yearToStats[year];

createLineChart('tiobeCurrentYear', 'Tiobe index - ranking', 'Pozycja', statistics, { reverse: true });
createLineChart('tiobeLastYear', 'Tiobe index - ranking - poprzedni rok', 'Pozycja', statistics, { reverse: true });
createLineChart('stackQuestions', 'Stack Overflow - liczba pytań', 'Liczba pytań', statistics);
createLineChart('meetupMeetupsLocal', 'Meetup - ilość grup - Polska', 'Liczba grup', statistics);
createLineChart('meetupMeetupsGlobal', 'Meetup - ilość grup - cały świat', 'Liczba grup', statistics);
createLineChart('meetupMembersLocal', 'Meetup - wielkość społeczności - Polska', 'Liczba członków', statistics);
createLineChart('meetupMembersGlobal', 'Meetup - wielkość społeczności - cały świat', 'Liczba członków', statistics);
createLineChart('githubProjects', 'Github - liczba projektów', 'Liczba projektów', statistics);
createLineChart('githubMoreThen1000Stars', 'Github - ilość projektów z liczbą gwiazdek większą niż 1000', 'Liczba projektów', statistics);

const gitCfg = { statsKey: 'langToProjects', gitLang: 'Java' };
createLineChart('github-projects-for-lang', 'Github - top 10 projektów ', 'Liczba gwiazdek', statistics, gitCfg);

let previousBtn = document.querySelector('.git-lang-switcher');

const activeBtnBgColor = '#4d4d4d';
previousBtn.style.background = activeBtnBgColor;

const langProjects = document.getElementById('lang-projects');

document.querySelectorAll('.git-lang-switcher').forEach((btn) => {
  btn.addEventListener('click', () => {
    previousBtn.style.background = '';
    btn.style.background = activeBtnBgColor;
    langProjects.innerHTML = '<canvas class="chart" id="github-projects-for-lang"></canvas>';
    gitCfg.gitLang = btn.getAttribute('data-lang');
    createLineChart('github-projects-for-lang', 'Github - top 10 projektów ', 'Liczba gwiazdek', statistics, gitCfg);
    previousBtn = btn;
  });
});

createLineChart('top10GithubProjects', 'Github - porównanie najlepszych projektów z każdego języka', 'Liczba gwiazdek', statistics);

function createLineChart(ctxId, title, yAxisLabel, stats, cfg = { reverse: false, gitLang: null, statsKey: null }) {
  const { reverse, gitLang, statsKey } = cfg;
  const { labels, lastYearLabels } = stats;
  const key = statsKey || ctxId;
  const datasets = gitLang ? stats[key][gitLang] : stats[key];

  const elementById = document.getElementById(ctxId);
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

  datasets.forEach((entry, i) => {
    const color = defaultColors[i];
    entry.borderColor = color;
    entry.backgroundColor = color;
    entry.fill = false;
    entry.tension = 0.4;
  });

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ctxId.includes('Last') ? lastYearLabels : labels,
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
          reverse,
          min: reverse ? 1 : null,
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
    plugins: [{
      beforeInit: (chart) => {chart.legend.afterFit = () => { this.height += 50; };},
    }],
  });
}

// DEMO DIALOG

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
