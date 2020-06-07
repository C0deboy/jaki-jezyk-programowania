/* eslint-disable max-len */

const labels = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'];
const lastYearLabels = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, 2, 2, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 3, 3, 4, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, 1, 1, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, 7, 7, 7, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 4, 4, 3, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 20, 19, 18, 11, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [12, 12, 15, 16, 21, 22, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [7, 7, 7, 6, 6, 6, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, 18, 16, 13, 15, 13, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 9, 9, 8, null, null, null, null, null, null],
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
    data: [16, 16, 18, 18, 19, 15, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, 38, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 2, 2, 1, 1, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, 4, 4, 4, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1, 1, 1, 1, 2, 2, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, 7, 7, 7, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, 3, 3, 3, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [9, 9, 10, 11, 11, 11, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [18, 18, 13, 10, 10, 9, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, 5, 5, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, 15, 13, 15, 13, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [8, 8, 8, 8, 8, 8, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [35, 35, 33, 30, 26, 30, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [32, 32, 25, 28, 28, 32, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [14, 14, 11, 12, 12, 12, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 23, 26, 48, 38, 31, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [30, 30, 29, 27, 21, 20, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [319433, 320732, 322763, 325586, 328724, 332437, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [650164, 652854, 657327, 662673, 668431, 675391, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1624553, 1631459, 1641974, 1654397, 1666806, 1680718, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1929253, 1940188, 1956810, 1976582, 1997486, 2023056, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1323684, 1338063, 1360921, 1387274, 1415686, 1450846, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [252819, 254671, 257590, 260997, 264287, 268290, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [322231, 325100, 329936, 335567, 341408, 348281, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1372718, 1377790, 1385873, 1394088, 1402108, 1411630, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [210017, 210488, 211337, 212116, 212805, 213554, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1326157, 1329899, 1335579, 1341324, 1347397, 1354355, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [33158, 34114, 35574, 37315, 38979, 41029, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [94519, 94962, 95713, 96474, 97213, 98256, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [42929, 43387, 44115, 44850, 45610, 46482, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [24420, 24545, 24699, 24885, 25052, 25275, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [14739, 14921, 15311, 15708, 16149, 16712, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6427, 6520, 6641, 6680, 6690, 6729, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6427, 6520, 6641, 6680, 6690, 6729, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [89206, 90350, 91089, 91498, 92115, 92867, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [101212, 103858, 104331, 105004, 104854, 106372, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [38155, 39009, 40207, 40461, 40693, 40915, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2458, 2467, 2498, 2428, 2435, 2441, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33419, 33676, 34049, 33989, 34211, 34413, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [7480, 7511, 6622, 6644, 6647, 6662, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [22355, 22695, 23145, 23322, 23398, 23192, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [4489, 4535, 4641, 4692, 4739, 4802, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [18793, 18975, 18809, 18928, 19050, 19130, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [7111, 7196, 7313, 7398, 7418, 7423, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [689, 704, 721, 729, 731, 731, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [875, 911, 1001, 1016, 1042, 1080, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [108360, 109834, 111643, 111807, 112260, 112803, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [108360, 109834, 111643, 111807, 112260, 112803, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1677043, 1693326, 1714485, 1721355, 1726195, 1722323, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4510652, 4554809, 4602644, 4624378, 4620008, 4637790, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2347674, 2376974, 2420807, 2430348, 2446175, 2466543, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [206318, 207458, 207774, 208442, 207506, 207657, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [548900, 554131, 563194, 565514, 571698, 578046, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [821760, 825376, 829239, 829483, 823425, 820707, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1185640, 1191645, 1197138, 1201728, 1204392, 1202330, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [130838, 132478, 137084, 139534, 141145, 142583, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [467911, 472020, 478000, 478751, 463179, 461915, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [184942, 187596, 191152, 192833, 194089, 195904, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [31193, 31339, 29876, 32087, 32192, 32310, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [70377, 71280, 73000, 73564, 73922, 74768, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [12, 12, 12, 12, 12, 13, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [12, 12, 12, 12, 12, 13, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [91, 91, 93, 92, 91, 92, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [144, 146, 143, 141, 140, 142, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42, 44, 45, 46, 45, 46, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [7, 7, 7, 6, 6, 6, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [34, 34, 34, 33, 33, 34, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [15, 15, 15, 15, 15, 15, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [36, 36, 37, 37, 37, 36, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [6, 6, 6, 6, 6, 6, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [24, 24, 23, 23, 23, 23, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [10, 10, 10, 10, 10, 10, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [2, 2, 2, 2, 2, 2, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [4, 4, 5, 5, 5, 5, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [235, 235, 233, 231, 230, 228, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [235, 235, 233, 231, 230, 228, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2238, 2261, 2279, 2265, 2268, 2160, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5574, 5588, 5568, 5535, 5490, 5466, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2505, 2533, 2564, 2566, 2556, 2541, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [353, 355, 355, 351, 344, 344, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [872, 872, 865, 858, 856, 855, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [833, 830, 824, 820, 815, 805, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [2078, 2073, 2057, 2028, 2014, 2002, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [261, 266, 267, 271, 270, 272, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [619, 620, 618, 615, 598, 596, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [341, 342, 344, 342, 340, 343, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [56, 55, 55, 55, 55, 55, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [197, 196, 206, 204, 203, 204, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [85272, 85975, 87367, 88967, 90414, 92084, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [139985, 140583, 141567, 142844, 143831, 145244, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [67521, 68304, 70175, 74221, 77404, 80847, null, null, null, null, null, null],
    label: 'JavaGuide (Java)',
  },
  {
    data: [308088, 308433, 308959, 309625, 310431, 311472, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [80249, 81990, 84231, 88203, 93286, 98434, null, null, null, null, null, null],
    label: 'system-design-primer (Python)',
  },
  {
    data: [33853, 34004, 34224, 34487, 34757, 35014, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [4184, 4212, 4261, 4317, 4393, 4458, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [46460, 46885, 47927, 48646, 49138, 49593, null, null, null, null, null, null],
    label: 'shadowsocks-windows (C#)',
  },
  {
    data: [44839, 44960, 45126, 45314, 45498, 45745, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [57071, 57349, 57845, 58453, 58932, 59466, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [35263, 35430, 35622, 35906, 36260, 36602, null, null, null, null, null, null],
    label: 'architecture-samples (Kotlin)',
  },
  {
    data: [24869, 25028, 25267, 25618, 25925, 26298, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [67896, 68535, 69549, 70853, 72019, 73292, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [10049, 10125, 10218, 10332, 10444, 10560, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [248960, 249074, 249146, 249205, 249371, 249753, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [4184, 4212, 4261, 4317, 4393, 4458, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [3814, 3828, 3870, 3942, 3985, 4047, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [3650, 3673, 3699, 3751, 3791, 3836, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [3543, 3540, 3545, 3547, 3547, 3550, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3162, 3186, 3216, 3262, 3308, 3367, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3101, 3116, 3131, 3159, 3173, 3197, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3099, 3119, 3151, 3189, 3242, 3310, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [2202, 2222, 2253, 2302, 2356, 2413, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [1902, 1908, 1922, 1932, 1944, 1956, null, null, null, null, null, null],
    label: 'devtools',
  },
  {
    data: [1869, 1877, 1886, 1902, 1915, null, null, null, null, null, null, null],
    label: 'knitr',
  },
  {
    data: [null, null, null, null, null, 1951, null, null, null, null, null, null],
    label: 'bookdown',
  },
];

langToProjects.Swift = [
  {
    data: [33853, 34004, 34224, 34487, 34757, 35014, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [32714, 32789, 32997, 33218, 33414, 33652, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [26163, 26396, 26969, 27395, 27648, 27917, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [22138, 22193, 22314, 22515, 22677, 22869, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [22093, 22195, 22404, 22584, 22766, 22998, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [22049, 22215, 22441, 22800, 23207, 23639, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [21797, 21991, 22340, 23188, 23626, 23992, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [21016, 21244, 21637, 21967, 22414, 22724, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [19713, 19735, 19750, 19755, 19774, 19815, null, null, null, null, null, null],
    label: 'ReactiveCocoa',
  },
  {
    data: [19237, 19271, 19346, 19460, 19548, null, null, null, null, null, null, null],
    label: 'SwiftyJSON',
  },
  {
    data: [null, null, null, null, null, 19738, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
];

langToProjects['C#'] = [
  {
    data: [46460, 46885, 47927, 48646, 49138, 49593, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [22520, 22636, 22789, 22900, 22885, 22872, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [17115, 17361, 17779, 18555, 18960, 19701, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [15527, 15777, 16250, 16782, 17203, 17801, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [15416, 15541, 16020, 16466, 16794, 17269, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [13442, 13510, 13840, 14004, 14221, 14540, null, null, null, null, null, null],
    label: 'WaveFunctionCollapse',
  },
  {
    data: [12889, 13056, 13506, 13848, 14273, 14687, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [12389, 12613, 12920, 13377, 13758, 14142, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
  {
    data: [12310, null, null, null, null, null, null, null, null, null, null, null],
    label: 'coreclr',
  },
  {
    data: [11792, 11903, 12019, null, null, null, null, null, null, null, null, null],
    label: 'Dapper',
  },
  {
    data: [null, 12371, 12499, 12623, 12765, 13016, null, null, null, null, null, null],
    label: 'roslyn',
  },
  {
    data: [null, null, null, 12220, 12574, 12897, null, null, null, null, null, null],
    label: 'ShareX',
  },
];

langToProjects.C = [
  {
    data: [85272, 85975, 87367, 88967, 90414, 92084, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [44077, 44510, 45185, 45785, 46449, 47014, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [40736, 40980, 41378, 41976, 42553, 43330, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [30992, 31220, 31548, 31924, 32384, 32859, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [26214, 26398, 26665, 26924, 27130, 27386, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [25600, 25675, 25848, 26126, 26347, 26639, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
  {
    data: [24413, 25011, 26249, 27811, 29438, 31706, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [23085, 23273, 23544, 23958, 24306, 24834, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [19323, 19423, 19638, 19872, 20049, 20335, null, null, null, null, null, null],
    label: 'the_silver_searcher',
  },
  {
    data: [18540, null, null, null, null, null, null, null, null, null, null, null],
    label: 'How-to-Make-a-Computer-Operating-System',
  },
  {
    data: [null, 18685, 18801, 18932, null, null, null, null, null, null, null, null],
    label: 'The-Art-Of-Programming-By-July',
  },
  {
    data: [null, null, null, null, 19344, 19856, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
];

langToProjects.Ruby = [
  {
    data: [44839, 44960, 45126, 45314, 45498, 45745, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [39500, 39627, 39858, 40087, 40284, 40586, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [29746, 29914, 30121, 30375, 30572, 30849, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [27835, 27961, 28181, 28424, 28623, 28867, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [26663, 26847, 27453, 27907, 28259, 28542, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [25488, 25562, 25698, 25819, 25970, 26116, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [22125, 22140, 22174, 22213, 22233, 22254, null, null, null, null, null, null],
    label: 'gitlabhq',
  },
  {
    data: [22098, 22213, 22469, 22660, 22930, 23154, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [20471, 20529, 20608, 20688, null, null, null, null, null, null, null, null],
    label: 'devise',
  },
  {
    data: [20276, 20416, 20717, 21080, 21414, 21769, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [null, null, null, null, 20833, 21215, null, null, null, null, null, null],
    label: 'mastodon',
  },
];

langToProjects.PHP = [
  {
    data: [57071, 57349, 57845, 58453, 58932, 59466, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [30478, 30499, 30541, 30594, 30651, 30687, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [22950, 23110, 23334, 23588, 23807, 24018, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [22564, 22689, 22867, 23009, 23156, 23356, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [22440, 22767, 23237, 23751, 24365, 25144, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [22025, 22200, 22433, 22714, 22943, 23201, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [19934, 20126, 20396, 20700, 20976, 21268, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [18527, 18683, 18881, 19059, 19212, 19401, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [18279, 18340, 18435, 18525, 18644, 18750, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [17871, 17924, 18009, 18040, 18051, 18042, null, null, null, null, null, null],
    label: 'CodeIgniter',
  },
];

langToProjects['C++'] = [
  {
    data: [139985, 140583, 141567, 142844, 143831, 145244, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [80058, 80433, 81025, 81717, 82382, 83253, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [56484, 57208, 58306, 59685, 60906, 64277, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [50296, 50499, 50765, 51124, 51454, 51932, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [41882, 42096, 42383, 42764, 43157, 43694, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [41464, 41821, 42460, 43357, 44185, 45169, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [39528, 39779, 40252, 40812, 41304, 42029, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [35338, 35731, 36541, 37474, 38304, 39239, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [34672, 34717, 34809, 34929, 35040, 35137, null, null, null, null, null, null],
    label: 'x64dbg',
  },
  {
    data: [32621, 32755, 33223, 33718, 34165, 34802, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [80249, 81990, 84231, 88203, 93286, 98434, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [78152, 78823, 79825, 80926, 81998, 83093, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [68849, 70029, 71367, 75181, 80535, 85814, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [65451, 66180, 67647, 69190, 70722, 75814, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [61043, 61390, 62004, 62829, 63436, 64256, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [60204, 61087, 62360, 63821, 65585, 67042, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [51442, 51834, 52358, 52797, 53288, 53782, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [48375, 48675, 49169, 49748, 50139, 50663, null, null, null, null, null, null],
    label: 'flask',
  },
  {
    data: [46523, 46942, 47541, 48285, 48967, 49827, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [46400, 46635, 47044, 47572, 48020, 48536, null, null, null, null, null, null],
    label: 'keras',
  },
];

langToProjects.JavaScript = [
  {
    data: [308088, 308433, 308959, 309625, 310431, 311472, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [155561, 156388, 158441, 160869, 163192, 165490, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [141231, 143139, 144649, 146366, 147967, 150021, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [138094, 138386, 138912, 139669, 140454, 141259, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [91798, 92181, 93358, 94175, 94994, 96760, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [89516, 89773, 90197, 90756, 91264, 91931, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [84104, 84583, 85277, 86044, 86818, 87831, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [75203, 75688, 76531, 77449, 78314, 79275, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [68641, 69251, 70194, 71457, 72696, 73979, null, null, null, null, null, null],
    label: 'axios',
  },
  {
    data: [67100, 67466, 68001, 68858, 69642, 70741, null, null, null, null, null, null],
    label: 'node',
  },
];

langToProjects.Java = [
  {
    data: [67521, 68304, 70175, 74221, 77404, 80847, null, null, null, null, null, null],
    label: 'JavaGuide',
  },
  {
    data: [54789, 55181, 55656, 56639, 57406, 58110, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [48253, 49274, 50402, 51934, 53250, 55139, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [46536, 46799, 47281, 47927, 48601, 49253, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [44803, 45153, 45739, 46637, 47391, 48304, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [41629, 41745, 41974, 42294, 42544, 42830, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [41397, 41671, 42353, 43017, 43687, 44928, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [37858, 38482, 39422, 41513, 42992, 44238, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [35610, 35761, 36058, 36514, 36883, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [35577, 35759, 35998, 36586, 37024, 37598, null, null, null, null, null, null],
    label: 'guava',
  },
  {
    data: [null, null, null, null, null, 37521, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [248960, 249074, 249146, 249205, 249371, 249753, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [41768, 42216, 42972, 43723, 44454, 45449, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [19905, 20221, 20926, 21541, 22223, 23084, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [17604, 17979, 18508, 19041, 19483, 20107, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [17281, 17589, 18097, 18798, 19451, 20264, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [17236, 17292, 17392, 17521, 17600, 17990, null, null, null, null, null, null],
    label: 'xi-editor',
  },
  {
    data: [15386, 15479, 15616, 15744, 15886, 16043, null, null, null, null, null, null],
    label: 'servo',
  },
  {
    data: [13697, 13854, 13976, 14125, 14298, 14506, null, null, null, null, null, null],
    label: 'libra',
  },
  {
    data: [13615, 13793, 14277, 14754, 15137, 15597, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [11720, 12051, 12480, 12861, 13239, 13715, null, null, null, null, null, null],
    label: 'fd',
  },
];

langToProjects.Kotlin = [
  {
    data: [35263, 35430, 35622, 35906, 36260, 36602, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [30318, 30530, 30891, 31247, 31595, 32032, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [28317, 28538, 28981, 29330, 29557, 29782, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [24247, 24301, 24419, 24526, 24646, 24812, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [20056, 20190, 20429, 20883, 21369, 21921, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [19491, 19534, 19606, 19670, 19742, 19836, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [17128, 17183, 17322, 17478, 17615, 17765, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
  {
    data: [15753, 15923, 16190, 16543, 16840, 17271, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [15496, 15516, 15546, 15594, 15635, 15698, null, null, null, null, null, null],
    label: 'anko',
  },
  {
    data: [15140, 15140, 15215, 15353, 15477, 15596, null, null, null, null, null, null],
    label: 'flexbox-layout',
  },
];

langToProjects.Scala = [
  {
    data: [8499, null, null, null, null, null, null, null, null, null, null, null],
    label: 'kafka-manager',
  },
  {
    data: [7924, 7969, 7998, 8030, 8052, 8063, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [7463, 7484, 7524, 7567, 7598, 7638, null, null, null, null, null, null],
    label: 'finagle',
  },
  {
    data: [6253, 6308, 6394, 6514, 6644, 6891, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [24869, 25028, 25267, 25618, 25925, 26298, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16536, 16655, 16810, null, null, null, null, null, null, null, null, null],
    label: 'prisma',
  },
  {
    data: [12393, 12434, 12511, 12598, 12657, 12721, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12252, 12271, 12301, 12319, 12331, 12352, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [11491, 11510, 11542, 11569, 11580, 11610, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [10592, 10624, 10682, 10771, 10812, 10896, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [null, 8549, 8669, 8787, 8886, 9015, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [null, null, null, 17021, 17003, 16994, null, null, null, null, null, null],
    label: 'prisma1',
  },
];

langToProjects.Groovy = [
  {
    data: [3539, 3569, 3628, 3676, 3722, 3800, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [3181, 3214, 3249, 3285, 3312, 3354, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [2419, 2441, 2469, 2552, 2633, 2735, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [2216, 2213, 2214, 2215, 2215, 2217, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [2150, 2169, 2206, 2246, 2289, 2328, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [10049, 10125, 10218, 10332, 10444, 10560, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [1815, 1837, 1872, 1939, 1988, 2037, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [1642, 1653, 1666, 1685, 1714, 1745, null, null, null, null, null, null],
    label: 'bintray-release',
  },
  {
    data: [1480, 1507, 1534, 1563, 1593, 1620, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [1434, 1433, 1434, 1435, 1437, 1435, null, null, null, null, null, null],
    label: 'sdk-manager-plugin',
  },
];

langToProjects.Go = [
  {
    data: [67896, 68535, 69549, 70853, 72019, 73292, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [62276, 62850, 63718, 64723, 65680, 66815, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [56094, 56264, 56501, 56743, 56962, 57253, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [51167, 51631, 52377, 53175, 54009, 54962, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [40873, 41308, 41984, 42896, 43661, 44550, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [34707, 35113, 35834, 36726, 37643, 38732, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [33481, 33632, 33881, 34236, 34536, 34868, null, null, null, null, null, null],
    label: 'build-web-application-with-golang',
  },
  {
    data: [33034, 33176, 33588, 33906, 34175, 34629, null, null, null, null, null, null],
    label: 'gogs',
  },
  {
    data: [31904, 32407, 33411, 34564, 35448, 36429, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [29546, 29810, 30191, 30628, 31004, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [null, null, null, null, null, 32543, null, null, null, null, null, null],
    label: 'v2ray-core',
  },
];

const githubProjects = [
  {
    data: [275334, 278145, 282255, 252477, 291290, 297138, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [354913, 358858, 366309, 374617, 382592, 393259, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [790389, 802478, 828841, 844405, 858836, 878623, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [1358306, 1380886, 1403005, 1418056, 1443113, 1410483, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [910131, 920924, 919810, 949745, 983542, 977027, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [93348, 94438, 96158, 98075, 99929, 102542, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [58654, 59536, 61116, 63037, 64775, 67013, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [280989, 284860, 290884, 297907, 304945, 314413, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [319763, 320611, 321851, 323267, 324815, 327030, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [403792, 406837, 411695, 416983, 417158, 428292, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [41101, 42172, 43927, 46108, 48341, 51358, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [40933, 41127, 41457, 41817, 42169, 42651, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [158070, 160193, 163710, 167826, 171633, 176660, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [12760, 12851, 12934, 13019, 13137, 13289, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [40253, 41293, 42877, 44450, 46207, 48584, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [840, 851, 878, 897, 920, 942, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1032, 1048, 1072, 1093, 1123, 1160, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2332, 2354, 2369, 2401, 2423, 2463, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [5015, 5036, 5084, 5146, 5194, 5257, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2588, 2618, 2684, 2768, 2833, 2905, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [676, 679, 686, 690, 697, 708, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35, 35, 36, 36, 40, 40, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [532, 537, 549, 565, 573, 596, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [730, 735, 743, 752, 757, 765, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [927, 933, 938, 953, 957, 971, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [170, 176, 187, 193, 198, 202, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [127, 128, 131, 131, 133, 133, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [1354, 1370, 1406, 1435, 1466, 1504, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [15, 16, 17, 17, 17, 17, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [244, 252, 261, 275, 284, 292, null, null, null, null, null, null],
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
