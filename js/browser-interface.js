// var DinoText = require('../js/function-name.js').DinoText;
// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("form.generateIpsum").submit(function(event) {

    event.preventDefault();

    var inputtedParagraphs = $("input#numParagraphs").val();
    var inputtedNumber = $("input#numWords").val();

    $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + inputtedParagraphs + '&words=' + inputtedNumber).then(function(response) {
      $(".result").append(response);

    });
  });
});


// /* Front-end User interface (jquery) code goes in this file */




// var newDinoText = new DinoText(inputtedParagraphs, inputtedWords);
