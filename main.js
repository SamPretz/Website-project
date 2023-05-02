//program title

//event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let total = 0;
  let quest1 = document.getElementById("q1").value.toLowerCase();
  let quest2 = document.getElementById("q2").value.toLowerCase();
  let quest3 = document.getElementById("q3").value.toLowerCase();
  let quest4 = document.getElementById("q4").value.toLowerCase();

  //process
  if (quest1 === "the beatles") {
    total = total + 1;
    document.getElementById("ans1").innerHTML = "Correct, Good Job!";
    document.getElementById("ans1").style.color = "green";
  } else {
    document.getElementById("ans1").innerHTML =
      "Wrong, Go back and read the About page again to get a better score";
    document.getElementById("ans1").style.color = "red";
  }

  if (quest2 === "jazz and blues" || quest2 === "blues and jazz") {
    total = total + 1;
    document.getElementById("ans2").innerHTML = "Correct, Good Job!";
    document.getElementById("ans2").style.color = "green";
  } else {
    document.getElementById("ans2").innerHTML =
      "Wrong, Go back and read the About page again to get a better score";
    document.getElementById("ans2").style.color = "red";
  }

  if (quest3 === "the 80's" || quest3 === "the eighties" || quest3 === "80s") {
    total = total + 1;
    document.getElementById("ans3").innerHTML = "Correct, Good Job!";
    document.getElementById("ans3").style.color = "green";
  } else {
    document.getElementById("ans3").innerHTML =
      "Wrong, Go back and read the About page again to get a better score";
    document.getElementById("ans3").style.color = "red";
  }

  if (
    quest4 === "towards the end of the 60's" ||
    quest4 === "towards the end of the sixties" ||
    quest4 === "60s"
  ) {
    total = total + 1;
    document.getElementById("ans4").innerHTML = "Correct, Good Job!";
    document.getElementById("ans4").style.color = "green";
  } else {
    document.getElementById("ans4").innerHTML =
      "Wrong, Go back and read the About page again to get a better score";
    document.getElementById("ans4").style.color = "red";
  }

  //output
  let percentTotal = (total / 4) * 100;
  document.getElementById("output1").innerHTML = `${total}/4`;
  document.getElementById("output2").innerHTML = `(${percentTotal}% Correct)`;
  if (total <= 2) {
    document.getElementById("advice").innerHTML =
      "Please go back and re-read the About page and do the quiz again";
  } else {
    document.getElementById("advice").innerHTML = "Congradulations!";
  }
}
