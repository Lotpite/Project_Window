const images = () => {

    const workSection = document.querySelector('.works'),
        imagePopup = document.createElement('div'),
        bigImage = document.createElement('img');

    imagePopup.classList.add('popup');
    workSection.appendChild(imagePopup);

    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignItems = 'center';
    imagePopup.style.display = 'none';

    imagePopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);

        }

        if (target && target.classList.contains('popup')) {
            imagePopup.style.display = 'none';
            document.budy.style.overflow = '';
        }
    });
};

export default images;