window.onload = function(){
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let temp_count_plus = 0
    let temp_plus = ''
    // окно вывода результата
    outputElement = document.getElementById("result")
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
    if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
    a += digit
    }
    outputElement.innerHTML = a
    } else {
    if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
    b += digit
    outputElement.innerHTML = b
    }
    }
    }
    // установка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
    button.onclick = function() {
    const digitValue = button.innerHTML
    onDigitButtonClicked(digitValue)
    }
    });
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() {
    if (a === '') return
    selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() {
    if (a === '') return
    selectedOperation = '+'
    temp_count_plus += 1;
    if (temp_count_plus > 1){
        outputElement.innerHTML = 0
        temp_plus = (+temp_plus) + (+a) + (+b)
        a = ''
        b = ''
    }
    }
    document.getElementById("btn_op_minus").onclick = function() {
    if (a === '') return
    selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() {
    if (a === '') return
    selectedOperation = '/'
    }
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() {
    a = ''
    b = ''
    selectedOperation = ''
    expressionResult = ''
    outputElement.innerHTML = 0
    temp_count_plus = 0
    temp_plus = ''
    }
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() {
    if (a === '' || b === '' || !selectedOperation)
    return
    switch(selectedOperation) {
    case 'x':
    expressionResult = (+a) * (+b)
    break;
    case '+':
    expressionResult = (+a) + (+b)
    break;
    case '-':
    expressionResult = (+a) - (+b)
    break;
    case '/':
    expressionResult = (+a) / (+b)
    break;
    }
    a = expressionResult.toString()
    b = ''
    selectedOperation = null
    outputElement.innerHTML = a
    }
    };