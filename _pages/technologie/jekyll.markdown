---
layout: simpleTechnology
title-full: Jekyll - opis, najlepsze polecane kursy video
title: Jekyll
permalink: /technologie/jekyll/
image: jekyll.png
no-books: true
no-courses: true
---

{: .official-page .darker-overlay }
[Poczytaj o {{ page.title }} na oficjalnej stronie](https://jekyllrb.com/)

Aby efektywnie używać Jeykll i dowolnie modyfikować swojego bloga warto znać [HTML i CSS](/technologie/html&css)

Jekyll jest to narzędzie napisane w języku Ruby (nie musimy znać Rubiego), które pozwala generować statyczne strony na
podstawie plików-szablonów na które składają się:

- Plik konfiguracyjny - jedno miejsce, gdzie zarządzimy całym procesem buildowania projektu
- Szablony - pliki HTML z tagami Liquid, które definiują układ i kod strony. Zawierają one zmienne, pod które będą
  podstawiane odpowiednie wartości np. tytuł strony, treść itd.
- Pliki z treścią - wpisy (np. w formacie markdown) oraz normalne podstrony (w html), które później łączą się z
  szablonami
- Pliki nieparsowane - takie jak CSS czy obrazki

Jekyll rozwiązuję problem wielu podobnych statycznych stron - gdy chcemy wprowadzić zmianę musimy zrobić to manualnie na
każdej z nich. Pisząc w Jekyllu tworzymy szablon raz i możemy go wykorzystywać na innych stronach nieskończoną ilość
razy.

Można o nim myśleć jak o opartym na plikach CMS (System zarządzania treścią). Nie potrzebujemy żadnej bazy danych.

Jekyll sparsuje otrzymane pliki i wyrzuci nam całą strukturę statycznych plików, które są gotowe na wrzucenie na serwer.
Jest to nieco odmienne podejście do tworzenia stron. Tu całość generujemy u siebie na komputerze, a na serwerze trzymamy
gotowe, statyczne pliki.

Warto wspomnieć, że wspiera go [GitHub Pages](https://pages.github.com/) - serwis Githuba pozwalający na darmowe
hostowanie twojej strony/bloga. Na GH Pages twój projekt w Jekyllu zostanie automatycznie wykryty i zbuildowany, więc
wystarczy, że wrzucisz pliki źródłowe Jekylla i włączysz GH Pages.

Zarówno ta strona jak i [Mój blog](https://devcave.pl/) są oparte na Jekyllu. Napisałem
również [wpis](https://devcave.pl/dajsiepoznac2017/instalacja-jekyll) oraz kilka kolejnych (zobacz
tag [Jekyll](https://devcave.pl/archive/#jekyll)), które pomogą Ci ruszyć z własnym blogiem.

{% include courses.html %}
