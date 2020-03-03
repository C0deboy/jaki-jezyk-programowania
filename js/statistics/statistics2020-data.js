/* eslint-disable max-len */

const labels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];
const lastYearLabels = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 20, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, 15, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, 18, 16, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, null, null, null, null, null, null, null, null, null],
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
    data: [16, 16, 18, null, null, null, null, null, null, null, null, null],
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
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 9, 10, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 18, 13, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, 15, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [35, 35, 33, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [32, 32, 25, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 14, 11, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 23, 26, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [30, 30, 29, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [319433, 320732, 322763, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [650164, 652854, 657327, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1624553, 1631459, 1641974, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1929253, 1940188, 1956810, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1323684, 1338063, 1360921, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [252819, 254671, 257590, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [322231, 325100, 329936, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1372718, 1377790, 1385873, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [210017, 210488, 211337, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1326157, 1329899, 1335579, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33158, 34114, 35574, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [94519, 94962, 95713, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [42929, 43387, 44115, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [24420, 24545, 24699, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14739, 14921, 15311, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6427, 6520, 6641, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6427, 6520, 6641, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [89206, 90350, 91089, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [101212, 103858, 104331, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38155, 39009, 40207, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2458, 2467, 2498, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33419, 33676, 34049, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [7480, 7511, 6622, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22355, 22695, 23145, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4489, 4535, 4641, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18793, 18975, 18809, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7111, 7196, 7313, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [689, 704, 721, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [875, 911, 1001, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [108360, 109834, 111643, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [108360, 109834, 111643, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1677043, 1693326, 1714485, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4510652, 4554809, 4602644, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2347674, 2376974, 2420807, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [206318, 207458, 207774, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [548900, 554131, 563194, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [821760, 825376, 829239, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1185640, 1191645, 1197138, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [130838, 132478, 137084, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [467911, 472020, 478000, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [184942, 187596, 191152, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31193, 31339, 29876, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [70377, 71280, 73000, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [12, 12, 12, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [12, 12, 12, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [91, 91, 93, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [144, 146, 143, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, 44, 45, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 34, 34, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, 15, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [36, 36, 37, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [24, 24, 23, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [10, 10, 10, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [4, 4, 5, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [235, 235, 233, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [235, 235, 233, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2238, 2261, 2279, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5574, 5588, 5568, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2505, 2533, 2564, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [353, 355, 355, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [872, 872, 865, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [833, 830, 824, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [2078, 2073, 2057, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [261, 266, 267, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [619, 620, 618, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [341, 342, 344, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [56, 55, 55, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [197, 196, 206, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [85272, 85975, 87367, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [139985, 140583, 141567, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [67521, 68304, 70175, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [308088, 308433, 308959, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [80249, 81990, 84231, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [33853, 34004, 34224, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4184, 4212, 4261, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [46460, 46885, 47927, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [44839, 44960, 45126, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [57071, 57349, 57845, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [35263, 35430, 35622, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [24869, 25028, 25267, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [67896, 68535, 69549, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [10049, 10125, 10218, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [248960, 249074, 249146, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4184, 4212, 4261, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [3814, 3828, 3870, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [3650, 3673, 3699, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3543, 3540, 3545, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3162, 3186, 3216, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3101, 3116, 3131, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3099, 3119, 3151, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [2202, 2222, 2253, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [1902, 1908, 1922, null, null, null, null, null, null, null, null, null],
    label: 'devtools',
  },
  {
    data: [1869, 1877, 1886, null, null, null, null, null, null, null, null, null],
    label: 'knitr',
  },
];

langToProjects.Swift = [
  {
    data: [33853, 34004, 34224, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [32714, 32789, 32997, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [26163, 26396, 26969, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [22138, 22193, 22314, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [22093, 22195, 22404, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [22049, 22215, 22441, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [21797, 21991, 22340, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [21016, 21244, 21637, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [19713, 19735, 19750, null, null, null, null, null, null, null, null, null],
    label: 'ReactiveCocoa',
  },
  {
    data: [19237, 19271, 19346, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [46460, 46885, 47927, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [22520, 22636, 22789, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [17115, 17361, 17779, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [15527, 15777, 16250, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [15416, 15541, 16020, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [13442, 13510, 13840, null, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [12889, 13056, 13506, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [12389, 12613, 12920, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [12310, null, null, null, null, null, null, null, null, null, null, null],
    label: 'coreclr',
  },
  {
    data: [11792, 11903, 12019, null, null, null, null, null, null, null, null, null],
    label: 'Dapper',
  },
  {
    data: [null, 12371, 12499, null, null, null, null, null, null, null, null, null],
    label: 'roslyn',
  },
];

langToProjects.C = [
  {
    data: [85272, 85975, 87367, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [44077, 44510, 45185, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [40736, 40980, 41378, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [30992, 31220, 31548, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [26214, 26398, 26665, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [25600, 25675, 25848, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [24413, 25011, 26249, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [23085, 23273, 23544, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [19323, 19423, 19638, null, null, null, null, null, null, null, null, null],
    label: 'the_silver_searcher',
  },
  {
    data: [18540, null, null, null, null, null, null, null, null, null, null, null],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
  {
    data: [null, 18685, 18801, null, null, null, null, null, null, null, null, null],
    label: 'The-Art-Of-Programming-By-July',
  },
];

langToProjects.Ruby = [
  {
    data: [44839, 44960, 45126, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [39500, 39627, 39858, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [29746, 29914, 30121, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [27835, 27961, 28181, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [26663, 26847, 27453, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [25488, 25562, 25698, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [22125, 22140, 22174, null, null, null, null, null, null, null, null, null],
    label: 'gitlabhq',
  },
  {
    data: [22098, 22213, 22469, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [20471, 20529, 20608, null, null, null, null, null, null, null, null, null],
    label: 'devise',
  },
  {
    data: [20276, 20416, 20717, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
];

langToProjects.PHP = [
  {
    data: [57071, 57349, 57845, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30478, 30499, 30541, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [22950, 23110, 23334, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22564, 22689, 22867, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22440, 22767, 23237, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [22025, 22200, 22433, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [19934, 20126, 20396, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [18527, 18683, 18881, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [18279, 18340, 18435, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [17871, 17924, 18009, null, null, null, null, null, null, null, null, null],
    label: 'CodeIgniter',
  },
];

langToProjects['C++'] = [
  {
    data: [139985, 140583, 141567, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [80058, 80433, 81025, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [56484, 57208, 58306, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [50296, 50499, 50765, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [41882, 42096, 42383, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [41464, 41821, 42460, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [39528, 39779, 40252, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [35338, 35731, 36541, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [34672, 34717, 34809, null, null, null, null, null, null, null, null, null],
    label: 'x64dbg',
  },
  {
    data: [32621, 32755, 33223, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [80249, 81990, 84231, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [78152, 78823, 79825, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [68849, 70029, 71367, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [65451, 66180, 67647, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [61043, 61390, 62004, null, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [60204, 61087, 62360, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [51442, 51834, 52358, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [48375, 48675, 49169, null, null, null, null, null, null, null, null, null],
    label: 'flask',
  },
  {
    data: [46523, 46942, 47541, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [46400, 46635, 47044, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
];

langToProjects.JavaScript = [
  {
    data: [308088, 308433, 308959, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [155561, 156388, 158441, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [141231, 143139, 144649, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [138094, 138386, 138912, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [91798, 92181, 93358, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [89516, 89773, 90197, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [84104, 84583, 85277, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [75203, 75688, 76531, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [68641, 69251, 70194, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
  {
    data: [67100, 67466, 68001, null, null, null, null, null, null, null, null, null],
    label: 'node',
  },
];

langToProjects.Java = [
  {
    data: [67521, 68304, 70175, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [54789, 55181, 55656, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [48253, 49274, 50402, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [46536, 46799, 47281, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [44803, 45153, 45739, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [41629, 41745, 41974, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41397, 41671, 42353, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [37858, 38482, 39422, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [35610, 35761, 36058, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [35577, 35759, 35998, null, null, null, null, null, null, null, null, null],
    label: 'guava',
  },
];

langToProjects.Rust = [
  {
    data: [248960, 249074, 249146, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [41768, 42216, 42972, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [19905, 20221, 20926, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [17604, 17979, 18508, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [17281, 17589, 18097, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [17236, 17292, 17392, null, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [15386, 15479, 15616, null, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [13697, 13854, 13976, null, null, null, null, null, null, null, null, null],
    label: 'libra',
  },
  {
    data: [13615, 13793, 14277, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [11720, 12051, 12480, null, null, null, null, null, null, null, null, null],
    label: 'fd',
  },
];

langToProjects.Kotlin = [
  {
    data: [35263, 35430, 35622, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30318, 30530, 30891, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [28317, 28538, 28981, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [24247, 24301, 24419, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [20056, 20190, 20429, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [19491, 19534, 19606, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [17128, 17183, 17322, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [15753, 15923, 16190, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [15496, 15516, 15546, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15140, 15140, 15215, null, null, null, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
];

langToProjects.Scala = [
  {
    data: [8499, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kafka-manager',
  },
  {
    data: [7924, 7969, 7998, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [7463, 7484, 7524, null, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [6253, 6308, 6394, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [24869, 25028, 25267, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16536, 16655, 16810, null, null, null, null, null, null, null, null, null],
    label: 'prisma',
  },
  {
    data: [12393, 12434, 12511, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12252, 12271, 12301, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11491, 11510, 11542, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [10592, 10624, 10682, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [null, 8549, 8669, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
];

langToProjects.Groovy = [
  {
    data: [3539, 3569, 3628, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3181, 3214, 3249, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [2419, 2441, 2469, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2216, 2213, 2214, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [2150, 2169, 2206, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [10049, 10125, 10218, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [1815, 1837, 1872, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [1642, 1653, 1666, null, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1480, 1507, 1534, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1434, 1433, 1434, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [67896, 68535, 69549, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [62276, 62850, 63718, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [56094, 56264, 56501, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [51167, 51631, 52377, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [40873, 41308, 41984, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [34707, 35113, 35834, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [33481, 33632, 33881, null, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [33034, 33176, 33588, null, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
  {
    data: [31904, 32407, 33411, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [29546, 29810, 30191, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
];

const githubProjects = [
  {
    data: [275334, 278145, 282255, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [354913, 358858, 366309, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [790389, 802478, 828841, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1358306, 1380886, 1403005, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [910131, 920924, 919810, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [93348, 94438, 96158, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [58654, 59536, 61116, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [280989, 284860, 290884, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [319763, 320611, 321851, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [403792, 406837, 411695, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [41101, 42172, 43927, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [40933, 41127, 41457, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [158070, 160193, 163710, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [12760, 12851, 12934, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [40253, 41293, 42877, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [840, 851, 878, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1032, 1048, 1072, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2332, 2354, 2369, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5015, 5036, 5084, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2588, 2618, 2684, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [676, 679, 686, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35, 35, 36, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [532, 537, 549, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [730, 735, 743, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [927, 933, 938, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [170, 176, 187, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [127, 128, 131, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1354, 1370, 1406, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15, 16, 17, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [244, 252, 261, null, null, null, null, null, null, null, null, null],
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
