---
layout:     technology
title-full: Język programowania Swift - zastosowanie, przyszłość, polecane książki
title:      Swift
image:		swift.png
---

{% assign stats = site.data.statistics.statistics.Swift %}

# Zastosowanie

Swift jest językiem programowania ogólnego zastosowania stworzonym przez Apple w 2014 roku, więc jest całkiem świeży. Jest następcą Objective-C. Apple obniżyło barierę wejścia dla programistów. Nowy język jest tym, do czego przyzwyczajeni są młodsi programiści, z wysokopoziomowymi strukturami wbudowanymi w język i wieloma ułatwieniami.

Służy głównie do tworzenia aplikacji na iOS i Mac OS.

{% include language/top10github.html %}

# Poziom skomplikowania

Swift został zaprojektowany tak, aby był bardziej odporny na błędy oraz bardziej zwięzły niż jego poprzednik Objective-C. Swift wzorował się na prostocie takich języków jak Python czy Ruby, więc jest przyjazny dla młodych programistów. Jego kod można czytać jak zwykły tekst po angielsku.

Nie musimy deklarować typów przy inicjalizacji zmiennych. Jest też elastyczny, jeśli chodzi o typy, np. metoda może zwracać wiele typów wartości równocześnie, co nie jest możliwe w takich językach jak Java, C# czy C++.

Swift zajmuje się za nas także zarządzaniem pamięcią, co ułatwia sprawę początkującym programistom.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Swift dopiero się rozwija, ale udaje mu się wyprzeć Objective-C. Dlatego zapotrzebowanie na programistów Swift będzie się z roku na rok zwiększać. Swift jest jednym z najszybciej rozwijającym się języków. Jego przyszłość głównie zależy od Apple, która wydaję się całkiem przejrzysta. Ma wszystko to co nowoczesny język programowania powinien mieć i ma potencjał na konkurowanie z najlepszymi. Jego ostatnia wersja {{ versions.Swift.version }} została wydana {{ versions.Swift.releaseDate }}.

{% include courses.html %}

{% include books.html %}