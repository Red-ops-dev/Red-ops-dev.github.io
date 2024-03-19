const heading = document.querySelector("h1");


const button = document.querySelector("button");
console.log(button)

for (const b in button) {
    b.addEventListener('click', changeText);
}


button.addEventListener('click',changeText);
heading.context('hi');


        
        {/* // const x = 'hello';
        // console.log(x);
        
        // const button = document.querySelector("button");
        // button.addEventListener('click', runFunction);

        // function runFunction() {
        //     console.log("test");
        //     const name = prompt("Please enter a name");
        //     button.textContent = `Player 1 $(name)`;
        // }
 */}
let fontSize= 20
 const button1 = document.querySelector(",button1");
 button1.addEventListener('click',changeText);

 function changeText() {
    alert('test successful')
    fontFamily += 2
    button.style.fontSize = fontSize + 'px';
}

 const button2 = document.getElementById("button2")
 button2.addEventListener('click',changeText)