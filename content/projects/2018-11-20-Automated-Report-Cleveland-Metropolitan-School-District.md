---
title: "Automated Reports - Cleveland Metropolitan School District"
tags: [LaTeX, R, ggplot2, education, automated reports]
author: "Michael Lee"
date: 2018-11-20
categories: ["projects"]
comments: true
subtitle: Automate the production of over 400 reports embedded with customized text, tables, and visualizations.
bigimg: [{src: "/img/cmsd.png", desc: "CMSD Report"}]
twitterimg: "https://www.mikelee.co/img/cmsd.png"
---

## Background
Each Fall and Spring the Cleveland Metropolitan School District disseminates a summary report detailing results from a survey assessing four social-emotional learning constructs within elementary, middle and high schools. The report uses a standard template populated with customized text, data values, and data visualizations. Previous productions of these reports were created by a separate contractor; one such example is [linked here](/img/ES.pdf).

## Development
The goal for this project was to automate the production of each school's customized report. I acted as the lead graphic designer and data specialist on a team of developers to produce these summary results. This involved recreating and improving upon the design of the previous CMSD report. The typesetting was coded in LaTeX and embedded with the Open Sans family to provide an free-to-use font for clarity and emphasis. The figures were generated using the `ggplot2` and base R graphics packages. Finally, an Rmarkdown file was used to seamlessly integrate each school's pdf visualizations into the school level summary report pdf.

Check out the improved report [here](/img/cflShell.pdf).

### Comparison of Previous and New Report

<div class="row">
  <div class="column">
    <img src="/img/cflOriginal.gif" alt = "Original CFL Report" style="width:100%">
  </div>
  <div class="column">
    <img src="/img/cflShell.gif" alt = "Updated CFL Report" style="width:100%">
  </div>
</div>


## Software
- **R**: Data cleaning and data visualization production
- **LaTeX**: Document preparation and typesetting

### Click the image below to check out a sample Cleveland report!

<div class="projectBox">
  <a href="/img/cflShell.pdf" target="_blank">
      <img src="/img/cmsd.png" alt="Avatar" class="image" style="width:100%">
      <a href="/img/cflShell.pdf">
        <div class="middle">
          <div class="text">Click to view a sample Cleveland report.</div>
        </div>
      </a>
  </a>
</div>
