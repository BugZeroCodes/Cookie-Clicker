function update() {
  document.getElementById('text').value = bossHealth;

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('AutoClickCost').innerHTML = ((autoClick+1) * 12) + " Cookies";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";
  document.getElementById('FactoryCost').innerHTML = ((factories+1) * 15) + " Cookies";

  document.getElementById('AutoClickAmount').innerHTML = "You Own " + autoClick + " Auto Clickers";

  document.getElementById('FactoryAmount').innerHTML = "You Own " + factories + " Factories";

  document.getElementById('MinerAmount').innerHTML = "You Own " + miners + " Miners";
  document.getElementById('MinerCost').innerHTML = ((miners+1) * 15) + " Coins";

  document.getElementById('MultiplierAmount').innerHTML = "Attack Multiplier is at: " + attackMultiplier + "x";
  document.getElementById('MultiplierCost').innerHTML = ((attackMultiplier+1) * 100) + " Coins";

  $('#cookiesPerSecond').html((autoClick * multiplier) + (factories * 5 * attackMultiplier) + ' hits per second')
  $('#cookies').html(cookieCount);
  if (bossHealth <= 0) {
    document.location.reload();
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
var multiplier = 1; // We'll call this minerMultiplier later.
var bossHealth = 10006;
var miners = 0;
var attackMultiplier = 1; // If we set this to 0, the existing attackers can't do anything.
function timer() {
  bossHealth -= autoClick * attackMultiplier;
  bossHealth -= factories * 5 * attackMultiplier;
  cookieCount += autoClick + factories * attackMultiplier;
  update();
}
setInterval(timer, 750);
setInterval(add, 750);
function damage() {
  bossHealth -= 1;
  update();
}
function add() {
  if (miners !== 0) {
    cookieCount += 1 * miners * 2;
  } else {
    cookieCount += 1;
  }
  update();
};
function buyAutoClick() {
  if (cookieCount >= ((autoClick + 1) * 12)) {
    cookieCount -= ((autoClick+1) * 12);
    autoClick += 1;
    update();
  }
}
function buyMiner() {
  if (cookieCount >= ((miners + 1) * 12)) {
    cookieCount -= ((miners+1) * 12);
    miners += 1;
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
function buyAttackMultiplier() {
  if (cookieCount >= ((attackMultiplier + 1) * 40)) {
    cookieCount -= ((attackMultiplier+1) * 40);
    attackMultiplier += 1;
    update();
  }
}
