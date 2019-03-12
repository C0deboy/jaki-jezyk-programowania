---
layout:     technology
title-full: C - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title:      C
image:      c.png
---

{% assign stats = site.data.statistics.statistics.C %}

# Zastosowanie

**C** jest jednym z najstarszych i najszerzej używanych języków programowania. C jest językiem strukturalnym, nie wspomaga programowania obiektowego - choć samo programowanie obiektowe jest w nim możliwe. Odbiega to jednak daleko od tego, jak to wygląda w językach typowo obiektowych. Wiele innych języków takich jak: C++, Java, JavaScript, C#, PHP, Python, Swift, Go, Rust, pożyczyło od niego masę cech. 

C jest najczęściej używany do zadań niskopoziomowych, takich jak tworzenie oprogramowania dla systemów czy mikrokontrolerów. Wynika to za faktu, że wśród języków wysokiego poziomu jest "najbliżej" maszyny. Można by powiedzieć, że język C jest gdzieś pośrodku, gdyż jego poziom abstrakcji od sprzętu jest znacznie mniejszy niż w takich językach jak np. Java czy Python. Z drugiej strony bliżej sprzętu są Asamblery, a najbliżej są języki maszynowe.

C jest również używany w kodzie bibliotek, jako język wspólny, którego funkcje mogą wywoływać inne języki. Dzięki temu biblioteki napisane w C mogą być użyte w prawie dowolnym innym języku.

Może działać praktycznie na każdej architekturze sprzętowej pod warunkiem opracowania odpowiedniego kompilatora. C został użyty do zrobienia m.in.: jąder (lub ich części) systemów operacyjnych takich jak Windows, Linux, Mac, iOS, Android Windows Phone, systemów bazodanowych, biblioteki programistycznej do tworzenia grafik - OpenGL czy popularnego programu graficznego Gimp. 

C jest lekki i wydajny, co sprawia, że jest praktycznie w każdym systemie wbudowanym, od lodówek, mikrofalówek, zegarków do radia włącznie. Również można go znaleźć w elementach samochodu np. wyświetlacz na desce rozdzielczej, czujniki, automatyczna skrzynia biegów, sterowanie klimatyzacją czy kontrola trakcji.

{% include language/top10github.html %}

# Poziom skomplikowania

C nie należy do najłatwiejszych do nauczenia. Trzeba dbać o zarządzanie pamięcią (brak garbage collectora), które może przysporzyć masę błędów oraz trzeba zrozumieć, czym są wskaźniki, bez nich nie zdziałasz wiele. Większy nacisk trzeba kłaść też na debugowanie kodu, ponieważ niektóre błędy mogą powodować niewłaściwe nadpisanie niektórych bloków pamięci, przez co przyczyna problemu może być trudna do namierzenia. 

W innych językach namierzenie takiego błędu znacznie ułatwia obsługa wyjątków, której C nie ma. To w twoim interesie jest zapobieganie powstawania błędów oraz sprawdzanie wartości, które zwracają funkcje. 

C jest statycznie typowany, co oznacza, że dla każdej zmiennej musimy nadać typ przechowywanych danych. Dzięki temu kod jest łatwiejszy w zrozumieniu i utrzymaniu, a błedy dotyczące typów zostaną wykryte w czasie kompilacji.

Może się wydawać, że C zmusza nas do robienia rzeczy, które inne języki robią za nas - to prawda, ale to dlatego, że C stawia na wydajność.

Chcąc pisać w C oprogramowanie systemowe, przydatna może się okazać dobra znajomość architektury komputera oraz podstaw systemów operacyjnych.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

C jest jednym z najpopularniejszych języków programowania, głownie, ze względu na swój staż i dlatego, że znajdziemy go w większości urządzeń dookoła nas.

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

Meetupy C są kategoryzowane razem z językiem C++. Mimo to widać, że w porównaniu do innych języków, grup organizujących spotkania dla społeczności C/C++ jest dużo mniej, szczególnie w Polsce.

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Język C nie wydaje się mieć daty przydatności do użycia. Język powstał ponad 40 lat temu, a w rankingach popularności nadal jest w czołówce. Jego ostatnia wersja {{ versions.C.version }} wyszła {{ versions.C.releaseDate }}. Fakt, że wiele nowszych języków jest lepszych od C w niektórych dziedzinach, nie oznacza, że szybko go wyprą i C pójdzie w zapomnienie. C nadal jest najpopularniejszym językiem niskopoziomowym. W dzisiejszych czasach stawia się na języki wspierające programowanie obiektowe i te, w których proces programowania jest szybszy, więc C nie jest dobrym wyborem dla ogólnego zastosowania. Jednak jeśli masz konkretny powód, warto uczyć się języka C, gdyż nadal jest on wykorzystywany w specyficznych obszarach, a wiedza, którą zdobędziesz ucząc się C, na pewno się nie zmarnuje, zwłaszcza jeśli planujesz naukę [C++](/technologie/c++).

{% include courses.html %}

{% include books.html %}

