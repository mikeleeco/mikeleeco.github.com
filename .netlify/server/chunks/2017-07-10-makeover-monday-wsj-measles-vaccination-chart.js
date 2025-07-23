import "clsx";
const metadata = {
  "title": "Makeover Monday: WSJ Measles Vaccination Chart",
  "author": "",
  "date": "2017-07-10",
  "categories": "posts",
  "tags": ["animation", "dataviz", "ggplot2", "makeover monday", "R"],
  "featured": true,
  "subtitle": "Recreating the WSJ measles vaccination chart as an animated cartogram",
  "description": "Using ggplot2 and animation packages to reproduce and animate the famous Wall Street Journal Measles Incidence Chart - this time as a cartogram!",
  "img": "/img/measlesCartogram.png"
};
const {
  title,
  author,
  date,
  categories,
  tags,
  featured,
  subtitle,
  description,
  img
} = metadata;
function _017_07_10_makeover_monday_wsj_measles_vaccination_chart_md($$payload) {
  $$payload.out += `<p>Last week I wrote a post about recreating the WSJ measles vaccination
chart as an animated cartogram - you can check out the full write-up of
the development here: <a href="/posts/2017-06-28-wsj-measles-vaccination-chart/">www.mikelee.co/posts/2017-06-28-wsj-measles-vaccination-chart/</a></p> <p>It was featured on DataCamp across all their <a href="https://www.linkedin.com/feed/update/urn:li:activity:6288400911173709824" rel="nofollow">social</a> <a href="https://twitter.com/DataCamp/status/882634632935735296" rel="nofollow">media</a> <a href="https://www.facebook.com/permalink.php?story_fbid=1656557754368698&amp;id=726282547396228" rel="nofollow">platforms</a></p> <ul><li>pretty neat!</li></ul> <p>A comment from one of the readers (which disqus seems to have
overwritten as I was re-initializing my site) read as so:</p> <blockquote><p>Your measles chart is a beautiful piece of work! No question. The
(vertical) sorting merely by alphabetic state listing, however, adds
nothing to the information. Even better, I think, would be to place
these stats on a US map. The animation would then show the geographic
progress of the disease. Try first on a state basis; counties would be
too confusing The ultimate presentation, however, would show the
importance of high population densities (metropolitan areas). -
Kenneth Holland.</p></blockquote> <p>That’s an interesting idea Kenneth!</p> <p>I wonder whether a similar type of graphic representation was considered
by the WSJ authors. Either way, this is a great excuse to jump on the <a href="http://www.makeovermonday.co.uk/" rel="nofollow">Makeover Monday</a> train.</p> <h2>Makeover the WSJ Measles Incidence Visualization as a Cartogram</h2> <p>Given that I’ve already completed the data acquisition and manipulation
in my previous post, I’ll jump right into plotting the state level data.
The county-level piece is an interesting idea, but I’ll leave that for
someone else!</p> <p>Here is the final result:</p> <p><img src="/img/Animation/measlesCartogram.gif" alt="Measles Animation Cartogram"/></p> <p>I customized the plot in a few ways - first, I chose to represent the
change in time via a timeline above the cartogram. Other developers have
represented change in time using years as text - such as the <a href="https://i.imgur.com/a2BEHjL.gif" rel="nofollow">Financial
Times’income distribution gif</a> (their
original post <a href="https://www.ft.com/content/98ce14ee-99a6-11e5-95c7-d47aa298f769?mhq5j=e2" rel="nofollow">here</a>)</p> <p>I selected a moving dot for a few reasons:</p> <ul><li>given the large selection of years, a frequently changing portion of
the image would be a distraction</li> <li>the movement of the dot is an intuitive representation of change
over time</li> <li>the point could be encoded with data - the color represents the
national mean incidence!</li></ul> <p>The final product is a quality alternative to the WSJ’s original
visualization, though I prefer the original representation as a full
grid over years - the drastic reduction in measles incidence is more
impactful with 30+ years of negligible incidence stacked up next to each
other.</p> <hr/>`;
}
export {
  _017_07_10_makeover_monday_wsj_measles_vaccination_chart_md as default,
  metadata
};
