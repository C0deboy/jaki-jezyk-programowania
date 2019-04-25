import {
  githubMoreThen1000Stars,
  githubProjects,
  labels, langToProjects,
  lastYearLabels,
  meetupMeetupsGlobal,
  meetupMeetupsLocal,
  meetupMembersGlobal,
  meetupMembersLocal,
  stackQuestions,
  tiobeCurrentYear,
  tiobeLastYear, top10GithubProjects,
} from './statistics2018-data';

const defaultColors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];


const langProjects = document.getElementById('lang-projects');
const top10GithubProjectsCtx = document.getElementById('top10GithubProjects').getContext('2d');
const tiobeCurrentYearCtx = document.getElementById('tiobeCurrentYear').getContext('2d');
const tiobeLastYearCtx = document.getElementById('tiobeLastYear').getContext('2d');
const stackQuestionsCtx = document.getElementById('stackQuestions').getContext('2d');
const meetupMeetupsLocalCtx = document.getElementById('meetupMeetupsLocal').getContext('2d');
const meetupMeetupsGlobalCtx = document.getElementById('meetupMeetupsGlobal').getContext('2d');
const meetupMembersLocalCtx = document.getElementById('meetupMembersLocal').getContext('2d');
const meetupMembersGlobalCtx = document.getElementById('meetupMembersGlobal').getContext('2d');
const githubMoreThen1000StarsCtx = document.getElementById('githubMoreThen1000Stars').getContext('2d');
const githubProjectsCtx = document.getElementById('githubProjects').getContext('2d');

createLineChart(tiobeCurrentYearCtx, 'Tiobe index - ranking', 'Pozycja', labels, tiobeCurrentYear, true);
createLineChart(tiobeLastYearCtx, 'Tiobe index - ranking - poprzedni rok', 'Pozycja', lastYearLabels, tiobeLastYear, true);
createLineChart(stackQuestionsCtx, 'Stack Overflow - liczba pytań', 'Liczba pytań', labels, stackQuestions);
createLineChart(meetupMeetupsLocalCtx, 'Meetup - ilość grup - Polska', 'Liczba grup', labels, meetupMeetupsLocal);
createLineChart(meetupMeetupsGlobalCtx, 'Meetup - ilość grup - cały świat', 'Liczba grup', labels, meetupMeetupsGlobal);
createLineChart(meetupMembersLocalCtx, 'Meetup - wielkość społeczności - Polska', 'Liczba członków', labels, meetupMembersLocal);
createLineChart(meetupMembersGlobalCtx, 'Meetup - wielkość społeczności - cały świat', 'Liczba członków', labels, meetupMembersGlobal);
createLineChart(githubProjectsCtx, 'Github - liczba projektów', 'Liczba projektów', labels, githubProjects);
createLineChart(githubMoreThen1000StarsCtx, 'Github - ilość projektów z liczbą gwiazdek większą niż 1000', 'Liczba projektów', labels, githubMoreThen1000Stars);

const lang = 'Java';
const ctx = document.getElementById('github-projects-for-lang').getContext('2d');

createLineChart(ctx, 'Github - top 10 projektów ' + lang, 'Liczba gwiazdek', labels, langToProjects[lang]);

let previousBtn = document.querySelector('.git-lang-switcher');


const activeBtnBgColor = '#4d4d4d';
previousBtn.style.background = activeBtnBgColor;

document.querySelectorAll('.git-lang-switcher').forEach((btn) => {
  btn.addEventListener('click', () => {
    previousBtn.style.background = '';
    btn.style.background = activeBtnBgColor;
    langProjects.innerHTML = '<canvas class="chart" id="github-projects-for-lang"></canvas>';
    const lang = btn.getAttribute('data-lang');
    const ctx = document.getElementById('github-projects-for-lang').getContext('2d');
    createLineChart(ctx, 'Github - top 10 projektów ' + lang, 'Liczba gwiazdek', labels, langToProjects[lang]);
    previousBtn = btn;
  });
});

createLineChart(top10GithubProjectsCtx, 'Github - porównanie najlepszych projektów z każdego języka', 'Liczba gwiazdek', labels, top10GithubProjects);

function createLineChart(ctx, title, yAxisLabel, labels, datasets, reverse = false) {
  const header = document.createElement('h2');
  header.innerText = title;

  ctx.canvas.parentElement.insertBefore(header, ctx.canvas);

  datasets.forEach((entry, i) => {
    const color = defaultColors[i];
    entry.borderColor = color;
    entry.backgroundColor = color;
    entry.fill = false;
  });

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            reverse,
            min: reverse ? 1 : null,
          },
          scaleLabel: {
            display: true,
            labelString: yAxisLabel,
          },
        }],
      },
    },
  });
}
