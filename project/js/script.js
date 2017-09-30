$(document).ready(function () {
  "use strict";

  var btnValue,
    inputText,
    inputLastSymbol,
    numbers;


  $('button').on('click', function () {
    btnValue        = $(this).attr('value');
    inputText       = $('#input').val();
    inputLastSymbol = inputText[inputText.length - 1];
    numbers         = inputText.match(/\d+\.?\d*/g);

    if (!isNaN(parseInt(btnValue))) {
      $('#input').val(inputText + btnValue);
    }

    if (btnValue == 'CA') {
      $('#input').val('');
    }

    if (btnValue == 'C') {
      $('#input').val(inputText.slice(0, -1));
    }

    if (btnValue == '/' || btnValue == '*' ||
      btnValue == '-' || btnValue == '+') {

      if (inputLastSymbol == '/' || inputLastSymbol == '*' ||
        inputLastSymbol == '-' || inputLastSymbol == '+') {

        $('#input').val(inputText.slice(0, -1) + btnValue);
      } else {
        $('#input').val(inputText + btnValue);
      }

    }

    if (btnValue == '.' && !isNaN(parseInt(inputLastSymbol)) &&
      numbers.slice(-1)[0].search(/\./) == -1) {
      $('#input').val(inputText + btnValue);
    }


  });


});