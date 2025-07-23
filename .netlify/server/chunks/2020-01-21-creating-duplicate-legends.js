import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Quick ggplot2 Tip: Creating Duplicate Legends",
  "author": "",
  "date": "2020-01-21",
  "categories": "posts",
  "tags": ["dataviz", "ggplot2", "animation", "R"],
  "featured": true,
  "description": "Duplicate a plot legend's to add a second key where the audience can better understand your figure",
  "img": "/img/midwestPlotLegend.png"
};
const {
  title,
  author,
  date,
  categories,
  tags,
  featured,
  description,
  img
} = metadata;
function _020_01_21_creating_duplicate_legends_md($$payload) {
  $$payload.out += `<h2>Mastering the R package <code>ggplot2</code></h2> <p>The <code>ggplot2</code> package provides powerful methods to display data as
graphics. The beauty of the package lies in it’s simplicity -
understanding the core methods (applying variables to aesthetics and
transformations) covers ~95% of static visualizations a data
visualization developer might be interested in generating. Most of final
5% can be achieved by understanding the infrastructure of the package.
One such example is how plot components are “written” to the graphics
device.</p> <p>I’ll walk through how legends are generated and how we can create a
second duplicate legend to bookend the top and bottom of a long bar
plot. I I contributed <a href="https://stackoverflow.com/questions/46724801/duplicate-same-legend-twice-in-ggplot2/" rel="nofollow">a method to solve this problem on
stackoverflow</a> and wanted to get into some further details in this post.</p> <p><strong>Let’s walk through creating a second legend in ggplot2.</strong></p> <h2>Creating Dual Legends in ggplot2 - Libraries and Data Reshaping</h2> <p>The <code>midwest</code> data set from the <code>ggplot2</code> package contains demographic
information of midwest counties and should work as a representative
dummy data set for this post. Here is a quick overview of the <code>midwest</code> data set using <code>glimpse</code>:</p> <details open><summary>R Libraries, \`Midwest\` data set overview</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># load libraries and fonts</span>
    library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>scales<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>dplyr<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>extrafont<span class="token punctuation">)</span>
    loadfonts<span class="token punctuation">(</span>quiet <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
    glimpse<span class="token punctuation">(</span>midwest<span class="token punctuation">)</span></code>`)}</pre></details> <p>I’ll subset the data a little bit to accomodate the plot and organize
