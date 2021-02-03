import checkNumInputs from './checkNumInputs';

const forms = (state) => {

    const message = {
        success: 'Спасибо. Мы скоро с вами свяжемся',
        loading: 'Подождите. Идет обработка данных',
        failure: 'Извините. Что-то сломалось'
    };

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal');

    checkNumInputs('input[name="user_phone"');


    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url   , {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postData('assets/server.php', formData)
            .then(result => {
                console.log(result);
                statusMessage.textContent = message.success;
            })
            .catch(() => { statusMessage.textContent = message.failure; })
            .finally(() => {
                clearInputs();
                for (let key in state) {
                    delete state[key];
                }
                setTimeout(() => {
                    statusMessage.remove();

                    windows.forEach(item => {
                        item.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                    
                }, 3000);
                
            });

        });
    });


};

export default forms;