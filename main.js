var inputInitial = document.getElementById('input-initial-val');
var inputResult = document.getElementById('input-result-val');
var switchBox = document.getElementById('switchy');
var convertBottom = document.getElementById('convert-bottom');
var selectList = document.getElementById('select-list');


var convertibleLengths = {
    versts: 1.067,
    yards: 0.0009144,
    miles: 1.609,
    feet: 0.0003048
}

function convert (event) {
    event.preventDefault();

    var inputInitialValue = +inputInitial.value;
    var selectListValue = selectList.value;

    if (typeof inputInitialValue !== 'number' && inputInitialValue <= 0) {
        inputResult.value = 'Введите корректные данные';
    } else {
        var convertToMeters = switchBox.checked ? 1000 : 1;
        var resultValue = convertibleLengths[selectListValue] * inputInitialValue * convertToMeters;
        inputResult.value = resultValue;
    }

}

convertBottom.onclick = convert;



