const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'The :namesA: and the :namesB: :verbs: :setup: :payoff: :regards:.';

let namesA = [
	"Chief Engineer",
	"Electrician",
	"First Engineer",
	"First Mate",
];
let namesB = [
	"Second Mate",
	"Second Engineer",
	"ETO",
	"Cadet"
];
let verbs = [
	"discussed the consequences of",
	"discussed the implications of",
	"mentioned the importance of",
	"talked about",
	"considered the",
];
let setup = [
	"safety regarding",
	"job safety regarding",
	"correct procedures surrounding",
	"proper methods concerning"
];
let payoff = [
	"welding",
	"working",
	"performing work",
	"completing a job",
	"preparing to work",
	"being engaged in work",
	"walking on the vessel",
	"showing up to work",
	"starting work",
	"entering an enclosed space",
	"working near a hazard",
];
let regards = [
	"while intoxicated",
	"while distracted",
	"with hazards present",
	"without the correct PPE",
	"without careful preparation",
	"while fatigued",
	"while tired",
	"without checking for hazards",
	"without checking for dangers",
	"without proper assistance",
	"without prior training",
	"without notifying someone beforehand"
];

randomize.addEventListener('click', result);

function result() {
	
  let newStory = storyText;
  let xItem = randomValueFromArray(namesA);
  let cItem = randomValueFromArray(namesB);
  let yItem = randomValueFromArray(verbs);
  let zItem = randomValueFromArray(setup);
  let aItem = randomValueFromArray(payoff);
  let bItem = randomValueFromArray(regards);

  newStory = newStory.replace(':namesA:',xItem);
  newStory = newStory.replace(':namesB:',cItem);
  newStory = newStory.replace(':setup:',zItem);
  newStory = newStory.replace(':verbs:',yItem);
  newStory = newStory.replace(':regards:',bItem);
  newStory = newStory.replace(':payoff:',aItem);


  if(document.getElementById("font1").checked) {
	  document.querySelector('p').style.fontFamily = "Just Me Again Down Here,arial";
  } else if(document.getElementById("font2").checked) {
	  document.querySelector('p').style.fontFamily = "Long Cang,arial";
  } else if(document.getElementById("font3").checked) {
	  document.querySelector('p').style.fontFamily = "Indie Flower,arial";
  } else if(document.getElementById("font4").checked) {
	  document.querySelector('p').style.fontFamily = "Gochi Hand,arial";
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}