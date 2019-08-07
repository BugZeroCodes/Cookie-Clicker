function update() {
  document.getElementById('text').value = cookieCount;

  document.getElementById('MultiplierAmount').innerHTML = "Multiplier: x" + (multiplier);

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
}
var cookieCount = Math.floor(Math.random(3400) * 20);
var autoClick = Math.floor(Math.random(3400000000) * 20)
var factories = Math.floor(Math.random(3400000000) * 20);
var multiplier = Math.floor(Math.random(3400000000000000000000000000000000) * 20)
function timer() {
  cookieCount += autoClick * multiplier;
  cookieCount += factories * 5 * multiplier;
  update();
}
setInterval(timer, 0);
function add() {
  cookieCount += 1;
  update();
}
function buyAutoClick() {
  if (cookieCount >= ((autoClick + 1) * 12)) {
    cookieCount -= ((autoClick+1) * 12);
    autoClick += 1;
    update();
  }
}
function buyFactory() {
  if (cookieCount >= ((factories + 1) * 12)) {
    cookieCount -= ((factories+1) * 12);
    factories += 1;
    update();
  }
}
