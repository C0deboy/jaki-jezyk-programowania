---
layout:     technology
title-full: Język programowania Java - zastosowanie, przyszłość, polecane książki
title:      Java
image:		java.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.Java %}

# Zastosowanie

**Java** to obiektowy, wysokopoziomowy język programowania ogólnego zastosowania, który jest łatwo przenośny, gdyż jest interpretowany przez wieloplatformową maszynę wirtualną Javy (Java Virtual Machine). Dlatego powstał slogan „Napisz raz, uruchom wszędzie!". Oczywiście jest to uzależnione od obecności JVM i ograniczone. **Java** jest przenośna w dziedzinach, które nie są związane z tworzeniem interfejsu użytkownika, interakcją z systemem operacyjnym albo sprzętem.

**Java** jest najczęściej używana do tworzenia backendowych aplikacji stron internetowych, ale też do tworzenia oprogramowania czy gier. Nadaje się do pisania zarówno małych jak i większych projektów. Jest preferowanym językiem w korporacjach i dużych firmach. Często wykorzystywana w systemach bankowych. Ponadto, system operacyjny Android działa w środowisku Javy, co umożliwia także tworzenie aplikacji lub gier na Androida.

Javie zarzucano, że jest dużo wolniejsza niż języki natywnie kompilowane, jak np. C++. Jednak odnosi się to do starszych wersji. Obecnie wydajność Javy została poprawiona tak, że może konkurować z językami, które wcześniej były uważane za dużo szybsze. Głównie dzięki kompilatorowi JIT (Just in time), który potrafi optymalizować pod kątem szybkości te części kodu, które są najczęściej używane oraz poprawionym mechanizmom, takim jak odśmiecanie pamięci (ang. garbage collecting).

Popularne aplikacje napisane w Javie to
- Gmail
- Minecraft
- OpenOffice
- Eclipse
- NetBeans

Do najbardziej znanych stron napędzanych przez Javę należą
- LinkedIn.com
- Netflix.com
- Amazon.com

{% include language/top10github.html %}

# Poziom skomplikowania

**Java** została zaprojektowana tak, aby była przyjazna dla początkujących, tym samym łatwiejsza niż C++. Składnia Javy jest podobna do składni języka C++ czy C, ale ma mniej niskopoziomowych funkcji. **Java** posiada także wiele wbudowanych bibliotek z gotowymi rozwiązaniami, podczas gdy w niektórych językach musimy je znaleźć, wybrać i dołączyć na własną rękę. Jest to pewne ułatwienie na początku nauki, gdy **Java** robi to za nas. Jednak później nie ma to większego znaczenia. W Javie jest ich po prostu więcej domyślnie, jednak nie są idealne, gdyż ze względu na kompatybilność wsteczną niektóre rozwiązania są przestarzałe.

**Java** jest językiem statycznie typowanym, co oznacza, że składnia i zgodność typów zostanie sprawdzona w celu znalezienia błędów zanim zostanie wykonany program, więc łatwiej je namierzyć. Javę cechuję także silne typowanie, to znaczy, że wyrażenia mają ustalony typ danych, który nie może zostać zmieniony w czasie działania programu. Zapobiega to powstawaniu dziwnych i niespodziewanych błędów, więc kod jest łatwiejszy w utrzymaniu.

**Java** zajmuję się za Ciebie sprzętowymi detalami takimi jak np. zarządzanie pamięcią (Garbage Collection), więc nie musisz się nad tym skupiać.

Często można spotkać opinię, że **Java** jest rozwlekła, to znaczy, że trzeba napisać dużo więcej kodu niż w przypadku innych języków (szczególnie skryptowych), aby dostać podobną aplikacje. Często pokazywane na przykładzie wyświetlenia napisu "Hello World". Jednak takie porównanie nie ma większego sensu i nie można tego traktować jako wadę, ponieważ przez swoją "rozwlekłość"" jest bardziej jednoznaczna i łatwiejsza w debugowaniu.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

Programiści Javy mają duże zapotrzebowanie na rynku ze względu na jej popularność. Jest jednym z najbardziej opłacalnych oraz najbardziej pożądanych języków. **Java** cały czas jest rozwijana i ulepszana, aby utrzymać się w topce na rynku. Ostatnia wersja **Java** SE 8 została wydana w 2014 roku, a nowa wersja planowana jest na rok 2017. Mimo to, że często krytykowano ten język i wiele języków próbowało zastąpić Jave, wyszła z tego zwycięsko. W kolejnych latach **Java** raczej nigdzie się nie wybiera, będzie kontynuować swoją dominacje.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{: class="promotions-link"}
[Zobacz aktualne promocje](https://helion.pl/page/9102Q/promocje)


<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javp10&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javpp6&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javkp9&nr=9102Q&size=181&utf8=1"></script>
</div>


Jeśli wolisz bardziej przyjazną formę, m.in. więcej obrazków, to możesz wybrać:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javrg2&nr=9102Q&size=181&utf8=1"></script>
</div>
(Jednak jest to już dosyć stara pozycja, pokrywająca Javę 5)

Po bardziej zaawansowane rzeczy sięgnij tutaj:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javtzx&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jave2v&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=javapf&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jav8pd&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=wzorvv&nr=9102Q&size=181&utf8=1"></script>
</div>

Dotyczące testowania i refaktoryzacji:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=tddpro&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=refukv&nr=9102Q&size=181&utf8=1"></script>
</div>


Klasyki, które warto przeczytać:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=thij4v&nr=9102Q&size=181&utf8=1"></script>
</div>