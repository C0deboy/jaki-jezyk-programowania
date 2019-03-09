---
layout:     technology
title-full: Język programowania Go - zastosowanie, przyszłość, polecane książki
title:      Go
image:      go.png
in-progress:  true
---

{% assign stats = site.data.statistics.statistics.Go %}

# Zastosowanie

Go to relatywnie nowy, statycznie typowany język programowania od Google. Go został zaprojektowany tak by umożliwić wysokowydajne i łatwe programowanie współbieżne. 

W przypadku mikrousług, wąskim gardłem nie jest moc obliczeniowa, a przepustowość i komunikacja między komponentami. W Go zarządzanie komunikacją wbudowane jest w sam język, co powoduje, że tego typu projekty znacznie łatwiej jest skalować.

Dzięki tym zaletom doskonale nadaję się do tworzenia aplikacji natywnych w chmurze (*native cloud application* (NCA)), mikroserwisów czy systemów rozproszonych (ang. *distributed systems*).

Zaletą Go jest również szybka kompilacja, która zazwyczaj daję nam gotową do uruchomienia binarkę, więc deployowanie aplikacji czy pisanie skryptów w Go jest na prawdę proste i szybkie.

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

Jednak nieco różni się od innych języków obiektowych:
- Nie ma klas
- Nie ma dziedziczenia
- Nie ma konstruktorów
- Nie ma adnotacji
- Nie ma generyków
- Nie ma wyjątków

Jak widać nie ma wielu aspektów programowania obiektowego, co dla niektórych może się wydawać minusem, jednak pod względem nauki jest to na pewno uproszczenie.

Go jest idiomatyczny, tzn. często jest tylko jeden sposób na wykonanie danej rzeczy, co może być za równo plusem jak i minusem. Go ma także wbudowanych wiele mechanizmów, które wymuszają na programistach stosowanie się do dobrych praktyk. Jest to na pewno plusem dla początkujących bo trudniej sobie strzelić w stopę. Dzięki takim rozwiązaniom czytelność i porządek w kodzie przestają zależeć od kultury programisty, a przesuwają się w stronę zasad konstrukcji języka.

Dzięki tzw. gorutynom (ang. *goroutines*) i kanałom wbudowanych w Go, programowanie współbieżne jest dużo prostsze.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign go = site.data.statistics.languagesVersions.Go %}

Popularność Go w ostatnich latach cały czas rośnie, a stoi za tym przede wszystkim rozwój internetu oraz zapotrzebowania na rozwiązania do obsługi komunikacji sieciowej. Język ten jest stale rozwijany, a jego ostatnia wersja {{ go.version }} została wydana {{ go.releaseDate }}. Równie dobrze wróży temu językowi fakt, że został stworzony i jest rozwijany przez pracowników Google. Go to dobry kandydat do nauki na najbliższe lata. 

{% include courses.html %}

{% include books.html %}




