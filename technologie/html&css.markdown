---
layout:     simpleTechnology
title-full: Język HTML i CSS
title:      HTML i CSS
image:      html&css.png
---


# Czym jest HTML i CSS?

Jeśli chcesz zacząć tworzyć strony internetowe powinieneś zacząć właśnie od tych technologii.
HTML (ang. HyperText Markup Language -- HiperTekstowy Język Znaczników) to język znaczników, za pomocą którego można tworzyć strukturę strony internetowej, a CSS (Cascading Style Sheets - Kaskadowe Arkusze Stylów) to język, który takiej stronie nadaje wyglądu. HTML i CSS, wraz z JavaScriptem, składają się na podstawowy zestaw umiejętności dla frontend developera.

# HTML

Znaczniki HTML są budulcem, za pomocą których tworzy się strukturę strony internetowej (wstawianie obrazków, akapitów, nagłówków, dzielenie strony na sekcje itd.). Dodatkowo w pliku HTML zawrzeć możemy metadane strony, takie jak kodowanie znaków, język, tytuł strony, jej opis itp. Możemy także załączyć arkusze stylów CSS czy skrypty Javascript. Poprzez nadanie poszczególnym elementom strony identyfikatorów lub klas, jesteśmy w stanie "nawiązać kontakt" pomiędzy wszystkimi tymi technologiami. To, jak zaprojektujemy strukturę stronę, wpływa na jej dostępność dla osób z niepełnosprawnościami lub posiadającymi słabsze urządzenia a także na pozycję strony w wyszukiwarce' nie warto zatem traktować HTML-a pobłażliwie i warto po opanowaniu podstaw zainteresować się **dostępnością** i **pozycjonowaniem strony (SEO)**.

# CSS

CSS służy do stylowania strony napisanej w HTML. To w nim zdefiniujemy kolory, efekty, położenie, sposób wyświetlania a nawet animacje poszczególnych elementów. CSS został stworzony w celu odseparowania struktury dokumentu HTML od formy jego prezentacji. Separacja ta zwiększa zakres dostępności witryny, zmniejsza zawiłość kodu oraz ułatwia wprowadzanie zmian w strukturze dokumentu.

Do znacznego ułatwienia i przyspieszenia edytowania stylów używane są preprocesory oraz frameworki:
* **Framework CSS** to zbiór gotowych stylów, który ułatwia i znacznie przyspiesza budowanie stron. Jednym z najbardziej popularnych jest [Bootstrap](https://getbootstrap.com/). Dzięki niemu tworzenie responsywnych stron jest dużo prostsze. Bootstrap zawiera także gotowe szablony dla typografii, formularzy, przycisków nawigacji oraz innych elementów interfejsu.
* **Preprocesory** , takie jak [Less.js](https://lesscss.org/) czy [Sass](https://sass-lang.com/), wprowadzają do CSS-a elementy znane z języków programowania, czyli między innymi funkcje, instrukcje warunkowe czy pętle. Oczywiście taki kod wygenerowany przez preprocesor nie mógłby zostać poprawnie wczytany i zinterpretowany przez przeglądarkę, zatem musi zostać najpierw zamieniony ( *przetranspilowany* ) na wynikowy kod CSS.

{% include courses.html %}

{% include books.html %}

