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
  // Check for earned badges
  checkBadges();
  // Stat modal
  $('#cookieClicks').html(clicks);
  var message = ' cookies per click';
  if (clickPowerMultiplier === 1) {
    message = ' cookie per click';
  } else {
    message = ' cookies per click';
  }
  $('#clickPower').html(clickPowerMultiplier + message);
  $('#nextMultiplier').html(clickPowerMultiplier * 2);
  // Other stuff
  $('#currentAutoclickers').html(autoClick + '/');
  $('#currentFactories').html(factories + '/');
  $('#cookiesLeft').html(cookieCount + '/');
  if (autoClick >= 100) {
    $('#currentAutoclickers').remove()
  }
  if (factories >= 100) {
    $('#currentFactories').remove();
  }
}
function checkBadges() {
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
  if (cps === 1000) {
    alert('Achievement Unlocked: Teeny-Tiny Cookies');
    cookieCount += 100;
  }
  if (cps === 100000) {
    alert('Achievement Unlocked: Everlasting Cookies');
    factories += 100;
  }
  if (cps === 10000) {
    alert('Achievement Unlocked: Cookie Rain');
    cookieCount += 100000
  }
  if (cookieCount === 1000000000000000000000000000000000000000) {
    alert('Achievement Unlocked: What is life?');
    alert('Do you have a life?');
    alert('Do you know WHAT YOU HAVE DONE?!?')
    cookieCount *= Infinity;
  }
  if (multiplier === 1500) {
    alert('Achievement Unlocked: Big Cookies');
    cookieCount += 1000000;
  }
  if (factories === 1000000) {
    alert('Achievement Unlocked: Company Infinite');
    prestige += 10;
  }
  if (prestige === 100000) {
    alert('Achievement Unlocked: Makin\' my way downtown')
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
var clicks = 0;
var cps = (((autoClick) + (factories * 2)) * multiplier * prestMultiplier);
var clickPowerMultiplier = 1;
function timer() {
  cookieCount += autoClick * multiplier * prestMultiplier;
  cookieCount += factories * 5 * multiplier * prestMultiplier;
  update();
}
setInterval(timer, 1000);
function add() {
  cookieCount += 1 * clickPowerMultiplier;
  clicks += 1;
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
  localStorage.setItem('clickPower', clickPowerMultiplier);
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
  prestige = parseInt(prestige) ;
  prestCost = localStorage.getItem('prestigeCost');
  prestCost = parseInt(prestCost);
  prestMultiplier = localStorage.getItem('prestMultiplier');
  prestMultiplier = parseInt(prestMultiplier);
  clicks = localStorage.getItem('CookieClicks');
  clicks = parseInt(clicks);
  clickPowerMultiplier = localStorage.getItem('clickPower');
  clickPowerMultiplier = parseInt(clickPowerMultiplier);
  update();
}
function buyAutoClick() {
  if (cookieCount >= ((autoClick + 1) * 12)) {
    cookieCount -= ((autoClick+1) * 12);
    autoClick += 1;
    update();
  } else {
    alert("You don't have enough cookies for that!")
  }
}
function buyFactory() {
  if (cookieCount >= ((factories + 1) * 12)) {
    cookieCount -= ((factories+1) * 12);
    factories += 1;
    update();
  } else {
    alert("You don't have enough cookies for that!")
  }
}
function upgradeMultiplier() {
  if (cookieCount >= ((multiplier + 1) * 100)) {
    cookieCount -= ((multiplier+1) * 100);
    multiplier += 1;
    update();
  } else {
    alert("You don't have enough cookies for that!")
  }
}
function dataWipe() {
  localStorage.setItem('cookiecount', 0);
  localStorage.setItem('autoclick', 0);
  localStorage.setItem('factory', 0);
  localStorage.setItem('multiplier', 1);
  localStorage.setItem('prestige', 0);
  localStorage.setItem('prestigeCost', 1000000);
  localStorage.setItem('prestMultiplier', 1);
  localStorage.setItem('clickPower', 1);
}
function reset() {
  dataWipe();
  cookieCount = 0;
  autoClick = 0;
  factories = 0;
  multiplier = 1;
  prestige = 0;
  prestCost = 1000000;
  prestMultiplier = 1;
  clickPowerMultiplier = 1;
  document.getElementById('text').value = cookieCount;
}
function rebirth() {
  if (cookieCount >= prestCost) {
    dataWipe();
    alert('Restarted!');
    update();
    prestige += 1;
    cookieCount = 0;
    autoClick = 0;
    factories = 0;
    multiplier *= 2;
    prestCost *= 2;
    prestMultiplier *= 2;
    clickPowerMultiplier *= 2;
  }
}
