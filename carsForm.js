function calculateTotal() {
  var carsForm = document.getElementById("cars");
  var total = 0;
  if (carsForm.GTManual.checked)
    total = total + 17790;

  if (carsForm.GTAutomatic.checked)
    total = total + 18590;

  if (carsForm.GTSManual.checked)
    total = total + 22455;

  if (carsForm.GTSSportshift.checked)
    total = total + 23155;

  if (carsForm.Option1.checked)
    total = total + 1235;

  if (carsForm.Option2.checked)
    total = total + 3354;

  if (carsForm.stereoSystem.checked)
    total = total + 550;

  if (carsForm.securitySystem.checked)
    total = total + 399;

  if (carsForm.dimMirror.checked)
    total = total + 295;

  carsForm.total.value = total;
}

document.getElementById("totalButton").addEventListener("click", calculateTotal, false);

function changeCar(){
    document.getElementById("photo").src = document.getElementById("cars").carColor.value + ".jpg"; 
  }

  for(select of document.getElementsByTagName("select")) {
  select.addEventListener("change",changeCar,false);
}

