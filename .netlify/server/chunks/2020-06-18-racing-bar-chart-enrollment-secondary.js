import "clsx";
const metadata = {
  "title": "Bar Chart Race - Changing Demographics in Postsecondary Enrollment",
  "author": "",
  "date": "2020-06-18",
  "categories": "animation",
  "featured": false,
  "tags": [
    "animation",
    "dataviz",
    "ggplot2",
    "gganimate",
    "R",
    "NCES",
    "racingbar"
  ],
  "subtitle": "Animation created using ggplot2 and animation packages for social media distribution",
  "description": "Fall enrollment of U.S. residents in degree-granting postsecondary institutions from 1976 to 2028 by race/ethnicity.",
  "img": "/img/barChartRacePostSec.png"
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
function _020_06_18_racing_bar_chart_enrollment_secondary_md($$payload) {
  $$payload.out += `<p>Linked here: <a href="https://nces.ed.gov/blogs/nces/post/racing-bar-chart" rel="nofollow">https://nces.ed.gov/blogs/nces/post/racing-bar-chart</a></p> <hr/>`;
}
export {
  _020_06_18_racing_bar_chart_enrollment_secondary_md as default,
  metadata
};
