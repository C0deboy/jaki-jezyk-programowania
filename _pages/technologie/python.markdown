---
layout: technology
title-full: Python - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: Python
permalink: /technologie/python/
image: python.png
---

{% assign stats = site.data.statistics.statistics.Python %}

# Zastosowanie

**Python** jest językiem o bardzo szerokim zastosowaniu, pozwalającym na napisanie dosłownie wszystkiego przy użyciu
odpowiednich bibliotek lub frameworków, przez co bardzo wiele firm używa go w swoich aplikacjach.

Jego interpretery są dostępne dla wielu systemów, co czyni go językiem wieloplatformowym.

Python obecnie króluje w dziedzinach jak *data science* czy *machine learning*. Python może być także używany w
Raspberry Pi - platformie komputerowej wielkości karty kredytowej.

Warto wspomnieć też o [Django](/technologie/django) - backendowym frameworku pozwalającym na pisanie wydajnych i
eleganckich aplikacji internetowych w krótkim czasie.

Jest też często używany jako język skryptowy w aplikacjach napisanych w innych językach. Np. w takich programach jak
Gimp, Inkscape czy Blender.

W Pythonie można pisać też aplikacje desktopowe, ale raczej odchodzi się od tego zastosowania. Popularne z nich to np.
pierwotny klient Dropboxa czy starsze wersje BitTorrent.

Niektórzy narzekają na wydajność, jako, że jest to język interpretowany, jednak dla Pythona nigdy priorytetem nie była
wydajność. Python skupia inne mocniejsze strony m.in. czytelność, łatwość użycia i produktywność (mniejszym wysiłkiem
osiągniemy ten sam program, niż pisząc go w bardziej złożonych językach).

{% include language/top10github.html %}

# Poziom skomplikowania

Python został stworzony tak, aby był łatwy do zrozumienia i przyjazny dla początkujących. Kod Pythona można czytać jak
zwykły tekst po angielsku. Jego składnia jest przejrzysta i zwięzła, jednak duże znaczenie ma formatowanie kodu i białe
znaki. Jest to cecha wyróżniająca go spośród innych języków, ponieważ używa wcięć lub angielskich słów tam, gdzie inne
korzystają ze znaków interpunkcyjnych i posiada zdecydowanie mniej konstrukcji składniowych.

Python to język dynamicznie typowany, czyli nie ma potrzeby ustawiania typu dla zmiennych, a zarządzaniem pamięcią, jak
w większości wysokopoziomowych języków programowania, zajmuję się za nas garbage collector. Są to spore ułatwienia dla
początkujących, przez co mogą skupić się na nauce właściwego programowania, jednak nieprawidłowo wcięty kod może być
mylący, gdyż czytający go programista i kompilator mogą go różnie zinterpretować.

Python jest często polecany dla osób, które chcą rozpocząć przygodę z programowaniem ze względu na niski próg wejścia.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

Popularność Pythona rośnie z każdym rokiem do tego stopnia, że jest niemal najpopularniejszym językiem. Na pewno
przyczyniło się do tego wzrost zainteresowania tematami jak *machine learning* i *data science* w ostatnich latach.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Python jest obecnie w czołówce najbardziej opłacalnych oraz najbardziej pożądanych języków. Jest uniwersalnym rozwiązaniem,
a wraz ze wzrostem zainteresowania tematami takimi jak big data, data science i machine learning, rośnie zapotrzebowanie na programistów
Pythona, którzy są coraz częściej zatrudniani jako *data scientist*. Jako projekt open source jest cały czas aktywnie
rozwijany, by sprostać coraz to nowszym wymaganiom. Jego ostatnia wersja {{ versions.Python.version }} została
wydana {{ versions.Python.releaseDate }}. Prawdopodobnie pozostanie na topie przez dłuższy czas.

{% include courses.html %}

{% include books.html %}
