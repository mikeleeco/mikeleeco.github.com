import "clsx";
const metadata = {
  "title": "Automated Reports - Cleveland Metropolitan School District",
  "tags": ["LaTeX", "R", "ggplot2", "education", "automated reports"],
  "author": "Michael Lee",
  "date": "2018-11-20T00:00:00.000Z",
  "categories": "projects",
  "featured": false,
  "description": "Automate the production of over 400 reports embedded with customized text, tables, and visualizations.",
  "img": "/img/cmsd.png",
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
function _018_11_20_Automated_Report_Cleveland_Metropolitan_School_District_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>Each Fall and Spring the Cleveland Metropolitan School District disseminates a summary report detailing results from a survey assessing four social-emotional learning constructs within elementary, middle and high schools. The report uses a standard template populated with customized text, data values, and data visualizations. Previous productions of these reports were created by a separate contractor; one such example is <a href="/img/ES.pdf">linked here</a>.</p> <h2>Development</h2> <p>The goal for this project was to automate the production of each school’s customized report. I acted as the lead graphic designer and data specialist on a team of developers to produce these summary results. This involved recreating and improving upon the design of the previous CMSD report. The typesetting was coded in LaTeX and embedded with the Open Sans family to provide an free-to-use font for clarity and emphasis. The figures were generated using the <code>ggplot2</code> and base R graphics packages. Finally, an Rmarkdown file was used to seamlessly integrate each school’s pdf visualizations into the school level summary report pdf.</p> <p>Check out the improved report <a href="/img/cflShell.pdf">here</a>.</p> <h3>Comparison of Previous and New Report</h3> <div class="row"><div class="column"><img src="/img/cflOriginal.gif" alt="Original CFL Report" style="width:100%"/></div> <div class="column"><img src="/img/cflShell.gif" alt="Updated CFL Report" style="width:100%"/></div></div> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and data visualization production</li> <li><strong>LaTeX</strong>: Document preparation and typesetting</li></ul>`;
}
export {
  _018_11_20_Automated_Report_Cleveland_Metropolitan_School_District_md as default,
  metadata
};
