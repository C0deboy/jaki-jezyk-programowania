---
layout:     technology
title-full: Język programowania PHP - zastosowanie, przyszłość, polecane książki
title:      PHP
image:		php.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.PHP %}

# Zastosowanie

**PHP** jest skryptowym językiem programowania, wykorzystywanym w projektowaniu stron, ale także do ogólnych zastosowań. Wykonywany jest po stronie serwera co oznacza, że jest niewidoczny dla użytkowników. Pozwala na m.in. dynamiczne generowanie strony, tworzenie i modyfikowanie plików na serwerze, ograniczanie dostępu do danych podstron na twojej stronie, szyfrowanie danych czy stosowanie ciasteczek. Kod PHP może być przeplatany z kodem HTML, jednak nie jest to dobra praktyka. Najprostszym przykładem jego wykorzystania jest obsługa formularzy na stronach internetowych. PHP pozwala także na obsługę baz danych co wymaga znajomości [SQL](/technologie/sql) -- strukturalnego języka zapytań, który służy między innymi do tworzenia i modyfikowania baz danych, a także do wprowadzania i pobierania danych z baz danych.

PHP jest określany jako wolny język. Jednak PHP7 wprowadziło zmiany, które polepszyły jego wydajność. Ponadto, Facebook zainwestował w rozwój PHP, umożliwiając przyspieszenie działania nawet do 6 razy dzięki HipHop Virtual Machine (HHVM) -- jest to projekt open-source, który bazuje na kompilatorze JIT (Just-in-time). Kod PHP jest przetwarzany do kodu maszynowego, co znacznie przyspiesza jego działanie.

W PHP tworzone są najczęściej systemy zarządzania treścią, systemy forów dyskusyjnych, aplikacje pocztowe oraz klienty baz danych.
Popularne strony/firmy, które wykorzystują PHP to WordPress, Wikipedia, Facebook, Flicker, WhatsApp, Tesla czy IBM.

{% include language/top10github.html %}

# Poziom skomplikowania

PHP jest łatwy do rozpoczęcia nauki. Jest to dynamiczny język programowania więc jest całkiem elastyczny jeśli chodzi o pisanie kodu oraz nie jest silnie typowany tzn można zmieniać typ danych podczas wykonywania programu. Składnia PHP jest relatywnie prosta, lecz niektórzy uważają, że jest to brzydki język. Ostatnia wersja (PHP7) naprawiła wiele niespójności i błędów, więc jest bardziej przyjazna dla początkujących.

PHP wraz ze wzrostem aplikacji może być trudniejszy do utrzymania i namierzania błędów, jako, że jest to dynamiczny język. Jednak jeśli nauczymy się jak prowadzić porządek w kodzie i pisać testy to utrzymanie spójnego kodu stanie się łatwiejsze.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.date | date: "%d.%m.%Y"  }}</h4>

Jest to najpopularniejszy język, jeśli chodzi o strony internetowe. 80% z 10 milionów najpopularniejszych stron używa właśnie PHP.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

PHP jest dosyć starym językiem, ale jego popularność nie spada i się na to nie zanosi. Fakt, że jest wykorzystywany przez ponad 80% najpopularniejszych stron internetowych sprawia, że nie zostanie łatwo wyparty. Ponadto cały czas jest rozwijany, aby sprostać nowym wymaganiom. Wersja PHP7 mocno go odświeżyła, a ostatnia jego wersja wydana została na początku 2017 roku.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](http://helion.pl/view/9102Q):

{: class="promotions-link"}
[Zobacz aktualne promocje](http://helion.pl/page/9102Q/promocje)


<div class="book">
    <script src="http://helion.pl/plugins/new/ksiazkasm.phi?id=php7pk&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="http://helion.pl/plugins/new/ksiazkasm.phi?id=phmdk3&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="http://helion.pl/plugins/new/ksiazkasm.phi?id=phpwzo&nr=9102Q&size=181&utf8=1"></script>
</div>

I już w przedsprzedaży, od dawna oczekiwane, 5 wydanie:

<div class="book">
    <script src="http://helion.pl/plugins/new/ksiazkasm.phi?id=phpob5&nr=9102Q&size=181&utf8=1"></script>
</div>

Inne:

<div class="book">
    <script src="http://helion.pl/plugins/new/ksiazkasm.phi?id=twbeap&nr=9102Q&size=181&utf8=1"></script>
</div>