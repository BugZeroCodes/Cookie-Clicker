function update() {
  document.getElementById('text').value = cookieCount;

  document.getElementById('MultiplierCost').innerHTML = ((multiplier+1) * 100) + " Cookies";
  document.getElementById('MultiplierAmount').innerHTML = "Your multiplier is currently x" + (multiplier+1);

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('cookiesPerSecond').innerHTML = "You are gaining " + (((autoClick) + (factories * 2)) * multiplier * prestMultiplier) + " cookies per/s.";
  document.getElementById('prestiges').innerHTML = "You have prestiged " + prestige + " times.";
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
  if (prestige >= 5) {
    changeCookie('../img/finalcookie.png');
  }
  // Milestone Rewards
  if (autoClick === 100) {
    alert('Achievement Unlocked: Jitter Finger');
    alert('You have a FAST finger.')
    autoClick += 1000;
  }
  if (factories === 100) {
    alert('Achievement Unlocked: Industrial Age');
    alert('Make us cookie bakers proud!')
    factories += 10000;
  }
  if ((((autoClick) + (factories * 2)) * multiplier) === 1000) {
    alert('Achievement Unlocked: Teeny-Tiny Cookies');
    cookieCount += 100;
  }
  if ((((autoClick) + (factories * 2)) * multiplier) === 100000) {
    alert('Achievement Unlocked: Everlasting Cookies');
    factories += 100;
  }
  if (cookieCount === 1000000000000000000000000000000000000000) {
    alert('Achievement Unlocked: What is life?');
    alert('Do you have a life?');
    alert('Do you know WHAT YOU HAVE DONE?!?')
    cookieCount *= 1000000000;
  }
  if (multiplier === 1500) {
    alert('Achievement Unlocked: Big Cookies');
    cookieCount += 1000000;
  }
}
function changeCookie(imageURL) {
  $('#cookie img').attr('src', imageURL);
}
var multiplier = 1;
var cookieCount = 0;
var autoClick = 0;
var factories = 0;
var prestige = 0;
var prestCost = 1000000;
var prestMultiplier = 1;
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
function save() {
  localStorage.setItem('cookiecount', cookieCount);
  localStorage.setItem('autoclick', autoClick);
  localStorage.setItem('factory', factories);
  localStorage.setItem('multiplier', multiplier);
  localStorage.setItem('prestiges', prestige);
  localStorage.setItem('prestigeCost', prestCost);
  localStorage.setItem('prestMultiplier', prestMultiplier);
  alert('Saved!')
}
function load() {
  cookieCount = localStorage.getItem('cookiecount');
  cookieCount = parseInt(cookieCount);
  autoClick = localStorage.getItem('autoclick');
  autoClick = parseInt(autoClick);
  factories = localStorage.getItem('factory');
  factories = parseInt(factories);
  multiplier = localStorage.getItem('multiplier');
  multiplier = parseInt(multiplier);
  prestige = localStorage.getItem('prestiges');
  prestige = parseInt(prestige);
  prestCost = localStorage.getItem('prestigeCost');
  prestCost = parseInt(prestCost);
  prestMultiplier = localStorage.getItem('prestMultiplier');
  prestMultiplier = parseInt(prestMultiplier);
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
  localStorage.setItem('prestMultiplier', 0);
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
    prestMultiplier *= 2;
    dataWipe();
    alert('Restarted!');
    update();
  }
}
