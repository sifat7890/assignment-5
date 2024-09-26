function getShowButtonById(id) {
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]');

   

}
function getSectionById(id){
    // hide all section
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
   
    // show the selected id
     document.getElementById(id).classList.remove('hidden');

}



function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}