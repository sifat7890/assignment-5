
// noakhali donation 
document.getElementById('donate-btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const noakhaliAddMoney = getInputFieldValueById('input-amount-noakhali');
    const noakhaliTotalMoney = getTextFieldValueById('noakhali-balance');
    const availableMoney = getTextFieldValueById('available-amount');

    



    if (isNaN(noakhaliAddMoney) || typeof noakhaliAddMoney !== 'number' || noakhaliAddMoney < 0 || /^[a-zA-Z\d]+$/.test(noakhaliAddMoney)) {

        alert('Please enter a valid number');
        return;
    }


    if (noakhaliAddMoney <= availableMoney) {



        const noakhaliNewBalance = noakhaliTotalMoney + noakhaliAddMoney;

        const availableTotalMoney = availableMoney - noakhaliAddMoney;
        document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;
        document.getElementById('available-amount').innerText = availableTotalMoney;


    }
    else {
        alert('You dont have enough money');
    }

})