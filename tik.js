let boxes=document.querySelectorAll('#box');
let mss=document.querySelector('.msg-container');
let  set=document.querySelector('.reset');
let array =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];


let turn0=true;
let winnerFound=false;
boxes.forEach((box) => {
  box.addEventListener('click',()=>{
        
  if(turn0){
    box.textContent='0';
    turn0=false;
  }else{
    box.textContent='X';
    turn0=true;
  }
   box.style.pointerEvents = "none";  

    checkWinner();
  });
});
const disablebutton=()=>{
  for(let box of boxes){
    box.style.pointerEvents = "none";
  }
}
const enablebutton=()=>{
   for(let box of boxes){
    box.style.pointerEvents = "auto";
    box.innerText="";
  }
}

const resetgame=()=>{
  turn0=true;
   winnerFound = false; 
  enablebutton();
  mss.classList.add("hiden");
}



const showwinner=(winner)=>{
    mss.innerText=`💕congratulation  the winner is  ${winner}`
    mss.classList.remove("hiden");
     winnerFound = true; // ✅ SET FLAG
}

const showTie = () => {
  mss.innerText = " 😒😒😒😒😒😒😒😒It's a tie!";
  mss.classList.remove("hiden");
  disablebutton();
};


const checkWinner=()=>{
  for(let pattern of array){
       let vl1=boxes[pattern[0]].innerText;
        let vl2=boxes[pattern[1]].innerText;
         let vl3=boxes[pattern[2]].innerText;
       if(vl1!="" && vl2!="" && vl3!=""){
         if(vl1===vl2 && vl2===vl3){
              console.log("winner",vl1);
              showwinner(vl1);
              disablebutton();
              return;
         }
       }

  }

  let count=0;
  boxes.forEach((element) => {
    if( element.innerText!=""){
       count++;
    }
  });
  if(count===9 && !winnerFound){
    console.log(" hogaya");
  showTie();
  }

};

set.addEventListener('click',resetgame);

