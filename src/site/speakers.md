---
title: Speakers
layout: layouts/base.njk
---

<ul class="agenda">
{%- for page in collections.speakers -%}
  <li>
    <a href="{{ page.url }}">
      <img src="../images/{{ page.data.img }}" alt="{{ page.data.imgAlt }}">
      <h2>{{ page.data.name }}</h2>
      <p>{{ page.data.affiliations }}</p>
    </a>
  </li>
{%- endfor -%}
</ul>