let boxes = document.querySelectorAll(".boxes");
let heading = document.querySelector(".head");
let reset = document.querySelector(".resetm");
let newGame = document.querySelector(".new-game")

turnO = true;

let pattern = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7],
    [2,5,8], [2,4,6], [3,4,5], [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    heading.innerText="Tic-Tac-Toe game"
}
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled= true;
        winnerFun();
        
    })
})
let winnerFun = () =>{
    for(let find of pattern){
        let val1 = boxes[find[0]].innerText;
        let val2 = boxes[find[1]].innerText;
        let val3 = boxes[find[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1==val2 && val2==val3){
                // console.log("winner");
            
                heading.innerText = `${val1} is winner`;
                disableBoxes();
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);