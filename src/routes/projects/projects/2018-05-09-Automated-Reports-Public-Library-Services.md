---
title: 'Automated Reports - IMLS, Public Libraries Survey'
tags: [LaTeX, R, ggplot2, education, automated reports]
author: 'Michael Lee'
date: 2018-05-09
categories: 'projects'
featured: false
description: Automate the production of over 50 reports embedded with customized text, tables, and visualizations.
img: '/img/alReport.png'
url: ''
---

## Background

The Institute of Museum and Library Services' mission is to inspire libraries and museums to advance innovation, lifelong learning, and cultural and civic engagement. Each year it conducts a survey of the nation’s approximately 123,000 libraries and 35,000 museums to provide a snapshot of national and state-level trends.

## Development

The goal for this project was to automate the production of each state and jurisdiction's customized report. I acted as an R and LaTeX developer in creation of the template laying out these summary results. The typesetting was coded in LaTeX and embedded with the Myriad Pro and Museo Slab families for clarity and emphasis. The figures were generated using base R graphics. Finally, an Rmarkdown file was used to seamlessly integrate each state's visualizations into the summary report pdf.

Check out the Alabama version of the report [here](/img/ALReport.pdf).

## Software

- **R**: Data cleaning and data visualization production
- **LaTeX**: Document preparation and typesetting
