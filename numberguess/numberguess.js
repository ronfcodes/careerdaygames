$(document).ready(function () {
  //Disable start over button
  $('#btnReset').attr("disabled","disabled");
  //variable to hold random number
  let randonNumber = randomInteger(1, 25);
  //hide wrong anser div
  $("#wrongAnswerDiv").css("display", "none");
  //hide correct answer div
  $("#correctAnswerDiv").css("display", "none");
  //variable for audio element
  var audioElement = document.createElement("audio");
  //event to handle submit button click
  $("#btnGuessNumber").click(function () {
    //Disable button
    this.disabled = true;
    //Enable start over button
    $('#btnReset').removeAttr('disabled');
    //Get value entered by user
    let userGuess = $("#txtInputNumber").val();
    //if user input equals random number
    if (userGuess == randonNumber) {
      //unhide correct answer div
      $("#correctAnswerDiv").css("display", "block");
      //write correct answer
      $("#correctAnswer").text(randonNumber);
      //Play cheers
      audioElement.setAttribute("src", "short-crowd-cheer-6713.mp3");
      audioElement.setAttribute("autoplay", "autoplay");
      audioElement.addEventListener(
        "load",
        function () {
          audioElement.play();
        },
        true
      );
    } else {
      //unhide wrong answer div
      $("#wrongAnswerDiv").css("display", "block");
      //display wrong answer div
      $("#wrongAnswer").text(randonNumber);
      console.log(randonNumber);
      //Play sorry horns
      audioElement.setAttribute("src", "Price-is-right-losing-horn.mp3");
      audioElement.setAttribute("autoplay", "autoplay");
      audioElement.addEventListener(
        "load",
        function () {
          audioElement.play();
        },
        true
      );
    }
  });
  //Refresh page
  $("#btnReset").click(function () {
    window.location.reload();
  });
  //Function to calculate random number
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
