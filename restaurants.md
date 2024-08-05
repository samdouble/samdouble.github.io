---
layout: page
title: Restaurants
permalink: /restaurants/
---

{% for restaurant in site.restaurants reversed %}
  <h2>
    <a href="{{ restaurant.url }}">
      {{ restaurant.title }}
    </a>
  </h2>
{% endfor %}
