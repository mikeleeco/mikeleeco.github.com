---
layout: custom
---

{% include header.html type="post" %}

<div class="container-fluid" role="main">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <h1 class="interactive-title">Interactives</h1>

    {% for interactive in site.categories.interactive %}  
      <div class="col-lg-6 col-lg-6"> 

      <a href="{{ interactive.url }}">
        <img src="{{ interactive.bigimg }}" class="big-img intro-header" alt="{{ interactive.title }}" itemprop="image"></img>
      </a>
    <h2 class="interactive-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
        <br>
      </a>
    </h2>
    <h4 class="interactive-description">{{ interactive.description }}</h4>
    </div>
  {% endfor %}


</div>
</div>
