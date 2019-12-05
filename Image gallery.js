const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let step = 1; step <= 5; step++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + step + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick  = function changeContent()
    {
        displayedImage.setAttribute('src',newImage.getAttribute('src'));
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function changeClass() {
    const nameClass = btn.getAttribute('class');
    switch (nameClass) {
        case 'dark':
            setValues('light', 'Lighten', "rgba(0,0,0,0.5)");
            break;
        case 'light':
            setValues('dark', 'Darken', "rgba(0,0,0,0)");
            break;
        default:
            break;
    }
}
function setValues(classAttr, text, color)
{
    btn.setAttribute('class', classAttr);
    btn.textContent = text;
    overlay.style.backgroundColor = color;
}
