---
layout: technology
title-full: JavaScript - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: JavaScript
permalink: /technologie/javascript/
image: javascript.png
---

{% assign stats = site.data.statistics.statistics.JavaScript %}

Przy tworzeniu stron internetowych, oprócz samego języka Javascript, niezbędne
jest [zrozumienie kodu HTML oraz podstaw CSS-a](/technologie/html&css).

# Zastosowanie

**JavaScript** to dynamicznie typowany język wysokiego poziomu. Najczęściej jest używany przy tworzeniu stron WWW,
zapewniając interaktywność stron oraz obsługę zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych. Takie
wykorzystanie języka JavaScript ułatwia zastosowanie biblioteki, takiej jak [jQuery](https://jquery.com/). Warto przy
tym zauważyć, że używanie biblioteki nie powinno zastępować sensownej znajomości samego języka.

W większych projektach warto korzystać z zalety statycznego typowania i przyjemniejszego programowania obiektowego
w [TypeScript](/technologie/typescript), który jest swojego rodzaju nakładką na JavaScript. Ponadto, w takich
przypadkach, warto też skorzystać z frameworków do budowania aplikacji jak np. [Angular](/technologie/angular)
, [React](/technologie/react) czy [Vue](/technologie/vue), które znacznie ułatwiają pracę.

Javascript może też być wykorzystywany do tworzenia gier przeglądarkach, a jednym z popularnych frameworków do tych
celów jest [Phaser](/technolgoie/phaser).

Dzięki platformom, takim jak [Electron.js](https://electron.atom.io/) czy [nw.js](https://nwjs.io/), możliwe jest
tworzenie pełnoprawnych, wieloplatformowych aplikacji/gier przy użyciu wyłącznie technologii sieciowych (HTML, CSS,
JS...) dzięki połączeniu platformy Node.js oraz silnika [przeglądarki Chromium](https://www.chromium.org/).

**JavaScript** można używać również po stronie serwera (backend) dzięki [Node.js](/technologie/node.js)

{% include language/top10github.html %}

# Poziom skomplikowania

JavaScript jest bardzo łatwym językiem do rozpoczęcia nauki programowania, zwłaszcza że jest to język wysokiego poziomu,
a do pisania kodu wystarczy tylko notatnik oraz przeglądarka - nie ma potrzeby kompilowania kodu. Problematyczne dla
początkujących może być jednak fakt, że ten sam kod może działać inaczej w różnych przeglądarkach. Te różnice na
szczęście powoli zanikają wraz z rozwojem przeglądarek oraz dzięki dynamicznemu procesowi standaryzacji.

Język JavaScript jest językiem jednowątkowym, co w uproszczeniu oznacza tyle, że naraz może być wykonywana tylko jedna
operacja. W przypadku większych aplikacji może stanowić to problem, gdyż kolejne operacje będą blokowane przez
pozostałe. Stąd powstała potrzeba wprowadzenia do języka *asynchroniczności*, a zatem — w dużym skrócie — możliwości
wykonywania operacji "w tle", bez potrzeby czekania na ich wynik. To umożliwiło wypracowanie takich technik,
jak [Ajax](https://developer.mozilla.org/en/docs/AJAX) (nieblokująca komunikacja z serwerem w celu pobrania dodatkowych
danych), niemniej wprowadziło całą nową klasę problemów związanych z faktem, że zaburzona została kolejność wykonywania
kodu (nie wiadomo bowiem, kiedy operacje asynchroniczne zwrócą swój wynik).

Debugowanie JavaScriptu nie jest jakoś specjalnie trudne. Tym bardziej że przeglądarki mają wbudowane narzędzia dla
programistów, które pomagają rozwiązać większość problemów bez używania internetu czy dokumentacji. Jest to podstawowa
umiejętność, którą należy poznać na samym początku. Smutne jest to, że spora część kursów kompletnie omija ten aspekt.

Im większa aplikacja, tym trudniej jest ją poprawnie utrzymać. Pomogą w tym podzielenie kodu na moduły, stosowanie
odpowiednich wzorców projektowych oraz trzymanie się dobrych praktyk.

JavaScript to ogromy i dynamiczny ekosystem, który ma wiele bibliotek i framworków na rozwiązanie podobnych problemów,
więc na początku może to być przytłaczające.

Podsumowując, nauka języka JavaScript sama w sobie jest dość łatwa, jednak pełne opanowanie tego języka i ekosystemu
jest już wymagające.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

JavaScript to "must know" jeśli chodzi o programowanie webowe i raczej to się nie zmieni. Jest to bardzo dynamicznie
rozwijający się język programowania, szczególnie ze względu na co chwilę pojawiające się nowe biblioteki i frameworki
poszerzające jego możliwości i zastosowanie. Ciężko za nim nadążyć. 2 lata w przypadku JavaScript to wieki. Jego
ostatnia wersja {{ versions.JavaScript.version }} została wydana {{ versions.JavaScript.releaseDate }}. JavaScript to
uniwersalny wybór i często jest nawet w stacku technologicznym backendowca.

{% include courses.html %}

{% include books.html %}
