function getShowButtonById(id) {
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]');

}

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
  
    
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}