---
layout: post
---

{% for voyage_post in site.voyages_posts %}
  {% if voyage_post.voyage == page.voyage %}
    {{ voyage_post.content | markdownify }}
  {% endif %}
{% endfor %}
