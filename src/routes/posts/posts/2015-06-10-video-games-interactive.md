---
title: Visualizing Video Games Throughout History
description: 'A Guide to the video game rating system using interactive visuals.'
tags: [MobyGames, Video Games, FiveThirtyEight, data, R, ggplot2, rvest, D3.js]
date: '2015-06-10'
featured: false
archived: true
categories: 'posts'
img: '/img/rampage.jpg'
---

> Call of Duty :: Frank Underwood // Frogger :: George Costanza // Shinobi :: Wu-Tang Clan // Super Nintendo & Sega Genesis :: <a href="https://youtu.be/CHio4lLOhKc?t=2m32s">???</a>

Video games have long infiltrated popular culture. This article will attempt to explain that reach. Inspired by FiveThirtyEight's great article <a href="http://fivethirtyeight.com/features/designing-the-best-board-game-on-the-planet/">"Designing the Best Board Game on the Planet"</a>, I set out to extend this methodology to video games. The focus of 538's research related to a robust data set pulled from <a href="http://boardgamegeek.com/">BoardGameGeek</a>, an exhaustive collection of board games contributed by it's passionate users. I set out to find a similar user-contributed dataset. and settled on the <a href="https://www.mobygames.com/">MobyGames</a> video games database.

Created in 1999 by <a href="https://www.mobygames.com/info/faq5">Jim Leonard</a> to catalogue titles and connect games to their developers and fans, the database has grown to nearly 50,000 games. Ratings, images, and other details are contributed by users. Though there has been management changes leading to some contributor vitriol in recent years, the site is on stable footing and recently surpassed 50,000 unique games.

<h3>Method</h3>

Using the R package 'rvest' I scraped the site's complete game list <a href="http://www.mobygames.com/browse/games/list-games/">html table</a>, then used each game's URL to scrape additional game information from their profile pages. To avoid issues with replicate game titles the URL was used as a unique reference ID for each title - for example, <b>007: The World is Not Enough</b> has <a href="http://www.mobygames.com/game/007-the-world-is-not-enough">three</a> <a href="http://www.mobygames.com/game/007-the-world-is-not-enough_">unique</a> <a href="http://www.mobygames.com/game/007-the-world-is-not-enough__">pages</a> containing details for each system for which it was released. Each game's profile follows a similar format which made it effective for scraping, but specific genres of games used atypical formatting, requiring a good deal of database cleansing. The guideline that 80% of the work with data involves cleaning is no expection here. We're left with a database of 50,021 games. Check out the code I used to pull and clean the data on <a href="https://github.com/mikeleeco/Mobygames-Scraper/blob/master/MobygamesScraper.R">my Github page</a>.

Let's dive into what the numbers tell us.

<h3>Ratings</h3>

MobyGames aggregates two sources to formulate their video game ratings: users and critics. User ratings are determined on a 0 to 5 scale and are contributed by an individual's subjective rating of a particular game. Critic ratings are reviews from magazines, entertainment websites, and other online video game forums. A weighted average of these individual critics formulate the site's "MobyRank" score. For this article I gave equal importance to user and critic ratings to ascertain each game's overall rating, simply averaging the two scores into one total rating. Of the 50,000+ games, a total of 9224 had either user or critics ratings, ranging in years from 1976-2015. In the scatterplot below you'll see the combined Mobygames ratings by date of original publication.

<img src="/img/gamerank.png"  alt="gamerank" class="img-responsive center-block center-block">

That looks pretty sharp, but in the spirit of video games, lets make it a bit more...8-bit.

<img src="/img/mean_game_ranking_2d.png"  alt="mean_game_ranking_2d" class="img-responsive center-block">

As you can see, very little has changed in a video game's reception by year of distribution. There is a mild increase in ratings by year since video games came into prominence. This displays an interesting contrast compared to 538's article on board games, which described the possibility that recent years might be considered "the golden age of serious board gaming." I'd hypothesize that this is effect is due to the platform these entertainment options are consumed. Board games are easily compared; Settlers of Catan and Monopoly are using equal technology, though one is deemed of a higher quality sinced it's final product is more innovative in using similar tools. Video games are influenced by the effects of advances in technology. Objectively, you can't compare <a href="https://www.mobygames.com/game/pong____">Pong!</a> to <a href="https://www.mobygames.com/game/mario-tennis">Mario Tennis</a>; you have to consider the technology of the day. Keeping that in mind, below you'll see the top 11 games by the average user/critics score:

