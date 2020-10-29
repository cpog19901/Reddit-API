//jshint esversion:6

const go = document.getElementById("go");
const inputSub = document.getElementById("input-sub");

go.addEventListener("click", function(){
  const redditContainer = document.getElementById("reddit-container");
redditContainer.innerHTML="";
var inputSubValue = inputSub.value;

console.log(inputSubValue);
const apiUrl = "https://www.reddit.com/r/"+inputSubValue+".json";

async function getData (){
  const response = await fetch(apiUrl);
  const data = await response.json();
  const posts = data.data.children;


 
 
  posts.forEach( function(post){
    



const urlString = post.data.url;
    
   
      var lastFourLetters = urlString.substring(urlString.length -4);
      var lastFiveLetters = urlString.substring(urlString.length -5);
      if(lastFourLetters ==".jpg" || lastFourLetters ==".png" || lastFiveLetters ==".jpeg" ){
       

          var a = document.createElement("a");
          var title = document.createElement("h3");
          var text = document.createElement("p");
          title.textContent = post.data.title;
          a.href =urlString;
          a.setAttribute("data-lightbox", "mygallery");
          var img = document.createElement('img'); 
          img.classList.add("reddit-image");
          img.src =urlString;
          console.log(urlString)
          a.appendChild(img); 
          
         
          redditContainer.appendChild(a); 
      }

   
  });
    
  
  
}

getData();

});