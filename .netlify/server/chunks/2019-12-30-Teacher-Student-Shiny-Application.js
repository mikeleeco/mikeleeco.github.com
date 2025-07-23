import "clsx";
const metadata = {
  "title": "Insights on Diversifying the Educator Workforce - Teacher Diversity Tool",
  "tags": ["Shiny", "R", "research", "education", "data"],
  "author": "Michael Lee",
  "date": "2019-09-24T00:00:00.000Z",
  "categories": "projects",
  "featured": true,
  "description": "Use this free, user friendly shiny application to identify and visualize diversity gaps in states and school districts.",
  "img": "/img/diversity.png",
  "url": "https://airequity.shinyapps.io/diversitydatatool"
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
function _019_12_30_Teacher_Student_Shiny_Application_md($$payload) {
  $$payload.out += `<h2>Background</h2> <p>The Center on Great Teachers and Leader’s (GTL Center) mission is to support states and districts in their efforts to grow, respect, and retain great teachers and leaders for all students, especially those from disadvantaged backgrounds.</p> <p>The GTL Center has an <a href="https://gtlcenter.org/technical-assistance/toolkits/data-tool-diversifying-the-educator-workforce" rel="nofollow">Excel data tool</a> that is used to reveal insights about the diversity of the educator workforce at the state, district, school, or EPP level. One component of this tool that was missing was a method to map and explore teacher and student ethnicity data by school district.</p> <p>The goal for this project was to develop a free, user-friendly tool to identify and visualize diversity gaps within states and school districts.</p> <h2>Development</h2> <p>For this project I acted as the lead developer in the creation of a Shiny application that would map diversity gaps at the state and district level.</p> <p>The application features an intuitive design. The left sidebar is used to export state and district level teacher data, prepopulated from the <a href="https://nces.ed.gov/ccd/elsi/tablegenerator.aspx" rel="nofollow">NCES table generator</a>. Users are then asked to add their student diversity statistics to the tool and re-upload. Finally, select a racial characteristic to generate the diversity gap map in the main panel.</p> <p>Linked are a <a href="/data/CALIFORNIA.csv">state</a> and <a href="/data/MilwaukeeSchoolDistrictWISCONSIN.csv">district</a> level data set populated with <em>dummy student data</em> that can be used to explore the tool - give it a try!</p> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and visualization</li> <li><strong>Shiny</strong>: User interface</li></ul>`;
}
export {
  _019_12_30_Teacher_Student_Shiny_Application_md as default,
  metadata
};
