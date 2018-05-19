---
layout:     technology
title-full: Język programowania Python - zastosowanie, przyszłość, polecane książki
title:      Python
image:		python.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.statistics.Python %}

# Zastosowanie

**Python** jest językiem o bardzo szerokim zastosowaniu, pozwalającym na napisanie dosłownie wszystkiego przy użyciu odpowiednich bibliotek lub frameworków, przez co bardzo wiele firm używa go w swoich aplikacjach. Jego interpretery są dostępne dla wielu systemów, co czyni go językiem wieloplatformowym. Często używany w dziedzinach jak data science czy machine learning. Python może być także używany w Raspberry Pi - platformie komputerowej wielkości karty kredytowej.

Warto wspomnieć też o [Django](/technologie/django) - backendowym frameworku pozwalającym na pisanie wydajnych i eleganckich aplikacji internetowych w krótkim czasie.

Często używany też, jako język skryptowy w aplikacjach napisanych w innych językach. Np. w takich programach jak Gimp, Inkscape czy Blender.

W Pythonie można pisać też aplikacje desktopowe. Popularne z nich to np. pierwotny klient Dropboxa czy starsze wersje BitTorrent. Również większość znanej gry Sid Meier's Civilization IV została napisana w Pythonie.

Istnieją biblioteki, które są kompilowane do innych języków, co diametralnie poprawia jego wydajność, ale nie to jest najważniejsze. Python skupia inne mocniejsze strony m.in. czytelność, łatwość użycia i produktywność (mniejszym wysiłkiem osiągniemy ten sam program, niż pisząc go w bardziej złożonych językach).

{% include language/top10github.html %}

# Poziom skomplikowania

Python został stworzony tak, aby był łatwy do zrozumienia i przyjazny dla początkujących. Kod Pythona można czytać jak zwykły tekst po angielsku. Jego składnia jest przejrzysta i zwięzła, jednak duże znaczenie ma formatowanie kodu i białe znaki. Jest to cecha wyróżniająca go spośród innych języków, ponieważ używa wcięć lub angielskich słów tam, gdzie inne korzystają ze znaków interpunkcyjnych i posiada zdecydowanie mniej konstrukcji składniowych. Python to język dynamicznie typowany, czyli nie ma potrzeby ustawiania typu dla zmiennych, a zarządzaniem pamięcią, jak w większości wysokopoziomowych języków programowania, zajmuję się za nas garbage collector. Są to spore ułatwienia dla początkujących, przez co mogą skupić się na nauce właściwego programowania, jednak nieprawidłowo wcięty kod może być mylący, gdyż czytający go programista i kompilator mogą go różnie zinterpretować. Python jest często polecany dla osób, które chcą rozpocząć przygodę z programowaniem ze względu na niski próg wejścia.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

Popularność Pythona rośnie z każdym rokiem do tego stopnia, że jest niemal najpopularniejszym językiem. Na pewno przyczyniło się do tego wzrost zainteresowania machine learning i data science w ostatnich latach.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

Python jest obecnie w czołówce najbardziej opłacalnych oraz najbardziej pożądanych języków. Wraz ze wzrostem big data, rośnie zapotrzebowanie na programistów Pythona, którzy są coraz częściej zatrudniani jako data scientist. Jako projekt open source jest cały czas aktywnie dopracowywany, by sprostać coraz to nowszym wymaganiom. Ostatnia jego wersja 3.6.4 została wydana 19 grudnia 2017 roku. Rozwój uczenia maszynowego (machine learning), które jest witalną częścią rozwoju sztucznej inteligencji, jak i zarówno rosnąca ilość big data dobrze wróżą przyszłości tego języka.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}

{% include books.html %}