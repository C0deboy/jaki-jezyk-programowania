/* eslint-disable max-len */

const labels = ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12'];
const lastYearLabels = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12'];

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
    data: [3, 3, 3, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [12, 12, 14, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [13, 13, 11, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 16, 16, null, null, null, null, null, null, null, null, null],
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
    data: [11, 11, 13, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [24, 24, 26, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, 4, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, 3, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 20, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, 16, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 16, 18, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [10, 10, 9, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33, 33, 35, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [35, 35, 38, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, 11, 10, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31, 31, 34, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [20, 20, 19, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [392860, 393679, 394690, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [788053, 789423, 791404, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1886498, 1889249, 1892661, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2473613, 2478849, 2485882, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2102250, 2111196, 2121996, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [324382, 325073, 325977, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [480215, 482644, 485636, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1580329, 1583165, 1586634, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [227275, 227452, 227635, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1455238, 1456118, 1457317, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [84743, 85524, 86503, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [110815, 110965, 111137, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [67466, 67871, 68427, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [29414, 29478, 29577, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [34390, 34939, 35606, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [7014, 7038, 7082, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [7014, 7038, 7082, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [77831, 78123, 76239, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [91924, 92229, 91289, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [40389, 40787, 41002, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2558, 2557, 2575, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35333, 35444, 35758, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6290, 6300, 6316, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [19275, 19332, 19417, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [5779, 5849, 5883, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18170, 18250, 18289, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [4908, 4919, 4952, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [788, 795, 797, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1427, 1446, 1453, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [129900, 130562, 128810, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [129900, 130562, 128810, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1279198, 1259624, 1232847, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3559001, 3500098, 3435480, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2662314, 2674448, 2668931, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [156636, 153735, 151871, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [637102, 640031, 643846, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [745091, 742119, 736588, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [902142, 881326, 871020, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [162645, 163542, 164465, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [374246, 370547, 359270, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [248301, 246825, 246326, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41456, 41544, 40687, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [94371, 94420, 95151, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [17, 17, 17, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [17, 17, 17, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [64, 64, 64, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [103, 102, 100, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [48, 49, 48, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33, 34, 35, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [12, 12, 12, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [26, 26, 25, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [9, 9, 9, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [17, 17, 17, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [8, 8, 8, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 5, 4, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [231, 233, 235, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [231, 233, 235, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1431, 1406, 1376, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3522, 3462, 3379, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2275, 2279, 2272, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [211, 209, 204, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [690, 690, 692, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [591, 585, 579, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1361, 1334, 1311, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [237, 245, 246, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [425, 421, 411, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [322, 317, 313, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [44, 44, 43, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [220, 224, 229, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [145763, 146985, 148663, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [170943, 171642, 172516, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [null, null, 108581, null, null, null, null, null, null, null, null, null],
    label: 'react-native (Java)',
  },
  {
    data: [360708, 362031, 363680, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [227174, 229421, 232228, null, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [41782, 42078, 42383, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [5768, 5797, 5842, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [86213, 87178, 88606, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [52262, 52366, 52557, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [72241, 72631, 72976, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [43845, 44026, 44250, null, null, null, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [34928, 35095, 35336, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [108272, 108911, 109705, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [14336, 14414, 14486, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [87717, 88178, 88683, null, null, null, null, null, null, null, null, null],
    label: 'deno (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [5768, 5797, 5842, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [5353, 5381, 5416, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4904, 4941, 4966, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4336, 4377, 4401, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4015, 4027, 4043, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3980, 3995, 4014, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [3635, 3638, 3637, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3474, 3480, 3485, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3219, 3240, 3258, null, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
  {
    data: [2929, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
  {
    data: [null, 3869, 3902, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
];

langToProjects.Swift = [
  {
    data: [41782, 42078, 42383, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [38902, 38997, 39124, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [32399, 32596, 32841, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [30973, 31081, 31228, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [27361, 27444, 27556, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [26388, 26494, 26567, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [23688, 23761, 23839, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [23133, 23176, 23228, null, null, null, null, null, null, null, null, null],
    label: 'RxSwift',
  },
  {
    data: [22475, 22539, 22635, null, null, null, null, null, null, null, null, null],
    label: 'vapor',
  },
  {
    data: [22308, 22992, 23933, null, null, null, null, null, null, null, null, null],
    label: 'clashX',
  },
];

langToProjects['C#'] = [
  {
    data: [86213, 87178, 88606, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [55740, 55882, 56116, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [37062, 37302, 37679, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [36755, 38119, 39902, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [30860, 31024, 31292, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [26151, 26377, 26867, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [23121, 23367, 23728, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [23039, 23028, 23024, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [22626, 22677, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [22607, 22757, 22987, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [null, null, 22812, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
];

langToProjects.C = [
  {
    data: [145763, 146985, 148663, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [76306, 77255, 80054, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [61861, 62137, 62419, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [58386, 58683, 59127, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [45395, 45965, 46475, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [45129, 45379, 45708, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [44919, 45846, 47032, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [34979, 35067, 35211, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [33943, 34294, 35088, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [33786, 33921, 34128, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [52262, 52366, 52557, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [46022, 46128, 46338, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [39963, 40499, 40906, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [37518, 37727, 37927, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [37296, 37425, 37617, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [36407, 36617, 36784, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [34822, 35141, 35501, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [30718, 30885, 31132, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [29833, 29877, 29980, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [29382, 29591, 29830, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [72241, 72631, 72976, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [44665, 45068, 45596, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [31060, 31054, 31046, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [28827, 29018, 29215, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [27987, 28048, 28143, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [27335, 27398, 27498, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [26682, 26703, 26708, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22351, 22383, 22444, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [21476, 21633, 21870, null, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [21114, 21133, 21186, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
];

langToProjects['C++'] = [
  {
    data: [170943, 171642, 172516, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [105783, 106082, 106511, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [87450, 87751, 88152, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [68091, 68411, 68796, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [66285, 66774, 67558, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [62435, 63167, 64467, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [61752, 61940, 62148, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [57999, 58307, 58724, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [57520, 58231, 59776, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [48958, 49358, 49943, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [227174, 229421, 232228, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [210676, 212502, 215320, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [155890, 158378, 161150, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [152110, 154038, 155980, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [130223, 131275, 132139, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [117140, 118117, 119080, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [79846, 82789, 88163, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [75602, 75964, 76590, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [68607, 69011, 69536, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [64614, 65405, 66615, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
];

langToProjects.JavaScript = [
  {
    data: [360708, 362031, 363680, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [202179, 202505, 202949, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [201593, 202977, 204767, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [162624, 163916, 165533, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [161680, 162068, 162579, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [142241, 143062, 144191, null, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [131375, 131797, 132633, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [107491, 107890, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [107437, 108143, 109198, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [104301, 104500, 104842, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [null, null, 103219, null, null, null, null, null, null, null, null, null],
    label: 'next.js',
  },
];

langToProjects.Java = [
  {
    data: [79636, 80015, 80470, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [72281, 72397, 72665, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [68433, 68788, 69309, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [65430, 65793, 66330, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [63388, 63794, 64422, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [62606, 62852, 63167, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [59146, 59281, 59428, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [50645, 50881, 51235, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [50117, 50476, 50872, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [46811, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [null, 46850, null, null, null, null, null, null, null, null, null, null],
    label: 'guava',
  },
  {
    data: [null, null, 108581, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
];

langToProjects.Rust = [
  {
    data: [87717, 88178, 88683, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [77444, 78284, 79525, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [58406, 59574, 61366, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [44502, 45074, 45692, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [39458, 39860, 40327, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [36793, 38717, 39813, null, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [35668, 36268, 36840, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [34203, 34894, 36307, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [32451, 34022, 34949, null, null, null, null, null, null, null, null, null],
    label: 'meilisearch',
  },
  {
    data: [32339, 32848, null, null, null, null, null, null, null, null, null, null],
    label: 'starship',
  },
  {
    data: [null, null, 33482, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
];

langToProjects.Kotlin = [
  {
    data: [43845, 44026, 44250, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [43501, 43611, 43726, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [42177, 42302, 42442, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [33322, 33405, 33521, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [28758, 28831, 28959, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [28642, 29102, 29731, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [28200, 28249, 28333, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [22576, 22613, 22679, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [21731, 21727, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [20835, 21308, 21742, null, null, null, null, null, null, null, null, null],
    label: 'tachiyomi',
  },
  {
    data: [null, null, 22166, null, null, null, null, null, null, null, null, null],
    label: 'ClashForAndroid',
  },
];

langToProjects.Scala = [
  {
    data: [34928, 35095, 35336, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16747, 16737, 16719, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [14008, 14022, 14038, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12694, 12763, 12907, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [12599, 12619, 12645, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12546, 12545, 12555, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12313, 12327, 12345, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11214, 11250, 11302, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [9322, 9471, 9567, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
  {
    data: [8846, 8860, 8877, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
];

langToProjects.Groovy = [
  {
    data: [14336, 14414, 14486, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [6573, 6671, 6774, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [4836, 4856, 4892, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4013, 4024, 4034, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3807, 3815, 3826, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3165, 3191, 3220, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2665, 2690, 2726, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2453, 2460, 2470, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2233, 2234, 2235, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1952, 1966, 1988, null, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
];

langToProjects.Go = [
  {
    data: [108272, 108911, 109705, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [95902, 97176, 98833, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [95649, 96209, 96937, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [66251, 66785, 67563, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [65151, 65608, 66162, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [65087, 65220, 65577, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [64055, 64721, 65746, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [49700, 50087, 51170, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [49196, 49776, 50246, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [46619, 46909, 47370, null, null, null, null, null, null, null, null, null],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [471426, 475049, 491662, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [624074, 649093, 693299, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1157894, 1198543, 1315016, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2123257, 2123029, 2239191, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1695961, 1735727, 1973959, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [159207, 160863, 170192, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [115530, 116845, 122787, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [539913, 540468, 590184, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [365515, 368428, 383082, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [565941, 563295, 586687, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [139037, 141689, 154368, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [51126, 51380, 52952, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [304061, 308786, 330528, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15255, 15329, 15848, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [125337, 128433, 139630, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1599, 1610, 1625, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2003, 2022, 2053, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3156, 3170, 3188, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [8750, 8828, 8957, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [5251, 5320, 5441, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [957, 966, 974, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [61, 63, 65, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1126, 1144, 1168, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [888, 892, 898, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1244, 1245, 1253, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [450, 457, 464, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [168, 168, 168, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2509, 2531, 2568, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, 21, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [852, 876, 902, null, null, null, null, null, null, null, null, null],
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
