---
layout:     technology
title-full: Język programowania Go - zastosowanie, przyszłość, polecane książki
title:      Go
image:      go.png
in-progress:  true
---

{% assign stats = site.data.statistics.statistics.Go %}

# Zastosowanie

Go to statycznie typowany język programowania od Google. Go został zaprojektowany tak by umożliwić wysokowydajne i łatwe programowanie współbieżne, szczególnie pod kątem aplikacji rozproszonych. 

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

Go łączy w sobie łatwość pisania aplikacji charakterystyczną dla języków dynamicznych (np. Python), jak również wydajność języków kompilowanych (np. C, C++).
Jak większość wysokopoziomowych języków jest *memory safe* i posiada *garbage colector*, więc nie trzeba się martwić zarządzaniem pamięcią.

Jednak nieco różni się od innych języków obiektowych języków:
- Nie ma klas
- Nie ma dziedziczenia
- Nie ma konstruktorów
- Nie ma adnotacji
- Nie ma generyków
- Nie ma wyjątków

Jak widać nie ma wielu aspektów programowania obiektowego, co dla niektórych może się wydawać minusem, jednak pod wzgędem nauki jest to na pewno uproszczenie.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign go = site.data.statistics.languagesVersions.Go %}

Wkrótce

{% include courses.html %}

{% include books.html %}




