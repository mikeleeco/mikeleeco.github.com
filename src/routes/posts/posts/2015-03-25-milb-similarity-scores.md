---
title: Working with Minor League Similarity Scores
description: 'Using the Minor League Baseball database to calculate each players most similar comparison.'
tags: [R, dplyr, Similarity Scores, data, sports, MiLB, MLB]
date: '2015-03-25'
featured: false
categories: posts
img: '/img/bryant2.jpg'
---

<blockquote>
There are some people who see baseball players that way-each one is unique, absolutely not interchangeable with another. I don't deny the validity of that approach-but if you take that tack, then you can't turn around and argue that your player should be in the Hall of Fame because his numbers are just as good as this other player's. "Similarity" is a complex concept, and two players who are not statistically similar may be profoundly similar in some other way...players who have similar primary characteristics will tend to have similar secondary characteristics as well.

Bill James in <a href="https://books.google.com/books?id=f_v8RmhGjekC&pg=PT101&dq=similarity+score+bill+james&hl=en&sa=X&ei=lmIAVcabOsu4ggTAkoS4DA&ved=0CDYQ6AEwBA#v=onepage&q=similarity%20score%20bill%20james&f=false">Whatever Happened to the Hall of Fame?</a>

</blockquote>

Similarity scores were created by Bill James to compare the careers of Hall of Fame eligible players.In In the most basic sense, similarity scores use aggregated performance statistics to compare a player's worth for induction into the Hall of Fame. Projection systems follow from this method: Steamer, PECOTA, Marcel, ZiPS, and others use some combination of a player's recent performance, usually the last 3-4 seasons, to project future performance. Depending on the method, a player's base statistics are then modified using typical aging curves, linear weights, regression, and numerous other factors. Notably, PECOTA uses 3 year performance statistics of <i>comparable</i> players, using nearest-neighors analysis, to forecast a player's future performance.

<blockquote>
"The PECOTA similarity scores are based primarily on looking at a three-year window of a pitcher’s performance. Thus, we might look at what a pitcher did from ages 35-37, and compare that against the most similar age 35-37 performances, after adjusting for parks, league effects, and a whole host of other things. This is different from the similarity scores you might see at baseball-reference.com or in other places, which attempt to evaluate the totality of a player’s career up to a given age."

<a href="http://web.archive.org/web/20120205121306/http://www.baseballprospectus.com/unfiltered/?p=136">Nate Silver</a>

</blockquote>

One of Silver's first explanations of <a href="http://www.baseballprospectus.com/article.php?articleid=2659">PECOTA's forecasting method</a> details the value in projecting a minor league player's future career based on the career performance of their comparisons. Teams would be remiss to not consider what a player's future statistics might look like based on their previous performance. PECOTA has created a projection system that models minor league players better than it's competitors utilizing the comparable player's model. Let's use <a href="http://mikelee.co/milb-scraper-with-rvest/">our minor league database</a> to investigate minor league similarity scores and create projections for a notable minor league player.

<h1><a href="http://www.baseball-reference.com/about/similarity.shtml">Bill James Similarity Scores</a></h1>

<h3>Similarities - Career</h3>

James' Similarity Score model was designed for major league careers, but let's see how the model holds for minor league careers. The dataset includes minor league statistics from 2000-2014:

