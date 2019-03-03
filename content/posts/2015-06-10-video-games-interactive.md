---
title: Visualizing Video Games Throughout History
subtitle: "A Guide to the video game rating system using interactive visuals."
tags: [MobyGames, Video Games, FiveThirtyEight, data, R, ggplot2, rvest, D3.js]
date: 2015-06-10
comments: true
categories: ["posts"]
bigimg: [{src: "/img/rampage.jpg", desc: "Rampage"}]
twitterimg: "https://www.mikelee.co/img/rampage.jpg"
---

> Call of Duty :: Frank Underwood // Frogger :: George Costanza // Shinobi :: Wu-Tang Clan // Super Nintendo & Sega Genesis :: <a href="https://youtu.be/CHio4lLOhKc?t=2m32s">???</a>

<p>
Video games have long infiltrated popular culture. This article will attempt to explain that reach. Inspired by FiveThirtyEight's great article <a href="http://fivethirtyeight.com/features/designing-the-best-board-game-on-the-planet/">"Designing the Best Board Game on the Planet"</a>, I set out to extend this methodology to video games. The focus of 538's research related to a robust data set pulled from <a href="http://boardgamegeek.com/">BoardGameGeek</a>, an exhaustive collection of board games contributed by it's passionate users. I set out to find a similar user-contributed dataset. and settled on the <a href="https://www.mobygames.com/">MobyGames</a> video games database.

<p>
Created in 1999 by <a href="https://www.mobygames.com/info/faq5">Jim Leonard</a> to catalogue titles and connect games to their developers and fans, the database has grown to nearly 50,000 games. Ratings, images, and other details are contributed by users. Though there has been management changes leading to some contributor vitriol in recent years, the site is on stable footing and recently surpassed 50,000 unique games.
</p>

<h3>Method</h3>
<p>
Using the R package 'rvest' I scraped the site's complete game list <a href="http://www.mobygames.com/browse/games/list-games/">html table</a>, then used each game's URL to scrape additional game information from their profile pages. To avoid issues with replicate game titles the URL was used as a unique reference ID for each title - for example, <b>007: The World is Not Enough</b> has <a href="http://www.mobygames.com/game/007-the-world-is-not-enough">three</a> <a href="http://www.mobygames.com/game/007-the-world-is-not-enough_">unique</a> <a href="http://www.mobygames.com/game/007-the-world-is-not-enough__">pages</a> containing details for each system for which it was released. Each game's profile follows a similar format which made it effective for scraping, but specific genres of games used atypical formatting, requiring a good deal of database cleansing. The guideline that 80% of the work with data involves cleaning is no expection here. We're left with a database of 50,021 games. Check out the code I used to pull and clean the data on <a href="https://github.com/mikeleeco/Mobygames-Scraper/blob/master/MobygamesScraper.R">my Github page</a>.
</p>
<p>
Let's dive into what the numbers tell us.
</p>

<h3>Ratings</h3>
<p>
MobyGames aggregates two sources to formulate their video game ratings: users and critics. User ratings are determined on a 0 to 5 scale and are contributed by an individual's subjective rating of a particular game. Critic ratings are reviews from magazines, entertainment websites, and other online video game forums. A weighted average of these individual critics formulate the site's "MobyRank" score. For this article I gave equal importance to user and critic ratings to ascertain each game's overall rating, simply averaging the two scores into one total rating. Of the 50,000+ games, a total of 9224 had either user or critics ratings, ranging in years from 1976-2015. In the scatterplot below you'll see the combined Mobygames ratings by date of original publication.
</p>
<img src="/img/gamerank.png" class="img-responsive center-block center-block">


<p>

That looks pretty sharp, but in the spirit of video games, lets make it a bit more...8-bit.
</p>
<p>
<img src="/img/mean_game_ranking_2d.png" class="img-responsive center-block">

</p>

