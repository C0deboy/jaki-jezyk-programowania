---
layout:     technology
title-full: Język programowania C++ - zastosowanie, przyszłość, polecane książki
title:      C++
image:      c++.png
---

{% assign stats = site.data.statistics.statistics.Cpp %}

# Zastosowanie

C++ to język ogólnego zastosowania. Programy w C++ mogą być napisane tak, aby były wieloplatformowe bez żadnych modyfikacji, ale tylko, gdy trzymamy się odpowiednich zasad. Niektóre właściwości/biblioteki są dla specyficznych systemów.

C++ jest najczęściej stosowany w systemach wbudowanych oraz  w game devie. W C++ napisane zostały systemy operacyjne (lub ich części) takie jak Apple OS X,IBM OS/400, Windows NT, XP, Vista, 7. Jednak zastosowanie C++ jest dużo szersze, głównie tam gdzie stawia się na wydajność oprogramowania, od aplikacji desktopowych (m.in. produkty Adobe np. Photoshop, Acrobat czy pakiety biurowe Office) przez serwery (m.in. e-commerce np. Amazon, Ebay; wyszukiwarki np. Chrome; baz danych np. MongoDB) po silniki gier AAA lub ich części (np. CryEngine, Unity, Unreal Engine). 

Ogólnie rzecz biorąc, C++ znajduje zastosowanie tam gdzie liczy się wydajność oraz niskie zużycie zasobów.

C++ używany jest w największych światowych korporacjach m.in: Adobe, Facebook, Amazon, Ericsson, HP, IBM, Intel.

{% include language/top10github.html %}

# Poziom skomplikowania

C++ to język dużo bardziej złożony niż inne języki programowania. Jego semantyka może się wydawać nieco mniej przyjazna dla początkujących. Trzeba też zrozumieć dużo więcej aspektów niż w językach o wyższym poziomie abstrakcji od sprzętu. Należy do nich m.in. zarządzanie pamięcią. Zakłada statyczną kontrolę typów, ale pozwala także na ich automatyczną dedukcję. Dzięki tym właściwościom C++ daję większą kontrolę nad programem, jest bardziej jednoznaczny i umożliwia dostęp do bardziej niskopoziomowych funkcji, co jest szczególnie ważne w dziedzinach, w których znajduje zastosowanie.

Często mówi się o wskaźnikach, że są trudne dla początkujących jednak nie powinieneś się ich bać. Zwłaszcza, że istnieją inteligentne wskaźniki (są zalecaną praktyką), które same usuwają się wraz z końcem swojego zasięgu zapobiegając wyciekom pamięci. Surowe wskaźniki są używane tylko w specyficznych sytuacjach.

O C++ krąży wiele mitów i twierdzeń, które są już zaszłością, a były prawdziwe przed C++11.

Można zauważyć, że C++ jest często polecanym językiem na początek, na zasadzie, że jak poznasz wszystkie koncepty programowania w C++ to już żaden inny język nie sprawi Ci problemu. Jednak jest to język bardzo złożony i dla nowicjuszy może być przytłaczający. Zaczynając z C++ bardzo łatwo jest się sparzyć, dlatego jeśli nie masz konkretnego powodu, dla którego chcesz uczyć się języka C++, warto zacząć z językami bardziej przyjaznymi dla początkujących jak np. Python. C++ to nieco trudniejsza i dłuższa droga na początek.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

Meetupy C++ są kategoryzowane razem z językiem C. Mimo to widać, że w porównaniu do innych języków, grup organizujących spotkania dla społeczności C/C++ jest bardzo mało.

# Przyszłość języka

{% assign versions = site.data.languagesVersions %}

Lata świetności C++ z 2003 roku już dawno minęły i można powiedzieć, że C++ staję się coraz bardziej niszowym językiem. Jednak wraz z rozwojem technologii VR (Virtual Reality), w której C++ jest przodującym językiem, znów zyskuje na popularności. C++ jest co jakiś czas nadal ulepszany mimo, że powstał w 1985 roku. C++ nie należy do najpopularniejszych, ale tam gdzie liczy się wydajność jest niezastąpiony wśród języków wysokopoziomowych i nie zapowiada się, żeby się to zmieniło w najbliższym czasie. Ostatnia jego wersja C++17 wyszła {{ versions.Cpp.releaseDate }} po trzyletniej przerwie. C++20 jest kolejną planowaną wersją, więc prawdopodobnie zobaczymy ją w 2020 roku.

{% include courses.html %}

{% include books.html %}