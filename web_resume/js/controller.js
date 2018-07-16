
//my profile 北科大履歷's var
var travelPic1 =  document.getElementById('travelPic1');
/* var webDesign_travel = document.getElementById('webDesign_travel');
var webDesign_travelContent = document.getElementById('webDesign_travelContent'); */
// var travelPic2 =  document.getElementById('travelPic2');
// var travelPic3 =  document.getElementById('travelPic3');
// travelPic2.style.opacity = 0;
// travelPic3.style.opacity = 0;
var slides1 = document.getElementsByClassName("mySlides_1");
var dots1 = document.getElementsByClassName("myProfile_slideShow_dot_1");
var slides2 = document.getElementsByClassName("mySlides_2");
var dots2 = document.getElementsByClassName("myProfile_slideShow_dot_2");
var slides3 = document.getElementsByClassName("mySlides_3");
var dots3 = document.getElementsByClassName("myProfile_slideShow_dot_3");

//carousel function
// @param:
function carouselPic(num){
    if(num == 1){
        setInterval(function(){ 
        
        travelPic1.style.opacity = 0;
        travelPic1.style.backgroundImage = "url(images/web_design2.jpg)";
        travelPic1.style.opacity = 1;
        }, 4000);
        // setInterval(function(){ 
        //     travelPic2.style.opacity = 0;
        //     travelPic3.style.opacity = 1;
        // }, 4000);
        // setInterval(function(){ 
        //     travelPic1.style.opacity = 1;
        //     travelPic3.style.opacity = 0;
        // }, 4000);
    }
    
}

function slideShow(num, n){

}
/*
    slide show start Jul 12 18
*/
/* var slideIndex = 1; */
var slideIndex_1 = 1;
var slideIndex_2 = 1;
var slideIndex_3 = 1;
/* showSlides(slideIndex); */
showSlides(slideIndex_1, 1);
showSlides(slideIndex_2, 2);
showSlides(slideIndex_3, 3);

function plusSlides(n, num) {
    if(num == 1){
        showSlides(slideIndex_1 += n, num);
    }else if(num == 2){
        showSlides(slideIndex_2 += n, num);
    }else if(num == 3){
        showSlides(slideIndex_3 += n, num);
    }
  /* showSlides(slideIndex += n, num); */
}

function currentSlide(n, num) {
    if(num == 1){
        showSlides(slideIndex_1 = n, num);
    }else if(num == 2){
        showSlides(slideIndex_2 = n, num);
    }else if(num == 3){
        showSlides(slideIndex_3 = n, num);
    }
  /* showSlides(slideIndex = n, num); */
}

function showSlides(n, num) {
  var i;
  var sildeNum1;
  var sildeNum2;
  var sildeNum3;
  /* var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("myProfile_slideShow_dot"); */
 /*  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" myProfile_slideShow_active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " myProfile_slideShow_active"; */

  if(num == 1){
    sildeNum1 = n;
    if (n > slides1.length) {slideIndex_1 = 1}    
    if (n < 1) {slideIndex_1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";  
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" myProfile_slideShow_active_1", "");
    }
    slides1[slideIndex_1-1].style.display = "block";  
    dots1[slideIndex_1-1].className += " myProfile_slideShow_active_1";

  }else if(num == 2){
    sildeNum2 = n;
    if (n > slides2.length) {slideIndex_2 = 1}    
    if (n < 1) {slideIndex_2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" myProfile_slideShow_active_2", "");
    }
    slides2[slideIndex_2-1].style.display = "block";  
    dots2[slideIndex_2-1].className += " myProfile_slideShow_active_2";

  }else if(num == 3){
    sildeNum3 = n;
    if (n > slides3.length) {slideIndex_3 = 1}    
    if (n < 1) {slideIndex_3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" myProfile_slideShow_active_3", "");
    }
    slides3[slideIndex_3-1].style.display = "block";  
    dots3[slideIndex_3-1].className += " myProfile_slideShow_active_3";
  }
}
/*
    slide show end Jul 12 18 
*/