import "clsx";
const metadata = {
  "title": "Bar Chart Race - Changing Demographics in K–12 Public School Enrollment",
  "author": "",
  "date": "2020-07-09",
  "categories": "animation",
  "featured": true,
  "tags": [
    "animation",
    "dataviz",
    "ggplot2",
    "gganimate",
    "R",
    "NCES",
    "bar"
  ],
  "subtitle": "Animation created using ggplot2 and animation packages for social media distribution",
  "description": "Total enrollment in public elementary and secondary schools has grown since 1995, but it has not grown across all racial/ethnic groups. As such, racial/ethnic distributions of public school students across the country have shifted.",
  "img": "/img/barChartRaceK12Percent.png"
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
function _020_07_09_racing_bar_chart_enrollment_postsecondary_md($$payload) {
  $$payload.out += `<p>Linked here: <a href="https://nces.ed.gov/blogs/nces/post/bar-chart-race-changing-demographics-in-postsecondary-enrollment" rel="nofollow">https://nces.ed.gov/blogs/nces/post/bar-chart-race-changing-demographics-in-postsecondary-enrollment</a></p> <hr/>`;
}
export {
  _020_07_09_racing_bar_chart_enrollment_postsecondary_md as default,
  metadata
};
