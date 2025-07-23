import "clsx";
import { h as html } from "./html.js";
const metadata = {
  "title": "Quick ggplot2 Tip: Left Align ggplot2 Titles, Subtitles, and Footnotes with Y-Axis Label",
  "author": "",
  "date": "2020-01-21",
  "categories": "posts",
  "tags": ["dataviz", "ggplot2", "R"],
  "featured": true,
  "description": "Override ggplot2 defaults to add a consistent left-alignment throughout your figure",
  "img": "/img/midwestPlotLeftAligned.png"
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
function _020_01_21_left_align_ggplot2_titles_subtitles_and_footnotes_md($$payload) {
  $$payload.out += `<h2>Mastering the R package <code>ggplot2</code></h2> <p>The <code>ggplot2</code> package provides powerful methods to display data as
graphics. The beauty of the package lies in it’s simplicity -
understanding the core methods (applying variables to aesthetics and
transformations) covers ~95% of static visualizations a data
visualization developer might be interested in generating. Most of final
5% can be achieved by understanding the infrastructure of the package.
One such example is how plot components are “written” to the graphics
device.</p> <p>I’ll walk through how titles, subtitles, and footnotes can be
repositioned to align with the positioning of the y-axis label.</p> <p><strong>Let’s walk through left-aligning plot components in ggplot2.</strong></p> <h2>Libraries and Data Reshaping</h2> <p>The <code>midwest</code> data set from the <code>ggplot2</code> package contains demographic
information of midwest counties and should work as a representative
dummy data set for this post. Here is a quick overview of the <code>midwest</code> data set using <code>glimpse</code>:</p> <details open><summary>R Libraries, \`Midwest\` data set overview</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># load libraries and fonts</span>
    library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>scales<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>dplyr<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
    library<span class="token punctuation">(</span>extrafont<span class="token punctuation">)</span>
    loadfonts<span class="token punctuation">(</span>quiet <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
    glimpse<span class="token punctuation">(</span>midwest<span class="token punctuation">)</span></code>`)}</pre></details> <p>I’ll subset the data a little bit to accomodate the plot and organize
