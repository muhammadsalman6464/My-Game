let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#winner-name");

let turnO=true;

const  winPatterns=[ //2d Array

    [0, 1 , 2],
    [0, 3 , 6],
    [0, 4 , 8],
    [1, 4 , 7],
    [2, 5 , 8],
    [2, 4 , 6],
    [3, 4 , 5],
    [6, 7 , 8]


];


boxes.forEach( (box) => {
    box.addEventListener("click" , ()=>{
        // console.log("button was click"); 
        // box.innerText = "O";
        if(turnO){ //player O
            box.innerText = "O";
            box.style.color="#023E8A";
            turnO = false;
            
        }else { //palyer X
            box.innerText = "X";
            box.style.color="#FF7B00";
            turnO= true;
           
        }
        
        box.disabled = true; //is ka mtlb ha dobara button pres nahi hoga

        checkWinner();
      
    });   
});

const resetGame = () =>{
    turnO = true ;
    enableBoxes() ;
    msgContainer.classList.add("hide");
};

const disbaleBoxes = () =>{ //winner ka bad boxes disabaled ho jai 
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () =>{ //winner ka bad boxes enabaled ho jai 
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";  
    };
};




const showWinner = (winner) =>{
    msg.innerText=`Congratulation , Winner is ${winner}`; //screen pa winner ka name show karna ka function
    msgContainer.classList.remove("hide"); //class pahla disbaledd thi function a run hona par html sa remove hokr winner ka name show krti ha 
    disbaleBoxes(); //winner ka bad button disabled function idr run howa ha
};

const checkWinner = ()=>{
    for(patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val !="" &&pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("Winner is ",pos1val);
                
                showWinner(pos1val);//screen winner show name

            };
        };
    };

};


newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame);
