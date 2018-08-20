function update() {
  document.getElementById('text').value = cookieCount;
  document.title = cookieCount + " Cookies";

  document.getElementById('MultiplierCost').innerHTML = ((multiplier+1) * 100) + " Cookies";
  document.getElementById('MultiplierAmount').innerHTML = "Your multiplier is currently x" + (multiplier+1);

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('cookiesPerSecond').innerHTML = "You are gaining " + (((autoClick) + (factories * 2)) * multiplier) + " cookies per/s.";
  document.getElementById('prestiges').innerHTML = "You have prestiged " + prestige + " times.";
  document.getElementById('costToPrestige').textContent = prestCost + " Cookies";
  if (cookieCount < prestCost) {
    $('#prestige-button').hide();
  } else {
    $('#prestige-button').show();
  }
  if (prestige >= 1) {
    changeCookie('../img/cookie.jpeg')
  }
  if (prestige >= 5) {
    changeCookie('../img/finalcookie.png');
  }
  // Milestone Rewards
  if (autoClick === 100) {
    cookieCount += 1000;
  }
  if (factories === 100) {
    cookieCount += 10000;
  }
  if (multiplier === 1500) {
    cookieCount += 1000000;
  }
  if (prestige === 10) {
    multiplier *= 2000;
  }
}
function changeCookie(imageURL) {
  $('#cookie img').attr('src', imageURL);
}
var multiplier = 1;
var cookieCount = 1000000000000;
var autoClick = 1000000000000;
var factories = 1000000000000;
var prestige = 1000000000000;
var prestCost = 0;
function timer() {
  cookieCount += autoClick * multiplier;
  cookieCount += factories * 5 * multiplier;
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
function dataWipe() {
  localStorage.setItem('cookiecount', 0);
  localStorage.setItem('autoclick', 0);
  localStorage.setItem('factory', 0);
  localStorage.setItem('multiplier', 0);
  localStorage.setItem('prestige', 0);
  localStorage.setItem('prestigeCost', 0);
}
function reset() {
  dataWipe();
  cookieCount = 0;
  autoClick = 0;
  factories = 0;
  multiplier = 0;
  prestige = 0;
  save();
  document.getElementById('text').value = cookieCount;
}
function rebirth() {
  if (cookieCount >= prestCost) {
    prestige += 1;
    cookieCount = 0;
    autoClick = 0;
    factories = 0;
    multiplier *= 2;
    prestCost *= 2;
    dataWipe();
    save();
    update();
  }
}
