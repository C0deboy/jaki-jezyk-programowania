---
layout: technology
title-full: C - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: C
permalink: /technologie/c/
image: c.png
---

{% assign lang = "C" %}
{% assign stats = site.data.statistics.statistics[lang] %}

# Zastosowanie

**C** jest jednym z najstarszych i najszerzej używanych języków programowania. Jest on językiem strukturalnym i nie wspomaga programowania obiektowego — choć samo programowanie obiektowe jest w nim możliwe. Odbiega to jednak daleko od tego, jak to wygląda w językach typowo obiektowych. Co ciekawe, wiele innych języków, w tym i obiektowych, jak: C++, Java, JavaScript, C#, PHP, Python, Swift, Go, Rust, zawdzięcza językowi C wiele różnych cech i funkcjonalności.

Język C pozwala na swobodne zarządzanie alokowaną pamięcią, a także precyzyjne definiowanie działań i operacji. W odróżnieniu od wielu współczesnych języków jest on kompilowany bezpośrednio na kod maszynowy, podobnie jak asembler, który możemy również wykorzystać bezpośrednio w języku C. Ze względu na powyższe cechy C, wśród języków wysokiego poziomu, jest uznawany obecnie za &quot;najbliższy&quot; maszynie, to znaczy, że z jego poziomu można wykonać wiele operacji elementarnych na pamięci/procesorze. Nie jest on co prawda definicyjnym językiem niskopoziomowym, jednak na pewno jest on najniższym z języków bardziej przyjaznych człowiekowi.

Cecha ta pozwoliła na wykorzystanie, z powodzeniem, języka C w tworzeniu oprogramowania dla systemów oraz mikrokontrolerów. Język C jest również używany w kodzie bibliotek, jako język współdzielony, którego funkcje mogą wywoływać inne języki. Dzięki temu biblioteki napisane w C mogą być użyte w prawie dowolnym innym języku.

Język C może działać praktycznie na każdej architekturze sprzętowej pod warunkiem opracowania odpowiedniego kompilatora. C został użyty do zrobienia m.in.: jąder (lub ich części) systemów operacyjnych takich jak Windows, Linux, Mac, iOS, Android Windows Phone, systemów bazodanowych, biblioteki programistycznej do tworzenia grafik OpenGL, czy popularnego programu graficznego Gimp.

C jest lekki, wydajny, i przenośny (podobnie jak pochodny od niego język C++), co sprawia, że jest praktycznie w każdym systemie wbudowanym, od lodówek, mikrofalówek, zegarków do radia włącznie. Można go również znaleźć w elementach samochodu np. w oprogramowaniu wyświetlacza na desce rozdzielczej, czujników, automatycznej skrzyni biegów, systemu sterowania klimatyzacją, czy kontroli trakcji.

{% include language/top10github.html %}

# Poziom skomplikowania

C nie należy do najłatwiejszych do nauczenia. Trzeba dbać o zarządzanie pamięcią (brak garbage collectora), które może przysporzyć masę błędów oraz trzeba zrozumieć, czym są wskaźniki — bez nich nie zdziałasz wiele. Większy nacisk trzeba kłaść też na debugowanie kodu, ponieważ niektóre błędy mogą powodować niewłaściwe nadpisanie niektórych bloków pamięci, przez co przyczyna problemu może być trudna do namierzenia.

W innych językach namierzenie takiego błędu znacznie ułatwia obsługa wyjątków, której C nie ma. To w twoim interesie jest zapobieganie powstawania błędów oraz sprawdzanie wartości, które zwracają funkcje.

C jest statycznie typowany, co oznacza, że dla każdej zmiennej musimy nadać typ przechowywanych danych. Dzięki temu kod jest łatwiejszy w zrozumieniu i utrzymaniu, a błędy dotyczące typów zostaną wykryte już w czasie kompilacji.

Może się wydawać, że C zmusza nas do robienia rzeczy, które inne języki robią za nas — to prawda, ale to dlatego, że C stawia na wydajność. To ma też swoje plusy – taki wymóg pomoże nam lepiej zrozumieć jak program zarządza pamięcią i dlaczego jest to tak ważne.

Chcąc pisać w C oprogramowanie systemowe, przydatna może się okazać dobra znajomość architektury komputera oraz podstaw systemów operacyjnych. Niewątpliwie przydatna jest również znajomość bibliotek systemowych, a także umiejętność czytania ich dokumentacji.

# Składnia

{% include language/code-example.html lang=lang%}

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

C jest jednym z najpopularniejszych języków programowania, głównie, ze względu na swój staż i dlatego, że znajdziemy go w większości urządzeń dookoła nas.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

Meetupy C są kategoryzowane razem z językiem C++. Mimo to widać, że w porównaniu do innych języków, grup organizujących spotkania dla społeczności C/C++ jest dużo mniej, szczególnie w Polsce.

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Język C nie wydaje się mieć daty przydatności do użycia. Język powstał ponad 40 lat temu, a w rankingach popularności nadal jest w czołówce. Jego ostatnia wersja {{ versions.C.version }} wyszła {{ versions.C.releaseDate }}. Fakt, że wiele nowszych języków jest lepszych od C w niektórych dziedzinach, nie oznacza, że szybko go wyprą i C pójdzie w zapomnienie. C nadal jest najpopularniejszym językiem niskopoziomowym. W dzisiejszych czasach stawia się na języki wspierające programowanie obiektowe i te, w których proces programowania jest szybszy, więc C nie jest dobrym wyborem dla ogólnego zastosowania. Jednak jeśli masz konkretny powód, warto uczyć się języka C, gdyż nadal jest on wykorzystywany w specyficznych obszarach, a wiedza, którą zdobędziesz ucząc się C, na pewno się nie zmarnuje, zwłaszcza jeśli planujesz naukę [C++](/technologie/c++).

{% include courses.html %}

{% include books.html %}
