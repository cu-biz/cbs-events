---
title: Agenda
layout: layouts/base.njk
---

<ul class="agenda">
{%- for page in collections.newAgenda -%}
  <li>
    <time datetime="{{ page.date }}">{{ page.data.startTime | dateDisplay("t") }}</time>
    <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
    {%- for item in page.data.speakers -%}
    <p>{{ item.data.name }}</p>
    <p>{{ item.data.affiliations }}</p>
    {%- endfor -%}
    <ul>
    </ul>
  </li>
{%- endfor -%}
</ul>