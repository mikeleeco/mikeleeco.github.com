async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../projects/2016-05-28-sabr-R-package.md": () => import("../../../../chunks/2016-05-28-sabr-R-package.js"), "../projects/2017-06-03-EdSurvey-R-package.md": () => import("../../../../chunks/2017-06-03-EdSurvey-R-package.js"), "../projects/2017-06-03-NAEPprimer-R-package.md": () => import("../../../../chunks/2017-06-03-NAEPprimer-R-package.js"), "../projects/2018-05-09-Automated-Reports-Public-Library-Services.md": () => import("../../../../chunks/2018-05-09-Automated-Reports-Public-Library-Services.js"), "../projects/2018-11-20-Automated-Report-Cleveland-Metropolitan-School-District.md": () => import("../../../../chunks/2018-11-20-Automated-Report-Cleveland-Metropolitan-School-District.js"), "../projects/2019-06-28-IAP-TALIS-Summary-Release.md": () => import("../../../../chunks/2019-06-28-IAP-TALIS-Summary-Release.js"), "../projects/2019-11-05-IAP-ICILS-Summary-Release.md": () => import("../../../../chunks/2019-11-05-IAP-ICILS-Summary-Release.js"), "../projects/2019-12-02-IAP-PISA-Summary-Release.md": () => import("../../../../chunks/2019-12-02-IAP-PISA-Summary-Release.js"), "../projects/2019-12-30-Automated-Report-Nevada.md": () => import("../../../../chunks/2019-12-30-Automated-Report-Nevada.js"), "../projects/2019-12-30-Teacher-Student-Shiny-Application.md": () => import("../../../../chunks/2019-12-30-Teacher-Student-Shiny-Application.js"), "../projects/2020-03-30-NCES-Animation.md": () => import("../../../../chunks/2020-03-30-NCES-Animation.js"), "../projects/2021-01-20-IAP-TIMSS-Summary-Release.md": () => import("../../../../chunks/2021-01-20-IAP-TIMSS-Summary-Release.js"), "../projects/2022-01-20-perc-covid-data-story.md": () => import("../../../../chunks/2022-01-20-perc-covid-data-story.js"), "../projects/2022-02-17-edsurvey-book.md": () => import("../../../../chunks/2022-02-17-edsurvey-book.js") });
  let body = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          slug: path.split("/").pop()?.slice(0, -3).toLowerCase()
        };
      })
    );
  }
  const projects = await Promise.all(body);
  return new Response(JSON.stringify(projects));
}
export {
  GET
};
