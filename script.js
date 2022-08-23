const playerAdd = [];

function display(player) {
  const PlayerList = document.getElementById("player-list");
  PlayerList.innerText = "";

  for (let i = 0; i < player.length; i++) {
    let Pname = playerAdd[i].playerName;
    const li = document.createElement("li");
    li.innerHTML = `
    <li> ${i + 1 + " &nbsp; " + Pname}</li>
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
  const perPlayer = document.getElementById("per-player");
  const perPlayerValue = perPlayer.value;
  const perPlayerValueInt = parseInt(perPlayerValue);

  const playerExpanses = perPlayerValueInt * playerAdd.length;
  const playerExpansesDisplay = document.getElementById("palyer-expenses");
  playerExpansesDisplay.innerText = playerExpanses;

  if (perPlayerValueInt <= 0 || isNaN(perPlayerValueInt))
    return alert("Enter a Number");
});

document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const preViusTotal = document.getElementById("palyer-expenses");
    const preViusTotalText = preViusTotal.innerText;
    const preViusTotalInt = parseInt(preViusTotalText);

    const managerAmount = document.getElementById("manager");
    const managerAmountValue = managerAmount.value;
    const managerAmountValueInt = parseInt(managerAmountValue);

    const coachAmount = document.getElementById("coach");
    const coachAmountValue = coachAmount.value;
    const coachAmountValueInt = parseInt(coachAmountValue);

    const totalAmount =
      preViusTotalInt + coachAmountValueInt + managerAmountValueInt;

    const TotalExpenses = document.getElementById("total-expenses");
    TotalExpenses.innerText = totalAmount;
  });