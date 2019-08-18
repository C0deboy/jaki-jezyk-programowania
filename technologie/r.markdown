---
layout:     technology
title-full: R - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title:      R
image:      r.png
---

{% assign stats = site.data.statistics.statistics.R %}

# Zastosowanie

**R** (R Project for Statistical Computing) jest jednocześnie językiem programowania, środowiskiem obliczeniowym oraz graficznym. Celem twórców było stworzenie platformy do obliczeń statystycznych, służącej do prezentowania danych w nowy sposób, oraz tworzenia ciekawych wizualizacji np. w postaci wykresów 3D.

R jest zatem wykorzystywany w dziedzinach jak analiza danych i statystyka. W tych dziedzinach mocno rywalizuje z Pythonem, jednak nie zapowiada się, by go doścignął. Python to też język ogólnego zastosowania, dlatego jest częstszym wyborem programistów. R w głównej mierze ogranicza się do wąskiej dziedziny, jaką jest *data science*.

R może też być wykorzystywany do *machine learning*, jednak tu [Python](/technologie/python) jest dużo częstszym wyborem.

R jest również podstawowym językiem programowania w bioinformatyce i biostatystyce, spopularyzowanym głównie dzięki stworzonemu przez Roberta Gentlemana repozytorium Bioconductor.

Dzięki swojemu przystosowaniu do obliczeń statystycznych został zaadaptowany przez wiele firm m.in.:
- Facebook
- Google
- Twitter
- Zalando

{% include language/top10github.html %}

# Poziom skomplikowania

R nie jest najłatwiejszym językiem do nauki, ale mimo wszystko wizualizowanie danych jest o wiele łatwiejsze niż chociażby w Pythonie. Głównie ze względu na ogrom już wbudowanych funkcji obsługujących operacje statystyczne. Python w dłużej mierze polega na zewnętrznych bibliotekach.

Z drugiej strony, jeśli masz już trochę doświadczenia z innym językiem programowania, to [Python](/technologie/python) może być dla Ciebie bardziej przyjazny.

# Popularność

W rankingach popularności R jest całkiem daleko, a wiąże się z tym, że społeczność tego języka jest znacznie mniejsza w stosunku do innych języków programowania, głównie ze względu na fakt, że R jest niszowym językiem. Mimo to, w ostatnich latach sporo podskoczył w rankingach popularności, a związane jest to ze wzrostem zainteresowanie w obrębie *data science*.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Rosnące zainteresowanie w dziedzinach jak analizowanie danych, statystyka, *data science* czy *big data* dobrze wróży R, jednak [Python](/technologie/python) jest dla niego mocnym rywalem i często jest językiem pierwszego wyboru. Język R jest stale rozwijany, jego ostatnia wersja {{ versions.R.version }} została wydana {{ versions.R.releaseDate }}.

{% include courses.html %}

{% include books.html %}
