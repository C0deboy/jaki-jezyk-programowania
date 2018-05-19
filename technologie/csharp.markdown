---
layout:     technology
title-full: Język programowania C# - zastosowanie, przyszłość, polecane książki
title:      C#
image:    csharp.png
date:       18.11.2017
---

{% assign stats = site.data.statistics.statistics.Csharp %}

# Zastosowanie

**C#** jest wysokopoziomowym, zorientowanym obiektowo językiem programowania ogólnego przeznaczenia, który jest odpowiedzią Microsoftu na Jave. **C#** jest ścisłe zintegrowany z platformą .NET, która jest zarówno frameworkiem jak i środowiskiem uruchomieniowym.

**C#** był stworzony i jest najczęściej stosowany do pisania aplikacji na systemy Windows. Ale odkąd .NET framework trafił na systemy Linux i Mac możliwe jest tworzenie natywnego oprogramowania w tym języku praktycznie na każdą platformę.

Ponadto, **C#** używany jest do tworzenie aplikacji webowych po stronie serwera za pomocą frameworka ASP.NET. Dzięki narzędziom takim jak Xamarin, możliwe jest tworzenie wieloplatformowych aplikacji mobilnych. Co więcej, **C#** wykorzystywany jest w popularnym silniku [Unity](/technologie/unity/), za pomocą, którego można tworzyć gry na PC, konsole, urządzenia mobilne czy strony internetowe, a nawet platformy VR (Virtual Reality).

Jest to zatem wieloplatformowy język programowania wykorzystywany w wielu dziedzinach.

**C#** napędza m.in. stronę StackOverflow czy gry takie jak Terraria, Magicka, Bastion.

{% include language/top10github.html %}

# Poziom skomplikowania

**C#** jest relatywnie łatwy do nauki. Dla osób, które miały kontakt z takimi językami jak Java, składnia będzie bardzo znajoma. Semantyka jest nieco przyjaźniejsza od tej w C++. Podobnie jak w Javie nie musimy też zarządzać pamięcią i proces tworzenia oprogramowania jest dużo szybszy. Jest także językiem silnie typowanym, co oznacza, że każda zmienna musi mieć zadeklarowany przechowywany typ danych, a program zwróci błąd i zapobiegnie kompilacji, jeżeli będzie się coś nie zgadzać, w przeciwieństwie do języka słabo typowanego, który nie wygeneruje błędu i zwróci nieprzewidywany wynik. Wadą tego rozwiązania jest tylko to, że musimy zadeklarować więcej informacji dla programu, ale dzięki temu jest bardziej jednoznaczny i łatwiej wychwycić błędy.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

Duża popularność silnika Unity (który może się pochwalić tym, że 34% najpopularniejszych gier mobilnych powstało w tym silniku) wpływa także pozytywnie na rozgłos **C#**.

# Przyszłość języka

{% assign versions = site.data.languagesVersions %}

**C#** jest cały czas rozwijany przez Microsoft, który nie zamierza kończyć dla niego wsparcia. Jego ostatnia wersja {{ versions.Csharp.version }} została wydana {{ versions.Csharp.releaseDate }}. Silnik Unity nadal jest rozwijany i ulepszany, więc jest to dobry wybór dla osób zainteresowanych tworzeniem gier. Dodatkowym plusem jest to, że umożliwia pisanie oprogramowania na platformy VR (Virtual Reality), a ta technologia staję się coraz bardziej popularna. Na stronie Unity można zobaczyć szacowane dane, które mówią, że 90% gier VR na Samsung Gear, a 53% na Oculus Rift zostało stworzonych w Unity.

<h1 id="najlepsze-książki-do-nauki-c#"> Najlepsze książki do nauki {{ page.title }} </h1>
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}

{% include books.html %}