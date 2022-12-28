/* eslint-disable max-len */

const labels = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12'];
const lastYearLabels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];

const tiobeLastYear = [
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    label: 'C++',
  },
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1],
    label: 'Python',
  },
  {
    data: [15, 15, 19, 19, 19, 19, 19, 19, 19, 17, 14, 10],
    label: 'Swift',
  },
  {
    data: [11, 11, 13, 13, 13, 13, 13, 13, 13, 14, 15, 11],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    label: 'C#',
  },
  {
    data: [14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 13, 15],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 12],
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
    data: [13, 13, 11, 11, 11, 11, 11, 11, 11, 12, 18, 19],
    label: 'Go',
  },
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 26, 29, 27],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
    label: 'C++',
  },
  {
    data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    label: 'Python',
  },
  {
    data: [12, 12, 14, 14, 14, 14, 14, 14, 14, 15, 18, 15],
    label: 'Swift',
  },
  {
    data: [13, 13, 11, 11, 11, 11, 11, 11, 11, 12, 12, 11],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    label: 'C#',
  },
  {
    data: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 19, 17],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 10],
    label: 'PHP',
  },
  {
    data: [28, 28, 31, 31, 31, 31, 31, 31, 31, 28, 28, 23],
    label: 'Kotlin',
  },
  {
    data: [37, 37, 36, 36, 36, 36, 36, 36, 36, 29, 34, 32],
    label: 'Scala',
  },
  {
    data: [11, 11, 13, 13, 13, 13, 13, 13, 13, 11, 11, 12],
    label: 'Go',
  },
  {
    data: [20, 20, 25, 25, 25, 25, 25, 25, 25, null, null, 49],
    label: 'Groovy',
  },
  {
    data: [24, 24, 26, 26, 26, 26, 26, 26, 26, 20, 20, 20],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [375215, 375215, 377012, 377012, 377012, 377012, 377012, 377012, 377012, 387307, 389705, 391242],
    label: 'C',
  },
  {
    data: [756421, 756421, 759492, 759492, 759492, 759492, 759492, 759492, 759492, 779768, 783061, 785361],
    label: 'C++',
  },
  {
    data: [1831039, 1831039, 1836510, 1836510, 1836510, 1836510, 1836510, 1836510, 1836510, 1871805, 1877376, 1881509],
    label: 'Java',
  },
  {
    data: [2343751, 2343751, 2355359, 2355359, 2355359, 2355359, 2355359, 2355359, 2355359, 2438564, 2452206, 2461656],
    label: 'JavaScript',
  },
  {
    data: [1902093, 1902093, 1920216, 1920216, 1920216, 1920216, 1920216, 1920216, 1920216, 2045702, 2068387, 2083655],
    label: 'Python',
  },
  {
    data: [309994, 309994, 311099, 311099, 311099, 311099, 311099, 311099, 311099, 320118, 321754, 322960],
    label: 'Swift',
  },
  {
    data: [438960, 438960, 442786, 442786, 442786, 442786, 442786, 442786, 442786, 468027, 472914, 475952],
    label: 'R',
  },
  {
    data: [1525480, 1525480, 1530302, 1530302, 1530302, 1530302, 1530302, 1530302, 1530302, 1564533, 1570515, 1574727],
    label: 'C#',
  },
  {
    data: [223089, 223089, 223499, 223499, 223499, 223499, 223499, 223499, 223499, 226102, 226550, 226857],
    label: 'Ruby',
  },
  {
    data: [1430032, 1430032, 1432284, 1432284, 1432284, 1432284, 1432284, 1432284, 1432284, 1448590, 1451001, 1452891],
    label: 'PHP',
  },
  {
    data: [70255, 70255, 71541, 71541, 71541, 71541, 71541, 71541, 71541, 80358, 81965, 83115],
    label: 'Kotlin',
  },
  {
    data: [107730, 107730, 108018, 108018, 108018, 108018, 108018, 108018, 108018, 109957, 110288, 110525],
    label: 'Scala',
  },
  {
    data: [59827, 59827, 60557, 60557, 60557, 60557, 60557, 60557, 60557, 65260, 66105, 66608],
    label: 'Go',
  },
  {
    data: [28082, 28082, 28212, 28212, 28212, 28212, 28212, 28212, 28212, 28997, 29156, 29266],
    label: 'Groovy',
  },
  {
    data: [26877, 26877, 27427, 27427, 27427, 27427, 27427, 27427, 27427, 31734, 32709, 33424],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6851, 6851, 6520, 6520, 6520, 6520, 6520, 6520, 6520, 6709, 6839, 6886],
    label: 'C',
  },
  {
    data: [6851, 6851, 6520, 6520, 6520, 6520, 6520, 6520, 6520, 6709, 6839, 6886],
    label: 'C++',
  },
  {
    data: [91555, 91555, 89009, 89009, 89009, 89009, 89009, 89009, 89009, 85046, 83776, 80432],
    label: 'Java',
  },
  {
    data: [107177, 107177, 104241, 104241, 104241, 104241, 104241, 104241, 104241, 94780, 94236, 92408],
    label: 'JavaScript',
  },
  {
    data: [39873, 39873, 39758, 39758, 39758, 39758, 39758, 39758, 39758, 39977, 41032, 40031],
    label: 'Python',
  },
  {
    data: [2487, 2487, 2501, 2501, 2501, 2501, 2501, 2501, 2501, 2510, 2560, 2556],
    label: 'Swift',
  },
  {
    data: [35828, 35828, 35771, 35771, 35771, 35771, 35771, 35771, 35771, 35300, 35366, 35230],
    label: 'C#',
  },
  {
    data: [6445, 6445, 6466, 6466, 6466, 6466, 6466, 6466, 6466, 6576, 6521, 6275],
    label: 'Ruby',
  },
  {
    data: [20576, 20576, 20281, 20281, 20281, 20281, 20281, 20281, 20281, 19151, 19031, 19095],
    label: 'PHP',
  },
  {
    data: [5472, 5472, 5482, 5482, 5482, 5482, 5482, 5482, 5482, 5668, 5685, 5707],
    label: 'Kotlin',
  },
  {
    data: [20468, 20468, 20490, 20490, 20490, 20490, 20490, 20490, 20490, 19055, 18132, 18157],
    label: 'Scala',
  },
  {
    data: [4214, 4214, 4880, 4880, 4880, 4880, 4880, 4880, 4880, 4777, 4840, 4848],
    label: 'Go',
  },
  {
    data: [719, 719, 718, 718, 718, 718, 718, 718, 718, 751, 775, 779],
    label: 'Groovy',
  },
  {
    data: [1195, 1195, 1201, 1201, 1201, 1201, 1201, 1201, 1201, 1358, 1390, 1399],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [122692, 122692, 123151, 123151, 123151, 123151, 123151, 123151, 123151, 144977, 127365, 128171],
    label: 'C',
  },
  {
    data: [122692, 122692, 123151, 123151, 123151, 123151, 123151, 123151, 123151, 144977, 127365, 128171],
    label: 'C++',
  },
  {
    data: [1666049, 1666049, 1615033, 1615033, 1615033, 1615033, 1615033, 1615033, 1615033, 1391097, 1369320, 1356092],
    label: 'Java',
  },
  {
    data: [4408947, 4408947, 4312914, 4312914, 4312914, 4312914, 4312914, 4312914, 4312914, 3738452, 3695057, 3656281],
    label: 'JavaScript',
  },
  {
    data: [2579016, 2579016, 2579713, 2579713, 2579713, 2579713, 2579713, 2579713, 2579713, 2638895, 2650419, 2656002],
    label: 'Python',
  },
  {
    data: [189053, 189053, 181001, 181001, 181001, 181001, 181001, 181001, 181001, 168014, 167753, 161480],
    label: 'Swift',
  },
  {
    data: [635577, 635577, 636119, 636119, 636119, 636119, 636119, 636119, 636119, 648111, 636422, 637933],
    label: 'C#',
  },
  {
    data: [777581, 777581, 771398, 771398, 771398, 771398, 771398, 771398, 771398, 754215, 755696, 753822],
    label: 'Ruby',
  },
  {
    data: [1134026, 1134026, 1105835, 1105835, 1105835, 1105835, 1105835, 1105835, 1105835, 949219, 936362, 922453],
    label: 'PHP',
  },
  {
    data: [146348, 146348, 150562, 150562, 150562, 150562, 150562, 150562, 150562, 165791, 167453, 167516],
    label: 'Kotlin',
  },
  {
    data: [444990, 444990, 437487, 437487, 437487, 437487, 437487, 437487, 437487, 384186, 376813, 375864],
    label: 'Scala',
  },
  {
    data: [191189, 191189, 281692, 281692, 281692, 281692, 281692, 281692, 281692, 264149, 262968, 258626],
    label: 'Go',
  },
  {
    data: [38447, 38447, 35218, 35218, 35218, 35218, 35218, 35218, 35218, 36478, 41239, 41309],
    label: 'Groovy',
  },
  {
    data: [84721, 84721, 85916, 85916, 85916, 85916, 85916, 85916, 85916, 90661, 90548, 90932],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 13, 12, 12, 12, 12, 12, 12, 12, 15, 17, 17],
    label: 'C',
  },
  {
    data: [13, 13, 12, 12, 12, 12, 12, 12, 12, 15, 17, 17],
    label: 'C++',
  },
  {
    data: [89, 89, 86, 86, 86, 86, 86, 86, 86, 77, 72, 66],
    label: 'Java',
  },
  {
    data: [133, 133, 130, 130, 130, 130, 130, 130, 130, 114, 111, 105],
    label: 'JavaScript',
  },
  {
    data: [43, 43, 41, 41, 41, 41, 41, 41, 41, 45, 48, 48],
    label: 'Python',
  },
  {
    data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    label: 'Swift',
  },
  {
    data: [33, 33, 32, 32, 32, 32, 32, 32, 32, 34, 34, 33],
    label: 'C#',
  },
  {
    data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 15, 13, 12],
    label: 'Ruby',
  },
  {
    data: [31, 31, 30, 30, 30, 30, 30, 30, 30, 28, 26, 26],
    label: 'PHP',
  },
  {
    data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    label: 'Kotlin',
  },
  {
    data: [22, 22, 22, 22, 22, 22, 22, 22, 22, 20, 18, 18],
    label: 'Scala',
  },
  {
    data: [9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8],
    label: 'Go',
  },
  {
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    label: 'Groovy',
  },
  {
    data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [236, 236, 235, 235, 235, 235, 235, 235, 235, 228, 228, 229],
    label: 'C',
  },
  {
    data: [236, 236, 235, 235, 235, 235, 235, 235, 235, 228, 228, 229],
    label: 'C++',
  },
  {
    data: [1801, 1801, 1747, 1747, 1747, 1747, 1747, 1747, 1747, 1534, 1490, 1468],
    label: 'Java',
  },
  {
    data: [4484, 4484, 4378, 4378, 4378, 4378, 4378, 4378, 4378, 3774, 3688, 3621],
    label: 'JavaScript',
  },
  {
    data: [2330, 2330, 2292, 2292, 2292, 2292, 2292, 2292, 2292, 2271, 2284, 2273],
    label: 'Python',
  },
  {
    data: [261, 261, 256, 256, 256, 256, 256, 256, 256, 228, 225, 221],
    label: 'Swift',
  },
  {
    data: [768, 768, 760, 760, 760, 760, 760, 760, 760, 737, 697, 694],
    label: 'C#',
  },
  {
    data: [647, 647, 636, 636, 636, 636, 636, 636, 636, 604, 600, 595],
    label: 'Ruby',
  },
  {
    data: [1665, 1665, 1627, 1627, 1627, 1627, 1627, 1627, 1627, 1456, 1429, 1393],
    label: 'PHP',
  },
  {
    data: [228, 228, 230, 230, 230, 230, 230, 230, 230, 236, 236, 235],
    label: 'Kotlin',
  },
  {
    data: [521, 521, 508, 508, 508, 508, 508, 508, 508, 450, 439, 436],
    label: 'Scala',
  },
  {
    data: [290, 290, 376, 376, 376, 376, 376, 376, 376, 345, 333, 330],
    label: 'Go',
  },
  {
    data: [46, 46, 45, 45, 45, 45, 45, 45, 45, 44, 45, 45],
    label: 'Groovy',
  },
  {
    data: [215, 215, 218, 218, 218, 218, 218, 218, 218, 217, 217, 216],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [127888, 127888, 129699, 129699, 129699, 129699, 129699, 129699, 129699, 140155, 141999, 143607],
    label: 'linux (C)',
  },
  {
    data: [163295, 163295, 164034, 164034, 164034, 164034, 164034, 164034, 164034, 168542, 169414, 169980],
    label: 'tensorflow (C++)',
  },
  {
    data: [73493, 73493, 74125, 74125, 74125, 74125, 74125, 74125, 74125, 77612, 78523, null],
    label: 'java-design-patterns (Java)',
  },
  {
    data: [343388, 343388, 343393, 343393, 343393, 343393, 343393, 343393, 343393, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [165041, 165041, 170146, 170146, 170146, 170146, 170146, 170146, 170146, 200581, 204458, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [39063, 39063, 39239, 39239, 39239, 39239, 39239, 39239, 39239, 40873, 41213, 41445],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [5297, 5297, 5341, 5341, 5341, 5341, 5341, 5341, 5341, 5625, 5685, 5714],
    label: 'ggplot2 (R)',
  },
  {
    data: [69609, 69609, 70970, 70970, 70970, 70970, 70970, 70970, 70970, 80213, 82643, 83921],
    label: 'PowerToys (C#)',
  },
  {
    data: [50258, 50258, 50453, 50453, 50453, 50453, 50453, 50453, 50453, 51616, 51854, 51997],
    label: 'rails (Ruby)',
  },
  {
    data: [68893, 68893, 69244, 69244, 69244, 69244, 69244, 69244, 69244, 71249, 71596, null],
    label: 'laravel (PHP)',
  },
  {
    data: [40517, 40517, 40833, 40833, 40833, 40833, 40833, 40833, 40833, 42911, 43212, 43455],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [32192, 32192, 32469, 32469, 32469, 32469, 32469, 32469, 32469, 34167, 34471, 34635],
    label: 'spark (Scala)',
  },
  {
    data: [96051, 96051, 97399, 97399, 97399, 97399, 97399, 97399, 97399, 104956, 106205, 107097],
    label: 'go (Go)',
  },
  {
    data: [13110, 13110, 13216, 13216, 13216, 13216, 13216, 13216, 13216, 13965, 14102, 14184],
    label: 'gradle (Groovy)',
  },
  {
    data: [260315, 260315, 261626, 261626, 261626, 261626, 261626, 261626, 261626, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [5297, 5297, 5341, 5341, 5341, 5341, 5341, 5341, 5341, 5625, 5685, 5714],
    label: 'ggplot2',
  },
  {
    data: [4923, 4923, 4954, 4954, 4954, 4954, 4954, 4954, 4954, 5219, 5266, 5302],
    label: 'awesome-R',
  },
  {
    data: [4583, 4583, 4621, 4621, 4621, 4621, 4621, 4621, 4621, 4806, 4845, 4874],
    label: 'shiny',
  },
  {
    data: [4019, 4019, 4048, 4048, 4048, 4048, 4048, 4048, 4048, 4239, 4269, 4293],
    label: 'dplyr',
  },
  {
    data: [3829, 3829, 3852, 3852, 3852, 3852, 3852, 3852, 3852, 3963, 3987, 3995],
    label: 'swirl_courses',
  },
  {
    data: [3614, 3614, 3615, 3615, 3615, 3615, 3615, 3615, 3615, 3631, 3631, 3632],
    label: 'ML_for_Hackers',
  },
  {
    data: [3431, 3431, 3435, 3435, 3435, 3435, 3435, 3435, 3435, 3470, 3470, 3470],
    label: 'AnomalyDetection',
  },
  {
    data: [3356, 3356, 3391, 3391, 3391, 3391, 3391, 3391, 3391, 3730, null, null],
    label: 'r4ds',
  },
  {
    data: [2975, 2975, 2998, 2998, 2998, 2998, 2998, 2998, 2998, 3131, 3165, 3186],
    label: 'data.table',
  },
  {
    data: [2709, 2709, 2897, 2897, 2897, 2897, 2897, 2897, 2897, 3728, 3833, 3906],
    label: 'stat_rethinking_2022',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 2861, 2880],
    label: 'awesome-network-analysis',
  },
];

langToProjects.Swift = [
  {
    data: [39063, 39063, 39239, 39239, 39239, 39239, 39239, 39239, 39239, 40873, 41213, 41445],
    label: 'awesome-ios',
  },
  {
    data: [37185, 37185, 37425, 37425, 37425, 37425, 37425, 37425, 37425, 38470, 38632, 38723],
    label: 'Alamofire',
  },
  {
    data: [30176, 30176, 30266, 30266, 30266, 30266, 30266, 30266, 30266, 30700, 30810, 30861],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [29636, 29636, 29925, 29925, 29925, 29925, 29925, 29925, 29925, 32632, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [29519, 29519, 29798, 29798, 29798, 29798, 29798, 29798, 29798, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [29360, 29360, 29623, 29623, 29623, 29623, 29623, 29623, 29623, 31490, 31835, 32048],
    label: 'iina',
  },
  {
    data: [26010, 26010, 26146, 26146, 26146, 26146, 26146, 26146, 26146, 27006, 27142, 27237],
    label: 'swift-algorithm-club',
  },
  {
    data: [25049, 25049, 25154, 25154, 25154, 25154, 25154, 25154, 25154, 26124, 26240, 26283],
    label: 'Charts',
  },
  {
    data: [22509, 22509, 22571, 22571, 22571, 22571, 22571, 22571, 22571, 23233, 23361, 23565],
    label: 'lottie-ios',
  },
  {
    data: [21682, 21682, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-swift',
  },
  {
    data: [null, null, 22015, 22015, 22015, 22015, 22015, 22015, 22015, 22801, 22948, 23066],
    label: 'RxSwift',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 22182, 22297, 22369],
    label: 'vapor',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 21659, 21703],
    label: 'SwiftyJSON',
  },
];

langToProjects['C#'] = [
  {
    data: [69609, 69609, 70970, 70970, 70970, 70970, 70970, 70970, 70970, 80213, 82643, 83921],
    label: 'PowerToys',
  },
  {
    data: [53953, 53953, 54157, 54157, 54157, 54157, 54157, 54157, 54157, 55276, 55486, 55615],
    label: 'shadowsocks-windows',
  },
  {
    data: [32115, 32115, 32774, 32774, 32774, 32774, 32774, 32774, 32774, 35373, null, 36594],
    label: 'PowerShell',
  },
  {
    data: [27428, 27428, 27727, 27727, 27727, 27727, 27727, 27727, 27727, 29923, 30258, 30452],
    label: 'aspnetcore',
  },
  {
    data: [26273, 26273, 27282, 27282, 27282, 27282, 27282, 27282, 27282, 32968, null, 35166],
    label: 'v2rayN',
  },
  {
    data: [23246, 23246, 23230, 23230, 23230, 23230, 23230, 23230, 23230, 23090, 23079, 23061],
    label: 'CodeHub',
  },
  {
    data: [21416, 21416, 21543, 21543, 21543, 21543, 21543, 21543, 21543, 22328, 22453, 22533],
    label: 'Wox',
  },
  {
    data: [20990, 20990, 21594, 21594, 21594, 21594, 21594, 21594, 21594, 24765, 25275, null],
    label: 'Files',
  },
  {
    data: [20234, 20234, 20454, 20454, 20454, 20454, 20454, 20454, 20454, 21927, 22218, 22376],
    label: 'dnSpy',
  },
  {
    data: [19934, 19934, 20206, 20206, 20206, 20206, 20206, 20206, 20206, null, 22040, 22190],
    label: 'eShopOnContainers',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 21967, null, null],
    label: 'ShareX',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 20280, 20405],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 18834, null],
    label: 'ScreenToGif',
  },
];

