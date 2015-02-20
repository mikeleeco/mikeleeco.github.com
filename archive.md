---
layout: default
title: Archive
image:
  feature: paper-53-space-feature.jpg
---
<div class="container">
<div class="row">
    {% for post in site.posts %}
    <article class="col-md-4 post">
    <div class="post">
      <a href="{{ post.url }}">
	<img src="/images/{{ post.image.teaser }}" class="post-teaser-image" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h1></a>
<h2><small>{{ post.date | date_to_string }}</small></h2>
    </article>
  {% endfor %}

<hr>
    {% include footer.html %}
<hr>
</div>
</div>