<div class="table-responsive"><table class="table table-hover"><tr class="info"><th>Title</th><th>Year</th><th>Publisher</th><th>Genre</th><th>Platform</th><th>Rating</th></tr>
 <tr><td>Bayonetta 2</td><td>2014</td><td>Nintendo of America Inc.</td><td>Action</td><td>Wii U</td><td>94.5</td></tr>
 <tr><td>Metroid Prime Trilogy</td><td>2009</td><td>Nintendo of America Inc., Nintendo of Europe GmbH</td><td>Action</td><td>Wii, Wii U</td><td>94.5</td></tr>
 <tr><td>Super Mario Galaxy 2</td><td>2010</td><td>Nintendo Co., Ltd., Nintendo of America Inc., Nintendo of Europe GmbH</td><td>Action</td><td>Wii, Wii U</td><td>94.5</td></tr>
 <tr><td>ESPN NFL 2K5</td><td>2004</td><td>Global Star Software Inc., SEGA Europe Ltd., SEGA of America, Inc.</td><td>Sports</td><td>PlayStation 2, Xbox</td><td>93.75</td></tr>
 <tr><td>World Series Baseball 2K3</td><td>2003</td><td>SEGA of America, Inc.</td><td>Sports</td><td>PlayStation 2, Xbox</td><td>93.75</td></tr>
 <tr><td>Final Fantasy X | X-2 HD Remaster</td><td>2013</td><td>Square Enix Co., Ltd., Square Enix, Inc.</td><td>Role-Playing (RPG)</td><td>PlayStation 3, PS Vita</td><td>93.5</td></tr>
 <tr><td>Grand Theft Auto V</td><td>2013</td><td>Rockstar Games, Inc.</td><td>Action, Racing / Driving</td><td>PlayStation 3, PlayStation 4, Windows, Xbox 360, Xbox One</td><td>93.5</td></tr>
 <tr><td>Sins of a Solar Empire: Trinity</td><td>2010</td><td>1C-SoftClub, rondomedia Marketing & Vertriebs GmbH, Snowball Studios, Stardock Entertainment, Inc.</td><td>Strategy</td><td>Windows</td><td>93.5</td></tr>
 <tr><td>Super Mario Bros.</td><td>1985</td><td>Nintendo Co., Ltd., Nintendo of America Inc., Nintendo of Europe GmbH</td><td>Action</td><td>Arcade, Game Boy Advance, NES, Nintendo 3DS, Wii, Wii U</td><td>93.33</td></tr>
 <tr><td>RalliSport Challenge 2</td><td>2004</td><td>Microsoft Game Studios</td><td>Racing / Driving</td><td>Xbox</td><td>93</td></tr>
 <tr><td>Vampire Chronicle for Matching Service</td><td>2000</td><td>Capcom Co., Ltd.</td><td>Action</td><td>Dreamcast</td><td>93</td></tr></table></div>

Though the earlier graph illustrated game ratings haven't changed much over the last 40 years, 10 out of the top 11 games have been released within the past 15 years. This may be indicative of a recency bias, a publisher's increased understanding of qualities that facilitate more highly regarded games, or some other factor. Many of these best game have a so-called "replay value", such as RPGs, infinite universes, or sports franchises.

<h3>Themes</h3>

Mobygames uses 43 themes to delineate aspects of games, which is detailed in their online <a href="http://www.mobygames.com/glossary/genres">glossary</a>. While some games have multiple themes, others have no listed theme - it's unclear whether this is due to user-contribution error or the unique qualities of some games. Super Mario 3, one of the highest-regarded games ever created, doesn't list a theme; it doesn't easily fall into any of the 43 listed genres either. Arcade? Puzzle-solving? Probably neither.

Of the 38,615 games listing at least one theme, the image below shows the distribution of themes as a percentage decimal.

<img src="/img/games_by_theme.png" alt="games_by_theme" class="img-responsive center-block">

I was also curious which themes were most likely to occur simultaneously. Think of the following interactive as such: "If I were to randomly select from the pool of Arcade games, what is the likelihood that it also has a **\_** theme?" <i>Click the Themes on the left side to reorganize the heatmap, and hover over the cells to gain further details</i>.

These graphics make it evident that Puzzle-Solving, Shooter, Sci-Fi, and Arcade themed games are at a higher rate than other games.

Before moving on, here are a couple interesting observations, from most to least sensical:

<ul>
<li>68% of Adult-themed games have an Anime/Manga theme, while only 20% of Anime/Manga-themed games are adult themed.</li><li>Only 46% of Helicopter games are Flight-themed - How could that be?!? What are you doing in these other 54% of Helicopter games?</li><li>3% of Rhythm/Music games are Shooter-themed. No word to report on the Samba de Amigo/Halo crossover though.</li><li>There is one Adult-themed Tank game. What could this possibly entail, you ask? Do yourself a favor and read the <a href="http://www.mobygames.com/game/space-fuck">game description</a>.</li>
</ul>

<h3>Themes</h3>

Mobygames uses 8 genres to categorize game types. The vast majority of games have at least one genre, many having multiple. Shovelware games, which are packages of dissimilar games (think <b>The 1000 Best Windows 95 Games Bundle</b>) are responsible for many of the missing titles.

<img src="/img/games_by_genre.png" alt="games_by_genre" class="img-responsive center-block">

It's a bit unexpected that Action games have such a dominating share of the market. This is likely due to its emphasis on reflex-based gameplay, which is a component of most of the other genres - especially racing and sports games.

Similar to the theme interactive, I was curious which themes were most likely to occur in a given genre of game. Think of the following interactive as such: "If I were to randomly select from the pool of Educational games, what is the likelihood that it has a **\_** theme?" <i>Click the Genres on the left side to reorganize the heatmap, and hover over the cells to gain further details</i>.

The data set is quite large with and there is much to still be explored, so stayed tuned to the site for additional posts!

<hr>

Have feedback, questions, or want to see something else added? Check out the code I used to create <a href="https://github.com/mikeleeco/mikeleeco.github.com/blob/master/_posts/2015-06-10-video-games-interactive.md">this page</a> or fork my repository to propose changes. <a class="btn btn-primary" href="https://github.com/mikeleeco/Mobygames-Scraper/fork">Edit My Code</a>