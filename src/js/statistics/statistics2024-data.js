/* eslint-disable max-len */

const labels = ['2024-01', '2024-04', '2024-08', '2024-12'];
const lastYearLabels = ['2023-01', '2023-04', '2023-08', '2023-12'];

const tiobeLastYear = [
  {
    data: [2, 2, 2, 2, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 4, 3, 3, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 3, 4, 4, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, 6, 6, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, 1, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [11, 14, 18, 17, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [null, null, null, 19, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 18, 16, 18, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [10, 8, 9, 7, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [25, 33, 26, 15, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [12, 12, 13, 13, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [18, 17, 17, 20, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, 3, 4, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, 2, 2, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, 4, 3, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, 6, 6, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, 1, 1, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [16, 15, 17, 15, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [23, 24, 22, 18, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, 5, 5, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, 13, 14, 17, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [7, 16, 16, 12, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [17, 19, 20, 20, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [37, 32, 33, 30, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, 8, 7, 7, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19, 18, 13, 14, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [402184, 404622, 405444, 407718, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [803681, 807931, 809646, 814113, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1913023, 1918729, 1919918, 1922448, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2521757, 2530336, 2532769, 2537142, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2179162, 2197420, 2203524, 2217394, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [332070, 333812, 334606, 336320, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [502090, 506735, 508023, 510804, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1609954, 1617062, 1619677, 1625462, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [228804, 229113, 229195, 229379, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1463092, 1465315, 1466503, 1469533, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [93686, 95695, 96372, 98180, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [112119, 112486, 112597, 112793, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [72071, 73139, 73492, 74353, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [30068, 30216, 30275, 30380, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [39944, 41413, 41867, 43019, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6599, 6721, 6735, 6562, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6599, 6721, 6735, 6562, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [67322, 61109, 60217, 55733, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [86963, 83915, 80804, 77257, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42585, 38021, 38285, 38476, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2637, 2719, 2737, 2226, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35393, 35747, 34481, 31048, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [5780, 5810, 5795, 5850, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [19591, 19633, 18249, 17955, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [8887, 9119, 9213, 9510, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [16081, 9633, 9657, 9375, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2597, 2033, 2054, 1833, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [813, 835, 838, 844, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1671, 1859, 1903, 2053, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [129587, 128820, 130395, 125996, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [129587, 128820, 130395, 125996, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1064487, 922475, 881927, 798898, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3184622, 3156229, 3126121, 3106122, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2730156, 2546464, 2553910, 2521639, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [117223, 116121, 108234, 75287, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [641056, 635213, 634511, 617017, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [720399, 661600, 660396, 637166, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [721281, 644426, 612472, 539291, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [182312, 187652, 187212, 181479, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [320041, 287967, 281643, 248643, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [194244, 185260, 180063, 159394, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [43708, 44277, 44479, 41786, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [105872, 111744, 116213, 117505, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 12, 12, 10, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 12, 12, 10, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [57, 51, 50, 44, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [87, 81, 74, 69, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, 43, 43, 42, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, 6, 4, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [31, 31, 29, 21, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, 10, 10, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [23, 20, 17, 16, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [10, 10, 10, 10, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [15, 12, 12, 10, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [5, 4, 4, 3, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, 1, 1, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 6, 6, 6, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [233, 223, 224, 198, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [233, 223, 224, 198, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1184, 1075, 1044, 954, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3089, 2962, 2861, 2762, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2230, 2160, 2138, 2038, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [167, 163, 155, 134, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [661, 629, 615, 564, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [542, 512, 507, 472, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1099, 1012, 983, 866, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [240, 239, 242, 222, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [360, 336, 325, 276, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [237, 224, 217, 179, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [46, 46, 46, 41, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [238, 251, 250, 227, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [163616, 171267, 174421, 183689, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [179845, 182735, 183980, 186680, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [58297, 76173, 79942, 101777, null, null, null, null, null, null, null, null],
    label: 'hello-algo (Java)',
  },
  {
    data: [381049, 389927, 393167, 406547, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [274192, 293221, 300237, 319231, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [44810, 45879, 46369, 47518, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [6186, 6338, 6393, 6550, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [100695, 104856, 107060, 111925, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [54149, 54960, 55301, 56168, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [75630, 76927, 77508, 78974, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [46671, 47636, 48304, 49529, null, null, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [60612, 61448, 61713, 62525, null, null, null, null, null, null, null, null],
    label: 'the-algorithm (Scala)',
  },
  {
    data: [114444, 121659, 124898, 133836, null, null, null, null, null, null, null, null],
    label: 'awesome-go (Go)',
  },
  {
    data: [15670, 16182, 16373, 17029, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [88660, 93418, 94907, 99198, null, null, null, null, null, null, null, null],
    label: 'rust (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [6186, 6338, 6393, 6550, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [5665, 5805, 5879, 6036, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [5167, 5260, 5309, 5381, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4604, 4665, 4698, 4790, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4230, 4379, 4439, 4597, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [4167, 4222, 4259, 4331, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [4101, 4107, 4106, 4111, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [4013, 6033, 6187, 6473, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends',
  },
  {
    data: [3647, 3658, 3662, 3666, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3527, 3532, 3541, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
  {
    data: [null, null, null, 3628, null, null, null, null, null, null, null, null],
    label: 'data.table',
  },
];

langToProjects.Swift = [
  {
    data: [44810, 45879, 46369, 47518, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [40197, 40578, 40783, 41315, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [35337, 36502, 37112, 38487, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [31980, 32184, 32266, 32488, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [28221, 28508, 28607, 28851, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [27166, 27337, 27425, 27634, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [24746, 26237, 26776, 28261, null, null, null, null, null, null, null, null],
    label: 'MonitorControl',
  },
  {
    data: [24688, 25324, 25470, null, null, null, null, null, null, null, null, null],
    label: 'lottie-ios',
  },
  {
    data: [23904, null, null, null, null, null, null, null, null, null, null, null],
    label: 'RxSwift',
  },
  {
    data: [23481, null, null, null, null, null, null, null, null, null, null, null],
    label: 'vapor',
  },
  {
    data: [null, 24639, 25136, 26085, null, null, null, null, null, null, null, null],
    label: 'Rectangle',
  },
  {
    data: [null, 24408, 25154, 27300, null, null, null, null, null, null, null, null],
    label: 'UTM',
  },
  {
    data: [null, null, null, 26427, null, null, null, null, null, null, null, null],
    label: 'stats',
  },
];

langToProjects['C#'] = [
  {
    data: [100695, 104856, 107060, 111925, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [57596, 57968, 58108, 58499, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [56201, 61779, 64213, 70976, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [42290, 43488, 44030, 45736, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [33438, 34450, 34841, 35604, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [30449, 32129, 33025, 34865, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [27376, 30058, 31796, 35569, null, null, null, null, null, null, null, null],
    label: 'jellyfin',
  },
  {
    data: [26473, 27872, 28505, 29942, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [25931, 32556, 33415, null, null, null, null, null, null, null, null, null],
    label: 'Ryujinx',
  },
  {
    data: [24727, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [null, 26438, 27433, 30193, null, null, null, null, null, null, null, null],
    label: 'RevokeMsgPatcher',
  },
  {
    data: [null, null, null, 27542, null, null, null, null, null, null, null, null],
    label: 'DevToys',
  },
];

langToProjects.C = [
  {
    data: [163616, 171267, 174421, 183689, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [96482, 102705, 105521, 113659, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [66625, 68375, 69485, 72359, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [62913, 64995, 65609, 67247, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [55505, 58120, 60381, 63287, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [53354, 55895, 57284, 60692, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [48425, 50246, 50984, 52769, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [48270, null, null, null, null, null, null, null, null, null, null, null],
    label: 'llama.cpp',
  },
  {
    data: [40274, 42685, 43714, 46484, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [36654, 37364, 37575, 38348, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [null, 36842, 37192, 38133, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [54149, 54960, 55301, 56168, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [47730, 48356, 48625, 49302, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [45025, 46035, 46377, 47279, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [40164, 41711, 42259, 43826, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [39401, 40629, 41144, 42499, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [38287, 38686, 38853, 39710, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [38183, 39563, 40149, 41655, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [33032, 33977, 34290, 35413, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [32018, 32890, 33291, 34333, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
  {
    data: [30945, 31309, 31471, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
  {
    data: [null, null, null, 34236, null, null, null, null, null, null, null, null],
    label: 'maybe',
  },
];

langToProjects.PHP = [
  {
    data: [75630, 76927, 77508, 78974, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [51200, 53989, 55461, 59011, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [30993, 30977, 30977, 30947, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [30751, 31565, 31823, 32713, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [28958, 29342, 29479, 29845, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [28011, 28285, 28394, 28669, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [26772, 26799, 26794, 26796, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24658, 25706, 26160, 27574, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [22842, 23001, 23043, 23227, null, null, null, null, null, null, null, null],
    label: 'guzzle',
  },
  {
    data: [21548, null, null, null, null, null, null, null, null, null, null, null],
    label: 'DesignPatternsPHP',
  },
  {
    data: [null, 21728, null, null, null, null, null, null, null, null, null, null],
    label: 'livewire',
  },
  {
    data: [null, null, 26490, 35025, null, null, null, null, null, null, null, null],
    label: 'coolify',
  },
];

langToProjects['C++'] = [
  {
    data: [179845, 182735, 183980, 186680, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [113662, 116136, 117140, 119588, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [110167, 112118, 112844, 114615, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [92036, 93673, 94240, 95961, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [79350, 84308, 86582, 91597, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [73422, 75853, 76872, 79439, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [73162, 76324, 77140, 80016, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [64930, 66051, 66813, 67692, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [62516, 63793, 64534, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [59373, 64995, 67013, 70992, null, null, null, null, null, null, null, null],
    label: 'gpt4all',
  },
  {
    data: [null, null, null, 68746, null, null, null, null, null, null, null, null],
    label: 'llama.cpp',
  },
];

langToProjects.Python = [
  {
    data: [274192, 293221, 300237, 319231, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [241752, 256825, 263495, 278280, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [193417, 206568, 212018, 226509, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [174567, 180241, 182063, 194883, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [145231, 150475, 152744, 158474, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [125962, 128777, 129869, 132768, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [118290, 125848, 128798, 135869, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [116800, 130924, 135647, 143887, null, null, null, null, null, null, null, null],
    label: 'stable-diffusion-webui',
  },
  {
    data: [80811, null, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [80672, 85424, null, 95125, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, 84600, 88805, null, null, null, null, null, null, null, null, null],
    label: 'langchain',
  },
  {
    data: [null, null, 163753, 168875, null, null, null, null, null, null, null, null],
    label: 'AutoGPT',
  },
];

langToProjects.JavaScript = [
  {
    data: [381049, 389927, 393167, 406547, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [262590, 276519, 282048, 300072, null, null, null, null, null, null, null, null],
    label: 'developer-roadmap',
  },
  {
    data: [216999, 222511, 225104, 229915, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [206080, 207049, 207391, 208089, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [179053, 183159, 185186, 188740, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [166393, 167589, 168069, 171004, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [156028, 161871, null, null, null, null, null, null, null, null, null, null],
    label: 'AutoGPT',
  },
  {
    data: [154676, 158738, 160560, 164989, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [139899, 142088, 143076, 145565, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [117394, null, 120332, 121989, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [null, 121096, 123010, 127547, null, null, null, null, null, null, null, null],
    label: 'next.js',
  },
];

langToProjects.Java = [
  {
    data: [85180, 86614, 88339, 90173, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [74501, 75018, 75143, 75550, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [72996, 75671, 76492, 78319, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [72899, 74511, 75112, 76523, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [71136, 72991, 73662, 75466, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [66336, 67791, 68564, 70929, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [60781, 61813, 62785, 63696, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [58297, 76173, 79942, 101777, null, null, null, null, null, null, null, null],
    label: 'hello-algo',
  },
  {
    data: [55282, 56886, 57646, 60227, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [54074, 55239, 55670, 56818, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [91777, 93031, 93407, 98275, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [88660, 93418, 94907, 99198, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [72238, 77848, 79682, 85974, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [52745, 64458, 68191, 77052, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [50495, 53094, 54579, 56738, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [45458, 49692, 51178, 54735, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [44805, 47339, 51681, 53104, null, null, null, null, null, null, null, null],
    label: 'ChatGPT',
  },
  {
    data: [44543, 46763, 47716, null, null, null, null, null, null, null, null, null],
    label: 'bat',
  },
  {
    data: [42477, null, null, null, null, null, null, null, null, null, null, null],
    label: 'ripgrep',
  },
  {
    data: [40758, null, null, null, null, null, null, null, null, null, null, null],
    label: 'meilisearch',
  },
  {
    data: [null, 63118, 62959, 62582, null, null, null, null, null, null, null, null],
    label: 'sway',
  },
  {
    data: [null, 58562, 58299, 57956, null, null, null, null, null, null, null, null],
    label: 'fuel-core',
  },
  {
    data: [null, null, null, 51056, null, null, null, null, null, null, null, null],
    label: 'zed',
  },
];

langToProjects.Kotlin = [
  {
    data: [46671, 47636, 48304, 49529, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [44885, 45303, 45495, 45943, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [43459, 43883, 44087, 44544, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [34402, 34714, 34847, 35289, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [33910, 36983, 37585, 38713, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [29901, 30097, 30244, 30491, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [28917, 29148, 29241, 29445, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [27541, 30842, 32272, 36607, null, null, null, null, null, null, null, null],
    label: 'v2rayNG',
  },
  {
    data: [26255, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tachiyomi',
  },
  {
    data: [23888, 24105, 24209, null, null, null, null, null, null, null, null, null],
    label: 'BaseRecyclerViewAdapterHelper',
  },
  {
    data: [null, 24182, 25962, 30397, null, null, null, null, null, null, null, null],
    label: 'legado',
  },
  {
    data: [null, null, null, 25717, null, null, null, null, null, null, null, null],
    label: 'Signal-Android',
  },
];

langToProjects.Scala = [
  {
    data: [60612, 61448, 61713, 62525, null, null, null, null, null, null, null, null],
    label: 'the-algorithm',
  },
  {
    data: [37543, 38471, 38880, 40115, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16618, 16570, 16557, 16533, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [14233, 14279, 14305, 14358, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [14182, 14663, 14836, 15786, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [12854, 12932, 12983, 13063, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12558, 12548, 12542, 12542, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12484, 12503, 12515, 12562, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11606, 11678, 11740, 11844, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [10378, 10700, 10846, 11188, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [15670, 16182, 16373, 17029, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [7975, 8225, 8333, 8661, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [5162, 5341, 5413, 5583, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4141, 4165, 4187, 4222, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3885, 3902, 3916, 3944, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3465, 3570, 3619, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2992, 3049, 3080, 3155, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2527, 2542, 2553, 2576, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2432, 2555, 2619, 2785, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
  {
    data: [2235, 2236, 2237, 2232, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
  {
    data: [null, null, null, 1902, null, null, null, null, null, null, null, null],
    label: 'job-dsl-plugin',
  },
];

langToProjects.Go = [
  {
    data: [116819, 119983, 121213, 124423, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [114444, 121659, 124898, 133836, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [104276, 107103, 108396, 111511, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [75630, 80298, 82169, 87206, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [73485, 75710, 76794, 79290, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [70726, 72735, 73651, 76273, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [67160, 67810, 68146, 68861, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [57319, 59793, 62140, 65982, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [56617, 60145, 62020, 65983, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [51498, null, null, null, null, null, null, null, null, null, null, null],
    label: 'caddy',
  },
  {
    data: [null, 65751, 77560, 100767, null, null, null, null, null, null, null, null],
    label: 'ollama',
  },
];

const githubProjects = [
  {
    data: [544672, 589841, 601689, 632595, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [727863, 862967, 884101, 936624, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1222514, 1624403, 1653100, 1726980, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2462079, 4362791, 4480171, 4780971, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1790672, 2707473, 2793128, 3015596, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [183405, 195907, 199557, 208343, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [134133, 145216, 148785, 156837, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [627874, 735789, 754614, 798836, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [368430, 395024, 396240, 398684, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [644762, 692765, 703385, 728123, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [183408, 195787, 201296, 215271, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [54658, 55422, 55779, 56542, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [363997, 389966, 398899, 422141, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [16315, 16511, 16601, 16789, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [171826, 188433, 195852, 215671, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1827, 1886, 1917, 2020, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2349, 2485, 2563, 2724, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3379, 3444, 3476, 3575, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [9893, 10308, 10486, 10967, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [6627, 7126, 7391, 7973, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [1043, 1066, 1084, 1122, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [69, 72, 72, 78, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1336, 1419, 1448, 1523, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [936, 943, 951, 964, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1335, 1374, 1384, 1417, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [556, 594, 615, 679, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [169, 174, 174, 179, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2848, 2979, 3025, 3191, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [21, 22, 23, 22, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1130, 1243, 1302, 1442, null, null, null, null, null, null, null, null],
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