langToProjects.C = [
  {
    data: [127888, 127888, 129699, 129699, 129699, 129699, 129699, 129699, 129699, 140155, 141999, 143607],
    label: 'linux',
  },
  {
    data: [62046, 62046, 63424, 63424, 63424, 63424, 63424, 63424, 63424, 71816, 73603, 74801],
    label: 'scrcpy',
  },
  {
    data: [58313, 58313, 58661, 58661, 58661, 58661, 58661, 58661, 58661, 60911, 61318, 61557],
    label: 'netdata',
  },
  {
    data: [53755, 53755, 54231, 54231, 54231, 54231, 54231, 54231, 54231, 57264, 57757, 58022],
    label: 'redis',
  },
  {
    data: [41257, 41257, 41598, 41598, 41598, 41598, 41598, 41598, 41598, 43981, 44407, 44681],
    label: 'git',
  },
  {
    data: [36602, 36602, 37348, 37348, 37348, 37348, 37348, 37348, 37348, 42419, 43307, 44238],
    label: 'obs-studio',
  },
  {
    data: [33396, 33396, 33545, 33545, 33545, 33545, 33545, 33545, 33545, 34471, 34655, 34773],
    label: 'php-src',
  },
  {
    data: [31998, 31998, 33113, 33113, 33113, 33113, 33113, 33113, 33113, 40577, 41947, 43192],
    label: 'Ventoy',
  },
  {
    data: [31418, 31418, 31652, 31652, 31652, 31652, 31652, 31652, 31652, 33089, 33392, 33549],
    label: 'wrk',
  },
  {
    data: [30064, 30064, 30171, 30171, 30171, 30171, 30171, 30171, 30171, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 32290, 32924, 33342],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [50258, 50258, 50453, 50453, 50453, 50453, 50453, 50453, 50453, 51616, 51854, 51997],
    label: 'rails',
  },
  {
    data: [44196, 44196, 44412, 44412, 44412, 44412, 44412, 44412, 44412, 45462, 45678, 45799],
    label: 'jekyll',
  },
  {
    data: [35114, 35114, 35425, 35425, 35425, 35425, 35425, 35425, 35425, 36654, 36907, 37061],
    label: 'discourse',
  },
  {
    data: [34976, 34976, 35320, 35320, 35320, 35320, 35320, 35320, 35320, 36689, 36991, 37211],
    label: 'huginn',
  },
  {
    data: [34168, 34168, 34350, 34350, 34350, 34350, 34350, 34350, 34350, 35941, 36072, 36162],
    label: 'fastlane',
  },
  {
    data: [31212, 31212, 31616, 31616, 31616, 31616, 31616, 31616, 31616, 33724, 34164, 34414],
    label: 'brew',
  },
  {
    data: [28592, 28592, 28733, 28733, 28733, 28733, 28733, 28733, 28733, 29449, 29567, 29666],
    label: 'awesome-awesomeness',
  },
  {
    data: [27834, 27834, 28135, 28135, 28135, 28135, 28135, 28135, 28135, 29900, 30247, 30456],
    label: 'devdocs',
  },
  {
    data: [26852, 26852, 27283, 27283, 27283, 27283, 27283, 27283, 27283, 30106, 36945, 38767],
    label: 'mastodon',
  },
  {
    data: [26519, 26519, 26801, 26801, 26801, 26801, 26801, 26801, 26801, 28509, 28825, 29021],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [68893, 68893, 69244, 69244, 69244, 69244, 69244, 69244, 69244, 71249, 71596, null],
    label: 'laravel',
  },
  {
    data: [37272, 37272, 37985, 37985, 37985, 37985, 37985, 37985, 37985, 42461, 43343, null],
    label: 'SecLists',
  },
  {
    data: [31087, 31087, 31084, 31084, 31084, 31084, 31084, 31084, 31084, 31060, null, 31059],
    label: 'jQuery-File-Upload',
  },
  {
    data: [26557, 26557, 26674, 26674, 26674, 26674, 26674, 26674, 26674, 27555, 27672, 27773],
    label: 'symfony',
  },
  {
    data: [26404, 26404, 26655, 26655, 26655, 26655, 26655, 26655, 26655, 28110, 28390, null],
    label: 'framework',
  },
  {
    data: [26376, 26376, 26408, 26408, 26408, 26408, 26408, 26408, 26408, 26618, 26644, 26648],
    label: 'Faker',
  },
  {
    data: [26272, 26272, 26366, 26366, 26366, 26366, 26366, 26366, 26366, 27027, 27117, null],
    label: 'composer',
  },
  {
    data: [21515, 21515, 21659, 21659, 21659, 21659, 21659, 21659, 21659, 22139, null, 22266],
    label: 'guzzle',
  },
  {
    data: [20343, 20343, 20418, 20418, 20418, 20418, 20418, 20418, 20418, null, 20934, 21004],
    label: 'DesignPatternsPHP',
  },
  {
    data: [19502, 19502, 19555, 19555, 19555, 19555, 19555, 19555, 19555, 19962, 20026, 20074],
    label: 'monolog',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 20405, 20763, 20956],
    label: 'server',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 18755, null],
    label: 'phpunit',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 19041],
    label: 'PHPMailer',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 18444],
    label: 'monica',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 17162],
    label: 'matomo',
  },
];

