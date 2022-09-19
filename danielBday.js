


var daniel = {
  presentClicks : 0,
  presents : 0,
  presentsPerClick : 1,
  popUpButtonClicks : 0,
  phillips : 0,
  cola : 0,
  liza : 0,
  quirky : 0,
  rami : 0,
  tulip : 0,
  ben : 0,
  shawarma : 0,
  andrey : 0,
  basement : 0,
  marina : 0,
  ukraine : 0,
  nikita : 0,
  book : 0,
  agshaya : 0,
  pink : 0,
  annie : 0,
  katie : 0,
  pasha : 0,
  philosophy : 0,
  nadia : 0,
  sasha : 0,
  lesha : 0,
  chicken : 0,
  dima : 0,
  pushups : 0,
  tropinka : 0,
  present : 0,
  friendSpeed : 1,
};

var nextId = 0;
var state1 = false;

load();
update();

setInterval(function(){
  if(daniel.phillips>0){
    let friendPower = daniel.phillips*(daniel.cola+1);
    friendPower += 3*daniel.liza*(daniel.quirky+1);
    friendPower += 10*daniel.andrey*(1+daniel.basement);
    friendPower += 25*daniel.annie*daniel.katie;
    friendPower += 50*daniel.pasha - 50*daniel.philosophy;
    friendPower *= 1+daniel.rami+0.777*daniel.tulip;
    friendPower *= 1+(-0.5+1*daniel.book)*daniel.nikita;
    friendPower *= 1+daniel.agshaya*0.5+daniel.pink*0.5;
    friendPower *= 1+2*daniel.lesha;
    friendPower *= 1+daniel.dima;
    friendPower *= 1+daniel.present;

    daniel.friendSpeed = 1+daniel.marina*0.5+daniel.ukraine*0.5+daniel.nadia*1+daniel.sasha*2+daniel.chicken*2;
    daniel.friendSpeed *= 1+0.5*daniel.lesha;
    daniel.friendSpeed *= 1+daniel.pushups;
    daniel.friendSpeed *= 1+daniel.tropinka;
    daniel.presents+=friendPower;
    createFloatingNumber(friendPower);
    update();
  }
},1000/daniel.friendSpeed);

setInterval(function(){
  if(daniel.ben>0){
    let friendPower = daniel.ben*(daniel.shawarma*0.5+1)*daniel.presents*0.001;
    daniel.presents+=friendPower;
    createFloatingNumber(friendPower);
    if(daniel.shawarma>0){
      createFloatingNumber(-20);
    }
    update();
  }
},3000/daniel.friendSpeed);

function presentDown(){
  get("presentImage").style.height = "90%";
}

function presentUp(){
  get("presentImage").style.height = "100%";
}

function presentClick(){
  daniel.presentClicks++;
  daniel.presents+=daniel.presentsPerClick;
  createFloatingNumber(daniel.presentsPerClick);
  update();
}

function update(){
  get("counter").innerText = Math.round(daniel.presents)+"";
  if(daniel.presents>0){
    get("presentCounterDiv").style.opacity = 1;
  }
  if(!state1&&daniel.presentClicks>9){
    get('presentStuff').style.width = "70%";
    setTimeout(function(){
      get('upgradeStuff').style.display = "inline-block";
      let upgradeTab = get('upgradeStuff');
      let opacity = 0;
      let fadeIn = setInterval(function(){
        opacity+=0.04;
        upgradeTab.style.opacity = opacity;
        if(opacity>=1)
        {
          clearInterval(fadeIn);
        }
      },20);
    },2000);
    state1 = true;
  }
}

function createFloatingNumber(number){
  let item = document.createElement("span");
  item.id = "floatingNumber"+nextId;
  nextId++;
  item.className = "floatingNumber";
  item.innerText = "+"+Math.round(number);
  item.style.left = rand(-20,0)+"px";
  item.style.top = rand(-20,0)+"px";
  if(number<0){
    item.style.color = "red";
  }
  get("counterHolder").appendChild(item);
  let fadeIn = setInterval(function(){
    item.style.top = (Number((item.style.top).slice(0,-2))-20)+"px";
    item.style.opacity-=0.02;
    if(item.style.opacity<=0)
    {
      clearInterval(fadeIn);
    }
  },20);
}

