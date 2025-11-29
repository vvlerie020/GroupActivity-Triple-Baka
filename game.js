const hatchInput = document.getElementById('hatchInput');
const hatchBtn = document.getElementById('hatchBtn');
const hatchResult = document.getElementById('hatchResult');

hatchBtn.addEventListener('click', () => {
    const choice = hatchInput.value;
    const validNames = ['Thaloryn the Azure','Maelryth Red-Shell','Sylvrax the Silver','Vyr’thalen Green-Shell','Vhalgor the Black'];
    if (!validNames.includes(choice)) {
        hatchResult.textContent = 'Please choose a valid dragon from the list.';
        hatchResult.style.color = 'crimson';
        return;
    }

            // Buy a dragon egg and hatch 
           
         
           if (choice === 'Thaloryn the Azure') {
            alert('You bought a Thaloryn the Azure egg!');
            hatchResult.textContent = 'Congratulations — you hatched Dreamfyre!';
            hatchResult.style.color = 'white';
                
            } else if (choice === 'Maelryth Red-Shell') {
            alert('You bought a Maelryth Red-Shell egg!');
            hatchResult.textContent = 'Congratulations — you hatched Meleys';
            hatchResult.style.color = 'white';
            
            } else if (choice === 'Sylvrax the Silver') {
            alert('You bought a Sylvrax the Silver egg!');
            hatchResult.textContent = 'Congratulations — you hatched Meraxes';
            hatchResult.style.color = 'white';
            
            } else if (choice === 'Vyr’thalen Green-Shell') {
            alert('You bought a Vyr’thalen Green-Shell egg!');
            hatchResult.textContent = 'Congratulations — you hatched Vhagar';
            hatchResult.style.color = 'white';
            
            } else if (choice === 'Vhalgor the Black') {
            alert('You bought a Vhalgor the Black egg!');
            hatchResult.textContent = 'Congratulations — you hatched Balerion';
            hatchResult.style.color = 'white';
            }


           

     
        });