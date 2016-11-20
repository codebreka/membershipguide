var movies = [
  {
    title: "childhood",
    hasWatched:true,
    rating: 4
  },
  {
    title: "Neon Demon",
    hasWatched:true,
    rating:2
  }
]

movies.forEach(function(movie){
var result = "You have ";
if(movie.hasWatched){
  result += "watched "
} else {
  result += "not seen ";
}
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})
