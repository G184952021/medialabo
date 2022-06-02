let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
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
    if(data.weather[0].main==='Clouds'){
     
    }
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}
