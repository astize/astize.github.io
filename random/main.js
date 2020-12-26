const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'The :namesA: and the :namesB: :bravo: :alpha: :delta: :charlie:.';
let storyTextB = 'The :namesA: and the :namesB: :bravoB: :alphaB: :deltaB: :charlieB: :echoB:';
let storyTextC = ':namesC: :stupidA: :namesD: :stupidB: :stupidC: :stupidD: because :stupidE:'

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
	"Cadet",
];
let bravo = [
	"discussed the consequences of",
	"discussed the implications of",
	"mentioned the importance of",
	"talked about",
	"considered the",
];
let alpha = [
	"safety regarding",
	"job safety regarding",
	"correct procedures surrounding",
	"proper methods concerning",
];
let delta = [
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
let charlie = [
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
	"without notifying someone beforehand",
];
let bravoB = [
	"were about to start",
	"were going to start",
	"were in the process of",
	"had just about started",
	"were working on",
	"had started",
	"were preparing to begin",
	"had filed a permit to begin working on",
	"were seriously considering",
	"were having a discussion about",
];
let alphaB = [
	"rebuilding the lube oil purifier",
	"replacing a light fitting in the engine space",
	"replacing a faulty sight glass on one of the winches",
	"cleaning up a minor oil spill in the forward engine room",
	"putting up a new safety-concious poster",
	"grabbing a coffee",
	"punishing the cadet",
	"grabbing lunch",
	"correctly isolating equipment",
];
let deltaB = [
	"when one of them noticed",
	"when they encountered",
	"when they both noticed",
	"when they remembered someone had told them about",
	"when I noticed",
	"when they were met with",
];
let charlieB = [
	"a trip hazard",
	"a sleepy co-worker",
	"an intoxicated co-worker",
	"a small amount of smoke",
	"a small chemical spill",
	"a strange noise",
	"a funny smell",
	"a loud bang",
	"someone calling out for help",
	"a terrible noise",
	"a terrible smell",
	"some poorly placed equipment",
	"some improperly stowed equipment",
];
let echoB = [
	"so they immediately reported it",
	"and they reported it",
	"and they rectified the problem",
	"and they fixed the problem",
	"and they resolved the issue",
	"and they removed the source of the problem",
	"and it was reported and fixed immediately",
	"and it was rectified and reported properly",
	"and had to stop immediately",
	"and had to stop",
];

let namesC = [
	"Angry Gavin",
	"Neddy",
	"Chris, now Retired",
	"That Shortass Cadet",
	"Bald Electrician #2: Moustache Edition",
	"Ricky",
	"The Resident NAZI, Carsten",
	"Budgie with no pants on",
	"A much younger version of Mike",
	"Ian with slightly more teeth",
];
let namesD = [
	"Hungry Gavin",
	"Baldwinian",
	"Chris, soon-to-be Retired",
	"Levi with a pillow case on his head",
	"Steve with yet another captive Asian",
	"Richard, but handsome",
	"Carsten's Big Ass",
	"Ian, but he can actually speak English this time",
	"Michael Harding's Hard Michael",
	"Budgie's libido",
];
let stupidA = [
	"was being harassed by",
	"was sharing a cabin with",
	"was having interpersonal relations with",
	"was talking about how he'd love to spend more 'time' with",
	"started throwing a really weak punch at",
	"was grabbing a screwdriver and throwing it at",
	"was having a romantic dinner with",
];
let stupidB = [
	"when all of a sudden",
	"when suddenly",
	"when out of nowhere",
	"when, by chance",
	"when randomly",
	"and then in an instant",
];
let stupidC = [
	"the CSM walked in",
	"the Chief walked in",
	"the Captain walked in",
	"the entire ship exploded",
	"eighty or so bikers interrupted them",
	"the cabin attendant joined in",
	"the entire head office wandered in",
];
let stupidD = [
	"which wasn't an issue",
	"and they continued anyway",
	"and that didn't stop them",
	"and it didn't even slow them down",
	"and they stopped for a moment, but continued",
	"and they stopped",
	"and they had to stop",
	"and that was it, they stopped",
];
let stupidE = [
	"they were both fired",
	"they were both dismissed",
	"nobody cares, honestly",
	"they knew they couldn't do anything",
	"it was such a beautiful sight",
	"it was starting to make a mess",
	"they knew the cadet would clean it up",
	"they knew the REAL chief would get involved",
]
	

randomize.addEventListener('click', result);

function result() {
	
  let newStory = storyText;
  let newStoryB = storyTextB;
  let newStoryC = storyTextC;
  let aItem = randomValueFromArray(namesA);
  let bItem = randomValueFromArray(namesB);
  let cItem = randomValueFromArray(alpha);
  let dItem = randomValueFromArray(bravo);
  let eItem = randomValueFromArray(charlie);
  let fItem = randomValueFromArray(delta);
  let gItem = randomValueFromArray(alphaB);
  let hItem = randomValueFromArray(bravoB);
  let iItem = randomValueFromArray(charlieB);
  let jItem = randomValueFromArray(deltaB);
  let kItem = randomValueFromArray(echoB);
  let stupidNamesA = randomValueFromArray(namesC);
  let stupidNamesB = randomValueFromArray(namesD);
  let stupidAItem = randomValueFromArray(stupidA);
  let stupidBItem = randomValueFromArray(stupidB);
  let stupidCItem = randomValueFromArray(stupidC);
  let stupidDItem = randomValueFromArray(stupidD);
  let stupidEItem = randomValueFromArray(stupidE);
  

  newStory = newStory.replace(':namesA:',aItem);
  newStory = newStory.replace(':namesB:',bItem);
  newStory = newStory.replace(':alpha:',cItem);
  newStory = newStory.replace(':bravo:',dItem);
  newStory = newStory.replace(':charlie:',eItem);
  newStory = newStory.replace(':delta:',fItem);
  
  newStoryB = newStoryB.replace(':namesA:',aItem);
  newStoryB = newStoryB.replace(':namesB:',bItem);
  newStoryB = newStoryB.replace(':alphaB:',gItem);
  newStoryB = newStoryB.replace(':bravoB:',hItem);
  newStoryB = newStoryB.replace(':charlieB:',iItem);
  newStoryB = newStoryB.replace(':deltaB:',jItem);
  newStoryB = newStoryB.replace(':echoB:',kItem);
  
  newStoryC = newStoryC.replace(':namesC:',stupidNamesA);
  newStoryC = newStoryC.replace(':namesD:',stupidNamesB);
  newStoryC = newStoryC.replace(':stupidA:',stupidAItem);
  newStoryC = newStoryC.replace(':stupidB:',stupidBItem);
  newStoryC = newStoryC.replace(':stupidC:',stupidCItem);
  newStoryC = newStoryC.replace(':stupidD:',stupidDItem);
  newStoryC = newStoryC.replace(':stupidE:',stupidEItem);


  if(document.getElementById("font1").checked) {
	  document.querySelector('p').style.fontFamily = "Just Me Again Down Here,arial";
  } else if(document.getElementById("font2").checked) {
	  document.querySelector('p').style.fontFamily = "Long Cang,arial";
  } else if(document.getElementById("font3").checked) {
	  document.querySelector('p').style.fontFamily = "Indie Flower,arial";
  } else if(document.getElementById("font4").checked) {
	  document.querySelector('p').style.fontFamily = "Gochi Hand,arial";
  }
 
  if(document.getElementById("story1").checked) {
  story.textContent = newStory;
  story.style.visibility = 'visible';
  } else if(document.getElementById("story2").checked) {
	story.textContent = newStoryB;
	story.style.visibility = 'visible';
} else if(document.getElementById("story3").checked) {
	  story.textContent = newStoryC;
  story.style.visibility = 'visible';
}
}