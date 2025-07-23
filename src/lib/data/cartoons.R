cartoons <- read.csv("../../Pictures/newYorker/data/captions2024.csv", stringsAsFactors = FALSE)
cartoons2 <- read.csv("../../Pictures/newYorker/data/captions2025.csv", stringsAsFactors = FALSE)
cartoons <- rbind(cartoons, cartoons2)
# subset out months still pending
library(dplyr)
library(jsonlite)
library(stringr)

# check for duplicate file names
duplicateNames <- cartoons[duplicated(cartoons$Filename),]
if(nrow(duplicateNames) > 0) {
    stop("Duplicated name!")
}


remove <- cartoons[!cartoons$Posted,]
# remove <- remove %>% filter(Date!= max(Date))
cartoons <- cartoons[cartoons$Posted,]
# cartoons$themes <- strsplit(cartoons$Themes, ",\\s*")
# cartoons$settings <- strsplit(cartoons$Setting, ",\\s*")
# cartoons$tags <- c(cartoons$themes, cartoons$settings)


library(tools)
cartoons$tags <- paste0(cartoons$Themes,", " ,cartoons$Setting)
cartoons$tags <- str_to_title(cartoons$tags)
cartoons$tags <- strsplit(cartoons$tags, ",\\s*")

cartoons$alt <- paste0(cartoons$Description, " “", cartoons$Caption, "“")

tags <- lapply(cartoons$tags, function(u) {
    u[!duplicated(toTitleCase(u))]
})
cartoons$tags <- tags
cartoons$Themes <- NULL
# Convert to JSON with column names

# create 
# years <-  list.files("./static/img/cartoons")
capt <- "2025/June/needle.jpeg"

for(i in 1:nrow(remove)) { 
    fileName <- paste0("../../Pictures/newYorker/",dirname(remove$Path[i]),"/Captions/", basename(remove$Path[i]))
   
    if(remove$Date[i] != max(remove$Date))  {
                file.copy(fileName, paste0("../../Pictures/newYorker/data/Unpublished/", basename(remove$Path[i])))
    }

}        

for(i in 1:nrow(cartoons)) { 
    # print(i['Posted'])
    if(cartoons$Archive[i]) {
    fileName <- paste0("../../Pictures/newYorker/",dirname(cartoons$Path[i]),"/Captions/", basename(cartoons$Path[i]))
        file.copy(fileName, paste0("../../Pictures/newYorker/data/Archive/", basename(cartoons$Path[i])))
    } else {
    fileName <- paste0("../../Pictures/newYorker/",dirname(cartoons$Path[i]),"/Uncaptioned/", basename(cartoons$Path[i]))
    file.copy(fileName, paste0("./static/img/cartoons/",basename(cartoons$Path[i])))
    }
}

cartoons <- cartoons %>% filter(!Archive)

swl <- toJSON(cartoons, pretty = TRUE, auto_unbox = TRUE)

writeLines(swl, "./src/lib/data/cartoons.json")
# writeLines(swl, paste0("../crabapple-games/src/lib/data/dabblegrams/",year,"/",month,"/puzzles.json"))
