
const dice=document.getElementsByClassName("dice")[0]
const board=document.getElementsByClassName("board")[0]
const box=document.getElementsByClassName("box")

const btn=document.getElementsByClassName("buttonuse")[0]
const btnexit=document.getElementsByClassName("exit")[0]
const turn=document.getElementById("turn")
const red=document.getElementById("p1")

const redcoin=document.getElementById("red")
const bluecoin=document.getElementById("blue")

const dicesound=new Audio("./Assets/dice.mp3")
// const game=new Audio("./Assets/gameaudio.mp3")
// game.play();
// game.loop=true;

let count=0;
let bscore=0;
let rscore=0;
btnexit.onclick=()=>{
    location.href="index.html"
}
btn.onclick=()=>{
    var roll=Math.ceil(Math.random()*6)
    dice.innerHTML=`<img src="./Assets/Dot${roll}.png" height="100%">`
    console.log(roll)     //-----------------

    dicesound.pause();
    dicesound.currentTime=0;
    dicesound.play();
    if (count%2===1){
        turn.innerHTML="Blue"
        count=count+1
        // console.log(count)         //-----------------
        play('p1', 'rp',roll)
        redcoin.style.visibility="hidden";
    }else if(count%2===0){
        turn.innerHTML="Red"
        count=count+1
        // console.log(count)         //---------------------------
        play('p2', 'yp',roll)
        bluecoin.style.visibility="hidden";
        // console.log(yscore)
    }
}


function play(player,psum,roll){
    let sum
    if(psum==='yp'){
        console.log(roll +"+"+ bscore)
        bscore=bscore+roll
        // console.log(roll)

        if(bscore>100){
            bscore=bscore-roll
        }
        if(bscore==28){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=10;
        }
        if(bscore==4){
            if(count==1){
                bscore=56;
            }else{
                document.getElementById(`box${bscore-roll}`).innerHTML="";
                bscore=56;
            }
        }
        if(bscore==12){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=50;
        }
        if(bscore==14){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=55;
        }
        if(bscore==22){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=58;
        }
        if(bscore==37){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
        bscore=3;
        }
        if(bscore==48){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=16;
        }
        if(bscore==54){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=88;
        }
        if(bscore==41){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=79;
        }
        if(bscore==75){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=32;
        }
        if(bscore==94){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=71;
        }
        if(bscore==96){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
            bscore=42;
        }
        sum=bscore
        console.log("y sum = "+ sum)
        // console.log(yscore)
        if(count===1){
            document.getElementById(`box${bscore}`).innerHTML="";
        }else if(count>=2){
            document.getElementById(`box${bscore-roll}`).innerHTML="";
        }
        document.getElementById(`box${sum}`).innerHTML="<img src='./Assets/BlueDot.png' height='85%'>"       //------------------

        
    }
    if(psum==='rp'){
        console.log(roll +"+"+ rscore)
        rscore=rscore+roll
        
        

        if(rscore>100){
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
        if(rscore==22){
            document.getElementById(`box${rscore-roll}`).innerHTML="";
            rscore=58;
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
        if(bscore===100){
            localStorage.setItem("won","Blue")
            location.href="scoreboard.html"
            // console.log(localStorage.getItem("won"))
        }
        
    }
    
}





board.onclick=(e)=>{
    console.log(e.target.id)
}
