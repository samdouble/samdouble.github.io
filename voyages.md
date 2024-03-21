---
layout: page
title: Voyages
permalink: /voyages/
---

{% for voyage in site.voyages %}
  <h2>
    <a href="{{ voyage.url }}">
      {{ voyage.title }}
    </a>
  </h2>
{% endfor %}
