---
layout: technology
title-full: Go - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: Go
permalink: /technologie/go/
image: go.png
---

{% assign stats = site.data.statistics.statistics.Go %}

# Zastosowanie

Go to relatywnie nowy, statycznie typowany język programowania od Google. Go został zaprojektowany tak, by umożliwić wysokowydajne i łatwe programowanie współbieżne.

W przypadku mikrousług wąskim gardłem nie jest moc obliczeniowa, a przepustowość i komunikacja między komponentami. W Go zarządzanie komunikacją wbudowane jest w sam język, co powoduje, że tego typu projekty znacznie łatwiej jest skalować.

Dzięki tym zaletom doskonale nadaję się do tworzenia aplikacji natywnych w chmurze (*native cloud application* (NCA)), mikroserwisów czy systemów rozproszonych (ang. *distributed systems*).

Zaletą Go jest również szybka kompilacja, która zazwyczaj daję nam gotową do uruchomienia binarkę, więc deployowanie aplikacji czy pisanie skryptów w Go jest naprawdę proste i szybkie.

Go jest wykorzystywany przez wiele dużych firm m.in.:
- CloudFlare
- Dropbox
- Google
- Netflix
- SoundCloud
- Twitch.tv
- Uber

Większą listę aplikacji i firm wykorzystujących Go można zobaczyć tu [Go - Aplikacje](https://en.wikipedia.org/wiki/Go_(programming_language)#Applications)

{% include language/top10github.html %}

# Poziom skomplikowania

Go posiada wiele zautomatyzowanych rozwiązań, które w innych językach muszą zostać zaprogramowane ręcznie przez twórcę.

Go łączy w sobie łatwość pisania aplikacji charakterystyczną dla języków dynamicznych (np. Python), jak również wydajność języków kompilowanych (np. C, C++).
Go w przeciwieństwie do np. Pythona ma typowanie statyczne, które w przypadku projektów zawierających tysiące linii kodu ma duże znaczenie dla czytelności i dalszego utrzymania projektu.

Jak większość wysokopoziomowych języków jest *memory safe* i posiada *garbage colector*, więc nie trzeba się martwić zarządzaniem pamięcią.

Język Go jednak nieco różni się od innych języków obiektowych:
- Nie ma klas
- Nie ma dziedziczenia
- Nie ma konstruktorów
- Nie ma adnotacji
- Nie ma generyków
- Nie ma wyjątków

Jak widać, nie ma w nim wielu aspektów programowania obiektowego, co dla niektórych może się wydawać minusem, jednak pod względem nauki jest to na pewno uproszczenie.

Go jest idiomatyczny, tzn. często jest tylko jeden sposób na wykonanie danej rzeczy, co może być zarówno plusem, jak i minusem. Go ma także wbudowanych wiele mechanizmów, które wymuszają na programistach stosowanie się do dobrych praktyk. Jest to na pewno plusem dla początkujących, bo trudniej sobie strzelić w stopę. Dzięki takim rozwiązaniom czytelność i porządek w kodzie przestają zależeć od kultury programisty, a przesuwają się w stronę zasad konstrukcji języka.

Dzięki tzw. gorutynom (ang. *goroutines*) i kanałom wbudowanym w Go, programowanie współbieżne jest dużo prostsze.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign go = site.data.statistics.languagesVersions.Go %}

Popularność Go w ostatnich latach cały czas rośnie, a fakt, że został stworzony i jest rozwijany przez pracowników Google dobrze mu wróży.
Jego ostatnia wersja {{ go.version }} została wydana {{ go.releaseDate }}. Wydaje się, że to dobry kandydat do nauki na najbliższe lata.

{% include courses.html %}

{% include books.html %}




