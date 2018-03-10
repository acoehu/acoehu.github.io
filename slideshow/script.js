var myImages =["https://www.imms.org/images/dolphin_presentation/dolphin1.jpg", 
"http://cdn3.theeventchronicle.com/wp-content/uploads/2014/09/dolphin-intelligence.jpg",
"https://media-cdn.tripadvisor.com/media/photo-s/01/9a/25/d5/lunch-time.jpg",
"http://www.liveanimalslist.com/mammals/images/dolphin-in-water.jpg",
"http://2.bp.blogspot.com/-2rDncHQmr5Q/USyCV-ED6uI/AAAAAAAAA48/cSF4eEFK-ZM/s1600/335302_10150550098764653_687830502_o.jpg"];
var captionImages =["Laugh","Love","Lunch","Happiness","Family"];
var timer;
 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1) index=0;
 else index++;
 updateImage();
} 
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 updateImage();
} 

function autoslide() {
	var val = document.getElementById("auto").value;
	if (val === "no") {
		timer = setInterval(function(){ next(); }, 5000);
		document.getElementById("auto").value = "yes"
	}
	else {
		clearInterval(timer);

	}
}

 