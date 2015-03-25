---
layout: default
---

<div class="container">
<div class="row">
    {% for interactives in site.interactives %}
    <div class="interactive">
      <a href="{{ interactive.url }}">
	<img src="/images/{{ post.image.teaser }}"  class="img-responsive" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="post-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
      </a>
    </h1></a>
<h3>{{ post.date | date_to_string }}</small></h3>
  {% endfor %}
</div>
</div>
</div>
<hr>
    {% include footer.html %}
<hr>

