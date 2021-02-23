const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const date = document.querySelector(".date");


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyTextD = ':namesA: and :namesB: :startWork: on the :equipment:. A :conversation:. :talkedAbout::pointA::pointB::pointC::pointD:';
let storyText = 'The :namesA: and the :namesB: :bravo: :alpha: :delta: :charlie:.';
let storyTextB = 'The :namesA: and the :namesB: :bravoB: :alphaB: :deltaB: :charlieB: :echoB:';
let storyTextC = ':namesC: :stupidA: :namesD: :stupidB: :stupidC: :stupidD: because :stupidE:'



let startWork = [
	"were about to start work",
	"were going to start work",
	"had just about begun working",
	"were just about to begin work",
	"were preparing to start work",
	"were about to begin routine maintenance",
	"were preparing for maintenance",
];
let equipment = [
	"lube oil purifier",
	"AC compressor",
	"oily water separator",
	"emergency lighting circuit",
	"oil filters",
	"reefer sockets",
	"fire dampers",
	"domestic hot water",
	"bain marie",
	"engine room fans",
	"chlorifier",
	"DG5 turbo",
	"forward fuel module",
	"lathe",
	"drill press",
	"intering valve",
	"starboard stabilizer",
	"crew mess dishwasher",
	"plus lounge urinal",
	"Client 1",
];
let conversation = [
	"toolbox talk was held",
	"small conversation occurred",
	"quick meeting happened",
	"small talk happened",
	"quick chat occurred",
	"safety conversation occurred",
	"pre-work meeting was held",
	"safe work conversation was held",
	"discussion about the job happened",
	"quick chat about the work happened",
];
let talkedAbout = [
	"Key points discussed were",
	"Some of the things mentioned were",
	"A few of the things mentioned were",
	"Some of the things discussed were",
	"Some really good points were made, including",
	"Some great discussed went on about",
	"Excellent points were made regarding",
];
let pointA = [
	"",
	"",
	"",
	"",
	": fire hazards",
	": ignition sources nearby",
	": risk of a fire starting",
	": danger of electrocution",
	": risk of electrocution",
	": possibility of a shock hazard",
	": dangers of working from heights",
];
let pointB = [
	" ",
	" ",
	" ",
	", potential tripping hazards",
	", a couple tripping hazards nearby",
	", dangerous trip hazards in the area",
	", sharp, protruding edges",
	", potential risk of cutting injuries",
	", the chance that someone could cut themselves",
];
let pointC = [
	" ",
	" ",
	" ",
	", a burning hazard",
	", someone could burn themselves",
	", danger of burning their hands",
	", using the right tool for the work",
	", making sure to use the right tool",
	", careful selection of tools used",
	", cleaning up properly afterwards",
];
let pointD = [
	" ",
	" ",
	" ",
	", slip and fall hazards",
	", mislabelled equipment",
	", improperly secured gear",
	", working in a rough sea state",
	", danger of working on a ladder",
	", the importance of correct labelling",
	", sharp edges",
]
let namesA = [
	"Chief Engineer",
	"Electrician",
	"First Engineer",
	"Maintenance Electrician",
	"Maintenance Engineer",
];
let namesB = [
	"Third Engineer",
	"Contractor",
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
	"Steve (but we all wish it was Richard instead)",
	"Rickhard (but we all wish it was Ewen instead)",
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
function randomDate(date1, date2){
	
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if(date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString('en-NZ',{day: "numeric", month: "short"});  
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString('en-NZ');
    }
}

function result() {
  let dateSet = "A6<br>" + randomDate('Feb 22 2021', 'Feb 10 2021');
  let newStory = storyText;
  let newStoryB = storyTextB;
  let newStoryC = storyTextC;
  let newStoryD = storyTextD;
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
  let storyAitemA = randomValueFromArray(startWork);
  let storyAitemB = randomValueFromArray(equipment);
  let storyAitemC = randomValueFromArray(conversation);
  let storyAitemD = randomValueFromArray(talkedAbout);
  let storyAitemE = randomValueFromArray(pointA);
  let storyAitemF = randomValueFromArray(pointB);
  let storyAitemG = randomValueFromArray(pointC);
  let storyAitemH = randomValueFromArray(pointD);

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
  
  newStoryD = newStoryD.replace(':namesA:',aItem);
  newStoryD = newStoryD.replace(':namesB:',bItem);
  newStoryD = newStoryD.replace(':startWork:',storyAitemA);
  newStoryD = newStoryD.replace(':equipment:',storyAitemB);
  newStoryD = newStoryD.replace(':conversation:',storyAitemC);
  newStoryD = newStoryD.replace(':talkedAbout:',storyAitemD);
  newStoryD = newStoryD.replace(':pointA:',storyAitemE);
  newStoryD = newStoryD.replace(':pointB:',storyAitemF);
  newStoryD = newStoryD.replace(':pointC:',storyAitemG);
  newStoryD = newStoryD.replace(':pointD:',storyAitemH);
  
if(document.getElementById("font1").checked) {
	  document.querySelector('span').style.fontFamily = "Beth Ellen,arial";
	  document.querySelector('span').style.fontSize = "14px";
	  document.querySelector('p').style.fontFamily = "Beth Ellen,arial";
	  document.querySelector('p').style.fontSize = "14px";
} else if(document.getElementById("font2").checked) {
	  document.querySelector('span').style.fontFamily = "Dawning of a New Day,arial";
	  document.querySelector('span').style.fontSize = "20px";
	  document.querySelector('p').style.fontFamily = "Dawning of a New Day,arial";
	  document.querySelector('p').style.fontSize = "20px";
} else if(document.getElementById("font3").checked) {
	  document.querySelector('span').style.fontFamily = "Over the Rainbow,arial";
	  document.querySelector('span').style.fontSize = "15px";
	  document.querySelector('p').style.fontFamily = "Over the Rainbow,arial";
	  document.querySelector('p').style.fontSize = "15px";
} else if(document.getElementById("font4").checked) {
	  document.querySelector('span').style.fontFamily = "Liu Jian Mao Cao,arial";
	  document.querySelector('span').style.fontSize = "14px";
	  document.querySelector('p').style.fontFamily = "Liu Jian Mao Cao,arial";
	  document.querySelector('p').style.fontSize = "14px";
}
 
if(document.getElementById("story1").checked) {
	date.innerHTML = dateSet;
	story.textContent = newStory;
	story.style.visibility = 'visible';
} else if(document.getElementById("story2").checked) {
	date.innerHTML = dateSet;
	story.textContent = newStoryB;
	story.style.visibility = 'visible';
} else if(document.getElementById("story3").checked) {
	date.innerHTML = dateSet;
	story.textContent = newStoryC;
	story.style.visibility = 'visible';
} else if(document.getElementById("story0").checked) {
	date.innerHTML = dateSet;
	story.textContent = newStoryD;
	story.style.visibility = 'visible';
}
}