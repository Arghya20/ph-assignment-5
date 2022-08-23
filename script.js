//Common function ============
function getValueByElementId(id) {
  const getId = document.getElementById(id);
  const getIdValue = getId.value;
  const getIdValueInt = parseInt(getIdValue);
  return getIdValueInt;
}
// Empty Array ===========
const playerAdd = [];

function display(player) {
  const PlayerList = document.getElementById("player-list");
  PlayerList.innerText = "";

  for (let i = 0; i < player.length; i++) {
    let liName = playerAdd[i].playerName;
    const li = document.createElement("li");
    li.innerHTML = `
    <li> ${i + 1 + " &nbsp; " + liName}</li>
    `;

    PlayerList.appendChild(li);
  }
}

function addToSelected(deta) {
  const playerName = deta.parentNode.children[0].innerText;
  const errMsg = document.getElementById("error-msg");

  const playerObj = {
    playerName: playerName,
  };

  playerAdd.push(playerObj);
  console.log(playerAdd);
  if (playerAdd.length > 5) {
    errMsg.innerText = "* You Selected 5 players";
    playerAdd.pop();
    return;
  }

  // Check Length ==========
  display(playerAdd);
  deta.disabled = true;
  if ((deta.disabled = true)) {
    deta.style.background = "grey";
    deta.style.cursor = "not-allowed";
  }
}

// BudGet Section ===========
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayerValueInt = getValueByElementId("per-player");

  if (perPlayerValueInt <= 0 || isNaN(perPlayerValueInt)) {
    alert("Enter a Number");
    return;
  }

  const playerExpanses = perPlayerValueInt * playerAdd.length;
  const playerExpansesDisplay = document.getElementById("palyer-expenses");
  playerExpansesDisplay.innerText = playerExpanses;
});

document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const preViusTotal = document.getElementById("palyer-expenses");
    const preViusTotalText = preViusTotal.innerText;
    const preViusTotalInt = parseInt(preViusTotalText);

    const managerAmount = getValueByElementId("manager");
    const coachAmount = getValueByElementId("coach");

    const totalAmount =
      preViusTotalInt + coachAmount + managerAmount;

    const TotalExpenses = document.getElementById("total-expenses");
    TotalExpenses.innerText = totalAmount;
  });