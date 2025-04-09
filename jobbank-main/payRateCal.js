function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let payPerHour = 0;
  switch (yearOfStudy) {
    case 1: payPerHour = 55; break;
    case 2: payPerHour = 65; break;
    case 3: payPerHour = 75; break;
    case 4: payPerHour = 85; break;
    default: payPerHour = 0;
  }

  if (isNaN(workDays) || workDays < 1 || workDays > 6) {
    alert("Please enter a valid number of work days (1–6).");
    return;
  }

  const hoursPerDay = 6;
  const total = workDays * hoursPerDay * payPerHour;

  alert("Your weekly pay rate is " + total + " THB");
}

function validateForm() {
  payRateCalculate();
  return false; // 
}