/* eslint-disable max-len */

const labels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];
const lastYearLabels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];

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
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 10, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 15, null, null, null, null, null, null, null, null, null, null],
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
    data: [14, 11, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 26, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
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
    data: [13, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [9, 11, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 14, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [40, 39, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [34, 36, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [10, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [26, 30, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [349166, 351245, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [708265, 711620, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1744895, 1751194, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2151402, 2165827, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1626702, 1646359, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [286708, 288754, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [383059, 386948, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1457609, 1462272, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [217362, 217836, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1387265, 1390814, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [51529, 52711, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [102271, 102653, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [51038, 51520, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [26308, 26421, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19914, 20325, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6837, 6878, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6837, 6878, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [93281, 93238, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [110647, 109868, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [39757, 39808, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2448, 2446, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35237, 35038, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6678, 6675, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22946, 23087, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4927, 4939, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [19376, 19448, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7465, 7466, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [807, 816, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1138, 1151, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [116009, 116039, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [116009, 116039, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1725177, 1725335, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4588849, 4593279, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2492592, 2505917, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [199046, 196886, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [605710, 611912, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [794699, 792349, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1177317, 1179224, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [145079, 144672, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [469340, 470605, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [200778, 202049, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [32733, 32893, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [75666, 75825, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [90, 89, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [136, 134, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, 46, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 33, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [33, 33, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [22, 22, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [9, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [225, 225, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [225, 225, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2011, 1997, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5091, 5053, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2405, 2420, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [303, 302, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [821, 821, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [737, 732, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1849, 1841, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [253, 249, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [581, 576, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [330, 328, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [51, 50, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [212, 211, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [103694, 104919, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [152411, 153081, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [95455, 96732, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [318572, 319440, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [118554, 120568, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [36434, 36647, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4767, 4799, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [51357, 51585, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [47379, 47545, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [63405, 63780, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [38045, 38178, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [28527, 28739, null, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [80861, 81733, null, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [11368, 11440, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [254690, 255273, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4767, 4799, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [4407, 4444, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4097, 4137, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3620, 3653, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3583, 3585, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3561, 3585, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3295, 3311, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [2689, 2741, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [2265, 2321, null, null, null, null, null, null, null, null, null, null],
    label: 'bookdown',
  },
  {
    data: [2163, 2184, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [36434, 36647, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [35077, 35194, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [28963, 29086, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [25938, 26200, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [25936, 26164, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [24305, 24500, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [24188, 24317, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [23781, 23880, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [20912, 21020, null, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [20241, 20313, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [51357, 51585, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [48421, 50212, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [23819, 24166, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [23134, 23149, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [20677, 20959, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [19400, 19565, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [17084, 17757, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [17060, 17334, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [16320, 16590, null, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [15677, 15767, null, null, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
];

langToProjects.C = [
  {
    data: [103694, 104919, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [51070, 51343, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [46964, 47360, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [42808, 44419, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [35602, 35864, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [29239, 29383, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [28039, 28181, null, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [27315, 27534, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [24758, 25809, null, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [22972, 23396, null, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [47379, 47545, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [41998, 42141, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [32347, 32547, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [30885, 31283, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [30602, 30794, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [27097, 27176, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [25320, 26646, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [24689, 24882, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [23327, 23660, null, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [22870, 23076, null, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [63405, 63780, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30930, 30956, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29335, 29776, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [25480, 25557, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24602, 24725, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [24492, 24623, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22942, 23381, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [20381, 20489, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [19288, 19343, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [18287, 18387, null, null, null, null, null, null, null, null, null, null],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [152411, 153081, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [88718, 89219, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [70818, 71756, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [54777, 54976, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [51609, 52230, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [48421, 50216, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [47883, 48863, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [45831, 46273, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [45458, 46070, null, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [38213, 38649, null, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [118554, 120568, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [107836, 109791, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [98262, 99351, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [97269, 99564, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [92458, 93784, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [87774, 89758, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [67922, 68587, null, null, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [58373, 58829, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [54911, 55455, null, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [50509, null, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
  {
    data: [null, 53802, null, null, null, null, null, null, null, null, null, null],
    label: 'flask',
  },
];

langToProjects.JavaScript = [
  {
    data: [318572, 319440, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [178053, 179231, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [162059, 163396, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [146411, 148092, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [103702, 104443, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [95271, 95620, null, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [92839, 95660, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [92744, 93244, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [85219, 85815, null, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [80695, 81469, null, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
];

langToProjects.Java = [
  {
    data: [95455, 96732, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [62972, 63905, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [62052, 62482, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [53145, 53622, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [52921, 53388, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [51214, 51843, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [49681, 50044, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [45483, 46260, null, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [44082, 44220, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41040, 41391, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [254690, 255273, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [51028, 52044, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [29295, 29747, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [24690, 25119, null, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [23315, 23691, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [18961, 19104, null, null, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [18520, 18533, null, null, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [18244, 18568, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [16062, 16331, null, null, null, null, null, null, null, null, null, null],
    label: 'fd',
  },
  {
    data: [15582, null, null, null, null, null, null, null, null, null, null, null],
    label: 'diem',
  },
  {
    data: [null, 72236, null, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
];

langToProjects.Kotlin = [
  {
    data: [38045, 38178, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30875, 31017, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [25660, 25737, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [24324, 24544, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [20266, 20304, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [19212, 19402, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [18479, 18566, null, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [16355, 16451, null, null, null, null, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
  {
    data: [15901, 15905, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15852, null, null, null, null, null, null, null, null, null, null, null],
    label: 'plaid',
  },
  {
    data: [null, 20060, null, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
];

langToProjects.Scala = [
  {
    data: [28527, 28739, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16883, 16874, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [13089, 13108, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12477, 12480, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11777, 11798, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11318, 11370, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [9697, 9797, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [8235, 8270, null, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [8068, 8288, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [7848, 7877, null, null, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
];

langToProjects.Groovy = [
  {
    data: [11368, 11440, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [4088, 4115, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3557, 3589, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3194, 3229, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2629, 2669, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2332, 2354, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2225, 2224, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1861, 1866, null, null, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1852, 1877, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1428, 1428, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [80861, 81733, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [73528, 74204, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [60736, 61456, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [59362, 59559, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [49420, 49940, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [44831, 45531, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [42284, 43011, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [36662, 36897, null, null, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [36237, 36459, null, null, null, null, null, null, null, null, null, null],
    label: 'v2ray-core',
  },
  {
    data: [36212, 36396, null, null, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
];

const githubProjects = [
  {
    data: [331843, 336200, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [453462, 460825, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [980248, 991761, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1738982, 1692670, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1130164, 1269337, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [115799, 117342, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78714, 80181, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [357832, 372489, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [339019, 340500, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [464686, 469192, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [68429, 70485, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [44872, 45119, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [204238, 207679, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [13764, 13821, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [62012, 63696, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1077, 1094, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1337, 1367, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2653, 2673, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5591, 5613, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3414, 3471, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [764, 774, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [44, 45, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [701, 715, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [796, 798, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1049, 1056, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [256, 260, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [144, 145, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1717, 1746, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [380, 386, null, null, null, null, null, null, null, null, null, null],
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
