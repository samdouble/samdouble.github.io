---
layout: default
---

<h1>Chapter {{ page.voyage }}</h1>

{% for section in site.sections %}
  {% if section.voyage == page.voyage %}
    {{ section.output }}
  {% endif %}
{% endfor %}
