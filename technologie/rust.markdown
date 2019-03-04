---
layout:     technology
title-full: Język programowania Rust - zastosowanie, przyszłość, polecane książki
title:      Rust
image:      rust.png
in-progress:  true
no-books:   true
---

{% assign stats = site.data.statistics.statistics.Rust %}

# Zastosowanie

**Rust** jest relatywnie świeżym, wieloparadygmatowym językiem programowania obecnie rozwijanym przez Mozillę. Został zaprojektowany by być bezpiecznym, szczególnie pod względem współbieżności. Rust składniowo jest podobny do C++, jednak oferuje automatyczne zarządzanie pamięcią (bez garbage collectora), jednocześnie utrzymując wysoką wydajność.

Rust jest porównywalny często do C/C++ zarówno pod względem zastosowania jak i wydajności - jest więc wykorzystywany w obszarach, gdzie wydajność jest krytycznym aspektem. 

Rust ma już wiele zastosowań komercyjnych, całą listę można zobaczyć tu [Rust - production users](https://www.rust-lang.org/production/users).

Są to między innymi:
- Mozilla
- Dropbox
- npm
- Cloudflare
- OVH

{% include language/top10github.html %}

# Poziom skomplikowania

Rust podobnie jak inne bardziej niskopoziomowe języki takie jak C++, ma nieco większy próg wejścia od tych z wyższym poziomem abstrakcji.
Nie jest to najłatwiejszy język na początek, ale też taka jest jego specyfika zastosowania.

# Popularność

<h4>Dane aktualne na dzień: {{ site.data.statistics.statistics.date | date: "%d.%m.%Y"  }}</h4>

{% include language/popularity.html %}

{% include language/stackOverflow.html %}

{% include language/github.html %}

{% include language/meetup.html %}

# Przyszłość języka

Według ankiety przeprowadzonej przez StackOverflow Rust był najbardziej polubionym językiem wśród programistów **3 lata z rzędu** - w 2016, 2017 i 2018. Oznacza to, że ten język programowania ma naprawdę dobry potencjał. Dodatkowym plusem jest to, że jest rozwijany przez Mozillę, co dobrze mu wróży. Jego popularność cały czas rośnie i jest całkiem możliwe, że Rust w ciągu kilku najbliższych lat będzie wysoce pożądany.

{% assign versions = site.data.statistics.languagesVersions %}

{% include courses.html %}

{% include books.html %}




