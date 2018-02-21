---
layout:     technology
title-full: Język programowania JavaScript - zastosowanie, przyszłość, polecane książki
title:      JavaScript
image:		javascript.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.JavaScript %}

Przy tworzeniu stron internetowych, oprócz samego języka Javascript, niezbędne jest [zrozumienie kodu HTML oraz podstaw CSS-a](/technologie/html&css).

# Zastosowanie

**JavaScript** to dynamicznie typowany język wysokiego poziomu. Najczęściej jest używany przy tworzeniu stron WWW, zapewniając interaktywność stron oraz obsługę zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych. Takie wykorzystanie języka JavaScript ułatwia zastosowanie biblioteki, takiej jak [jQuery](https://jquery.com/). Warto przy tym zauważyć, że używanie biblioteki nie powinno zastępować sensownej znajomości samego języka.

Dzięki platformom, takim jak [Electron.js](https://electron.atom.io/) czy [nw.js](https://nwjs.io/), możliwe jest tworzenie pełnoprawnych, wieloplatformowych aplikacji/gier przy użyciu wyłącznie technologii sieciowych (HTML, CSS, JS...) dzięki połączeniu platformy Node.js oraz silnika [przeglądarki Chromium](https://www.chromium.org/).

**JavaScript** można używać również po stronie serwera (backend) dzięki [Node.js](/technologie/node.js)

{% include language/top10github.html %}

# Poziom skomplikowania

JavaScript jest bardzo łatwym językiem do rozpoczęcia nauki programowania, zwłaszcza, że jest to język wysokiego poziomu, a do pisania kodu wystarczy tylko notatnik oraz przeglądarka - nie ma potrzeby kompilowania kodu. Problematyczne dla początkujących może być jednak fakt, że ten sam kod może działać inaczej w różnych przeglądarkach. Te różnice na szczęście powoli zanikają wraz z rozwojem przeglądarek oraz dzięki dynamicznemu procesowi standaryzacji.

Język JavaScript jest językiem jednowątkowym, co w uproszczeniu oznacza tyle, że naraz może być wykonywana tylko jedna operacja. W przypadku większych aplikacji może stanowić to problem, gdyż kolejne operacje będą blokowane przez pozostałe. Stąd powstała potrzeba wprowadzenia do języka *asynchroniczności* , a zatem -- w dużym skrócie -- możliwości wykonywania operacji "w tle", bez potrzeby czekania na ich wynik. To umożliwiło wypracowanie takich technik, jak [Ajax](https://developer.mozilla.org/en/docs/AJAX) (nieblokująca komunikacja z serwerem w celu pobrania dodatkowych danych), niemniej wprowadziło całą nową klasę problemów związanych z faktem, że zaburzona została kolejność wykonywania kodu (nie wiadomo bowiem, kiedy operacje asynchroniczne zwrócą swój wynik).

Debugowanie JavaScriptu nie jest jakoś specjalnie trudne. Tym bardziej, że przeglądarki mają wbudowane narzędzia dla programistów, które pomagają rozwiązać większość problemów bez używania internetu czy dokumentacji. Jest to podstawowa umiejętność, którą należy poznać na samym początku. Smutne jest to, że spora część kursów kompletnie omija ten aspekt.

Im większa aplikacja, tym trudniej jest ją poprawnie utrzymać. Pomogą w tym podzielenie kodu na moduły, stosowanie odpowiednich wzorców projektowych oraz trzymanie się dobrych praktyk.

Podsumowując, nauka języka JavaScript jest dość łatwa, jednak pełne opanowanie tego języka jest już wymagające.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign versions = site.data.languagesVersions %}

JavaScript to "must know" jeśli chodzi o programowanie webowe i w najbliższym czasie to się nie zmieni. Jest to bardzo dynamicznie rozwijający się język programowania, szczególnie ze względu na co chwilę pojawiające się nowe biblioteki i frameworki poszerzające jego możliwości i zastosowanie. Ciężko za nim nadążyć. 2 lata w przypadku JavaScript to wieki. Jego ostatnia wersja {{ versions.JavaScript.version }} została wydana {{ versions.JavaScript.releaseDate }}. JavaScript to uniwersalny wybór i często jest nawet w stacku technologicznym backendowca.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jsqwdk&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=ecmasc&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jascpz&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=efprjs&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jscmoc&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=prjsrg&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

Oraz cała seria:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tjndro&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tajnjs&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tajejs&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tjsasy&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tjtypy&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tjszak&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

JQuery

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=bjqswp&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jquer3&nr=9102Q&size=181&utf8=1"></script>
</div>

O OOP i wzorcach projektowych:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jascwz&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=misjsp&nr=9102Q&size=181&dodaj=0&utf8=1"></script>
</div>