langToProjects['C++'] = [
  {
    data: [163295, 163295, 164034, 164034, 164034, 164034, 164034, 164034, 164034, 168542, 169414, 169980],
    label: 'tensorflow',
  },
  {
    data: [100569, 100569, 101116, 101116, 101116, 101116, 101116, 101116, 101116, 104172, 104718, 105148],
    label: 'electron',
  },
  {
    data: [81432, 81432, 82094, 82094, 82094, 82094, 82094, 82094, 82094, 85737, 86242, 86791],
    label: 'terminal',
  },
  {
    data: [62250, 62250, 62984, 62984, 62984, 62984, 62984, 62984, 62984, 66602, 67191, 67540],
    label: 'bitcoin',
  },
  {
    data: [60029, 60029, 60677, 60677, 60677, 60677, 60677, 60677, 60677, 64398, 65114, 65582],
    label: 'opencv',
  },
  {
    data: [58837, 58837, 59164, 59164, 59164, 59164, 59164, 59164, 59164, 60889, 61221, 61454],
    label: 'swift',
  },
  {
    data: [54332, 54332, 55045, 55045, 55045, 55045, 55045, 55045, 55045, 59743, 60644, 61247],
    label: 'pytorch',
  },
  {
    data: [53270, 53270, 53699, 53699, 53699, 53699, 53699, 53699, 53699, 56683, 57253, 57524],
    label: 'protobuf',
  },
  {
    data: [46725, 46725, 47760, 47760, 47760, 47760, 47760, 47760, 47760, 54385, 55587, 56317],
    label: 'godot',
  },
  {
    data: [44195, 44195, 44584, 44584, 44584, 44584, 44584, 44584, 44584, 47100, 47655, 48038],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [182674, 182674, 187491, 187491, 187491, 187491, 187491, 187491, 187491, null, null, null],
    label: 'public-apis',
  },
  {
    data: [165041, 165041, 170146, 170146, 170146, 170146, 170146, 170146, 170146, 200581, 204458, null],
    label: 'system-design-primer',
  },
  {
    data: [130413, 130413, 133970, 133970, 133970, 133970, 133970, 133970, 133970, 147266, 149412, null],
    label: 'Python',
  },
  {
    data: [112959, 112959, 116636, 116636, 116636, 116636, 116636, 116636, 116636, 126531, null, 129063],
    label: 'Python-100-Days',
  },
  {
    data: [110661, 110661, 122074, 122074, 122074, 122074, 122074, 122074, 122074, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [104414, 104414, 108205, 108205, 108205, 108205, 108205, 108205, 108205, 114265, 115268, null],
    label: 'youtube-dl',
  },
  {
    data: [72252, 72252, 73195, 73195, 73195, 73195, 73195, 73195, 73195, null, null, null],
    label: 'models',
  },
  {
    data: [67042, 67042, 69758, 69758, 69758, 69758, 69758, 69758, 69758, 74187, 74664, null],
    label: 'thefuck',
  },
  {
    data: [62696, 62696, 63221, 63221, 63221, 63221, 63221, 63221, 63221, null, 67521, null],
    label: 'django',
  },
  {
    data: [58851, 58851, 60427, 60427, 60427, 60427, 60427, 60427, 60427, 72701, 75075, null],
    label: 'transformers',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 55136, 55607, null],
    label: 'ansible',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 51806, null, null],
    label: 'scikit-learn',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 48254, null, null],
    label: 'cpython',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 47576, null, null],
    label: 'manim',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 61899, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 56752, null],
    label: 'keras',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 48618, null],
    label: 'requests',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 31579],
    label: 'XX-Net',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 27712],
    label: 'HanLP',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 25535],
    label: 'MockingBird',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 23218],
    label: 'ray',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 22711],
    label: 'ItChat',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 22074],
    label: 'hosts',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 17864],
    label: 'dash',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 14726],
    label: 'recommenders',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 13662],
    label: 'loguru',
  },
];

