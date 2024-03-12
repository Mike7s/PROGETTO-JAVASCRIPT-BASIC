import { htmlElements } from "./elements.js";

export function createDomElement() {
    htmlElements.forEach(element => {
        const newElement = document.createElement(element.type);
        newElement.textContent = element.text;
        newElement.classList.add(element.class);
        document.querySelector(element.position).appendChild(newElement)
    });
}

 export function makeCongratulation (score) {
    const level  = document.querySelector('.level');
    switch(score) {
        case 10 :
             level.innerText = 'Congratulation!';
        break;
        case 20 :
            level.innerText = 'Great Job!';
        break;
        case 30 :
            level.innerText = "Are you Messi ?";
            break;
        case 40 :
            level.innerText = 'THE GOAT!';
            break;
        default : level.innerText = '';
    }
}

