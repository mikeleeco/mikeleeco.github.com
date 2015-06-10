---
layout: default
---

<div class="container">
<div class="row">
<div class="col-sm-12">
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title"><a href="{{ site.url }}/interactives">Interactives</a></h3>
  </div></div></div>
    {% for interactive in site.categories.interactives %}
    <div class="col-md-6">   
    <div class="interactive-teaser">
      <a href="{{ interactive.url }}">
	<img src="/images/{{ interactive.image.teaser }}" class="interactive-teaser-image" alt="{{ page.title }}" itemprop="image">
      </a>
    <h3 class="interactive-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
      </a>
    </h3></a>
      <a href="{{ interactive.url }}" class="small-link primary-link" target="_blank"> {{ interactive.description }} <i class="fa fa-external-link"></i></a>
      <a href="{{ interactive.url }}" class="small-link">Read on...</a>
    </div></div>
  {% endfor %}

</div>
</div>

<hr>