langToProjects.JavaScript = [
  {
    data: [343388, 343388, 343393, 343393, 343393, 343393, 343393, 343393, 343393, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [194668, 194668, 194668, 194668, 194668, 194668, 194668, 194668, 194668, null, null, null],
    label: 'vue',
  },
  {
    data: [185727, 185727, 185725, 185725, 185725, 185725, 185725, 185725, 185725, null, null, null],
    label: 'react',
  },
  {
    data: [155703, 155703, 156215, 156215, 156215, 156215, 156215, 156215, 156215, 160034, null, 160994],
    label: 'bootstrap',
  },
  {
    data: [136338, 136338, 138142, 138142, 138142, 138142, 138142, 138142, 138142, 153193, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [121481, 121481, 121484, 121484, 121484, 121484, 121484, 121484, 121484, 128010, null, null],
    label: 'javascript',
  },
  {
    data: [101975, 101975, 101975, 101975, 101975, 101975, 101975, 101975, 101975, 105380, null, null],
    label: 'react-native',
  },
  {
    data: [100489, 100489, 100841, 100841, 100841, 100841, 100841, 100841, 100841, 103193, 103566, null],
    label: 'd3',
  },
  {
    data: [92422, 92422, 94303, 94303, 94303, 94303, 94303, 94303, 94303, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [90102, 90102, null, null, null, null, null, null, null, null, null, 97928],
    label: 'axios',
  },
  {
    data: [null, null, 93676, 93676, 93676, 93676, 93676, 93676, 93676, 103845, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 82133, 82900, null],
    label: 'material-ui',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 70294, null, 70663],
    label: 'Font-Awesome',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 59369, null, null],
    label: 'angular.js',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 58671, null, null],
    label: 'express',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 57390, null],
    label: 'markdown-here',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 26876, null],
    label: 'Awesome-Design-Tools',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 23017, null],
    label: 'AI-Expert-Roadmap',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 22341, null],
    label: 'sails',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 22253, null],
    label: 'draft-js',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 20901, null],
    label: 'passport',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 20523, null],
    label: 'tips',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 19741, null],
    label: 'snowpack',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 62238],
    label: 'webpack',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 50094],
    label: 'leetcode',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 45353],
    label: 'hacker-scripts',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 41955],
    label: 'algorithm-visualizer',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 37534],
    label: 'uni-app',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 36438],
    label: 'edex-ui',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 35907],
    label: 'hexo',
  },
];