<p>
As you can see, very little has changed in a video game's reception by year of distribution. There is a mild increase in ratings by year since video games came into prominence. This displays an interesting contrast compared to 538's article on board games, which described the possibility that recent years might be considered "the golden age of serious board gaming." I'd hypothesize that this is effect is due to the platform these entertainment options are consumed. Board games are easily compared; Settlers of Catan and Monopoly are using equal technology, though one is deemed of a higher quality sinced it's final product is more innovative in using similar tools. Video games are influenced by the effects of advances in technology. Objectively, you can't compare <a href="https://www.mobygames.com/game/pong____">Pong!</a> to <a href="https://www.mobygames.com/game/mario-tennis">Mario Tennis</a>; you have to consider the technology of the day. Keeping that in mind, below you'll see the top 11 games by the average user/critics score:
</p>
<p>
<p><div class="table-responsive"><table class="table table-hover"><tr class="info"><th>Title</th><th>Year</th><th>Publisher</th><th>Genre</th><th>Platform</th><th>Rating</th></tr>
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
 <tr><td>Vampire Chronicle for Matching Service</td><td>2000</td><td>Capcom Co., Ltd.</td><td>Action</td><td>Dreamcast</td><td>93</td></tr></table></div></p>
</p>

<p>
Though the earlier graph illustrated game ratings haven't changed much over the last 40 years, 10 out of the top 11 games have been released within the past 15 years. This may be indicative of a recency bias, a publisher's increased understanding of qualities that facilitate more highly regarded games, or some other factor. Many of these best game have a so-called "replay value", such as RPGs, infinite universes, or sports franchises.
</p>


<h3>Themes</h3>
<p>
Mobygames uses 43 themes to delineate aspects of games, which is detailed in their online <a href="http://www.mobygames.com/glossary/genres">glossary</a>. While some games have multiple themes, others have no listed theme - it's unclear whether this is due to user-contribution error or the unique qualities of some games. Super Mario 3, one of the highest-regarded games ever created, doesn't list a theme; it doesn't easily fall into any of the 43 listed genres either. Arcade? Puzzle-solving? Probably neither.
</p>
<p>
Of the 38,615 games listing at least one theme, the image below shows the distribution of themes as a percentage decimal.
</p>
<img src="/img/games_by_theme.png" class="img-responsive center-block">

<p>

I was also curious which themes were most likely to occur simultaneously. Think of the following interactive as such: "If I were to randomly select from the pool of Arcade games, what is the likelihood that it also has a _____ theme?" <i>Click the Themes on the left side to reorganize the heatmap, and hover over the cells to gain further details</i>.
</p>
<style>
      svg *::selection {
         background : transparent;
         width: 700px;
         height: 500px;
         margin-left: 30px;
         font-size: 13px;	
      }
     
      svg *::-moz-selection {
         background:transparent;
      } 
     
      svg *::-webkit-selection {
         background:transparent;
      }
      rect.selection {
        stroke          : #333;
        stroke-dasharray: 4px;
        stroke-opacity  : 0.5;
        fill            : transparent;
      }

      rect.cell-border {
        stroke: #eee;
        stroke-width:0.3px;   
      }

      rect.cell-selected {
        stroke: rgb(51,102,153);
        stroke-width:0.5px;   
      }

      rect.cell-hover {
        stroke: #F00;
        stroke-width:0.3px;   
      }

      text.mono {
        font-size: 9pt;
        font-family: Andale Mono, Andale Mono;
        fill: #4a4a4a;
      }

      text.text-selected {
        fill: #000;
      }

      text.text-highlight {
        fill: #c00;
      }
      text.text-hover {
        fill: #00C;
      }
      #tooltip {
        position: absolute;
        width: 200px;
        height: auto;
        padding: 10px;
        background-color: white;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        pointer-events: none;
      }

      #tooltip.hidden {
        display: none;
      }

      #tooltip p {
        margin: 0;
        font-family: Andale Mono;
        font-size: 12px;
        line-height: 20px;
      }
</style>


<div id="tooltip" class="hidden">
	<p><span id="value"></span></p>
</div>

<script src="https://d3js.org/d3.v3.min.js"></script>



<div id="chart1" class="text-center"></div>

