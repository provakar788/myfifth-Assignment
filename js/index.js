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
                                <p class="text-sm opacity-96">Date : ${new Date().toLocaleDateString()}</p>
                                <p class="text-sm opacity-96">Time : ${new Date().toLocaleTimeString()}</p>
                            </div>
                            <p class="font-bold">${noakhaliDonateInput} Taka is Donated for Flood at Noakhali, Bangladesh.</p>`;

        donationHistoryItem.insertBefore(historyItem, donationHistoryItem.firstChild);
});

// Feni donation card functionality
document.getElementById('second-btn')
    .addEventListener('click', function(){
        // e.preventDefault();
        const feniDonateInput = parseFloat(getInputValueById('feni-donate-input'));
        const donateFeniValue = parseFloat(setTextValueById('donate-feni-value'));
        const donationMinus = parseFloat(donationValueMinus('donation-minus'));

        // error message
        const modal1 = document.getElementById('my_modal_1');
        const modal2 = document.getElementById('my_modal_2');

        if(isNaN(feniDonateInput) || feniDonateInput <= 0 || typeof feniDonateInput === null){
            modal2.showModal();
            return;
        }else if(typeof feniDonateInput === 'number'){
            modal1.showModal();
        }

        // feni donation value update
        const feniTotalValue = feniDonateInput + donateFeniValue;
        document.getElementById('donate-feni-value').innerText = feniTotalValue;

        // feni value minus
        const remainingValue = donationMinus - feniDonateInput;
        document.getElementById('donation-minus').innerText = remainingValue; 
        
        // input clear
        document.getElementById('feni-donate-input').value = '';
        
        // history page
        const donationHistoryItem = document.getElementById('history-div');
        const historyItem = document.createElement('div');
        historyItem.classList.add('lg:w-7/12','w-full','border','rounded-xl','p-4','bg-white','text-center','space-y-4','mx-auto') ;
        historyItem.innerHTML = `
                            <div class="flex gap-5 justify-center">
                                <p class="text-sm opacity-96">Date : ${new Date().toLocaleDateString()}</p>
                                <p class="text-sm opacity-96">Time : ${new Date().toLocaleTimeString()}</p>
                            </div>
                            <p class="font-bold">${feniDonateInput} Taka is Donated for Flood Relief in Feni, Bangladesh.</p>`;


        donationHistoryItem.insertBefore(historyItem, donationHistoryItem.firstChild);
});

// Quota Movement donation card functionality
document.getElementById('third-btn')
    .addEventListener('click', function(){
        // e.preventDefault();
        const injuredDonateInput = parseFloat(getInputValueById('injured-donate-input'));
        const donateInjuredValue = parseFloat(setTextValueById('donate-injured-value'));
        const donationMinus = parseFloat(donationValueMinus('donation-minus'));
        
        // error message
        const modal1 = document.getElementById('my_modal_1');
        const modal2 = document.getElementById('my_modal_2');

        if(isNaN(injuredDonateInput) || injuredDonateInput <= 0 || typeof injuredDonateInput === null){
            modal2.showModal();
            return;
        }else if(typeof injuredDonateInput === 'number'){
            modal1.showModal();
        }

        // injured donation value update
        const injuredTotalValue = injuredDonateInput + donateInjuredValue;
        document.getElementById('donate-injured-value').innerText = injuredTotalValue;

        // donation value minus
        const remainingValue = donationMinus - injuredDonateInput;
        document.getElementById('donation-minus').innerText = remainingValue;  

        // input clear
        document.getElementById('injured-donate-input').value = '';
        
        // history page
        const donationHistoryItem = document.getElementById('history-div');
        const historyItem = document.createElement('div');
        historyItem.classList.add('lg:w-7/12','w-full','border','rounded-xl','p-4','bg-white','text-center','space-y-4','mx-auto') ;                            
        historyItem.innerHTML = `
                            <div class="flex gap-5 justify-center">
                                <p class="text-sm opacity-96">Date : ${new Date().toLocaleDateString()}</p>
                                <p class="text-sm opacity-96">Time : ${new Date().toLocaleTimeString()}</p>
                            </div>
                            <p class="font-bold">${injuredDonateInput} Taka is Donated for Aid for injured in the Quota Movement, Bangladesh.</p>`;

        donationHistoryItem.insertBefore(historyItem, donationHistoryItem.firstChild);
});

// history button transparent
document.getElementById('history-btn')
    .addEventListener('click', function(){
        
        document.getElementById('history-container').classList.remove('hidden');
        document.getElementById('content-div').classList.add('hidden');
        document.getElementById('history-btn').classList.remove('bg-base-200');
        document.getElementById('history-btn').classList.add('bg-lightGreen');
        document.getElementById('donation-btn').classList.remove('bg-lightGreen','btn');
        document.getElementById('donation-btn').classList.add('border','rounded-lg','py-3','bg-base-200');
});

// donation button transparent
document.getElementById('donation-btn')
    .addEventListener('click', function(){
        
        document.getElementById('history-container').classList.add('hidden');
        document.getElementById('content-div').classList.remove('hidden');
        document.getElementById('history-btn').classList.add('bg-base-200');
        document.getElementById('history-btn').classList.remove('bg-lightGreen');
        document.getElementById('donation-btn').classList.add('bg-lightGreen','rounded-lg');
        document.getElementById('donation-btn').classList.remove('border');
});

// enter blog page
const blogBtn = document.getElementById('blog-btn')
    .addEventListener('click', function(){
        window.location.href = './blog.html';
});