langToProjects.Java = [
  {
    data: [73493, 73493, 74125, 74125, 74125, 74125, 74125, 74125, 74125, 77612, 78523, null],
    label: 'java-design-patterns',
  },
  {
    data: [69525, 69525, 69526, 69526, 69526, 69526, 69526, 69526, 69526, 71715, 71966, 72081],
    label: 'LeetCodeAnimation',
  },
  {
    data: [62062, 62062, 62063, 62063, 62063, 62063, 62063, 62063, 62063, 67275, null, null],
    label: 'advanced-java',
  },
  {
    data: [59872, 59872, 60432, 60432, 60432, 60432, 60432, 60432, 60432, 63693, null, null],
    label: 'spring-boot',
  },
  {
    data: [58719, 58719, 59070, 59070, 59070, 59070, 59070, 59070, 59070, null, 62012, null],
    label: 'elasticsearch',
  },
  {
    data: [56397, 56397, 56751, 56751, 56751, 56751, 56751, 56751, 56751, 58418, 58709, 58864],
    label: 'interviews',
  },
  {
    data: [56356, 56356, 57140, 57140, 57140, 57140, 57140, 57140, 57140, 61697, null, null],
    label: 'mall',
  },
  {
    data: [46378, 46378, 47008, 47008, 47008, 47008, 47008, 47008, 47008, 49437, null, 50255],
    label: 'spring-framework',
  },
  {
    data: [45922, 45922, 45923, 45923, 45923, 45923, 45923, 45923, 45923, null, null, null],
    label: 'RxJava',
  },
  {
    data: [44085, 44085, null, null, null, null, null, null, null, 45975, null, null],
    label: 'guava',
  },
  {
    data: [null, null, 45396, 45396, 45396, 45396, 45396, 45396, 45396, null, 49148, null],
    label: 'Java',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 40656, null, 40935],
    label: 'retrofit',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 37986, null, 38213],
    label: 'dubbo',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 36073, 36481],
    label: 'ghidra',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 35860, null],
    label: 'MPAndroidChart',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 33395, 33483],
    label: 'lottie-android',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 33173, null],
    label: 'glide',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 32416, 32747],
    label: 'jadx',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 32882],
    label: 'jeecg-boot',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, 30523],
    label: 'zxing',
  },
];

