function checkAge() {                                                           //Create checkAge function
  var ageMsg = document.getElementById('age');
    if (this.value < 18) {                                                      // conditional statements to show different
      ageMsg.textContent = 'Must be 17 to apply';                               // events based on the age enter by user
    } else if (this.value > 29) {
      ageMsg.textContent = 'Never too late to get your degree, I guess..';
    } else {
      ageMsg.textContent = '';
    }
}

function checkGPA() {                                                           // create checkGPA function
  var gpa = document.getElementById('gpa')
    if (this.value < 3.9) {                                                     // conditional statements to determine what
      gpa.textContent = 'sorry, your gpa is too low to apply'                   // will be printed based on the GPA value entered
    } else if (this.value >= 3.9) {
      gpa.textContent = 'Adequate gpa'
    }
}

function appResult() {                                                          // create appResult function
  alert("Youve been rejected, sorry");                                          // no conditions because harvard will reject you regardless
}
var elUsername = document.getElementById('gpaInput');                           // get input
elUsername.addEventListener('blur', checkGPA, false);                           // calls checkGPA when focus is lost

var elUsername = document.getElementById('ageInput');                           // get ageInput
elUsername.addEventListener('blur', checkAge, false);                           // calls checkAge when focus is lost

document.getElementById("apply").addEventListener("click", appResult);          //adds the EventListener to the "apply" button
