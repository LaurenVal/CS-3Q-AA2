var lt = prompt("Enter first subject LT score.");
var pt = prompt("Enter first subject PT score.");
var project = prompt("Enter first subject project score.");
var subj1 = tentativeGrade(lt, pt, project);

lt = prompt("Enter second subject LT score.");
pt = prompt("Enter second subject PT score.");
project = prompt("Enter second subject project score.");
var subj2 = tentativeGrade(lt, pt, project);

lt = prompt("Enter third subject LT score.");
pt = prompt("Enter third subject PT score.");
project = prompt("Enter third subject project score.");
var subj3 = tentativeGrade(lt, pt, project);

var previous = prompt("Enter first subject previous score.");
var subj1Final = calculateFinal(previous, subj1);
previous = prompt("Enter second subject previous score.");
var subj2Final = calculateFinal(previous, subj2);
previous = prompt("Enter third subject previous score.");
var subj3Final = calculateFinal(previous, subj3);

var finalGrade = average(subj1Final, subj2Final, subj3Final);
finalGrade = calculateGWA(finalGrade);

document.write("Your GWA for this quarter is ");
document.write(finalGrade);

function calculateGWA (finalGrade) {
  if (96 <= finalGrade <= 100)
    return "1.00";
  else if (90 <= finalGrade < 96)
    return "1.25";
  else if (84 <= finalGrade < 90)
    return "1.50";
  else if (78 <= finalGrade < 84)
    return "1.75";
  else if (72 <= finalGrade < 78)
    return "2.00";
  else if (66 <= finalGrade < 71)
    return "2.25"
  else if (60 <= finalGrade < 66)
    return "2.50";
  else if (55 <= finalGrade < 60)
    return "2.75";
  else if (50 <= finalGrade < 55)
    return "3.00";
  else if (40 <= finalGrade < 50)
    return "4.00";
  else if (finalGrade < 40)
    return "5.00";
  else
    return "Undefined, please enter valid numbers."
}

function calculateFinal (previous, tenta) {
  tenta = 2/3*tenta;
  previous = 1/3*previous;
  return tenta+previous;
}

function average (subj1, subj2, subj3) {
  var total = subj1+subj2+subj3;
  return total/3;
}

function tentativeGrade (lt, pt, proj) {
  lt = lt*0.20;
  pt = pt*0.30;
  proj = proj*0.50;
  return lt+pt+proj;
}