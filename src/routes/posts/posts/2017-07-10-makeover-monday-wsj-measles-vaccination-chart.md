---
title: 'Makeover Monday: WSJ Measles Vaccination Chart'
author: ''
date: '2017-07-10'
categories: posts
tags:
  - animation
  - dataviz
  - ggplot2
  - makeover monday
  - R
featured: true
subtitle: 'Recreating the WSJ measles vaccination chart as an animated cartogram'
description: 'Using ggplot2 and animation packages to reproduce and animate the famous Wall Street Journal Measles Incidence Chart - this time as a cartogram!'
img: '/img/measlesCartogram.gif'
---

Last week I wrote a post about recreating the WSJ measles vaccination
chart as an animated cartogram - you can check out the full write-up of
the development here:
[www.mikelee.co/posts/2017-06-28-wsj-measles-vaccination-chart/](/posts/2017-06-28-wsj-measles-vaccination-chart/)

It was featured on DataCamp across all their
[social](https://www.linkedin.com/feed/update/urn:li:activity:6288400911173709824)
[media](https://twitter.com/DataCamp/status/882634632935735296)
[platforms](https://www.facebook.com/permalink.php?story_fbid=1656557754368698&id=726282547396228)

- pretty neat!

A comment from one of the readers (which disqus seems to have
overwritten as I was re-initializing my site) read as so:

> Your measles chart is a beautiful piece of work! No question. The
> (vertical) sorting merely by alphabetic state listing, however, adds
> nothing to the information. Even better, I think, would be to place
> these stats on a US map. The animation would then show the geographic
> progress of the disease. Try first on a state basis; counties would be
> too confusing The ultimate presentation, however, would show the
> importance of high population densities (metropolitan areas). -
> Kenneth Holland.

That’s an interesting idea Kenneth!

I wonder whether a similar type of graphic representation was considered
by the WSJ authors. Either way, this is a great excuse to jump on the
[Makeover Monday](http://www.makeovermonday.co.uk/) train.

## Makeover the WSJ Measles Incidence Visualization as a Cartogram

Given that I’ve already completed the data acquisition and manipulation
in my previous post, I’ll jump right into plotting the state level data.
The county-level piece is an interesting idea, but I’ll leave that for
someone else!

Here is the final result:

![Measles Animation Cartogram](/img/measlesCartogram.gif)

I customized the plot in a few ways - first, I chose to represent the
change in time via a timeline above the cartogram. Other developers have
represented change in time using years as text - such as the [Financial
Times'income distribution gif](https://i.imgur.com/a2BEHjL.gif) (their
original post
[here](https://www.ft.com/content/98ce14ee-99a6-11e5-95c7-d47aa298f769?mhq5j=e2))

I selected a moving dot for a few reasons:

- given the large selection of years, a frequently changing portion of
  the image would be a distraction
- the movement of the dot is an intuitive representation of change
  over time
- the point could be encoded with data - the color represents the
  national mean incidence!

The final product is a quality alternative to the WSJ’s original
visualization, though I prefer the original representation as a full
grid over years - the drastic reduction in measles incidence is more
impactful with 30+ years of negligible incidence stacked up next to each
other.

---

Interested in learning more? Hire me to consult on your next project,
follow me on [twitter](https://twitter.com/mikeleeco),
or contact me via [email](mailto:mdlee12@gmail.com). All inquiries
welcome!
