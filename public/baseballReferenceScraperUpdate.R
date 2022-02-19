url <- "https://www.baseball-reference.com/minors/"
teams=c("ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE","COL","DET","HOU","KCR","ANA","LAD","FLA","MIL","MIN","NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN")
stats_table <- 'table#team_batting.sortable.stats_table'
stats_id <- paste0(stats_table,' a')
minors_batting <- data.frame()

# for loop by teams and season
for (teams in teams){ 
  for (season in 2017:2017) {
    html <- paste(url,"affiliate.cgi?id=",teams,"&year=",season,sep="")
    
    html %>%
      read_html %>%
      html_nodes(xpath = '//comment()') %>%
      html_text() %>%
      paste(collapse='') %>%
      read_html() %>%
      html_node(stats_table) %>%
      html_table() -> df
    
    # player info
    html %>%
      read_html %>%
      html_nodes(xpath = '//comment()') %>%
      html_text() %>%
      paste(collapse='') %>%
      read_html() %>%
      html_nodes(stats_id) %>%
      html_attr(name="href") %>% unlist %>% as.character -> min_playerid
    
    # clean dataframe and add team and season info
    df <- df[1:nrow(df),]
    df <- df[!na.omit(df$Rk=='Rk'),]
    df$season <- c(season)
    df$teams <- c(teams)
    
    # remove url data
    min_playerid=gsub("/register/player.fcgi?id=", "", min_playerid,fixed = TRUE)
    df$min_playerid <- c(min_playerid)
    
    # bind to 
    minors_batting <- rbind(minors_batting,df)
  }
}
