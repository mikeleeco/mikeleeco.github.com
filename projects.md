---
layout: default
title: Projects
---

<p class="important">
This page is under construction!
</p>

<div class="container">
<div class="row">
    {% for project in site.categories.projects %}
    <div class="project">
      <a href="{{ project.url }}">
	<img src="/images/{{ project.image.teaser }}"  class="img-responsive" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="project-title">
      <a href="{{ project.url }}">
        {{ project.title }}
      </a>
    </h1></a>
<h3>{{ project.date | date_to_string }}</small></h3>
  {% endfor %}

<hr>
    {% include footer.html %}
<hr>
</div>
</div>
