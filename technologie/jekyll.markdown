---
layout:     simpleTechnology
title:      Jekyll
image:      jekyll-light.png
date:       18.11.2017
---

{: .official-page}
[Przeczytaj o {{ page.title }} na oficjalnej stronie](https://jekyllrb.com/)

Aby efektywnie używać Jeykll i dowolnie modyfikować swojego bloga warto znać [HTML i CSS](/technologie/html&css)

Jekyll jest to narzędzie napisane w języku Ruby (nie musimy znać Rubiego), które pozwala generować statyczne strony na podstawie plików-szablonów na które składają się:

- Plik konfiguracyjny - jedno miejsce, gdzie zarządzimy całym procesem buildowania projektu
- Szablony - pliki HTML z tagami Liquid, które definiują układ i kod strony. Zawierają one zmienne, pod które będą podstawiane odpowiednie wartości np. tytuł strony, treść itd.
- Pliki z treścią - wpisy (np. w formacie markdown) oraz normalne podstrony (w html), które później łączą się z szablonami
- Pliki nieparsowane - takie jak CSS czy obrazki

Jekyll rozwiązuję problem wielu podobnych statycznych stron - gdy chcemy wprowadzić zmianę musimy zrobić to manualnie na każdej z nich. Pisząc w Jekyllu tworzymy szablon raz i możemy go wykorzystywać na innych stronach nieskończoną ilość razy.

Można o nim myśleć jak o opartym na plikach CMS (System zarządzania treścią). Nie potrzebujemy żadnej bazy danych.

Jekyll sparsuje otrzymane pliki i wyrzuci nam całą strukturę statycznych plików, które są gotowe na wrzucenie na serwer. Jest to nieco odmienne podejście do tworzenia stron. Tu całość generujemy u siebie na komputerze, a na serwerze trzymamy gotowe, statyczne pliki.
 
Warto wspomnieć, że wspiera go [GitHub Pages](https://pages.github.com/) - serwis Githuba pozwalający na darmowe hostowanie twojej strony/bloga. Na GH Pages twój projekt w Jekyllu zostanie automatycznie wykryty i zbuildowany, więc wystarczy, że wrzucisz pliki źródłowe Jekylla i włączysz GH Pages.

[Mój blog](https://devcave.pl/) jest oparty na Jekyllu. Napisałem również [wpis](https://devcave.pl/dajsiepoznac2017/jekyll/2017/03/04/instalacja-jekyll/) oraz kilka kolejnych (zobacz tag [Jekyll](https://devcave.pl/archive/#jekyll)), które pomogą Ci ruszyć z własnym blogiem.

# Książki, które pomogą pisać lepszego bloga:
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}


  - jazabl
  - prblog<div class="book">
    <script src="https://helion.pl/plugins/new/ksiazkasm.phi?id=magslo&nr=9102Q&size=181&utf8=1"></script>
</div>