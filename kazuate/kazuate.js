let kotae = Math.floor(Math.random()*10)+1;
console.log('答え:' +kotae);
let kaisu = 0;
let a=0;
hantei();
hantei();
hantei();
hantei();
function hantei(){
    let yoso =4;
    let b=document.querySelector('span#yoso');
    b.textContent=yoso;
    kaisu=kaisu+1;
    let c=document.querySelector('span#kaisu');
    if(yoso===kotae&&a<1){
        let kotae="('正解です。おめでとう！')";
        a=a+1;
        kaisu=kaisu+2;
    }
    if(yoso<kotae&&kaisu<3){
        console.log('まちがい、答えはもっと大きいですよ。');
    }
    if(yoso>kotae&&kaisu<3){
        console.log('まちがい、答えはもっと小さいですよ。');
    }
    if(kaisu===3&&yoso!==kotae){
        console.log('まちがい、残念でした答えは'+'kotae'+'です。');
    }
    if(kaisu>=4){
        console.log('答えは'+kotae+'でした。　すでにゲームは終わっています');
    }
  }