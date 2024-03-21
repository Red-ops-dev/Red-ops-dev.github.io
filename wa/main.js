const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 thousand degrees outside, so :insertx: went for a stroll. When they teleported to :inserty:, they screamed at the top of their lungs, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and gravity was doing it's magic."

let insertX = ["Squwilliam","The Priestess","Luke Skywalker"];

let insertY = ["the castle","Atlantis","your mom's house"];

let insertZ = ["viciously exploded","leaped into the sky","turned into a slug and crawled away"];









randomize.addEventListener('click', result);


function result() {
    console.log("test")

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll("Bob", name);
  
    }
  
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone' ;
        const temperature = Math.round((94 - 32) * 5/9) + ' centigrade';
        
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
  
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
}


