---
layout: post
title: Let's Make a Minor League Baseball Database!
description: "A step-by-step tutorial to make your own Minor League Baseball Database using rvest."
tags: [R, rvest, HTML scraper, data, sports, MiLB, MLB]
date: 2015-02-23
category: posts
image:
  feature: bryant.jpg
  teaser: bryant.jpg
  related: bryant.jpg
---
<div class="container">
<div class="row">
<div class=".col-md-8">
<p><div class="lead">
Baseball is a game of numbers, some more accessible than others.</div> Rates, averages, linear weights, aging curves, and WAR are only a few of the myriad statistics influencing decision makers in MLB franchises. An endless amount of data is accessible to the average fan at many sites, most notably the <a href="http://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Database</a>, which is the most robust catalog of MLB player statistics available to the public.</p>
<p>
One area of relatively limited accessibility to the average fan is statistics for Minor League players. Though player statistics by position, year, and team are available at many sites, a thorough catalog of MiLB data akin to the Lahman database is unavailable. I wonder who <a href="http://www.baseball-reference.com/minors/player.cgi?id=bryant001kri">Kris Bryant</a> would be most similar to? </p>

<p><p>What do you mean Baseball Reference doesn't calculate similarity scores for minor league players?</p></p>

<p><a class="btn btn-success btn-lg btn-block" href="https://www.youtube.com/watch?v=bnRrvOb0m-I">As If Button</a></p>


<p><strong><h2>Let's make our own damn database!</h2></strong>	
</p>

To make our database we're going to use <a href="https://github.com/hadley/rvest">rvest</a>, an R package designed by Hadley Wickham at RStudio <sup class="bootstrap-footnote" data-text="In baseball terms, one might describe his contributions to R software as equal parts Bill James and Bill Veeck.">1</sup>. The package scrapes HTML from webpages and extracts it into readable data. Let's load the necessary packages and go from there:

<pre><code class="r">#if you haven't done so already, install rvest from Wickham's github repository
# install.packages("devtools")
# install_github("hadley/rvest")
c('rvest','dplyr') -> packages #installs packages
lapply(packages, library, character.only = T)
</code></pre>


<p>The function below will construct each team's minor league website, for every desired year, and pull out the same table every time.</p>

<pre><code class="r"># prep scraper
url <- "http://www.baseball-reference.com/minors/"
teams=c("ARI")
stats_table <- '#team_batting.sortable.stats_table'
stats_id <- paste0(stats_table,' a')
</code></pre>

<p>
Let's start with the Arizona Diamondbacks batting statistics from 2012-2014. We'll call the data frame we're about to pull the variable <strong>"minors_batting_ARI"</strong>. We're reconstructing the url <code>http://www.baseball-reference.com/minors/affiliate.cgi?id=ARI&year=2014</code> and instructing the scraper to pull the necessary data table and then repeat the process for next season. We're calling the pulled data table 'df' for simplicity.</p>

<pre><code class="r">minors_batting_ARI <- data.frame()

  # for loop by teams and seasonfor (teams in teams){ 
  for (season in 2014:2012) {
    html <- paste(url,"affiliate.cgi?id=",teams,"&year=",season,sep="")

    # batting stats
    read_html(html) %>%
      html_nodes(stats_table) %>%
      html_table(header = T) %>%
      data.frame() %>%
      tbl_df() -> df
</code></pre>

<p>So far our code will scrape the batting table from the team's minor league page, but we also need to extract each player's Minor League baseball-reference id using it's href. Isn't that right Chris Young? No. Not you, <a href="http://www.baseball-reference.com/players/y/youngch04.shtml">Chris Young</a>. The other, lankier <a href="http://www.baseball-reference.com/players/y/youngch03.shtml">Chris Young</a>. We're good man, no need to <a href="http://youtu.be/1EiqELgKp5g?t=56s">get angry</a>.</p>

This code extracts the attributes of the URL in the table and changes them into characters:

<pre><code class="r">    # player info
    read_html(html) %>%
      html_nodes(stats_id) %>%
      html_attr(name="href") %>% unlist %>% as.character -> min_playerid
</code></pre>


Using R formatting code we delete unnecessary rows and create a column called <i>bref_player_id</i> to assign each player's unique reference id. We're trimming out characters from the href attributes we don't need, leaving only the reference ids.


<pre><code class="r">    # clean dataframe and add team and season info
    df <- df[1:nrow(df),]
    df <- df[!na.omit(df$Rk=='Rk'),]
    df$season <- c(season)
    df$teams <- c(teams)

    # remove url data
    min_playerid=gsub("/register/player.cgi?id=", "", min_playerid,fixed = TRUE)
    df$min_playerid <- c(min_playerid)

    # bind to dataframe
    minors_batting_ARI <- rbind(minors_batting_ARI,df)
  }
}
</code></pre>

<pre><code class="r">#to view the dataset and save it as a .csv in our working directory
View(minors_batting_ARI)
write.csv(minors_batting_ARI, "minors_batting_ARI.csv")
</code></pre>

