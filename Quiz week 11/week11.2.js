const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admit');
const refused = document.querySelector('.refuse');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

people.forEach(person => {
    if (person === 'Phil' || person === 'Lola') {
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
});

admitted.textContent = admitted.textContent.slice(0, -2) + '.';
refused.textContent = refused.textContent.slice(0, -2) + '.';

console.log("test")