---
layout:     technology
title-full: Język programowania Java - zastosowanie, przyszłość, polecane książki
title:      Java
image:		java.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.statistics.Java %}

# Zastosowanie

**Java** to wysokopoziomowy język programowania ogólnego zastosowania. Jest w pełni obiektowa, z wyjątkiem kilku typów prostych. Java jest łatwo przenośna, gdyż jest interpretowana przez wieloplatformową maszynę wirtualną Javy (Java Virtual Machine). Dlatego Java reklamuje się sloganem „Napisz raz, uruchom wszędzie!". Oczywiście jest to uzależnione od obecności JVM i ograniczone. **Java** jest przenośna w dziedzinach, które nie są związane z tworzeniem interfejsu użytkownika, interakcją z systemem operacyjnym albo sprzętem.

**Java** jest najczęściej używana w backendowych systemach aplikacji internetowych. Czyli jest odpowiedzialna za wszystko, co działa "pod spodem". Można też jej użyć do tworzenia oprogramowania desktopowego czy gier (Zobacz [LibGDX](https://jaki-jezyk-programowania.pl/technologie/libgdx/)).
Ponadto, system operacyjny Android działa w środowisku Javy, co umożliwia także tworzenie aplikacji lub gier na Androida.

Nadaje się do pisania zarówno małych jak i większych projektów. Jest preferowanym językiem w korporacjach i dużych firmach. Często wykorzystywana w systemach bankowych.

Co więcej, Java może być nawet używana w systemach wbudowanych, dzięki [Oracle Java Embedded](http://www.oracle.com/technetwork/java/embedded/overview/index.html). Typowe przykłady to karty SIM, telefony VOIP, odtwarzacze dysków Blu-ray, zestawy telewizyjne, mierniki poboru energii elektrycznej, ciepła czy wody, urządzenia do monitorowania stanu zdrowia, przemysłowe systemy sterujące i niezliczona ilość innych urządzeń.

Javie zarzucano, że jest dużo wolniejsza niż języki natywnie kompilowane, jak np. C++. Jednak odnosi się to do starszych wersji. Obecnie wydajność Javy została poprawiona tak, że może konkurować z językami, które wcześniej były uważane za dużo szybsze. Głównie dzięki kompilatorowi JIT (Just in time), który potrafi optymalizować pod kątem szybkości te części kodu, które są najczęściej używane oraz poprawionym mechanizmom, takim jak odśmiecanie pamięci (ang. garbage collecting).

W Javie został napisany m.in sławny Minecraft, a z popularnych aplikacji można wymienić:
- Gmail
- OpenOffice
- Eclipse
- NetBeans

Do najbardziej znanych stron, które mają "pod spodem" Jave, należą
- LinkedIn.com
- Netflix.com
- Amazon.com

{% include language/top10github.html %}

# Poziom skomplikowania

**Java** została zaprojektowana tak, aby była przyjazna dla początkujących, tym samym łatwiejsza niż C++. Składnia Javy jest podobna do składni języka C++, ale ma mniej niskopoziomowych funkcji. **Java** posiada także wiele wbudowanych bibliotek z gotowymi rozwiązaniami, podczas gdy w niektórych językach musimy je znaleźć, wybrać i dołączyć na własną rękę. Jest to pewne ułatwienie na początku nauki, bo **Java** robi to za nas. Jednak później nie ma to większego znaczenia. W Javie jest ich po prostu więcej domyślnie. Jednak nie wszystkie są idealne, gdyż ze względu na kompatybilność wsteczną niektóre rozwiązania są przestarzałe.

**Java** jest językiem statycznie typowanym, co oznacza, że składnia i zgodność typów zostanie sprawdzona w celu znalezienia błędów zanim zostanie wykonany program, dzięki temu łatwiej je namierzyć. Javę cechuję także silne typowanie, to znaczy, że wyrażenia mają ustalony typ danych, który nie może zostać zmieniony w czasie działania programu. Zapobiega to powstawaniu dziwnych i niespodziewanych błędów, więc kod jest łatwiejszy w utrzymaniu.

**Java**, jak większość wysokopoziomowych języków programowania, zajmuję się za Ciebie sprzętowymi detalami takimi jak np. zarządzanie pamięcią (Garbage Collection), więc nie musisz się na tym skupiać.

Często można spotkać opinię, że **Java** jest rozwlekła, to znaczy, że trzeba napisać dużo więcej kodu niż w przypadku innych języków (szczególnie skryptowych), aby dostać podobną aplikacje. Często pokazywane na przykładzie wyświetlenia napisu "Hello World" (W Javie, żeby dało się uruchomić taką instrukcję musi być do tego klasa, metoda main oraz System.out.print("Hello World"), podczas gdy np. w Pythonie wystarczy print("Hello World")). Jednak takie porównanie nie ma większego sensu i nie można tego traktować jako wadę, ponieważ przez swoją "rozwlekłość"" jest bardziej jednoznaczna i łatwiejsza w debugowaniu.

Poza tym, od Javy 9 do takiego szybkiego prototypowania i robienia małych kawałków kodów (np. wykonujących jakieś obliczenia do zadania czy po prostu testowanie nowych funkcji) powstało narzędzie Jshell.

Języki skryptowe i szybkie rozwiązania są dobre do prototypowania. Gdy tworzony jest duży projekt i ważne jest jego późniejsze utrzymywanie, "rozwlekłość" języka jest na plus.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign versions = site.data.languagesVersions %}

Programiści Javy mają duże zapotrzebowanie na rynku ze względu na jej popularność. Jest jednym z najbardziej opłacalnych oraz najbardziej pożądanych języków. **Java** cały czas jest rozwijana i ulepszana, aby utrzymać się na rynku. Jej ostatnia wersja {{ versions.Java.version }} została wydana {{ versions.Java.releaseDate }}. Pokazuje to, że Java nadal prężnie się rozwija, mimo, że powstała w 1995 roku. Często krytykowano ten język i wiele języków próbowało zastąpić Jave, jednak wyszła z tego zwycięsko. W kolejnych latach **Java** raczej nigdzie się nie wybiera i będzie kontynuować swoją dominacje.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}

{% include books.html %}