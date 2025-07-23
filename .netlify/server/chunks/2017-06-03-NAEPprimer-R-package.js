import "clsx";
const metadata = {
  "title": "NAEPprimer - R package (CRAN)",
  "tags": ["R", "research", "education", "data"],
  "author": "Michael Lee",
  "date": "2017-06-03T00:00:00.000Z",
  "categories": "projects",
  "featured": false,
  "description": "Processing and analysis of NCES large-scale education data with appropriate procedures.",
  "img": "/img/NAEP.png",
  "url": "https://cran.r-project.org/web/packages/NAEPprimer/index.html"
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
function _017_06_03_NAEPprimer_R_package_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>National Assessment of Educational Progress (NAEP) data sets from the National Center for Education Statistics (NCES) require special statistical methods to analyze. Because of their scope and complexity, users with computers that have insufficient memory to read in entire NAEP data sets might have trouble conducting analyses without having to write special code to read in just the appropriate variables.</p> <h2>Goal</h2> <p>Develop an R package that would contain a random mini-sample of real data from the 2005 grade 8 mathematics assessment that have been approved for public use. This includes two data files, as well as a system control file that corresponds to each data file to read in and format for further processing. The NAEP Primer is designed to simplify access to the NAEP database and make its technologies more user-friendly in NAEP data analysis.</p> <h2>Development</h2> <p>I acted as a developer on the package including the programming of R functions, documentation, and workshop content.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Reusable R functions and documentation</li></ul> <h3>For more info:</h3> <ul><li><a href="https://cran.r-project.org/web/packages/NAEPprimer/index.html" rel="nofollow">https://cran.r-project.org/web/packages/NAEPprimer/index.html</a></li> <li><a href="https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2011463" rel="nofollow">https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2011463</a></li></ul>`;
}
export {
  _017_06_03_NAEPprimer_R_package_md as default,
  metadata
};
