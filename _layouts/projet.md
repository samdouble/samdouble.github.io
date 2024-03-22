---
layout: post
---

<h1>{{ page.projet }}</h1>

{% for projet_post in site.projets_posts %}
  {% if projet_post.projet == page.projet %}
    {{ projet_post.content | markdownify }}
  {% endif %}
{% endfor %}
