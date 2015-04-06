---
layout: default
---
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Posts</h3>
  </div></div></div>

    {% for post in site.categories.posts %}
    <div class="col-md-12">
    <div class="post-teaser">
      <a href="{{ post.url }}">
	<img src="/images/{{ post.image.teaser }}" class="post-teaser-image" alt="{{ page.title }}" itemprop="image">
      </a>
    <h3 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h3></a>
      <a href="{{ post.url }}" class="small-link primary-link" target="_blank"> {{ post.description }} <i class="fa fa-external-link"></i></a>
      <a href="{{ post.url }}" class="small-link">Read on...</a>
{{ post.date | date_to_string }}
    </div></div>
  {% endfor %}




</div></div>

<hr>



