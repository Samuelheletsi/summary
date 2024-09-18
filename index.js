 


document.addEventListener("DOMContentLoaded",()=>{
   // icons variables
 let reactIcon = document.getElementById('ricon');
 let memoryIcon = document.getElementById('micon');
 let verbalIcon = document.getElementById('veicon');
 let visualIcon = document.getElementById('vicon');
 
 // variables for categories
 let reactCat = document.getElementById('rcat');
 let memoryCat = document.getElementById('mcat');
 let verbalCat = document.getElementById('vecat');
 let visualCat = document.getElementById('vcat');
 
 // variables for scores
 let reactScore = document.getElementById('rscore');
 let memoryScore = document.getElementById('mscore');
 let verbalCScore= document.getElementById('vescore');
 let visualScore = document.getElementById('vscore');

      try {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{

            // Icons
            reactIcon.src = data[0].icon;
            memoryIcon.src =  data[1].icon;
            verbalIcon.src =  data[2].icon;
            visualIcon.src = data[3].icon;

            // Categories
            reactCat.innerText = data[0].category;
            memoryCat.innerText = data[1].category;
            verbalCat.innerText = data[2].category;
            visualCat.innerText = data[3].category;

            // Scores
            reactScore.innerText =data[0].score;
            memoryScore.innerText =data[1].score;
            verbalCScore.innerText =data[2].score;
            visualScore.innerText =data[3].score;
             
        })
        
      } catch (error) {
        
      }

})