<div class="table-responsive"><table class="table table-hover" width="100%">
<th>Name</th><th>Age</th><th>LevEq</th><th>G</th><th>PA</th><th>AB</th><th>R</th><th>H</th><th>X2B</th><th>X3B</th><th>HR</th><th>RBI</th><th>SB</th><th>CS</th><th>BB</th><th>SO</th><th>BA</th><th>OBP</th><th>SLG</th><th>OPS</th><th>TB</th><th>SS</th>
 <tr class="success"><td>Kris Bryant</td><td>22</td><td>1.58</td><td>174</td><td>740</td><td>620</td><td>140</td><td>203</td><td>48</td><td>3</td><td>52</td><td>142</td><td>16</td><td>4</td><td>97</td><td>197</td><td>0.327</td><td>0.428</td><td>0.666</td><td>1.094</td><td>413</td><td>1000</td>
 <tr><td>Ryan Braun</td><td>23</td><td>1.67</td><td>199</td><td>864</td><td>767</td><td>131</td><td>240</td><td>61</td><td>6</td><td>42</td><td>144</td><td>34</td><td>12</td><td>70</td><td>151</td><td>0.313</td><td>0.375</td><td>0.572</td><td>0.947</td><td>439</td><td>926</td>
 <tr><td>Alex Gordon*</td><td>26</td><td>1.89</td><td>235</td><td>1061</td><td>867</td><td>199</td><td>278</td><td>69</td><td>5</td><td>48</td><td>170</td><td>30</td><td>5</td><td>155</td><td>212</td><td>0.321</td><td>0.438</td><td>0.578</td><td>1.016</td><td>501</td><td>906</td>
 <tr><td>Kelvin Diaz</td><td>21</td><td>0</td><td>182</td><td>765</td><td>639</td><td>117</td><td>213</td><td>47</td><td>7</td><td>22</td><td>147</td><td>23</td><td>12</td><td>74</td><td>92</td><td>0.333</td><td>0.426</td><td>0.532</td><td>0.958</td><td>340</td><td>903</td>
 <tr><td>Jake Lamb*</td><td>23</td><td>1</td><td>244</td><td>1079</td><td>920</td><td>158</td><td>295</td><td>83</td><td>10</td><td>37</td><td>193</td><td>10</td><td>2</td><td>127</td><td>229</td><td>0.321</td><td>0.406</td><td>0.553</td><td>0.959</td><td>509</td><td>902</td>
 <tr><td>D.J. Peterson</td><td>22</td><td>1.25</td><td>178</td><td>777</td><td>703</td><td>119</td><td>210</td><td>42</td><td>2</td><td>44</td><td>158</td><td>8</td><td>2</td><td>65</td><td>158</td><td>0.299</td><td>0.362</td><td>0.552</td><td>0.914</td><td>388</td><td>896</td>
 <tr><td>Matt Williams</td><td>36</td><td>2.17</td><td>21</td><td>71</td><td>65</td><td>11</td><td>22</td><td>5</td><td>0</td><td>5</td><td>15</td><td>1</td><td>0</td><td>6</td><td>5</td><td>0.338</td><td>0.394</td><td>0.646</td><td>1.04</td><td>42</td><td>894</td>
 <tr><td>Evan Longoria</td><td>26</td><td>2.37</td><td>219</td><td>937</td><td>803</td><td>145</td><td>238</td><td>43</td><td>1</td><td>47</td><td>160</td><td>8</td><td>2</td><td>104</td><td>170</td><td>0.296</td><td>0.385</td><td>0.528</td><td>0.913</td><td>424</td><td>890</td>
 <tr><td>Jose Fernandez</td><td>26</td><td>3</td><td>255</td><td>1052</td><td>920</td><td>169</td><td>287</td><td>74</td><td>5</td><td>41</td><td>182</td><td>19</td><td>10</td><td>104</td><td>184</td><td>0.312</td><td>0.389</td><td>0.537</td><td>0.926</td><td>494</td><td>889</td>
 <tr><td>Albert Pujols</td><td>20</td><td>1.67</td><td>133</td><td>544</td><td>490</td><td>74</td><td>154</td><td>41</td><td>7</td><td>19</td><td>96</td><td>4</td><td>5</td><td>46</td><td>47</td><td>0.314</td><td>0.378</td><td>0.543</td><td>0.921</td><td>266</td><td>887</td>
 <tr><td>Pedro Feliz</td><td>36</td><td>2.5</td><td>156</td><td>646</td><td>606</td><td>96</td><td>174</td><td>39</td><td>2</td><td>38</td><td>119</td><td>1</td><td>2</td><td>31</td><td>110</td><td>0.287</td><td>0.321</td><td>0.546</td><td>0.867</td><td>331</td><td>883</td>
 </table></div>

You might have heard of a few of those names. The issue with these similarities is that they encompass a player's <i>career</i> minor league statistics; we're more interested in the performance of Bryant's same-aged peers.

<h3>Similarities - Age</h3>

Let's see how he compares to other 22 year old players:

