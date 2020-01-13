/* eslint-disable max-len */

const labels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];
const lastYearLabels = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'];

const tiobeLastYear = [
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [7, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [16, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [35, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [32, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [30, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [319433, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [650164, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1624553, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1929253, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1323684, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [252819, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [322231, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1372718, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [210017, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1326157, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33158, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [94519, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [42929, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [24420, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14739, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6427, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6427, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [89206, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [101212, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38155, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2458, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33419, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [7480, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22355, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4489, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18793, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7111, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [689, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [875, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [108360, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [108360, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1677043, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4510652, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2347674, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [206318, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [548900, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [821760, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1185640, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [130838, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [467911, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [184942, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31193, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [70377, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [12, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [12, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [91, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [144, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [7, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [36, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [24, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [10, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [4, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [235, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [235, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2238, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5574, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2505, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [353, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [872, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [833, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [2078, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [261, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [619, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [341, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [56, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [197, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [85272, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [139985, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [67521, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [308088, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [80249, null, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [33853, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4184, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [46460, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [44839, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [57071, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [35263, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [24869, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [67896, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [10049, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [248960, null, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4184, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [3814, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [3650, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3543, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3162, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3101, null, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3099, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [2202, null, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [1902, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devtools',
  },
  {
    data: [1869, null, null, null, null, null, null, null, null, null, null, null],
    label: 'knitr',
  },
];

langToProjects.Swift = [
  {
    data: [33853, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [32714, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [26163, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [22138, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [22093, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [22049, null, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [21797, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [21016, null, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [19713, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ReactiveCocoa',
  },
  {
    data: [19237, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [46460, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [22520, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [17853, null, null, null, null, null, null, null, null, null, null, null],
    label: 'corefx',
  },
  {
    data: [17115, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [15527, null, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [15416, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [13442, null, null, null, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [12889, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [12389, null, null, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [12310, null, null, null, null, null, null, null, null, null, null, null],
    label: 'coreclr',
  },
];

langToProjects.C = [
  {
    data: [85272, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [44077, null, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [40736, null, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [30992, null, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [26214, null, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [25600, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [24413, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [23085, null, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [19323, null, null, null, null, null, null, null, null, null, null, null],
    label: 'the_silver_searcher',
  },
  {
    data: [18540, null, null, null, null, null, null, null, null, null, null, null],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
];

langToProjects.Ruby = [
  {
    data: [44839, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [39500, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [29746, null, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [27835, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [26663, null, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [25488, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [22125, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gitlabhq',
  },
  {
    data: [22098, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [20471, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devise',
  },
  {
    data: [20276, null, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
];

langToProjects.PHP = [
  {
    data: [57071, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30478, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [22950, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22564, null, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22440, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [22025, null, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [19934, null, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [18527, null, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [18279, null, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [17871, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeIgniter',
  },
];

langToProjects['C++'] = [
  {
    data: [139985, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [80058, null, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [56484, null, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [50296, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [41882, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [41464, null, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [39528, null, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [36205, null, null, null, null, null, null, null, null, null, null, null],
    label: 'nw.js',
  },
  {
    data: [35338, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [34672, null, null, null, null, null, null, null, null, null, null, null],
    label: 'x64dbg',
  },
];

langToProjects.Python = [
  {
    data: [80249, null, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [78152, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [68849, null, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [65451, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [61043, null, null, null, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [60204, null, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [51442, null, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [48375, null, null, null, null, null, null, null, null, null, null, null],
    label: 'flask',
  },
  {
    data: [46523, null, null, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [46400, null, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
];

langToProjects.JavaScript = [
  {
    data: [308088, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [155561, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [138094, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [91798, null, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [89516, null, null, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [84103, null, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [75203, null, null, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [68641, null, null, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
  {
    data: [67100, null, null, null, null, null, null, null, null, null, null, null],
    label: 'node',
  },
];

langToProjects.Java = [
  {
    data: [67521, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [54789, null, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [48253, null, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [46536, null, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [44803, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [41629, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41397, null, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [37858, null, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [35610, null, null, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [35577, null, null, null, null, null, null, null, null, null, null, null],
    label: 'guava',
  },
];

langToProjects.Rust = [
  {
    data: [248960, null, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [41768, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [40836, null, null, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [19905, null, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [17604, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [17281, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [17236, null, null, null, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [15386, null, null, null, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [13697, null, null, null, null, null, null, null, null, null, null, null],
    label: 'libra',
  },
  {
    data: [13615, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
];

langToProjects.Kotlin = [
  {
    data: [35263, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30318, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [28317, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [24247, null, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [20056, null, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [19491, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [18986, null, null, null, null, null, null, null, null, null, null, null],
    label: 'profile-summary-for-github',
  },
  {
    data: [17128, null, null, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [15753, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [15496, null, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
];

langToProjects.Scala = [
  {
    data: [8499, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kafka-manager',
  },
  {
    data: [7924, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [7463, null, null, null, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [6253, null, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [24869, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16536, null, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma',
  },
  {
    data: [12393, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12252, null, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11491, null, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [10592, null, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
];

langToProjects.Groovy = [
  {
    data: [3539, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3181, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [2419, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2216, null, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [2150, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [10049, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [1815, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [1642, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1480, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1434, null, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [67896, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [62276, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [56094, null, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [51167, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [40873, null, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [34707, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [33481, null, null, null, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [33034, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
  {
    data: [31904, null, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [29546, null, null, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
];

const githubProjects = [
  {
    data: [275334, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [354913, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [790389, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1358306, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [910131, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [93348, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [58654, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [280989, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [319763, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [403792, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [41101, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [40933, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [158070, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [12760, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [40253, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [840, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1032, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2332, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5015, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2588, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [676, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [532, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [730, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [927, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [170, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [127, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1354, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [244, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

module.exports = {
  githubMoreThen1000Stars,
  githubProjects,
  labels,
  langToProjects,
  lastYearLabels,
  meetupMeetupsGlobal,
  meetupMeetupsLocal,
  meetupMembersGlobal,
  meetupMembersLocal,
  stackQuestions,
  tiobeCurrentYear,
  tiobeLastYear,
  top10GithubProjects,
};