function popUpButtonClick(){
  get('popUp').hidden = true;
  daniel.popUpButtonClicks++;
}

function load(){

}

function get(element){
  return(document.getElementById(element));
}

function rand(min, max){
  return Math.floor(Math.random()*(max-min+1));
}

function phillipUpgrade(){
  if(daniel.presents>=10){
    get("phillipUpgrade").hidden = true;
    daniel.phillips++;
    daniel.presents-=10;
    update();
    get('popUpText').innerHTML = 'You <span class="strikeThrough">bought</span> got a phillip! yay!';
    get('popUp').hidden = false;
    get('phillipAvatar').hidden = false;
    get('upgradeHeader').innerText = "Friends and stuff";
    get('colaUpgrade').hidden = false;
    get('lizaUpgrade').hidden = false;
  }
}

function colaUpgrade(){
  if(daniel.presents>=20){
    get("colaUpgrade").hidden = true;
    update();
    daniel.cola++;
    daniel.presents-=20;
    get('popUpText').innerText = 'Bebsi => more powerful phillip. No explanation required';
    get('popUp').hidden = false;
  }
}

function lizaUpgrade(){
  if(daniel.presents>=30){
    get("lizaUpgrade").hidden = true;
    daniel.liza++;
    daniel.presents-=30;
    update();
    get('popUpText').innerHTML = 'Liza is kinda like phillip (but her mom likes her more and so she gets more presents)';
    get('popUp').hidden = false;
    get('lizaAvatar').hidden = false;
    get('quirkyUpgrade').hidden = false;
    get('ramiUpgrade').hidden = false;
  }
}

function quirkyUpgrade(){
  if(daniel.presents>=50){
    get("quirkyUpgrade").hidden = true;
    daniel.quirky++;
    daniel.presents-=50;
    update();
    get('popUpText').innerHTML = 'Liza is also kinda quirky. sometimes she makes a lot of presents at once!';
    get('popUp').hidden = false;
  }
}

function ramiUpgrade(){
  if(daniel.presents>=50){
    get("ramiUpgrade").hidden = true;
    daniel.rami++;
    daniel.presents-=50;
    update();
    get('popUpText').innerHTML = 'Rami has beutiful eyes, and makes everyone less depressed!';
    get('popUp').hidden = false;
    get('ramiAvatar').hidden = false;
    get('benUpgrade').hidden = false;
    get('tulipUpgrade').hidden = false;
  }
}

function tulipUpgrade(){
  if(daniel.presents>=70){
    get("tulipUpgrade").hidden = true;
    daniel.tulip++;
    daniel.presents-=70;
    update();
    get('popUpText').innerHTML = 'Makes rami +0.777x better';
    get('popUp').hidden = false;
  }
}

function benUpgrade(){
  if(daniel.presents>=100){
    get("benUpgrade").hidden = true;
    daniel.ben++;
    daniel.presents-=100;
    update();
    get('popUpText').innerHTML = 'This guy controls the banks, and makes you compound interest!';
    get('popUp').hidden = false;
    get('benAvatar').hidden = false;
    get('shawarmaUpgrade').hidden = false;
    get('andreyUpgrade').hidden = false;
  }
}

function shawarmaUpgrade(){
  if(daniel.presents>=150){
    get("shawarmaUpgrade").hidden = true;
    daniel.shawarma++;
    daniel.presents-=150;
    update();
    get('popUpText').innerHTML = 'Makes ben better, but it aint cheap';
    get('popUp').hidden = false;
  }
}

