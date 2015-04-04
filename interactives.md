---
layout: default
title: Interactives
---

<div class="container">
<div class="row">
    {% for interactive in site.categories.interactives %}
    <div class="interactive">
      <a href="{{ interactive.url }}">
	<img src="/images/{{ interactive.image.teaser }}"  class="img-responsive" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="interactive-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
      </a>
    </h1></a>
<h3>{{ interactive.date | date_to_string }}</small></h3>
  {% endfor %}


<hr>
</div>
</div>
