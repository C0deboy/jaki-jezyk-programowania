---
layout: technology
title-full: C++ - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title: C++
permalink: /technologie/c++/
image: c++.png
---

{% assign lang = "Cpp" %}
{% assign stats = site.data.statistics.statistics[lang] %}

# Zastosowanie

C++ to obiektowy język ogólnego zastosowania. Programy w C++ mogą być napisane tak, aby były wieloplatformowe bez żadnych modyfikacji, ale tylko, gdy trzymamy się odpowiednich zasad. Trzeba pamiętać, że niektóre funkcje/biblioteki są dostępne tylko dla specyficznych systemów.

Język C++ jest rozszerzeniem języka C. Główną, odróżniającą je cechą jest niewątpliwie **obiektowość**, której brak w języku C. Oczywiście C++ wprowadził na przestrzeni lat wiele różnych usprawnień, jak chociażby możliwość bezpośredniego tworzenia i obsługi wątków, interfejsu graficznego, wykorzystanie szablonów, w nowszych wersjach wyrażenia lambda, pętle for-range, typ **auto** i wiele innych. Ciekawym jest fakt, że w większości przypadków kod stworzony w C można dowolnie wykorzystać w języku C++, co rozszerza możliwości programisty o wykorzystanie niskopoziomowych bibliotek stworzonych w C. Uwaga – nie działa to w drugą stronę: kod C jest kompatybilny z C++, ale nie w drugą stronę.

C++ jest najczęściej stosowany w systemach wbudowanych oraz w tworzeniu gier. W języku C++ napisane zostały systemy operacyjne (lub ich części) takie jak Apple OS X,IBM OS/400, Windows NT, XP, Vista, 7. Warto jednak pamiętać, że zastosowanie C++ jest dużo szersze. Ogólnie rzecz biorąc C++ znajduje zastosowanie wszędzie tam, gdzie najważniejsza jest wydajność stworzonego kodu i niskie zużycie pamięci — od aplikacji desktopowych (m.in. produkty Adobe np. Photoshop, Acrobat czy pakiety biurowe Office) przez serwery (m.in. e-commerce np. Amazon, Ebay; wyszukiwarki np. Chrome; baz danych np. MongoDB) po silniki gier AAA lub ich części (np. CryEngine, Unity, Unreal Engine).

C++ używany jest również w największych światowych korporacjach m.in.: Adobe, Facebook, Amazon, Ericsson, HP, IBM, Intel. Warto też tu wspomnieć o wielu pochodnych frameworkach, które bazują na języku C++, często rozszerzając jego możliwości – idealnym przykładem jest tu framework [Qt](/technologie/qt).

{% include language/top10github.html %}

# Poziom skomplikowania

C++ to język dużo bardziej złożony niż inne języki programowania. Jego semantyka może się wydawać nieco mniej przyjazna dla początkujących. Trzeba też zrozumieć dużo więcej aspektów niż w językach o wyższym poziomie abstrakcji. Należy do nich m.in. zarządzanie pamięcią. Jest on jednak dużo bardziej przyjazny niż jego język-ojciec [C](/technologie/c).

C++ zakłada statyczną kontrolę typów, ale pozwala także na ich automatyczną dedukcję. Dzięki temu wszelkie błędy w typowaniu zostaną wykryte już w fazie kompilacji – podobnie jak ma to miejsce w języku [C](/technologie/c).

Dzięki tym właściwościom C++ daję większą kontrolę nad programem, jest bardziej jednoznaczny i umożliwia dostęp do bardziej niskopoziomowych funkcji, co jest szczególnie ważne w przypadku gdy chcemy w 100% wykorzystać potencjał systemu i jego funkcje.

Często mówi się o wskaźnikach, że są trudne dla początkujących, jednak nie powinieneś się ich bać. To nie jest _rocket science_. W C++ też istnieją inteligentne wskaźniki (są zalecaną praktyką), które same usuwają się wraz z końcem swojego zasięgu, zapobiegając wyciekom pamięci. Surowe wskaźniki są używane tylko w specyficznych sytuacjach.

Można zauważyć, że C++ jest często polecanym językiem na początek, z racji, że jak poznasz wszystkie koncepty programowania w C++, to wtedy żaden inny język nie sprawi Ci problemu. Jest to prawda, jednak jest to język dosyć złożony i dla nowicjuszy może być przytłaczający. Zaczynając z C++ można się sparzyć, dlatego, jeśli chcesz w krótkim czasie dowiedzieć się na czym polega samo programowanie, warto zacząć z językami bardziej przyjaznymi dla początkujących jak np. [Python](/technologie/python) — C++ to nieco trudniejsza i dłuższa droga na początek.

# Składnia

{% include language/code-example.html lang=lang%}

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

Meetupy C++ są kategoryzowane razem z językiem C. Mimo to widać, że w porównaniu do innych języków, grup organizujących
spotkania dla społeczności C/C++ jest bardzo mało.

# Przyszłość języka

{% assign versions = site.data.statistics.languagesVersions %}

Choć lata świetności C++ z 2003 roku przeminęły, można mimo to powiedzieć, że C++ z powrotem odzyskuje swoją popularność. Wraz z rozwojem technologii VR (Virtual Reality), w której C++ jest przodującym językiem, jest on coraz chętniej wykorzystywany. C++ jest co jakiś czas nadal ulepszany, mimo że powstał w 1985 roku. Choć C++ nie przoduje w rankingach popularności, to wszędzie tam, gdzie liczy się wydajność, jest często wybierany i nie zapowiada się, żeby się to zmieniło w najbliższym czasie. Warto tu również dodać, że na języku C++ bazuje wiele innych, wyższych języków programowania. Ostatnia jego wersja {{ versions.C.version }} wyszła {{ versions.C.releaseDate }}.

{% include courses.html %}

{% include books.html %}