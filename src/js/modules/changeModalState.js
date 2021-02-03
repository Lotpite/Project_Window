const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowHeight = document.querySelectorAll('#height'),
        windowWidth = document.querySelectorAll('#width'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    function bindActionToElem(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i+1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }

                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElem(windowForm, 'click', 'form');
    bindActionToElem(windowHeight, 'input', 'height');
    bindActionToElem(windowWidth, 'input', 'width');
    bindActionToElem(windowType, 'change', 'type');
    bindActionToElem(windowProfile, 'change', 'profile');

};

export default changeModalState;