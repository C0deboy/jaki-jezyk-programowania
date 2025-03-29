/* eslint-disable max-len */

const labels = ['2025-01', '2025-04', '2025-08', '2025-12'];
const lastYearLabels = ['2024-01', '2024-04', '2024-08', '2024-12'];

const tiobeLastYear = [
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [17, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [19, 21, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [7, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [15, 19, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [13, 8, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [20, 17, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 26, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 16, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [17, 21, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [12, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [20, 19, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [30, 28, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14, 14, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [407718, 408898, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [814113, 816570, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1922448, 1924284, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2537142, 2537746, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2217394, 2222936, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [336320, 337187, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [510804, 512026, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1625462, 1627924, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [229379, 229453, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1469533, 1469979, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [98180, 98850, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [112793, 112886, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [74353, 74811, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [30380, 30442, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [43019, 43785, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6562, 5691, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6562, 5691, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [55733, 55321, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [77257, 77535, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38476, 38293, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2226, 2228, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [31048, 33370, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [5850, 4225, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [17955, 17389, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [9510, 9600, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [9375, 9490, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1833, 1906, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [844, 850, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [2053, 2119, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [125996, 128557, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [125996, 128557, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [798898, 761436, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3106122, 3105111, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2521639, 2489865, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [75287, 68658, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [617017, 618218, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [637166, 616552, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [539291, 513718, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [181479, 183691, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [248643, 230530, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [159394, 154038, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41786, 37410, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [117505, 118114, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [10, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [10, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [44, 43, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [69, 66, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, 37, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [21, 21, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [10, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [16, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [10, 9, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [10, 10, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [198, 194, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [198, 194, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [954, 880, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2762, 2666, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2038, 1966, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [134, 124, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [564, 540, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [472, 449, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [866, 821, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [222, 215, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [276, 249, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [179, 167, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41, 36, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [227, 219, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [183689, 190551, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [186680, 188889, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [101777, 111097, null, null, null, null, null, null, null, null, null, null],
    label: 'hello-algo (Java)',
  },
  {
    data: [406547, 414591, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [319231, 334400, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [47518, 48571, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [6473, 6646, null, null, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends (R)',
  },
  {
    data: [111925, 116695, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [56168, 56653, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [78974, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [49529, 50274, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [62525, 63058, null, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm (Scala)',
  },
  {
    data: [133836, 140768, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go (Go)',
  },
  {
    data: [17029, 17445, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [98275, 102399, null, null, null, null, null, null, null, null, null, null],
    label: 'deno (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [6550, 6643, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [6473, 6646, null, null, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends',
  },
  {
    data: [6036, 6123, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [5381, 5451, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4790, 4850, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4597, 4730, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [4331, 4390, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [4111, 4110, null, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [3666, 3679, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3628, 3710, null, null, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
];

langToProjects.Swift = [
  {
    data: [47518, 48571, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [41315, 41788, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [38487, 39847, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [32488, 32678, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [28851, 28994, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [28261, 29422, null, null, null, null, null, null, null, null, null, null],
    label: 'MonitorControl',
  },
  {
    data: [27634, 27793, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [27300, 28671, null, null, null, null, null, null, null, null, null, null],
    label: 'UTM',
  },
  {
    data: [26427, 30234, null, null, null, null, null, null, null, null, null, null],
    label: 'stats',
  },
  {
    data: [26085, 26686, null, null, null, null, null, null, null, null, null, null],
    label: 'Rectangle',
  },
];

langToProjects['C#'] = [
  {
    data: [111925, 116695, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [70976, 77331, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [58499, 58717, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [45736, 46878, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [35604, 36348, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [35569, 38283, null, null, null, null, null, null, null, null, null, null],
    label: 'jellyfin',
  },
  {
    data: [34865, 36626, null, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [30193, 32048, null, null, null, null, null, null, null, null, null, null],
    label: 'RevokeMsgPatcher',
  },
  {
    data: [29942, 31670, null, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [27542, 28367, null, null, null, null, null, null, null, null, null, null],
    label: 'DevToys',
  },
];

langToProjects.C = [
  {
    data: [183689, 190551, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [113659, 119788, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [72359, 73925, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [67247, 68503, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [63287, 65717, null, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [60692, 63151, null, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [52769, 54057, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [46484, 48740, null, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [38348, 38834, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [38133, 38650, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [56168, 56653, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [49302, 49809, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [47279, 48008, null, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [43826, 45366, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [42499, 43585, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [41655, 43043, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [39710, 40015, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [35413, 35977, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [34333, 35186, null, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
  {
    data: [34236, 42526, null, null, null, null, null, null, null, null, null, null],
    label: 'maybe',
  },
];

langToProjects.PHP = [
  {
    data: [78974, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [59011, 61710, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [35025, 39084, null, null, null, null, null, null, null, null, null, null],
    label: 'coolify',
  },
  {
    data: [32713, 33374, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [30947, 30934, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29845, 30127, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [28669, 28900, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [27574, 29022, null, null, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [26796, 26795, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [23227, 23348, null, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [null, 22783, null, null, null, null, null, null, null, null, null, null],
    label: 'livewire',
  },
];

langToProjects['C++'] = [
  {
    data: [186680, 188889, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [119588, 121297, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [114615, 116139, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [95961, 97559, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [91597, 95656, null, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [80016, 82677, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [79439, 81396, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [70992, 72933, null, null, null, null, null, null, null, null, null, null],
    label: 'gpt4all',
  },
  {
    data: [68746, 77339, null, null, null, null, null, null, null, null, null, null],
    label: 'llama.cpp',
  },
  {
    data: [67692, 68281, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
];

langToProjects.Python = [
  {
    data: [319231, 334400, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [278280, 294882, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [226509, 238658, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [194883, 198883, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [168875, 173936, null, null, null, null, null, null, null, null, null, null],
    label: 'AutoGPT',
  },
  {
    data: [158474, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [143887, 150169, null, null, null, null, null, null, null, null, null, null],
    label: 'stable-diffusion-webui',
  },
  {
    data: [135869, 142120, null, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [132768, 134879, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [95125, 100460, null, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, 105904, null, null, null, null, null, null, null, null, null, null],
    label: 'yt-dlp',
  },
];

langToProjects.JavaScript = [
  {
    data: [406547, 414591, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [300072, 312756, null, null, null, null, null, null, null, null, null, null],
    label: 'developer-roadmap',
  },
  {
    data: [229915, 233840, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [208089, 208572, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [188740, 190764, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [171004, 171868, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [164989, 169290, null, null, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [145565, 146408, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [127547, 130658, null, null, null, null, null, null, null, null, null, null],
    label: 'next.js',
  },
  {
    data: [121989, null, null, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [null, 124798, null, null, null, null, null, null, null, null, null, null],
    label: 'tech-interview-handbook',
  },
];

langToProjects.Java = [
  {
    data: [101777, 111097, null, null, null, null, null, null, null, null, null, null],
    label: 'hello-algo',
  },
  {
    data: [90173, 91107, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [78319, 79699, null, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [76523, 77334, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [75550, 75786, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [75466, 76618, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [70929, 72151, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [63696, 64043, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [60227, 61179, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [56818, 57669, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [99198, 102336, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [98275, 102399, null, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [85974, 90996, null, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [77052, 84983, null, null, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [62582, 62385, null, null, null, null, null, null, null, null, null, null],
    label: 'sway',
  },
  {
    data: [57956, 57747, null, null, null, null, null, null, null, null, null, null],
    label: 'fuel-core',
  },
  {
    data: [56738, 58181, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [54735, 57257, null, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [53104, 53653, null, null, null, null, null, null, null, null, null, null],
    label: 'ChatGPT',
  },
  {
    data: [51056, 56332, null, null, null, null, null, null, null, null, null, null],
    label: 'zed',
  },
];

langToProjects.Kotlin = [
  {
    data: [49529, 50274, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [45943, 46251, null, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [44544, 44880, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [38713, 39397, null, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [36607, 39466, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayNG',
  },
  {
    data: [35289, 35572, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [30491, 30602, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [30397, 33420, null, null, null, null, null, null, null, null, null, null],
    label: 'legado',
  },
  {
    data: [29445, 29619, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [25717, 26631, null, null, null, null, null, null, null, null, null, null],
    label: 'Signal-Android',
  },
];

langToProjects.Scala = [
  {
    data: [62525, 63058, null, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm',
  },
  {
    data: [40115, 40834, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16533, 16492, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [15786, 16414, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [14358, 14369, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [13063, 13132, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12562, 12558, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [12542, 12529, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11844, 11892, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [11188, 11414, null, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [17029, 17445, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [8661, 8890, null, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [5583, 5725, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4222, 4254, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3944, 3954, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3155, 3198, null, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2785, 2890, null, null, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
  {
    data: [2576, 2593, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2232, 2229, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1902, 1910, null, null, null, null, null, null, null, null, null, null],
    label: 'job-dsl-plugin',
  },
];

langToProjects.Go = [
  {
    data: [133836, 140768, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [124423, 126815, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [111511, 114057, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [100767, 135260, null, null, null, null, null, null, null, null, null, null],
    label: 'ollama',
  },
  {
    data: [87206, 91992, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [79290, 81147, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [76273, 79109, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [68861, 69474, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [65983, 69013, null, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [65982, 68975, null, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
];

const githubProjects = [
  {
    data: [632595, 658781, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [936624, 980623, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1726980, 1784498, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4780971, 5036164, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3015596, 3233598, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [208343, 218723, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [156837, 162487, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [798836, 833232, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [398684, 400170, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [728123, 748775, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [215271, 227860, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [56542, 57318, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [422141, 441739, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [16789, 16902, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [215671, 233043, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [2020, 2121, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2724, 2863, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3575, 3634, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [10967, 11385, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [7973, 8518, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [1122, 1142, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78, 80, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1523, 1591, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [964, 971, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1417, 1433, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [679, 720, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [179, 179, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [3191, 3322, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [22, 23, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1442, 1538, null, null, null, null, null, null, null, null, null, null],
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