function andreyUpgrade(){
  if(daniel.presents>=100){
    get("andreyUpgrade").hidden = true;
    daniel.andrey++;
    daniel.presents-=100;
    update();
    get('popUpText').innerHTML = 'Very efficient worker. Sometimes distracts phillip and they both stop working.';
    get('popUp').hidden = false;
    get('andreyAvatar').hidden = false;
    get('basementUpgrade').hidden = false;
    get('marinaUpgrade').hidden = false;
  }
}

function basementUpgrade(){
  if(daniel.presents>=200){
    get("basementUpgrade").hidden = true;
    daniel.basement++;
    daniel.presents-=200;
    update();
    get('popUpText').innerHTML = 'Makes Andrey way more productive, but also he gets tired sometimes';
    get('popUp').hidden = false;
  }
}

function marinaUpgrade(){
  if(daniel.presents>=250){
    get("marinaUpgrade").hidden = true;
    daniel.marina++;
    daniel.presents-=250;
    update();
    get('popUpText').innerHTML = 'Is insane';
    get('popUp').hidden = false;
    get('marinaAvatar').hidden = false;
    get('ukraineUpgrade').hidden = false;
    get('nikitaUpgrade').hidden = false;
  }
}

function ukraineUpgrade(){
  if(daniel.presents>=300){
    get("ukraineUpgrade").hidden = true;
    daniel.ukraine++;
    daniel.presents-=300;
    update();
    get('popUpText').innerHTML = 'simply makes everything better';
    get('popUp').hidden = false;
  }
}

function nikitaUpgrade(){
  if(daniel.presents>=400){
    get("nikitaUpgrade").hidden = true;
    daniel.nikita++;
    daniel.presents-=400;
    update();
    get('popUpText').innerHTML = 'simply makes everything worse';
    get('popUp').hidden = false;
    get('nikitaAvatar').hidden = false;
    get('bookUpgrade').hidden = false;
    get('agshayaUpgrade').hidden = false;
  }
}

function bookUpgrade(){
  if(daniel.presents>=500){
    get("bookUpgrade").hidden = true;
    daniel.book++;
    daniel.presents-=500;
    update();
    get('popUpText').innerHTML = 'makes nikita happy, therefore making him make things better instead';
    get('popUp').hidden = false;
  }
}

function agshayaUpgrade(){
  if(daniel.presents>=600){
    get("agshayaUpgrade").hidden = true;
    daniel.agshaya++;
    daniel.presents-=600;
    update();
    get('popUpText').innerHTML = 'spreads love, making everyone (especially rami) happy';
    get('popUp').hidden = false;
    get('agshayaAvatar').hidden = false;
    get('pinkUpgrade').hidden = false;
    get('annieUpgrade').hidden = false;
    get('katieUpgrade').hidden = false;
  }
}

function pinkUpgrade(){
  if(daniel.presents>=750){
    get("pinkUpgrade").hidden = true;
    daniel.pink++;
    daniel.presents-=750;
    update();
    get('popUpText').innerHTML = 'AGSHAYA IS EVOLVING!';
    get('popUp').hidden = false;
  }
}

function annieUpgrade(){
  if(daniel.presents>=900){
    get("annieUpgrade").hidden = true;
    daniel.annie++;
    daniel.presents-=900;
    update();
    get('popUpText').innerHTML = 'COMBO: REQUIRES KATIE';
    get('popUp').hidden = false;
    get('annieAvatar').hidden = false;
    get('pashaUpgrade').hidden = false;
  }
}

function katieUpgrade(){
  if(daniel.presents>=900){
    get("katieUpgrade").hidden = true;
    daniel.katie++;
    daniel.presents-=900;
    update();
    get('popUpText').innerHTML = 'COMBO: REQUIRES ANNIE';
    get('popUp').hidden = false;
    get('katieAvatar').hidden = false;
    get('pashaUpgrade').hidden = false;
  }
}