<p>There we are! Arizona's minor league batting stats from 2012-2014! 824 instances may seem like too much, for only a three year period, but Baseball-reference.com doesn't aggregate a player's statistics by year; they do it by level. Therefore, some players may have multiple rows for the same season (aren't you glad we pulled out the reference id!) </p>
<div class="container">
<figure>
<img src="{{ site.url }}/images/minors_batting_ARI.jpg" class="img-responsive">
</figure>
</div>
<p></p>
<h4>Here is the code in it's entirety:</h4>
<pre><code class="r"># install.packages("devtools")
# install_github("hadley/rvest")
c('rvest','dplyr') -> packages #installs packages
lapply(packages, library, character.only = T)

# prep scraper
url <- "http://www.baseball-reference.com/minors/"
teams=c("ARI")
stats_table <- '#team_batting.sortable.stats_table'
stats_id <- paste0(stats_table,' a')
minors_batting_ARI <- data.frame()

# for loop by teams and season
for (teams in teams){ 
  for (season in 2014:2012) {
    html <- paste(url,"affiliate.cgi?id=",teams,"&year=",season,sep="")

    # batting stats
    read_html(html) %>%
      html_nodes(stats_table) %>%
      html_table(header = T) %>%
      data.frame() %>%
      tbl_df() -> df

    # player info
    read_html(html) %>%
      html_nodes(stats_id) %>%
      html_attr(name="href") %>% unlist %>% as.character -> min_playerid

    # clean dataframe and add team and season info
    df <- df[1:nrow(df),]
    df <- df[!na.omit(df$Rk=='Rk'),]
    df$season <- c(season)
    df$teams <- c(teams)

    # remove url data
    min_playerid=gsub("/register/player.cgi?id=", "", min_playerid,fixed = TRUE)
    df$min_playerid <- c(min_playerid)

    # bind to 
    minors_batting_ARI <- rbind(minors_batting_ARI,df)
  }
}
</code></pre>

<p>... let's take a left turn on <a href="http://hardballtalk.nbcsports.com/2013/01/25/the-diamondbacks-are-travelling-down-grit-avenue-and-guts-boulevard-and-grind-parkway/">Grind Parkway</a> and pull in <strong>all MiLB batting statistics for 2014</strong>.</p>

<h2>MiLB Batting Stats for All Teams</h2>

<p>First we'll need a list of baseball-reference's team codes. I'll do the dirty work and include franchise codes for each team since 1969 if you want to play with that data <sup class="bootstrap-footnote" data-text="For future investigations be aware that other pages of baseball reference use archived team codes such as MON (Montreal Expos) and CAL (California Angels).">2</sup>.</p>

<pre><code class="r">teams=c("ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE","COL","DET","HOU","KCR","ANA","LAD","FLA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN")
</code></pre>

<pre><code class="r">url <- "http://www.baseball-reference.com/minors/"
teams=c("ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE","COL","DET","HOU","KCR","ANA","LAD","FLA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN")
stats_table <- '#team_batting.sortable.stats_table'
stats_id <- paste0(stats_table,' a')
minors_batting <- data.frame()

# for loop by teams and season
for (teams in teams){ 
  for (season in 2014:2014) {
    html <- paste(url,"affiliate.cgi?id=",teams,"&year=",season,sep="")

    # batting stats
    read_html(html) %>%
      html_nodes(stats_table) %>%
      html_table(header = T) %>%
      data.frame() %>%
      tbl_df() -> df

    # player info
    read_html(html) %>%
      html_nodes(stats_id) %>%
      html_attr(name="href") %>% unlist %>% as.character -> min_playerid

    # clean dataframe and add team and season info
    df <- df[1:nrow(df),]
    df <- df[!na.omit(df$Rk=='Rk'),]
    df$season <- c(season)
    df$teams <- c(teams)

    # remove url data
    min_playerid=gsub("/register/player.cgi?id=", "", min_playerid,fixed = TRUE)
    df$min_playerid <- c(min_playerid)

    # bind to 
    minors_batting <- rbind(minors_batting,df)
  }
}

</code></pre>

To query other seasons or teams, simply change the information selected. For example:
<pre><code class="r">teams=c("OAK","TBD")

stats_table <- '#team_batting.sortable.stats_table'
stats_id <- paste0(stats_table,' a')
minors_batting <- data.frame()

for (teams in teams){ for (season in 2010:2005) {
</code></pre>
Will pull in minor league batting statistics for Oakland and Tampa Bay for the years 2005-2010.<p></p>

Lets clean up all of the stray objects bvsides the <code>minors_batting</code>code> dataframe in our working environment before moving on:
<pre><code class="r">rm(list=setdiff(ls(), "minors_batting"))</code></pre>

<h3>Obligatory heads up!</h3>
<p>This code is querying 30 distinct URLs for every season, so multi-season outputs can take some time. Here are my system.time indicators for the above function:</p>
<div class="container">
<div class="row">
<figure>
<img src="{{ site.url }}/images/sys_time_MiLB.jpg" class="img-responsive">
</figure>
</div></div>
The query takes about a 1:45 for every league-wide season pull. <strong>Pro-Tip!</strong> Get that query going and have some breakfast/lunch/dinner. 

<h4>Coming up...</h4>Stay tuned to the site for another post about similarity scores and to learn more about Kris Bryant's best comparisons.

<hr>

<p>Have feedback, questions, or want to see something else added? Check out my <a href="https://github.com/mdlee12/MiLB-Scraper">MiLB Scraper on github</a> or fork my repository to propose changes.<a class="btn btn-primary" href="https://github.com/mdlee12/MiLB-Scraper/fork">Edit My Code</a></p>
</div>
</div>
</div>
