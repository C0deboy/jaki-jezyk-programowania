---
layout:     technology
title-full: Ruby - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title:      Ruby
image:      ruby.png
---

# Zastosowanie

{% assign stats = site.data.statistics.statistics.Ruby %}

**Ruby** to interpretowany, w pełni obiektowy język programowania. Jako język o bardzo prostej składni jest często stosowany do pisania tak zwanych jednolinijkowców, skryptów, przetwarzania tekstu oraz prototypowania nowych aplikacji. 

Jego zaletą jest ogromna ilość frameworków webowych oraz aplikacji napisanych w tym języku. Warto wspomnieć tu o [Jekyllu](/technologie/jekyll) i [Ruby on Rails](/technologie/rubyonrails).

Dzięki nim tworzenie stron internetowych w tym języku jest proste i szybkie.

Jest wykorzystywany przez takie strony jak:

- Twitch.tv
- Starbucks
- Tumblr
- Shopify
- Heroku

{% include language/top10github.html %}

# Poziom skomplikowania

Ruby jest jednym z najprostszych języków. Posiada bardzo intuicyjną składnię, której nauka przychodzi bardzo szybko, nawet początkującym adeptom kodu, podobnie do Pythona.

Czytanie kodu Ruby jest praktycznie identyczne z czytaniem instrukcji po angielsku. Nie znajdziemy definicji typów, a składnia w porównaniu z językami takimi jak Java czy C++ jest maksymalnie uproszczona. Ruby to język wysokopoziomowy, więc nie musimy dbać o niskopoziomowe detale, takie jak zarządzanie pamięcią - robi to za nas garbage collector.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

Zobacz [wizualizację wszystkich statystyk z ostatnich lat](/statystyki-jezykow-programowania-2019) i porównaj różne języki.

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Przez powstanie Node.js popularność platformy Ruby on Rails delikatnie spadła, również o samym Ruby coraz mniej słychać, co widać w rankingach popularności. Mimo to Ruby ma się nadal całkiem dobrze. Używa go wciąż masa ludzi i jest cały czas rozwijany, twórcy wypuszczają często aktualizacje, rozwiązujące wiele wcześniejszych problemów. Jego ostatnia wersja {{ versions.Ruby.version }} została wydana {{ versions.Ruby.releaseDate }}.

{% include courses.html %}

{% include books.html %}