langToProjects.Rust = [
  {
    data: [260315, 260315, 261626, 261626, 261626, 261626, 261626, 261626, 261626, null, null, null],
    label: '996.ICU',
  },
  {
    data: [80622, 80622, 81392, 81392, 81392, 81392, 81392, 81392, 81392, 85943, 86601, 87003],
    label: 'deno',
  },
  {
    data: [64033, 64033, 65191, 65191, 65191, 65191, 65191, 65191, 65191, 73484, 74991, 75888],
    label: 'rust',
  },
  {
    data: [37770, 37770, 38336, 38336, 38336, 38336, 38336, 38336, 38336, 42474, 43309, 43719],
    label: 'alacritty',
  },
  {
    data: [33606, 33606, 35771, 35771, 35771, 35771, 35771, 35771, 35771, 52997, 54610, 56026],
    label: 'tauri',
  },
  {
    data: [32791, 32791, 33331, 33331, 33331, 33331, 33331, 33331, 33331, 37701, 38350, 38734],
    label: 'bat',
  },
  {
    data: [29656, 29656, 30158, 30158, 30158, 30158, 30158, 30158, 30158, 33801, 34504, 34943],
    label: 'ripgrep',
  },
  {
    data: [24531, 24531, 25103, 25103, 25103, 25103, 25103, 25103, 25103, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [22849, 22849, 24255, 24255, 24255, 24255, 24255, 24255, 24255, 29732, 30918, 31524],
    label: 'starship',
  },
  {
    data: [22498, 22498, null, null, null, null, null, null, null, 30803, 32110, 33020],
    label: 'rustlings',
  },
  {
    data: [null, null, 25490, 25490, 25490, 25490, 25490, 25490, 25490, 30305, 31081, 31592],
    label: 'meilisearch',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 30410, 33773, 35004],
    label: 'rustdesk',
  },
];

