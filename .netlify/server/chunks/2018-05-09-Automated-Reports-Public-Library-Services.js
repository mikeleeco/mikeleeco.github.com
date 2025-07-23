import "clsx";
const metadata = {
  "title": "Automated Reports - IMLS, Public Libraries Survey",
  "tags": ["LaTeX", "R", "ggplot2", "education", "automated reports"],
  "author": "Michael Lee",
  "date": "2018-05-09T00:00:00.000Z",
  "categories": "projects",
  "featured": false,
  "description": "Automate the production of over 50 reports embedded with customized text, tables, and visualizations.",
  "img": "/img/alReport.png",
  "url": ""
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
function _018_05_09_Automated_Reports_Public_Library_Services_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>The Institute of Museum and Library Services’ mission is to inspire libraries and museums to advance innovation, lifelong learning, and cultural and civic engagement. Each year it conducts a survey of the nation’s approximately 123,000 libraries and 35,000 museums to provide a snapshot of national and state-level trends.</p> <h2>Development</h2> <p>The goal for this project was to automate the production of each state and jurisdiction’s customized report. I acted as an R and LaTeX developer in creation of the template laying out these summary results. The typesetting was coded in LaTeX and embedded with the Myriad Pro and Museo Slab families for clarity and emphasis. The figures were generated using base R graphics. Finally, an Rmarkdown file was used to seamlessly integrate each state’s visualizations into the summary report pdf.</p> <p>Check out the Alabama version of the report <a href="/img/ALReport.pdf">here</a>.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and data visualization production</li> <li><strong>LaTeX</strong>: Document preparation and typesetting</li></ul>`;
}
export {
  _018_05_09_Automated_Reports_Public_Library_Services_md as default,
  metadata
};
