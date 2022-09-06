window.onload = () => {
    window.scroll(0, 0);
    document.body.classList.remove('no-transition');
}

const debounce = (func) => {
    let frame;
    return (...args) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            func(...args);
        });
    };
};

const storeScroll = () => document.documentElement.dataset.scroll = window.scrollY;

document.addEventListener('scroll', debounce(storeScroll));

storeScroll();

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

typewriter(document.getElementsByClassName('section__typed-text')[0], `hi, I'm Jasmine Tai`)
    .then(result => {
        document.getElementsByClassName('section__typed-text')[0].classList.remove('section__typed-text--idle');
        return typewriter(document.getElementsByClassName('section__typed-text')[1], 'programmer, student, constant learner');
    })
    .then(result => {
        document.getElementsByClassName('section__typed-text')[1].classList.remove('section__typed-text--idle');
        return typewriter(document.getElementsByClassName('section__typed-text')[2], 'welcome to my site! :)');
    })
    .catch(e => console.error('Oh, no:', e));