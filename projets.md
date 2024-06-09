---
layout: page
title: Projets
permalink: /projets/
---

{% for projet in site.projets %}
  <h2>
    <a href="{{ projet.url }}">
      {{ projet.title }}
    </a>
  </h2>
{% endfor %}
