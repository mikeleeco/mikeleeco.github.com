import "clsx";
const metadata = {
  "title": "Automated Reports - Nevada Department of Education",
  "tags": [
    "LaTeX",
    "R",
    "ggplot2",
    "education",
    "automated reports",
    "508 compliance"
  ],
  "author": "Michael Lee",
  "date": "2019-12-30T00:00:00.000Z",
  "categories": "projects",
  "featured": false,
  "description": "Automate the production of over 700 reports embedded with customized text, tables, visualizations, and 508 compliance tags.",
  "img": "/img/nevada.png",
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
function _019_12_30_Automated_Report_Nevada_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>Each Fall and Spring the Nevada Department of Education disseminates a summary report detailing results from a social-emotional learning survey. The report uses a standard template populated with customized text, data values, and data visualizations. Previous productions of these reports were created by a separate contractor. One such example is <a href="/img/SmithValleySchoolsElementary56.pdf">linked here</a>.</p> <h2>Development</h2> <p>The goal for this project was to automate the production of each school’s customized report. One special (read: complex) consideration of this report generation was a requirement for 508 compliance. This involves provided specific “tags” for each report element. For example, each text block is tagged with a <code>P</code>, each header is tagged with it’s respective header type (<code>H1</code>, <code>H2</code>, etc), and each visualization has alt text describing the visualization and it’s respective data labels/values. I acted as development lead; translating requests from the content area team into the graphic design and data quality control of the reports. Additionally, my role as development lead involved delegating tasks to the team. This involved recreating and improving upon the design of the previous CMSD report. The typesetting was coded in LaTeX and embedded with the Open Sans family to provide an free-to-use font for clarity and emphasis. The figures were generated using the <code>ggplot2</code> and base R graphics packages. Finally, an Rmarkdown file was used to seamlessly integrate each school’s pdf visualizations into the school level summary report pdf.</p> <p>The updated report is <a href="/img/Lovelock_Elementary_School.pdf">linked here</a>.</p> <h3>Comparison of Previous and New Report</h3> <div class="row"><div class="column"><img src="/img/nevadaOriginal.gif" alt="Original Nevada Report" style="width:100%"/></div> <div class="column"><img src="/img/nevadaShell.gif" alt="Updated Nevada Report" style="width:100%"/></div></div> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and data visualization production</li> <li><strong>LaTeX</strong>: Document preparation, typesetting, and 508 tagging</li></ul>`;
}
export {
  _019_12_30_Automated_Report_Nevada_md as default,
  metadata
};
