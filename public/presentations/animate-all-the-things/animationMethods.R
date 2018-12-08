library(ggplot2)
library(gapminder)
library(dplyr)

library(tweenr)

library(gganimate)
library(gifski)
library(magick)
library(animation)

datalist <- split(gapminder, gapminder$year)

dat <- tween_states(datalist, 2, 1, 'linear', 100)
datalist <- split(dat, dat$year)

# gifski
makeplot <- function(){
  lapply(datalist, function(data){
    p <- ggplot(data, aes(gdpPercap, lifeExp, size = pop, color = continent)) +
      scale_size("population", limits = range(gapminder$pop)) + geom_point() + ylim(20, 90) +
      scale_x_log10(limits = range(gapminder$gdpPercap)) + ggtitle(data$year) + theme_classic()
    print(p)
  })
}

# High Definition images:
gif_file <- file.path(paste0(getwd(), '/images/gifskiGapminder.gif'))
save_gif(makeplot(), gif_file, 1280, 720, res = 144, delay = .1)
utils::browseURL(gif_file)


# imagemagick/magick (uses gifski)

# opens the graphics device
img <- image_graph(1280, 720, res = 144)
out <- lapply(datalist, function(data){
  p <- ggplot(data, aes(gdpPercap, lifeExp, size = pop, color = continent)) +
    scale_size("population", limits = range(gapminder$pop)) + geom_point() + ylim(20, 90) + 
    scale_x_log10(limits = range(gapminder$gdpPercap)) + ggtitle(data$year) + theme_classic()
  print(p)
})
dev.off()

animation <- image_animate(img, fps = 10)
gif_file <- file.path(paste0(getwd(), '/magickGapminder.gif'))
image_write(animation, gif_file)


p <- ggplot(gapminder, aes(gdpPercap, lifeExp, size = pop, color = continent)) +
    scale_size("population", limits = range(gapminder$pop)) + geom_point() + ylim(20, 90) + 
    scale_x_log10(limits = range(gapminder$gdpPercap)) + ggtitle(gapminder$year) + theme_classic() +
	  # Here comes the gganimate specific bits
	  transition_time(year) +
	  ease_aes('linear')

animation <- animate(p, width = 1280, height = 720, res = 144)
gif_file <- file.path(paste0(getwd(), '/gganimateGapminder.gif'))
anim_save(gif_file, animation)


# Animation package

saveGIF(makeplot(),movie.name=paste0(getwd(), '/animationapminder.gif'),interval = .02, ani.width = 1280, ani.height = 720)

# https://easings.net/





# LINE GRAPHS

countries <- gapminder %>% filter(country %in% c("Afghanistan", "Albania", "Algeria", "Argentina", "Australia"))


datalist <- split(countries, countries$year,drop = TRUE)
dat <- tween_states(datalist, tweenlength = 1, statelength = 0, 'linear', 100)
datalist <- split(dat, dat$year)

# gifski
makeplot <- function(){
  for (i in 1:max(dat$.frame)) {
    p <- ggplot(data = subset(dat, .frame <= i), aes(year, gdpPercap, color = country, group = country))  + geom_line( )  +  scale_x_continuous(limits = range(gapminder$year)) +  scale_y_continuous(limits = c(0,40000))
    print(p)
  }
}

# High Definition images:
gif_file <- file.path(paste0(getwd(), '/gifskiGapminderLine.gif'))
save_gif(makeplot(), gif_file, 1280, 720, res = 144, delay = .05)
utils::browseURL(gif_file)






# gganimate
p <- ggplot(data = countries, aes(year, gdpPercap, color = country, group = country))  + geom_line( ) +
    # Here comes the gganimate specific bits
    transition_reveal(id=country, along=year) +
    ease_aes('linear')

animation <- animate(p, width = 1280, height = 720, res = 144, start_pause = 0, end_pause = 50)
gif_file <- file.path(paste0(getwd(), '/gganimateGapminderLine.gif'))
anim_save(gif_file, animation)



# BAR GRAPHS

datalist <- split(dat, dat$year)

# gifski
makeplot <- function(){
  lapply(datalist, function(data){
    p <- ggplot(data = data, aes(country, gdpPercap, fill = country))  + geom_col() + 
    scale_y_continuous(limits = c(0,40000)) + ggtitle(data$year) + theme_classic()
    print(p)
  })
}

# High Definition images:
gif_file <- file.path(paste0(getwd(), '/gifskiGapminderBar.gif'))
save_gif(makeplot(), gif_file, 720, 1280, res = 144, delay = .1)
utils::browseURL(gif_file)

# gganimate
p <- ggplot(data = countries, aes(country, gdpPercap, fill = country))  + geom_col() +
     ggtitle(countries$year) + theme_classic() +
     transition_states(states = year, transition_length = 3, state_length = 1) +
     ease_aes('linear')

animation <- animate(p, width = 720, height = 1280, res = 144)
gif_file <- file.path(paste0(getwd(), '/gganimateGapminderBar.gif'))
anim_save(gif_file, animation)
