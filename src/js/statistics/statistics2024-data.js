/* eslint-disable max-len */

const labels = ['2024-01', '2024-04', '2024-08', '2024-12'];
const lastYearLabels = ['2023-01', '2023-04', '2023-08', '2023-12'];

const tiobeLastYear = [
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [7, 7, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [11, 14, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [16, 18, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [10, 8, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [25, 33, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [12, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [18, 17, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const tiobeCurrentYear = [
  {
    data: [2, 2, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [3, 3, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [4, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [16, 15, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [23, 24, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [5, 5, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [18, 13, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [7, 16, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [17, 19, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [37, 32, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [11, 8, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [null, null, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [19, 18, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const stackQuestions = [
  {
    data: [402184, 404622, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [803681, 807931, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1913023, 1918729, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2521757, 2530336, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2179162, 2197420, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [332070, 333812, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [502090, 506735, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1609954, 1617062, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [228804, 229113, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1463092, 1465315, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [93686, 95695, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [112119, 112486, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [72071, 73139, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [30068, 30216, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [39944, 41413, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersLocal = [
  {
    data: [6599, 6721, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [6599, 6721, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [67322, 61109, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [86963, 83915, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [42585, 38021, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [2637, 2719, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [35393, 35747, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [5780, 5810, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [19591, 19633, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [8887, 9119, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [16081, 9633, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2597, 2033, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [813, 835, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1671, 1859, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMembersGlobal = [
  {
    data: [129587, 128820, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [129587, 128820, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1064487, 922475, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3184622, 3156229, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2730156, 2546464, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [117223, 116121, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [641056, 635213, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [720399, 661600, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [721281, 644426, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [182312, 187652, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [320041, 287967, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [194244, 185260, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [43708, 44277, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [105872, 111744, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsLocal = [
  {
    data: [13, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [13, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [57, 51, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [87, 81, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [46, 43, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [6, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [31, 31, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [11, 11, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [23, 20, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [10, 10, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [15, 12, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [5, 4, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [1, 1, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [5, 6, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const meetupMeetupsGlobal = [
  {
    data: [233, 223, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [233, 223, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1184, 1075, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [3089, 2962, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [2230, 2160, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [167, 163, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [661, 629, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [542, 512, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1099, 1012, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [240, 239, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [360, 336, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [237, 224, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [46, 46, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [238, 251, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const top10GithubProjects = [
  {
    data: [163616, 171267, null, null, null, null, null, null, null, null, null, null],
    label: 'linux (C)',
  },
  {
    data: [179845, 182735, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow (C++)',
  },
  {
    data: [85180, 86614, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns (Java)',
  },
  {
    data: [381049, 389927, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp (JavaScript)',
  },
  {
    data: [274192, 293221, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis (Python)',
  },
  {
    data: [44810, 45879, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios (Swift)',
  },
  {
    data: [6186, 6338, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2 (R)',
  },
  {
    data: [100695, 104856, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys (C#)',
  },
  {
    data: [54149, 54960, null, null, null, null, null, null, null, null, null, null],
    label: 'rails (Ruby)',
  },
  {
    data: [75630, 76927, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel (PHP)',
  },
  {
    data: [46671, 47636, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin (Kotlin)',
  },
  {
    data: [60612, 61448, null, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm (Scala)',
  },
  {
    data: [114444, 121659, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go (Go)',
  },
  {
    data: [15670, 16182, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle (Groovy)',
  },
  {
    data: [88660, 93418, null, null, null, null, null, null, null, null, null, null],
    label: 'rust (Rust)',
  },
];

const langToProjects = {};

langToProjects.R = [
  {
    data: [6186, 6338, null, null, null, null, null, null, null, null, null, null],
    label: 'ggplot2',
  },
  {
    data: [5665, 5805, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-R',
  },
  {
    data: [5167, 5260, null, null, null, null, null, null, null, null, null, null],
    label: 'shiny',
  },
  {
    data: [4604, 4665, null, null, null, null, null, null, null, null, null, null],
    label: 'dplyr',
  },
  {
    data: [4230, 4379, null, null, null, null, null, null, null, null, null, null],
    label: 'r4ds',
  },
  {
    data: [4167, 4222, null, null, null, null, null, null, null, null, null, null],
    label: 'swirl_courses',
  },
  {
    data: [4101, 4107, null, null, null, null, null, null, null, null, null, null],
    label: 'stat_rethinking_2022',
  },
  {
    data: [4013, 6033, null, null, null, null, null, null, null, null, null, null],
    label: 'FriendsDontLetFriends',
  },
  {
    data: [3647, 3658, null, null, null, null, null, null, null, null, null, null],
    label: 'ML_for_Hackers',
  },
  {
    data: [3527, 3532, null, null, null, null, null, null, null, null, null, null],
    label: 'AnomalyDetection',
  },
];

langToProjects.Swift = [
  {
    data: [44810, 45879, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-ios',
  },
  {
    data: [40197, 40578, null, null, null, null, null, null, null, null, null, null],
    label: 'Alamofire',
  },
  {
    data: [35337, 36502, null, null, null, null, null, null, null, null, null, null],
    label: 'iina',
  },
  {
    data: [31980, 32184, null, null, null, null, null, null, null, null, null, null],
    label: 'ShadowsocksX-NG',
  },
  {
    data: [28221, 28508, null, null, null, null, null, null, null, null, null, null],
    label: 'swift-algorithm-club',
  },
  {
    data: [27166, 27337, null, null, null, null, null, null, null, null, null, null],
    label: 'Charts',
  },
  {
    data: [24746, 26237, null, null, null, null, null, null, null, null, null, null],
    label: 'MonitorControl',
  },
  {
    data: [24688, 25324, null, null, null, null, null, null, null, null, null, null],
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
    data: [null, 24639, null, null, null, null, null, null, null, null, null, null],
    label: 'Rectangle',
  },
  {
    data: [null, 24408, null, null, null, null, null, null, null, null, null, null],
    label: 'UTM',
  },
];

langToProjects['C#'] = [
  {
    data: [100695, 104856, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerToys',
  },
  {
    data: [57596, 57968, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-windows',
  },
  {
    data: [56201, 61779, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayN',
  },
  {
    data: [42290, 43488, null, null, null, null, null, null, null, null, null, null],
    label: 'PowerShell',
  },
  {
    data: [33438, 34450, null, null, null, null, null, null, null, null, null, null],
    label: 'aspnetcore',
  },
  {
    data: [30449, 32129, null, null, null, null, null, null, null, null, null, null],
    label: 'Files',
  },
  {
    data: [27376, 30058, null, null, null, null, null, null, null, null, null, null],
    label: 'jellyfin',
  },
  {
    data: [26473, 27872, null, null, null, null, null, null, null, null, null, null],
    label: 'ShareX',
  },
  {
    data: [25931, 32556, null, null, null, null, null, null, null, null, null, null],
    label: 'Ryujinx',
  },
  {
    data: [24727, null, null, null, null, null, null, null, null, null, null, null],
    label: 'dnSpy',
  },
  {
    data: [null, 26438, null, null, null, null, null, null, null, null, null, null],
    label: 'RevokeMsgPatcher',
  },
];

langToProjects.C = [
  {
    data: [163616, 171267, null, null, null, null, null, null, null, null, null, null],
    label: 'linux',
  },
  {
    data: [96482, 102705, null, null, null, null, null, null, null, null, null, null],
    label: 'scrcpy',
  },
  {
    data: [66625, 68375, null, null, null, null, null, null, null, null, null, null],
    label: 'netdata',
  },
  {
    data: [62913, 64995, null, null, null, null, null, null, null, null, null, null],
    label: 'redis',
  },
  {
    data: [55505, 58120, null, null, null, null, null, null, null, null, null, null],
    label: 'Ventoy',
  },
  {
    data: [53354, 55895, null, null, null, null, null, null, null, null, null, null],
    label: 'obs-studio',
  },
  {
    data: [48425, 50246, null, null, null, null, null, null, null, null, null, null],
    label: 'git',
  },
  {
    data: [48270, null, null, null, null, null, null, null, null, null, null, null],
    label: 'llama.cpp',
  },
  {
    data: [40274, 42685, null, null, null, null, null, null, null, null, null, null],
    label: 'FFmpeg',
  },
  {
    data: [36654, 37364, null, null, null, null, null, null, null, null, null, null],
    label: 'php-src',
  },
  {
    data: [null, 36842, null, null, null, null, null, null, null, null, null, null],
    label: 'wrk',
  },
];

langToProjects.Ruby = [
  {
    data: [54149, 54960, null, null, null, null, null, null, null, null, null, null],
    label: 'rails',
  },
  {
    data: [47730, 48356, null, null, null, null, null, null, null, null, null, null],
    label: 'jekyll',
  },
  {
    data: [45025, 46035, null, null, null, null, null, null, null, null, null, null],
    label: 'mastodon',
  },
  {
    data: [40164, 41711, null, null, null, null, null, null, null, null, null, null],
    label: 'huginn',
  },
  {
    data: [39401, 40629, null, null, null, null, null, null, null, null, null, null],
    label: 'discourse',
  },
  {
    data: [38287, 38686, null, null, null, null, null, null, null, null, null, null],
    label: 'fastlane',
  },
  {
    data: [38183, 39563, null, null, null, null, null, null, null, null, null, null],
    label: 'brew',
  },
  {
    data: [33032, 33977, null, null, null, null, null, null, null, null, null, null],
    label: 'devdocs',
  },
  {
    data: [32018, 32890, null, null, null, null, null, null, null, null, null, null],
    label: 'metasploit-framework',
  },
  {
    data: [30945, 31309, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-awesomeness',
  },
];

langToProjects.PHP = [
  {
    data: [75630, 76927, null, null, null, null, null, null, null, null, null, null],
    label: 'laravel',
  },
  {
    data: [51200, 53989, null, null, null, null, null, null, null, null, null, null],
    label: 'SecLists',
  },
  {
    data: [30993, 30977, null, null, null, null, null, null, null, null, null, null],
    label: 'jQuery-File-Upload',
  },
  {
    data: [30751, 31565, null, null, null, null, null, null, null, null, null, null],
    label: 'framework',
  },
  {
    data: [28958, 29342, null, null, null, null, null, null, null, null, null, null],
    label: 'symfony',
  },
  {
    data: [28011, 28285, null, null, null, null, null, null, null, null, null, null],
    label: 'composer',
  },
  {
    data: [26772, 26799, null, null, null, null, null, null, null, null, null, null],
    label: 'Faker',
  },
  {
    data: [24658, 25706, null, null, null, null, null, null, null, null, null, null],
    label: 'server',
  },
  {
    data: [22842, 23001, null, null, null, null, null, null, null, null, null, null],
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
];

langToProjects['C++'] = [
  {
    data: [179845, 182735, null, null, null, null, null, null, null, null, null, null],
    label: 'tensorflow',
  },
  {
    data: [113662, 116136, null, null, null, null, null, null, null, null, null, null],
    label: 'react-native',
  },
  {
    data: [110167, 112118, null, null, null, null, null, null, null, null, null, null],
    label: 'electron',
  },
  {
    data: [92036, 93673, null, null, null, null, null, null, null, null, null, null],
    label: 'terminal',
  },
  {
    data: [79350, 84308, null, null, null, null, null, null, null, null, null, null],
    label: 'godot',
  },
  {
    data: [73422, 75853, null, null, null, null, null, null, null, null, null, null],
    label: 'opencv',
  },
  {
    data: [73162, 76324, null, null, null, null, null, null, null, null, null, null],
    label: 'bitcoin',
  },
  {
    data: [64930, 66051, null, null, null, null, null, null, null, null, null, null],
    label: 'swift',
  },
  {
    data: [62516, 63793, null, null, null, null, null, null, null, null, null, null],
    label: 'protobuf',
  },
  {
    data: [59373, 64995, null, null, null, null, null, null, null, null, null, null],
    label: 'gpt4all',
  },
];

langToProjects.Python = [
  {
    data: [274192, 293221, null, null, null, null, null, null, null, null, null, null],
    label: 'public-apis',
  },
  {
    data: [241752, 256825, null, null, null, null, null, null, null, null, null, null],
    label: 'system-design-primer',
  },
  {
    data: [193417, 206568, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-python',
  },
  {
    data: [174567, 180241, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [145231, 150475, null, null, null, null, null, null, null, null, null, null],
    label: 'Python-100-Days',
  },
  {
    data: [125962, 128777, null, null, null, null, null, null, null, null, null, null],
    label: 'youtube-dl',
  },
  {
    data: [118290, 125848, null, null, null, null, null, null, null, null, null, null],
    label: 'transformers',
  },
  {
    data: [116800, 130924, null, null, null, null, null, null, null, null, null, null],
    label: 'stable-diffusion-webui',
  },
  {
    data: [80811, null, null, null, null, null, null, null, null, null, null, null],
    label: 'thefuck',
  },
  {
    data: [80672, 85424, null, null, null, null, null, null, null, null, null, null],
    label: 'HelloGitHub',
  },
  {
    data: [null, 84600, null, null, null, null, null, null, null, null, null, null],
    label: 'langchain',
  },
];

langToProjects.JavaScript = [
  {
    data: [381049, 389927, null, null, null, null, null, null, null, null, null, null],
    label: 'freeCodeCamp',
  },
  {
    data: [262590, 276519, null, null, null, null, null, null, null, null, null, null],
    label: 'developer-roadmap',
  },
  {
    data: [216999, 222511, null, null, null, null, null, null, null, null, null, null],
    label: 'react',
  },
  {
    data: [206080, 207049, null, null, null, null, null, null, null, null, null, null],
    label: 'vue',
  },
  {
    data: [179053, 183159, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript-algorithms',
  },
  {
    data: [166393, 167589, null, null, null, null, null, null, null, null, null, null],
    label: 'bootstrap',
  },
  {
    data: [156028, 161871, null, null, null, null, null, null, null, null, null, null],
    label: 'AutoGPT',
  },
  {
    data: [154676, 158738, null, null, null, null, null, null, null, null, null, null],
    label: 'vscode',
  },
  {
    data: [139899, 142088, null, null, null, null, null, null, null, null, null, null],
    label: 'javascript',
  },
  {
    data: [117394, null, null, null, null, null, null, null, null, null, null, null],
    label: '30-seconds-of-code',
  },
  {
    data: [null, 121096, null, null, null, null, null, null, null, null, null, null],
    label: 'next.js',
  },
];

langToProjects.Java = [
  {
    data: [85180, 86614, null, null, null, null, null, null, null, null, null, null],
    label: 'java-design-patterns',
  },
  {
    data: [74501, 75018, null, null, null, null, null, null, null, null, null, null],
    label: 'LeetCodeAnimation',
  },
  {
    data: [72996, 75671, null, null, null, null, null, null, null, null, null, null],
    label: 'mall',
  },
  {
    data: [72899, 74511, null, null, null, null, null, null, null, null, null, null],
    label: 'advanced-java',
  },
  {
    data: [71136, 72991, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-boot',
  },
  {
    data: [66336, 67791, null, null, null, null, null, null, null, null, null, null],
    label: 'elasticsearch',
  },
  {
    data: [60781, 61813, null, null, null, null, null, null, null, null, null, null],
    label: 'interviews',
  },
  {
    data: [58297, 76173, null, null, null, null, null, null, null, null, null, null],
    label: 'hello-algo',
  },
  {
    data: [55282, 56886, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [54074, 55239, null, null, null, null, null, null, null, null, null, null],
    label: 'spring-framework',
  },
];

langToProjects.Rust = [
  {
    data: [91777, 93031, null, null, null, null, null, null, null, null, null, null],
    label: 'deno',
  },
  {
    data: [88660, 93418, null, null, null, null, null, null, null, null, null, null],
    label: 'rust',
  },
  {
    data: [72238, 77848, null, null, null, null, null, null, null, null, null, null],
    label: 'tauri',
  },
  {
    data: [52745, 64458, null, null, null, null, null, null, null, null, null, null],
    label: 'rustdesk',
  },
  {
    data: [50495, 53094, null, null, null, null, null, null, null, null, null, null],
    label: 'alacritty',
  },
  {
    data: [45458, 49692, null, null, null, null, null, null, null, null, null, null],
    label: 'rustlings',
  },
  {
    data: [44805, 47339, null, null, null, null, null, null, null, null, null, null],
    label: 'ChatGPT',
  },
  {
    data: [44543, 46763, null, null, null, null, null, null, null, null, null, null],
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
    data: [null, 63118, null, null, null, null, null, null, null, null, null, null],
    label: 'sway',
  },
  {
    data: [null, 58562, null, null, null, null, null, null, null, null, null, null],
    label: 'fuel-core',
  },
];

langToProjects.Kotlin = [
  {
    data: [46671, 47636, null, null, null, null, null, null, null, null, null, null],
    label: 'kotlin',
  },
  {
    data: [44885, 45303, null, null, null, null, null, null, null, null, null, null],
    label: 'okhttp',
  },
  {
    data: [43459, 43883, null, null, null, null, null, null, null, null, null, null],
    label: 'architecture-samples',
  },
  {
    data: [34402, 34714, null, null, null, null, null, null, null, null, null, null],
    label: 'shadowsocks-android',
  },
  {
    data: [33910, 36983, null, null, null, null, null, null, null, null, null, null],
    label: 'fanqiang',
  },
  {
    data: [29901, 30097, null, null, null, null, null, null, null, null, null, null],
    label: 'p3c',
  },
  {
    data: [28917, 29148, null, null, null, null, null, null, null, null, null, null],
    label: 'leakcanary',
  },
  {
    data: [27541, 30842, null, null, null, null, null, null, null, null, null, null],
    label: 'v2rayNG',
  },
  {
    data: [26255, null, null, null, null, null, null, null, null, null, null, null],
    label: 'tachiyomi',
  },
  {
    data: [23888, 24105, null, null, null, null, null, null, null, null, null, null],
    label: 'BaseRecyclerViewAdapterHelper',
  },
  {
    data: [null, 24182, null, null, null, null, null, null, null, null, null, null],
    label: 'legado',
  },
];

langToProjects.Scala = [
  {
    data: [60612, 61448, null, null, null, null, null, null, null, null, null, null],
    label: 'the-algorithm',
  },
  {
    data: [37543, 38471, null, null, null, null, null, null, null, null, null, null],
    label: 'spark',
  },
  {
    data: [16618, 16570, null, null, null, null, null, null, null, null, null, null],
    label: 'prisma1',
  },
  {
    data: [14233, 14279, null, null, null, null, null, null, null, null, null, null],
    label: 'scala',
  },
  {
    data: [14182, 14663, null, null, null, null, null, null, null, null, null, null],
    label: 'lila',
  },
  {
    data: [12854, 12932, null, null, null, null, null, null, null, null, null, null],
    label: 'akka',
  },
  {
    data: [12558, 12548, null, null, null, null, null, null, null, null, null, null],
    label: 'predictionio',
  },
  {
    data: [12484, 12503, null, null, null, null, null, null, null, null, null, null],
    label: 'playframework',
  },
  {
    data: [11606, 11678, null, null, null, null, null, null, null, null, null, null],
    label: 'CMAK',
  },
  {
    data: [10378, 10700, null, null, null, null, null, null, null, null, null, null],
    label: 'bfg-repo-cleaner',
  },
];

langToProjects.Groovy = [
  {
    data: [15670, 16182, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle',
  },
  {
    data: [7975, 8225, null, null, null, null, null, null, null, null, null, null],
    label: 'devops-resources',
  },
  {
    data: [5162, 5341, null, null, null, null, null, null, null, null, null, null],
    label: 'rundeck',
  },
  {
    data: [4141, 4165, null, null, null, null, null, null, null, null, null, null],
    label: 'pipeline-examples',
  },
  {
    data: [3885, 3902, null, null, null, null, null, null, null, null, null, null],
    label: 'gradle_plugin_android_aspectjx',
  },
  {
    data: [3465, 3570, null, null, null, null, null, null, null, null, null, null],
    label: 'shadow',
  },
  {
    data: [2992, 3049, null, null, null, null, null, null, null, null, null, null],
    label: 'fat-aar-android',
  },
  {
    data: [2527, 2542, null, null, null, null, null, null, null, null, null, null],
    label: 'SmartThingsPublic',
  },
  {
    data: [2432, 2555, null, null, null, null, null, null, null, null, null, null],
    label: 'nextflow',
  },
  {
    data: [2235, 2236, null, null, null, null, null, null, null, null, null, null],
    label: 'asgard',
  },
];

langToProjects.Go = [
  {
    data: [116819, 119983, null, null, null, null, null, null, null, null, null, null],
    label: 'go',
  },
  {
    data: [114444, 121659, null, null, null, null, null, null, null, null, null, null],
    label: 'awesome-go',
  },
  {
    data: [104276, 107103, null, null, null, null, null, null, null, null, null, null],
    label: 'kubernetes',
  },
  {
    data: [75630, 80298, null, null, null, null, null, null, null, null, null, null],
    label: 'frp',
  },
  {
    data: [73485, 75710, null, null, null, null, null, null, null, null, null, null],
    label: 'gin',
  },
  {
    data: [70726, 72735, null, null, null, null, null, null, null, null, null, null],
    label: 'hugo',
  },
  {
    data: [67160, 67810, null, null, null, null, null, null, null, null, null, null],
    label: 'moby',
  },
  {
    data: [57319, 59793, null, null, null, null, null, null, null, null, null, null],
    label: 'syncthing',
  },
  {
    data: [56617, 60145, null, null, null, null, null, null, null, null, null, null],
    label: 'fzf',
  },
  {
    data: [51498, null, null, null, null, null, null, null, null, null, null, null],
    label: 'caddy',
  },
  {
    data: [null, 65751, null, null, null, null, null, null, null, null, null, null],
    label: 'ollama',
  },
];

const githubProjects = [
  {
    data: [544672, 589841, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [727863, 862967, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [1222514, 1624403, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [2462079, 4362791, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [1790672, 2707473, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [183405, 195907, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [134133, 145216, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [627874, 735789, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [368430, 395024, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [644762, 692765, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [183408, 195787, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [54658, 55422, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [363997, 389966, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [16315, 16511, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [171826, 188433, null, null, null, null, null, null, null, null, null, null],
    label: 'Rust',
  },
];

const githubMoreThen1000Stars = [
  {
    data: [1827, 1886, null, null, null, null, null, null, null, null, null, null],
    label: 'C',
  },
  {
    data: [2349, 2485, null, null, null, null, null, null, null, null, null, null],
    label: 'C++',
  },
  {
    data: [3379, 3444, null, null, null, null, null, null, null, null, null, null],
    label: 'Java',
  },
  {
    data: [9893, 10308, null, null, null, null, null, null, null, null, null, null],
    label: 'JavaScript',
  },
  {
    data: [6627, 7126, null, null, null, null, null, null, null, null, null, null],
    label: 'Python',
  },
  {
    data: [1043, 1066, null, null, null, null, null, null, null, null, null, null],
    label: 'Swift',
  },
  {
    data: [69, 72, null, null, null, null, null, null, null, null, null, null],
    label: 'R',
  },
  {
    data: [1336, 1419, null, null, null, null, null, null, null, null, null, null],
    label: 'C#',
  },
  {
    data: [936, 943, null, null, null, null, null, null, null, null, null, null],
    label: 'Ruby',
  },
  {
    data: [1335, 1374, null, null, null, null, null, null, null, null, null, null],
    label: 'PHP',
  },
  {
    data: [556, 594, null, null, null, null, null, null, null, null, null, null],
    label: 'Kotlin',
  },
  {
    data: [169, 174, null, null, null, null, null, null, null, null, null, null],
    label: 'Scala',
  },
  {
    data: [2848, 2979, null, null, null, null, null, null, null, null, null, null],
    label: 'Go',
  },
  {
    data: [21, 22, null, null, null, null, null, null, null, null, null, null],
    label: 'Groovy',
  },
  {
    data: [1130, 1243, null, null, null, null, null, null, null, null, null, null],
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
