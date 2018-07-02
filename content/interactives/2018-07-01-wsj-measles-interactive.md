---
title: "Measles Vaccination Chart D3 Replication"
subtitle: ""
tags: [dataviz, D3.js]
date: 2018-07-01
comments: true
hidden: true
categories: ["interactives"]
description: "A interactive heatmap visualizing the measles incidence for US States from 1928-2016."
bigimg: [{src: "/img/measlesReplication.png", desc: "Measles Interactive"}]
---

<style>
iframe {
    border: 0;
    height: 1100px;
}

.container {
	margin-left: 20px;
	margin-right: 20px;
	padding: 0px;
}

.footer {
	margin-left: 20px;
	margin-right: 20px;
	padding: 0px;
}

</style>

<script src="https://d3js.org/d3.v5.min.js"></script>

<div class="container">
	<div id="graphic" style="width: 1500px;"></div>
	<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
	<script>
		var pymParent = new pym.Parent('graphic', '/js/d3samples/measles/measles.html', {});
	</script>
</div>