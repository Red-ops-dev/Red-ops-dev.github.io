const imageFilenames = ['../../img/crystal1.jpg', '../../img/crystal2.jpg', '../../img/crystal3.jpg','../../img/crystal4.jpg' ,'../../img/crystal5.jpg' ];

const imageAlts = {
    '../../img/crystal1.jpg': 'pinkish purple crystals',
    '../../img/crystal2.jpg': 'Light pink crystal',
    '../../img/crystal3.jpg': 'Close up of a clear crystal with a red backdrop',
    '../../img/crystal4.jpg': 'Metallic crystals in a beige rock',
    '../../img/crystal5.jpg': 'Stunning red crystals',
    
};
  

const thumbBar = document.querySelector('.thumb-bar');

imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename);
    newImage.setAttribute('alt', imageAlts[filename]);
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener('click', () => {
      const displayedImage = document.querySelector('.displayed-img');
      displayedImage.src = newImage.src;
      displayedImage.alt = newImage.alt;
    });
});
  
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
  
btn.addEventListener('click', () => {
    const buttonClass = btn.getAttribute('class');
    if(btn.getAttribute('class') === "Dark") {
      btn.setAttribute('class', "Light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      btn.setAttribute("class", "Dark");
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
});
  