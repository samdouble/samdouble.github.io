---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<a href="https://forums.docker.com/u/samdouble/summary">
  <img src="/docs/assets/icons/docker.webp" alt="Docker" width="60"/>
</a>

<a href="https://github.com/samdouble">
  <img src="/docs/assets/icons/github.png" alt="GitHub" width="60"/>
</a>

<a href="https://medium.com/@samdouble">
  <img src="/docs/assets/icons/medium.png" alt="Medium" width="60"/>
</a>

<a href="https://community.snowflake.com/s/profile/005VI000000oojB">
  <img src="/docs/assets/icons/snowflake.png" alt="Snowflake" width="60"/>
</a>

<a href="https://stackoverflow.com/users/12787394/samdouble">
  <img src="/docs/assets/icons/stackoverflow.webp" alt="GitHub" width="60"/>
</a>

<footer>
    <a class="active" href="#">{{ site.languageNames[site.lang] }}</a>
    {% for lang in site.languageNames %}
    {% if lang[0] == site.lang %} {% continue %} {% endif %}
    {% if page.namespace %}
    <a href="{% tl {{ page.namespace }} {{ lang[0] }} %}">{{ lang[1] }}</a>
    {% else %}
    <a href="{{ site.baseurl_root }}/{{ lang[0] }}/">{{ lang[1] }}</a>
    {% endif %}
    {% endfor %}
</footer>
