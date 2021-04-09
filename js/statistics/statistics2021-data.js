/* eslint-disable max-len */

const labels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];
const lastYearLabels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 10, 13, 11, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 13, 11, 10, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 15, 14, 13, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 8, null, null, null, null, null, null, null, null],
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
    data: [14, 11, 10, 12, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 26, 36, 48, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [1, 1, 1, 1, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2, 2, 2, 2, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [13, 15, 19, 15, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [9, 11, 13, 16, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 14, 16, 13, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 9, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [40, 39, 31, 39, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [34, 36, 32, 26, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 13, 11, 14, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [10, 12, 15, 17, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [26, 30, 27, 29, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [349166, 351245, 353313, 355914, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [708265, 711620, 715562, 720193, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1744895, 1751194, 1758256, 1768017, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2151402, 2165827, 2180672, 2199899, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1626702, 1646359, 1667455, 1695285, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [286708, 288754, 291027, 293771, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [383059, 386948, 391252, 397074, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1457609, 1462272, 1467252, 1473733, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [217362, 217836, 218291, 218834, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1387265, 1390814, 1394345, 1399411, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [51529, 52711, 53972, 55625, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [102271, 102653, 103134, 103749, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [51038, 51520, 52123, 52949, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [26308, 26421, 26548, 26740, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19914, 20325, 20746, 21376, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6837, 6878, 6982, 7037, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6837, 6878, 6982, 7037, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [93281, 93238, 90042, 89926, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [110647, 109868, 107299, 107229, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [39757, 39808, 39905, 39968, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2448, 2446, 2443, 2443, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35237, 35038, 35100, 35237, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6678, 6675, 6681, 6679, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22946, 23087, 23255, 22800, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4927, 4939, 4972, 4984, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [19376, 19448, 19516, 19662, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7465, 7466, 7470, 7494, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [807, 816, 827, 837, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1138, 1151, 1161, 1169, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [116009, 116039, 116853, 117190, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [116009, 116039, 116853, 117190, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1725177, 1725335, 1708391, 1706961, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4588849, 4593279, 4596784, 4595652, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2492592, 2505917, 2504923, 2518049, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [199046, 196886, 197243, 199107, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [605710, 611912, 615049, 613919, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [794699, 792349, 788019, 787663, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1177317, 1179224, 1178315, 1176237, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [145079, 144672, 145726, 143506, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [469340, 470605, 469219, 473722, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [200778, 202049, 201014, 201131, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [32733, 32893, 32987, 33102, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [75666, 75825, 76538, 76722, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 13, 13, 13, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 13, 13, 13, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [90, 89, 87, 86, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [136, 134, 133, 132, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, 46, 46, 46, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, 6, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 33, 33, 33, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, 15, 15, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [33, 33, 33, 33, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, 6, 6, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [22, 22, 22, 22, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [9, 9, 9, 9, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, 2, 2, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 5, 5, 5, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [225, 225, 225, 226, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [225, 225, 225, 226, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2011, 1997, 1975, 1949, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5091, 5053, 5041, 4991, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2405, 2420, 2424, 2408, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [303, 302, 303, 304, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [821, 821, 817, 813, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [737, 732, 724, 710, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1849, 1841, 1826, 1812, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [253, 249, 250, 246, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [581, 576, 575, 569, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [330, 328, 325, 324, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [51, 50, 49, 48, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [212, 211, 207, 206, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [103694, 104919, 106324, 108702, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [152411, 153081, 153803, 154715, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [95455, 96732, 98821, 101507, null, null, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [318572, 319440, 321369, 322615, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [118554, 120568, 123083, 125974, null, null, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [36434, 36647, 36840, 37050, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4767, 4799, 4833, 4880, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [48421, 50212, 51284, 52711, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [47379, 47545, 47725, 48137, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [63405, 63780, 64158, 64653, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [38045, 38178, 38338, 38531, null, null, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [28527, 28739, 28996, 29307, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [80861, 81733, 83040, 84274, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [11368, 11440, 11543, 11655, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [254690, 255273, 255667, 256359, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4767, 4799, 4833, 4880, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [4407, 4444, 4466, 4523, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4097, 4137, 4177, 4213, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3620, 3653, 3683, 3717, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3583, 3585, 3588, 3597, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3561, 3585, 3604, 3641, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3295, 3311, 3319, 3325, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [2689, 2741, 2778, 2850, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [2265, 2321, 2368, 2410, null, null, null, null, null, null, null, null],
    label: 'bookdown',
  },
  {
    data: [2163, 2184, 2220, 2266, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [36434, 36647, 36840, 37050, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [35077, 35194, 35331, 35494, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [28963, 29086, 29193, 29307, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [25938, 26200, 26432, 26684, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [25936, 26164, 26657, 26916, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [24305, 24500, 25462, 25683, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [24188, 24317, 24462, 24673, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [23781, 23880, 23992, 24116, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [20912, 21020, 21133, 21288, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [20241, 20313, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
  {
    data: [null, null, 20420, 20573, null, null, null, null, null, null, null, null],
    label: 'awesome-swift',
  },
];

langToProjects['C#'] = [
  {
    data: [51357, 51585, 51812, 51997, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [48421, 50212, 51284, 52711, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [23819, 24166, 24742, 25619, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [23134, 23149, 23185, 23216, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [20677, 20959, 21337, 21764, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [19400, 19565, 19729, 19913, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [17084, 17757, 18521, 19363, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [17060, 17334, 17574, 17833, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [16320, 16590, 16873, 17217, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [15677, 15767, 15918, 16040, null, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
];

langToProjects.C = [
  {
    data: [103694, 104919, 106324, 108702, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [51070, 51343, 51727, 52144, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [46964, 47360, 47761, 48324, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [42808, 44419, 45608, 47005, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [35602, 35864, 36880, 37552, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [29239, 29383, 29557, 30367, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [28039, 28181, 28349, 28525, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [27315, 27534, 27832, 28761, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [24758, 25809, 26576, 27183, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [22972, 23396, 23760, 24211, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [47379, 47545, 47725, 48137, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [41998, 42141, 42329, 42502, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [32347, 32547, 32759, 33019, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [30885, 31283, 31452, 31649, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [30602, 30794, 30974, 31246, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [27097, 27176, 27290, 27467, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [25320, 26646, 27078, 27501, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [24689, 24882, 25134, 25409, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [23327, 23660, 23815, 24024, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [22870, 23076, 23315, 23636, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [63405, 63780, 64158, 64653, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30930, 30956, 30993, 31011, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29335, 29776, 30260, 30841, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [25480, 25557, 25631, 25727, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24602, 24725, 24852, 25018, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [24492, 24623, 24738, 25044, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22942, 23381, 23552, 23749, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [20381, 20489, 20579, 20700, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [19288, 19343, 19393, 19500, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [18287, 18387, 18485, 18617, null, null, null, null, null, null, null, null],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [152411, 153081, 153803, 154715, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [88718, 89219, 90632, 91181, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [70818, 71756, 72402, 73082, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [54777, 54976, 55281, 55672, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [51609, 52230, 52779, 53562, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [48421, 50216, 51285, 52714, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [47883, 48863, 50375, 51815, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [45831, 46273, 46634, 47352, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [45458, 46070, 46693, 47433, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [38213, 38649, 39003, 39460, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [118554, 120568, 123083, 125974, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [107836, 109791, 112209, 116662, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [98262, 99351, 100314, 101479, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [97269, 99564, 100705, 102005, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [92458, 93784, 94673, 95703, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [87774, 89758, 91148, 92778, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [67922, 68587, 68951, 69413, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [58373, 58829, 59192, 59709, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [54911, 55455, 56031, 56666, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [50509, null, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
  {
    data: [null, 53802, 54122, 54444, null, null, null, null, null, null, null, null],
    label: 'flask',
  },
];

langToProjects.JavaScript = [
  {
    data: [318572, 319440, 321369, 322615, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [178053, 179231, 180298, 181761, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [162059, 163396, 164740, 166642, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [146411, 148092, 148645, 149229, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [103702, 104443, 106195, 107389, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [95271, 95620, 96040, 96411, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [92839, 95660, 99004, 102870, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [92744, 93244, 93763, 94646, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [85219, 85815, 86438, 87107, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [80695, 81469, 82335, 83297, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
];

langToProjects.Java = [
  {
    data: [95455, 96732, 98821, 101507, null, null, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [62972, 63905, 64532, 65088, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [62052, 62482, 63014, 63758, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [53145, 53622, 53975, 54414, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [52921, 53388, 53863, 54437, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [51214, 51843, 52561, 53339, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [49681, 50044, 50392, 50849, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [45483, 46260, 46983, 48109, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [44082, 44220, 44308, 44443, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41040, 41391, 41732, 42218, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [254690, 255273, 255667, 256359, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [51028, 52044, 52817, 53718, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [29295, 29747, 30221, 30758, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [24690, 25119, 25594, 26050, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [23315, 23691, 24041, 24487, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [18961, 19104, 19227, 19391, null, null, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [18520, 18533, 18562, 18621, null, null, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [18244, 18568, 19025, 19438, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [16062, 16331, 16583, 16914, null, null, null, null, null, null, null, null],
    label: 'fd',
  },
  {
    data: [15582, null, null, null, null, null, null, null, null, null, null, null],
    label: 'diem',
  },
  {
    data: [null, 72236, 73163, 74245, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
];

langToProjects.Kotlin = [
  {
    data: [38045, 38178, 38338, 38531, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30875, 31017, 31141, 31289, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [25660, 25737, 25843, 25952, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [24324, 24544, 24741, 24993, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [20266, 20304, 20324, 20351, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [19212, 19402, 19595, 19820, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [18479, 18566, 18608, 18678, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [16355, 16451, 16517, 16618, null, null, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
  {
    data: [15901, 15905, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15852, null, null, 15956, null, null, null, null, null, null, null, null],
    label: 'plaid',
  },
  {
    data: [null, 20060, 20322, 20791, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [null, null, 16428, null, null, null, null, null, null, null, null, null],
    label: 'Magisk',
  },
];

langToProjects.Scala = [
  {
    data: [28527, 28739, 28996, 29307, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16883, 16874, 16863, 16858, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [13089, 13108, 13152, 13223, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12477, 12480, 12507, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11777, 11798, 11826, 11852, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11318, 11370, 11416, 11489, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [9697, 9797, 9879, 9949, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [8235, 8270, 8313, 8347, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [8068, 8288, 8504, 8745, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [7848, 7877, 7896, 7929, null, null, null, null, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [null, null, null, 12510, null, null, null, null, null, null, null, null],
    label: 'attic-predictionio',
  },
];

langToProjects.Groovy = [
  {
    data: [11368, 11440, 11543, 11655, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [4088, 4115, 4137, 4173, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3557, 3589, 3604, 3630, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3194, 3229, 3263, 3318, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2629, 2669, 2689, 2743, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2332, 2354, 2383, 2425, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2225, 2224, 2227, 2228, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1861, 1866, 1874, 1874, null, null, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1852, 1877, 1946, 2021, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1428, 1428, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
  {
    data: [null, null, 1449, 1535, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
];

langToProjects.Go = [
  {
    data: [80861, 81733, 83040, 84274, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [73528, 74204, 74991, 76042, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [60736, 61456, 62514, 63336, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [59362, 59559, 59772, 59986, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [49420, 49940, 50493, 51135, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [44831, 45531, 46237, 47099, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [42284, 43011, 43600, 44456, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [36662, 36897, 37071, 37359, null, null, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [36237, 36459, 36664, 36931, null, null, null, null, null, null, null, null],
    label: 'v2ray-core',
  },
  {
    data: [36212, 36396, 36535, 36766, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
];

const githubProjects = [
  {
    data: [331843, 336200, 340839, 346675, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [453462, 460825, 468514, 478498, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [980248, 991761, 1004414, 1000738, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1738982, 1692670, 1725181, 1831232, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1130164, 1269337, 1260962, 1314334, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [115799, 117342, 118922, 121060, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78714, 80181, 81811, 83817, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [357832, 372489, 380313, 389569, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [339019, 340500, 342160, 344125, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [464686, 469192, 474310, 480033, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [68429, 70485, 72890, 75971, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [44872, 45119, 45410, 45725, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [204238, 207679, 211299, 215673, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [13764, 13821, 13878, 13941, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [62012, 63696, 65585, 67910, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1077, 1094, 1088, 1117, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1337, 1367, 1402, 1433, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2653, 2673, 2686, 2708, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5591, 5613, 5670, 5705, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3414, 3471, 3545, 3630, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [764, 774, 782, 791, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [44, 45, 46, 47, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [701, 715, 730, 753, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [796, 798, 804, 810, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1049, 1056, 1066, 1081, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [256, 260, 270, 282, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [144, 145, 145, 145, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1717, 1746, 1768, 1799, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, 20, 20, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [380, 386, 394, 408, null, null, null, null, null, null, null, null],
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
