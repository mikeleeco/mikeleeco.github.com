import "clsx";
const metadata = {
  "title": "Stacked Area Chart - US Education Enrollment",
  "author": "",
  "date": "2018-09-05",
  "categories": "animation",
  "featured": true,
  "tags": [
    "animation",
    "dataviz",
    "ggplot2",
    "gganimate",
    "R",
    "NCES",
    "stackedarea"
  ],
  "subtitle": "Animation created using ggplot2 and animation packages for social media distribution",
  "description": "Enrollment in elementary, secondary, and postsecondary institutions: Selected years, 1869-70 through 2016",
  "img": "/img/public_Enrollment.png"
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
function _018_09_05_stacked_area_chart_enrollment_md($$payload) {
  $$payload.out += `<p>Linked here: <a href="https://nces.ed.gov/blogs/nces/post/celebrating-150-years-of-education-data" rel="nofollow">https://nces.ed.gov/blogs/nces/post/celebrating-150-years-of-education-data</a></p> <hr/>`;
}
export {
  _018_09_05_stacked_area_chart_enrollment_md as default,
  metadata
};
