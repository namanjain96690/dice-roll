let btn= document.querySelector('button');
btn.classList.add('stuff2');
begin();
function begin(){
    document.querySelector('.d1').classList.add('stuff');
    document.querySelector('.d2').classList.add('stuff');
    btn.innerHTML="LET'S PLAY";
    btn.addEventListener('click',play);

}

function play(){
    btn.classList.remove('stuff2');
    document.querySelector('.d1').classList.remove('stuff');
    document.querySelector('.d2').classList.remove('stuff');
    btn.innerHTML="Play Again";
    let ran1= Math.floor((Math.random()*6)+1);
let ran2= Math.floor((Math.random()*6)+1);
console.log(`dice${ran1}.png`);
document.querySelector('.img1').setAttribute('src',`dice${ran1}.png`);
document.querySelector('.img2').setAttribute('src',`dice${ran2}.png`);
if(ran1>ran2){
    document.querySelector('h1').innerText='Winner is USER1';
}
else if(ran2>ran1){
    document.querySelector('h1').innerText='Winner is USER2';
}
else{
    document.querySelector('h1').innerText="It's a DRAW";
}
}

