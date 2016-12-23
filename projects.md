---
layout: custom
---

{% include header.html type="page" %}

<div class="container-fluid" role="main">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <h1 class="project-title">Projects</h1>

    {% for project in site.categories.project %}  
    <div class="col-lg-6 col-lg-6"> 
      <a href="{{ project.url }}">
        <img src="{{ project.bigimg }}" class="big-img intro-header" alt="{{ project.title }}" itemprop="image"></div>
      </a>
    <h2 class="project-title">
      <a href="{{ project.url }}">
        {{ project.title }}
        <br>
      </a>
    </h2>
    <h3 class="project-description">
        {{ project.description }}
    </h3>
    </div>
  {% endfor %}


</div>
</div>
