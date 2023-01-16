
# setwd("/home/michael/Documents/Svelte/site")
path <- "src/routes/animation/"
filesMd <- grep("Rmd",list.files(paste0(getwd(),"/",path)), value = TRUE)
files <- file.path(gsub(".Rmd", "", grep(".Rmd",list.files(path), value = TRUE)))
files
# folderNames <- substr(files, start = 12, stop = 100)
folderNames <- files
folderNames
for(i in  1:length(folderNames)) {
  print(i)
  dir.create(paste0(getwd(), "/",path, folderNames[i]))
}


for(i in 1:length(files)) {
  rmarkdown::render(paste0(getwd(), "/", path, files[i],".Rmd"),
  rmarkdown::md_document(preserve_yaml = TRUE))
    # file.copy(from = paste0(getwd(), "/", path, files[i], ".md"),
    #       to   = paste0(getwd(), "/", path, folderNames[i], "/+page.md"))
}

# path <- "src/routes/animations/"
filesMd <- grep(".md",list.files(paste0(getwd(),"/",path)), value = TRUE)
files <- file.path(gsub(".md", "", grep(".md",list.files(path), value = TRUE)))
folderNames <- files
folderNames
for(i in  1:length(folderNames)) {
  print(i)
  dir.create(paste0(getwd(), "/",path, folderNames[i]))
}


# files <- gsub(".Rmd", ".md",filesMd)
for(i in 1:length(files)) {
    file.copy(from = paste0(getwd(), "/", path, files[i], ".md"),
          to   = paste0(getwd(), "/", path, folderNames[i], "/+page.md"))
}


path <- "src/routes/projects/"
filesMd <- grep(".md",list.files(paste0(getwd(),"/",path)), value = TRUE)
files <- file.path(gsub(".md", "", grep(".md",list.files(path), value = TRUE)))
files
# folderNames <- substr(files, start = 12, stop = 100)
folderNames <- files
folderNames
for(i in  1:length(folderNames)) {
  print(i)
  dir.create(paste0(getwd(), "/",path, folderNames[i]))
}


for(i in 1:length(files)) {
    # knitr::knit(paste0(getwd(), "/", path, filesMd[i]), output = ".md")
    file.copy(from = paste0(getwd(), "/", path, files[i], ".md"),
          to   = paste0(getwd(), "/", path, folderNames[i], "/+page.md"))
}



path <- "src/routes/posts/"
filesMd <- grep(".Rmd",list.files(paste0(getwd(),"/",path)), value = TRUE)
# files <- file.path(gsub(".md", "", grep(".md",list.files(path), value = TRUE)))


for(i in 1:length(filesMd)) {
  rmarkdown::render(paste0(getwd(), "/", path, filesMd[i]),
  rmarkdown::md_document(preserve_yaml = TRUE))
}

filesMd <- grep(".md",list.files(paste0(getwd(),"/",path)), value = TRUE)
files <- file.path(gsub(".md", "", grep(".md",list.files(path), value = TRUE)))
files
# folderNames <- substr(files, start = 12, stop = 100)
folderNames <- files
folderNames
for(i in  1:length(folderNames)) {
  print(i)
  dir.create(paste0(getwd(), "/",path, folderNames[i]))
}


for(i in 1:length(files)) {
      file.copy(from = paste0(getwd(), "/", path, files[i], ".md"),
          to   = paste0(getwd(), "/", path, folderNames[i], "/+page.md"))
}
