const inventoryList = document.getElementById('inventoryList');
        const totalItemsSpan = document.getElementById('totalItems');
        let totalItems = 0;

        inventoryList.addEventListener('click', function(event) {
            const button = event.target;
            if (button.classList.contains('increment') || button.classList.contains('decrement')) {
                const li = button.closest('li');
                const amountSpan = li.querySelector('.amount');
                let amount = parseInt(amountSpan.textContent);

                if (button.classList.contains('increment')) {
                    amount++;
                    totalItems++;
                } else if (button.classList.contains('decrement') && amount > 0) {
                    amount--;
                    totalItems--;
                }

                amountSpan.textContent = amount;
                totalItemsSpan.textContent = totalItems;
            }
        });
