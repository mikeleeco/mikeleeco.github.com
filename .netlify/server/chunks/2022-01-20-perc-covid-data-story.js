import "clsx";
const metadata = {
  "title": "PERC Covid Data Story",
  "tags": [
    "ggplot2",
    "R",
    "research",
    "data visualization",
    "education",
    "data",
    "perc",
    "covid"
  ],
  "author": "Michael Lee",
  "date": "2022-01-20T00:00:00.000Z",
  "categories": "projects",
  "featured": true,
  "description": "A data story from the National Survey of Public Education's Response to COVID-19.",
  "img": "/img/percCovid.png",
  "url": "https://www.air.org/perc-data-story"
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
function _022_01_20_perc_covid_data_story_md($$payload) {
  $$payload.out += `<h2>Background (via <a href="https://www.air.org/perc-data-story" rel="nofollow">https://www.air.org/perc-data-story</a>)</h2> <p>Looking Back to Go Forward: Lessons Learned About Teaching and Learning During the Pandemic. A data story from the National Survey of Public Education’s Response to COVID-19</p> <h2>Development</h2> <p>For this project I acted as data story development coordinator and visualization specialist. I coordinated project development between the content area experts (researchers who conducted the study) and the data story development team creating the web product, consisting of designers and web developers. Provided feedback to both teams regarding design of the data story, developed exploratory visualization products using ggplot2, and automated the data analysis pipeline for the web developer.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning, data exploration, data visualization, and json production</li></ul>`;
}
export {
  _022_01_20_perc_covid_data_story_md as default,
  metadata
};
