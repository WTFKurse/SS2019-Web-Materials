document.querySelector('#auswertung').onclick = function () {
  var vorname = document.querySelector('#vorname').value;
  var gericht = document.querySelector('#gericht').value;

  var drinkCheckboxes = document.querySelectorAll('input[name="drink"]');
  var drinkCheckboxesNum = drinkCheckboxes.length;
  var checkitem = "";

  for(var i = 0; i < drinkCheckboxesNum; i++) {
    if(drinkCheckboxes[i].checked === true) {
      checkitem += drinkCheckboxes[i].value;
    }
  }
  
  alert("Nutzer wählte: " + vorname + " " + gericht + " " + checkitem);
}
