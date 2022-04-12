/* eslint-disable max-len */

const labels = ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12'];
const lastYearLabels = ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'];

const tiobeLastYear = [
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [4, 4, 4, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2, 2, 2, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 7, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [3, 3, 3, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [15, 15, 19, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [11, 11, 13, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [14, 14, 16, null, null, null, null, null, null, null, null, null],
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
    data: [13, 13, 11, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
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
    data: [28, 28, 31, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [37, 37, 36, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, 11, 13, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [20, 20, 25, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [24, 24, 26, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [375215, 375215, 377012, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [756421, 756421, 759492, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1831039, 1831039, 1836510, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2343751, 2343751, 2355359, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1902093, 1902093, 1920216, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [309994, 309994, 311099, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [438960, 438960, 442786, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1525480, 1525480, 1530302, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [223089, 223089, 223499, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1430032, 1430032, 1432284, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [70255, 70255, 71541, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [107730, 107730, 108018, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [59827, 59827, 60557, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [28082, 28082, 28212, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [26877, 26877, 27427, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6851, 6851, 6520, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6851, 6851, 6520, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [91555, 91555, 89009, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [107177, 107177, 104241, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [39873, 39873, 39758, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2487, 2487, 2501, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35828, 35828, 35771, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [6445, 6445, 6466, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [20576, 20576, 20281, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [5472, 5472, 5482, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [20468, 20468, 20490, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [4214, 4214, 4880, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [719, 719, 718, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1195, 1195, 1201, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [122692, 122692, 123151, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [122692, 122692, 123151, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1666049, 1666049, 1615033, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4408947, 4408947, 4312914, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2579016, 2579016, 2579713, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [189053, 189053, 181001, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [635577, 635577, 636119, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [777581, 777581, 771398, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1134026, 1134026, 1105835, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [146348, 146348, 150562, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [444990, 444990, 437487, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [191189, 191189, 281692, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [38447, 38447, 35218, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [84721, 84721, 85916, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 13, 12, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 13, 12, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [89, 89, 86, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [133, 133, 130, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [43, 43, 41, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [33, 33, 32, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [13, 13, 13, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [31, 31, 30, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [8, 8, 8, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [22, 22, 22, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [9, 9, 9, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, 1, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [4, 4, 4, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [236, 236, 235, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [236, 236, 235, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1801, 1801, 1747, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [4484, 4484, 4378, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2330, 2330, 2292, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [261, 261, 256, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [768, 768, 760, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [647, 647, 636, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1665, 1665, 1627, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [228, 228, 230, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [521, 521, 508, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [290, 290, 376, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [46, 46, 45, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [215, 215, 218, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [127888, 127888, 129699, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [163295, 163295, 164034, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [73493, 73493, 74125, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns (Java)',
  },
  {
    data: [343388, 343388, 343393, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [182674, 182674, 187491, null, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [39063, 39063, 39239, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [5297, 5297, 5341, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [69609, 69609, 70970, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [50258, 50258, 50453, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [68893, 68893, 69244, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [41689, 41689, 41886, null, null, null, null, null, null, null, null, null],
    label: 'okhttp (Kotlin)',
  },
  {
    data: [32192, 32192, 32469, null, null, null, null, null, null, null, null, null],
    label: 'spark (Scala)',
  },
  {
    data: [96051, 96051, 97399, null, null, null, null, null, null, null, null, null],
    label: 'go (Go)',
  },
  {
    data: [13110, 13110, 13216, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [260315, 260315, 261626, null, null, null, null, null, null, null, null, null],
    label: '996.ICU (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [5297, 5297, 5341, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [4923, 4923, 4954, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [4583, 4583, 4621, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4019, 4019, 4048, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [3829, 3829, 3852, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [3614, 3614, 3615, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3431, 3431, 3435, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [3356, 3356, 3391, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [2975, 2975, 2998, null, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
  {
    data: [2709, 2709, 2897, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
];

langToProjects.Swift = [
  {
    data: [39063, 39063, 39239, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [37185, 37185, 37425, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [30176, 30176, 30266, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [29636, 29636, 29925, null, null, null, null, null, null, null, null, null],
    label: 'open-source-mac-os-apps',
  },
  {
    data: [29519, 29519, 29798, null, null, null, null, null, null, null, null, null],
    label: 'open-source-ios-apps',
  },
  {
    data: [29360, 29360, 29623, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [26010, 26010, 26146, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [25049, 25049, 25154, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [22509, 22509, 22571, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [21682, 21682, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-swift',
  },
  {
    data: [null, null, 22015, null, null, null, null, null, null, null, null, null],
    label: 'RxSwift',
  },
];

langToProjects['C#'] = [
  {
    data: [69609, 69609, 70970, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [53953, 53953, 54157, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [32115, 32115, 32774, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [27428, 27428, 27727, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [26273, 26273, 27282, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [23246, 23246, 23230, null, null, null, null, null, null, null, null, null],
    label: 'CodeHub',
  },
  {
    data: [21416, 21416, 21543, null, null, null, null, null, null, null, null, null],
    label: 'Wox',
  },
  {
    data: [20990, 20990, 21594, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [20234, 20234, 20454, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [19934, 19934, 20206, null, null, null, null, null, null, null, null, null],
    label: 'eShopOnContainers',
  },
];

langToProjects.C = [
  {
    data: [127888, 127888, 129699, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [62046, 62046, 63424, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [58313, 58313, 58661, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [53755, 53755, 54231, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [41257, 41257, 41598, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [36602, 36602, 37348, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [33396, 33396, 33545, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [31998, 31998, 33113, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [31418, 31418, 31652, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
  {
    data: [30064, 30064, 30171, null, null, null, null, null, null, null, null, null],
    label: 'ijkplayer',
  },
];

langToProjects.Ruby = [
  {
    data: [50258, 50258, 50453, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [44196, 44196, 44412, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [35114, 35114, 35425, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [34976, 34976, 35320, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [34168, 34168, 34350, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [31212, 31212, 31616, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [28592, 28592, 28733, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [27834, 27834, 28135, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [26852, 26852, 27283, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [26519, 26519, 26801, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
];

langToProjects.PHP = [
  {
    data: [68893, 68893, 69244, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [37272, 37272, 37985, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [31087, 31087, 31084, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [26557, 26557, 26674, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [26404, 26404, 26655, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [26376, 26376, 26408, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [26272, 26272, 26366, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [21515, 21515, 21659, null, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [20343, 20343, 20418, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [19502, 19502, 19555, null, null, null, null, null, null, null, null, null],
    label: 'monolog',
  },
];

langToProjects['C++'] = [
  {
    data: [163295, 163295, 164034, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [100569, 100569, 101116, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [81432, 81432, 82094, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [62250, 62250, 62984, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [60029, 60029, 60677, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [58837, 58837, 59164, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [54332, 54332, 55045, null, null, null, null, null, null, null, null, null],
    label: 'pytorch',
  },
  {
    data: [53270, 53270, 53699, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [46725, 46725, 47760, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [44195, 44195, 44584, null, null, null, null, null, null, null, null, null],
    label: 'tesseract',
  },
];

langToProjects.Python = [
  {
    data: [182674, 182674, 187491, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [165041, 165041, 170146, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [130413, 130413, 133970, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [112959, 112959, 116636, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [110661, 110661, 122074, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [104414, 104414, 108205, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [72252, 72252, 73195, null, null, null, null, null, null, null, null, null],
    label: 'models',
  },
  {
    data: [67042, 67042, 69758, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [62696, 62696, 63221, null, null, null, null, null, null, null, null, null],
    label: 'django',
  },
  {
    data: [58851, 58851, 60427, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
];

langToProjects.JavaScript = [
  {
    data: [343388, 343388, 343393, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [194668, 194668, 194668, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [185727, 185727, 185725, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [155703, 155703, 156215, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [136338, 136338, 138142, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [121481, 121481, 121484, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [101975, 101975, 101975, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [100489, 100489, 100841, null, null, null, null, null, null, null, null, null],
    label: 'd3',
  },
  {
    data: [92422, 92422, 94303, null, null, null, null, null, null, null, null, null],
    label: 'create-react-app',
  },
  {
    data: [90102, 90102, null, null, null, null, null, null, null, null, null, null],
    label: 'axios',
  },
  {
    data: [null, null, 93676, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
];

langToProjects.Java = [
  {
    data: [73493, 73493, 74125, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [69525, 69525, 69526, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [62062, 62062, 62063, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [59872, 59872, 60432, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [58719, 58719, 59070, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [56397, 56397, 56751, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [56356, 56356, 57140, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [46378, 46378, 47008, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
  {
    data: [45922, 45922, 45923, null, null, null, null, null, null, null, null, null],
    label: 'RxJava',
  },
  {
    data: [44085, 44085, null, null, null, null, null, null, null, null, null, null],
    label: 'guava',
  },
  {
    data: [null, null, 45396, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
];

langToProjects.Rust = [
  {
    data: [260315, 260315, 261626, null, null, null, null, null, null, null, null, null],
    label: '996.ICU',
  },
  {
    data: [80622, 80622, 81392, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [64033, 64033, 65191, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [37770, 37770, 38336, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [33606, 33606, 35771, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [32791, 32791, 33331, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [29656, 29656, 30158, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [24531, 24531, 25103, null, null, null, null, null, null, null, null, null],
    label: 'awesome-rust',
  },
  {
    data: [22849, 22849, 24255, null, null, null, null, null, null, null, null, null],
    label: 'starship',
  },
  {
    data: [22498, 22498, null, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [null, null, 25490, null, null, null, null, null, null, null, null, null],
    label: 'meilisearch',
  },
];

langToProjects.Kotlin = [
  {
    data: [41689, 41689, 41886, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [40517, 40517, 40833, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [40253, 40253, 40452, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [32344, 32344, 32430, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [27272, 27272, 27408, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [26975, 26975, 27186, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [24072, 24072, 24480, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [21557, 21557, 21690, null, null, null, null, null, null, null, null, null],
    label: 'architecture-components-samples',
  },
  {
    data: [21168, 21168, 21270, null, null, null, null, null, null, null, null, null],
    label: 'iosched',
  },
  {
    data: [19183, 19183, 19220, null, null, null, null, null, null, null, null, null],
    label: 'material-dialogs',
  },
];

langToProjects.Scala = [
  {
    data: [32192, 32192, 32469, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16841, 16841, 16830, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [13652, 13652, 13693, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [12517, 12517, 12512, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12094, 12094, 12106, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [12059, 12059, 12117, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [10939, 10939, 11311, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [10659, 10659, 10710, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [8599, 8599, 8615, null, null, null, null, null, null, null, null, null],
    label: 'gitbucket',
  },
  {
    data: [8403, 8403, 8471, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [13110, 13110, 13216, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [4504, 4504, 4531, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4165, 4165, 4251, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [3843, 3843, 3871, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3627, 3627, 3649, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3175, 3175, 3219, null, null, null, null, null, null, null, null, null],
    label: 'gradle-versions-plugin',
  },
  {
    data: [2847, 2847, 2872, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2280, 2280, 2313, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2233, 2233, 2233, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [2198, 2198, 2267, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
];

langToProjects.Go = [
  {
    data: [96051, 96051, 97399, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [86030, 86030, 87064, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [76222, 76222, 78103, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [62322, 62322, 62714, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [57419, 57419, 58057, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [56070, 56070, 57148, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [53819, 53819, 54759, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [43283, 43283, 43792, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [42407, 42407, 43229, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [41293, 41293, 41777, null, null, null, null, null, null, null, null, null],
    label: 'prometheus',
  },
];

const githubProjects = [
  {
    data: [405925, 405925, 410472, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [571856, 571856, 578584, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1119446, 1119446, 1166863, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2084653, 2084653, 2030897, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1452584, 1452584, 1688386, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [140066, 140066, 141347, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [100883, 100883, 102058, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [474500, 474500, 480745, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [355242, 355242, 354881, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [536474, 536474, 539163, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [107177, 107177, 109766, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [48861, 48861, 48951, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [259403, 259403, 262630, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [14683, 14683, 14674, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [92593, 92593, 94736, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1355, 1355, 1376, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [1680, 1680, 1703, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [2920, 2920, 2936, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6106, 6106, 6126, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [4380, 4380, 4436, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [879, 879, 892, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [53, 53, 54, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [937, 937, 953, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [842, 842, 846, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1164, 1164, 1167, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [351, 351, 358, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [151, 151, 152, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2160, 2160, 2196, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [23, 23, 23, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [594, 594, 609, null, null, null, null, null, null, null, null, null],
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
