
//my profile 北科大履歷's var
//var travelPic1 =  document.getElementById('travelPic1');
/* var webDesign_travel = document.getElementById('webDesign_travel');
var webDesign_travelContent = document.getElementById('webDesign_travelContent'); */
// var travelPic2 =  document.getElementById('travelPic2');
// var travelPic3 =  document.getElementById('travelPic3');
// travelPic2.style.opacity = 0;
// travelPic3.style.opacity = 0;
//var slides1 = document.getElementsByClassName("mySlides_1");//北科大
var dots1 = document.getElementsByClassName("myProfile_slideShow_dot_1");//北科大
var slides2 = document.getElementsByClassName("mySlides_2");//全球人壽
var dots2 = document.getElementsByClassName("myProfile_slideShow_dot_2");//全球人壽
var slides3 = document.getElementsByClassName("mySlides_3");//iiot
var dots3 = document.getElementsByClassName("myProfile_slideShow_dot_3");//iiot

var slidePublic = document.getElementsByClassName("slide_public");//共用
var dotsPublic = document.getElementsByClassName("myProfile_slideShow_dot_public");//共用


/*
    slide show start Jul 12 18
*/
/* var slideIndex = 1; */
var slideIndex_1 = 1;
var slideIndex_2 = 1;
var slideIndex_3 = 1;
var slideIndex_public = 1;
/* showSlides(slideIndex); */
showSlides(slideIndex_1, 1);
showSlides(slideIndex_2, 2);
showSlides(slideIndex_3, 3);
showSlides(slideIndex_public, 4);

function plusSlides(n, num) {
    if(num == 1){
        showSlides(slideIndex_1 += n, num);
    }else if(num == 2){
        showSlides(slideIndex_2 += n, num);
    }else if(num == 3){
        showSlides(slideIndex_3 += n, num);
    } else if(num == 4){
        showSlides(slideIndex_public += n, num);
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
    } else if (num == 4) {
        showSlides(slideIndex_public = n, num);
    }
  /* showSlides(slideIndex = n, num); */
}

function showSlides(n, num) {
  var i;
  var sildeNum1;
  var sildeNum2;
  var sildeNum3;
  var sildeNum_public;
  
   if(num == 4){ // 共用 ＊未來只有這個
      sildeNum_public = n;
      if (n > slidePublic.length) { slideIndex_public = 1 }
      if (n < 1) { slideIndex_public = slidePublic.length }
      for (i = 0; i < slidePublic.length; i++) {
          slidePublic[i].style.display = "none";
      }
      for (i = 0; i < dotsPublic.length; i++) {
          dotsPublic[i].className = dotsPublic[i].className.replace(" myProfile_slideShow_active_public", "");
      }
      slidePublic[slideIndex_public - 1].style.display = "block";
      dotsPublic[slideIndex_public - 1].className += " myProfile_slideShow_active_public";
  }
}
/*
    slide show end Jul 12 18 
*/


