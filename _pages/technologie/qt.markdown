---
layout: simpleTechnology
title-full: Qt - opis, najlepsze kursy i polecane książki
title: Qt
permalink: /technologie/qt/
no-books: true
---

{: .official-page .darker-overlay }
[Poczytaj o {{ page.title }} na oficjalnej stronie](https://www.qt.io/)

**Qt** to framework bazujący na języku C++. Jest on wieloplatformowy – oznacza to, że wykorzystując ten sam kod źródłowy, możemy stworzyć aplikację na wiele różnych urządzeń, a sama aplikacja będzie działać na nich dokładnie tak samo. Framework ten rozszerza [język C++](/technologie/c++) o wiele funkcjonalności.

Framework **Qt** wprowadza szereg nowych klas ułatwiających pracę programiście m.in. w zarządzaniu pamięcią.

**Qt** jest dojrzałym, stale rozwijanym i wspieranym projektem. Znajdziemy w nim wiele gotowych modułów, jak np. dedykowane pod aplikacje desktopowe **QtWidgets**, czy moduł **QtQuick**, który znacząco ułatwia tworzenie programów wieloplatformowych przy użyciu **Qml** – deklaratywnego języka, składnią przypominającym połączenie JSON, CSS oraz JavaScript.

**Qt** jest wykorzystywany w praktycznie każdej branży przemysłowej. Ze względu na wieloplatformowość, znajduje on zastosowanie na komputerach osobistych, smartfonach, tabletach, ale też i w urządzeniach wbudowanych. Szczególnym sukcesem cieszy się on w branży medycznej, a także w branży motoryzacyjnej. Qt jest wykorzystywany przez takie firmy jak np. Mercedes, Bosch, AMD, Panasonic, LG, czy Medec. **Qt** został wykorzystany do stworzenia m.in. komunikatorów Telegram, Skype, Gadu-Gadu, aplikacji muzycznej Spotify, emulatora VirtualBox, menadżera haseł KeePassXC, launcherze gier Battle.net, a także w licznych oprogramowaniach znanej firmy Autodesk.

# Poziom skomplikowania

Jako że Qt bazuje na języku C++, to część kodu źródłowego każdego projektu stworzonego w Qt zawsze będzie w pewnym stopniu wykorzystywać składnię C++. Może to się wydawać sprzeczne (bo przecież Qt bazuje na C++), ale programowanie we frameworku **Qt** jest znacznie łatwiejsze niż w języku **C++**. Wynika to przede wszystkim z faktu, że framework ten posiada wiele, gotowych do użycia wydajnych bibliotek i klas, dzięki czemu programista nie musi wymyślać koła na nowo, a zamiast tego może skorzystać z bogatej i szczegółowo opisanej dokumentacji, a także wsparcia społeczności. Sporym ułatwieniem jest, rzecz jasna, rozwiązanie problemu wycieków pamięci, poprzez wspomniany wyżej system rodzic-dziecko. Oczywiście nikt nie broni wykorzystywać wbudowanych w C++ inteligentnych wskaźników, a także innych gotowych bibliotek stworzonych w czystym C++/C.

Co jednak z interfejsem graficznym? Tutaj nie możemy zapomnieć o języku **Qml**. W języku tym prosto i jasno określamy jaki efekt chcemy osiągnąć, a następnie po prostu kompilujemy projekt. Tu również do wykorzystania mamy wiele gotowych modułów, w tym gotowe kontrolki, listy, popupy i wiele innych.

We frameworku **Qt** znajdziesz również wiele zaawansowanych funkcjonalności, których implementacja na własną rękę byłaby wyzwaniem. Przykładem może być moduł Bluetooth, czy GPS. Normalnie wymagałoby to skorzystania z niskopoziomowych (często natywnych) języków wykorzystujących zasoby systemowe. We frameworku Qt możesz to osiągnąć za pomocą kilku linijek kodu.

{% include courses.html %}