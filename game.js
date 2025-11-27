 const hatchInput = document.getElementById('hatchInput');
        const hatchBtn = document.getElementById('hatchBtn');
        const hatchResult = document.getElementById('hatchResult');

        hatchBtn.addEventListener('click', () => {
            const amount = Number(hatchInput.value);
            if (isNaN(amount) || ![50, 100, 150, 200, 250].includes(amount)) {
                hatchResult.textContent = 'Please enter a valid amount: 50, 100, 150, 200, or 250.';
                hatchResult.style.color = 'crimson';
                return;
            }

            // Define probabilities based on amount
            let probabilities;
            if (amount === 50) {
                probabilities = { common: 97, uncommon: 2, rare: 0.5, ultrarare: 0.4, legendary: 0.1 };
            } else if (amount === 100) {
                probabilities = { common: 2, uncommon: 97, rare: 0.5, ultrarare: 0.4, legendary: 0.1 };
            } else if (amount === 150) {
                probabilities = { common: 0, uncommon: 5, rare: 90, ultrarare: 4, legendary: 1 };
            } else if (amount === 200) {
                probabilities = { common: 0, uncommon: 0, rare: 25, ultrarare: 74, legendary: 1 };
            } else if (amount === 250) {
                probabilities = { common: 0, uncommon: 0, rare: 35, ultrarare: 40, legendary: 15 };
            }

            // Generate a random number between 0 and 100
            const rand = Math.random() * 100;
            let cumulative = 0;
            let hatchedPet = '';

            for (const [pet, prob] of Object.entries(probabilities)) {
                cumulative += prob;
                if (rand <= cumulative) {
                    hatchedPet = pet;
                    break;
                }
            }

            // Capitalize the pet name
            const displayPet = hatchedPet.charAt(0).toUpperCase() + hatchedPet.slice(1);

            // Display result
            hatchResult.textContent = `You hatched a ${displayPet} pet!`;
            hatchResult.style.color = 'green';

            // Window alert
            alert(`You hatched a ${displayPet} pet!`);
        });