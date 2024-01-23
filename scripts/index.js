// Add scroll rubberbanding effect when using the navbar

window.onload = () => {
    window.scroll(0, 0);
    document.body.classList.remove('no-transition');
}

const debounce = (func) => {
    let frame;
    return (...args) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => func(...args));
    };
};

const storeScroll = () => document.documentElement.dataset.scroll = window.scrollY;

document.addEventListener('scroll', debounce(storeScroll));

document.querySelectorAll('.section__card-wrapper').forEach(element => element.addEventListener('click', () => {
    element.classList.contains('section__card-wrapper--flipped')
        ? element.classList.remove('section__card-wrapper--flipped')
        : element.classList.add('section__card-wrapper--flipped');
    document.querySelectorAll('.section__card-wrapper--flipped').forEach(el => {
        if (el != element) {
            el.classList.remove('section__card-wrapper--flipped');
        }
    });
}));

storeScroll();

// Add a typing effect to the "home" screen!

const typewriter = (el, phrase) => {
    el.classList.add('section__typed-text--idle');
    return new Promise((resolve, reject) => {
        let counter = 1;
        setTimeout(() => {
            el.classList.remove('section__typed-text--idle');
            const typeLetter = setInterval(() => {
                if (counter === phrase.length+1) {
                    clearInterval(typeLetter);
                    el.textContent = phrase;
                    el.classList.add('section__typed-text--idle');
                    setTimeout(() => resolve(), 1500);
                } else {
                    el.textContent = phrase.slice(0, counter) + '|';
                    counter++;
                }
            }, 50);
        }, 1000);
    }).catch(e => reject(e));
};

typewriter(document.getElementsByClassName('section__typed-text')[0], `hi, I'm Jasmine Tai!`)
    .then(result => {
        document.getElementsByClassName('section__typed-text')[0].classList.remove('section__typed-text--idle');
        return typewriter(document.getElementsByClassName('section__typed-text')[1], 'student, developer, continual learner');
    })
    .then(result => {
        document.getElementsByClassName('section__typed-text')[1].classList.remove('section__typed-text--idle');
        return typewriter(document.getElementsByClassName('section__typed-text')[2], 'glad to have you here :)');
    })
    .catch(e => console.error('Oh, no:', e));
