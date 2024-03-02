---
layout: page
title: Voyages
permalink: /voyages/
---

{% for voyage in site.voyages %}
  <h2>
    <a href="{{ voyage.url }}">
      {{ voyage.destination }} - {{ voyage.time }}
    </a>
  </h2>
  <div>{{ voyage.content | markdownify }}</div>
{% endfor %}
