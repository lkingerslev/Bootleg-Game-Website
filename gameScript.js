let percent = window.innerWidth/3
const featuredGameSlide = document.getElementById("featuredGameSlideShow");
const popularGameSlide = document.getElementById("popularGameSlideShow");
const upcomingGameSlide = document.getElementById("upcomingGameSlideShow");

document.getElementById("prevFeaturedGameButton").onclick = function() {
  featuredGameSlide.scrollLeft -= percent;
};
document.getElementById("nextFeaturedGameButton").onclick = function() {
  featuredGameSlide.scrollLeft += percent;
};

document.getElementById("prevPopularGameButton").onclick = function() {
  popularGameSlide.scrollLeft -= percent;
};
document.getElementById("nextPopularGameButton").onclick = function() {
  popularGameSlide.scrollLeft += percent;
};

document.getElementById("prevUpcomingGameButton").onclick = function() {
  upcomingGameSlide.scrollLeft -= percent;
};
document.getElementById("nextUpcomingGameButton").onclick = function() {
  upcomingGameSlide.scrollLeft += percent;
};