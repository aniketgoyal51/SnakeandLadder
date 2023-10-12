
const dice=document.getElementsByClassName("dice")[0]
const board=document.getElementsByClassName("board")[0]
const box=document.getElementsByClassName("box")

const btn=document.getElementsByClassName("button")[0]
const btnexit=document.getElementsByClassName("exit")[0]

const turn=document.getElementById("turn")
const red=document.getElementById("p1")

const redcoin=document.getElementById("red")
const compcoin=document.getElementById("blue")

const dicesound=new Audio("./Assets/dice.mp3")
// const game=new Audio("./Assets/gameaudio.mp3")
// game.play();
// game.loop=true;

let count=0;
let cscore=0;
let rscore=0;
btnexit.onclick=()=>{
    location.href="index.html"
}
function redirect(){
    dicesound.pause();
    dicesound.currentTime=0;
    dicesound.play();
    if(count%2===1){
        var roll=Math.ceil(Math.random()*6)
        dice.innerHTML=`<img src="./Assets/Dot${roll}.png" height="100%">`
        console.log(roll)     //-----------------
        turn.innerHTML="Red"
        count=count+1
        // console.log(count)         //-----------------
        play('p1', 'cp',roll)
        compcoin.style.visibility="hidden";
        
}
    
}
redirect()

    if (count%2===0){
        btn.onclick=()=>{
        var roll=Math.ceil(Math.random()*6)
        dice.innerHTML=`<img src="./Assets/Dot${roll}.png" height="100%">`
        console.log(roll)     //-----------------
            turn.innerHTML="Comp"
            count=count+1
            // console.log(count)         //-----------------
            play('p1', 'rp',roll)
            redcoin.style.visibility="hidden";
            redirect()
    }
    
}

function play(player,psum,roll){
    let sum
    if(psum==='cp'){
        cscore=cscore+roll
        // console.log(roll)

        if(cscore>100){
            cscore=cscore-roll
        }
        if(cscore==28){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=10;
        }
        if(cscore==4){
            if(count==1){
                cscore=56;
            }else{
                document.getElementById(`box${cscore-roll}`).innerHTML="";
                cscore=56;
            }
        }
        if(cscore==12){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=50;
        }
        if(cscore==14){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=55;
        }
        if(cscore==37){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
        cscore=3;
        }
        if(cscore==48){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=16;
        }
        if(cscore==54){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=88;
        }
        if(cscore==41){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=79;
        }
        if(cscore==75){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=32;
        }
        if(cscore==94){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=71;
        }
        if(cscore==96){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
            cscore=42;
        }
        sum=cscore
        console.log("c sum = "+ sum)
        // console.log(yscore)
        if(count===1){
            document.getElementById(`box${cscore}`).innerHTML="";
        }else if(count>=2){
            document.getElementById(`box${cscore-roll}`).innerHTML="";
        }
        document.getElementById(`box${cscore}`).innerHTML="<img src='./Assets/BlueDot.png' height='85%'>"       //------------------

        
    }
    if(psum==='rp'){
        rscore=rscore+roll
        
        

        if(rscore>100){
            document.getElementById(`box${rscore-roll}`).innerHTML="";
            rscore=rscore-roll
        }
        if(rscore==28){
            document.getElementById(`box${rscore-roll}`).innerHTML="";
            rscore=10;
        }
        if(rscore==4){
            if(count==2){
                rscore=56;
            }else{
                document.getElementById(`box${rscore-roll}`).innerHTML="" ;
                rscore=56;
            }
        }
        if(rscore==12){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=50;
        }
        if(rscore==14){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=55;
        }
        if(rscore==37){
            document.getElementById(`box${rscore-roll}`).innerHTML="";
            rscore=3;
        }
        if(rscore==48){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=16;
        }
        if(rscore==54){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=88;
        }
        if(rscore==41){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=79;
        }
        if(rscore==75){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=32;
        }
        if(rscore==94){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=71;
        }
        if(rscore==96){
            document.getElementById(`box${rscore-roll}`).innerHTML="";

            rscore=42;
        }
        sum=rscore
        console.log("r sum = "+ sum)
        // console.log(rscore)
        if(count===2){
            document.getElementById(`box${rscore}`).innerHTML="";
        }else if(count>=2){
            document.getElementById(`box${rscore-roll}`).innerHTML="";
        }
        document.getElementById(`box${rscore}`).innerHTML="<img src='./Assets/RedDot.png' height='110%'>"
    }
    else{
        if(rscore === 100) {
            localStorage.setItem("won","Red")
            location.href="scoreboard.html"
            // console.log(localStorage.getItem("won"))
        }
        if(cscore===100){
            localStorage.setItem("won","Comp")
            location.href="scoreboard.html"
            // console.log(localStorage.getItem("won"))
        }
        
    }
    
}
board.onclick=(e)=>{
    console.log(e.target.id)
}





