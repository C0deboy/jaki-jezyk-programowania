/* eslint-disable max-len */

const labels = ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12'];
const lastYearLabels = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, 2, 2, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3, 3, 3, 3, 3, 3, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, 1, 1, 1, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [12, 12, 14, 14, 10, 10, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [13, 13, 11, 11, 16, 16, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 16, 16, 15, 19, 19, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 10, 13, 13, null, null, null, null, null, null],
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
    data: [11, 11, 13, 13, 15, 15, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [24, 24, 26, 28, 27, 27, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 2, 2, 2, 2, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, 4, 4, 3, 3, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, 3, 3, 4, 4, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, 1, 1, 1, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 20, 17, 19, 19, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, 16, 16, 17, 17, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 16, 18, 18, 18, 18, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [10, 10, 9, 9, 8, 8, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33, 33, 35, 38, 29, 29, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [35, 35, 38, 32, 35, 35, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, 11, 10, 10, 14, 14, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31, 31, 34, 44, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [20, 20, 19, 19, 20, 20, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [392860, 393679, 394690, 395888, 396952, 397669, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [788053, 789423, 791404, 793138, 794950, 796288, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1886498, 1889249, 1892661, 1895772, 1899231, 1901619, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2473613, 2478849, 2485882, 2491998, 2498454, 2502893, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2102250, 2111196, 2121996, 2131350, 2142010, 2148541, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [324382, 325073, 325977, 326823, 327732, 328523, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [480215, 482644, 485636, 488619, 491339, 493241, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1580329, 1583165, 1586634, 1589926, 1593803, 1596203, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [227275, 227452, 227635, 227784, 228007, 228159, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1455238, 1456118, 1457317, 1458241, 1459457, 1460260, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [84743, 85524, 86503, 87582, 88783, 89558, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [110815, 110965, 111137, 111333, 111479, 111569, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [67466, 67871, 68427, 68958, 69398, 69862, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [29414, 29478, 29577, 29634, 29723, 29778, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [34390, 34939, 35606, 36229, 36982, 37434, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [7014, 7038, 7082, 7137, 7063, 7085, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [7014, 7038, 7082, 7137, 7063, 7085, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [77831, 78123, 76239, 76824, 69725, 69918, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [91924, 92229, 91289, 88920, 87065, 86883, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [40389, 40787, 41002, 41401, 40913, 41333, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2558, 2557, 2575, 2590, 2606, 2608, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35333, 35444, 35758, 35757, 35826, 35884, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6290, 6300, 6316, 6088, 6361, 6371, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [19275, 19332, 19417, 19501, 19599, 19666, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [5779, 5849, 5883, 7993, 8562, 8588, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18170, 18250, 18289, 17229, 18066, 18161, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [4908, 4919, 4952, 4983, 5014, 5066, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [788, 795, 797, 801, 800, 802, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1427, 1446, 1453, 1478, 1538, 1565, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [129900, 130562, 128810, 124947, 125287, 125302, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [129900, 130562, 128810, 124947, 125287, 125302, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1279198, 1259624, 1232847, 1224138, 1171423, 1157554, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3559001, 3500098, 3435480, 3374602, 3206229, 3185224, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2662314, 2674448, 2668931, 2694185, 2699982, 2704425, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [156636, 153735, 151871, 148277, 144872, 143605, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [637102, 640031, 643846, 644713, 628243, 635096, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [745091, 742119, 736588, 739223, 733241, 730688, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [902142, 881326, 871020, 856175, 843162, 829792, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [162645, 163542, 164465, 167343, 171102, 170359, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [374246, 370547, 359270, 353742, 354342, 347312, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [248301, 246825, 246326, 243904, 217674, 213967, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [41456, 41544, 40687, 40852, 41071, 41201, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [94371, 94420, 95151, 96500, 97038, 99098, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [17, 17, 17, 17, 16, 16, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [17, 17, 17, 17, 16, 16, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [64, 64, 64, 64, 61, 61, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [103, 102, 100, 95, 92, 91, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [48, 49, 48, 47, 43, 44, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, 6, 6, 6, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33, 34, 35, 34, 34, 34, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [12, 12, 12, 11, 12, 12, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [26, 26, 25, 25, 25, 26, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [9, 9, 9, 10, 11, 11, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [17, 17, 17, 15, 16, 17, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [8, 8, 8, 8, 8, 8, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, 1, 1, 1, 1, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 5, 4, 4, 5, 5, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [231, 233, 235, 231, 230, 229, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [231, 233, 235, 231, 230, 229, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1431, 1406, 1376, 1348, 1324, 1308, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3522, 3462, 3379, 3288, 3137, 3106, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2275, 2279, 2272, 2260, 2251, 2242, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [211, 209, 204, 200, 199, 197, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [690, 690, 692, 687, 659, 660, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [591, 585, 579, 579, 567, 567, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1361, 1334, 1311, 1291, 1268, 1252, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [237, 245, 246, 243, 243, 244, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [425, 421, 411, 405, 402, 399, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [322, 317, 313, 309, 257, 257, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [44, 44, 43, 44, 44, 44, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [220, 224, 229, 231, 232, 237, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [145763, 146985, 148663, 150493, 152872, 154074, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [170943, 171642, 172516, 173877, 175353, 175933, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [null, null, 108581, 109249, 109969, 110443, null, null, null, null, null, null],
    label: 'react-native (Java)',
  },
  {
    data: [360708, 362031, 363680, 365181, 368377, 369530, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [227174, 229421, 232228, 237821, 242127, 246818, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [41782, 42078, 42383, 42665, 43034, 43262, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [5768, 5797, 5842, 5897, 5940, 5969, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [86213, 87178, 88606, 90102, 92004, 92706, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [52262, 52366, 52557, 52725, 52967, 53107, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [72241, 72631, 72976, 73258, 73669, 73925, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [43845, 44026, 44250, 44533, 44878, 45105, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [null, null, null, 56278, 58051, 58419, null, null, null, null, null, null],
    label: 'the-algorithm (Scala)',
  },
  {
    data: [108272, 108911, 109705, 110830, 111980, 112588, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [14336, 14414, 14486, 14619, 14748, 14836, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [87717, 88178, 88683, 89139, 89711, 89998, null, null, null, null, null, null],
    label: 'deno (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [5768, 5797, 5842, 5897, 5940, 5969, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [5353, 5381, 5416, 5456, 5487, 5507, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4904, 4941, 4966, 5002, 5030, 5058, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4336, 4377, 4401, 4436, 4464, 4486, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4015, 4027, 4043, 4054, 4068, 4077, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3980, 3995, 4014, 4022, 4054, 4060, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [3635, 3638, 3637, 3639, 3645, 3646, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3474, 3480, 3485, 3497, 3499, 3503, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3219, 3240, 3258, 3284, 3306, 3318, null, null, null, null, null, null],
    label: 'data.table',
  },
  {
    data: [2929, null, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-network-analysis',
  },
  {
    data: [null, 3869, 3902, 3951, 3982, 4012, null, null, null, null, null, null],
    label: 'r4ds',
  },
];

langToProjects.Swift = [
  {
    data: [41782, 42078, 42383, 42665, 43034, 43262, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [38902, 38997, 39124, 39272, 39418, 39512, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [32399, 32596, 32841, 33120, 33419, 33650, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [30973, 31081, 31228, 31397, 31500, 31575, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [27361, 27444, 27556, 27661, 27750, 27804, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [26388, 26494, 26567, 26621, 26753, 26784, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [23688, 23761, 23839, 23953, 24088, 24173, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [23133, 23176, 23228, 23296, 23369, 23402, null, null, null, null, null, null],
    label: 'RxSwift',
  },
  {
    data: [22475, 22539, 22635, 22751, 22890, 22989, null, null, null, null, null, null],
    label: 'vapor',
  },
  {
    data: [22308, 22992, 23933, 24961, 25957, 26598, null, null, null, null, null, null],
    label: 'clashX',
  },
];

langToProjects['C#'] = [
  {
    data: [86213, 87178, 88606, 90102, 92004, 92706, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [55740, 55882, 56116, 56425, 56613, 56720, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [37062, 37302, 37679, 38386, 38732, 39932, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [36755, 38119, 39902, 42080, 43833, 44834, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [30860, 31024, 31292, 31581, 31880, 32081, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [26151, 26377, 26867, 27339, 27640, 28071, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [23121, 23367, 23728, 24090, 24468, 24696, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [23039, 23028, 23024, 23005, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [22626, 22677, null, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [22607, 22757, 22987, 23242, 23468, 23617, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [null, null, 22812, 23095, 23349, 23838, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [null, null, null, null, 23274, 23742, null, null, null, null, null, null],
    label: 'Ryujinx',
  },
];

langToProjects.C = [
  {
    data: [145763, 146985, 148663, 150493, 152872, 154074, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [76306, 77255, 80054, 82484, 84887, 87253, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [61861, 62137, 62419, 62736, 63322, 63605, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [58386, 58683, 59127, 59667, 60141, 60512, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [45395, 45965, 46475, 47236, 48047, 48734, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [45129, 45379, 45708, 46062, 46471, 46701, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [44919, 45846, 47032, 48286, 49646, 50631, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [34979, 35067, 35211, 35391, 35538, 35626, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [33943, 34294, 35088, 35826, 36586, 37081, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [33786, 33921, 34128, 34313, 34588, 34732, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [52262, 52366, 52557, 52725, 52967, 53107, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [46022, 46128, 46338, 46571, 46776, 46916, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [39963, 40499, 40906, 41351, 41889, 42504, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [37518, 37727, 37927, 38229, 38520, 38714, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [37296, 37425, 37617, 37777, 38054, 38213, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [36407, 36617, 36784, 36908, 37213, 37315, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [34822, 35141, 35501, 35814, 36205, 36463, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [30718, 30885, 31132, 31353, 31595, 31750, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [29833, 29877, 29980, 30108, 30271, 30362, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [29382, 29591, 29830, 30129, 30385, 30591, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [72241, 72631, 72976, 73258, 73669, 73925, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [44665, 45068, 45596, 46249, 47030, 47483, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [31060, 31054, 31046, 31036, 31029, 31024, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [28827, 29018, 29215, 29378, 29627, 29778, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [27987, 28048, 28143, 28255, 28416, 28487, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [27335, 27398, 27498, 27594, 27646, 27675, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [26682, 26703, 26708, 26719, 26723, 26739, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22351, 22383, 22444, 22500, 22539, 22572, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [21476, 21633, 21870, 22162, 22696, 23283, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [21114, 21133, 21186, 21225, 21279, 21295, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
];

langToProjects['C++'] = [
  {
    data: [170943, 171642, 172516, 173877, 175353, 175933, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [105783, 106082, 106511, 107081, 107674, 108062, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [87450, 87751, 88152, 88559, 89075, 89432, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [68091, 68411, 68796, 69311, 69838, 70246, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [66285, 66774, 67558, 68457, 69295, 69822, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [62435, 63167, 64467, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [61752, 61940, 62148, 62480, 63097, 63450, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [57999, 58307, 58724, 59150, 59657, 59958, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [57520, 58231, 59776, 60862, 61834, 62428, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [48958, 49358, 49943, 50692, 51425, 51928, null, null, null, null, null, null],
    label: 'tesseract',
  },
  {
    data: [null, null, null, 47179, 48012, 48594, null, null, null, null, null, null],
    label: 'imgui',
  },
];

langToProjects.Python = [
  {
    data: [227174, 229421, 232228, 237821, 242127, 246818, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [210676, 212502, 215320, 218870, 221782, 223883, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [155890, 158378, 161150, 166134, 170394, 173029, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [152110, 154038, 155980, 157985, 159562, 160593, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [130223, 131275, 132139, 135340, 136571, 137345, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [117140, 118117, 119080, 119963, null, 121500, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [79846, 82789, 88163, 97137, 103246, 106445, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [75602, 75964, 76590, 77106, 77718, 78052, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [68607, 69011, 69536, null, 71309, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [64614, 65405, 66615, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, null, null, 119465, 138338, 142789, null, null, null, null, null, null],
    label: 'Auto-GPT',
  },
  {
    data: [null, null, null, 70207, 81883, 88758, null, null, null, null, null, null],
    label: 'stable-diffusion-webui',
  },
];

langToProjects.JavaScript = [
  {
    data: [360708, 362031, 363680, 365181, 368377, 369530, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [202179, 202505, 202949, 203365, 203996, 204312, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [201593, 202977, 204767, 206592, 208715, 209972, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [162624, 163916, 165533, 169236, 171007, 172024, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [161680, 162068, 162579, 163130, 164139, 164474, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [142241, 143062, 144191, 145619, 147007, 147872, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [131375, 131797, 132633, 133474, 134778, 135272, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [107491, 107890, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [107437, 108143, 109198, 110960, 112182, 113770, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [104301, 104500, 104842, 105167, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [null, null, 103219, 105224, 107364, 108655, null, null, null, null, null, null],
    label: 'next.js',
  },
  {
    data: [null, null, null, null, 241424, 243597, null, null, null, null, null, null],
    label: 'developer-roadmap',
  },
];

langToProjects.Java = [
  {
    data: [79636, 80015, 80470, 81344, 82334, 82719, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [72281, 72397, 72665, 72963, 73229, 73342, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [68433, 68788, 69309, 69783, 70385, 70716, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [65430, 65793, 66330, 66929, 67724, 68166, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [63388, 63794, 64422, 65819, 66761, 67398, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [62606, 62852, 63167, 63563, 64029, 64322, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [59146, 59281, 59428, 59670, 59935, 60058, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [50645, 50881, 51235, 51656, 52063, 52303, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [50117, 50476, 50872, 51630, 52196, 52527, null, null, null, null, null, null],
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
    data: [null, null, 108581, 109249, 109969, 110443, null, null, null, null, null, null],
    label: 'react-native',
  },
];

langToProjects.Rust = [
  {
    data: [87717, 88178, 88683, 89139, 89711, 89998, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [77444, 78284, 79525, 80833, 82423, 83220, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [58406, 59574, 61366, 62877, 64286, 66153, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [44502, 45074, 45692, 46350, 47117, 47494, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [39458, 39860, 40327, 40961, 41564, 41919, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [36793, 38717, 39813, 41168, 42761, 43722, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [35668, 36268, 36840, 37533, 38246, 38717, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [34203, 34894, 36307, 37697, 39255, 40022, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [32451, 34022, 34949, 36048, 36951, 37484, null, null, null, null, null, null],
    label: 'meilisearch',
  },
  {
    data: [32339, 32848, null, null, null, null, null, null, null, null, null, null],
    label: 'starship',
  },
  {
    data: [null, null, 33482, 34231, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [null, null, null, null, 37362, 38802, null, null, null, null, null, null],
    label: 'ChatGPT',
  },
];

langToProjects.Kotlin = [
  {
    data: [43845, 44026, 44250, 44533, 44878, 45105, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [43501, 43611, 43726, 43911, 44073, 44190, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [42177, 42302, 42442, 42592, 42761, 42857, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [33322, 33405, 33521, 33647, 33729, 33807, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [28758, 28831, 28959, 29080, 29225, 29344, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [28642, 29102, 29731, 30373, 30861, 31073, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [28200, 28249, 28333, 28415, 28490, 28535, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [22576, 22613, 22679, 22751, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [21731, 21727, null, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [20835, 21308, 21742, null, 22879, 23345, null, null, null, null, null, null],
    label: 'tachiyomi',
  },
  {
    data: [null, null, 22166, 23466, 24702, 25482, null, null, null, null, null, null],
    label: 'ClashForAndroid',
  },
  {
    data: [null, null, null, 23528, 23592, 23630, null, null, null, null, null, null],
    label: 'BaseRecyclerViewAdapterHelper',
  },
];

langToProjects.Scala = [
  {
    data: [34928, 35095, 35336, 35617, 35938, 36158, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16747, 16737, 16719, 16707, 16699, 16691, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [14008, 14022, 14038, 14086, 14089, 14107, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12694, 12763, 12907, 13039, 13195, 13289, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [12599, 12619, 12645, 12677, 12699, 12726, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12546, 12545, 12555, 12555, 12555, 12555, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12313, 12327, 12345, 12372, 12401, 12425, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11214, 11250, 11302, 11354, 11390, 11410, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [9322, 9471, 9567, 9676, 9780, 9852, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
  {
    data: [8846, 8860, 8877, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [null, null, null, 56278, 58051, 58419, null, null, null, null, null, null],
    label: 'the-algorithm',
  },
];

langToProjects.Groovy = [
  {
    data: [14336, 14414, 14486, 14619, 14748, 14836, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [6573, 6671, 6774, 6900, 7028, 7490, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [4836, 4856, 4892, 4928, 4976, 5010, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4013, 4024, 4034, 4051, 4065, 4081, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3807, 3815, 3826, 3838, 3848, 3856, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3165, 3191, 3220, 3250, 3299, 3322, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2665, 2690, 2726, 2770, 2815, 2851, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2453, 2460, 2470, 2477, 2481, 2482, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2233, 2234, 2235, 2238, 2238, 2238, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [1952, 1966, 1988, 2023, 2060, 2079, null, null, null, null, null, null],
    label: 'nextflow',
  },
];

langToProjects.Go = [
  {
    data: [108272, 108911, 109705, 110830, 111980, 112588, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [95902, 97176, 98833, 100673, 102827, 104275, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [95649, 96209, 96937, 97940, 99019, 99718, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [66251, 66785, 67563, 68298, 69276, 69839, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [65151, 65608, 66162, 66818, 67434, 67851, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [65087, 65220, 65577, 65804, 66058, 66235, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [64055, 64721, 65746, 66935, 68224, 69035, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [49700, 50087, 51170, 51869, 52601, 53049, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [49196, 49776, 50246, 50881, 52379, 52808, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [46619, 46909, 47370, 47953, 48528, 48879, null, null, null, null, null, null],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [471426, 475049, 491662, 505995, 495797, 526688, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [624074, 649093, 693299, 708203, 693638, 730876, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1157894, 1198543, 1315016, 1317265, 1303108, 1199483, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2123257, 2123029, 2239191, 2107149, 2426846, 2539042, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1695961, 1735727, 1973959, 1856799, 1772317, 1914816, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [159207, 160863, 170192, 172624, 174983, 177032, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [115530, 116845, 122787, 124776, 126845, 128342, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [539913, 540468, 590184, 592929, 583030, 591917, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [365515, 368428, 383082, 384386, 384406, 386088, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [565941, 563295, 586687, 609218, 622720, 640400, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [139037, 141689, 154368, 158540, 162669, 165606, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [51126, 51380, 52952, 53223, 53507, 53736, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [304061, 308786, 330528, 335898, 341024, 345195, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15255, 15329, 15848, 15935, 15988, 16067, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [125337, 128433, 139630, 144103, 148789, 152042, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1599, 1610, 1625, 1651, 1682, 1695, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2003, 2022, 2053, 2088, 2130, 2153, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3156, 3170, 3188, 3213, 3238, 3255, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [8750, 8828, 8957, 9076, 9215, 9285, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [5251, 5320, 5441, 5637, 5471, 5949, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [957, 966, 974, 988, 996, 1005, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [61, 63, 65, 66, 67, 67, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1126, 1144, 1168, 1191, 1207, 1223, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [888, 892, 898, 901, 905, 908, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1244, 1245, 1253, 1265, 1278, 1288, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [450, 457, 464, 472, 485, 490, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [168, 168, 168, 169, 169, 168, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2509, 2531, 2568, 2592, 2633, 2663, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, 21, 21, 21, 21, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [852, 876, 902, 931, 965, 982, null, null, null, null, null, null],
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