function projModalShow(key) {
    if (key == 'iiot') {
        document.getElementById('projModal_title').innerHTML = iiot.projModal_title;
        document.getElementById('projModal_img1').src = iiot.projModal_img1;
        document.getElementById('projModal_img2').src = iiot.projModal_img2;
        document.getElementById('projModal_label1').innerHTML = iiot.projModal_label1;
        document.getElementById('projModal_duty1').innerHTML = iiot.projModal_duty1;
        document.getElementById('projModal_skill1').innerHTML = iiot.projModal_skill1;
        document.getElementById('projModal_descibe1').innerHTML = iiot.projModal_descibe1;
        document.getElementById('projModal_period1').innerHTML = iiot.projModal_period1;
    } else if (key == 'post') {
        document.getElementById('projModal_title').innerHTML = post.projModal_title;
        document.getElementById('projModal_img1').src = post.projModal_img1;
        document.getElementById('projModal_img2').src = post.projModal_img2;
        document.getElementById('projModal_label1').innerHTML = post.projModal_label1;
        document.getElementById('projModal_duty1').innerHTML = post.projModal_duty1;
        document.getElementById('projModal_skill1').innerHTML = post.projModal_skill1;
        document.getElementById('projModal_descibe1').innerHTML = post.projModal_descibe1;
        document.getElementById('projModal_period1').innerHTML = post.projModal_period1;
    } else if (key == 'insurance') {
        document.getElementById('projModal_title').innerHTML = insurance.projModal_title;
        document.getElementById('projModal_img1').src = insurance.projModal_img1;
        document.getElementById('projModal_img2').src = insurance.projModal_img2;
        document.getElementById('projModal_label1').innerHTML = insurance.projModal_label1;
        document.getElementById('projModal_duty1').innerHTML = insurance.projModal_duty1;
        document.getElementById('projModal_skill1').innerHTML = insurance.projModal_skill1;
        document.getElementById('projModal_descibe1').innerHTML = insurance.projModal_descibe1;
        document.getElementById('projModal_label2').innerHTML = insurance.projModal_label2;
        document.getElementById('projModal_duty2').innerHTML = insurance.projModal_duty2;
        document.getElementById('projModal_skill2').innerHTML = insurance.projModal_skill2;
        document.getElementById('projModal_descibe2').innerHTML = insurance.projModal_descibe2;
        document.getElementById('projModal_period2').innerHTML = insurance.projModal_period2;
    } else if (key == 'tBank') {
        document.getElementById('projModal_title').innerHTML = bis.projModal_title;
        document.getElementById('projModal_img1').src = bis.projModal_img1;
        document.getElementById('projModal_img2').src = bis.projModal_img2;
        document.getElementById('projModal_label1').innerHTML = bis.projModal_label1;
        document.getElementById('projModal_duty1').innerHTML = bis.projModal_duty1;
        document.getElementById('projModal_skill1').innerHTML = bis.projModal_skill1;
        document.getElementById('projModal_descibe1').innerHTML = bis.projModal_descibe1;
        document.getElementById('projModal_period1').innerHTML = bis.projModal_period1;
    }
}

function projDesignModalShow(key){
    if(key == 'lunchBox'){
        document.getElementById('projDesign_title').innerHTML = lunchBox.projDesign_title;
        document.getElementById('projDesign_img').src = lunchBox.projDesign_img;
        document.getElementById('projDesign_label1').innerHTML = lunchBox.projDesign_label1;
        document.getElementById('projDesign_duty1').innerHTML = lunchBox.projDesign_duty1;
        document.getElementById('projDesign_skill1').innerHTML = lunchBox.projDesign_skill1;
        document.getElementById('projDesign_skill2').innerHTML = lunchBox.projDesign_skill2;
        document.getElementById('projDesign_skill3').innerHTML = lunchBox.projDesign_skill3;
        document.getElementById('projDesign_descibe1').innerHTML = lunchBox.projDesign_descibe1;
        document.getElementById('projDesign_period1').innerHTML = lunchBox.projDesign_period1;
        document.getElementById('projDesign_url1').href = lunchBox.projDesign_url1;
    } else if(key == 'travel'){
        document.getElementById('projDesign_title').innerHTML = travel.projDesign_title;
        document.getElementById('projDesign_img').src = travel.projDesign_img;
        document.getElementById('projDesign_label1').innerHTML = travel.projDesign_label1;
        document.getElementById('projDesign_duty1').innerHTML = travel.projDesign_duty1;
        document.getElementById('projDesign_skill1').innerHTML = travel.projDesign_skill1;
        document.getElementById('projDesign_skill2').innerHTML = travel.projDesign_skill2;
        document.getElementById('projDesign_skill3').innerHTML = travel.projDesign_skill3;
        document.getElementById('projDesign_descibe1').innerHTML = travel.projDesign_descibe1;
        document.getElementById('projDesign_period1').innerHTML = travel.projDesign_period1;
        document.getElementById('projDesign_url1').href = travel.projDesign_url1;
    }
}