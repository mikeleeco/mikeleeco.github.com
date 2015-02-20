---
layout: default
---

<div class="row"> 
	<img src="/images/{{ page.image.feature }}" class="page-feature-image" alt="{{ page.title }}" itemprop="image">
		{% if page-image.credit %}{% include image-credit.html %}{% endif %}
	      </div><!-- /.page-image -->
	      <div class="page-title">
		<h1><span>{{ page.title }}</span></h1>
		{% if page.subtitle %}<h2><span>{{ page.subtitle }}</span></h2>{% endif %}
	      </div><!-- /.page-title -->
	  {{ content }}
	  </ul>
      </div>
      </div>
<hr>
    {% include footer.html %}
<hr>

<div class="container">
<div class="row">
    {% for interactive in site.interactives limit:3 %}
    <article class="col-md-4 interactive">
    <div class="interactive-related">
      <a href="{{ interactive.url }}">
	<img src="/images/{{ interactive.image.teaser }}" class="interactive-teaser-image" alt="{{ page.title }}" itemprop="image">
      </a>
    <h1 class="interactive-title">
      <a href="{{ interactive.url }}">
        {{ interactive.title }}
      </a>
    </h1></a>
<h2><small>{{ interactive.date | date_to_string }}</small></h2>
    </article>
  {% endfor %}
</div>
</div>
