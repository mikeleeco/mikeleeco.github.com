<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";
  import Seo from "$lib/Seo.svelte";
</script>

<Transition />
<Seo />

<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-heading transition-content centered"
  />
  <article>
    <h1 class="page-title transition-title overflow-hidden">Resume</h1>
    <h4 class="page-subtitle  transition-title">
      Web applications, graphics, and data-driven projects.
    </h4>
    <div class="transition-content slug">
      <h2 id="professional-profile">Professional Profile</h2>
      <p>
        A developer living in the Washington, DC area specializing in the
        creation of graphics, web applications, and analytical tools. I teach
        workshops on R programming and data visualization and also enjoy baking
        baklava, biking, and playing word games.
      </p>
      <h2 id="specialties">Specialties</h2>
      <ul>
        <li>Data Visualization</li>
        <li>Data Analysis &amp; Processing</li>
        <li>R Package Development</li>
        <li>Web Development</li>
        <li>Web Scraping</li>
        <li>Technical Writing</li>
        <li>Workshop Moderation</li>
      </ul>
      <h2 id="skills-and-tools">Skills and Tools</h2>
      <h3 id="data-toolbox">Data Toolbox</h3>
      <ul>
        <li>R</li>
        <li>D3.js</li>
        <li>SQL</li>
        <li>Shiny</li>
        <li>Excel</li>
        <li>LaTeX</li>
      </ul>
      <h3 id="web-development">Web Development</h3>
      <ul>
        <li>Javascript</li>
        <li>Svelte</li>
        <li>React</li>
        <li>React Native</li>
        <li>HTML5</li>
        <li>CSS</li>
      </ul>
      <h2 id="experience">Experience</h2>
      <h4 id="researcher-american-institutes-for-research">
        Researcher, American Institutes for Research
      </h4>
      <p>2019 - 2022</p>
      <ul>
        <li>
          Founding and lead developer of InCompass, an R shiny data tool to
          analyze International Large-Scale Assessments (ILSAs) data. Co-leads
          weekly meetings and directs development tasks to a team of four R
          Shiny programmers. Performs feature request reviews and facilitates
          development triaging/workflow on github. Deploys shiny applications to
          AIR internal server and performs debugs with cloud architect.
        </li>
        <li>
          Develops sophisticated visualization products for NCES, including the
          interactive NAEP Results Display (iNRD) and over 20 different
          animations displaying NCES data shared on the <a
            href="https://www.twitter.com/EdNCES">@EdNCES</a
          > feed.
        </li>
        <li>
          Designed automated production systems for custom reports and
          visualizations of student and teacher level survey data, including <a
            href="/projects/2019-06-28-IAP-TALIS-Summary-Release/">TALIS</a
          >,
          <a href="/projects/2021-01-20-IAP-TIMSS-Summary-Release/">TIMSS</a>,
          <a href="/projects/2019-11-05-IAP-ICILS-Summary-Release/">ICILS</a>,
          and
          <a href="/projects/2019-12-02-IAP-PISA-Summary-Release/">PISA</a>
          using R to manipulate and reshape survey results and d3.js to create interactive
          visualizations for IAP study websites. Designed automated production systems
          for custom reports and visualizations of student and teacher level survey
          data, including
          <a href="https://nces.ed.gov/surveys/talis/talis2018/">TALIS</a>,
          <a
            href="https://nces.ed.gov/timss/results19/index.asp#/math/intlcompare"
            >TIMSS</a
          >,
          <a href="https://nces.ed.gov/surveys/icils/icils2018/theme1.asp"
            >ICILS</a
          >, and
          <a href="https://nces.ed.gov/surveys/pisa/pisa2018/index.asp#/"
            >PISA</a
          > using R to manipulate and reshape survey results and d3.js to create
          interactive visualizations for IAP study websites.
        </li>
        <li>
          Contributed to the development of <a
            href="https://cran.r-project.org/web/packages/EdSurvey/index.html"
            >EdSurvey</a
          > - an R packages used for analyzing education survey and assessment data
          from the National Center for Education Statistics (NCES). Led 10+ training
          workshops and walkthroughs regarding R programming and the EdSurvey package.
        </li>
      </ul>
      <h4 id="research-associate-american-institutes-for-research">
        Research Associate, American Institutes for Research
      </h4>
      <p>2015 - 2019</p>
      <ul>
        <li>
          Contributed to the development of EdSurvey and <a
            href="https://cran.r-project.org/web/packages/NAEPprimer/index.html"
            >NAEPprimer</a
          >.
        </li>
        <li>
          Founding and lead developer of iNRD, an interactive shiny application
          that visualizes NAEP mathematics and reading results from 1990 to
          2019, including delegation of tasks and code reviews.
        </li>
        <li>
          Collaborated with designers to automate the production of reports for
          over 10 unique internal and external clients, each featuring a
          custom-designed LaTeX template embedded with unique ggplot2
          visualizations illustrating data trends
        </li>
        <li>
          Programmed custom interactive figures for visual journalism articles
          in D3.js.
        </li>
        <li>
          Wrote R scripts to review data sets in longitudinal surveys to meet
          compliance standards.
        </li>
      </ul>
      <h4 id="freelancer">Freelancer</h4>
      <p>2014 – 2015</p>
      <ul>
        <li>
          6+ months of relevant experience working independently on data
          projects
        </li>
        <li>
          Strong communication (both written and verbal) with colleagues
          regarding project outcomes
        </li>
        <li>
          Scraped thousands of records from HTML tables to create a database for
          analyses
        </li>
        <li>
          Applied statistical models to project earnings for client assets
        </li>
      </ul>
      <h4 id="data-analyst-americorps-vista">Data Analyst, Americorps VISTA</h4>
      <p>2013 - 2014</p>
      <ul>
        <li>
          Analyzed student performance data and literature to identify trends
          and answer key questions for staff and board members
        </li>
        <li>
          Contributed to the development of a report summarizing student
          behavior, course grades, and performance on assessments, accommodating
          for parents and guardians of low-literacy
        </li>
        <li>
          Supported data handling and validation to provide student performance
          information to staff
        </li>
        <li>
          Documented operating procedures for the data department to enhance
          data infrastructure
        </li>
      </ul>
      <h4 id="special-education-teacher-milwaukee-public-schools">
        Special Education Teacher, Milwaukee Public Schools
      </h4>
      <p>2011 – 2013</p>
      <ul>
        <li>
          Utilized performance data to develop lesson plans, activities, and
          interventions appropriate for students with diverse learning needs and
          disabilities
        </li>
        <li>
          Collaborated with staff to create Individualized Education Programs
          for students with significant behavioral challenges
        </li>
        <li>
          Moderated behavior charts and implemented effective classroom
          management techniques
        </li>
      </ul>
      <h2 id="education">Education</h2>
      <ul>
        <li>Cardinal Stritch University - MA in Urban Education, 2013</li>
        <li>University of Wisconsin-Madison - BS in Psychology, 2011</li>
      </ul>
      <h2 id="publications-and-trainings">Publications and Trainings</h2>
      <ul>
        <li>
          Zhang, T. Sikali, E., Bailey, P.D., Lee, M., Buehler, E., et al. (2021
          October) Analyzing NAEP and TIMSS Data Using R: 2021 EdSurvey
          Large-Scale Data Analysis Training Series. NCES workshop series
          presented virtually.
        </li>
        <li>
          Zhang, T. Sikali, E., Bailey, P.D., Lee, M., Buehler, E., Hooper, M.
          (2021, June) Analyzing Large-Scale Assessment Data Using R. Workshop
          presented at the annual meeting of the American Educational Research
          Association (AERA)
        </li>
        <li>
          NAEP Intern Data Training - Introduction and Hands-on Practice of Data
          Analysis Using the NAEP Primer Data, June 2021
        </li>
        <li>
          NAEP Intern Data Training - Introduction and Hands-on Practice of Data
          Analysis Using the NAEP Primer Data, June 2020
        </li>
        <li>
          NAEP Intern Data Training - Introduction and Hands-on Practice of Data
          Analysis Using the NAEP Primer Data, January 2020
        </li>
        <li>
          Sikali, E., Bailey, P.D., Lee, M., &amp; Zhang, T. (2019) Using R and
          Shiny to Analyze National Assessment Data. Workshop presented at the
          Government Advances in Statistical Programming Workshop, Washington,
          DC.
        </li>
        <li>
          NAEP Data Training - Introduction and Hands-on Practice of Data
          Analysis Using the NAEP Primer Data, June 2019
        </li>
        <li>
          Xing, Q., Lee, M.. Russell, S. (2019). Data from the Early Childhood
          Longitudinal Study, Kindergarten Class of 2010–11 (ECLS-K:2011) at
          NCES and Data Analysis Using the R Package EdSurvey. Presentation made
          at the 2019 annual meeting of the Society for Research in Child
          Development, Baltimore, MD.
        </li>
        <li>
          NAEP Data Training - Introduction and Hands-on Practice of Data
          Analysis Using the NAEP Primer Data, January 2019 NAEP Intern Data
          Training - Introduction and Hands-on Practice of Data Analysis Using
          the NAEP Primer Data, June 2018
        </li>
        <li>
          Sikali, E., Bailey, P. &amp; Zhang, T. (2017) Analyzing NAEP
          Assessment Data Using R, Workshop presented at the annual meeting of
          the American Educational Research Association (AERA), San Antonio, TX.
        </li>
        <li>
          Sikali, E., Bailey, P. &amp; Zhang, T. (2016) Analyzing NAEP
          Assessment Data Using R, Workshop presented at the annual meeting of
          the American Educational Research Association (AERA), Washington, DC.
        </li>
      </ul>
      <hr />
      <p>
        A one-page resume can be found <a href="/Michael_Lee_Resume.pdf">here</a
        >.
      </p>
    </div>
  </article>
</main>
