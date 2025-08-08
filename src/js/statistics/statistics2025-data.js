/* eslint-disable max-len */

const labels = ['2025-01', '2025-04', '2025-08', '2025-12'];
const lastYearLabels = ['2024-01', '2024-04', '2024-08', '2024-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 3, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, 2, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, 4, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [17, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [19, 21, 19, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [7, 12, 13, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [15, 19, 18, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [13, 8, 9, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [20, 17, 14, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [4, 4, 3, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3, 3, 4, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 26, 25, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 16, 14, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [17, 21, 26, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [12, 13, 15, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [20, 19, 19, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [30, 28, 33, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7, 7, 8, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14, 14, 18, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [407718, 408898, 409432, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [814113, 816570, 817754, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1922448, 1924284, 1924046, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2537142, 2537746, 2535688, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2217394, 2222936, 2222403, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [336320, 337187, 337251, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [510804, 512026, 512336, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1625462, 1627924, 1627785, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [229379, 229453, 229441, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1469533, 1469979, 1468178, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [98180, 98850, 98974, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [112793, 112886, 112910, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [74353, 74811, 74919, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [30380, 30442, 30441, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [43019, 43785, 44168, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6562, 5691, 6129, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6562, 5691, 6129, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [55733, 55321, 55151, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [77257, 77535, 78679, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38476, 38293, 39271, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2226, 2228, 1160, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [31048, 33370, 32317, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [5850, 4225, 4292, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [17955, 17389, 17547, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [9510, 9600, 9939, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [9375, 9490, 9129, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1833, 1906, 448, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [844, 850, 877, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [2053, 2119, 2408, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [125996, 128557, 130744, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [125996, 128557, 130744, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [798898, 761436, 702080, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3106122, 3105111, 3104679, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2521639, 2489865, 2425413, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [75287, 68658, 62461, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [617017, 618218, 628980, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [637166, 616552, 584958, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [539291, 513718, 489501, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [181479, 183691, 192450, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [248643, 230530, 222014, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [159394, 154038, 144357, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41786, 37410, 37935, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [117505, 118114, 123252, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [10, 9, 10, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [10, 9, 10, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [44, 43, 40, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [69, 66, 63, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, 37, 37, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [4, 4, 3, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [21, 21, 20, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [10, 9, 9, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [16, 15, 15, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [10, 9, 9, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [10, 10, 9, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [3, 3, 2, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [6, 6, 7, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [198, 194, 192, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [198, 194, 192, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [954, 880, 785, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2762, 2666, 2522, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2038, 1966, 1842, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [134, 124, 117, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [564, 540, 522, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [472, 449, 424, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [866, 821, 760, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [222, 215, 208, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [276, 249, 229, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [179, 167, 154, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41, 36, 36, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [227, 219, 201, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [183689, 190551, 199208, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [186680, 188889, 191104, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [101777, 111097, 115245, null, null, null, null, null, null, null, null, null],
    label: 'hello-algo (Java)',
  },
  {
    data: [406547, 414591, 425337, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [null, null, 364681, null, null, null, null, null, null, null, null, null],
    label: 'free-programming-books (Python)',
  },
  {
    data: [47518, 48571, 49566, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [6473, 6646, 6805, null, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends (R)',
  },
  {
    data: [111925, 116695, 121945, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [56168, 56653, 57246, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [78974, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [null, null, 54998, null, null, null, null, null, null, null, null, null],
    label: 'Magisk (Kotlin)',
  },
  {
    data: [62525, 63058, 63469, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm (Scala)',
  },
  {
    data: [100767, 135260, 149566, null, null, null, null, null, null, null, null, null],
    label: 'ollama (Go)',
  },
  {
    data: [17029, 17445, 17921, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [99198, 102336, 105598, null, null, null, null, null, null, null, null, null],
    label: 'rust (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [6550, 6643, 6750, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [6473, 6646, 6805, null, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends',
  },
  {
    data: [6036, 6123, 6258, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [5381, 5451, 5513, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4790, 4850, 4919, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4597, 4730, 4848, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [4331, 4390, 4453, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [4111, 4110, 4108, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [3666, 3679, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3628, 3710, 3763, null, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
  {
    data: [null, null, 3807, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [47518, 48571, 49566, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [41315, 41788, 42048, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [38487, 39847, 41428, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [32488, 32678, 32809, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [28851, 28994, 29087, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [28261, 29422, 30785, null, null, null, null, null, null, null, null, null],
    label: 'MonitorControl',
  },
  {
    data: [27634, 27793, 27928, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [27300, 28671, 30405, null, null, null, null, null, null, null, null, null],
    label: 'UTM',
  },
  {
    data: [26427, 30234, 32964, null, null, null, null, null, null, null, null, null],
    label: 'stats',
  },
  {
    data: [26085, 26686, 27403, null, null, null, null, null, null, null, null, null],
    label: 'Rectangle',
  },
];

langToProjects['C#'] = [
  {
    data: [111925, 116695, 121945, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [70976, 77331, 84553, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [58499, 58717, 58956, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [45736, 46878, 48151, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [35604, 36348, 36944, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [35569, 38283, 42496, null, null, null, null, null, null, null, null, null],
    label: 'jellyfin',
  },
  {
    data: [34865, 36626, 38040, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [30193, 32048, 33944, null, null, null, null, null, null, null, null, null],
    label: 'RevokeMsgPatcher',
  },
  {
    data: [29942, 31670, 33237, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [27542, 28367, 29609, null, null, null, null, null, null, null, null, null],
    label: 'DevToys',
  },
];

langToProjects.C = [
  {
    data: [183689, 190551, 199208, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [113659, 119788, 126240, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [72359, 73925, 75372, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [67247, 68503, 70361, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [63287, 65717, 69697, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [60692, 63151, 66086, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [52769, 54057, 55943, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [46484, 48740, 51933, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [38348, 38834, 39331, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [38133, 38650, 39357, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [56168, 56653, 57246, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [49302, 49809, 50429, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [47279, 48008, 48846, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [43826, 45366, 46995, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [42499, 43585, 44736, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [41655, 43043, 44468, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [39710, 40015, 40386, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [35413, 35977, 36825, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [34333, 35186, 36103, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
  {
    data: [34236, 42526, 52836, null, null, null, null, null, null, null, null, null],
    label: 'maybe',
  },
];

langToProjects.PHP = [
  {
    data: [78974, null, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [59011, 61710, 64749, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [35025, 39084, 44090, null, null, null, null, null, null, null, null, null],
    label: 'coolify',
  },
  {
    data: [32713, 33374, 33934, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [30947, 30934, 30892, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29845, 30127, 30475, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [28669, 28900, 29057, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [27574, 29022, 30404, null, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [26796, 26795, 26772, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [23227, 23348, 23403, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [null, 22783, null, null, null, null, null, null, null, null, null, null],
    label: 'livewire',
  },
  {
    data: [null, null, 25339, null, null, null, null, null, null, null, null, null],
    label: 'filament',
  },
];

langToProjects['C++'] = [
  {
    data: [186680, 188889, 191104, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [119588, 121297, 123326, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [114615, 116139, 117796, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [95961, 97559, 99121, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [91597, 95656, 99707, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [80016, 82677, 84931, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [79439, 81396, 83425, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [70992, 72933, 73983, null, null, null, null, null, null, null, null, null],
    label: 'gpt4all',
  },
  {
    data: [68746, 77339, 84328, null, null, null, null, null, null, null, null, null],
    label: 'llama.cpp',
  },
  {
    data: [67692, 68281, 68934, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
];

langToProjects.Python = [
  {
    data: [319231, 334400, 360395, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [278280, 294882, 314694, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [226509, 238658, 254033, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [194883, 198883, 203811, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [168875, 173936, 177608, null, null, null, null, null, null, null, null, null],
    label: 'AutoGPT',
  },
  {
    data: [158474, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [143887, 150169, 155367, null, null, null, null, null, null, null, null, null],
    label: 'stable-diffusion-webui',
  },
  {
    data: [135869, 142120, 148087, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [132768, 134879, 136796, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [95125, 100460, 124255, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, 105904, null, null, null, null, null, null, null, null, null, null],
    label: 'yt-dlp',
  },
  {
    data: [null, null, 364681, null, null, null, null, null, null, null, null, null],
    label: 'free-programming-books',
  },
];

langToProjects.JavaScript = [
  {
    data: [406547, 414591, 425337, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [300072, 312756, 333340, null, null, null, null, null, null, null, null, null],
    label: 'developer-roadmap',
  },
  {
    data: [229915, 233840, 237951, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [208089, 208572, 209243, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [188740, 190764, 192929, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [171004, 171868, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [164989, 169290, 175502, null, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [145565, 146408, 147243, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [127547, 130658, 133683, null, null, null, null, null, null, null, null, null],
    label: 'next.js',
  },
  {
    data: [121989, null, null, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [null, 124798, 128363, null, null, null, null, null, null, null, null, null],
    label: 'tech-interview-handbook',
  },
  {
    data: [null, null, 132183, null, null, null, null, null, null, null, null, null],
    label: 'awesome-chatgpt-prompts',
  },
];

langToProjects.Java = [
  {
    data: [101777, 111097, 115245, null, null, null, null, null, null, null, null, null],
    label: 'hello-algo',
  },
  {
    data: [90173, 91107, 92444, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [78319, 79699, 81224, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [76523, 77334, 78064, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [75550, 75786, 76366, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [75466, 76618, 78041, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [70929, 72151, 73475, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [63696, 64043, 64341, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [60227, 61179, 62642, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [56818, 57669, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [null, null, 64147, null, null, null, null, null, null, null, null, null],
    label: 'Stirling-PDF',
  },
];

langToProjects.Rust = [
  {
    data: [99198, 102336, 105598, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [98275, 102399, 103816, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [85974, 90996, 95350, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [77052, 84983, 95329, null, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [62582, 62385, 62151, null, null, null, null, null, null, null, null, null],
    label: 'sway',
  },
  {
    data: [57956, 57747, null, null, null, null, null, null, null, null, null, null],
    label: 'fuel-core',
  },
  {
    data: [56738, 58181, 59837, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [54735, 57257, 59550, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [53104, 53653, null, null, null, null, null, null, null, null, null, null],
    label: 'ChatGPT',
  },
  {
    data: [51056, 56332, 63582, null, null, null, null, null, null, null, null, null],
    label: 'zed',
  },
  {
    data: [null, null, 73655, null, null, null, null, null, null, null, null, null],
    label: 'union',
  },
  {
    data: [null, null, 64107, null, null, null, null, null, null, null, null, null],
    label: 'uv',
  },
];

langToProjects.Kotlin = [
  {
    data: [49529, 50274, 51059, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [45943, 46251, 46568, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [44544, 44880, 45224, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [38713, 39397, 40217, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [36607, 39466, 43551, null, null, null, null, null, null, null, null, null],
    label: 'v2rayNG',
  },
  {
    data: [35289, 35572, 35975, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [30491, 30602, 30707, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [30397, 33420, 38690, null, null, null, null, null, null, null, null, null],
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
  {
    data: [null, null, 54998, null, null, null, null, null, null, null, null, null],
    label: 'Magisk',
  },
  {
    data: [null, null, 30079, null, null, null, null, null, null, null, null, null],
    label: 'gkd',
  },
];

langToProjects.Scala = [
  {
    data: [62525, 63058, 63469, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm',
  },
  {
    data: [40115, 40834, 41624, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16533, 16492, 16464, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [15786, 16414, 16953, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [14358, 14369, 14399, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [13063, 13132, 13196, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12562, 12558, 12578, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [12542, 12529, 12528, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11844, 11892, 11924, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [11188, 11414, 11670, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [17029, 17445, 17921, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [8661, 8890, 9143, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [5583, 5725, 5860, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4222, 4254, 4269, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3944, 3954, 3968, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3155, 3198, 3246, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2785, 2890, 3094, null, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
  {
    data: [2576, 2593, 2609, null, null, null, null, null, null, null, null, null],
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
  {
    data: [null, null, 14071, null, null, null, null, null, null, null, null, null],
    label: 'doris',
  },
  {
    data: [null, null, 2834, null, null, null, null, null, null, null, null, null],
    label: 'grails-core',
  },
];

langToProjects.Go = [
  {
    data: [133836, 140768, 149382, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [124423, 126815, 129283, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [111511, 114057, 116781, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [100767, 135260, 149566, null, null, null, null, null, null, null, null, null],
    label: 'ollama',
  },
  {
    data: [87206, 91992, 97027, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [79290, 81147, 83480, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [76273, 79109, 82720, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [68861, 69474, 70448, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [65983, 69013, 72668, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [65982, 68975, 74211, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
];

const githubProjects = [
  {
    data: [632595, 658781, 686583, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [936624, 980623, 1028905, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1726980, 1784498, 1850329, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4780971, 5036164, 5366385, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3015596, 3233598, 3508794, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [208343, 218723, 226167, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [156837, 162487, 169621, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [798836, 833232, 869612, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [398684, 400170, 401948, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [728123, 748775, 771416, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [215271, 227860, 240073, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [56542, 57318, 57792, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [422141, 441739, 465445, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [16789, 16902, 17077, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [215671, 233043, 255489, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [2020, 2121, 2220, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2724, 2863, 2993, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3575, 3634, 3706, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [10967, 11385, 11900, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [7973, 8518, 9170, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [1122, 1142, 1177, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78, 80, 82, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1523, 1591, 1679, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [964, 971, 986, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1417, 1433, 1460, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [679, 720, 781, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [179, 179, 180, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [3191, 3322, 3481, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [22, 23, 25, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1442, 1538, 1654, null, null, null, null, null, null, null, null, null],
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
