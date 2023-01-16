<script>
	export let title = 'Mike Lee';
	export let description =
		'A developer living in the Washington, DC area specializing in the creation of web applications,graphics, and other data-driven projects using R, Shiny, React, Svelte, and D3. I teach workshops on R programming and data visualization.';
	export let keywords =
		'web development, data science, data visualization, R, Shiny, React, Svelte';
	export let image = 'https://www.mikelee.co/img/michael.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@mikeleeco" />
	<meta name="twitter:creator" content="@mikeleeco" />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="title" property="og:title" content={title} />
	<meta name="description" property="og:description" content={description} />
	<meta name="image" property="og:image" content={image} />
	<meta name="keywords" content={keywords} />
	<meta name="topic" content={keywords} />
	<meta name="language" content="EN" />
	<meta name="robots" content="index, follow" />
	<meta name="abstract" content={description} />
	<meta name="summary" content={description} />
	<meta name="author" content="Mike Lee" />
	<meta name="url" content="https://www.mikeleeco.com" />
</svelte:head>
