var images = [
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice1.png",
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice2.png",
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice3.png",
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice4.png",
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice5.png",
    "https://github.com/ghanbaridev/a-dice-game/tree/main/images/dice6.png",

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

