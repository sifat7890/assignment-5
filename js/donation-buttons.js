
// noakhali donation 
document.getElementById('donate-btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const noakhaliMoneyInput = document.getElementById('input-amount-noakhali').value;
    const noakhaliTotalMoney = getTextFieldValueById('noakhali-balance');
    const availableMoney = getTextFieldValueById('available-amount');


   if (isNaN(noakhaliMoneyInput) ||  noakhaliMoneyInput < 0 || /[a-zA-Z]/.test(noakhaliMoneyInput) || noakhaliMoneyInput === "") {

        alert('Please enter a valid number');
        return;
    }


    if (noakhaliMoneyInput <= availableMoney) {

        const time = new Date();



        const noakhaliAddMoney = parseFloat(noakhaliMoneyInput);
        const noakhaliNewBalance = noakhaliTotalMoney + noakhaliAddMoney;

        const availableTotalMoney = availableMoney - noakhaliAddMoney;
        document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;
        document.getElementById('available-amount').innerText = availableTotalMoney;


        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border border-gray-300 p-6  rounded-xl">

        <h1 class="text-xl md:text-2xl lg:text-2xl font-medium">${noakhaliAddMoney} Taka is Donated for Flood Relief in Feni,Bangladesh.  <h1/>
        <h3 class="">${time}</h3>

        <div/>
        `
        document.getElementById('history').appendChild(div);

        document.getElementById('my_modal_5').showModal();


    }
    else {
        alert('You dont have enough money');
    }

})

const modal = document.getElementById('my_modal_5');
const closeModalBtn = document.getElementById('closeModalBtn');

closeModalBtn.addEventListener('click', () => {
  modal.close(); // Close the modal without reloading
});


// feni donation 
document.getElementById('donate-btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const feniMoneyInput = document.getElementById('input-amount-feni').value;
    const feniTotalMoney = getTextFieldValueById('feni-balance');
    const availableMoney = getTextFieldValueById('available-amount');


   if (isNaN(feniMoneyInput) ||  feniMoneyInput < 0 || /[a-zA-Z]/.test(feniMoneyInput) || feniMoneyInput === "") {

        alert('Please enter a valid number');
        return;
    }


    if (feniMoneyInput <= availableMoney) {

        const time = new Date();



        const feniAddMoney = parseFloat(feniMoneyInput);
        const feniNewBalance = feniTotalMoney + feniAddMoney;

        const availableTotalMoney = availableMoney - feniAddMoney;
        document.getElementById('feni-balance').innerText = feniNewBalance;
        document.getElementById('available-amount').innerText = availableTotalMoney;


        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border border-gray-300 p-6  rounded-xl">

        <h1 class="text-xl md:text-2xl lg:text-2xl font-medium">${feniAddMoney} Taka is Donated for Flood Relief in Feni,Bangladesh.  <h1/>
        <h3 class="">${time}</h3>

        <div/>
        `
        document.getElementById('history').appendChild(div);
        document.getElementById('my_modal_5').showModal();

    }
    else {
        alert('You dont have enough money');
    }
    

})


// Quota donation 
document.getElementById('donate-btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const quotaMoneyInput = document.getElementById('input-amount-quota').value;
    const quotaTotalMoney = getTextFieldValueById('quota-balance');
    const availableMoney = getTextFieldValueById('available-amount');


   if (isNaN(quotaMoneyInput) ||  quotaMoneyInput < 0 || /[a-zA-Z]/.test(quotaMoneyInput) || quotaMoneyInput === ""){

        alert('Please enter a valid number');
        return;
    }


    if (quotaMoneyInput <= availableMoney) {

        const time = new Date();



        const quotaAddMoney = parseFloat(quotaMoneyInput);
        const quotaNewBalance = quotaTotalMoney + quotaAddMoney;

        const availableTotalMoney = availableMoney - quotaAddMoney;
        document.getElementById('quota-balance').innerText = quotaNewBalance;
        document.getElementById('available-amount').innerText = availableTotalMoney;


        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border border-gray-300 p-6  rounded-xl">

        <h1 class="text-xl md:text-2xl lg:text-2xl font-medium">${quotaAddMoney} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh.  <h1/>
        <h3 class="">${time}</h3>

        <div/>
        `
        document.getElementById('history').appendChild(div);
        document.getElementById('my_modal_5').showModal();

    }
    else {
        alert('You dont have enough money');
    }

})