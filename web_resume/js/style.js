// $(document).ready(function(){
// 	$("#content_box1").hide();
// 	$("#myContent1").hover(function(){
		
// 		$("#content_box1").show();
// 	});
	
// });

myContent1 = document.getElementById('myContent1');
content_box1 = document.getElementById('content_box1').style.display="none";

myContent1.addEventListener('hover',contentShow,false);


function contentShow(){
	
	content_box1.style.display="block";
}



//browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700;