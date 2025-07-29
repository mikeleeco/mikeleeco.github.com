<script>
	export let title = 'Mike Lee';
	export let description =
		"A developer and cartoonist living in Milwaukee, Wisconsin specializing in the creation of web applications, graphics, and other data-driven projects I've taught classrooms and coding workshops, consulted with researchers, sports agents and students, and developed data products for government education agencies.";
	export let keywords =
		'web development, data science, data visualization, R, Python, Svelte, cartoon, drawing';
	export let image = 'https://www.mikelee.co/images/icons/logo.png';
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
	<meta name="language" content="EN" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Mike Lee" />
</svelte:head>
