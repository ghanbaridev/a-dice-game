var images = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",

];

 index1 = Math.floor(Math.random() * images.length);
 index2 = Math.floor(Math.random() * images.length);
 


      
img = document.createElement('img');
    img.src = images[index1];
    document.getElementById("image1").appendChild(img);
img = document.createElement('img');
    img.src = images[index2];
    document.getElementById("image2").appendChild(img);   
if(index1>index2){
        document.getElementById("title").innerHTML="Player One Is Winner ";   
    }
else if(index1<index2){
        document.getElementById("title").innerHTML="Player Tow Is Winner";  
    }
else if(index1 === index2){
        document.getElementById("title").innerHTML="It Was a Draw";  
    }      

