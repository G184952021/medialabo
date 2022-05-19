let kotae = Math.floor(Math.random()*10)+1;
console.log('答え:' +kotae);
let kaisu = 0;
let a=0;
hantei();
function hantei(){
    let yoso =4;
    let b=document.querySelector('span#yoso');
    b.textContent=yoso;
    kaisu=kaisu+1;
    let c=document.querySelector('span#kaisu');
    c.textContent=kaisu;
    
    if(yoso===kotae&&a<1){
        let kotae="正解です。おめでとう！";
        let d=document.querySelector('p#result');
        d.textContent=kotae;
        a=a+1;
        kaisu=kaisu+2;
    }
    if(yoso<kotae&&kaisu<3){
        let kotae="まちがい、答えはもっと大きいですよ。";
        let d=document.querySelector('p#result');
        d.textContent=kotae;
    }
    if(yoso>kotae&&kaisu<3){
        let kotae="まちがい、答えはもっと小さいですよ。";
        let d=document.querySelector('p#result');
        d.textContent=kotae;
    }
    if(kaisu===3&&yoso!==kotae){
        let kotae="まちがい、残念でした答えは'+'kotae'+'です。";
        let d=document.querySelector('p#result');
        d.textContent=kotae;
    }
    if(kaisu>=4){
        let kotae="答えは'+kotae+'でした。　すでにゲームは終わっています";
        let d=document.querySelector('p#result');
        d.textContent=kotae;
    }
  }