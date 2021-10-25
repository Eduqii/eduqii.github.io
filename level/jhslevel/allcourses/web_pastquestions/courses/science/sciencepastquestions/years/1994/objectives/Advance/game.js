const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
	{
		question: 'Which of the following substances can exist in all the three states of matter at 0°C?',
choice1: 'Petrol',
choice2: 'Palmoil',
choice3: 'Milk',
choice4: 'Alcohol',
choice5: 'Water',
answer: 5,
},
{
question: 'Pluto is the darkest planet because it',
choice1: 'is larger than the sun',
choice2: 'is the largest planet',
choice3: 'is beyond the reach of the sun’s rays',
choice4: 'is smaller than the sun',
choice5: 'falls in the penumbra region of an eclipse',
answer: 3,
},
{
question: 'In reproduction, the embryo can be referred to as',
choice1: 'an ovary',
choice2: 'a fertile egg',
choice3: 'a fertilized egg',
choice4: 'a placenta',
choice5: 'a mature ovum',
answer: 3,
},
{
question: 'Which of the following statements about second class levers is true?',
choice1: 'Thepivotis between theeffort and the load ',
choice2: 'The load is between the effort and the pivot ',
choice3: 'Thereis no pivot',
choice4: 'Theload is on thepivot',
choice5: 'The effort is between the pivot and the load',
answer: 2,
},
{
question: 'Which of the following is not a communicable disease?',
choice1: 'small pox',
choice2: 'chicken pox',
choice3: 'influenza',
choice4: 'pneumonia',
choice5: 'Tuberculosis',
answer: 5,
},
{
question: 'When bread is chewed for a long time, it tastes sweeter because it',
choice1: 'is made from sugarand flour',
choice2: 'is digested into simplesugar',
choice3: 'mixes with salivawhich is alkaline',
choice4: 'is broken into smaller pieces',
choice5: 'contains yeast which is sweet',
answer: 2,
},
{
question: 'Which of the following gases is not an air pollutant?',
choice1: 'cigarette fumes ',
choice2: 'carbon dioxide ',
choice3: 'sulphur dioxide ',
choice4: 'exhaust fumes',
choice5: 'carbon monoxide',
answer: 2,
},
{
question: 'Dissolved mineral salts from the soil enter the plant by the process of',
choice1: 'phototropism ',
choice2: 'transpiration ',
choice3: 'diffusion',
choice4: 'osmosis',
choice5: 'ingestion',
answer: 3,
},
{
question: 'Which of the following organs is the center of the Central Nervous System?',
choice1: 'Kidney',
choice2: 'Liver ',
choice3: 'Heart ',
choice4: 'Brain ',
choice5: 'Lung',
answer: 4,
},
{
question: 'Soil fertility can be conserved by all the following methods except',
choice1: 'mulching',
choice2: 'afforestation ',
choice3: 'deforestation ',
choice4: 'crop rotation',
choice5: 'green manuring',
answer: 3,
},
{
question: 'Which of the following insects is an agent of pollination?',
choice1: 'Mosquito ',
choice2: 'Housefly ',
choice3: 'Bee',
choice4: 'Ant',
choice5: 'Cockroach',
answer: 3,
},
{
question: 'During the dry season most trees shed their leaves to',
choice1: 'protect the tree',
choice2: 'avoid being pulled down by strong winds',
choice3: 'conserve water and nutrients',
choice4: 'discourage animals from eating the leaves',
choice5: 'reduce the loss of carbon dioxide',
answer: 3,
},
{
question: 'The chemical formula for sodium chloride',
choice1: 'Na2Cl ',
choice2: 'NaCl ',
choice3: 'Sn2Cl ',
choice4: 'NaCl2',
choice5: 'SnCl2',
answer: 2,
},
{
question: 'Which of  the following is the cleanest source of drinking water?',
choice1: 'Lake',
choice2: 'Stagnant water',
choice3: 'River',
choice4: 'Deep well',
choice5: 'Surface well',
answer: 4,
},
{question: '15. The edible part of the mango fruit is called',
choice1: 'endocarp',
choice2: 'drupe',
choice3: 'fibre',
choice4: 'mesocarp',
choice5: 'epicarp',
answer: 4,
},
{
question: 'Which of the following is not a characteristic of all living organisms',
choice1: 'Respiration',
choice2: 'Reproduction ',
choice3: 'Photosynthesis ',
choice4: 'Feeding',
choice5: 'Excretion',
answer: 3,
},
{
question: 'Which of the following conditions in a simple machine will make working difficult? When',
choice1: 'The load distance is equal to the effort distance',
choice2: 'The effort distance is twice the load distance',
choice3: 'The effort distance is three times the load distance',
choice4: 'Small effort moves through a longer distance',
choice5: 'The load distance is greater than effort distance',
answer: 5,
},
{
question: 'A dam for generating power is constructed across a river. What type of energy is possessed by the water behind the dam?',
choice1: 'Kinetic energy',
choice2: 'Potential energy',
choice3: 'Electrical energy',
choice4: 'Heat energy',
choice5: 'Light energy',
answer: 2, 
},
{
question: 'Which of the following is a function of proproots? They',
choice1: 'Store starch in the swollen branch roots',
choice2: 'Take in air for respiration',
choice3: 'Hold the plant more firmly in the soil',
choice4: 'Develop into storage roots',
choice5: 'Develop into fibrous roots',
answer: 3,
},
{
question: 'Which of the following living organisms is not a reptile?',
choice1: 'Lizard ',
choice2: 'Tortoise ',
choice3: 'Frog',
choice4: 'Snake',
choice5: 'Crocodile',
answer: 3, 
},
{
question: 'The following are steps involved in how nutrients in decaying organic matter finally get to man.\n' +
'I. Themineral in themgo into the soil &nbsp; II. Mangoes to eat theplantfood &nbsp; III. Theydissolve in soil water' +
'&nbsp; IV. They are used up by plants during photosynthesis \n' + 
'Which of the following arrangements represents the correct order in whichthe processes occur?',
choice1: 'I, II, III andIV',
choice2: 'I, III, IV and II ',
choice3: 'IV, II, III and I ',
choice4: 'II, III, I and IV ',
choice5: 'III, IV, I and II',
answer: 2,
},
{
question: 'Which ofthe following is the energy possessed by an object placed on a table?',
choice1: 'Kinetic energy',
choice2: 'Electrical energy ',
choice3: 'Potential energy ',
choice4: 'Sound energy',
choice5: 'Heat energy',
answer: 3,
},
{
question: 'The change in the shape of the moon is caused by the',
choice1: 'clouds covering the moon surface',
choice2: 'earth revolving around the sun',
choice3: 'moon revolving around the earth ',
choice4: 'sun revolving around the moon ',
choice5: 'earth rotating on its axis',
answer: 3,
},
{
question: 'The most sensitive region of the eye to light rays is the',
choice1: 'retina ',
choice2: 'pupil ',
choice3: 'cornea ',
choice4: 'iris',
choice5: 'lens',
answer: 1,
},
{
question: 'Digestion is a process by which food is',
choice1: 'transported in soluble form within the body of animals',
choice2: 'broken down into tiny pieces in the mouth',
choice3: 'moved through the alimentary canal',
choice4: 'broken down to produceenergy, waterand carbondioxide',
choice5: 'broken down into forms which can be easily absorbed',
answer: 5,
},
{
question: 'Which of the following processes is not a physical change',
choice1: 'Dissolution',
choice2: 'Melting',
choice3: 'Boiling',
choice4: 'Evaporation',
choice5: 'Burning',
answer: 5,
},
{
question: 'Which of the following is used to measure the potential difference across a resistor in an electrical circuit?',
choice1: 'A galvanometer',
choice2: 'A rheostat',
choice3: 'A meterbridge',
choice4: 'A voltmeter',
choice5: 'An ammeter',
answer: 4,
},
{
question: 'There are thick forests in some parts of the world because the climate there is',
choice1: 'Warm and dry ',
choice2: 'Cool and dry ',
choice3: 'Hot and dry',
choice4: 'Cool and wet',
choice5: 'Hot and wet',
answer: 5,
},
{
question: 'Which of the following practices encourages soil erosion?',
choice1: 'Planting cover crops',
choice2: 'Mulching',
choice3: 'Contour ridging',
choice4: 'Crop rotation',
choice5: 'Ploughing along the slope',
answer: 5,
},
{
question: 'A car battery produces electrical energy from',
choice1: 'Chemical energy',
choice2: 'Sound energy ',
choice3: 'Kinetic energy ',
choice4: 'Heat energy',
choice5: 'otential energy',
answer: 1,
},
{
question: 'Which of the following substances is not found in the excretory products of man?',
choice1: 'Ammonium salt',
choice2: 'Common salt',
choice3: 'Glucose',
choice4: 'Water',
choice5: 'Carbondioxide',
answer: 3,
},
{
question: 'Which of the following processes can be used to obtain local gin from palm wine?',
choice1: 'Evaporation ',
choice2: 'Condensation ',
choice3: 'Distillation',
choice4: 'Filtration',
choice5: 'Sublimation',
answer: 3,
},
{
question: 'The linear sequence of living things feeding and being fed on is called',
choice1: 'linear feeding',
choice2: 'food chain',
choice3: 'photosynthesis',
choice4: 'nutrition',
choice5: 'transpiration',
answer: 2,
},
{
question: 'Which of  the following organisms causes malaria?',
choice1: 'Tsetsefly',
choice2: 'Fungi',
choice3: 'Virus',
choice4: 'Plasmodium',
choice5: 'Bacteria',
answer: 4,
},
{
question: 'The male and female sex cells of a plant are respectively in the',
choice1: 'Sperm and egg',
choice2: 'Pollen grain and ovary',
choice3: 'Sperm and ovary ',
choice4: 'Ovary and ovule ',
choice5: 'Embryo and seed',
answer: 2,
},
{
question: 'Which of the following preventive measures is not used in the control of tuberculosis?',
choice1: 'Isolatingthe patient',
choice2: 'Spitting carelessly in the environment',
choice3: 'Keeping separate cutlery, plates, cups for the patient',
choice4: 'Vaccinating young babies with BCG vaccine',
choice5: 'Spitting into a container partly filled with disinfectant',
answer: 2,
},
{
question: 'During an eclipse of the sun, the region that has total darkness is known as',
choice1: 'mbra',
choice2: 'orbit',
choice3: 'penumbra',
choice4: 'shadow',
choice5: 'satellite',
answer: 1,
},
{
question: 'Animals that live in grasslands include',
choice1: 'lions and giraffes',
choice2: 'monkeysand tigers',
choice3: 'antelopes andhares',
choice4: 'woodpeckers and baboons',
choice5: 'elephants and leopards',
answer: 3,
},
{
question: 'Which of the following are products of respiration?',
choice1: 'Glucose and oxygen',
choice2: 'Waste food, energyand carbondioxide',
choice3: 'Energy, carbon dioxide and water',
choice4: 'Energy, oxygenand water',
choice5: 'Carbondioxide and oxygen',
answer: 3,
},
{
question: 'Which of the following living things hide during the sunny days in order to conserve water in its body?',
choice1: 'Rat',
choice2: 'Lizard',
choice3: 'Butterfly',
choice4: 'Toad',
choice5: 'Bat',
answer: 4, 
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 40

startGame = () => {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html') 
	}

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` 

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	//The next line keep track of the question we are on
	currentQuestion = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionsIndex, 1)

	acceptingAnswers = true	
}

choices.forEach(choice => {
	choice.addEventListener('click', e => {
		if(!acceptingAnswers) return

		acceptingAnswers = false
	    const selectedChoice = e.target
	    const selectedAnswer = selectedChoice.dataset['number']
	     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
	    if (classToApply === 'correct') {
	    	incrementScore(SCORE_POINTS)
	    }

	    selectedChoice.parentElement.classList.add(classToApply)

	    setTimeout(() => {
	    	selectedChoice.parentElement.classList.remove(classToApply)
	    	getNewQuestion()

	    }, 1000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
