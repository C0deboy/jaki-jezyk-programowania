/* eslint-disable max-len */

const labels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];
const lastYearLabels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];

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
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
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
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
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
    data: [13, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [9, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [40, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [34, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [10, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [26, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [349166, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [708265, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1744895, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2151402, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1626702, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [286708, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [383059, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1457609, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [217362, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1387265, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [51529, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [102271, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [51038, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [26308, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19914, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6837, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6837, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [93281, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [110647, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [39757, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2448, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35237, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6678, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22946, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4927, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [19376, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7465, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [807, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1138, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [116009, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [116009, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1725177, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4588849, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2492592, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [199046, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [605710, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [794699, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1177317, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [145079, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [469340, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [200778, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [32733, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [75666, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [90, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [136, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, null, null, null, null, null, null, null, null, null, null, null],
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
    data: [33, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [22, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [9, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [225, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [225, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2011, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5091, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2405, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [303, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [821, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [737, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1849, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [253, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [581, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [330, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [51, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [212, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [103694, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [152411, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [95455, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [318572, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [118554, null, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [36434, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4767, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [51357, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [47379, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [63405, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [38045, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [28527, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [80861, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [11368, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [254690, null, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4767, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [4407, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4097, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3620, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3583, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3561, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3295, null, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [2689, null, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [2265, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bookdown',
  },
  {
    data: [2163, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [36434, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [35077, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [28963, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [25938, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [25936, null, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [24305, null, null, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [24188, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [23781, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [20912, null, null, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [20241, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [51357, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [23819, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [23134, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [20677, null, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [19400, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [17084, null, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [17060, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [16320, null, null, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [15677, null, null, null, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [14887, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
];

langToProjects.C = [
  {
    data: [103694, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [51070, null, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [46964, null, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [42808, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [35602, null, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [29239, null, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [28039, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [27315, null, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [24758, null, null, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [22972, null, null, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [47379, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [41998, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [32347, null, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [30885, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [30602, null, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [27097, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [25320, null, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [24689, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [23327, null, null, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [22870, null, null, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [63405, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30930, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29335, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [25480, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24602, null, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [24492, null, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22942, null, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [20381, null, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [19288, null, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [18287, null, null, null, null, null, null, null, null, null, null, null],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [152411, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [88718, null, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [70818, null, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [54777, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [51609, null, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [48421, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [47883, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [45831, null, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [45458, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [38213, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [118554, null, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [107836, null, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [98262, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [97269, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [92458, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [87774, null, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [58373, null, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [54911, null, null, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [50509, null, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
  {
    data: [49436, null, null, null, null, null, null, null, null, null, null, null],
    label: 'httpie',
  },
];

langToProjects.JavaScript = [
  {
    data: [318572, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [178053, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [162059, null, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [146411, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [103702, null, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [95271, null, null, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [92839, null, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [92744, null, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [85219, null, null, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [80695, null, null, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
];

langToProjects.Java = [
  {
    data: [95455, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [62972, null, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [62052, null, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [53145, null, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [52921, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [51214, null, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [49681, null, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [45483, null, null, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [44082, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41040, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [254690, null, null, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [51028, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [29295, null, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [24690, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [23315, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [18961, null, null, null, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [18520, null, null, null, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [18244, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [16062, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fd',
  },
  {
    data: [15582, null, null, null, null, null, null, null, null, null, null, null],
    label: 'diem',
  },
];

langToProjects.Kotlin = [
  {
    data: [38045, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30875, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [25660, null, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [24324, null, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [20266, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [19212, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [18479, null, null, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [16355, null, null, null, null, null, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
  {
    data: [15901, null, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15852, null, null, null, null, null, null, null, null, null, null, null],
    label: 'plaid',
  },
];

langToProjects.Scala = [
  {
    data: [28527, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16883, null, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [13089, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12477, null, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11777, null, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11318, null, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [9697, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [8235, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [8068, null, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [7848, null, null, null, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
];

langToProjects.Groovy = [
  {
    data: [11368, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [4088, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3557, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3194, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2629, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2332, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2225, null, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1861, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1852, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1428, null, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [80861, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [73528, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [60736, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [59362, null, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [49420, null, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [44831, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [42284, null, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [36662, null, null, null, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [36237, null, null, null, null, null, null, null, null, null, null, null],
    label: 'v2ray-core',
  },
  {
    data: [36212, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
];

const githubProjects = [
  {
    data: [331843, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [453462, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [980248, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1738982, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1130164, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [115799, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78714, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [357832, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [339019, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [464686, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [68429, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [44872, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [204238, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [13764, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [62012, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1077, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1337, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2653, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5591, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3414, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [764, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [44, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [701, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [796, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1049, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [256, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [144, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1717, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [380, null, null, null, null, null, null, null, null, null, null, null],
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
