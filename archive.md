---
layout: default
title: Archive

---
<div class="container-fluid">
<div class="row ">
    {% for post in site.posts %}
    <article class="post col-md-4 col-sm-6 inner">
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
