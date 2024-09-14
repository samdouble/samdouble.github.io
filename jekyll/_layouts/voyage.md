---
layout: post
---

{% for voyage_post in site.trips_posts %}
  {% if voyage_post.voyage == page.voyage %}
    <div>
      <a href="{{ voyage_post.url }}">
        {{ voyage_post.title }}
      </a>
    </div>
  {% endif %}
{% endfor %}
