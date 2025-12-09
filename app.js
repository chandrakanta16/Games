let boxs = document.querySelectorAll(".box");
let restbtn = document.querySelector(".Reset_game");
let newgm = document.querySelector(".New_game");
let winmsg = document.querySelector(".winmsg");
let gdpsw=document.querySelector(".disp");


let turno = true;


let winnerpattrn = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the button was clicked");

        if (turno) {
            box.innerText = "X";
            turno = false;
        }
        else {
            box.innerText = "O";
            turno = true;
        }
        box.disabled = true;

        winnerchke();
    });
});


const btndsbl = () => {
    for (let bx of boxs) {
        bx.disabled = true;
       
    }
}

const btnenbl = () => {
    for (let bx of boxs) {
        bx.disabled =false;
        bx.innerText="";
        winmsg.innerText=""
}
    }


const Gmerest=()=>{
    turno=true;
    btnenbl();
    gdpsw.classList.add("disp");

    
}


const whowinner = (winner) => {
    winmsg.innerText = `Congratulations,winner is ${winner}`;
    btndsbl();
   gdpsw.classList.remove("disp");

}



const winnerchke = () => {
    for (let ptn of winnerpattrn) {
        // console.log(
        //     boxs[ptn[0]].innerText,
        //     boxs[ptn[1]].innerText,
        //     boxs[ptn[2]].innerText);


        let po1v = boxs[ptn[0]].innerText;
        let po2v = boxs[ptn[1]].innerText;
        let po3v = boxs[ptn[2]].innerText;

        if (po1v != "" && po2v != "" && po3v != "") {
            if (po1v === po2v && po2v === po3v) {
                console.log("winner ", po1v)
                whowinner(po1v);

            }
        }
    }
}

restbtn.addEventListener("click",Gmerest);
newgm.addEventListener("click",Gmerest);



