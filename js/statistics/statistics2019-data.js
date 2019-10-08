
/* eslint-disable max-len */

const labels = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'];
const lastYearLabels = ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, null, null],
    label: 'C',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 8, 8, 8, 8, 8, 8, 8, 8, null, null],
    label: 'JavaScript',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, null, null],
    label: 'Python',
  },
  {
    data: [12, 12, 16, 15, 19, 19, 15, 11, 11, 10, null, null],
    label: 'Swift',
  },
  {
    data: [8, 8, 13, 12, null, null, null, 14, 18, 14, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, 10, 10, 10, 10, 11, 12, 15, 18, null, null],
    label: 'Ruby',
  },
  {
    data: [9, 9, 7, 7, 7, 7, 7, 7, 7, 7, null, null],
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
    data: [null, null, 18, 19, 14, 14, 18, 18, 17, 12, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 49, 68, 91, 91, 60, 81, 44, 28, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 3, 3, 3, 4, 4, 4, 4, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, 7, 7, 7, 7, 7, 7, 7, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 4, 4, 4, 3, 3, 3, 3, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 20, 19, 18, 18, 11, 13, 18, 12, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, 15, 16, 21, 21, 22, 20, 20, 15, null, null],
    label: 'R',
  },
  {
    data: [7, 7, 7, 6, 6, 6, 6, 5, 5, 5, null, null],
    label: 'C#',
  },
  {
    data: [18, 18, 16, 13, 15, 15, 13, 11, 11, 13, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 9, 9, 9, 8, 8, 8, 9, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 38, 35, 39, 39, 40, 43, 45, 35, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 29, 31, 30, 30, 31, 28, 36, 29, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 18, 18, 19, 19, 15, 16, 17, 17, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 19, 20, 17, 17, 14, 15, 13, 11, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 37, 34, 34, 34, 38, 33, 28, 34, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [293116, 295360, 297344, 300587, 303451, 304790, 306224, 307896, 309372, 311720, null, null],
    label: 'C',
  },
  {
    data: [599334, 603156, 606789, 612884, 618079, 620602, 624013, 627948, 631091, 635461, null, null],
    label: 'C++',
  },
  {
    data: [1497619, 1508662, 1519681, 1535430, 1548749, 1554967, 1564057, 1574145, 1582761, 1593314, null, null],
    label: 'Java',
  },
  {
    data: [1738482, 1753945, 1769121, 1791608, 1810922, 1820695, 1834521, 1849557, 1864251, 1880140, null, null],
    label: 'JavaScript',
  },
  {
    data: [1085592, 1102900, 1120631, 1147512, 1171706, 1183881, 1201043, 1220473, 1238338, 1257958, null, null],
    label: 'Python',
  },
  {
    data: [217489, 220232, 222915, 226794, 230396, 232404, 235509, 238423, 240792, 243606, null, null],
    label: 'Swift',
  },
  {
    data: [269549, 273631, 278072, 284291, 289999, 292705, 296510, 300621, 304502, 308988, null, null],
    label: 'R',
  },
  {
    data: [1272607, 1281120, 1289460, 1301685, 1312647, 1318098, 1325314, 1333189, 1340316, 1348762, null, null],
    label: 'C#',
  },
  {
    data: [201150, 201977, 202665, 203682, 204563, 205042, 205649, 206333, 207079, 207832, null, null],
    label: 'Ruby',
  },
  {
    data: [1251790, 1258702, 1265608, 1275653, 1284156, 1288109, 1293386, 1298884, 1303922, 1309625, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 20084, 21656, 22959, 23758, 24950, 26284, 27504, 28882, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 87123, 88117, 89131, 89574, 90304, 91032, 91726, 92467, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 36282, 37259, 38070, 38480, 39009, 39635, 40281, 40928, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 22519, 22791, 23040, 23168, 23373, 23551, 23739, 23906, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 11380, 11731, 12081, 12273, 12566, 12874, 13251, 13600, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [4588, 4912, 5069, 5379, 5534, 5629, 5693, 5751, 5856, 6064, null, null],
    label: 'C',
  },
  {
    data: [4588, 4912, 5069, 5379, 5534, 5629, 5693, 5751, 5856, 6064, null, null],
    label: 'C++',
  },
  {
    data: [66538, 70517, 72272, 74508, 76487, 77432, 79144, 81010, 82361, 83949, null, null],
    label: 'Java',
  },
  {
    data: [70819, 76358, 79332, 82595, 85289, 86808, 88688, 90151, 92271, 95051, null, null],
    label: 'JavaScript',
  },
  {
    data: [25925, 28356, 29235, 30186, 32035, 32286, 33515, 34284, 35026, 35727, null, null],
    label: 'Python',
  },
  {
    data: [1410, 1441, 1455, 1356, 1370, 1386, 1400, 2299, 2313, 2369, null, null],
    label: 'Swift',
  },
  {
    data: [27775, 29374, 29969, 30744, 31163, 31357, 31628, 31966, 32171, 32543, null, null],
    label: 'C#',
  },
  {
    data: [6880, 7160, 7247, 7318, 7417, 7461, 7530, 7559, 7610, 7652, null, null],
    label: 'Ruby',
  },
  {
    data: [17323, 18101, 18649, 19477, 20122, 20122, 20210, 20448, 20747, 21284, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 3861, 3940, 3997, 4069, 4191, 4215, 4238, 4305, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 17180, 17042, 17332, 17510, 17804, 17859, 17967, 18169, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 5291, 5656, 5962, 6251, 6518, 6636, 6738, 6821, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 574, 584, 612, 613, 621, 623, 626, 629, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 541, 567, 589, 611, 622, 627, 639, 725, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [87007, 91304, 92744, 94778, 96968, 98314, 98441, 99562, 101296, 103279, null, null],
    label: 'C',
  },
  {
    data: [87007, 91304, 92744, 94778, 96968, 98314, 98441, 99562, 101296, 103279, null, null],
    label: 'C++',
  },
  {
    data: [1387382, 1437131, 1456227, 1489395, 1515711, 1531153, 1550382, 1564938, 1589360, 1616905, null, null],
    label: 'Java',
  },
  {
    data: [3818842, 3965482, 4023967, 4119518, 4191184, 4235416, 4282699, 4323367, 4386970, 4452002, null, null],
    label: 'JavaScript',
  },
  {
    data: [1822580, 1916516, 1958111, 2016735, 2064594, 2090629, 2122624, 2150732, 2201161, 2243511, null, null],
    label: 'Python',
  },
  {
    data: [184497, 188519, 182709, 193628, 194551, 195864, 199606, 199274, 201343, 202893, null, null],
    label: 'Swift',
  },
  {
    data: [437259, 455190, 463319, 477870, 489970, 496087, 503644, 507744, 517274, 529335, null, null],
    label: 'C#',
  },
  {
    data: [769539, 784622, 786650, 797517, 802854, 809391, 798872, 795765, 802624, 806796, null, null],
    label: 'Ruby',
  },
  {
    data: [1046752, 1079155, 1091165, 1100722, 1118351, 1125203, 1135963, 1139782, 1151346, 1165252, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 85286, 90009, 94468, 97024, 101083, 104941, 109348, 116159, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 443815, 447267, 452993, 452815, 440961, 444523, 450887, 455686, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 150749, 155955, 158494, 160566, 163425, 166494, 170792, 174608, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 25764, 26390, 26774, 27016, 27512, 27898, 28243, 30427, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 49291, 52273, 54950, 58342, 59782, 61103, 64173, 66328, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [11, 11, 11, 11, 11, 12, 11, 11, 12, 12, null, null],
    label: 'C',
  },
  {
    data: [11, 11, 11, 11, 11, 12, 11, 11, 12, 12, null, null],
    label: 'C++',
  },
  {
    data: [89, 88, 88, 85, 88, 87, 87, 89, 88, 89, null, null],
    label: 'Java',
  },
  {
    data: [125, 127, 131, 130, 134, 133, 136, 136, 139, 142, null, null],
    label: 'JavaScript',
  },
  {
    data: [39, 40, 40, 41, 43, 42, 44, 44, 44, 44, null, null],
    label: 'Python',
  },
  {
    data: [7, 7, 7, 6, 6, 6, 6, 7, 7, 7, null, null],
    label: 'Swift',
  },
  {
    data: [33, 34, 34, 34, 34, 34, 36, 36, 36, 37, null, null],
    label: 'C#',
  },
  {
    data: [17, 17, 17, 16, 16, 16, 17, 17, 17, 17, null, null],
    label: 'Ruby',
  },
  {
    data: [38, 36, 37, 38, 39, 38, 37, 35, 35, 37, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 6, 6, 6, 6, 6, 6, 6, 6, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 29, 27, 27, 27, 27, 26, 25, 25, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 8, 8, 8, 9, 10, 10, 10, 10, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 2, 2, 2, 2, 2, 2, 2, 2, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 4, 4, 4, 4, 4, 4, 4, 5, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [207, 209, 210, 210, 218, 222, 217, 219, 226, 229, null, null],
    label: 'C',
  },
  {
    data: [207, 209, 210, 210, 218, 222, 217, 219, 226, 229, null, null],
    label: 'C++',
  },
  {
    data: [2209, 2223, 2197, 2208, 2229, 2227, 2231, 2232, 2230, 2243, null, null],
    label: 'Java',
  },
  {
    data: [5678, 5749, 5758, 5781, 5821, 5831, 5854, 5832, 5828, 5831, null, null],
    label: 'JavaScript',
  },
  {
    data: [2217, 2269, 2300, 2329, 2361, 2376, 2405, 2424, 2460, 2473, null, null],
    label: 'Python',
  },
  {
    data: [382, 375, 369, 365, 371, 367, 370, 368, 367, 360, null, null],
    label: 'Swift',
  },
  {
    data: [840, 840, 843, 859, 866, 867, 872, 870, 873, 883, null, null],
    label: 'C#',
  },
  {
    data: [884, 882, 878, 860, 859, 866, 865, 859, 852, 849, null, null],
    label: 'Ruby',
  },
  {
    data: [2064, 2088, 2091, 2095, 2103, 2103, 2104, 2089, 2091, 2098, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 209, 212, 222, 226, 231, 236, 244, 249, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 637, 628, 636, 633, 630, 630, 633, 632, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 308, 315, 316, 319, 323, 322, 327, 326, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 55, 54, 53, 53, 54, 55, 55, 59, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 164, 168, 176, 180, 184, 187, 191, 193, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [67627, 68944, 70026, 72567, 75035, 75961, 76988, 78554, 79812, 81089, null, null],
    label: 'linux (C)',
  },
  {
    data: [117922, 119999, 121528, 124668, 127731, 128951, 130326, 132005, 133444, 135489, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [null, null, 26839, 34502, 40047, 43021, 46921, 50338, 53442, 56701, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [296804, 297252, 297639, 301144, 302211, 303267, 303671, 304136, 304723, 305354, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [54341, 56370, 57968, 61119, 63185, 64201, 68524, 70205, 72272, 74318, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [29220, 29614, 29919, 30960, 31522, 31829, 32191, 32530, 32796, 33110, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [3535, 3589, 3632, 3713, 3800, 3831, 3874, 3933, 3975, 4036, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [31536, 32576, 33681, 35619, 37253, 38142, 39336, 40748, 42081, 43315, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [41757, 42040, 42329, 42762, 43101, 43294, 43531, 43754, 43996, 44251, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [48228, 48921, 50344, 51450, 52297, 52869, 53313, 53961, 54655, 55447, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 34360, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [null, null, 20768, 21319, 21846, 22141, 22475, 22861, 23234, 23701, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [null, null, 53855, 56089, 58155, 59081, 60276, 61607, 62962, 64165, null, null],
    label: 'go (Go)',
  },
  {
    data: [null, null, 8495, 8726, 8925, 9061, 9217, 9369, 9522, 9659, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [null, null, 205417, 205417, 244289, 245637, 246406, 246887, 247198, 247467, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [3535, 3589, 3632, 3713, 3800, 3831, 3874, 3933, 3975, 4036, null, null],
    label: 'ggplot2',
  },
  {
    data: [3439, 3458, 3465, 3475, 3487, 3499, 3514, 3523, 3527, 3532, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3309, 3343, 3367, 3431, 3506, 3523, 3564, 3606, 3642, 3703, null, null],
    label: 'awesome-R',
  },
  {
    data: [3193, 3239, 3280, 3342, 3395, 3420, 3451, 3484, 3519, 3565, null, null],
    label: 'shiny',
  },
  {
    data: [2788, 2807, 2838, 2879, 2910, 2925, 2946, 2978, 3005, 3043, null, null],
    label: 'swirl_courses',
  },
  {
    data: [2762, 2798, 2837, 2878, 2917, 2936, 2960, 2986, 3014, 3034, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [2756, 2795, 2823, 2879, 2917, 2942, 2978, 3008, 3035, 3079, null, null],
    label: 'dplyr',
  },
  {
    data: [1751, 1759, 1773, 1792, 1795, 1805, 1816, 1825, 1837, 1868, null, null],
    label: 'devtools',
  },
  {
    data: [1696, 1710, 1727, 1758, 1775, 1792, 1802, 1808, 1823, 1834, null, null],
    label: 'knitr',
  },
  {
    data: [1690, 1743, 1776, 1846, 1902, 1922, 1965, 2011, 2047, 2092, null, null],
    label: 'r4ds',
  },
];

langToProjects.Swift = [
  {
    data: [29858, 30081, 30268, 30612, 30891, 31049, 31288, 31574, 31783, 32046, null, null],
    label: 'Alamofire',
  },
  {
    data: [29220, 29614, 29919, 30960, 31522, 31829, 32191, 32530, 32796, 33110, null, null],
    label: 'awesome-ios',
  },
  {
    data: [20027, 20208, 20356, 20662, 20935, 21052, 21219, 21373, 21538, 21688, null, null],
    label: 'Charts',
  },
  {
    data: [19266, 19306, 19359, 19442, 19520, 19543, 19574, 19607, 19629, 19644, null, null],
    label: 'ReactiveCocoa',
  },
  {
    data: [19196, 19431, 19731, 20139, 20366, 20494, 20693, 20986, 21221, 21466, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [18983, 19183, 19406, 19718, 20034, 20269, 20517, 20766, 21096, 21277, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [17886, 17992, 18077, 18264, 18411, 18483, 18609, 18738, 18858, 18961, null, null],
    label: 'SwiftyJSON',
  },
  {
    data: [17286, 17899, 18568, 19582, 20477, 21030, 21725, 22457, 23052, 24113, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [16314, 16483, 16642, 16937, 17181, null, null, null, null, null, null, null],
    label: 'awesome-swift',
  },
  {
    data: [16239, 17124, 17629, 18313, 18830, 19185, 19640, 20041, 20427, 20729, null, null],
    label: 'iina',
  },
  {
    data: [null, null, null, null, null, 17392, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [null, null, null, null, null, null, 17577, 17855, 18171, 18489, null, null],
    label: 'open-source-mac-os-apps',
  },
];

langToProjects['C#'] = [
  {
    data: [31536, 32576, 33681, 35619, 37253, 38142, 39336, 40748, 42081, 43315, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [18236, 18650, 19010, 19704, 20262, 20500, 20780, 21091, 21373, 21629, null, null],
    label: 'CodeHub',
  },
  {
    data: [15476, 15677, 15864, 16185, 16565, 16724, 16933, 17106, 17292, 17510, null, null],
    label: 'corefx',
  },
  {
    data: [12093, 12369, 12561, 13021, 13576, 13956, 14500, 14959, 15443, 15900, null, null],
    label: 'PowerShell',
  },
  {
    data: [11834, 12126, 12351, 12892, 13231, 13446, 13690, 13994, 14281, 14571, null, null],
    label: 'Wox',
  },
  {
    data: [11124, 11405, 11528, 11611, 11768, 11851, 12080, 12243, 12787, 12971, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [10770, 10886, 11060, 11235, 11475, 11572, 11722, 11830, 11981, 12103, null, null],
    label: 'coreclr',
  },
  {
    data: [10599, 10768, 10943, 11163, 11344, 11457, 11554, 11700, 11811, 11960, null, null],
    label: 'roslyn',
  },
  {
    data: [9970, 10124, 10259, 10479, 10690, 10789, 10933, null, null, null, null, null],
    label: 'Dapper',
  },
  {
    data: [9237, 9424, null, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [null, null, 9854, 10778, 11596, 12006, 12435, 13037, 13527, 14004, null, null],
    label: 'AspNetCore',
  },
  {
    data: [null, null, null, null, null, null, null, 11124, 11518, 11802, null, null],
    label: 'dnSpy',
  },
];

langToProjects.C = [
  {
    data: [67627, 68944, 70026, 72567, 75035, 75961, 76988, 78554, 79812, 81089, null, null],
    label: 'linux',
  },
  {
    data: [34260, 35218, 36099, 37238, 38174, 38684, 39324, 40041, 40738, 41490, null, null],
    label: 'netdata',
  },
  {
    data: [33592, 34125, 34579, 35550, 36454, 36867, 37336, 37897, 38573, 38993, null, null],
    label: 'redis',
  },
  {
    data: [25603, 25958, 26342, 26952, 27484, 27743, 28113, 28539, 29144, 29586, null, null],
    label: 'git',
  },
  {
    data: [21728, 22040, 22249, 22942, 23212, 23529, 23839, 24130, 24422, 24701, null, null],
    label: 'ijkplayer',
  },
  {
    data: [21172, 21606, 21996, 22692, 23240, 23522, 23875, 24266, 24705, 25078, null, null],
    label: 'php-src',
  },
  {
    data: [18689, 19016, 19317, 19816, 20302, 20545, 20866, 21224, 21619, 21978, null, null],
    label: 'wrk',
  },
  {
    data: [17730, 17802, 17854, 17941, 18020, 18086, 18126, 18160, 18228, 18324, null, null],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
  {
    data: [16819, 17063, 17249, 17612, 17916, 18068, 18292, 18461, 18636, 18818, null, null],
    label: 'the_silver_searcher',
  },
  {
    data: [16263, 16441, 16597, 16823, 17050, null, null, null, null, null, null, null],
    label: 'emscripten',
  },
  {
    data: [null, null, null, null, null, 17309, 17512, 17732, null, null, null, null],
    label: 'The-Art-Of-Programming-By-July',
  },
  {
    data: [null, null, null, null, null, null, null, null, 18152, 19426, null, null],
    label: 'scrcpy',
  },
];

langToProjects.Ruby = [
  {
    data: [41757, 42040, 42329, 42762, 43101, 43294, 43531, 43754, 43996, 44251, null, null],
    label: 'rails',
  },
  {
    data: [36456, 36734, 36983, 37349, 37703, 37895, 38095, 38332, 38563, 38836, null, null],
    label: 'jekyll',
  },
  {
    data: [27077, 27308, 27576, 27926, 28239, 28367, 28545, 28756, 28985, 29157, null, null],
    label: 'discourse',
  },
  {
    data: [24161, 24387, 24716, 25073, 25411, 25599, 25995, 26258, 26599, 26999, null, null],
    label: 'fastlane',
  },
  {
    data: [23274, 23568, 23762, 23988, 24211, 24361, 24483, 24619, 24754, 25002, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [21489, 21548, 21601, 21697, 21803, 21841, 21888, 21945, 21982, 22022, null, null],
    label: 'gitlabhq',
  },
  {
    data: [20291, 20454, 20664, 21013, 21303, 21481, 21644, 21840, 22076, 22226, null, null],
    label: 'huginn',
  },
  {
    data: [19565, 19780, 20021, 20290, 20567, 20696, 20864, 21100, 21294, 21482, null, null],
    label: 'devdocs',
  },
  {
    data: [19461, 19534, 19629, 19745, 19869, 19929, 19979, 20067, 20155, 20261, null, null],
    label: 'devise',
  },
  {
    data: [17630, 17911, 18015, 18237, 18412, 18495, 18631, 18737, 18837, null, null, null],
    label: 'vagrant',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 19174, null, null],
    label: 'brew',
  },
];

langToProjects.PHP = [
  {
    data: [48228, 48921, 50344, 51450, 52297, 52869, 53313, 53961, 54655, 55447, null, null],
    label: 'laravel',
  },
  {
    data: [19468, 19731, 20015, 20397, 20729, 20917, 21089, 21318, 21546, 21782, null, null],
    label: 'symfony',
  },
  {
    data: [18894, 19265, 19643, 20187, 20602, 20802, 21110, 21397, 21708, 22060, null, null],
    label: 'Faker',
  },
  {
    data: [17779, 18216, 18627, 19211, 19531, 19921, 20217, 20507, 20807, 21115, null, null],
    label: 'composer',
  },
  {
    data: [16851, 16942, 17027, 17150, 17270, 17346, 17427, 17507, 17584, 17656, null, null],
    label: 'CodeIgniter',
  },
  {
    data: [16480, 16658, 16788, 17055, 17210, 17307, 17430, 17561, 17725, 17895, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [15946, 16387, 16857, 17553, 17921, 18555, 18912, 19356, 19868, 20343, null, null],
    label: 'SecLists',
  },
  {
    data: [15489, 15918, 16322, 16888, 17088, 17548, 17853, 18232, 18626, 19046, null, null],
    label: 'framework',
  },
  {
    data: [15136, 15509, 15815, 16268, 16644, 16806, 17044, 17299, 17547, 17782, null, null],
    label: 'guzzle',
  },
  {
    data: [13164, 13514, 13837, 14314, 14533, 14871, 14871, null, null, null, null, null],
    label: 'monolog',
  },
  {
    data: [null, null, null, null, null, null, null, 30179, 30237, 30297, null, null],
    label: 'jQuery-File-Upload',
  },
];

langToProjects['C++'] = [
  {
    data: [117922, 119999, 121528, 124668, 127731, 128951, 130326, 132005, 133444, 135489, null, null],
    label: 'tensorflow',
  },
  {
    data: [68360, 69643, 70519, 72015, 73353, 73990, 74809, 75806, 76613, 77368, null, null],
    label: 'electron',
  },
  {
    data: [46234, 46543, 46796, 47320, 47741, 47998, 48397, 48708, 48993, 49282, null, null],
    label: 'swift',
  },
  {
    data: [36636, 36996, 37282, 37859, 38326, 38686, 39109, 39556, 39918, 40329, null, null],
    label: 'bitcoin',
  },
  {
    data: [34834, 34974, 35082, 35241, 35429, 35508, 35603, 35682, 35792, 35890, null, null],
    label: 'nw.js',
  },
  {
    data: [33526, 33589, 33655, 33804, 33896, 33942, 34006, 34092, 34218, 34289, null, null],
    label: 'x64dbg',
  },
  {
    data: [31267, 31914, 32380, 33348, 34358, 34849, 35442, 36184, 36942, 37549, null, null],
    label: 'protobuf',
  },
  {
    data: [30774, 31533, 32201, 33559, 34788, 35440, 36167, 37052, 37875, 38698, null, null],
    label: 'opencv',
  },
  {
    data: [26720, 26959, 27171, 27771, null, null, null, null, null, null, null, null],
    label: 'caffe',
  },
  {
    data: [23478, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
  {
    data: [null, 24435, 25261, 26753, 28111, 28712, 29212, 30455, 31304, 32098, null, null],
    label: 'pytorch',
  },
  {
    data: [null, null, null, null, 38033, 43618, 48274, 49736, 51417, 52822, null, null],
    label: 'terminal',
  },
];

langToProjects.Python = [
  {
    data: [59531, 61020, 63309, 65566, 67440, 68319, 69483, 70671, 72558, 73768, null, null],
    label: 'awesome-python',
  },
  {
    data: [54341, 56370, 57968, 61119, 63185, 64201, 68524, 70205, 72272, 74318, null, null],
    label: 'system-design-primer',
  },
  {
    data: [46735, 47975, 48958, 51129, 52825, 53718, 54816, 56102, 57174, 58131, null, null],
    label: 'models',
  },
  {
    data: [45926, 47121, 52379, 54718, 57006, 57817, 58620, 59659, 60892, 63201, null, null],
    label: 'public-apis',
  },
  {
    data: [45598, 46832, 47713, 49293, 50497, 51230, 52205, 53751, 55110, 56253, null, null],
    label: 'youtube-dl',
  },
  {
    data: [41043, 41716, 42264, 43452, 44122, 44560, 45090, 45704, 46231, 46848, null, null],
    label: 'flask',
  },
  {
    data: [39671, 40636, 41233, 42604, 43761, 44075, 44590, 45261, 46531, 48371, null, null],
    label: 'thefuck',
  },
  {
    data: [38877, 39634, 40006, 40126, null, null, null, null, null, null, null, null],
    label: 'httpie',
  },
  {
    data: [38638, 39267, 39802, 40695, 41595, 42007, 42539, 43150, 43824, 44506, null, null],
    label: 'django',
  },
  {
    data: [37385, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-machine-learning',
  },
  {
    data: [null, 37939, 38633, 39814, 41214, 41822, 42399, 43167, 43833, 44592, null, null],
    label: 'keras',
  },
  {
    data: [null, null, null, null, 40138, 43121, 49236, 52540, 54470, 58935, null, null],
    label: 'Python',
  },
];

langToProjects.JavaScript = [
  {
    data: [296804, 297252, 297639, 301144, 302211, 303267, 303671, 304136, 304723, 305354, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [123938, 126971, 129280, 131180, 133182, 134821, 142871, 145211, 147356, 149312, null, null],
    label: 'vue',
  },
  {
    data: [119007, 121365, 123433, 125931, 129221, 130821, 132120, 133752, 135446, 137276, null, null],
    label: 'react',
  },
  {
    data: [81441, 82154, 82742, 83843, 83843, 85146, 85689, 86381, 87070, 87856, null, null],
    label: 'd3',
  },
  {
    data: [80198, 81322, 82239, 83259, 83259, 85936, 86735, 87695, 88550, 89378, null, null],
    label: 'javascript',
  },
  {
    data: [72525, 73490, 74558, 75338, 75338, 76833, 78687, 79600, 80606, 81551, null, null],
    label: 'react-native',
  },
  {
    data: [61501, 63019, 64280, 65680, 67635, 68125, 69266, 70245, 71252, 72285, null, null],
    label: 'create-react-app',
  },
  {
    data: [59338, 59368, 59407, 59456, null, null, null, null, null, null, null, null],
    label: 'angular.js',
  },
  {
    data: [58344, 58679, 58947, null, 59793, null, null, null, null, null, null, null],
    label: 'Font-Awesome',
  },
  {
    data: [56933, 57855, null, 59992, 61239, 61939, 62515, 63246, 63994, 64664, null, null],
    label: 'node',
  },
  {
    data: [null, null, 131200, 132810, 133324, 133991, 134384, 135012, 135648, 136139, null, null],
    label: 'bootstrap',
  },
  {
    data: [null, null, null, null, null, 60348, 61560, 62832, 64243, 65212, null, null],
    label: 'axios',
  },
];

langToProjects.Java = [
  {
    data: [43218, 44658, 44949, 46461, 47667, 48156, 48798, 50362, 50980, 51644, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [37338, 38138, 38728, 39970, 41120, 41580, 42312, 43138, 43950, 44611, null, null],
    label: 'elasticsearch',
  },
  {
    data: [37076, 37475, 37802, 38419, 38819, 39257, 39632, 39993, 40346, 40657, null, null],
    label: 'RxJava',
  },
  {
    data: [32776, 33830, 34702, 36384, 37969, 38733, 39713, 40578, 41461, 42304, null, null],
    label: 'spring-boot',
  },
  {
    data: [31469, 32215, 32760, 33760, 33995, 34895, 35494, 37322, 38514, 39167, null, null],
    label: 'interviews',
  },
  {
    data: [30889, 31095, 31418, 31926, 32221, 32618, 32921, 33236, 33549, 33858, null, null],
    label: 'retrofit',
  },
  {
    data: [30364, 30737, 31057, 31673, 32330, 32759, 33229, 33696, 34148, 34535, null, null],
    label: 'okhttp',
  },
  {
    data: [29126, 29648, 30063, 30898, 31683, 32039, 32470, 32961, 33526, 34020, null, null],
    label: 'guava',
  },
  {
    data: [25765, 26125, 26902, 28047, 28847, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [25516, 25813, null, null, null, null, null, null, null, null, null, null],
    label: 'MPAndroidChart',
  },
  {
    data: [null, null, 26839, 34502, 40047, 43021, 46921, 50338, 53442, 56701, null, null],
    label: 'JavaGuide',
  },
  {
    data: [null, null, null, null, null, 30282, 34454, 36863, 40032, 41637, null, null],
    label: 'LeetCodeAnimation',
  },
];

langToProjects.Rust = [
  {
    data: [null, null, 205417, 205417, 244289, 245637, 246406, 246887, 247198, 247467, null, null],
    label: '996.ICU',
  },
  {
    data: [null, null, 34293, 35234, 36187, 36639, 37228, 38105, 38866, 39480, null, null],
    label: 'rust',
  },
  {
    data: [null, null, 15719, 15914, 16168, 16237, 16436, 16526, 16648, 16776, null, null],
    label: 'xi-editor',
  },
  {
    data: [null, null, 14596, 15429, 16242, 16645, 17101, 17553, 18077, 18549, null, null],
    label: 'alacritty',
  },
  {
    data: [null, null, 13538, 13826, 14065, 14216, 14402, 14569, 14743, 14922, null, null],
    label: 'servo',
  },
  {
    data: [null, null, 12926, 13507, 14534, 14789, 15191, 15661, 16056, 16397, null, null],
    label: 'ripgrep',
  },
  {
    data: [null, null, 12345, 12784, 13655, 13890, 14240, 14691, 15060, 15647, null, null],
    label: 'bat',
  },
  {
    data: [null, null, 9746, 10237, 10662, 10906, 11242, 11678, 12135, 12479, null, null],
    label: 'awesome-rust',
  },
  {
    data: [null, null, 8642, 9148, 9491, 9714, 9933, 10199, null, null, null, null],
    label: 'fd',
  },
  {
    data: [null, null, 8616, 8677, 8766, 8776, null, null, null, null, null, null],
    label: 'xray',
  },
  {
    data: [null, null, null, null, null, null, 10418, 11717, 12168, 12573, null, null],
    label: 'libra',
  },
  {
    data: [null, null, null, null, null, null, null, null, 37873, 38680, null, null],
    label: 'deno',
  },
];

langToProjects.Kotlin = [
  {
    data: [null, null, 26509, 26969, 27583, 27846, 28202, 28589, 28919, 29259, null, null],
    label: 'kotlin',
  },
  {
    data: [null, null, 22004, 22304, 22724, 22906, 23111, 23310, 23512, 23696, null, null],
    label: 'leakcanary',
  },
  {
    data: [null, null, 21338, 22404, 23317, 23936, 24625, 25293, 25949, 26651, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [null, null, 18615, 18690, 18768, 18788, 18816, 18842, 18868, 18901, null, null],
    label: 'profile-summary-for-github',
  },
  {
    data: [null, null, 17917, 17998, 18081, 18100, 18148, 18221, 18989, 19160, null, null],
    label: 'iosched',
  },
  {
    data: [null, null, 15287, 15514, 15755, 15906, 16089, 16277, 16428, 16605, null, null],
    label: 'material-dialogs',
  },
  {
    data: [null, null, 13980, 14796, 15488, 15798, 16631, 17324, 17976, 18342, null, null],
    label: 'p3c',
  },
  {
    data: [null, null, 13594, 13881, 14175, 14349, 14532, 14754, 14976, 15155, null, null],
    label: 'anko',
  },
  {
    data: [null, null, 13387, 13652, 13869, 13980, 14139, 14320, 14470, null, null, null],
    label: 'flexbox-layout',
  },
  {
    data: [null, null, 12729, 12938, 13161, null, null, null, null, null, null, null],
    label: 'plaid',
  },
  {
    data: [null, null, null, null, null, 13348, 13648, null, null, null, null, null],
    label: 'android-architecture-components',
  },
  {
    data: [null, null, null, null, null, null, null, 33596, 33964, null, null, null],
    label: 'android-architecture',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 34360, null, null],
    label: 'architecture-samples',
  },
];

langToProjects.Scala = [
  {
    data: [null, null, 20768, 21319, 21846, 22141, 22475, 22861, 23234, 23701, null, null],
    label: 'spark',
  },
  {
    data: [null, null, 12831, 13784, 14226, 14466, 14826, 15186, 15513, 15778, null, null],
    label: 'prisma',
  },
  {
    data: [null, null, 11669, 11737, 11775, 11799, 11828, 11912, 12049, 12099, null, null],
    label: 'predictionio',
  },
  {
    data: [null, null, 11295, 11446, 11593, 11667, 11833, 11931, 12051, 12159, null, null],
    label: 'scala',
  },
  {
    data: [null, null, 10981, 11079, 11131, 11171, 11216, 11253, 11302, 11350, null, null],
    label: 'playframework',
  },
  {
    data: [null, null, 9581, 9736, 9875, 9946, 10079, 10182, 10269, 10363, null, null],
    label: 'akka',
  },
  {
    data: [null, null, 7576, 7628, 7683, 7709, 7728, 7762, 7799, 7825, null, null],
    label: 'gitbucket',
  },
  {
    data: [null, null, 6961, 7034, 7089, 7116, 7161, 7217, 7259, 7304, null, null],
    label: 'finagle',
  },
  {
    data: [null, null, 6808, 7051, 7256, 7362, 7539, 7709, 7875, 8008, null, null],
    label: 'kafka-manager',
  },
  {
    data: [null, null, 5880, 6246, 6516, 6613, 6717, 6854, 6970, 7062, null, null],
    label: 'source-han-sans',
  },
];

langToProjects.Groovy = [
  {
    data: [null, null, 8495, 8726, 8925, 9061, 9217, 9369, 9522, 9659, null, null],
    label: 'gradle',
  },
  {
    data: [null, null, 2929, 3021, 3097, 3126, 3176, 3251, 3306, 3369, null, null],
    label: 'rundeck',
  },
  {
    data: [null, null, 2593, 2687, 2767, 2809, 2860, 2912, 2977, 3036, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [null, null, 2201, 2201, 2206, 2206, 2206, 2206, 2206, 2208, null, null],
    label: 'asgard',
  },
  {
    data: [null, null, 1795, 1830, 1866, 1894, 1931, 1955, 2003, 2046, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [null, null, 1600, 1707, 1799, 1849, 1921, 1996, 2073, 2135, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [null, null, 1449, 1444, 1442, 1442, 1441, 1437, 1436, 1436, null, null],
    label: 'sdk-manager-plugin',
  },
  {
    data: [null, null, 1432, 1494, 1543, 1564, 1597, 1630, 1662, 1687, null, null],
    label: 'shadow',
  },
  {
    data: [null, null, 1378, 1414, 1438, 1461, 1493, 1519, 1545, 1570, null, null],
    label: 'bintray-release',
  },
  {
    data: [null, null, 1332, 1332, 1337, 1339, 1341, 1339, null, null, null, null],
    label: 'gradle-packer-plugin',
  },
  {
    data: [null, null, null, null, null, null, null, null, 1350, 1385, null, null],
    label: 'SmartThingsPublic',
  },
];

langToProjects.Go = [
  {
    data: [null, null, 53855, 56089, 58155, 59081, 60276, 61607, 62962, 64165, null, null],
    label: 'go',
  },
  {
    data: [null, null, 52352, 52870, 53329, 53615, 53985, 54403, 54800, 55077, null, null],
    label: 'moby',
  },
  {
    data: [null, null, 48891, 50929, 52736, 53660, 54832, 56137, 57401, 58525, null, null],
    label: 'kubernetes',
  },
  {
    data: [null, null, 40517, 41248, 41958, 42533, 43298, 44023, 44610, 45408, null, null],
    label: 'lantern',
  },
  {
    data: [null, null, 40499, 42344, 43850, 44562, 45538, 46495, 47477, 48391, null, null],
    label: 'awesome-go',
  },
  {
    data: [null, null, 33066, 34168, 35130, 35707, 36320, 37131, 37843, 38503, null, null],
    label: 'hugo',
  },
  {
    data: [null, null, 29376, 29852, 30302, 30490, 30767, 31168, 31543, 31829, null, null],
    label: 'gogs',
  },
  {
    data: [null, null, 28166, 29104, 30043, 30444, 30965, 31480, 31963, 32325, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [null, null, 24722, 25950, 27282, 27872, 28763, 29868, 30902, 31849, null, null],
    label: 'gin',
  },
  {
    data: [null, null, 24418, 25287, 25914, 26251, 26688, 27164, 27599, null, null, null],
    label: 'syncthing',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 28137, null, null],
    label: 'frp',
  },
];

const githubProjects = [
  {
    data: [223247, 227270, 230554, 233019, 220902, 245659, 248899, 248842, 249554, 260591, null, null],
    label: 'C',
  },
  {
    data: [269711, 276377, 281927, 286381, 299343, 299137, 304984, 302194, 319456, 321613, null, null],
    label: 'C++',
  },
  {
    data: [633597, 573620, 659437, 654781, 657503, 679149, 723950, 735799, 670892, 700494, null, null],
    label: 'Java',
  },
  {
    data: [1090779, 1112869, 1132771, 1030488, 1110960, 1161164, 1201987, 1249695, 1101847, 1193236, null, null],
    label: 'JavaScript',
  },
  {
    data: [657867, 676359, 693400, 629438, 749096, 703919, 712390, 763357, 759582, 789064, null, null],
    label: 'Python',
  },
  {
    data: [71208, 72965, 74726, 77171, 79512, 80578, 82457, 84153, 83538, 87695, null, null],
    label: 'Swift',
  },
  {
    data: [41970, 43220, 44496, 46503, 48362, 49234, 50439, 51605, 52896, 54376, null, null],
    label: 'R',
  },
  {
    data: [210202, 213378, 221115, 219771, 237911, 241697, 244227, 250943, 241034, 253798, null, null],
    label: 'C#',
  },
  {
    data: [306195, 307404, 308533, 310072, 311706, 310843, 313655, 314248, 311460, 313020, null, null],
    label: 'Ruby',
  },
  {
    data: [345936, 350679, 355054, 361765, 358300, 361514, 366130, 380419, 379779, 375651, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 24346, 26350, 28319, 29434, 30822, 32226, 33793, 35466, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 36833, 37413, 37983, 38172, 38547, 38899, 39305, 39736, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 122839, 127786, 132240, 134474, 137457, 140359, 143563, 147063, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 11672, 11850, 12019, 12096, 12187, 12284, 12364, 12475, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 27230, 27805, 30516, 31347, 32381, 33450, 34649, 35996, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [642, 659, 667, 694, 715, 723, 734, 748, 774, 790, null, null],
    label: 'C',
  },
  {
    data: [722, 749, 772, 806, 837, 851, 873, 898, 929, 949, null, null],
    label: 'C++',
  },
  {
    data: [1964, 1993, 2019, 2076, 2119, 2138, 2160, 2194, 2223, 2251, null, null],
    label: 'Java',
  },
  {
    data: [4297, 4349, 4099, 4469, 4560, 4610, 4655, 4678, 4729, 4795, null, null],
    label: 'JavaScript',
  },
  {
    data: [1824, 1880, 1934, 2012, 2096, 2133, 2202, 2259, 2316, 2386, null, null],
    label: 'Python',
  },
  {
    data: [556, 570, 583, 602, 614, 621, 633, 641, 648, 654, null, null],
    label: 'Swift',
  },
  {
    data: [25, 24, 25, 26, 27, 27, 27, 28, 30, 32, null, null],
    label: 'R',
  },
  {
    data: [375, 390, 401, 415, 432, 440, 452, 466, 484, 489, null, null],
    label: 'C#',
  },
  {
    data: [691, 694, 699, 707, 709, 715, 714, 716, 719, 724, null, null],
    label: 'Ruby',
  },
  {
    data: [729, 741, 755, 783, 805, 816, 830, 848, 860, 874, null, null],
    label: 'PHP',
  },
  {
    data: [null, null, 114, 120, 125, 128, 138, 144, 151, 159, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, 105, 107, 111, 111, 112, 115, 117, 117, null, null],
    label: 'Scala',
  },
  {
    data: [null, null, 1011, 1062, 1112, 1132, 1155, 1190, 1220, 1254, null, null],
    label: 'Go',
  },
  {
    data: [null, null, 14, 13, 13, 13, 13, 13, 13, 14, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, 141, 155, 163, 167, 182, 190, 200, 206, null, null],
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
