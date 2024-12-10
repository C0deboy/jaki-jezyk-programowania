---
layout: technology
title-full: R - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: R
permalink: /technologie/r/
image: r.png
---

{% assign lang = "R" %}
{% assign stats = site.data.statistics.statistics[lang] %}

# Zastosowanie

**R** (R Project for Statistical Computing) to język programowania, środowisko obliczeniowe oraz graficzne. Został zaprojektowany z myślą o obliczeniach statystycznych, wizualizacji danych oraz tworzeniu wykresów, w tym 3D.

Język R jest powszechnie wykorzystywany w dziedzinach takich jak analiza danych i statystyka. W tej roli rywalizuje z [Pythonem](/technologie/python), choć R pozostaje głównie narzędziem do pracy w obszarze *data science*, podczas gdy Python jest bardziej uniwersalnym językiem ogólnego zastosowania.

R bywa także wykorzystywany w *machine learning*, jednak w tej dziedzinie [Python](/technologie/python) jest zdecydowanie częstszym wyborem.

W biotechnologii, bioinformatyce i biostatystyce R jest standardem, a narzędzie Bioconductor, stworzone przez Roberta Gentlemana, stało się kluczowe w tej dziedzinie.

Przykłady firm korzystających z R:
- Facebook
- Google
- Twitter
- Zalando

{% include language/top10github.html %}

# Poziom skomplikowania

R nie należy do najłatwiejszych języków programowania, ale oferuje silne wsparcie w zakresie wizualizacji danych, co czyni go bardzo przyjaznym w kontekście analizy danych. Posiada szeroką gamę wbudowanych funkcji do obliczeń statystycznych, co stanowi przewagę nad Pythonem, który w tej dziedzinie polega głównie na zewnętrznych bibliotekach.

Jeśli jednak masz już doświadczenie z innym językiem programowania, [Python](/technologie/python) może okazać się bardziej intuicyjny i przyjazny do nauki.

# Składnia

{% include language/code-example.html lang=lang %}

# Statystyki

R znajduje się dość daleko w rankingach popularności, co wynika z faktu, że jest językiem niszowym, skoncentrowanym na konkretnej dziedzinie. Niemniej, w ostatnich latach jego popularność wzrosła, szczególnie w kontekście *data science*.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Zwiększone zainteresowanie w dziedzinach takich jak *data science* czy *big data* daje językowi R dobrą perspektywę na przyszłość. Niemniej, Python pozostaje mocnym konkurentem i często jest preferowanym językiem pierwszego wyboru.

R jest wciąż rozwijany, a jego ostatnia wersja {{ versions.R.version }} została wydana {{ versions.R.releaseDate }}.

{% include courses.html %}

{% include books.html %}

