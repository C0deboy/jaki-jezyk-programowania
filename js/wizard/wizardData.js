import Answer from './Answer';
import Guide from './Guide';
import NextQuestion from './NextQuestion';

const wizardData = {
  whyProgramming: {
    question: 'Dlaczego chciałbyś się uczyć programowania?',
    answers: [
      new Answer('Chciałbym tym zainteresować moje dzieci', 'forkids.png', new Guide('Scratch -> Python or Javascript')),
      new Answer('Chciałbym zostać programistą', 'prodev.png', new NextQuestion('whichField')),
      new Answer('Mam pomysł na projekt', 'startup.png', new NextQuestion('whatToCreate')),
      new Answer('Nie wiem, słyszałem, że to fajne. Wybierz coś dla mnie', 'fun.png', new Guide('Python', 'Javascript')),
    ],
  },
  whatToCreate: {
    question: 'Co chciałbyś zrobić?',
    answers: [
      new Answer('Aplikację mobilną', 'mobile.png', new NextQuestion('whichMobilePlatform')),
      new Answer('Grę', 'games.png', new NextQuestion('whichPlatformForGame')),
      new Answer('Aplikację desktopową', 'webdev.png', new NextQuestion('whichDesktopPlatform')),
      new Answer('Prostą stronę internetową', 'webdev2.png', new Guide('HTML-&-CSS -> Javascript')),
      new Answer('Założyć bloga', 'webdev2.png', new Guide('Jekyll', 'Wordpress')),
    ],
  },
  whichField: {
    question: 'W jakiej dziedzinie?',
    answers: [
      new Answer('Aplikacje', 'webdev.png', new NextQuestion('typeOfApps')),
      new Answer('Gry', 'games.png', new NextQuestion('typeOfGames')),
      new Answer('Data science/Big data', 'dataanalysis.png', new Guide('R', 'Python', 'Scala')),
      new Answer('Systemy wbudowane', 'lowlevel.png', new Guide('C', 'Rust')),
      new Answer('Sztuczna inteligencja/Machine Learning', 'brain.png', new Guide('Python', 'Scala')),
      new Answer('Robotyka', 'robot.png', new Guide('C', 'C++', 'Python', 'Rust')),
      new Answer('Bioinformatyka', 'bio.png', new Guide('R')),
      new Answer('Bazy danych', 'databases.png', new Guide('SQL')),
      new Answer('Nie wiem, ja tylko chce $$$', 'money.png', new Guide('Java', 'C#', 'Python')),
    ],
  },
  whichMobilePlatform: {
    question: 'Na jaką platformę?',
    answers: [
      new Answer('iOS', 'apple.png', new Guide('Swift')),
      new Answer('Android', 'android.png', new Guide('Java', 'Kotlin')),
      new Answer('Web', 'webdev.png', new NextQuestion('frontendOrBackend')),
    ],
  },
  whichDesktopPlatform: {
    question: 'Na jaką platformę?',
    answers: [
      new Answer('Mac', 'apple.png', new Guide(['Swift'])),
      new Answer('Linux', 'linux.png', new Guide(['Java'])),
      new Answer('Windows', 'windows.png', new Guide('C#')),
      new Answer('Wieloplatformowe', 'crossplatform.png', new Guide('Java')),
    ],
  },
  typeOfApps: {
    question: 'Jaki rodzaj aplikacji?',
    answers: [
      new Answer('Mobilne', 'mobile.png', new NextQuestion('whichMobilePlatform')),
      new Answer('Desktopowe', 'pc.png', new NextQuestion('whichDesktopPlatform')),
      new Answer('Webowe', 'webdev.png', new NextQuestion('frontendOrBackend')),
    ],
  },
  frontendOrBackend: {
    question: 'Frontend czy backend?',
    answers: [
      new Answer('Frontend', 'frontend.png', new Guide('Javascript -> Angular or React')),
      new Answer('Backend', 'backend.png', new NextQuestion('whichTypeOfWork')),
    ],
  },
  whichTypeOfWork: {
    question: 'Jaka praca bardziej Ci odpowiada?',
    answers: [
      new Answer('W korporacji', 'corpo.png', new NextQuestion('doLikeMicrosoft')),
      new Answer('Małe biznesy / Freelance', 'smallbuissness.png', new Guide('PHP -> Symfony', 'Python -> Django', 'Ruby -> Ruby-on-rails', 'Javascript -> Node.js')),
    ],
  },
  doLikeMicrosoft: {
    question: 'Lubisz Microsoft?',
    answers: [
      new Answer('Tak', 'yes.png', new Guide('C# -> ASP.NET')),
      new Answer('Nie', 'no.png', new Guide('Java -> Spring')),
    ],
  },
  typeOfGames: {
    question: 'Jaki typ gier?',
    answers: [
      new Answer('AAA', 'aaa.png', new Guide('C++ -> Unreal-Engine-4')),
      new Answer('Indie', 'indie.png', new Guide('C# -> Unity', 'Java -> LibGDX', 'Kotlin -> LibGDX')),
      new Answer('Wirtualna rzeczywistość', 'virtualreality.png', new Guide('C++ -> Unreal-Engine-4', 'C# -> Unity')),
      new Answer('Yyy co?', 'undecided.png', new NextQuestion('easyOrPerformence')),
    ],
  },
  whichPlatformForGame: {
    question: 'Na jaką plaftormę?',
    answers: [
      new Answer('Gra desktopowa', 'pc.png', new NextQuestion('typeOfGames')),
      new Answer('Gra mobilna', 'mobile.png', new Guide('C# -> Unity', 'Java -> LibGDX', 'Kotlin -> LibGDX')),
      new Answer('Gra przeglądarkowa', 'webdev.png', new Guide('Javascript -> Phaser')),
    ],
  },
  easyOrPerformence: {
    question: 'Łatwiejsza nauka czy wydajność?',
    answers: [
      new Answer('Łatwiejsza nauka', 'easylerning.png', new Guide('C# -> Unity')),
      new Answer('Wydajność', 'graphics.png', new Guide('C++ -> Unreal-Engine-4')),
    ],
  },
};

export default wizardData;
export { NextQuestion };
