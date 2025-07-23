import "clsx";
const metadata = {
  "title": "EdSurvey: A User's Guide Book",
  "tags": ["R", "research", "education", "book", "edsurvey", "bookdown"],
  "author": "Michael Lee",
  "date": "2022-02-17T00:00:00.000Z",
  "categories": "projects",
  "featured": true,
  "description": "Web book and user's manual for the EdSurvey R package.",
  "img": "/img/cover.png",
  "url": "https://naep-research.airprojects.org/Portals/0/EdSurvey_A_Users_Guide/_book/index.html"
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
function _022_02_17_edsurvey_book_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>National Assessment of Educational Progress (NAEP) data sets from the National Center for Education Statistics (NCES) require special statistical methods to analyze. Because of their scope and complexity, users with computers that have insufficient memory to read in entire NAEP data sets might have trouble conducting analyses without having to write special code to read in just the appropriate variables.</p> <h2>Goal</h2> <p>Develop an R package that gives users functions to perform analyses that account for both complex sample survey designs and the use of plausible values – behind the scenes and without any special tuning by the user.</p> <h2>Development</h2> <p>Led development of the EdSurvey book using the <a href="https://github.com/rstudio/bookdown" rel="nofollow"><code>bookdown</code> package</a>. Created a customized publication style following branding guide using the <code>bs4_book()</code> template. Wrote technical concepts in plain language covering the the <code>EdSurvey</code> package workflow.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Reusable R functions and documentation</li></ul> <h2>For more info:</h2> <ul><li><a href="https://naep-research.airprojects.org/Portals/0/EdSurvey_A_Users_Guide/_book/index.html" rel="nofollow">https://naep-research.airprojects.org/Portals/0/EdSurvey_A_Users_Guide/_book/index.html</a></li> <li><a href="https://github.com/American-Institutes-for-Research/EdSurvey_A_Users_Guide/" rel="nofollow">https://github.com/American-Institutes-for-Research/EdSurvey_A_Users_Guide/</a></li> <li><a href="https://naep-research.airprojects.org/Explore-Featured-Work/EdSurvey" rel="nofollow">https://naep-research.airprojects.org/Explore-Featured-Work/EdSurvey</a></li></ul>`;
}
export {
  _022_02_17_edsurvey_book_md as default,
  metadata
};
