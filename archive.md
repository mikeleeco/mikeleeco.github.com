---
layout: default
---
<div class="container">
<div class="row">
    {% for post in site.categories.posts %}
    <div class="post">
      <a href="{{ post.url }}">
	<img src="/images/{{ post.image.teaser }}"  class="img-responsive" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h1></a>
<h3>{{ post.date | date_to_string }}</small></h3>
  {% endfor %}

<hr>
    {% include footer.html %}
<hr>
</div>
</div>
