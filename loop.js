const NumInput = document.getElementById('NumInput');
const countBtn = document.getElementById('countBtn');
const countResult = document.getElementById('countResult');

countBtn.addEventListener('click', () => {
    const num = Number(NumInput.value);   
    if (isNaN(num) || num < 1 || num > 1000) {
        countResult.innerHTML = 'Please enter a valid number between 1 and 100.';
        countResult.style.color = 'crimson';
        return;
    }
    let output = '';
    for (let i = 1; i <= num; i++) {
       output += `counting: ${i}\n`;
    }   
    countResult.style.color = 'green'
    countResult.textContent = output;
});