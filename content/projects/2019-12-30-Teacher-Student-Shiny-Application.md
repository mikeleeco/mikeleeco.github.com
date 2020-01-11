---
title: "Insights on Diversifying the Educator Workforce - Teacher Diversity Tool"
tags: [Shiny, R, research, education, data]
author: "Michael Lee"
date: 2019-09-24
categories: ["projects"]
comments: true
subtitle: Use this free, user-friendly shiny application to identify and visualize diversity gaps in states and school districts.
bigimg: [{src: "/img/diversity.png", desc: "Teacher Diversity Tool Shiny Application"}]
---

## Background
The Center on Great Teachers and Leader's (GTL Center) mission is to support states and districts in their efforts to grow, respect, and retain great teachers and leaders for all students, especially those from disadvantaged backgrounds.

The GTL Center has an [Excel data tool](https://gtlcenter.org/technical-assistance/toolkits/data-tool-diversifying-the-educator-workforce) that is used to reveal insights about the diversity of the educator workforce at the state, district, school, or EPP level. One component of this tool that was missing was a method to map and explore teacher and student ethnicity data by school district.

The goal for this project was to develop a free, user-friendly tool to identify and visualize diversity gaps within states and school districts.

## Development
For this project I acted as the lead developer in the creation of a Shiny application that would map diversity gaps at the state and district level.

The application features an intuitive design. The left sidebar is used to export state and district level teacher data, prepopulated from the [NCES table generator](https://nces.ed.gov/ccd/elsi/tablegenerator.aspx). Users are then asked to add their student diversity statistics to the tool and re-upload. Finally, select a racial characteristic to generate the diversity gap map in the main panel.

Linked are a [state](/data/CALIFORNIA.csv) and [district](/data/MilwaukeeSchoolDistrictWISCONSIN.csv) level data set populated with *dummy student data* that can be used to explore the tool - give it a try!

## Software
- **R**: Data cleaning and visualization
- **Shiny**: User interface

### Click to learn more and explore the Teacher Diversity Tool Shiny Application!

<div class="projectBox">
	<a href="https://airequity.shinyapps.io/diversitydatatool/" target="_blank">
	  	<img src="/img/diversity.png" alt="Avatar" class="image" style="width:100%">
	  	<a href="https://airequity.shinyapps.io/diversitydatatool/">
		  	<div class="middle">
		    	<div class="text">Explore the Teacher Diversity Tool Shiny Application</div>
		  	</div>
	  	</a>
	</a>
</div>
