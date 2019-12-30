---
title: Speakers
layout: layouts/base.njk
---

<ul class="agenda">
{%- for page in collections.speakers -%}
  <li>
    <a href="{{ page.url }}">
      <img src="../images/{{ page.data.img }}" alt="{{ page.data.imgAlt }}">
      <h2>{{ page.data.firstNames }} {{ page.data.lastNames }}</h2>
    </a>
  </li>
{%- endfor -%}
</ul>