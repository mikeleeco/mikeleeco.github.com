---
layout: default
title: "Interactives"
excerpt: "A selection of interactive visualizations I’ve created."
---
yo
<div class="container">
<div class="row">
    {% for post in site.categories.interactives %}
<div class=".col-xs-6 .col-sm-6">
    <div class="interactive">
    <h1 class="interactive-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
      </a>
    </h1></a>
<h3>{{ interactive.date | date_to_string }}</small></h3>
  {% endfor %}

<hr>
    {% include footer.html %}
<hr>
</div>
</div>
