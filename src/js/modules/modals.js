const modals = (state) => {


    function bindModal (triggerSelector, modalSelector, closeSelector, clickToCloseOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal'),
            scorll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (modal.classList.contains('popup_calc_profile')) {
                    if (!state.form || !state.width || !state.height) {
                        return;
                    }
                }

                if (modal.classList.contains('popup_calc_end')) {
                    if (!state.type || !state.profile) {
                        return;
                    }
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scorll}px`;
            });
        });

        close.addEventListener('click', (e) => { 
            
               windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            
        });

        modal.addEventListener('click', (e) => {
            const  target = e.target;
            if(target === modal && clickToCloseOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;            }
        });

    }

    function showModalByTime (selector, time) {

        setTimeout(function () {

            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);

    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidht = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidht;

    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);

};

export default modals;