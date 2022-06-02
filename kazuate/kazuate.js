let kotae = Math.floor(Math.random()*10)+1;
console.log('答え:' +kotae);
let kaisu = 0;
let kaisu1=0;
let a=0;
let b=document.querySelector('#kaitou');
b.addEventListener('click',hantei);

function hantei(){
    let i = document.querySelector('input[name="yoso"]');
    let s =i.value;
    let yoso = Number(s);
    let b=document.querySelector('span#yoso');
    b.textContent=yoso;
    let ko='回目の予想:';
    let d=document.querySelector('span#ko');
    d.textContent=ko;
    kaisu=kaisu+1;
    kaisu1=kaisu1+1;
    let c=document.querySelector('span#kaisu');
    c.textContent=kaisu1;
    
    if(yoso===kotae&&a===0&&kaisu<=3){
        let io="正解です。おめでとう！";
        let d=document.querySelector('p#result');
        d.textContent=io;
        kaisu=kaisu+2;
    }
    else if(yoso<kotae&&kaisu<3){
        let io="まちがい、答えはもっと大きいですよ。";
        let d=document.querySelector('p#result');
        d.textContent=io;
    }
    else if(yoso>kotae&&kaisu<3){
        let io="まちがい、答えはもっと小さいですよ。";
        let d=document.querySelector('p#result');
        d.textContent=io;
    }
    else if(kaisu===3&&yoso!==kotae){
        let io="まちがい、残念でした答えは"+kotae+"です。";
        let d=document.querySelector('p#result');
        d.textContent=io;
    }
    if(kaisu>=4||a>=2){
        let io="答えは"+kotae+"でした。　すでにゲームは終わっています";
        let d=document.querySelector('p#result');
        d.textContent=io;
    }
  }