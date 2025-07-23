import "clsx";
const metadata = {
  "title": "International Activities Program Highlights - PISA",
  "tags": ["D3.js", "R", "research", "education", "data", "pisa", "iap"],
  "author": "Michael Lee",
  "date": "2019-12-02T00:00:00.000Z",
  "categories": "projects",
  "featured": false,
  "description": "Explore how U.S. 8th grade students computer and information literacy and computational thinking compared internationally in 2018.",
  "img": "/img/pisa.png",
  "url": "https://nces.ed.gov/surveys/pisa"
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
function _019_12_02_IAP_PISA_Summary_Release_md($$payload) {
  $$payload.out += `<h2>Background (via <a href="https://nces.ed.gov/surveys/pisa/" rel="nofollow">https://nces.ed.gov/surveys/pisa/</a>)</h2> <p>The Program for International Student Assessment (PISA) is an international assessment that measures 15-year-old students’ reading, mathematics, and science literacy every three years. First conducted in 2000, the major domain of study rotates between reading, mathematics, and science in each cycle. PISA also includes measures of general or cross-curricular competencies, such as collaborative problem solving. By design, PISA emphasizes functional skills that students have acquired as they near the end of compulsory schooling. PISA is coordinated by the Organization for Economic Cooperation and Development (OECD), an intergovernmental organization of industrialized countries, and is conducted in the United States by NCES. Data collection for the most recent assessment was completed in Fall 2018.</p> <p>PISA 2018 assessed students’science, reading, and mathematics literacy in about 80 countries and education systems. Reading was the focal subject of the 2018 data collection, as it was in 2009. PISA 2018 also included the optional assessment of financial literacy which the United States administered. Data from the core 2018 reading, mathematics, and science literacy assessment are now available. Data for financial literacy will be released in spring 2020.</p> <p>The most recent PISA results are from 2018 and are available here. More information about PISA and resources, including the OECD’s PISA reports, PISA assessment frameworks, and international data files, are available at the OECD’s <a href="https://nces.ed.gov/transfer.asp?location=www.oecd.org/pisa/" rel="nofollow">website</a>.</p> <h2>Development</h2> <p>For this project I acted as data and visualization specialist on a team of designers, web developers, and content area experts to produce this summary release for the National Center for Education Statistics website. The PISA summary release is designed to assist the general public in better understanding the most recent results of national and international surveys, embedded with static and interactive visualizations.</p> <h2>Software</h2> <ul><li><strong>R</strong>: Data cleaning and json production</li> <li><strong>D3.js</strong>: Visualization</li></ul>`;
}
export {
  _019_12_02_IAP_PISA_Summary_Release_md as default,
  metadata
};