function pashaUpgrade(){
  if(daniel.presents>=1000){
    get("pashaUpgrade").hidden = true;
    daniel.pasha++;
    daniel.presents-=1000;
    update();
    get('popUpText').innerHTML = 'Instantly dies if katie isnt around.';
    get('popUp').hidden = false;
    get('pashaAvatar').hidden = false;
    get('love1Avatar').hidden = false;
    get('philosophyUpgrade').hidden = false;
    get('nadiaUpgrade').hidden = false;
  }
}

function philosophyUpgrade(){
  if(daniel.presents>=1200){
    get("philosophyUpgrade").hidden = true;
    daniel.philosophy++;
    daniel.presents-=1200;
    update();
    get('popUpText').innerHTML = 'Nullifies pashas work, he is too busy thinking.';
    get('popUp').hidden = false;
  }
}

function nadiaUpgrade(){
  if(daniel.presents>=1250){
    get("nadiaUpgrade").hidden = true;
    daniel.nadia++;
    daniel.presents-=1250;
    update();
    get('popUpText').innerHTML = 'Never sleeps.';
    get('popUp').hidden = false;
    get('nadiaAvatar').hidden = false;
    get('sashaUpgrade').hidden = false;
  }
}

function sashaUpgrade(){
  if(daniel.presents>=1500){
    get("sashaUpgrade").hidden = true;
    daniel.sasha++;
    daniel.presents-=1500;
    update();
    get('popUpText').innerHTML = 'Tells everyone what he needs them to do.';
    get('popUp').hidden = false;
    get('sashaAvatar').hidden = false;
    get('leshaUpgrade').hidden = false;
    get('chickenUpgrade').hidden = false;
  }
}

function chickenUpgrade(){
  if(daniel.presents>=2000){
    get("chickenUpgrade").hidden = true;
    daniel.chicken++;
    daniel.presents-=2000;
    update();
    get('popUpText').innerHTML = 'Makes sasha better. Makes andrey think of food.';
    get('popUp').hidden = false;
    get('chickenAvatar').hidden = false;
    get('love2Avatar').hidden = false;
  }
}

function leshaUpgrade(){
  if(daniel.presents>=2000){
    get("leshaUpgrade").hidden = true;
    daniel.lesha++;
    daniel.presents-=2000;
    update();
    get('popUpText').innerHTML = 'Makes evening program take 2x as long, but somehow better.';
    get('popUp').hidden = false;
    get('leshaAvatar').hidden = false;
    get('dimaUpgrade').hidden = false;
  }
}

function dimaUpgrade(){
  if(daniel.presents>=2000){
    get("dimaUpgrade").hidden = true;
    daniel.dima++;
    daniel.presents-=2000;
    update();
    get('popUpText').innerHTML = '"motivates" andrey, daniel, ben, phillip, and nikita to work harder';
    get('popUp').hidden = false;
    get('dimaAvatar').hidden = false;
    get('pushupsUpgrade').hidden = false;
    get('tropinkaUpgrade').hidden = false;
  }
}

function pushupsUpgrade(){
  if(daniel.presents>=2500){
    get("pushupsUpgrade").hidden = true;
    daniel.pushups++;
    daniel.presents-=2500;
    update();
    get('popUpText').innerHTML = 'andrey, daniel, ben, phillip, and nikita die. dima does all the work himself';
    get('popUp').hidden = false;
  }
}

function tropinkaUpgrade(){
  if(daniel.presents>=3000){
    get("tropinkaUpgrade").hidden = true;
    daniel.tropinka++;
    daniel.presents-=3000;
    update();
    get('popUpText').innerHTML = 'everyone works better for 4-6 weeks. afterwards, the world ends.';
    get('popUp').hidden = false;
    get('presentUpgrade').hidden = false;
  }
}

function presentUpgrade(){
  if(daniel.presents>=5000){
    get("presentUpgrade").hidden = true;
    daniel.present++;
    daniel.presents-=5000;
    update();
    get('popUpText').innerHTML = 'Perhaps the real present were the friends we made along the way.';
    get('popUp').hidden = false;
    get('danielAvatar').hidden = false;
  }
}
