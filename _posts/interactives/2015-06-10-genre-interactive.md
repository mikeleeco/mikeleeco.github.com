---
layout: interactive
title: Video Games Genre Interactive
description: "An interactive D3.js heatmap describing the themes of video games by genre."
tags: [MobyGames, Video Games, FiveThirtyEight, data, R, ggplot2, rvest, D3.js]
date: 2015-04-08
category: interactives
image:
  teaser: genre_interactive.png
  related: genre_interactive.png
---
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

<script src="http://d3js.org/d3.v3.min.js"></script>

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