langToProjects.Kotlin = [
  {
    data: [41689, 41689, 41886, 41886, 41886, 41886, 41886, 41886, 41886, 43038, 43227, 43334],
    label: 'okhttp',
  },
  {
    data: [40517, 40517, 40833, 40833, 40833, 40833, 40833, 40833, 40833, 42911, 43212, 43455],
    label: 'kotlin',
  },
  {
    data: [40253, 40253, 40452, 40452, 40452, 40452, 40452, 40452, 40452, 41651, 41863, 42007],
    label: 'architecture-samples',
  },
  {
    data: [32344, 32344, 32430, 32430, 32430, 32430, 32430, 32430, 32430, 32974, 33112, 33193],
    label: 'shadowsocks-android',
  },
  {
    data: [27272, 27272, 27408, 27408, 27408, 27408, 27408, 27408, 27408, 27945, 28044, 28115],
    label: 'leakcanary',
  },
  {
    data: [26975, 26975, 27186, 27186, 27186, 27186, 27186, 27186, 27186, 28346, 28516, 28615],
    label: 'p3c',
  },
  {
    data: [24072, 24072, 24480, 24480, 24480, 24480, 24480, 24480, 24480, 27181, 27842, 28235],
    label: 'fanqiang',
  },
  {
    data: [21557, 21557, 21690, 21690, 21690, 21690, 21690, 21690, 21690, 22294, 22422, 22478],
    label: 'architecture-components-samples',
  },
  {
    data: [21168, 21168, 21270, 21270, 21270, 21270, 21270, 21270, 21270, 21661, 21697, 21717],
    label: 'iosched',
  },
  {
    data: [19183, 19183, 19220, 19220, 19220, 19220, 19220, 19220, 19220, 19420, null, null],
    label: 'material-dialogs',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 19898, 20215],
    label: 'tachiyomi',
  },
];

langToProjects.Scala = [
  {
    data: [32192, 32192, 32469, 32469, 32469, 32469, 32469, 32469, 32469, 34167, 34471, 34635],
    label: 'spark',
  },
  {
    data: [16841, 16841, 16830, 16830, 16830, 16830, 16830, 16830, 16830, 16792, 16779, 16764],
    label: 'prisma1',
  },
  {
    data: [13652, 13652, 13693, 13693, 13693, 13693, 13693, 13693, 13693, 13907, 13945, 13969],
    label: 'scala',
  },
  {
    data: [12517, 12517, 12512, 12512, 12512, 12512, 12512, 12512, 12512, 12521, 12540, 12542],
    label: 'predictionio',
  },
  {
    data: [12094, 12094, 12106, 12106, 12106, 12106, 12106, 12106, 12106, 12237, 12266, 12291],
    label: 'playframework',
  },
  {
    data: [12059, 12059, 12117, 12117, 12117, 12117, 12117, 12117, 12117, 12523, 12548, 12565],
    label: 'akka',
  },
  {
    data: [10939, 10939, 11311, 11311, 11311, 11311, 11311, 11311, 11311, 12132, 12314, 12479],
    label: 'lila',
  },
  {
    data: [10659, 10659, 10710, 10710, 10710, 10710, 10710, 10710, 10710, 11070, 11120, 11167],
    label: 'CMAK',
  },
  {
    data: [8599, 8599, 8615, 8615, 8615, 8615, 8615, 8615, 8615, 8767, 8798, 8810],
    label: 'gitbucket',
  },
  {
    data: [8403, 8403, 8471, 8471, 8471, 8471, 8471, 8471, 8471, 9025, 9133, 9196],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [13110, 13110, 13216, 13216, 13216, 13216, 13216, 13216, 13216, 13965, 14102, 14184],
    label: 'gradle',
  },
  {
    data: [4504, 4504, 4531, 4531, 4531, 4531, 4531, 4531, 4531, 4717, 4766, 4800],
    label: 'rundeck',
  },
  {
    data: [4165, 4165, 4251, 4251, 4251, 4251, 4251, 4251, 4251, 5591, 5911, 6199],
    label: 'devops-resources',
  },
  {
    data: [3843, 3843, 3871, 3871, 3871, 3871, 3871, 3871, 3871, 3975, 3992, 3998],
    label: 'pipeline-examples',
  },
  {
    data: [3627, 3627, 3649, 3649, 3649, 3649, 3649, 3649, 3649, 3774, 3787, 3795],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3175, 3175, 3219, 3219, 3219, 3219, 3219, 3219, 3219, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2847, 2847, 2872, 2872, 2872, 2872, 2872, 2872, 2872, 3062, 3098, 3115],
    label: 'shadow',
  },
  {
    data: [2280, 2280, 2313, 2313, 2313, 2313, 2313, 2313, 2313, 2416, 2430, 2446],
    label: 'SmartThingsPublic',
  },
  {
    data: [2233, 2233, 2233, 2233, 2233, 2233, 2233, 2233, 2233, 2231, 2233, 2234],
    label: 'asgard',
  },
  {
    data: [2198, 2198, 2267, 2267, 2267, 2267, 2267, 2267, 2267, 2567, 2614, 2638],
    label: 'fat-aar-android',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, 1873, null, null],
    label: 'bintray-release',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, 1900, 1926],
    label: 'nextflow',
  },
];

