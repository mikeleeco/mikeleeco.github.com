---
layout: post
title: "mikelee.co: Powered by RMarkdown, knitr, and Jekyll"
description: "Generating blog content made easier with R"
tags: [R, knitr,Jekyll, RMarkdown]
date: 2016-05-24
category: posts
image:
  feature: jekyll-blog.jpg
  teaser: jekyll-blog.jpg
  related: jekyll-blog.jpg
---
> This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF, and MS Word documents. For more details on using R Markdown see <http://rmarkdown.rstudio.com>.

Spend a few months documenting code scripts in RStudio and you'll have surely seen those introductory lines numerous times.

This is also a R code script. And a markdown document. And an HTML page. All of which are generated within one .Rmd document. My site had previously supported by Github Pages and Jekyll, and now my preferred statistical software tool will streamline my blogging process. I expect this to make the transition from idea, analyses, visualization, and blog post production much more seamless.

**Inspiration and First Steps**

I first heard about the ability to generate and serve files within R from a tweet from Brendan Rocks:

<blockquote class="twitter-tweet" align="center" data-lang="en"><p lang="en" dir="ltr">Post on my BARUG talk tonight: Blogging w/ <a href="https://twitter.com/hashtag/rstats?src=hash">#rstats</a> &amp; knitr-jekyll (all credit to <a href="https://twitter.com/xieyihui">@xieyihui</a>!) <a href="https://t.co/PsGXbyXZJa">https://t.co/PsGXbyXZJa</a> <a href="https://t.co/eZycscbmup">pic.twitter.com/eZycscbmup</a></p>&mdash; Brendan Rocks (@rocksbrendan) <a href="https://twitter.com/rocksbrendan/status/656564982885146625">October 20, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This workflow blew my mind at the time (still does) and the post in which he explains the scaffolding is very useful. Check it out [here](https://brendanrocks.com/blogging-with-rmarkdown-knitr-jekyll/).

Adding in a [`_source`](https://github.com/mikeleeco/mikeleeco.github.com/tree/master/_source/2016-05-24-mikeleeco-powered-by-rmarkdown.Rmd) directory to store .Rmd files allows	Yihui Xie's [servr package](https://github.com/yihui/servr) the ability to render markdown documents in  [`_posts`](https://github.com/mikeleeco/mikeleeco.github.com/tree/master/_posts/2016-05-24-mikeleeco-powered-by-rmarkdown.md), which Jekyll converts to HTML - which is what you are reading now!

**Improving Syntax Highlighting** *(with updates!)*

The first part of this post was pretty trivial given my previous experience with both jekyll and knitr. Adjusting syntax highlighting was a bit of a hiccup. Out of the box, code blocks in divs were being generated using my highlighter (rouge) but were being rendered with an "r" in front like so:

`r``cat(paste(c("This","drove","me","mental D:"),sep=" "))`

`## This drove me mental D:`

An earlier version of this post detailed a method of updating syntax highlighting using redcarpet markdown and pygments - a soon to be deprecated syntax highlighter. Turns out I wasn't the only one having this issue! After more than a few missteps, and applying the advice from [this post](https://github.com/jekyll/jekyll/issues/1342), make sure you have both jekyll [ruby](https://rubygems.org/pages/download) installed and updated! After updating your site infrastructure, add a css template with formatting options - such as my [`syntax.css`](https://github.com/mikeleeco/mikeleeco.github.com/tree/master/public/css/syntax.css).

**Final Result**




```r
cat(paste(c("Yay","for","making","life","easier!"),sep=" "))
```

```
## Yay for making life easier!
```

Look how great that looks! Lets see what a function looks like.


```r
devtools::install_github("mdlee12/sabr")
library(sabr)
sabr::woba_season
function (playerID = NULL, yearID = NULL, ...) 
{
    db <- lahman()
    woba_guts <- RSQLite::dbGetQuery(db, "SELECT * FROM wOBA_Table")
    wobayear <- woba_guts[woba_guts$yearID == yearID, ]
    wobayear <- data.frame(wobayear)
    query <- paste("SELECT GROUP_CONCAT(DISTINCT teamID) as teamID, 
                   SUM(H) as H, SUM([2B]) as DB, SUM([3B]) as TR,SUM(HR) as HR, 
                   SUM(AB) as AB, SUM(BB) as BB, SUM(IBB) as IBB, SUM(SF) as SF, 
                   SUM(SH) as SH, SUM(HBP) as HBP FROM Batting WHERE playerID = '", 
                   playerID, "' AND yearID = '", yearID, "'", sep = "")
    db <- lahman()
    query <- RSQLite::dbGetQuery(db, query)
    query <- as.data.frame(query)
    uBB <- wobayear$wobaBB * (query$BB - query$IBB)
    HBP <- wobayear$wobaHB * (query$HBP)
    DB <- wobayear$woba2B * (query$DB)
    TR <- wobayear$woba3B * (query$TR)
    HR <- wobayear$wobaHR * (query$HR)
    H <- wobayear$woba1B * (query$H - query$DB - query$TR - query$HR)
    AB <- query$AB
    BB <- query$BB
    IBB <- query$IBB
    SF <- query$SF
    SH <- query$SH
    PA <- query$PA
    woba <- (uBB + HBP + H + DB + TR + HR)/(AB + BB - IBB + SF + HBP)
    woba
}
```
---
<div class="row"><div class="col-sm-6 col-sm-offset-3"><img src="http://i.imgur.com/Z0MX0qd.gif" class="img-responsive center-block"/></div></div>
---
How about some numbers:


```r
6*9
```

```
## [1] 54
```

```r
sabr::woba_season("yountro01",1982)
```

```
## [1] 0.414997
```
You can also embed plots. For example:


```r
# Much plots. Such scatter.
plot(iris)
```

<img src="/figure/source/2016-05-24-mikeleeco-powered-by-rmarkdown/unnamed-chunk-6-1.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" style="display: block; margin: auto;" />

More to come soon :D 