<div class="table-responsive"><table class="table table-hover">
<th>Name</th><th>Age</th><th>LevEq</th><th>G</th><th>PA</th><th>AB</th><th>R</th><th>H</th><th>X2B</th><th>X3B</th><th>HR</th><th>RBI</th><th>SB</th><th>CS</th><th>BB</th><th>SO</th><th>BA</th><th>OBP</th><th>SLG</th><th>OPS</th><th>TB</th><th>SS</th>
 <tr class="success"><td>Kris Bryant</td><td>22</td><td>2.5</td><td>174</td><td>740</td><td>620</td><td>140</td><td>203</td><td>48</td><td>3</td><td>52</td><td>142</td><td>16</td><td>4</td><td>97</td><td>197</td><td>0.327</td><td>0.428</td><td>0.666</td><td>1.095</td><td>413</td><td>1000</td>
 <tr><td>Alex Gordon*</td><td>22</td><td>2</td><td>130</td><td>576</td><td>486</td><td>111</td><td>158</td><td>39</td><td>1</td><td>29</td><td>101</td><td>22</td><td>3</td><td>72</td><td>113</td><td>0.325</td><td>0.427</td><td>0.588</td><td>1.016</td><td>286</td><td>932</td>
 <tr><td>Corey Dickerson*</td><td>22</td><td>1</td><td>175</td><td>743</td><td>659</td><td>132</td><td>204</td><td>49</td><td>14</td><td>45</td><td>148</td><td>21</td><td>12</td><td>67</td><td>150</td><td>0.31</td><td>0.38</td><td>0.631</td><td>1.011</td><td>416</td><td>924</td>
 <tr><td>Nick Akins</td><td>22</td><td>0</td><td>126</td><td>548</td><td>472</td><td>94</td><td>152</td><td>40</td><td>7</td><td>32</td><td>120</td><td>5</td><td>5</td><td>58</td><td>135</td><td>0.322</td><td>0.407</td><td>0.64</td><td>1.047</td><td>302</td><td>921</td>
 <tr><td>Kevin Mench</td><td>22</td><td>1</td><td>132</td><td>583</td><td>491</td><td>118</td><td>164</td><td>39</td><td>9</td><td>27</td><td>121</td><td>19</td><td>7</td><td>78</td><td>72</td><td>0.334</td><td>0.427</td><td>0.615</td><td>1.042</td><td>302</td><td>909</td>
 <tr><td>Ryan Braun</td><td>22</td><td>1.5</td><td>165</td><td>730</td><td>650</td><td>103</td><td>200</td><td>49</td><td>6</td><td>32</td><td>122</td><td>30</td><td>9</td><td>55</td><td>140</td><td>0.308</td><td>0.367</td><td>0.549</td><td>0.917</td><td>357</td><td>907</td>
 <tr><td>Mark Teixeira#</td><td>22</td><td>1.5</td><td>86</td><td>375</td><td>321</td><td>63</td><td>102</td><td>21</td><td>5</td><td>19</td><td>69</td><td>5</td><td>2</td><td>46</td><td>60</td><td>0.318</td><td>0.413</td><td>0.592</td><td>1.005</td><td>190</td><td>904</td>
 <tr><td>Jake Lamb*</td><td>22</td><td>0.5</td><td>136</td><td>619</td><td>528</td><td>95</td><td>167</td><td>44</td><td>5</td><td>22</td><td>109</td><td>8</td><td>2</td><td>74</td><td>126</td><td>0.316</td><td>0.405</td><td>0.544</td><td>0.949</td><td>287</td><td>902</td>
 <tr><td>James Darnell</td><td>22</td><td>1</td><td>142</td><td>630</td><td>524</td><td>89</td><td>167</td><td>41</td><td>5</td><td>22</td><td>96</td><td>9</td><td>7</td><td>98</td><td>101</td><td>0.319</td><td>0.428</td><td>0.542</td><td>0.97</td><td>284</td><td>901</td>
 <tr><td>Jedd Gyorko</td><td>22</td><td>1.5</td><td>208</td><td>945</td><td>844</td><td>154</td><td>273</td><td>64</td><td>2</td><td>32</td><td>155</td><td>14</td><td>4</td><td>92</td><td>171</td><td>0.323</td><td>0.392</td><td>0.518</td><td>0.909</td><td>437</td><td>900</td>
 <tr><td>Hunter Pence</td><td>22</td><td>1.0</td><td>172</td><td>737</td><td>652</td><td>119</td><td>207</td><td>40</td><td>5</td><td>39</td><td>127</td><td>12</td><td>10</td><td>79</td><td>120</td><td>0.317</td><td>0.391</td><td>0.574</td><td>0.964</td><td>374</td><td>898</td>
</table></div>

Still a very impressive list. Using these similar players, lets take a play out of the PECOTA playbook and generate some basic projections without adjusting for outside effects (park factors, leagues, league-wide performance shifts, etc). By simply calculating the mean of these top 10 player comparables for each statistical category we can get a general idea of Bryant's future performance.