langToProjects.Go = [
  {
    data: [96051, 96051, 97399, 97399, 97399, 97399, 97399, 97399, 97399, 104956, 106205, 107097],
    label: 'go',
  },
  {
    data: [86030, 86030, 87064, 87064, 87064, 87064, 87064, 87064, 87064, 93065, 94123, 94716],
    label: 'kubernetes',
  },
  {
    data: [76222, 76222, 78103, 78103, 78103, 78103, 78103, 78103, 78103, 89749, 91975, 93565],
    label: 'awesome-go',
  },
  {
    data: [62322, 62322, 62714, 62714, 62714, 62714, 62714, 62714, 62714, 64333, 64626, 64815],
    label: 'moby',
  },
  {
    data: [57419, 57419, 58057, 58057, 58057, 58057, 58057, 58057, 58057, 63166, 63959, 64425],
    label: 'hugo',
  },
  {
    data: [56070, 56070, 57148, 57148, 57148, 57148, 57148, 57148, 57148, 63753, 64745, 65358],
    label: 'gin',
  },
  {
    data: [53819, 53819, 54759, 54759, 54759, 54759, 54759, 54759, 54759, 61049, 62318, 63087],
    label: 'frp',
  },
  {
    data: [43283, 43283, 43792, 43792, 43792, 43792, 43792, 43792, 43792, 47245, 47950, 48404],
    label: 'syncthing',
  },
  {
    data: [42407, 42407, 43229, 43229, 43229, 43229, 43229, 43229, 43229, 47675, 48445, 48922],
    label: 'fzf',
  },
  {
    data: [41293, 41293, 41777, 41777, 41777, 41777, 41777, 41777, 41777, 44917, 45673, 46105],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [405925, 405925, 410472, 410472, 410472, 410472, 410472, 410472, 410472, 441223, 451338, 450447],
    label: 'C',
  },
  {
    data: [571856, 571856, 578584, 578584, 578584, 578584, 578584, 578584, 578584, 627027, 642225, 654297],
    label: 'C++',
  },
  {
    data: [1119446, 1119446, 1166863, 1166863, 1166863, 1166863, 1166863, 1166863, 1166863, 1198262, 1177692, 1133624],
    label: 'Java',
  },
  {
    data: [2084653, 2084653, 2030897, 2030897, 2030897, 2030897, 2030897, 2030897, 2030897, 2173079, 2096784, 2020639],
    label: 'JavaScript',
  },
  {
    data: [1452584, 1452584, 1688386, 1688386, 1688386, 1688386, 1688386, 1688386, 1688386, 1690376, 1696468, 1456645],
    label: 'Python',
  },
  {
    data: [140066, 140066, 141347, 141347, 141347, 141347, 141347, 141347, 141347, 150956, 153661, 155898],
    label: 'Swift',
  },
  {
    data: [100883, 100883, 102058, 102058, 102058, 102058, 102058, 102058, 102058, 109472, 111771, 113446],
    label: 'R',
  },
  {
    data: [474500, 474500, 480745, 480745, 480745, 480745, 480745, 480745, 480745, 519009, 520819, 526118],
    label: 'C#',
  },
  {
    data: [355242, 355242, 354881, 354881, 354881, 354881, 354881, 354881, 354881, 360478, 362356, 365805],
    label: 'Ruby',
  },
  {
    data: [536474, 536474, 539163, 539163, 539163, 539163, 539163, 539163, 539163, 557221, 565323, 562476],
    label: 'PHP',
  },
  {
    data: [107177, 107177, 109766, 109766, 109766, 109766, 109766, 109766, 109766, 125894, 130665, 134126],
    label: 'Kotlin',
  },
  {
    data: [48861, 48861, 48951, 48951, 48951, 48951, 48951, 48951, 48951, 50208, 50464, 50787],
    label: 'Scala',
  },
  {
    data: [259403, 259403, 262630, 262630, 262630, 262630, 262630, 262630, 262630, 286428, 292342, 297413],
    label: 'Go',
  },
  {
    data: [14683, 14683, 14674, 14674, 14674, 14674, 14674, 14674, 14674, 14949, 15027, 15167],
    label: 'Groovy',
  },
  {
    data: [92593, 92593, 94736, 94736, 94736, 94736, 94736, 94736, 94736, 111025, 115514, 119930],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1355, 1355, 1376, 1376, 1376, 1376, 1376, 1376, 1376, 1516, 1549, 1572],
    label: 'C',
  },
  {
    data: [1680, 1680, 1703, 1703, 1703, 1703, 1703, 1703, 1703, 1907, 1952, 1976],
    label: 'C++',
  },
  {
    data: [2920, 2920, 2936, 2936, 2936, 2936, 2936, 2936, 2936, 3092, 3116, 3129],
    label: 'Java',
  },
  {
    data: [6106, 6106, 6126, 6126, 6126, 6126, 6126, 6126, 6126, 6327, 6357, 6374],
    label: 'JavaScript',
  },
  {
    data: [4380, 4380, 4436, 4436, 4436, 4436, 4436, 4436, 4436, 4944, 5043, 5127],
    label: 'Python',
  },
  {
    data: [879, 879, 892, 892, 892, 892, 892, 892, 892, 940, 947, 950],
    label: 'Swift',
  },
  {
    data: [53, 53, 54, 54, 54, 54, 54, 54, 54, 61, 60, 60],
    label: 'R',
  },
  {
    data: [937, 937, 953, 953, 953, 953, 953, 953, 953, 1068, 1092, 1112],
    label: 'C#',
  },
  {
    data: [842, 842, 846, 846, 846, 846, 846, 846, 846, 870, 874, 880],
    label: 'Ruby',
  },
  {
    data: [1164, 1164, 1167, 1167, 1167, 1167, 1167, 1167, 1167, 1220, 1225, 1233],
    label: 'PHP',
  },
  {
    data: [351, 351, 358, 358, 358, 358, 358, 358, 358, 423, 434, 442],
    label: 'Kotlin',
  },
  {
    data: [151, 151, 152, 152, 152, 152, 152, 152, 152, 166, 165, 166],
    label: 'Scala',
  },
  {
    data: [2160, 2160, 2196, 2196, 2196, 2196, 2196, 2196, 2196, 2389, 2436, 2464],
    label: 'Go',
  },
  {
    data: [23, 23, 23, 23, 23, 23, 23, 23, 23, 21, 21, 20],
    label: 'Groovy',
  },
  {
    data: [594, 594, 609, 609, 609, 609, 609, 609, 609, 752, 796, 815],
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
