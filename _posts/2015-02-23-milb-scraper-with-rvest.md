---
layout: post
title: Let's Make a Minor League Baseball Database!
description: "A step-by-step tutorial to make your own Minor League Baseball Database using rvest."
tags: [R, rvest, HTML scraper, data, sports, MiLB, MLB]
date: 2015-02-23
image:
  feature: bryant.jpg
  teaser: bryant.jpg
  related: bryant.jpg
---

<div class="row">
<div class="container">
<div class=".col-md-8">
<p><div class="lead">
  Baseball is a game of numbers, some more accessible than others.</div> Rates, averages, linear weights, aging curves, and WAR are only a few of the myriad statistics influencing decision makers in MLB franchises. An endless amount of data is accessible to the average fan at many sites, most notably the <a href="http://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Database</a>, which is the most robust catalog of MLB player statistics available to the public.</p>
<p>
One area of relatively limited accessibility to the average fan is statistics for Minor League players. Though player statistics by position, year, and team are available at many sites, a thorough catalog of MiLB data akin to the Lahman database is unavailable. I wonder who <a href="http://www.baseball-reference.com/minors/player.cgi?id=bryant001kri">Kris Bryant</a> would be most similar to? </p>

<p><p>What do you mean Baseball Reference doesn't calculate similarity scores for minor league players?</p></p>

<p><a class="btn btn-success btn-lg btn-block" href="http://youtu.be/VpVoUvLdErw?t=3s">As if Button</a></p>


<p><strong><h2>Let's make our own damn database!</h2></strong>	
</p>

<p>To make our database we're going to use <a href="https://github.com/hadley/rvest">rvest</a>, an R package designed by Hadley Wickham at RStudio <sup class="bootstrap-footnote" data-text="In baseball terms, one might describe his contributions to R software as equal parts Bill James and Bill Veeck.">1</sup>. The package scrapes HTML from webpages and extracts it into readable data. Let's load the necessary packages and go from there:</p>

<pre><code>
#if you haven't done so already, install rvest from Wickham's github repository
#install.packages("devtools")
#install_github("hadley/rvest")</i>
c('rvest','dplyr','pipeR') -> packages
lapply(packages, library, character.only = T)
</code></pre>


<p>The function below will construct each team's minor league website, for every desired year, and pull out the same table every time.</p>

<pre><code>
url <- "http://www.baseball-reference.com/minors/"
'#team_batting.sortable.stats_table' -> stats_table
stats_table %>>% paste0(stats_table,' a') -> stats_id
</code></pre>

<p>
Let's start with the Arizona Diamondbacks batting statistics from 2012-2014. We'll call the data frame we're about to pull the variable <strong>"minors_batting_ARI"</strong>. We're reconstructing the url <code>http://www.baseball-reference.com/minors/affiliate.cgi?id=ARI&year=2014</code> and instructing the scraper to pull the necessary data table and then repeat the process for next season. We're calling the pulled data table 'df' for simplicity.</p>

<pre><code class="html">
<i>#select the seasons you wish to pull starting with the most recent</i>
for (season in 2014:2012) { 
cur_url <- paste(url,"affiliate.cgi?id=","ARI","&year=",season,sep="")

df <- html %>%
html_nodes(stats_table) %>%
html_table(header = T) %>%
data.frame() %>%
tbl_df() -> df
</code></pre>

<p>So far our code will scrape the batting table from the team's minor league page, but we also need to extract each player's Minor League baseball-reference id using it's href. Isn't that right Chris Young? No. Not you, <a href="http://www.baseball-reference.com/players/y/youngch04.shtml">Chris Young</a>. The other, lankier <a href="http://www.baseball-reference.com/players/y/youngch03.shtml">Chris Young</a>. We're good man, no need to get angry.</p>

<figure>
  <iframe width="560" height="315" src="http://youtu.be/1EiqELgKp5g?t=56s" frameborder="0"> </iframe>
  <figcaption><i class="fa fa-video-camera"></i> The other lankier Chris Young</figcaption>
</figure>

<p>This code extracts the attributes of the links in the table and changes them into characters.</p>

<pre><code class="html">
html %>>%
        html_nodes(stats_id) %>>%
        html_attr(name="href") %>>% unlist %>>% as.character -> bref_player_id
</code></pre>

<p>Using R formatting code we delete unnecessary rows and create a column called <i>bref_player_id</i> to assign each player's unique reference id. We're trimming out characters from the href attributes we don't need, leaving only the reference ids.</p>

<pre><code class="html">
df %>>% nrow() -> rows
    df[1:rows,] -> df
df=df[!na.omit(df$Rk=='Rk'),]
df$season <- c(season)
bref_player_id=substr(bref_player_id, 23,34)
df$bref_player_id <- c(bref_player_id)
</code></pre>

<p>Finally, bind the tables together.</p>
<pre><code class="html">
minors_batting_ARI <- rbind(minors_batting_ARI,df)
</code></pre>

<p>There we are! Arizona's minor league batting stats from 2012-2014!</p>


<p>...but enough about teams built on <i>grit</i>. Let's pull in <strong>all MiLB batting statistics since 2000</strong>.</p>

<p>First we'll need a list of baseball-reference's team codes. I'll do the dirty work and include franchise codes for each team since 1969 if you want to play with that data <sup class="bootstrap-footnote" data-text="For future investigations be aware that other pages of baseball reference use archived team codes such as MON (Montreal Expos) and CAL (California Angels).">2</sup>.</p>

{% highlight rout %}
teams=c("ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE","COL","DET","HOU","KCR","ANA","LAD","FLA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN")
{% endhighlight %}

<pre><code class="html">
url <- "http://www.baseball-reference.com/minors/"
teams=c("ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE","COL","DET","HOU","KCR","ANA","LAD","FLA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN")
'#team_batting.sortable.stats_table' -> stats_table
stats_table %>>% paste0(stats_table,' a') -> stats_id
minors_batting_team_code <- data.frame()

for (teams in teams){ for (season in 2014:2014) {
html <- paste(url,"affiliate.cgi?id=",teams,"&year=",season,sep="")

html(html) %>%
	html_nodes(stats_table) %>%
	html_table(header = T) %>%
	data.frame() %>%
	tbl_df() -> df

html(html) %>>%
        html_nodes(stats_id) %>>%
        html_attr(name="href") %>>% unlist %>>% as.character -> bref_player_id
df %>>% nrow() -> rows
    df[1:rows,] -> df
df=df[!na.omit(df$Rk=='Rk'),]
df$season <- c(season)
bref_player_id=substr(bref_player_id, 23,34)
df$bref_player_id <- c(bref_player_id)

minors_batting_team_code <- rbind(minors_batting_team_code,df)

}
}
</code></pre>

<h3>Obligatory heads up!</h3>
<p>This code is querying 30 distinct URLs for every season, so multi-season outputs can take some time. Here are my system.time indicators for the above function:</p>

<figure>
<img src="{{ site.url }}/images/sys_time_MiLB.jpg">
<figcaption>The query takes a while, but it's worth it!</figcaption>
</figure>
<h4>Pro Tip</h4>
<p>Get that query going and have some breakfast/lunch/dinner. Stay tuned to the site for another post about who Kris Bryant is most similar to!</p>

-----

<p>Have feedback, questions, or want to see something else added? Check out my <a href="https://github.com/mdlee12/MiLB-Scraper">MiLB Scraper on github</a> or fork my repository to propose changes.
  <a class="btn btn-primary" href="https://github.com/mdlee12/MiLB-Scraper/master/fork">Edit my code</a></p>
</div>
</div>
</div>
