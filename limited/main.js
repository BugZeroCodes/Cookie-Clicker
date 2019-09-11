function update() {
  document.getElementById('text').value = bossHealth;

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  $('#cookiesPerSecond').html((autoClick * multiplier) + (factories * 5 * multiplier) + ' hits per second')
  $('#cookies').html(cookieCount);
  if (bossHealth <= 0) {
    alert("Hurray! You've beat the boss!");
    var playAgain = confirm("Would you like to play again?(You will be asked twice.)");
    if (playAgain) {
      document.location.reload();
    } else {
      location.replace('../../Cookie clicker/main/select.html')
    }
  }
}
var cookieCount = 0;
var autoClick = 1;
var factories = 1;
var multiplier = 1;
var bossHealth = 1000;
function timer() {
  bossHealth -= autoClick * multiplier;
  bossHealth -= factories * 5 * multiplier;
  update();
}
setInterval(timer, 500);
setInterval(add, 0);
function damage() {
  bossHealth -= 1;
  update();
}
function add() {
  cookieCount += 1;
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
