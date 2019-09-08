---
layout:     technology
title-full: Groovy - zastosowanie, przyszłość, najlepsze, polecane kursy
title:      Groovy
image:      groovy.png
no-books:   true
---

{% assign stats = site.data.statistics.statistics.Groovy %}

# Zastosowanie

**Groovy** to obiektowy język programowania na platformę Javy - podobnie jak Kotlin, Scala i inne języki JVM-owe, kompiluje się do kodu bajtowego Javy. Znaczy to mniej więcej tyle, że uruchamiamy go w tym samym środowisku co Javę.

Groovy wspiera typowanie dynamiczne jak i statyczne, dlatego może być używany też jako język skryptowy. Posiada wiele użytecznych funkcji, które usprawniają pracę programisty i sprawiają, że kod jest bardziej zwięzły i czytelny.

Tak jak inne języki JVM-owe, Groovy może być używany zamiennie z Javą oraz wykorzystywać jej biblioteki. Wiele narzędzi wspiera Groviego ze względu na jego zalety i też na nich jego zastosowanie w ostatnich latach się skupia. Groovy jest też często wykorzystywany do automatyzacji pracy w postaci skryptów.

Groovy jest już coraz rzadziej używany do pisania pełnoprawnych aplikacji, ze względu na pojawienia się nowych języków na JVM takich jak [Kotlin](/technologie/kotlin) i [Scala](/technologie/scala).

Najpopularniejsze narzędzia, które wykorzystują Grooviego to:

- [SoapUI](https://www.soapui.org/) - narzędzie do testowania web serwisów korzystających m.in. z SOAP i REST
- [Spock](http://spockframework.org/) - framework do testowania 
- [Jenkins](https://jenkins.io/) - serwer automatyzacji budowania projektów (*Continuous Integration* i *Continuous Delivery*)
- [Gradle](https://gradle.org/) - narzędzie służące do budowania projektów

Kiedyś były popularne:
- [Grails](https://grails.org/) - framework do tworzenia aplikacji webowych
- [Griffon](http://griffon-framework.org/) - framework do tworzenia aplikacji desktopowych

Można więc powiedzieć, że obecnie Grooviego najczęściej wykorzystuje się do:
- pisania skryptów automatyzujących pracę
- konfiguracji i pisania pluginów do Gradle
- pisania testów

{% include language/top10github.html %}

# Poziom skomplikowania

Groovy w porównaniu do Javy oferuję dużo bardziej zwięzłą i czytelniejszą składnię, która jest łatwa do nauki. To dlatego jest często wykorzystywany do pisania skryptów lub testów.

Groovy posiada wszystkie funkcję wysokopoziomowego języka m.in. nie musimy się martwić zarządzaniem pamięcią.

Ogólnie Groovy jest językiem relatywnie łatwym do nauki, szczególnie dla osoby, która jest już zaznajomiona z Javą - wtedy przejście jest naprawdę płynne.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign groovy = site.data.statistics.languagesVersions.Groovy %}

Groovy stracił nieco na swojej popularności, głównie ze względu na pojawienia się [Kotlina](/technologie/kotlin) i [Scali](/technologie/scala). Najbliższe lata raczej nie zapowiadają się dla niego obiecująco, mimo to jest stale rozwijany. Jego ostatnia wersja {{ groovy.version }} została wydana {{ groovy.releaseDate }}{% unless groovy.version contains '3.'%}, a zapowiadana wersja 3.0 porzuci wsparcie dla starej Javy i wprowadzi wiele [nowych funkcji i ulepszeń](http://groovy-lang.org/releasenotes/groovy-3.0.html){% endunless %}.

{% include courses.html %}

{% include books.html %}