the display order of counties by their total population. The <code>theme_white</code> block of code adds some basic aesthetics and fonts.</p> <details open><summary>R Libraries, Data Manipulation, and Plot Generation</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># load libraries and fonts</span>
    library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>scales<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>extrafont<span class="token punctuation">)</span>
    loadfonts<span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token comment"># data subset and refactoring</span>
    midwest <span class="token operator">&lt;-</span> midwest<span class="token punctuation">[</span><span class="token operator">!</span>duplicated<span class="token punctuation">(</span>midwest<span class="token operator">$</span>county<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    midwestAAU <span class="token operator">&lt;-</span> midwest <span class="token percent-operator operator">%>%</span> filter<span class="token punctuation">(</span>category <span class="token operator">==</span> <span class="token string">"AAU"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span> arrange<span class="token punctuation">(</span>poptotal<span class="token punctuation">)</span>
    midwestAAU<span class="token operator">$</span>county <span class="token operator">&lt;-</span> factor<span class="token punctuation">(</span>midwestAAU<span class="token operator">$</span>county<span class="token punctuation">,</span>levels <span class="token operator">=</span> midwestAAU<span class="token operator">$</span>county<span class="token punctuation">,</span>labels <span class="token operator">=</span> toupper<span class="token punctuation">(</span>midwestAAU<span class="token operator">$</span>county<span class="token punctuation">)</span><span class="token punctuation">)</span>

    gg <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>midwestAAU<span class="token punctuation">)</span> <span class="token operator">+</span> geom_bar<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>y <span class="token operator">=</span> poptotal<span class="token punctuation">,</span> x <span class="token operator">=</span> county<span class="token punctuation">,</span> fill <span class="token operator">=</span> state<span class="token punctuation">)</span><span class="token punctuation">,</span> stat <span class="token operator">=</span> <span class="token string">"identity"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> labels <span class="token operator">=</span> comma<span class="token punctuation">)</span> <span class="token operator">+</span> coord_flip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Random Midwest Counties Arranged by Total Population"</span><span class="token punctuation">,</span>y <span class="token operator">=</span> <span class="token string">"Total Population"</span><span class="token punctuation">,</span> x  <span class="token operator">=</span> <span class="token string">"County"</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"State"</span><span class="token punctuation">)</span> <span class="token operator">+</span> scale_fill_brewer<span class="token punctuation">(</span>palette <span class="token operator">=</span> <span class="token string">"Set3"</span><span class="token punctuation">)</span>

    <span class="token comment"># plot aesthetics</span>
    theme_white <span class="token operator">&lt;-</span> theme<span class="token punctuation">(</span>text <span class="token operator">=</span> element_text<span class="token punctuation">(</span>family<span class="token operator">=</span><span class="token string">"Open Sans"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         panel.grid.major.y<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         panel.grid.major.x<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         panel.grid.minor.x<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         panel.grid.minor.y<span class="token operator">=</span>element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         plot.title<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">24</span><span class="token punctuation">,</span>family <span class="token operator">=</span> <span class="token string">"Open Sans"</span><span class="token punctuation">,</span>lineheight<span class="token operator">=</span><span class="token number">.75</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         axis.title.x<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> family <span class="token operator">=</span> <span class="token string">"Open Sans Semibold"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         axis.title.y<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>family <span class="token operator">=</span> <span class="token string">"Open Sans Semibold"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         axis.text.x<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         axis.text.y<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         axis.ticks <span class="token operator">=</span> element_blank<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         legend.position <span class="token operator">=</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span>
                         legend.margin <span class="token operator">=</span> margin<span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># apply theme and export plot</span>
    gg <span class="token operator">&lt;-</span> gg <span class="token operator">+</span> theme_white
    ggsave<span class="token punctuation">(</span>gg<span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlot.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p><img src="/img/midwestPlot.png" alt="Original Plot - Random Midwest Counties Arranged by Total
Population"/></p> <p>Now that we’ve generated our plot we can focus on creating the second
legend.</p> <h2>Creating a Second Legend in <code>ggplot2</code></h2> <p>So far we’ve covered <code>ggplot2</code> functionalities that should create the
~95% of plots I discussed earlier. To expand upon these, let’s get into
some <code>ggplot2</code> internals. The function <code>ggplotGrob</code> allows us to parse
our saved <code>gg</code> <em>gr</em>aphical <em>ob</em>ject. This object can be manipulated to
override default <code>ggplot2</code> conventions or provide methods to hack our
plot in ways that the package isn’t designed for intentionally
(i.e. where there isn’t a compiled function.)</p> <p>The <code>createTopLegend</code> function below easily duplicates a bottom legend
at the top of the plot by:</p> <ol><li>Grabbing the ggplot graphical object</li> <li>Retrieving the legendGrob within the ggplot object</li> <li>Duplicating the legendGrob layout</li> <li>Specifying the location of the new legendGrob</li> <li>Appending the new legendGrob to the ggplot object</li></ol> <details open><summary>createTopLegend Function</summary> <pre class="language-r">${html(`<code class="language-r">    createTopLegend <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>ggplot<span class="token punctuation">,</span> heightFromTop <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment"># grab the saved ggplot2 object</span>
      g <span class="token operator">&lt;-</span> ggplotGrob<span class="token punctuation">(</span>ggplot<span class="token punctuation">)</span>

      <span class="token comment"># count the number of grobs in this plot (which we'll use to append another)</span>
      nGrobs <span class="token operator">&lt;-</span> <span class="token punctuation">(</span>length<span class="token punctuation">(</span>g<span class="token operator">$</span>grobs<span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token comment"># find the guide-box object which provides the plot information for the legend</span>
      legendGrob <span class="token operator">&lt;-</span> which<span class="token punctuation">(</span>g<span class="token operator">$</span>layout<span class="token operator">$</span>name <span class="token operator">==</span> <span class="token string">"guide-box"</span><span class="token punctuation">)</span>

      <span class="token comment"># duplicate the legend's grob and layout</span>
      g<span class="token operator">$</span>grobs<span class="token punctuation">[</span><span class="token punctuation">[</span>nGrobs<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> g<span class="token operator">$</span>grobs<span class="token punctuation">[</span><span class="token punctuation">[</span>legendGrob<span class="token punctuation">]</span><span class="token punctuation">]</span>
      g<span class="token operator">$</span>layout<span class="token punctuation">[</span>nGrobs<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> g<span class="token operator">$</span>layout<span class="token punctuation">[</span>legendGrob<span class="token punctuation">,</span><span class="token punctuation">]</span>

      <span class="token comment"># g$layout$t &lt;- ifelse( g$layout$t > heightFromTop, g$layout$t + 1, g$layout$t)</span>

      <span class="token comment"># retrieve the alignment of the legend</span>
      rightLeft <span class="token operator">&lt;-</span> unname<span class="token punctuation">(</span>unlist<span class="token punctuation">(</span>g<span class="token operator">$</span>layout<span class="token punctuation">[</span>legendGrob<span class="token punctuation">,</span> c<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token comment"># specify the location of the new legendGrob (t,r,b,l)</span>
      <span class="token comment"># use the heightFromTop argument to adjust the vertical positioning</span>
      g<span class="token operator">$</span>layout<span class="token punctuation">[</span>nGrobs<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span>heightFromTop<span class="token punctuation">,</span> rightLeft<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> heightFromTop<span class="token punctuation">,</span> rightLeft<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      g
    <span class="token punctuation">&#125;</span></code>`)}</pre></details> <p>We can then apply the <code>createTopLegend</code> function on our saved <code>ggplot2</code> object <code>gg</code> and redraw our plot with <code>grid.draw</code>:</p> <details open><summary>Plot with Duplicate Legend…Overlapping</summary> <pre class="language-r">${html(`<code class="language-r">    gg2 <span class="token operator">&lt;-</span> createTopLegend<span class="token punctuation">(</span>gg<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    ggsave<span class="token punctuation">(</span>grid.draw<span class="token punctuation">(</span>gg2<span class="token punctuation">)</span><span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlot2.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p><img src="/img/midwestPlot2.png" alt="Overlapping Title/Top Legend - Random Midwest Counties Arranged by
Total Population"/></p> <p>You’ll notice that our top legend now overlaps with the positioning of
the title. To remedy this we can add some additional margins from within <code>theme_white</code>. We’ll add a bottom margin to the title to add spacing, a
bottom margin to the legends, and a negative margin to the bottom of the
plot. Each of these margins work in tandem so the negative plot margin
is necessary to account for the extra spacing we’re adding to the top
legend for the plot to be appropriately spaced.</p> <details open><summary>Fiddling with Title, Legend, and Plot Margins to Accommodate
for the Top Legend</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># plot aesthetics</span>
    theme_white <span class="token operator">&lt;-</span> theme_white <span class="token operator">+</span> theme<span class="token punctuation">(</span>
                         plot.title<span class="token operator">=</span>element_text<span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">24</span><span class="token punctuation">,</span>family <span class="token operator">=</span> <span class="token string">"Open Sans"</span><span class="token punctuation">,</span>lineheight<span class="token operator">=</span><span class="token number">.75</span><span class="token punctuation">,</span> margin <span class="token operator">=</span> margin<span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         legend.margin <span class="token operator">=</span> margin<span class="token punctuation">(</span>b <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                         plot.margin <span class="token operator">=</span> margin<span class="token punctuation">(</span>t <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span> l <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span>

                         <span class="token punctuation">)</span>
    gg <span class="token operator">&lt;-</span> gg <span class="token operator">+</span> theme_white

    gg2 <span class="token operator">&lt;-</span> createTopLegend<span class="token punctuation">(</span>gg<span class="token punctuation">,</span> heightFromTop <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span>
    ggsave<span class="token punctuation">(</span>grid.draw<span class="token punctuation">(</span>gg2<span class="token punctuation">)</span><span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlotLegend.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <hr/> <p><img src="/img/midwestPlotLegend.png" alt="Final Product - Random Midwest Counties Arranged by Total
Population"/></p> <hr/>`;
}
export {
  _020_01_21_creating_duplicate_legends_md as default,
  metadata
};