<h3>10 Year Projection - Kris Bryant</h3>

<div class="table-responsive"><table class="table table-hover"><th>Year</th><th>Age</th><th>LevEq</th><th>G</th><th>PA</th><th>AB</th><th>R</th><th>H</th><th>X2B</th><th>X3B</th><th>HR</th><th>RBI</th><th>SB</th><th>CS</th><th>BB</th><th>SO</th><th>BA</th><th>OBP</th><th>SLG</th><th>OPS</th><th>Count</th>
 <tr><td>2015</td><td>23</td><td>3</td><td>130</td><td>548</td><td>489</td><td>76</td><td>138</td><td>32</td><td>5</td><td>24</td><td>83</td><td>9</td><td>4</td><td>47</td><td>105</td><td>0.282</td><td>0.35</td><td>0.515</td><td>0.865</td><td>10</td>
 <tr><td>2016</td><td>24</td><td>4</td><td>132</td><td>551</td><td>492</td><td>77</td><td>140</td><td>32</td><td>5</td><td>23</td><td>77</td><td>8</td><td>4</td><td>49</td><td>107</td><td>0.285</td><td>0.354</td><td>0.51</td><td>0.864</td><td>9</td>
 <tr><td>2017</td><td>25</td><td>4</td><td>115</td><td>476</td><td>424</td><td>66</td><td>121</td><td>26</td><td>3</td><td>20</td><td>72</td><td>7</td><td>4</td><td>43</td><td>89</td><td>0.285</td><td>0.356</td><td>0.502</td><td>0.859</td><td>8</td>
 <tr><td>2018</td><td>26</td><td>4</td><td>129</td><td>543</td><td>478</td><td>76</td><td>135</td><td>31</td><td>3</td><td>22</td><td>73</td><td>7</td><td>4</td><td>56</td><td>93</td><td>0.282</td><td>0.363</td><td>0.498</td><td>0.861</td><td>6</td>
 <tr><td>2019</td><td>27</td><td>4</td><td>148</td><td>635</td><td>569</td><td>92</td><td>169</td><td>36</td><td>4</td><td>28</td><td>94</td><td>15</td><td>6</td><td>58</td><td>104</td><td>0.297</td><td>0.365</td><td>0.522</td><td>0.887</td><td>5</td>
 <tr><td>2020</td><td>28</td><td>4</td><td>151</td><td>647</td><td>574</td><td>87</td><td>174</td><td>38</td><td>3</td><td>25</td><td>94</td><td>11</td><td>3</td><td>64</td><td>109</td><td>0.303</td><td>0.376</td><td>0.51</td><td>0.886</td><td>5</td>
 <tr><td>2021</td><td>29</td><td>4</td><td>127</td><td>532</td><td>475</td><td>70</td><td>130</td><td>26</td><td>4</td><td>20</td><td>77</td><td>5</td><td>3</td><td>47</td><td>96</td><td>0.274</td><td>0.343</td><td>0.472</td><td>0.815</td><td>5</td>
 <tr><td>2022</td><td>30</td><td>4</td><td>143</td><td>591</td><td>525</td><td>81</td><td>141</td><td>32</td><td>3</td><td>21</td><td>81</td><td>10</td><td>3</td><td>56</td><td>104</td><td>0.269</td><td>0.345</td><td>0.461</td><td>0.806</td><td>5</td>
 <tr><td>2023</td><td>31</td><td>4</td><td>159</td><td>696</td><td>620</td><td>98</td><td>163</td><td>28</td><td>6</td><td>30</td><td>93</td><td>9</td><td>4</td><td>64</td><td>120</td><td>0.263</td><td>0.336</td><td>0.473</td><td>0.808</td><td>2</td>
 <tr><td>2024</td><td>32</td><td>4</td><td>118</td><td>440</td><td>380</td><td>48</td><td>93</td><td>22</td><td>1</td><td>14</td><td>63</td><td>3</td><td>1</td><td>46</td><td>60</td><td>0.245</td><td>0.327</td><td>0.418</td><td>0.745</td><td>2</td>
</table></div>

Have feedback, questions, or want to see something else added? Check out the code I used to create <a href="https://github.com/mikeleeco/mikeleeco.github.com/blob/master/_posts/2015-03-25-milb-similarity-scores.md">this page</a> or fork my repository to propose changes. <a class="btn btn-primary" href="https://github.com/mikeleeco/Kris-Bryant-Projection/fork">Edit My Code</a>