<script>
var margin = { top: 175, right: 10, bottom: 50, left: 175 },
  cellSize=12;
  col_number=43;
  row_number=43;
  width = cellSize*col_number, // - margin.left - margin.right,
  height = cellSize*row_number , // - margin.top - margin.bottom,
  //gridSize = Math.floor(width / 24),
  legendElementWidth = cellSize*2.5,
  colorBuckets = 11,
  colors = ['#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
  hcrow = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],
  hccol = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],
  rowLabel = ['Adult','Anime/Manga','Arcade','BattleMech','Board/PartyGame','Cards/Tiles','Casino','Chess','Comics','Cyberpunk/DarkSci-Fi','Detective/Mystery','Fantasy','Fighting','Flight','GameShow','Helicopter','HistoricalBattle','Horror','InteractiveFiction (IF)','IF (w/Graphics)','InteractiveMovie','Managerial','MartialArts','Meditative/Zen','Mental Training','Naval','Paddle/Pong','PersistentUniverse','Pinball','Post-Apocalyptic','Puzzle-Solving','Real-Time','Rhythm/Music','Sci-Fi/Futuristic','Shooter','Spy/Espionage','Stealth','Survival','Tank','Train','Turn-based','VideoBackdrop','VisualNovel'],
  colLabel = ['Adult','Anime/Manga','Arcade','BattleMech','Board/PartyGame','Cards/Tiles','Casino','Chess','Comics','Cyberpunk/DarkSci-Fi','Detective/Mystery','Fantasy','Fighting','Flight','GameShow','Helicopter','HistoricalBattle','Horror','InteractiveFiction (IF)','IF (w/Graphics)','InteractiveMovie','Managerial','MartialArts','Meditative/Zen','Mental Training','Naval','Paddle/Pong','PersistentUniverse','Pinball','Post-Apocalyptic','Puzzle-Solving','Real-Time','Rhythm/Music','Sci-Fi/Futuristic','Shooter','Spy/Espionage','Stealth','Survival','Tank','Train','Turn-based','VideoBackdrop','VisualNovel'];

