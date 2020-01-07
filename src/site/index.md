---
title: Burning Money
subtitle: The Financial Costs of a Warming Planet
layout: layouts/base.njk
---

<div class="hero">
	<header>
		<h1>{{ title }}</h1>
		<p>{{ subtitle }}</p>
	</header>
	{% include "nav.njk" %}
</div>

<div class="wrapper">
	<section class="agenda">
		<h2>Agenda</h2>
		{%- for page in collections.newAgenda -%}
			<article>
				<time class="event-time" datetime="{{ page.data.startTime }}">{{ page.data.startTime | dateDisplay("t") }}</time>
				<h3><a href="{{ page.url }}">{{ page.data.title }}</a></h3>
				<p class="event-description">{{ page.data.description }}</p>
				{%- for item in page.data.speakers -%}
				<div class="speaker">
					<h4>{{ item.data.name }}</h4>
				</div>
				{%- endfor -%}
				</article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section class="speakers">
		<h2>Speakers</h2>
		{%- for page in collections.speakers -%}
		  <article>
		    <a href="{{ page.url }}">
		      	<img src="../images/{{ page.data.img }}" alt="{{ page.data.imgAlt }}">
		      	<h3>{{ page.data.name }}</h3>
				<p>{{ page.data.affiliations }}</p>
		    </a>
		  </article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section class="sponsors">
		<h2>Sponsors</h2>
		{%- for page in collections.sponors -%}
		  <article>
		    <a href="{{ page.data.url }}">
		      <img src="../images/{{ page.data.img }}" alt="{{ page.data.imgAlt }}">
		    </a>
		  </article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section class="register">
		<h2>Register</h2>
		<form>
			<label for="first-name">First Name</label>
			<input type="text" name="fname" value="" size="40" id="first-name" aria required="true" aria-invalid="false" />
			<label for="flast-name">Last Name</label>
			<input type="text" name="lname" value="" size="40" id="last-name" aria required="true" aria-invalid="false" />
			<label for="e-mail">Email</label>
			<input type="email" name="email" value="" size="40" id="e-mail" aria-required="true" aria-invalid="false" />
			<input type="submit" name="sumbit" value="submit" size="40" id="e-mail" aria-required="true" aria-invalid="false" />
		</form>
	</section>
</div>
