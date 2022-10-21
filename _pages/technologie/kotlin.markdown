---
layout: technology
title-full: Kotlin - zastosowanie, przyszłość, najlepsze, polecane kursy
title: Kotlin
permalink: /technologie/kotlin/
image: kotlin.png
no-books: false
---

{% assign stats = site.data.statistics.statistics.Kotlin %}

# Zastosowanie

Kotlin to wieloplatformowy, statycznie typowany język programowania działający na maszynie wirtualnej Javy, który jest głównie rozwijany przez programistów JetBrains - m.in. twórców popularnych IDE jak InteliJ. 

Kotlin jest zaprojektowany z myślą o pełnej interoperacyjności z językami działającymi na maszynie wirtualnej Javy. Dzięki temu jest w pełni kompatybilny z Javą, bo tak naprawdę jest kompilowany do Javy. Można więc powiedzieć, że jest to swojego rodzaju nakładka na Javę, która oferuje znacznie bardziej zwięzły kod i funkcjonalności, które w Javie nie występują, jednocześnie pozostając pod spodem zwykła Javą. Czyli jest to po prostu nowy lepszy sposób na pisanie Javy.

Wiąże się to bezpośrednio z faktem, że migracja z Javy na Kotlin jest relatywnie prosta, nawet istnieje opcja w InteliJ IDE, aby przekonwertować klasę Javy na Kotlin automatycznie.

Dzięki swoim zaletom język Kotlin stał się oficjalnym językiem programowania dla platformy Android.

Najpopularniejsze marki, które korzystają z Kotlina to:
- Amazon Web Services
- Pinterest
- Coursera
- Netflix
- Uber
- Square
- Trello
- Evernote

Zobacz też: [Opis Kotlina na oficjalnej stronie Androida](https://developer.android.com/kotlin/)

{% include language/top10github.html %}

# Poziom skomplikowania

Kotlin wprowadza wiele udogodnień i w porównaniu do Javy jest dużo bardziej przejrzystym językiem, ale może się okazać nieco trudniejszy od Javy. Kotlin wiele "domyśla się" i robi za nas, co oczywiście jest dobrą rzeczą, gdy już opanujemy język, ale podczas nauki niektóre rzeczy mogą nie być takie łatwe do zrozumienia. W Javie mamy wszystko czarno na białym co w konsekwencji skutkuje jej rozwlekłością, ale i mniejszą złożonością.

Dlatego warto znać Javę przed Kotlinem - jest to najlepsza droga. Wtedy przejście na Kotlin jest bardzo płynne, relatywnie łatwe i co najważniejsze — wiemy jak to wszystko działa pod spodem, więc nie jest to dla nas żadną magią. Jest to dobra ścieżka nauki, ale nie stoi nic na przeszkodzie, żeby zacząć od razu od Kotlina.

Z drugiej strony w Kotlinie mamy wbudowane *null safety*, więc napotkamy na mniej ciężkich problemów związanych z NullPointerException, i kilka innych udogodnień, których z pewnością będzie nam brakowało w Javie.

# Statystyki

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

{% include language/see_all_stats.html %}

# Przyszłość języka

{% assign kotlin = site.data.statistics.languagesVersions.Kotlin %}

Kotlin cały czas zyskuje na popularności. To, że zostanie z nami na dłuży czas, jest niemal pewne — choćby ze względu na to, że stał się oficjalnym językiem systemu Android. Za Kotlinem stoi solidna firma JetBrains, co również dobrze wróży temu językowi. Kotlin cały czas prężnie się rozwija, a jego ostatnia wersja {{ kotlin.version }} została wydana {{ kotlin.releaseDate }}.

{% include courses.html %}

{% include books.html %}




