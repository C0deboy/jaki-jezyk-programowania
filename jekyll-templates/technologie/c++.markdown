---
layout:     technology
title-full: Język programowania C++ - zastosowanie, przyszłość, polecane książki
title:      C++
image:      c++.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.Cpp %}

# Zastosowanie

C++ to język ogólnego zastosowania. Programy w C++ mogą być napisane tak, aby były wieloplatformowe bez żadnym modyfikacji, ale tylko, gdy trzymamy się odpowiednich zasad. Niektóre właściwości/biblioteki są dla specyficznych systemów.

Został stworzony głównie do programowania systemowego oraz dużych i z ograniczonymi zasobami systemów wbudowanych. W C++ napisane zostały systemy operacyjne (lub ich części) takie jak Apple OS X,IBM OS/400, Windows NT, XP, Vista, 7. Jednak zastosowanie C++ jest dużo szersze, głównie tam gdzie stawia się na wydajność oprogramowania, od aplikacji desktopowych(m.in. produkty Adobe np. Photoshop, Acrobat czy pakiety biurowe Office) przez serwery (m.in. e-commerce np. Amazon, Ebay; wyszukiwarki np. Chrome; baz danych SQL np. MongoDB) po silniki gier AAA lub ich części (np. CryEngine, Unity, Unreal Engine).

C++ używany jest w największych światowych korporacjach m.in: Adobe, Facebook, Amazon, Ericsson, HP, IBM, Intel.

{% include language/top10github.html %}

# Poziom skomplikowania

C++ to język dużo bardziej złożony niż inne języki programowania. Jego semantyka może się wydawać nieco mniej przyjazna dla początkujących. Trzeba zrozumieć dużo więcej aspektów niż w językach o wyższym poziomie abstrakcji od sprzętu. Należy do nich np. zarządzanie pamięcią. Zakłada statyczną kontrolę typów, ale pozwala także na ich automatyczną dedukcję. Jednak dzięki tym właściwościom C++ daję większą kontrolę nad programem, jest bardziej jednoznaczny i umożliwia dostęp do bardziej niskopoziomowych funkcji.

Często mówi się o wskaźnikach, że są trudne dla początkujących jednak nie powinieneś się ich bać. Zwłaszcza, że istnieją inteligentne wskaźniki (są zalecą praktyką), które same usuwają się wraz z końcem swojego zasięgu zapobiegając wyciekom pamięci, więc nie musisz już się o to martwić. Surowe wskaźniki są używane tylko w specyficznych sytuacjach.

Można zauważyć, że C++ jest często polecanym językiem na początek, na zasadzie, że jak poznasz wszystkie koncepty programowania w C++ to już żaden inny język nie sprawi Ci problemu. Jednak jest to język bardzo złożony i dla nowicjuszy może być to przytłaczające. Jeśli nie masz konkretnych założeń, warto zacząć z bardziej przyjaznymi dla początkujących językami jak np. Python. C++ to nieco trudniejsza i dłuższa droga na początek, ale jeśli nie jest to dla Ciebie problemem, C++ to dobry wybór szczególnie jeśli liczy się szybkość oraz niskie zużycie zasobów.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

Meetupy C++ są kategoryzowane razem z językiem C. Mimo to widać, że w porównaniu do innych języków, grup organizujących spotkania dla społeczności C/C++ jest bardzo mało.

# Przyszłość języka

Lata świetności C++ z 2003 roku już dawno minęły, jednak wraz z rozwojem technologii VR (Virtual Reality), w której C++ jest przodującym językiem, wraca on do swojej świetności. Dodatkowo mimo krytyki poziomu skomplikowania, jest on cały czas aktywnie ulepszany, przez co nie zostanie wypchnięty przez inne języki jeszcze przez długi czas. Ostatnia jego wersja wyszła w 2014 roku, a nowa jest zapowiedziana na rok 2017.

# Najlepsze książki do nauki {{ page.title }}
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{: class="promotions-link"}
[Zobacz aktualne promocje](https://helion.pl/page/9102Q/promocje)


<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=cppri6&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=jcppkw&nr=9102Q&size=181&utf8=1"></script>
</div>

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=cppppo&nr=9102Q&size=181&utf8=1"></script>
</div>

Oraz najnowszy następca popularnej Symfonii C++

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=ocpp11&nr=9102Q&size=181&utf8=1"></script>
</div>

Najlepsza książka o wzorcach projektowych z przykładami w C++:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=wzoelv&nr=9102Q&size=181&utf8=1"></script>
</div>

Inne warte uwagi:

<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=cpbsp2&nr=9102Q&size=181&utf8=1"></script>
</div>