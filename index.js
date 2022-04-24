var imageArray=["slides1.jpg","slides2.jpg","slides3.jpg"]

var imageCounter=0;

var imageElement=document.getElementById("slImage");

function changeImage(){
	imageElement.setAttribute("src",imageArray[imageCounter]);
	imageCounter++;
	if (imageCounter>=imageArray.length){
		imageCounter=0;
	}
}

var intervalHandle=setInterval(changeImage, 3000);

imageElement.onclick=function(){
	clearInterval(intervalHandle);
}