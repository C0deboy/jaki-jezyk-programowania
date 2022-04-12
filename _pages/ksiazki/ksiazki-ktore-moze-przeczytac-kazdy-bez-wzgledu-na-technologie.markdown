---
layout: default
title-full: Uniwersalne książki dla programistów
permalink: /ksiazki/uniwersalne-ksiazki-dla-programistow/
---

# Najlepsze książki dla programistów
## od wydawnictwa [Helion](https://helion.pl/view/9102Q):

{% include promotion.html %}

<br>

Są to książki uniwersalne, które może przeczytać każdy, bez względu na używaną technologię.

{% assign categories = site.data.books_by_category %}

{% for category in categories %}

{: .section-heading }
## {{ category[0] }}

{% for book in category[1].books %}

{% if book.first %}

{% for group in book %}

<p>{{ group[0] }}</p>

{% for bookId in group[1] %}

<div class="book">
<script src="https://helion.pl/plugins/new/ksiazkasm.phi?id={{ bookId }}&nr=9102Q&size=181&utf8=1"></script>
</div>

{% endfor %}
{% endfor %}

{% else %}

<div class="book">
<script src="https://helion.pl/plugins/new/ksiazkasm.phi?id={{ book }}&nr=9102Q&size=181&utf8=1"></script>
</div>

{% endif %}
{% endfor %}
{% endfor %}

