---
title: Burning Money
subtitle: The Financial Costs of a Warming Planet
layout: layouts/base.njk
---

<div id="hero" class="hero">
	<video autoplay muted loop id="video">
	  <source src="images/stock-footage-thick-plumes-of-dark-smoke-rise-from-a-amazon-rain-forest-in-brazil-that-is-on-fire-and-burning-due.webm" type="video/webm">
	</video>
	<header>
		<h1>{{ title }}</h1>
		<p>{{ subtitle }}</p>
	</header>
	{% include "nav.njk" %}
</div>

<div class="wrapper">
	<section id="overview">
		<h2>Overview</h2>
		<div class="summary">
			<p>Aliquam fermentum tortor nec sagittis faucibus. Curabitur non metus sodales, feugiat quam dapibus, consectetur nunc. Donec vel neque tincid. Duis urna dolor, convallis sed congue in, ultricies in lorem. Curabitur condimentum metus massa, ac sagittis risus scelerisque vitae.</p>
			<p>Ut vestibulum turpis a sollicitudin laoreet. Praesent ante felis, pharetra ac metus in, eleifend blandit dolor. Vestibulum imperdiet quam nec ligula venenatis ultrices. Nulla vehicula mauris a diam semper, suscipit vehicula massa facilisis. Curabitur facilisis placerat.</p>
		</div>
	</section>
</div>

<div class="wrapper">
	<section class="agenda">
		<h2>Agenda</h2>
		{%- for page in collections.agenda -%}
			<article>
				<time class="event-time" datetime="{{ page.data.startTime }}">{{ page.data.startTime | dateDisplay("t") }}</time>
				<h3><a href="{{ page.url }}">{{ page.data.title }}</a></h3>
				<div class="event-description">{{ page.data.description }}</div>
				<div class="speakers-block">
					<h4>Speakers</h4>
					{%- for item in page.data.speakers -%}
					<div class="speaker">
						<h5><a href="#{{ item.data.name | slug }}">{{ item.data.name }}</a></h5>
					</div>
					{%- endfor -%}
				</div>
			</article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section id="speakers">
		<h2>Speakers</h2>
		{%- for page in collections.speakers -%}
		  <article id="{{  page.fileSlug }}">
		    <a>
		      	<img src="../images/{{ page.data.img }}" alt="{{ page.data.imgAlt }}">
		      	<h3>{{ page.data.name }}</h3>
				<p>{{ page.data.affiliations }}</p>
		    </a>
		  </article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section id="sponsors">
		<h2>Sponsors</h2>
		{%- for page in collections.sponsor -%}
		  <article>
		      <img src="./images/{{ page.data.img }}" alt="{{ page.data.title }}">
		  </article>
		{%- endfor -%}
	</section>
</div>

<div class="wrapper">
	<section id="register">
		<h2>Register</h2>
		<form name="register" netlify>
			<label for="first-name">First Name</label>
			<input type="text" name="fname" value="" size="40" id="first-name" aria required="true" aria-invalid="false" />
			<label for="flast-name">Last Name</label>
			<input type="text" name="lname" value="" size="40" id="last-name" aria required="true" aria-invalid="false" />
			<label for="email">Email</label>
			<input type="email" name="email" value="" size="40" id="email" aria-required="true" aria-invalid="false" />
			<input type="submit" name="sumbit" value="submit" size="40" id="submit" aria-required="true" aria-invalid="false" />
		</form>
	</section>
</div>

<script>
var isInViewport = function (elem) {
var bounding = elem.getBoundingClientRect();
	return (
	    bounding.bottom <= 40
	);
};

var hero = document.getElementById('hero');
var header = document.getElementById('header-wrapper');
window.addEventListener('scroll', function(e) {
	isInViewport(hero) ? header.classList.add('opaque') : header.classList.remove('opaque');
});
</script>
