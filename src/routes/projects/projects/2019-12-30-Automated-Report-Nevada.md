---
title: 'Automated Reports - Nevada Department of Education'
tags: [LaTeX, R, ggplot2, education, automated reports, 508 compliance]
author: 'Michael Lee'
date: 2019-12-30
categories: 'projects'
featured: false
description: Automate the production of over 700 reports embedded with customized text, tables, visualizations, and 508 compliance tags.
img: '/img/nevada.png'
url: ''
---

## Background

Each Fall and Spring the Nevada Department of Education disseminates a summary report detailing results from a social-emotional learning survey. The report uses a standard template populated with customized text, data values, and data visualizations. Previous productions of these reports were created by a separate contractor. One such example is [linked here](/img/SmithValleySchoolsElementary56.pdf).

## Development

The goal for this project was to automate the production of each school's customized report. One special (read: complex) consideration of this report generation was a requirement for 508 compliance. This involves provided specific "tags" for each report element. For example, each text block is tagged with a `P`, each header is tagged with it's respective header type (`H1`, `H2`, etc), and each visualization has alt text describing the visualization and it's respective data labels/values. I acted as development lead; translating requests from the content area team into the graphic design and data quality control of the reports. Additionally, my role as development lead involved delegating tasks to the team. This involved recreating and improving upon the design of the previous CMSD report. The typesetting was coded in LaTeX and embedded with the Open Sans family to provide an free-to-use font for clarity and emphasis. The figures were generated using the `ggplot2` and base R graphics packages. Finally, an Rmarkdown file was used to seamlessly integrate each school's pdf visualizations into the school level summary report pdf.

The updated report is [linked here](/img/Lovelock_Elementary_School.pdf).

### Comparison of Previous and New Report

<div class="row">
  <div class="column">
    <img src="/img/nevadaOriginal.gif" alt = "Original Nevada Report" style="width:100%">
  </div>
  <div class="column">
    <img src="/img/nevadaShell.gif" alt = "Updated Nevada Report" style="width:100%">
  </div>
</div>

## Software

- **R**: Data cleaning and data visualization production
- **LaTeX**: Document preparation, typesetting, and 508 tagging
