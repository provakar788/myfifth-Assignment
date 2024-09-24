// Noakhali donation card functionality 
document.getElementById('first-btn')
    .addEventListener('click', function(){
        // e.preventDefault();
        const noakhaliDonateInput = parseFloat(getInputValueById('noakhali-donate-input'));
        const donateNoakhaliValue = parseFloat(setTextValueById('donate-noakhali-value'));
        const donationMinus = parseFloat(donationValueMinus('donation-minus'));

        // error message
        const modal1 = document.getElementById('my_modal_1');
        const modal2 = document.getElementById('my_modal_2');

        if(isNaN(noakhaliDonateInput) || noakhaliDonateInput <= 0 || typeof noakhaliDonateInput === null){
            modal2.showModal();
            return;
        }else if(typeof noakhaliDonateInput === 'number'){ 
            modal1.showModal();
        }

        // noakhali donation value update
        const noakhaliTotalValue = noakhaliDonateInput + donateNoakhaliValue;
        document.getElementById('donate-noakhali-value').innerText = noakhaliTotalValue;

        // donation value minus
        const remainingValue = donationMinus - noakhaliDonateInput;
        document.getElementById('donation-minus').innerText = remainingValue;  
        
        // input clear
        document.getElementById('noakhali-donate-input').value = '';

        // history page
        const donationHistoryItem = document.getElementById('history-div');
        const historyItem = document.createElement('div');
        historyItem.classList.add('lg:w-7/12','w-full','border','rounded-xl','p-4','bg-white','text-center','space-y-4','mx-auto') ;
        historyItem.innerHTML = `
                            <div class="flex gap-5 justify-center">
                                <p class="text-sm opacity-75">Date : ${new Date().toLocaleDateString()}</p>
                                <p class="text-sm opacity-75">Time : ${new Date().toLocaleTimeString()}</p>
                            </div>
                            <p class="font-bold">${noakhaliDonateInput} Taka is Donated for Flood at Noakhali, Bangladesh.</p>`;

        donationHistoryItem.insertBefore(historyItem, donationHistoryItem.firstChild);
});