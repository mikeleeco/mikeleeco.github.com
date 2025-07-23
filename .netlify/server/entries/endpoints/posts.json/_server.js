async function GET() {
  const imports = /* @__PURE__ */ Object.assign({ "../posts/posts/2015-02-23-milb-scraper-with-rvest.md": () => import("../../../chunks/2015-02-23-milb-scraper-with-rvest.js"), "../posts/posts/2015-03-25-milb-similarity-scores.md": () => import("../../../chunks/2015-03-25-milb-similarity-scores.js"), "../posts/posts/2015-06-10-video-games-interactive.md": () => import("../../../chunks/2015-06-10-video-games-interactive.js"), "../posts/posts/2016-05-24-mikeleeco-powered-by-rmarkdown.md": () => import("../../../chunks/2016-05-24-mikeleeco-powered-by-rmarkdown.js"), "../posts/posts/2016-06-01-NBA-Draft-Odds-Plot.md": () => import("../../../chunks/2016-06-01-NBA-Draft-Odds-Plot.js"), "../posts/posts/2016-12-26-wisconsin-presidential-election-results.md": () => import("../../../chunks/2016-12-26-wisconsin-presidential-election-results.js"), "../posts/posts/2017-06-28-wsj-measles-vaccination-chart.md": () => import("../../../chunks/2017-06-28-wsj-measles-vaccination-chart.js"), "../posts/posts/2017-07-10-makeover-monday-wsj-measles-vaccination-chart.md": () => import("../../../chunks/2017-07-10-makeover-monday-wsj-measles-vaccination-chart.js"), "../posts/posts/2017-11-16-wi-presidential-results-using-hexmapr.md": () => import("../../../chunks/2017-11-16-wi-presidential-results-using-hexmapr.js"), "../posts/posts/2018-04-16-hiking-the-narrows.md": () => import("../../../chunks/2018-04-16-hiking-the-narrows.js"), "../posts/posts/2019-01-28-wisconsin-rushing-history.md": () => import("../../../chunks/2019-01-28-wisconsin-rushing-history.js"), "../posts/posts/2019-02-23-creating-pauses-in-r-animations.md": () => import("../../../chunks/2019-02-23-creating-pauses-in-r-animations.js"), "../posts/posts/2020-01-21-creating-duplicate-legends.md": () => import("../../../chunks/2020-01-21-creating-duplicate-legends.js"), "../posts/posts/2020-01-21-left-align-ggplot2-titles-subtitles-and-footnotes.md": () => import("../../../chunks/2020-01-21-left-align-ggplot2-titles-subtitles-and-footnotes.js"), "../posts/posts/2020-02-08-recreate-fivethirtyeight-chicklet-stacked-bar-chart-in-ggplot2.md": () => import("../../../chunks/2020-02-08-recreate-fivethirtyeight-chicklet-stacked-bar-chart-in-ggplot2.js"), "../posts/posts/2023-10-23-dc-takeoff.md": () => import("../../../chunks/2023-10-23-dc-takeoff.js") });
  let body = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          slug: path.split("/").pop().slice(0, -3)
        };
      })
    );
  }
  const posts = await Promise.all(body);
  return new Response(JSON.stringify(posts));
}
export {
  GET
};
