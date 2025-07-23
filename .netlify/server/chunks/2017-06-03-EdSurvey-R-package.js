import "clsx";
const metadata = {
  "title": "EdSurvey - R package (CRAN)",
  "tags": ["R", "research", "education", "data"],
  "author": "Michael Lee",
  "date": "2017-06-03T00:00:00.000Z",
  "categories": "projects",
  "featured": true,
  "description": "Processing and analysis of NCES large-scale education data with appropriate procedures.",
  "img": "/img/edsurvey.png",
  "url": "https://github.com/American-Institutes-for-Research/EdSurvey"
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
function _017_06_03_EdSurvey_R_package_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>National Assessment of Educational Progress (NAEP) data sets from the National Center for Education Statistics (NCES) require special statistical methods to analyze. Because of their scope and complexity, users with computers that have insufficient memory to read in entire NAEP data sets might have trouble conducting analyses without having to write special code to read in just the appropriate variables.</p> <h2>Goal</h2> <p>Develop an R package that gives users functions to perform analyses that account for both complex sample survey designs and the use of plausible values – behind the scenes and without any special tuning by the user.</p> <h2>Development</h2> <p>I acted as a developer on the package including the programming of R functions, documentation, and workshop content.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Reusable R functions and documentation</li></ul> <h2>For more info:</h2> <ul><li><a href="https://github.com/American-Institutes-for-Research/EdSurvey" rel="nofollow">https://github.com/American-Institutes-for-Research/EdSurvey</a></li> <li><a href="https://naep-research.airprojects.org/Explore-Featured-Work/EdSurvey" rel="nofollow">https://naep-research.airprojects.org/Explore-Featured-Work/EdSurvey</a></li> <li><a href="https://cran.r-project.org/web/packages/EdSurvey/index.html" rel="nofollow">https://cran.r-project.org/web/packages/EdSurvey/index.html</a></li> <li><a href="http://www.air.org/project/nces-data-r-project-edsurvey" rel="nofollow">http://www.air.org/project/nces-data-r-project-edsurvey</a></li> <li><a href="https://naep-research.airprojects.org/Portals/0/EdSurvey_A_Users_Guide/_book/index.html" rel="nofollow">https://naep-research.airprojects.org/Portals/0/EdSurvey_A_Users_Guide/_book/index.html</a></li></ul>`;
}
export {
  _017_06_03_EdSurvey_R_package_md as default,
  metadata
};
