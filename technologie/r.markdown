---
layout:     technology
title-full: Język programowania R - zastosowanie, przyszłość, polecane książki
title:      R
image:		r.png
---

{% assign stats = site.data.statistics.statistics.R %}

# Zastosowanie

**R** (R Project for Statistical Computing) jest jednocześnie językiem programowania, środowiskiem obliczeniowym oraz graficznym. Celem twórców było stworzenie platformy statystycznej służącej do prezentowania danych w nowy sposób, oraz tworzenia ciekawych wizualizacji, np. w postaci wykresów 3D. Dzięki swojemu statystycznemu przeznaczeniu został zaadaptowany przez wiele firm, między innymi Facebook, który wykorzystuje R do analizy statystycznej aktualizacji statusów. Pozwala także na łatwe obliczanie równań matematycznych.

{% include language/top10github.html %}

# Poziom skomplikowania

Język R jest językiem, który bez wcześniejszego obeznania z programowaniem może sprawiać wiele problemów. Jednak mimo wszystko wizualizowanie danych jest o wiele łatwiejsze niż chociażby w Pythonie. Głównie ze względu na ogrom już wbudowanych funkcji obsługujących operacje statystyczne, dlatego długoterminowo język ten może się okazać łatwiejszy.

# Popularność

W rankingach popularności R jest całkiem daleko, a wiąże się z tym, że społeczność tego języka jest znacznie mniejsza w stosunku do innych języków programowania, głównie ze względu na fakt, że z R korzystają głównie osoby pracujące na danych statystycznych. Mimo to, w ostatnich latach sporo podskoczył w rankingach popularności - związane jest to pewnie z wzrostem zainteresowanie w obrębie data science.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Popularność w dziedzinach analizowania danych, statystyki, data science czy big data stale wzrasta, co dobrze wróży przyszłości języka R. Na jego korzyść wskazują także statystyki, pokazujące że zainteresowanie tym językiem w ubiegłych latach wzrosło o 51.7%. Jego ostatnia wersja {{ versions.R.version }} została wydana {{ versions.R.releaseDate }}.

{% include courses.html %}

{% include books.html %}