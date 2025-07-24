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

assign_categories <- function(df) {
  categories <- c("Animal", "Art", "Baby", "Business", "Christmas","City", "Dating", "Doctor", "Dog", "Easter", "Education", "Fairy Tale", "Family","Food", "Friendship", "Halloween", "Health","Life", "Other", "Marriage", "Therapy", "Religion", "Science", "Sports", "Summer", "Technology", "Thanksgiving", "Travel", "Winter")
  
  category_keywords <- list(
    Animals = c("animal", "animals", "pet",'bird', 'duck', 'ducklings','dog','dogs','cat', 'cats', 'eagle','horse', 'cow', 'chicken','pig','crow','chimanzee','monkey','bee', 'bees', 'nest'),
    Art = c("art", "painting", "drawing", 'cartoon', 'pencil', 'pen'),
    Babies = c("baby", "babies", "infant", 'nursery'),
    Cats = c("cat", "cats", "kitten", "kittens"),
    Christmas = c("christmas", "elves", "santa", "holiday"),
    City = c("city", "street"),
    Dating = c("dating", "romance", "love", "relationships"),
    Dogs = c("dog", "dogs", "puppy", "canine"),
    Easter = c("easter", "egg hunt", "bunny"),
    Education = c("education", "school", "learning", "class", "classroom", "teacher", "book", "books"),
    `Fairy Tale` = c("fairy tale", "children's stories"),
    Family = c("family", "parenting", "relatives"),
    Friendship = c("friends", "friendship"),
    Food = c("food", "cuisine", "meal", "dinner", "breakfast", 'lunch'),
    Gag = c("gag"),
    Games = c("games", "cards", "puzzle", "puzzles", "board games"),
    Halloween = c("halloween", "spooky", "costume"),
    Health = c("health", "wellness", "fitness","doctor", "physician", "medical"),
    Kids = c("kid", "kids", "children", "toddler"),
    Life = c("home", "street", "yard"),
    Marriage = c("marriage", "wedding", "spouse"),
    Music = c("music", "bands", "guitar", "piano", "concert"),
    Nature = c("nature", "tree", "trees", "flower", "trail"),
    Other = c("abstract", 'other'),
    Politics = c("politics", "law", "president", "washington", "DC"),
    Pun = c("pun"),
    Therapy = c("therapy", "psychology", "counseling","psychiatry"),
    Religion = c("religion", "faith", "spiritual"),
    Science = c("science", "experiment", "research", "science", "scientist", "lab"),
    Sports = c("sports", "arena", "stadium", "bodybuilding", "exercise", "basketball", "baseball"),
    Summer = c("summer", "beach", "vacation"),
    Technology = c("technology", "tech", "innovation"),
    Thanksgiving = c("thanksgiving", "turkey", "feast"),
    Travel = c("travel", "tourism", "vacation"),
    Winter = c("winter", "snow", "cold", "snowman"),
    Work = c("business", "corporate", "startup", "productivity", 
                "jobs", "workplace", "office", "factory")
  )
  
  df$Categories <- sapply(1:nrow(df), function(i) {
    combined_text <- tolower(paste(df$Themes[i], df$Setting[i], sep = " "))
    matched_categories <- names(Filter(function(words) any(grepl(paste(words, collapse = "|"), combined_text)), category_keywords))
    if (length(matched_categories) == 0) return(NA)
    paste(matched_categories, collapse = ", ")
  })
  
  return(df)
}


cartoons <- assign_categories(cartoons)




cartoons$tags <- str_to_title(cartoons$Categories)
cartoons$tags <- strsplit(cartoons$tags, ",\\s*")

# cartoons$alt <- paste0(cartoons$Description, " “", cartoons$Caption, "“")

tags <- lapply(cartoons$tags, function(u) {
    u[!duplicated(toTitleCase(u))]
})
cartoons$tags <- tags
cartoons$Themes <- NULL
cartoons$Setting <- NULL
# Convert to JSON with column names

# create 
# years <-  list.files("./static/img/cartoons")
capt <- "2025/June/needle.jpeg"

# for(i in 1:nrow(remove)) { 
#     fileName <- paste0("../../Pictures/newYorker/",dirname(remove$Path[i]),"/Captions/", basename(remove$Path[i]))
   
#     if(remove$Date[i] != max(remove$Date))  {
#                 file.copy(fileName, paste0("../../Pictures/newYorker/data/Unpublished/", basename(remove$Path[i])))
#     }

# }        

# for(i in 1:nrow(cartoons)) { 
#     # print(i['Posted'])
#     if(cartoons$Archive[i]) {
#     fileName <- paste0("../../Pictures/newYorker/",dirname(cartoons$Path[i]),"/Captions/", basename(cartoons$Path[i]))
#         file.copy(fileName, paste0("../../Pictures/newYorker/data/Archive/", basename(cartoons$Path[i])))
#     } else {
#     fileName <- paste0("../../Pictures/newYorker/",dirname(cartoons$Path[i]),"/Uncaptioned/", basename(cartoons$Path[i]))
#     file.copy(fileName, paste0("./static/img/cartoons/",basename(cartoons$Path[i])))
#     }
# }

cartoons <- cartoons %>% filter(!Archive)
cartoons$Categories <- NULL

swl <- toJSON(cartoons, pretty = TRUE, auto_unbox = TRUE)
writeLines(swl, "./src/lib/data/cartoons.json")
# writeLines(swl, paste0("../crabapple-games/src/lib/data/dabblegrams/",year,"/",month,"/puzzles.json"))

count_categories <- function(df) {
  all_categories <- unlist(strsplit(df$Categories, ", "))
  category_counts <- table(all_categories)
  return(as.data.frame(category_counts))
}

# Example usage:
# df2 <- assign_categories(df2)
count_categories(cartoons) %>% arrange(desc(Freq))

cartoons$tags <- NULL
cartoons$publishPath <- paste0("../../Pictures/newYorker/",dirname(cartoons$Path),"/Captions/", basename(cartoons$Filename))
write.csv(x = cartoons, file = "../../Pictures/newYorker/data/Socials/cartoons.csv", row.names = FALSE)



library(dplyr)
