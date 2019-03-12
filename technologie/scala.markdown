---
layout:     technology
title-full: Scala - zastosowanie, przyszłość, najlepsze kursy i polecane książki
title:      Scala
image:      scala.png
in-progress:  true
---

{% assign stats = site.data.statistics.statistics.Scala %}

# Zastosowanie

**Scala** jest to wieloplatformowy, statycznie typowany język programowania działający na maszynie wirtualnej Javy. Wspiera programowanie funkcyjne jaki i obiektowe.

Dużą zaletą Scali jest kompatybilność z javą - biblioteki mogą być reużywane pomiędzy Scalą a Javą bez problemu. 

Zastosowanie skali dominuje w dziedzinach jak *data science*, *big data* czy *machine learning*.

Scala jest wykorzystywana przez duże firmy takie jak:
- LinkedIn
- Twitter
- Zalando
- SoundCloud

{% include language/top10github.html %}

# Poziom skomplikowania

Scala w porównaniu do Kotlina czy Javy ma nieco większy próg wejścia. Również przejście z Javy na Scalę jest relatywnie trudniejsze w porównaniu z Kotlinem.

Wpływa na to fakt, że Scala jest ekspresyjna - potrzeba dużo mniej kodu niż w Javie by wyrazić to samo - jednak co za tym idzie, trzeba więcej rozumieć co się dzieje pod spodem. Jest to zaleta języka, gdy mamy już doświadczenie, jednak na początku nauka jest przez to bardziej problematyczna.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

{% assign scala = site.data.statistics.languagesVersions.Scala %}

Scala w ostatnim roku straciła nieco swoją popularność wśród języków JVM z 28.4% do 21.6%. Jednak nie jest to wina samej Scali czy też znak, że dzieje się coś nie tak. Scala znalazła zastosowania w niszach jak *data science*, *big data* czy *machine learning* i tam będzie utrzymywać swoją dobrą pozycję. Jest to też spowodowane faktem, że Kotlin stał się oficjalnym językiem androida, co znacznie wpłynęło na jego popularność wśród języków JVM. Scala stale się rozwija, a jej ostatnia wersja {{ scala.version }} została wydana {{ scala.releaseDate }}.


{% include courses.html %}

{% include books.html %}




