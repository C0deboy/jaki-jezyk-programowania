/* eslint-disable max-len */

const labels = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12'];
const lastYearLabels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];

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
    data: [3, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [12, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [13, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, null, null, null, null, null, null, null, null, null, null, null],
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
    data: [11, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [24, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
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
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [10, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [35, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [20, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [392860, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [788053, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1886498, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2473613, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2102250, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [324382, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [480215, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1580329, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [227275, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1455238, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [84743, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [110815, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [67466, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [29414, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [34390, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [7014, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [7014, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [77831, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [91924, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [40389, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2558, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35333, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6290, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [19275, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [5779, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18170, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [4908, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [788, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1427, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [129900, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [129900, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1279198, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3559001, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2662314, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [156636, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [637102, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [745091, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [902142, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [162645, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [374246, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [248301, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41456, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [94371, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [17, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [17, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [64, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [103, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [48, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [12, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [26, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [9, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [17, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [8, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [231, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [231, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1431, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3522, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2275, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [211, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [690, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [591, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1361, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [237, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [425, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [322, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [44, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [220, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [145763, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [170943, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [79636, null, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns (Java)',
  },
  {
    data: [360708, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [227174, null, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [41782, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [5768, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [86213, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [52262, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [72241, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [43845, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [34928, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [108272, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [14336, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [87717, null, null, null, null, null, null, null, null, null, null, null],
    label: 'deno (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [5768, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [5353, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4904, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4336, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4015, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3980, null, null, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [3635, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3474, null, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3219, null, null, null, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
  {
    data: [2929, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [41782, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [38902, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [32399, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [30973, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [27361, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [26388, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [23688, null, null, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [23133, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxSwift',
  },
  {
    data: [22475, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vapor',
  },
  {
    data: [22308, null, null, null, null, null, null, null, null, null, null, null],
    label: 'clashX',
  },
];

langToProjects['C#'] = [
  {
    data: [86213, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [55740, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [37062, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [36755, null, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [30860, null, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [26151, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [23121, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [23039, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [22626, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [22607, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
];

langToProjects.C = [
  {
    data: [145763, null, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [76306, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [61861, null, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [58386, null, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [45395, null, null, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [45129, null, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [44919, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [34979, null, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [33943, null, null, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [33786, null, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [52262, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [46022, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [39963, null, null, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [37518, null, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [37296, null, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [36407, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [34822, null, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [30718, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [29833, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [29382, null, null, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [72241, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [44665, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [31060, null, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [28827, null, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [27987, null, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [27335, null, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [26682, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22351, null, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [21476, null, null, null, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [21114, null, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
];

langToProjects['C++'] = [
  {
    data: [170943, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [105783, null, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [87450, null, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [68091, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [66285, null, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [62435, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [61752, null, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [57999, null, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [57520, null, null, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [48958, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [227174, null, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [210676, null, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [155890, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [152110, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [130223, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [117140, null, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [79846, null, null, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [75602, null, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [68607, null, null, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [64614, null, null, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
];

langToProjects.JavaScript = [
  {
    data: [360708, null, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [202179, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [201593, null, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [162624, null, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [161680, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [142241, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [131375, null, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [107491, null, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [107437, null, null, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [104301, null, null, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
];

langToProjects.Java = [
  {
    data: [79636, null, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [72281, null, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [68433, null, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [65430, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [63388, null, null, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [62606, null, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [59146, null, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [50645, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [50117, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [46811, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
];

langToProjects.Rust = [
  {
    data: [87717, null, null, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [77444, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [58406, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [44502, null, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [39458, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [36793, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [35668, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [34203, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [32451, null, null, null, null, null, null, null, null, null, null, null],
    label: 'meilisearch',
  },
  {
    data: [32339, null, null, null, null, null, null, null, null, null, null, null],
    label: 'starship',
  },
];

langToProjects.Kotlin = [
  {
    data: [43845, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [43501, null, null, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [42177, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [33322, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [28758, null, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [28642, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [28200, null, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [22576, null, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [21731, null, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [20835, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tachiyomi',
  },
];

langToProjects.Scala = [
  {
    data: [34928, null, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16747, null, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [14008, null, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12694, null, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [12599, null, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12546, null, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12313, null, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11214, null, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [9322, null, null, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
  {
    data: [8846, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
];

langToProjects.Groovy = [
  {
    data: [14336, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [6573, null, null, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [4836, null, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4013, null, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3807, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3165, null, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2665, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2453, null, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2233, null, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1952, null, null, null, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
];

langToProjects.Go = [
  {
    data: [108272, null, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [95902, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [95649, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [66251, null, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [65151, null, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [65087, null, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [64055, null, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [49700, null, null, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [49196, null, null, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [46619, null, null, null, null, null, null, null, null, null, null, null],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [471426, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [624074, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1157894, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2123257, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1471068, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [159207, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [115530, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [539913, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [365515, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [565941, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [139037, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [51126, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [304061, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15255, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [125337, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1599, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2003, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3156, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [8750, null, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [5251, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [957, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [61, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1126, null, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [888, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1244, null, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [450, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [168, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2509, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [852, null, null, null, null, null, null, null, null, null, null, null],
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
