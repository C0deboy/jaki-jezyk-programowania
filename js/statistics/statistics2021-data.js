/* eslint-disable max-len */

const labels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];
const lastYearLabels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, 1, 1, 1, 1, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, 2, 2, 2, 2, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, 7, 7, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 10, 13, 11, 11, 11, 10, 12, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 13, 11, 10, 10, 9, 8, 8, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 5, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 15, 14, 13, 15, 13, 16, 15, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 8, 8, 8, 9, 9, null, null, null, null],
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
    data: [14, 11, 10, 12, 12, 12, 12, 11, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 26, 36, 48, 38, 31, 24, 18, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2, 2, 2, 2, 3, 3, 2, 3, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, 7, 7, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, 2, 2, 3, 2, null, null, null, null],
    label: 'Python',
  },
  {
    data: [13, 15, 19, 15, 18, 16, 16, 16, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [9, 11, 13, 16, 13, 14, 12, 14, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 5, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 14, 16, 13, 11, 13, 17, 15, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 9, 9, 8, 8, 8, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [40, 39, 31, 39, 35, 34, 38, 37, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [34, 36, 32, 26, 32, 37, 36, 32, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 13, 11, 14, 16, 20, 13, 18, null, null, null, null],
    label: 'Go',
  },
  {
    data: [10, 12, 15, 17, 14, 12, 15, 11, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [26, 30, 27, 29, 24, 30, 27, 24, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [349166, 351245, 353313, 355914, 358901, 360644, 362415, 363734, null, null, null, null],
    label: 'C',
  },
  {
    data: [708265, 711620, 715562, 720193, 725471, 728914, 732702, 735468, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1744895, 1751194, 1758256, 1768017, 1776667, 1783457, 1789710, 1795317, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2151402, 2165827, 2180672, 2199899, 2219728, 2234141, 2249100, 2262595, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1626702, 1646359, 1667455, 1695285, 1724902, 1745143, 1766567, 1785246, null, null, null, null],
    label: 'Python',
  },
  {
    data: [286708, 288754, 291027, 293771, 296122, 297804, 299600, 301304, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [383059, 386948, 391252, 397074, 403433, 408056, 412752, 416597, null, null, null, null],
    label: 'R',
  },
  {
    data: [1457609, 1462272, 1467252, 1473733, 1479943, 1484994, 1490391, 1494926, null, null, null, null],
    label: 'C#',
  },
  {
    data: [217362, 217836, 218291, 218834, 219446, 219820, 220304, 220716, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1387265, 1390814, 1394345, 1399411, 1403551, 1406800, 1410000, 1412850, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [51529, 52711, 53972, 55625, 57400, 58838, 60431, 61820, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [102271, 102653, 103134, 103749, 104286, 104683, 105088, 105441, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [51038, 51520, 52123, 52949, 53808, 54382, 55053, 55806, null, null, null, null],
    label: 'Go',
  },
  {
    data: [26308, 26421, 26548, 26740, 26896, 26999, 27147, 27298, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19914, 20325, 20746, 21376, 22175, 22611, 23275, 23718, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6837, 6878, 6982, 7037, 7100, 7155, 7192, 6786, null, null, null, null],
    label: 'C',
  },
  {
    data: [6837, 6878, 6982, 7037, 7100, 7155, 7192, 6786, null, null, null, null],
    label: 'C++',
  },
  {
    data: [93281, 93238, 90042, 89926, 89762, 90044, 90356, 88981, null, null, null, null],
    label: 'Java',
  },
  {
    data: [110647, 109868, 107299, 107229, 107238, 107328, 107697, 106176, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [39757, 39808, 39905, 39968, 39584, 39404, 39490, 39577, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2448, 2446, 2443, 2443, 2446, 2454, 2465, 2467, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35237, 35038, 35100, 35237, 35330, 35362, 35456, 35470, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6678, 6675, 6681, 6679, 6688, 6690, 6695, 6703, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22946, 23087, 23255, 22800, 22517, 22581, 22320, 20757, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4927, 4939, 4972, 4984, 5033, 5043, 5059, 5082, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [19376, 19448, 19516, 19662, 19856, 19924, 19973, 20056, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7465, 7466, 7470, 7494, 7508, 7505, 7512, 7509, null, null, null, null],
    label: 'Go',
  },
  {
    data: [807, 816, 827, 837, 902, 928, 936, 943, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1138, 1151, 1161, 1169, 1169, 1171, 1179, 1186, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [116009, 116039, 116853, 117190, 117812, 117979, 117472, 117675, null, null, null, null],
    label: 'C',
  },
  {
    data: [116009, 116039, 116853, 117190, 117812, 117979, 117472, 117675, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1725177, 1725335, 1708391, 1706961, 1702732, 1701244, 1710657, 1712073, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4588849, 4593279, 4596784, 4595652, 4580818, 4573047, 4584551, 4576570, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2492592, 2505917, 2504923, 2518049, 2523700, 2518378, 2543778, 2551643, null, null, null, null],
    label: 'Python',
  },
  {
    data: [199046, 196886, 197243, 199107, 197792, 197065, 197555, 197557, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [605710, 611912, 615049, 613919, 617418, 617247, 620284, 622918, null, null, null, null],
    label: 'C#',
  },
  {
    data: [794699, 792349, 788019, 787663, 787214, 782254, 783890, 784557, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1177317, 1179224, 1178315, 1176237, 1173624, 1177911, 1179694, 1175710, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [145079, 144672, 145726, 143506, 131767, 134295, 136050, 136487, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [469340, 470605, 469219, 473722, 466668, 466591, 466584, 466719, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [200778, 202049, 201014, 201131, 201441, 202199, 203528, 201925, null, null, null, null],
    label: 'Go',
  },
  {
    data: [32733, 32893, 32987, 33102, 33394, 33522, 33569, 33714, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [75666, 75825, 76538, 76722, 77325, 78264, 79654, 80534, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 13, 13, 13, 13, 13, 13, 13, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 13, 13, 13, 13, 13, 13, 13, null, null, null, null],
    label: 'C++',
  },
  {
    data: [90, 89, 87, 86, 86, 87, 89, 90, null, null, null, null],
    label: 'Java',
  },
  {
    data: [136, 134, 133, 132, 134, 134, 137, 138, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, 46, 46, 46, 46, 43, 43, 43, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, 6, 6, 6, 7, 7, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 33, 33, 33, 33, 33, 33, 33, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, 15, 15, 15, 15, 15, 15, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [33, 33, 33, 33, 32, 32, 31, 32, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, 6, 6, 6, 6, 7, 8, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [22, 22, 22, 22, 22, 22, 22, 22, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [9, 9, 9, 9, 9, 9, 9, 9, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 6, 6, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [225, 225, 225, 226, 224, 225, 224, 223, null, null, null, null],
    label: 'C',
  },
  {
    data: [225, 225, 225, 226, 224, 225, 224, 223, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2011, 1997, 1975, 1949, 1932, 1924, 1919, 1906, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5091, 5053, 5041, 4991, 4918, 4900, 4877, 4821, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2405, 2420, 2424, 2408, 2397, 2390, 2398, 2383, null, null, null, null],
    label: 'Python',
  },
  {
    data: [303, 302, 303, 304, 291, 293, 293, 292, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [821, 821, 817, 813, 801, 797, 795, 794, null, null, null, null],
    label: 'C#',
  },
  {
    data: [737, 732, 724, 710, 702, 696, 692, 684, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1849, 1841, 1826, 1812, 1798, 1791, 1776, 1760, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [253, 249, 250, 246, 224, 230, 233, 232, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [581, 576, 575, 569, 561, 562, 561, 556, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [330, 328, 325, 324, 325, 325, 325, 323, null, null, null, null],
    label: 'Go',
  },
  {
    data: [51, 50, 49, 48, 49, 49, 48, 48, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [212, 211, 207, 206, 202, 205, 208, 212, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [103694, 104919, 106324, 108702, 112261, 113568, 115553, 117084, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [152411, 153081, 153803, 154715, 155980, 156810, 157764, 158722, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [95455, 96732, 98821, 101507, 104164, 105956, 108177, 109791, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [318572, 319440, 321369, 322615, 324373, 325243, 326737, 329229, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [107836, 109791, 112209, 116662, 125005, 132011, 144628, 153341, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [36434, 36647, 36840, 37050, 37522, 37753, 38020, 38172, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4767, 4799, 4833, 4880, 4921, 4965, 4995, 5035, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [48421, 50212, 51284, 52711, 54986, 56092, 57575, 59094, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [47379, 47545, 47725, 48137, 48432, 48570, 48760, 48938, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [63405, 63780, 64158, 64653, 65284, 65628, 66046, 66357, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [null, null, null, null, null, null, null, 40684, null, null, null, null],
    label: 'okhttp (Kotlin)',
  },
  {
    data: [28527, 28739, 28996, 29307, 29881, 30142, 30448, 30674, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [80861, 81733, 83040, 84274, 86016, 86985, 88185, 89263, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [11368, 11440, 11543, 11655, 11859, 11979, 12141, 12272, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [254690, 255273, 255667, 256359, 257070, 257547, 258034, 258496, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4767, 4799, 4833, 4880, 4921, 4965, 4995, 5035, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [4407, 4444, 4466, 4523, 4610, 4646, 4682, 4714, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4097, 4137, 4177, 4213, 4259, 4284, 4302, 4351, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3620, 3653, 3683, 3717, 3744, 3764, 3781, 3818, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3583, 3585, 3588, 3597, 3600, 3602, 3605, 3607, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3561, 3585, 3604, 3641, 3674, 3685, 3711, 3726, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3295, 3311, 3319, 3325, 3342, 3352, 3367, 3370, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [2689, 2741, 2778, 2850, 2906, 2948, 2986, 3047, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [2265, 2321, 2368, 2410, null, null, null, null, null, null, null, null],
    label: 'bookdown',
  },
  {
    data: [2163, 2184, 2220, 2266, 2318, 2350, 2374, 2404, null, null, null, null],
    label: 'awesome-network-analysis',
  },
  {
    data: [null, null, null, null, 2717, 2734, 2760, 2803, null, null, null, null],
    label: 'data.table',
  },
];

langToProjects.Swift = [
  {
    data: [36434, 36647, 36840, 37050, 37522, 37753, 38020, 38172, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [35077, 35194, 35331, 35494, 35735, 35864, 36033, 36270, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [28963, 29086, 29193, 29307, 29445, 29509, 29623, 29711, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [25938, 26200, 26432, 26684, 27010, 27234, 27595, 27833, null, null, null, null],
    label: 'iina',
  },
  {
    data: [25936, 26164, 26657, 26916, 27299, 27529, 27841, 28063, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [24305, 24500, 25462, 25683, 25944, 26080, 26556, 26759, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [24188, 24317, 24462, 24673, 24890, 25004, 25197, 25326, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [23781, 23880, 23992, 24116, 24263, 24365, 24462, 24527, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [20912, 21020, 21133, 21288, 21602, 21694, 21826, 21919, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [20241, 20313, null, null, null, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
  {
    data: [null, null, 20420, 20573, 20741, 20849, 20970, 21068, null, null, null, null],
    label: 'awesome-swift',
  },
];

langToProjects['C#'] = [
  {
    data: [51357, 51585, 51812, 51997, 52239, 52409, 52624, 52848, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [48421, 50212, 51284, 52711, 54986, 56092, 57575, 59094, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [23819, 24166, 24742, 25619, 26146, 26493, 27893, 29355, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [23134, 23149, 23185, 23216, 23264, 23298, 23328, 23348, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [20677, 20959, 21337, 21764, 24367, 24778, 25182, 25684, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [19400, 19565, 19729, 19913, 20187, 20305, 20493, 20595, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [17084, 17757, 18521, 19363, 20262, 20802, 21585, 22218, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [17060, 17334, 17574, 17833, 18169, 18356, 18633, 18911, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [16320, 16590, 16873, 17217, 17593, 17854, 18232, 18534, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [15677, 15767, 15918, 16040, 16167, null, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [null, null, null, null, null, 16378, 16688, 16930, null, null, null, null],
    label: 'ShareX',
  },
];

langToProjects.C = [
  {
    data: [103694, 104919, 106324, 108702, 112261, 113568, 115553, 117084, null, null, null, null],
    label: 'linux',
  },
  {
    data: [51070, 51343, 51727, 52144, 54233, 54949, 55370, 55760, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [46964, 47360, 47761, 48324, 49005, 49602, 50298, 50775, null, null, null, null],
    label: 'redis',
  },
  {
    data: [42808, 44419, 45608, 47005, 48917, 50465, 52413, 53612, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [35602, 35864, 36880, 37552, 38073, 38364, 38785, 39151, null, null, null, null],
    label: 'git',
  },
  {
    data: [29239, 29383, 29557, 30367, 30690, 30851, 31053, 31218, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [28039, 28181, 28349, 28525, 28840, 28985, 29167, 29307, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [27315, 27534, 27832, 28761, 29251, 29482, 29780, 30004, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [24758, 25809, 26576, 27183, 28070, 29538, 30067, 30514, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [22972, 23396, 23760, 24211, 24801, 25143, 25559, 25928, null, null, null, null],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [47379, 47545, 47725, 48137, 48432, 48570, 48760, 48938, null, null, null, null],
    label: 'rails',
  },
  {
    data: [41998, 42141, 42329, 42502, 42731, 42879, 43079, 43236, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [32347, 32547, 32759, 33019, 33342, 33485, 33707, 33920, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [30885, 31283, 31452, 31649, 32324, 32467, 32672, 32800, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [30602, 30794, 30974, 31246, 31566, 31697, 31946, 32116, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [27097, 27176, 27290, 27467, 27650, 27726, 27842, 27925, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [25320, 26646, 27078, 27501, 28038, 28295, 28579, 28937, null, null, null, null],
    label: 'brew',
  },
  {
    data: [24689, 24882, 25134, 25409, 25723, 25932, 26194, 26413, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [23327, 23660, 23815, 24024, 24227, 24348, 24498, 24662, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [22870, 23076, 23315, 23636, 24037, 24255, 24671, 24945, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [63405, 63780, 64158, 64653, 65284, 65628, 66046, 66357, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30930, 30956, 30993, 31011, 31038, 31052, 31060, 31078, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [29335, 29776, 30260, 30841, 31626, 32115, 32655, 33171, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [25480, 25557, 25631, 25727, 25834, 25895, 25963, 26034, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24602, 24725, 24852, 25018, 25183, 25300, 25422, 25532, null, null, null, null],
    label: 'composer',
  },
  {
    data: [24492, 24623, 24738, 25044, 25402, 25498, 25603, 25703, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22942, 23381, 23552, 23749, 24071, 24270, 24530, 24716, null, null, null, null],
    label: 'framework',
  },
  {
    data: [20381, 20489, 20579, 20700, 20810, 20907, 21001, 21054, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [19288, 19343, 19393, 19500, 19632, 19679, 19750, 19848, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [18287, 18387, 18485, 18617, 18736, 18823, 18928, 19007, null, null, null, null],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [152411, 153081, 153803, 154715, 155980, 156810, 157764, 158722, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [88718, 89219, 90632, 91181, 91874, 94025, 94608, 96476, null, null, null, null],
    label: 'electron',
  },
  {
    data: [70818, 71756, 72402, 73082, 74063, 75082, 76060, 76718, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [54777, 54976, 55281, 55672, 56042, 56357, 56693, 57066, null, null, null, null],
    label: 'swift',
  },
  {
    data: [51609, 52230, 52779, 53562, 54486, 55033, 55739, 56330, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [48421, 50216, 51285, 52714, 54988, 56092, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [47883, 48863, 50375, 51815, 53990, 55139, 55872, 56681, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [45831, 46273, 46634, 47352, 48019, 48497, 49599, 50303, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [45458, 46070, 46693, 47433, 48370, 48943, 49766, 50506, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [38213, 38649, 39003, 39460, 40019, 40390, 41157, 41597, null, null, null, null],
    label: 'tesseract',
  },
  {
    data: [null, null, null, null, null, null, 40592, 41665, null, null, null, null],
    label: 'godot',
  },
];

langToProjects.Python = [
  {
    data: [118554, 120568, 123083, 125974, 132357, 135653, 139619, 142368, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [107836, 109791, 112209, 116662, 125005, 132011, 144628, 153341, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [98262, 99351, 100314, 101479, 103833, 104901, 106453, 107551, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [97269, 99564, 100705, 102005, 108043, 110530, 113470, 115796, null, null, null, null],
    label: 'Python',
  },
  {
    data: [92458, 93784, 94673, 95703, 98733, 99709, 101237, 102114, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [87774, 89758, 91148, 92778, 94994, 96600, 98127, 99491, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [67922, 68587, 68951, 69413, 69995, 70321, 70772, 71053, null, null, null, null],
    label: 'models',
  },
  {
    data: [58373, 58829, 59192, 59709, 62139, 62576, 63160, 63691, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [54911, 55455, 56031, 56666, 57569, 58057, 58764, 59351, null, null, null, null],
    label: 'django',
  },
  {
    data: [50509, null, null, null, null, null, null, null, null, null, null, null],
    label: 'keras',
  },
  {
    data: [null, 53802, 54122, 54444, 55458, 55766, 56154, 56455, null, null, null, null],
    label: 'flask',
  },
];

langToProjects.JavaScript = [
  {
    data: [318572, 319440, 321369, 322615, 324373, 325243, 326737, 329229, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [178053, 179231, 180298, 181761, 183618, 184686, 186211, 187458, null, null, null, null],
    label: 'vue',
  },
  {
    data: [162059, 163396, 164740, 166642, 168771, 170155, 172077, 173780, null, null, null, null],
    label: 'react',
  },
  {
    data: [146411, 148092, 148645, 149229, 150222, 151297, 152073, 152627, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [103702, 104443, 106195, 107389, 109138, 110305, 112397, 113699, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [95271, 95620, 96040, 96411, 96909, 97317, 97691, 98004, null, null, null, null],
    label: 'd3',
  },
  {
    data: [92839, 95660, 99004, 102870, 107858, 110221, 115164, 117961, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [92744, 93244, 93763, 94646, 95611, 96176, 96925, 97510, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [85219, 85815, 86438, 87107, 88027, 88568, 89321, 89925, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [80695, 81469, 82335, 83297, 84586, 85265, 86142, 87404, null, null, null, null],
    label: 'axios',
  },
];

langToProjects.Java = [
  {
    data: [95455, 96732, 98821, 101507, 104164, 105956, 108177, 109791, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [62972, 63905, 64532, 65088, 66994, 68448, 69196, 69702, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [62052, 62482, 63014, 63758, 64589, 65133, 66005, 66612, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [53145, 53622, 53975, 54414, 55017, 55379, 55866, 56247, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [52921, 53388, 53863, 54437, 55238, 55849, 56429, 56895, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [51214, 51843, 52561, 53339, 54188, 54780, 55619, 56229, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [49681, 50044, 50392, 50849, 51407, 51846, 53207, 53679, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [45483, 46260, 46983, 48109, 49473, 50241, 51381, 52024, null, null, null, null],
    label: 'mall',
  },
  {
    data: [44082, 44220, 44308, 44443, 44658, 44787, 44941, 45102, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41040, 41391, 41732, 42218, 42892, 43252, 43716, 44101, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [254690, 255273, 255667, 256359, 257070, 257547, 258034, 258496, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [51028, 52044, 52817, 53718, 55283, 56018, 57158, 58215, null, null, null, null],
    label: 'rust',
  },
  {
    data: [29295, 29747, 30221, 30758, 32727, 33164, 33790, 34422, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [24690, 25119, 25594, 26050, 27149, 27692, 28521, 29078, null, null, null, null],
    label: 'bat',
  },
  {
    data: [23315, 23691, 24041, 24487, 25195, 25989, 26518, 26950, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [18961, 19104, 19227, 19391, 19608, 19720, 19902, 20045, null, null, null, null],
    label: 'servo',
  },
  {
    data: [18520, 18533, 18562, 18621, 18695, 18726, 18739, 18758, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [18244, 18568, 19025, 19438, 20102, 20472, 21046, 21538, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [16062, 16331, 16583, 16914, 17323, 17639, null, null, null, null, null, null],
    label: 'fd',
  },
  {
    data: [15582, null, null, null, null, null, null, null, null, null, null, null],
    label: 'diem',
  },
  {
    data: [null, 72236, 73163, 74245, 75669, 76193, 76857, 77560, null, null, null, null],
    label: 'deno',
  },
  {
    data: [null, null, null, null, null, null, 18738, 21682, null, null, null, null],
    label: 'tauri',
  },
];

langToProjects.Kotlin = [
  {
    data: [38045, 38178, 38338, 38531, 38772, 38935, 39155, 39341, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30875, 31017, 31141, 31289, 31429, 31551, 31668, 31788, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [25660, 25737, 25843, 25952, 26172, 26290, 26463, 26591, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [24324, 24544, 24741, 24993, 25349, 25536, 25831, 26004, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [20266, 20304, 20324, 20351, 20472, 20562, 20642, 20720, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [19212, 19402, 19595, 19820, 20121, 20310, 20553, 20749, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [18479, 18566, 18608, 18678, 18784, 18837, 18909, 18968, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [16355, 16451, 16517, 16618, 16710, 16788, 16888, null, null, null, null, null],
    label: 'flexbox-layout',
  },
  {
    data: [15901, 15905, null, null, null, null, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15852, null, null, 15956, 15997, 16031, null, null, null, null, null, null],
    label: 'plaid',
  },
  {
    data: [null, 20060, 20322, 20791, 21179, 21424, 21760, 22079, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [null, null, 16428, null, null, null, null, null, null, null, null, null],
    label: 'Magisk',
  },
  {
    data: [null, null, null, null, null, null, 38189, 38557, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, 40684, null, null, null, null],
    label: 'okhttp',
  },
];

langToProjects.Scala = [
  {
    data: [28527, 28739, 28996, 29307, 29881, 30142, 30448, 30674, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16883, 16874, 16863, 16858, 16856, 16852, 16846, 16849, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [13089, 13108, 13152, 13223, 13311, 13355, 13405, 13446, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12477, 12480, 12507, null, 12509, 12511, 12513, 12518, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11777, 11798, 11826, 11852, 11901, 11920, 11935, 11957, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11318, 11370, 11416, 11489, 11561, 11612, 11676, 11722, null, null, null, null],
    label: 'akka',
  },
  {
    data: [9697, 9797, 9879, 9949, 10058, 10123, 10217, 10306, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [8235, 8270, 8313, 8347, 8384, 8401, 8414, 8446, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [8068, 8288, 8504, 8745, 9491, 9608, 9769, 9914, null, null, null, null],
    label: 'lila',
  },
  {
    data: [7848, 7877, 7896, 7929, 7963, 7983, 8008, 8029, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [null, null, null, 12510, null, null, null, null, null, null, null, null],
    label: 'attic-predictionio',
  },
];

langToProjects.Groovy = [
  {
    data: [11368, 11440, 11543, 11655, 11859, 11979, 12141, 12272, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [4088, 4115, 4137, 4173, 4224, 4259, 4299, 4324, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3557, 3589, 3604, 3630, 3667, 3684, 3705, 3728, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3194, 3229, 3263, 3318, 3359, 3390, 3445, 3469, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2629, 2669, 2689, 2743, 2789, 2839, 2883, 2910, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2332, 2354, 2383, 2425, 2490, 2519, 2565, 2603, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2225, 2224, 2227, 2228, 2230, 2231, 2231, 2231, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1861, 1866, 1874, 1874, 1874, 1875, 1878, 1880, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1852, 1877, 1946, 2021, 2049, 2061, 2093, 2118, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1428, 1428, null, null, null, null, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
  {
    data: [null, null, 1449, 1535, 1637, 1696, 1799, 1866, null, null, null, null],
    label: 'fat-aar-android',
  },
];

langToProjects.Go = [
  {
    data: [80861, 81733, 83040, 84274, 86016, 86985, 88185, 89263, null, null, null, null],
    label: 'go',
  },
  {
    data: [73528, 74204, 74991, 76042, 77458, 78321, 79416, 80450, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [60736, 61456, 62514, 63336, 64462, 65175, 66662, 67688, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [59362, 59559, 59772, 59986, 60274, 60472, 60752, 60992, null, null, null, null],
    label: 'moby',
  },
  {
    data: [49420, 49940, 50493, 51135, 51978, 52625, 53157, 53832, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [44831, 45531, 46237, 47099, 48227, 48891, 49918, 50952, null, null, null, null],
    label: 'gin',
  },
  {
    data: [42284, 43011, 43600, 44456, 45480, 46166, 47091, 47903, null, null, null, null],
    label: 'frp',
  },
  {
    data: [36662, 36897, 37071, 37359, 37742, 37949, 38237, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [36237, 36459, 36664, 36931, 37254, 37509, null, null, null, null, null, null],
    label: 'v2ray-core',
  },
  {
    data: [36212, 36396, 36535, 36766, null, null, null, null, null, null, null, null],
    label: 'gogs',
  },
  {
    data: [null, null, null, null, 38379, 38914, 39420, 39815, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [null, null, null, null, null, null, 38120, 38775, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [null, null, null, null, null, null, null, 38486, null, null, null, null],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [331843, 336200, 340839, 346675, 355037, 360127, 366635, 371718, null, null, null, null],
    label: 'C',
  },
  {
    data: [453462, 460825, 468514, 478498, 492598, 500371, 510088, 518369, null, null, null, null],
    label: 'C++',
  },
  {
    data: [980248, 991761, 1004414, 1000738, 1033682, 1053961, 1069622, 1084981, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1738982, 1692670, 1725181, 1831232, 1878407, 1911613, 1949678, 1947132, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1130164, 1269337, 1260962, 1314334, 1382747, 1396530, 1434897, 1443299, null, null, null, null],
    label: 'Python',
  },
  {
    data: [115799, 117342, 118922, 121060, 123819, 125478, 127714, 129314, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [78714, 80181, 81811, 83817, 86356, 87820, 89679, 91151, null, null, null, null],
    label: 'R',
  },
  {
    data: [357832, 372489, 380313, 389569, 402235, 410620, 420187, 427657, null, null, null, null],
    label: 'C#',
  },
  {
    data: [339019, 340500, 342160, 344125, 345738, 346871, 348143, 349176, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [464686, 469192, 474310, 480033, 488385, 493461, 499570, 504839, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [68429, 70485, 72890, 75971, 80109, 82698, 86201, 89075, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [44872, 45119, 45410, 45725, 46257, 46529, 46898, 47218, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [204238, 207679, 211299, 215673, 221481, 224875, 229624, 233961, null, null, null, null],
    label: 'Go',
  },
  {
    data: [13764, 13821, 13878, 13941, 14089, 14149, 14238, 14300, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [62012, 63696, 65585, 67910, 70971, 72797, 75185, 77348, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1077, 1094, 1088, 1117, 1153, 1191, 1229, 1242, null, null, null, null],
    label: 'C',
  },
  {
    data: [1337, 1367, 1402, 1433, 1458, 1475, 1495, 1519, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2653, 2673, 2686, 2708, 2753, 2765, 2789, 2806, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5591, 5613, 5670, 5705, 5765, 5797, 5858, 5914, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3414, 3471, 3545, 3630, 3743, 3816, 3893, 3956, null, null, null, null],
    label: 'Python',
  },
  {
    data: [764, 774, 782, 791, 803, 808, 816, 830, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [44, 45, 46, 47, 47, 47, 47, 47, null, null, null, null],
    label: 'R',
  },
  {
    data: [701, 715, 730, 753, 767, 784, 805, 824, null, null, null, null],
    label: 'C#',
  },
  {
    data: [796, 798, 804, 810, 813, 817, 824, 826, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1049, 1056, 1066, 1081, 1093, 1099, 1106, 1114, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [256, 260, 270, 282, 289, 294, 303, 313, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [144, 145, 145, 145, 144, 145, 148, 149, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1717, 1746, 1768, 1799, 1849, 1885, 1919, 1949, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, 20, 20, 21, 21, 21, 21, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [380, 386, 394, 408, 429, 442, 456, 466, null, null, null, null],
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
