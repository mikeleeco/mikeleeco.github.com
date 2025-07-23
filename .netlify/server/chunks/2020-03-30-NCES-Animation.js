import "clsx";
const metadata = {
  "title": "NCES Social Media Outreach  - Animation",
  "tags": ["R", "research", "education", "data"],
  "author": "Michael Lee",
  "date": "2020-03-30T00:00:00.000Z",
  "categories": "projects",
  "featured": true,
  "description": "Broadcast and disseminate the education-related data of the center to the public through the use of animation.",
  "img": "/img/ncesAnimation.png",
  "url": "https://nces.ed.gov/blogs/nces/post/trends-in-graduate-student-loan-debt"
};
const {
  title,
  tags,
  author,
  date,
  categories,
  featured,
  description,
  img,
  url
} = metadata;
function _020_03_30_NCES_Animation_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>The National Center for Education Statistics (NCES) is the primary federal entity for collecting and analyzing data related to education in the United States. The AIR social media team uses <a href="https://twitter.com/EdNCES" rel="nofollow">https://twitter.com/EdNCES</a> to broadcast and disseminate the education-related data of the center to the public.</p> <h2>Goal</h2> <p>In an effort to expand the outreach and discoverability of NCES research, the social media team sought to make NCES’ static publication figures more impactful through the use of animation. As new figure types are introduced (line, bar, stacked bar, etc) code scripts can then be reused to build an inventory of animation types for other data sources.</p> <h2>Development</h2> <p>For this project I acted as the lead developer in the creation of a animations in collaboration with a designer and AIR’s social media team. Designers at AIR have worked with NCES to create a style guide for social media and presentation materials, and I’ve translated those guidelines into data-driven gifs with R and ImageMagick.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and visualization</li> <li><strong>ImageMagick</strong>: Animation production</li></ul> <h2>For more info:</h2> <ul><li><a href="https://nces.ed.gov/blogs/nces/post/trends-in-graduate-student-loan-debt" rel="nofollow">https://nces.ed.gov/blogs/nces/post/trends-in-graduate-student-loan-debt</a></li> <li><a href="https://twitter.com/EdNCES" rel="nofollow">https://twitter.com/EdNCES</a></li> <li><a href="https://mikelee.co/animation/" rel="nofollow">https://mikelee.co/animation/</a></li></ul>`;
}
export {
  _020_03_30_NCES_Animation_md as default,
  metadata
};
