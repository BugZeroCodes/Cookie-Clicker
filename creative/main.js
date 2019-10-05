function update() {
  document.getElementById('text').value = cookieCount;

  document.getElementById('MultiplierCost').innerHTML = ((multiplier+1) * 100) + " Cookies";
  document.getElementById('MultiplierAmount').innerHTML = "Your multiplier is currently x" + (multiplier+1);

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('cookiesPerSecond').innerHTML = "You are gaining " + (((autoClick) + (factories * 2)) * multiplier * prestMultiplier) + " cookies per/s.";
  document.getElementById('prestiges').innerHTML = prestige + " Prestiges";
  document.getElementById('costToPrestige').textContent = prestCost + " Cookies";
  if (cookieCount < prestCost) {
    $('#prestige-button').hide();
  } else {
    $('#prestige-button').show();
  }
  // Evolve the cookies by prestige
  if (prestige >= 1) {
    changeCookie('../img/cookie.jpeg')
  }
  if (prestige >= 3) {
    changeCookie('../img/cookie2.png');
  }
  if (prestige >= 7) {
    changeCookie('../img/cookie3.png');
  }
  if (prestige >= 11) {
    changeCookie('../img/finalcookie.png');
  }
}
function changeCookie(imageURL) {
  $('#cookie img').attr('src', imageURL);
}
var multiplier = 1;
var cookieCount = Infinity;
var autoClick = 0;
var factories = 0;
var prestige = 0;
var prestCost = 1000000;
var prestMultiplier = 1;
var cps = (((autoClick) + (factories * 2)) * multiplier * prestMultiplier);
function timer() {
  cookieCount += autoClick * multiplier * prestMultiplier;
  cookieCount += factories * 5 * multiplier * prestMultiplier;
  update();
}
setInterval(timer, 1000);
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
function upgradeMultiplier() {
  if (cookieCount >= ((multiplier + 1) * 100)) {
    cookieCount -= ((multiplier+1) * 100);
    multiplier += 1;
    update();
  }
}
function rebirth() {
  if (cookieCount >= prestCost) {
    alert('Restarted!');
    prestige += 1;
    cookieCount = Infinity;
    autoClick = 0;
    factories = 0;
    multiplier *= 2;
    prestCost *= 2;
    prestMultiplier *= 2;
  }
}
