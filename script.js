console.log("Всем привет!!! :)");
        console.error("Сообщение об ошибке");
        console.warn("Сообщение-предупреждение");

        function notReadyAlert() {
            alert('Sorry, not ready yet!\nИзвините, еще не готово!');
            return false;
        }

        function search() {
            let name = document.getElementById('search').value;
            let productNumber = null;
            if (name=='Игрушка Хаги Ваги') {
                productNumber = 0;
                if (name=='Игрушка Хаги Ваги Киси Миси') {
                    productNumber = 1;
                    if (name=='Игрушка Саблезубый Тигр Норт') {
                        productNumber = 2;
                    } else {
                        alert ('Товар не найден');
                    }
                    console.log('Товар номер:', productNumber);
                }
            }
            let cards = document.getElementsByClassName('card');
            let card = cards[productNumber];
            card.style.border = '1px dashed red';
            card.style.backgroundColor = 'yellow';

            setTimeout(function() {
                card.style.border = 'none';
                card.style.backgroundColor = '';
            }, 2000);
        }

        function loaded() {
            let searchbox = document.getElementById('search');
            searchbox.addEventListener('keydown', function (key) {
                if(key.key=='Enter')
                search();
            });
        }