d3.csv("/data/data_heatmap.csv",
function(d) {
  return {
    row:   +d.row_idx,
    col:   +d.col_idx,
    value: +d.vgfreq
  };
},
function(error, data) {
  var colorScale = d3.scale.linear()
      .domain([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .range(colors);
  
  var charta = d3.select("div#chart1").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      ;
  var rowSortOrder=false;
  var colSortOrder=false;
  var rowLabels = charta.append("g")
      .selectAll(".rowLabelg")
      .data(rowLabel)
      .enter()
      .append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return hcrow.indexOf(i+1) * cellSize; })
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
      .attr("class", function (d,i) { return "rowLabel mono r"+i;} ) 
      .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
      .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
      .on("click", function(d,i) {rowSortOrder=!rowSortOrder; sortbylabel("r",i,rowSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
      ;

  var colLabels = charta.append("g")
      .selectAll(".colLabelg")
      .data(colLabel)
      .enter()
      .append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return hccol.indexOf(i+1) * cellSize; })
      .style("text-anchor", "left")
      .attr("transform", "translate("+cellSize/2 + ",-6) rotate (-90)")
      .attr("class",  function (d,i) { return "colLabel mono c"+i;} )
      .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
      .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
      .on("click", function(d,i) {colSortOrder=!colSortOrder;  sortbylabel("c",i,colSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
      ;

  var heatMap = charta.append("g").attr("class","g3")
        .selectAll(".cellg")
        .data(data,function(d){return d.row+":"+d.col;})
        .enter()
        .append("rect")
        .attr("x", function(d) { return hccol.indexOf(d.col) * cellSize; })
        .attr("y", function(d) { return hcrow.indexOf(d.row) * cellSize; })
        .attr("class", function(d){return "cell cell-border cr"+(d.row-1)+" cc"+(d.col-1);})
        .attr("width", cellSize)
        .attr("height", cellSize)
        .style("fill", function(d) { return colorScale(d.value); })
        /* .on("click", function(d) {
               var rowtext=d3.select(".r"+(d.row-1));
               if(rowtext.classed("text-selected")==false){
                   rowtext.classed("text-selected",true);
               }else{
                   rowtext.classed("text-selected",false);
               }
        })*/
        .on("mouseover", function(d){
               //highlight text
               d3.select(this).classed("cell-hover",true);
               d3.selectAll(".rowLabel").classed("text-highlight",function(r,ri){ return ri==(d.row-1);});
               d3.selectAll(".colLabel").classed("text-highlight",function(c,ci){ return ci==(d.col-1);});
        
               //Update the tooltip position and value
               d3.select("#tooltip")
                 .style("left", (d3.event.pageX+10) + "px")
                 .style("top", (d3.event.pageY-10) + "px")
                 .select("#value")
                 .text(d.value+"% of "+rowLabel[d.row-1]+" games have a "+colLabel[d.col-1]+" theme");  
               //Show the tooltip
               d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function(){
               d3.select(this).classed("cell-hover",false);
               d3.selectAll(".rowLabel").classed("text-highlight",false);
               d3.selectAll(".colLabel").classed("text-highlight",false);
               d3.select("#tooltip").classed("hidden", true);
        })
        ;

  var legend = charta.selectAll(".legend")
      .data([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .enter().append("g")
      .attr("class", "legend");
 
  legend.append("rect")
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", height+(cellSize*2))
    .attr("width", legendElementWidth)
    .attr("height", cellSize)
    .style("fill", function(d, i) { return colors[i]; });
 
  legend.append("text")
    .attr("class", "mono")
    .text(function(d) { return d; })
    .attr("width", legendElementWidth)
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", height + (cellSize*4));

// Change ordering of cells

  function sortbylabel(rORc,i,sortOrder){
       var t = charta.transition().duration(1500);
       var vgfreq=[];
       var sorted; // sorted is zero-based index
       d3.selectAll(".c"+rORc+i) 
         .filter(function(ce){
            vgfreq.push(ce.value);
          })
       ;
       if(rORc=="r"){ // sort vgfreq of a gene
         sorted=d3.range(col_number).sort(function(a,b){ if(sortOrder){ return vgfreq[b]-vgfreq[a];}else{ return vgfreq[a]-vgfreq[b];}});
         t.selectAll(".cell")
           .attr("x", function(d) { return sorted.indexOf(d.col-1) * cellSize; })
           ;
         t.selectAll(".colLabel")
          .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
         ;
       }else{ // sort vgfreq of a contrast
         sorted=d3.range(row_number).sort(function(a,b){if(sortOrder){ return vgfreq[b]-vgfreq[a];}else{ return vgfreq[a]-vgfreq[b];}});
         t.selectAll(".cell")
           .attr("y", function(d) { return sorted.indexOf(d.row-1) * cellSize; })
           ;
         t.selectAll(".rowLabel")
          .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
         ;
       }
  }

  d3.select("#order").on("change",function(){
    order(this.value);
  });
  

  var sa=d3.select(".g3")
      .on("mousedown", function() {
          if( !d3.event.altKey) {
             d3.selectAll(".cell-selected").classed("cell-selected",false);
             d3.selectAll(".rowLabel").classed("text-selected",false);
             d3.selectAll(".colLabel").classed("text-selected",false);
          }
         var p = d3.mouse(this);
         sa.append("rect")
         .attr({
             rx      : 0,
             ry      : 0,
             class   : "selection",
             x       : p[0],
             y       : p[1],
             width   : 1,
             height  : 1
         })
      })
      .on("mousemove", function() {
         var s = sa.select("rect.selection");
      
         if(!s.empty()) {
             var p = d3.mouse(this),
                 d = {
                     x       : parseInt(s.attr("x"), 10),
                     y       : parseInt(s.attr("y"), 10),
                     width   : parseInt(s.attr("width"), 10),
                     height  : parseInt(s.attr("height"), 10)
                 },
                 move = {
                     x : p[0] - d.x,
                     y : p[1] - d.y
                 }
             ;
      
             if(move.x < 1 || (move.x*2<d.width)) {
                 d.x = p[0];
                 d.width -= move.x;
             } else {
                 d.width = move.x;       
             }
      
             if(move.y < 1 || (move.y*2<d.height)) {
                 d.y = p[1];
                 d.height -= move.y;
             } else {
                 d.height = move.y;       
             }
             s.attr(d);
      
                 // deselect all temporary selected state objects
             d3.selectAll('.cell-selection.cell-selected').classed("cell-selected", false);
             d3.selectAll(".text-selection.text-selected").classed("text-selected",false);

             d3.selectAll('.cell').filter(function(cell_d, i) {
                 if(
                     !d3.select(this).classed("cell-selected") && 
                         // inner circle inside selection frame
                     (this.x.baseVal.value)+cellSize >= d.x && (this.x.baseVal.value)<=d.x+d.width && 
                     (this.y.baseVal.value)+cellSize >= d.y && (this.y.baseVal.value)<=d.y+d.height
                 ) {
      
                     d3.select(this)
                     .classed("cell-selection", true)
                     .classed("cell-selected", true);

                     d3.select(".r"+(cell_d.row-1))
                     .classed("text-selection",true)
                     .classed("text-selected",true);

                     d3.select(".c"+(cell_d.col-1))
                     .classed("text-selection",true)
                     .classed("text-selected",true);
                 }
             });
         }
      })
      .on("mouseup", function() {
            // remove selection frame
         sa.selectAll("rect.selection").remove();
      
             // remove temporary selection marker class
         d3.selectAll('.cell-selection').classed("cell-selection", false);
         d3.selectAll(".text-selection").classed("text-selection",false);
      })
      .on("mouseout", function() {
         if(d3.event.relatedTarget.tagName=='html') {
                 // remove selection frame
             sa.selectAll("rect.selection").remove();
                 // remove temporary selection marker class
             d3.selectAll('.cell-selection').classed("cell-selection", false);
             d3.selectAll(".rowLabel").classed("text-selected",false);
             d3.selectAll(".colLabel").classed("text-selected",false);
         }
      })
      ;
});
</script>
<p>

These two graphics make it evident that Puzzle-Solving, Shooter, Sci-Fi, and Arcade themed games are at a higher rate than other games.
</p>
<p>
Before moving on, here are a couple interesting observations, from most to least sensical:
</p>
<ul>
<li>68% of Adult-themed games have an Anime/Manga theme, while only 20% of Anime/Manga-themed games are adult themed.</li><li>Only 46% of Helicopter games are Flight-themed - How could that be?!? What are you doing in these other 54% of Helicopter games?</li><li>3% of Rhythm/Music games are Shooter-themed. No word to report on the Samba de Amigo/Halo crossover though.</li><li>There is one Adult-themed Tank game. What could this possibly entail, you ask? Do yourself a favor and read the <a href="http://www.mobygames.com/game/space-fuck">game description</a>.</li>
</ul>
<p>
</p>
<h3>Themes</h3>
<p>

Mobygames uses 8 genres to categorize game types. The vast majority of games have at least one genre, many having multiple. Shovelware games, which are packages of dissimilar games (think <b>The 1000 Best Windows 95 Games Bundle</b>) are responsible for many of the missing titles.
</p>
<img src="/img/games_by_genre.png" class="img-responsive center-block">

<p>

It's a bit unexpected that Action games have such a dominating share of the market. This is likely due to its emphasis on reflex-based gameplay, which is a component of most of the other genres - especially racing and sports games.
</p>
<p>
Similar to the theme interactive, I was curious which themes were most likely to occur in a given genre of game. Think of the following interactive as such: "If I were to randomly select from the pool of Educational games, what is the likelihood that it has a _____ theme?" <i>Click the Genres on the left side to reorganize the heatmap, and hover over the cells to gain further details</i>.
</p>
<div id="chart2" class="text-center"></div>

<script type="text/javascript">
var margin = { top: 175, right: 10, bottom: 50, left: 175 },
  cellSize=12;
  cl_number=43;
  rw_number=8;
  widthy = cellSize*cl_number, // - margin.left - margin.right,
  heighty = cellSize*rw_number , // - margin.top - margin.bottom,
  //gridSize = Math.floor(widthy / 24),
  legendElementWidth = cellSize*2.5,
  colorBuckets = 11,
  colors = ['#FFFFFF','#F1EEF6','#E6D3E1','#DBB9CD','#D19EB9','#C684A4','#BB6990','#B14F7C','#A63467','#9B1A53','#91003F'];
  hcrw = [1,2,3,4,5,6,7,8],
  hccl = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],
  rwLabel = ['Action','Adventure','Educational','RPG','Racing','Simulation','Sports','Strategy'],
  clLabel = ['Adult','Anime/Manga','Arcade','BattleMech','Board/PartyGame','Cards/Tiles','Casino','Chess','Comics','Cyberpunk/DarkSci-Fi','Detective/Mystery','Fantasy','Fighting','Flight','GameShow','Helicopter','HistoricalBattle','Horror','InteractiveFiction (IF)','IF (w/Graphics)','InteractiveMovie','Managerial','MartialArts','Meditative/Zen','Mental Training','Naval','Paddle/Pong','PersistentUniverse','Pinball','Post-Apocalyptic','Puzzle-Solving','Real-Time','Rhythm/Music','Sci-Fi/Futuristic','Shooter','Spy/Espionage','Stealth','Survival','Tank','Train','Turn-based','VideoBackdrop','VisualNovel'];

d3.csv("/data/data_heatmap2.csv",
function(d) {
  return {
    rw:   +d.rw_id,
    cl:   +d.cl_id,
    value: +d.vgfre
  };
},
function(error, data) {
  var colorScale = d3.scale.linear()
      .domain([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .range(colors);
  
  var chartb = d3.select("div#chart2").append("svg")
      .attr("width", widthy + margin.left + margin.right)
      .attr("height", heighty + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      ;

  var rwSortOrder=false;
  var rwLabels = chartb.append("g")
      .selectAll(".rwLabelg")
      .data(rwLabel)
      .enter()
      .append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return hcrw.indexOf(i+1) * cellSize; })
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + cellSize / 1.5 + ")")
      .attr("class", function (d,i) { return "rwLabel mono rr"+i;} ) 
      .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
      .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
      .on("click", function(d,i) {rwSortOrder=!rwSortOrder; sortbylabel("rr",i,rwSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
      ;

  var clSortOrder=false;
  var clLabels = chartb.append("g")
      .selectAll(".clLabelg")
      .data(clLabel)
      .enter()
      .append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return hccl.indexOf(i+1) * cellSize; })
      .style("text-anchor", "left")
      .attr("transform", "translate("+cellSize/2 + ",-6) rotate (-90)")
      .attr("class",  function (d,i) { return "clLabel mono cc"+i;} )
      .on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
      .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})
      .on("click", function(d,i) {clSortOrder=!clSortOrder;  sortbylabel("cc",i,clSortOrder);d3.select("#order").property("selectedIndex", 4).node().focus();;})
      ;

  var heat = chartb.append("g").attr("class","g3")
        .selectAll(".cellg")
        .data(data,function(d){return d.rw+":"+d.cl;})
        .enter()
        .append("rect")
        .attr("x", function(d) { return hccl.indexOf(d.cl) * cellSize; })
        .attr("y", function(d) { return hcrw.indexOf(d.rw) * cellSize; })
        .attr("class", function(d){return "cell cell-border ccrr"+(d.rw-1)+" cccc"+(d.cl-1);})
        .attr("width", cellSize)
        .attr("height", cellSize)
        .style("fill", function(d) { return colorScale(d.value); })
        /* .on("click", function(d) {
               var rwtext=d3.select(".rr"+(d.rw-1));
               if(rwtext.classed("text-selected")==false){
                   rwtext.classed("text-selected",true);
               }else{
                   rwtext.classed("text-selected",false);
               }
        })*/
        .on("mouseover", function(d){
               //highlight text
               d3.select(this).classed("cell-hover",true);
               d3.selectAll(".rwLabel").classed("text-highlight",function(r,ri){ return ri==(d.rw-1);});
               d3.selectAll(".clLabel").classed("text-highlight",function(c,ci){ return ci==(d.cl-1);});
        
               //Update the tooltip position and value
               d3.select("#tooltip")
                 .style("left", (d3.event.pageX+10) + "px")
                 .style("top", (d3.event.pageY-10) + "px")
                 .select("#value")
                 .text(d.value+"% of "+rwLabel[d.rw-1]+" games have a "+clLabel[d.cl-1]+" theme");  
               //Show the tooltip
               d3.select("#tooltip").classed("hidden", false);
        })
        .on("mouseout", function(){
               d3.select(this).classed("cell-hover",false);
               d3.selectAll(".rwLabel").classed("text-highlight",false);
               d3.selectAll(".clLabel").classed("text-highlight",false);
               d3.select("#tooltip").classed("hidden", true);
        })
        ;

  var legend = chartb.selectAll(".legend")
      .data([ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .enter().append("g")
      .attr("class", "legend");
 
  legend.append("rect")
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", heighty+(cellSize*2))
    .attr("width", legendElementWidth)
    .attr("height", cellSize)
    .style("fill", function(d, i) { return colors[i]; });
 
  legend.append("text")
    .attr("class", "mono")
    .text(function(d) { return d; })
    .attr("width", legendElementWidth)
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", heighty + (cellSize*4));

// Change ordering of cells

  function sortbylabel(rrORcc,i,sortOrder){
       var t = chartb.transition().duration(1500);
       var vgfre=[];
       var sorted; // sorted is zero-based index
       d3.selectAll(".cc"+rrORcc+i) 
         .filter(function(ce){
            vgfre.push(ce.value);
          })
       ;
       if(rrORcc=="rr"){ // sort vgfre of a gene
         sorted=d3.range(cl_number).sort(function(a,b){ if(sortOrder){ return vgfre[b]-vgfre[a];}else{ return vgfre[a]-vgfre[b];}});
         t.selectAll(".cell")
           .attr("x", function(d) { return sorted.indexOf(d.cl-1) * cellSize; })
           ;
         t.selectAll(".clLabel")
          .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
         ;
       }else{ // sort vgfreq of a contrast
         sorted=d3.range(rw_number).sort(function(a,b){if(sortOrder){ return vgfre[b]-vgfre[a];}else{ return vgfre[a]-vgfre[b];}});
         t.selectAll(".cell")
           .attr("y", function(d) { return sorted.indexOf(d.rw-1) * cellSize; })
           ;
         t.selectAll(".rwLabel")
          .attr("y", function (d, i) { return sorted.indexOf(i) * cellSize; })
         ;
       }
  }

  d3.select("#order").on("change",function(){
    order(this.value);
  });
  

  var sa=d3.select(".g3")
      .on("mousedown", function() {
          if( !d3.event.altKey) {
             d3.selectAll(".cell-selected").classed("cell-selected",false);
             d3.selectAll(".rwLabel").classed("text-selected",false);
             d3.selectAll(".clLabel").classed("text-selected",false);
          }
         var p = d3.mouse(this);
         sa.append("rect")
         .attr({
             rx      : 0,
             ry      : 0,
             class   : "selection",
             x       : p[0],
             y       : p[1],
             widthy   : 1,
             heighty  : 1
         })
      })
      .on("mousemove", function() {
         var s = sa.select("rect.selection");
      
         if(!s.empty()) {
             var p = d3.mouse(this),
                 d = {
                     x       : parseInt(s.attr("x"), 10),
                     y       : parseInt(s.attr("y"), 10),
                     widthy   : parseInt(s.attr("width"), 10),
                     heighty  : parseInt(s.attr("height"), 10)
                 },
                 move = {
                     x : p[0] - d.x,
                     y : p[1] - d.y
                 }
             ;
      
             if(move.x < 1 || (move.x*2<d.widthy)) {
                 d.x = p[0];
                 d.widthy -= move.x;
             } else {
                 d.widthy = move.x;       
             }
      
             if(move.y < 1 || (move.y*2<d.heighty)) {
                 d.y = p[1];
                 d.heighty -= move.y;
             } else {
                 d.heighty = move.y;       
             }
             s.attr(d);
      
                 // deselect all temporary selected state objects
             d3.selectAll('.cell-selection.cell-selected').classed("cell-selected", false);
             d3.selectAll(".text-selection.text-selected").classed("text-selected",false);

             d3.selectAll('.cell').filter(function(cell_d, i) {
                 if(
                     !d3.select(this).classed("cell-selected") && 
                         // inner circle inside selection frame
                     (this.x.baseVal.value)+cellSize >= d.x && (this.x.baseVal.value)<=d.x+d.widthy && 
                     (this.y.baseVal.value)+cellSize >= d.y && (this.y.baseVal.value)<=d.y+d.heighty
                 ) {
      
                     d3.select(this)
                     .classed("cell-selection", true)
                     .classed("cell-selected", true);

                     d3.select(".rr"+(cell_d.rw-1))
                     .classed("text-selection",true)
                     .classed("text-selected",true);

                     d3.select(".cc"+(cell_d.cl-1))
                     .classed("text-selection",true)
                     .classed("text-selected",true);
                 }
             });
         }
      })
      .on("mouseup", function() {
            // remove selection frame
         sa.selectAll("rect.selection").remove();
      
             // remove temporary selection marker class
         d3.selectAll('.cell-selection').classed("cell-selection", false);
         d3.selectAll(".text-selection").classed("text-selection",false);
      })
      .on("mouseout", function() {
         if(d3.event.relatedTarget.tagName=='html') {
                 // remove selection frame
             sa.selectAll("rect.selection").remove();
                 // remove temporary selection marker class
             d3.selectAll('.cell-selection').classed("cell-selection", false);
             d3.selectAll(".rwLabel").classed("text-selected",false);
             d3.selectAll(".clLabel").classed("text-selected",false);
         }
      })
      ;
});
</script>

<p>
The data set is quite large with and there is much to still be explored, so stayed tuned to the site for additional posts!
</p>

<hr>

<p>
Have feedback, questions, or want to see something else added? Check out the code I used to create <a href="https://github.com/mikeleeco/mikeleeco.github.com/blob/master/_posts/2015-06-10-video-games-interactive.md">this page</a> or fork my repository to propose changes. <a class="btn btn-primary" href="https://github.com/mikeleeco/Mobygames-Scraper/fork">Edit My Code</a>
</p>

