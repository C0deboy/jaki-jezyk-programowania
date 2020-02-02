/* eslint-disable max-len */

const labels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];
const lastYearLabels = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'];

const tiobeLastYear = [
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, 18, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, null, null, null, null, null, null, null, null, null, null],
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
    data: [16, 16, null, null, null, null, null, null, null, null, null, null],
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
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 18, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [35, 35, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [32, 32, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 14, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 23, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [30, 30, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [319433, 320732, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [650164, 652854, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1624553, 1631459, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1929253, 1940188, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1323684, 1338063, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [252819, 254671, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [322231, 325100, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1372718, 1377790, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [210017, 210488, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1326157, 1329899, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33158, 34114, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [94519, 94962, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [42929, 43387, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [24420, 24545, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14739, 14921, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6427, 6520, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6427, 6520, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [89206, 90350, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [101212, 103858, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38155, 39009, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2458, 2467, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33419, 33676, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [7480, 7511, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22355, 22695, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4489, 4535, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18793, 18975, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7111, 7196, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [689, 704, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [875, 911, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [108360, 109834, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [108360, 109834, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1677043, 1693326, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4510652, 4554809, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2347674, 2376974, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [206318, 207458, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [548900, 554131, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [821760, 825376, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1185640, 1191645, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [130838, 132478, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [467911, 472020, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [184942, 187596, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31193, 31339, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [70377, 71280, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [91, 91, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [144, 146, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, 44, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 34, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [36, 36, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [24, 24, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [10, 10, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [235, 235, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [235, 235, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2238, 2261, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5574, 5588, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2505, 2533, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [353, 355, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [872, 872, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [833, 830, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [2078, 2073, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [261, 266, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [619, 620, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [341, 342, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [56, 55, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [197, 196, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [85272, 85975, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [139985, 140583, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [67521, 68304, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [308088, 308433, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [80249, 81990, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [33853, 34004, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4184, 4212, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [46460, 46885, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [44839, 44960, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [57071, 57349, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [35263, 35430, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [24869, 25028, null, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [67896, 68535, null, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [10049, 10125, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [248960, 249074, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4184, 4212, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [3814, 3828, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [3650, 3673, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3543, 3540, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3162, 3186, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3101, 3116, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3099, 3119, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [2202, 2222, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [1902, 1908, null, null, null, null, null, null, null, null, null, null],
    label: 'devtools',
  },
  {
    data: [1869, 1877, null, null, null, null, null, null, null, null, null, null],
    label: 'knitr',
  },
];

langToProjects.Swift = [
  {
    data: [33853, 34004, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [32714, 32789, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [26163, 26396, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [22138, 22193, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [22093, 22195, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [22049, 22215, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [21797, 21991, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [21016, 21244, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [19713, 19735, null, null, null, null, null, null, null, null, null, null],
    label: 'ReactiveCocoa',
  },
  {
    data: [19237, 19271, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [46460, 46885, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [22520, 22636, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [17115, 17361, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [15527, 15777, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [15416, 15541, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [13442, 13510, null, null, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [12889, 13056, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [12389, 12613, null, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [12310, null, null, null, null, null, null, null, null, null, null, null],
    label: 'coreclr',
  },
  {
    data: [11792, 11903, null, null, null, null, null, null, null, null, null, null],
    label: 'Dapper',
  },
  {
    data: [null, 12371, null, null, null, null, null, null, null, null, null, null],
    label: 'roslyn',
  },
];

langToProjects.C = [
  {
    data: [85272, 85975, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [44077, 44510, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [40736, 40980, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [30992, 31220, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [26214, 26398, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [25600, 25675, null, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [24413, 25011, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [23085, 23273, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [19323, 19423, null, null, null, null, null, null, null, null, null, null],
    label: 'the_silver_searcher',
  },
  {
    data: [18540, null, null, null, null, null, null, null, null, null, null, null],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
  {
    data: [null, 18685, null, null, null, null, null, null, null, null, null, null],
    label: 'The-Art-Of-Programming-By-July',
  },
];

langToProjects.Ruby = [
  {
    data: [44839, 44960, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [39500, 39627, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [29746, 29914, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [27835, 27961, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [26663, 26847, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [25488, 25562, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [22125, 22140, null, null, null, null, null, null, null, null, null, null],
    label: 'gitlabhq',
  },
  {
    data: [22098, 22213, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [20471, 20529, null, null, null, null, null, null, null, null, null, null],
    label: 'devise',
  },
  {
    data: [20276, 20416, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
];

langToProjects.PHP = [
  {
    data: [57071, 57349, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30478, 30499, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [22950, 23110, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22564, 22689, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22440, 22767, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [22025, 22200, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [19934, 20126, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [18527, 18683, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [18279, 18340, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [17871, 17924, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeIgniter',
  },
];

langToProjects['C++'] = [
  {
    data: [139985, 140583, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [80058, 80433, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [56484, 57208, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [50296, 50499, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [41882, 42096, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [41464, 41821, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [39528, 39779, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [35338, 35731, null, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [34672, 34717, null, null, null, null, null, null, null, null, null, null],
    label: 'x64dbg',
  },
  {
    data: [32621, 32755, null, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [80249, 81990, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [78152, 78823, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [68849, 70029, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [65451, 66180, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [61043, 61390, null, null, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [60204, 61087, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [51442, 51834, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [48375, 48675, null, null, null, null, null, null, null, null, null, null],
    label: 'flask',
  },
  {
    data: [46523, 46942, null, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [46400, 46635, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
];

langToProjects.JavaScript = [
  {
    data: [308088, 308433, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [155561, 156388, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [141231, 143139, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [138094, 138386, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [91798, 92181, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [89516, 89773, null, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [84104, 84583, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [75203, 75688, null, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [68641, 69251, null, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
  {
    data: [67100, 67466, null, null, null, null, null, null, null, null, null, null],
    label: 'node',
  },
];

langToProjects.Java = [
  {
    data: [67521, 68304, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [54789, 55181, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [48253, 49274, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [46536, 46799, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [44803, 45153, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [41629, 41745, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41397, 41671, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [37858, 38482, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [35610, 35761, null, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [35577, 35759, null, null, null, null, null, null, null, null, null, null],
    label: 'guava',
  },
];

langToProjects.Rust = [
  {
    data: [248960, 249074, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [41768, 42216, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [19905, 20221, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [17604, 17979, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [17281, 17589, null, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [17236, 17292, null, null, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [15386, 15479, null, null, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [13697, 13854, null, null, null, null, null, null, null, null, null, null],
    label: 'libra',
  },
  {
    data: [13615, 13793, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [11720, 12051, null, null, null, null, null, null, null, null, null, null],
    label: 'fd',
  },
];

langToProjects.Kotlin = [
  {
    data: [35263, 35430, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30318, 30530, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [28317, 28538, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [24247, 24301, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [20056, 20190, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [19491, 19534, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [17128, 17183, null, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [15753, 15923, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [15496, 15516, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15140, 15140, null, null, null, null, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
];

langToProjects.Scala = [
  {
    data: [8499, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kafka-manager',
  },
  {
    data: [7924, 7969, null, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [7463, 7484, null, null, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [6253, 6308, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [24869, 25028, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16536, 16655, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma',
  },
  {
    data: [12393, 12434, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12252, 12271, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11491, 11510, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [10592, 10624, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [null, 8549, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
];

langToProjects.Groovy = [
  {
    data: [3539, 3569, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3181, 3214, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [2419, 2441, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2216, 2213, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [2150, 2169, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [10049, 10125, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [1815, 1837, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [1642, 1653, null, null, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1480, 1507, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1434, 1433, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [67896, 68535, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [62276, 62850, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [56094, 56264, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [51167, 51631, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [40873, 41308, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [34707, 35113, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [33481, 33632, null, null, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [33034, 33176, null, null, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
  {
    data: [31904, 32407, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [29546, 29810, null, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
];

const githubProjects = [
  {
    data: [275334, 278145, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [354913, 358858, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [790389, 802478, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1358306, 1380886, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [910131, 920924, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [93348, 94438, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [58654, 59536, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [280989, 284860, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [319763, 320611, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [403792, 406837, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [41101, 42172, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [40933, 41127, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [158070, 160193, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [12760, 12851, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [40253, 41293, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [840, 851, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1032, 1048, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2332, 2354, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5015, 5036, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2588, 2618, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [676, 679, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35, 35, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [532, 537, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [730, 735, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [927, 933, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [170, 176, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [127, 128, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1354, 1370, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15, 16, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [244, 252, null, null, null, null, null, null, null, null, null, null],
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
