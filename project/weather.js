let s = document.querySelector('button#search');
s.addEventListener('click', kensaku);

function kensaku(){
  var element = document.getElementById( "target" ).value ;
  let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+element+'.json';
  axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}
let kumori='Clouds';

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
    let obj = document.getElementById('target');
    let idx = obj.selectedIndex;
    let txt  = obj.options[idx].text;
    let a=document.querySelector('h1#country');
    a.textContent=txt;

    let ko='最高気温:';
    let f=document.querySelector('span#ooo');
    f.textContent=ko;
    let ki='℃';
    let g=document.querySelector('span#do');
    g.textContent=ki;
    let b=document.querySelector('span#highkion');
    b.textContent=data.main.temp_max;

    let mu='最低気温:';
    let h=document.querySelector('span#oooo');
    h.textContent=mu;
    let ke='℃';
    let i=document.querySelector('span#doo');
    i.textContent=ke;
    let c=document.querySelector('span#lowkion');
    c.textContent=data.main.temp_min;
    
    let e=document.querySelector('h1#tenki');
    e.textContent=data.weather[0].main;

    if(data.weather[0].main=='Clouds'){
      var sampleElement = document.getElementById('random');
      sampleElement.classList.remove('addColor2','addColor3','addColor4');
      document.getElementById("random").classList.add("addColor");
    }
    
    else if(data.weather[0].main=='Clear'){
      var sampleElement = document.getElementById('random');
      sampleElement.classList.remove('addColor','addColor3','addColor4');
      document.getElementById("random").classList.add("addColor2");
    }
    
    else if(data.weather[0].main=='Rain'){
      var sampleElement = document.getElementById('random');
      sampleElement.classList.remove('addColor','addColor3','addColor2');
      document.getElementById("random").classList.add("addColor4");
    }
    
    else if(data.weather[0].main=='Mist'){
      var sampleElement = document.getElementById('random');
      sampleElement.classList.remove('addColor','addColor2','addColor4');
      document.getElementById("random").classList.add("addColor3");
    }
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}
