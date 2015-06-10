---
layout: default
title: Projects
---



<div class="container">
<div class="row">
<div class="col-sm-12">
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title"><a href="{{ site.url }}/projects">Projects</a></h3>
  </div></div></div>
<p class="important">
This page is under construction!
</p>
    {% for project in site.categories.projects %}
    <div class="col-md-6">   
    <div class="project-teaser">
      <a href="{{ project.url }}">
	<img src="/images/{{ project.image.teaser }}" class="project-teaser-image" alt="{{ page.title }}" itemprop="image">
      </a>
    <h3 class="project-title">
      <a href="{{ project.url }}">
        {{ project.title }}
      </a>
    </h3></a>
      <a href="{{ project.url }}" class="small-link primary-link" target="_blank"> {{ project.description }} <i class="fa fa-external-link"></i></a>
      <a href="{{ project.url }}" class="small-link">Read on...</a>
    </div></div>
  {% endfor %}


<hr>


</div>
</div>
