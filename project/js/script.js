$(document).ready(function () {
  "use strict";


  $('button').on('click', function () {
    var btnValue = $(this).attr('value'),
      inputText = $('#input').val(),
      inputLastSymbol = inputText[inputText.length - 1],
      numbers = inputText.match(/\d+\.?\d*/g),
      signs = inputText.match(/[-+\*/]/g);


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

    if (btnValue == '=') {
      var result = 0,
        num1 = getNumFromString(numbers[0]),
        num2;
      console.log(numbers);
      console.log(signs);
      for (var i = 0; i < (numbers.length - 1); i++) {
        num2 = getNumFromString(numbers[i + 1]);
        result = calculateTwoNums(num1, num2, signs[i]);
        num1 = result;
      }
      $('#input').val(result);
    }


  });

  function getNumFromString(numberStr) {
    if (numberStr.search(/\./) == -1) {
      return parseInt(numberStr);
    }
    return parseFloat(numberStr);
  }

  function calculateTwoNums(num1, num2, sign) {
    switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }
  }


});