the display order of counties by their total population. The <code>theme_white</code> block of code adds some basic aesthetics and fonts.</p> <details open><summary>Data Manipulation, and Plot Generation</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># data subset and refactoring</span>
    midwest <span class="token operator">&lt;-</span> midwest<span class="token punctuation">[</span><span class="token operator">!</span>duplicated<span class="token punctuation">(</span>midwest<span class="token operator">$</span>county<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
    midwestAAU <span class="token operator">&lt;-</span> midwest <span class="token percent-operator operator">%>%</span> filter<span class="token punctuation">(</span>category <span class="token operator">==</span> <span class="token string">"AAU"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span> arrange<span class="token punctuation">(</span>poptotal<span class="token punctuation">)</span>
    midwestAAU<span class="token operator">$</span>county <span class="token operator">&lt;-</span> factor<span class="token punctuation">(</span>midwestAAU<span class="token operator">$</span>county<span class="token punctuation">,</span>levels <span class="token operator">=</span> midwestAAU<span class="token operator">$</span>county<span class="token punctuation">,</span>labels <span class="token operator">=</span> toupper<span class="token punctuation">(</span>midwestAAU<span class="token operator">$</span>county<span class="token punctuation">)</span><span class="token punctuation">)</span>

    gg <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span>midwestAAU<span class="token punctuation">)</span> <span class="token operator">+</span> geom_bar<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>y <span class="token operator">=</span> poptotal<span class="token punctuation">,</span> x <span class="token operator">=</span> county<span class="token punctuation">,</span> fill <span class="token operator">=</span> state<span class="token punctuation">)</span><span class="token punctuation">,</span> stat <span class="token operator">=</span> <span class="token string">"identity"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        scale_y_continuous<span class="token punctuation">(</span>expand <span class="token operator">=</span> expand_scale<span class="token punctuation">(</span>mult <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> labels <span class="token operator">=</span> comma<span class="token punctuation">)</span> <span class="token operator">+</span> coord_flip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> theme_minimal<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> labs<span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">"Random Midwest Counties Arranged by Total Population"</span><span class="token punctuation">,</span>y <span class="token operator">=</span> <span class="token string">"Total Population"</span><span class="token punctuation">,</span> x  <span class="token operator">=</span> <span class="token string">"County"</span><span class="token punctuation">,</span> fill <span class="token operator">=</span> <span class="token string">"State"</span><span class="token punctuation">,</span> subtitle <span class="token operator">=</span> <span class="token string">"Chicago, Illinois (Cook County) is farm and away the most populous county in the Midwest"</span><span class="token punctuation">,</span> caption <span class="token operator">=</span> <span class="token string">"Source: Midwest demographics data set in the ggplot2 package."</span><span class="token punctuation">)</span> <span class="token operator">+</span> scale_fill_brewer<span class="token punctuation">(</span>palette <span class="token operator">=</span> <span class="token string">"Set3"</span><span class="token punctuation">)</span>

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
    ggsave<span class="token punctuation">(</span>gg<span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlotDefaultAlignment.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p>Now that we’ve generated our plot we can focus on creating the second
legend.</p> <h2>Left-aligning Titles, Subtitles, and Footnotes with Y-Axis Labels in <code>ggplot2</code></h2> <p>So far we’ve covered <code>ggplot2</code> functionalities that should create the
~95% of plots I discussed earlier. To expand upon these, let’s get into
some <code>ggplot2</code> internals. The function <code>ggplotGrob</code> allows us to parse
our saved <code>gg</code> <em>gr</em>aphical <em>ob</em>ject. This object can be manipulated to
override default <code>ggplot2</code> conventions or provide methods to hack our
plot in ways that the package isn’t designed for intentionally
(i.e. where there isn’t a compiled function.)</p> <p>The <code>alignTitles</code> function below easily duplicates a bottom legend at
the top of the plot by:</p> <ol><li>Grabbing the ggplot graphical object</li> <li>Retrieving the legendGrob within the ggplot object</li> <li>Duplicating the legendGrob layout</li> <li>Specifying the location of the new legendGrob</li> <li>Appending the new legendGrob to the ggplot object</li></ol> <details open><summary>alignTitles Function</summary> <pre class="language-r">${html(`<code class="language-r">    alignTitles <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>ggplot<span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> subtitle <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> caption <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment"># grab the saved ggplot2 object</span>
      g <span class="token operator">&lt;-</span> ggplotGrob<span class="token punctuation">(</span>ggplot<span class="token punctuation">)</span>


      <span class="token comment"># find the object which provides the plot information for the title, subtitle, and caption</span>
      g<span class="token operator">$</span>layout<span class="token punctuation">[</span>which<span class="token punctuation">(</span>g<span class="token operator">$</span>layout<span class="token operator">$</span>name <span class="token operator">==</span> <span class="token string">"title"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">$</span>l <span class="token operator">&lt;-</span> title
      g<span class="token operator">$</span>layout<span class="token punctuation">[</span>which<span class="token punctuation">(</span>g<span class="token operator">$</span>layout<span class="token operator">$</span>name <span class="token operator">==</span> <span class="token string">"subtitle"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">$</span>l <span class="token operator">&lt;-</span> subtitle
      g<span class="token operator">$</span>layout<span class="token punctuation">[</span>which<span class="token punctuation">(</span>g<span class="token operator">$</span>layout<span class="token operator">$</span>name <span class="token operator">==</span> <span class="token string">"caption"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token operator">$</span>l <span class="token operator">&lt;-</span> caption
      g
    <span class="token punctuation">&#125;</span></code>`)}</pre></details> <p>We can then redraw our plot with <code>grid.draw</code>:</p> <details open><summary>Plot with Duplicate Legend…Overlapping</summary> <pre class="language-r">${html(`<code class="language-r">    gg2 <span class="token operator">&lt;-</span> alignTitles<span class="token punctuation">(</span>gg<span class="token punctuation">)</span>
    ggsave<span class="token punctuation">(</span>grid.draw<span class="token punctuation">(</span>gg2<span class="token punctuation">)</span><span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlotDefaultAlignment2.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p>You’ll notice that our caption seems to have disappeared…strange, right?
While the default horizontal alignment for titles and subtitles is
pushed left (<code>hjust = 0</code>) captions are pushed right (<code>hjust = 1</code>.) To
remedy this we can change the argument in <code>theme_white</code>.</p> <details open><summary>Standardize the Title, Subtitle, and Footnote with the Y-Axis
Label</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># plot aesthetics</span>
    theme_white <span class="token operator">&lt;-</span> theme_white <span class="token operator">+</span> theme<span class="token punctuation">(</span>
                         plot.caption <span class="token operator">=</span> element_text<span class="token punctuation">(</span>hjust <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>

                         <span class="token punctuation">)</span>
    gg <span class="token operator">&lt;-</span> gg <span class="token operator">+</span> theme_white

    gg2 <span class="token operator">&lt;-</span> alignTitles<span class="token punctuation">(</span>gg<span class="token punctuation">)</span>
    ggsave<span class="token punctuation">(</span>grid.draw<span class="token punctuation">(</span>gg2<span class="token punctuation">)</span><span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlotLeftAligned.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p><img src="/img/midwestPlotLeftAligned.png" alt="Random Midwest Counties Arranged by Total Population - Aligned Left to
Y-Axis Label"/></p> <p>One other note: it’s easy to align the title, subtitle, and caption with
other plot components as well, such as the left-most y-axis value label</p> <details open><summary>Standardize the Title, Subtitle, and Footnote with the Y-Axis
Label</summary> <pre class="language-r">${html(`<code class="language-r">    <span class="token comment"># plot aesthetics</span>
    theme_white <span class="token operator">&lt;-</span> theme_white <span class="token operator">+</span> theme<span class="token punctuation">(</span>
                         plot.caption <span class="token operator">=</span> element_text<span class="token punctuation">(</span>hjust <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>

                         <span class="token punctuation">)</span>
    gg <span class="token operator">&lt;-</span> gg <span class="token operator">+</span> theme_white

    gg2 <span class="token operator">&lt;-</span> alignTitles<span class="token punctuation">(</span>gg<span class="token punctuation">)</span>
    ggsave<span class="token punctuation">(</span>grid.draw<span class="token punctuation">(</span>gg2<span class="token punctuation">)</span><span class="token punctuation">,</span> filename <span class="token operator">=</span> <span class="token string">"midwestPlotLeftAligned.png"</span><span class="token punctuation">,</span>height <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">,</span> units <span class="token operator">=</span> <span class="token string">"in"</span><span class="token punctuation">,</span> device<span class="token operator">=</span><span class="token string">'png'</span><span class="token punctuation">)</span></code>`)}</pre></details> <p><img src="/img/midwestPlotLeftAlignedAxisText.png" alt="Random Midwest Counties Arranged by Total Population = Aligned Left to
Y-Axis Value Label"/></p> <hr/>`;
}
export {
  _020_01_21_left_align_ggplot2_titles_subtitles_and_footnotes_md as default,
  metadata
};
