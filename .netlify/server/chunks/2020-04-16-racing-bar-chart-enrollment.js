import "clsx";
const metadata = {
  "title": "Bar Chart Race - States With the Highest Public School Enrollment",
  "author": "",
  "date": "2020-04-16",
  "categories": "animation",
  "featured": false,
  "tags": [
    "animation",
    "dataviz",
    "ggplot2",
    "gganimate",
    "R",
    "NCES",
    "barchartrace"
  ],
  "subtitle": "Animation created using ggplot2 and animation packages for social media distribution",
  "description": "Since 1870, states populations and public school enrollment have increased, with differential growth across the country.",
  "img": "/img/barChartRaceState.png"
};
const {
  title,
  author,
  date,
  categories,
  featured,
  tags,
  subtitle,
  description,
  img
} = metadata;
function _020_04_16_racing_bar_chart_enrollment_md($$payload) {
  $$payload.out += `<p>Linked here: <a href="https://nces.ed.gov/blogs/nces/post/racing-bar-chart" rel="nofollow">https://nces.ed.gov/blogs/nces/post/racing-bar-chart</a></p> <hr/> <h2>Full image:</h2> <iframe width="1600" height="900" src="https://www.youtube.com/embed/aOVBVSordsQ" frameborder="0" title="Racing Bar Chart. Since 1870, states populations and public school enrollment have increased, with differential growth across the country." allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <hr/>`;
}
export {
  _020_04_16_racing_bar_chart_enrollment_md as default,
  metadata
};
