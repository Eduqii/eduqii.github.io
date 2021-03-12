const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('ressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
	{
		question: 'The S.I. unit for measuring the work done by a force is',

		choice1: 'J.',
		choice2: 'K.',
		choice3: 'N.',
		choice4: 'W.',
		answer: 3,  
},

{
		question: 'The chemical formula of a compound describes the',

		choice1: 'number of molecules in the compound',
		choice2: 'type of bonding in the compound',
		choice3: 'ratio in which the elements are combined',
		choice4: 'state of the compound',
		answer: 3,  
},

{
		question: 'Which of the following life processes is represented by the equation'+'\n' + 'Glucose + oxygen --> carbon dioxide + water + energy' + '\n',
		choice1: 'Digestion',
		choice2: 'Excretion' 
		choice3: 'Photosynthesis',
		choice4: 'Respiration',
		answer: 3,  
},

{
		question: 'Each layer of soil profile is known as',

		choice1: 'horizon',
		choice2: 'litter',
		choice3: 'regolith',
		choice4: 'solum',
		answer: 1,  
},

{
		question: 'When the p-n junction of a transistor is reverse biased',

		choice1: 'current flows from the p-type to the n-type',
		choice2: 'no current flows from the p-type to the n-type',
		choice3: 'conduction of current occurs',
		choice4: 'current flows from the n-type to the p-type',
		answer: 2,  
},

{
		question: ' When a solid-liquid mixture is filtered, the liquid that separates out into the container',

		choice1: 'filtrate',
		choice2: 'residue',
		choice3: 'sediment',
		choice4: 'solution',
		answer: 1,  
},

{
		question: 'Which of the following processes involves the solid state of matter?',

		choice1: 'Boiling',
		choice2: 'Condensation',
		choice3: 'Evaporation',
		choice4: 'Melting',
		answer: 4,  
},

{
		question: 'Which of the followinis most effective in maintaining soil fertility?',

		choice1: 'Crop rotation',		
		choice2: 'Land rotation',
		choice3: 'Mixecrpping',
		choice4: 'Monoculis',
		answer: 1,  
},

{
		question: 'The disease in humans which is associated with insufficient intake of calcium is',

		choice1: 'goitre',
		choice2: 'kwashiorkor',
		choice3: 'rickets',
		choice4: 'scurvy',
		answer: 3,  
},

{		question: 'The arrow in the circuit symbol of either n-p-n or p-n-p transistor is always on the',

		choice1: 'base lead',
		choice2: 'collector lead',
		choice3: 'emitter lead',
		choice4: 'receiver lead',
		answer: 4,  
},

{
		question: 'Which of the following insect pests of crops has piercing and sucking mouthparts?',

		choice1: 'Aphids',
		choice2: 'Grasshoppers',
		choice3: 'Stemborers',
		choice4: 'Termites',
		answer: 1,  
},
{
		question: 'A reflex action involves the',

		choice1: 'brainld muscles',
		choice2: 'brain and nerves',
		choice3: 'spinalod and muscles',
		choice4: 'spinal cord and nerves',
		answer: 4,  
},

{
		question: 'The type of image formed in a plane mirror is always',

		choice1: 'diminished',
		choice2: 'enlarged',
		choice3: 'real',
		choice4: 'virtual',
		answer: 4,  
},

{
		question: 'Which of the following statements about acids are correct?'+'\n' + 
         'I. They turn red litmus paper blue \n' +
        'II. They can be classified as either organic or mineral acids\n' +
        'III. They can be neutralized by bases ',
		choice1: 'I and II only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 3, 
},
{
		question: 'A transistor is said to operate in an active region when',

		choice1: 'one p-n junction is forward biased and the other is reversed biased',
		choice2: 'base-emitter junctions are reversed biased',
		choice3: 'both p-n junctions are reversed biased',
		choice4: 'base-collector junction is forward biased',
		answer: 1,  
},		 

{
		question: 'culosis is spread',

		choice1: 'through eating of contaminated food',
	oice2: 'when an infected person coughs openly into the air',
		choice3: 'through shaking of hands of infected persons',
		choice4: 'through sharing of contaminated syringes',
		answer: 2,  
},

{
		question: 'One function of engine oil in the engine of a tractor is to',

		choice1: 'warm the engine',
		choice2: 'enhance air intake',
		choice3: 'ensure proper mixing of fuel',
		choice4: 'lubricate the engine parts',
		answer: 4,  
},

{
		question: 'Black pod is a disease of',

		choice1: 'cocoa',
		choice2: 'coffee',
		choice3: 'guava',
		choice4: 'mango',
		answer: 1,  
},

{
		question: 'The efficiency of a machine is always less than 100% because part of the energy input is used to',

		choice1: 'stop the machine after working',
		choice2: 'perform useful work on t,he lo',
		choice3: 'overcome friction',
		choice4: 'lift the machine up',
		answer: 3,  
},

{
		question: 'Which of the following electronic components are used to produce oscillator circuits?'+'\n' + 
         'I. Transistor \n' +
        'II. Inductor \n' + 
        'III. Capacitor\n' +
		choice1: 'I and II \n only',
		choice2: 'I and III only',
		choice3: 'II and III only',
		choice4: 'I, II and III',
		answer: 4, 
},

{
		question: 'Which of the following sources of light is natural?',

		choice1: 'Filament bulb',
		choice2: 'Fluorescent tube',
		choice3: 'Glow worm',
		choice4: 'Fire cracker',
		answer: 3,  
},

{
		question: 'Which of the following are carried by the blood?',

		choice1: 'Hormones',
		choice2: 'Urine',
		choice3: 'Oxygen',
		choice 'Carbon dioxide',
		answer: 1,
	},

{
		question: 'The practice of starting new organization in response to identified opportunities is termed',

		choice1: 'agribusiness',
		choice2: 'business enterprise',
		choice3: 'entrepreneurship',
		choice4: 'management',
		answer: 3,  
},

{
		question: 'The sub-atomic particle with zero charge in the nucleus of an atom is called',

		choice1: 'electron',
		choice2: 'ion',
		choice3: 'neutron',
		choice4: 'proton',
		answer: 3,  
},

{
		question: 'Which of the following management practices greatly helps in record keeping?',

		choice1: 'Culling',
		choice2: 'Debeaking',
		choice3: 'Dehorning',
		choice4: 'Identification',
		answer: 4,  
},

{
		question: 'In the pin-hole camera,when the size of the pin-hole is increased, the image formed is',

		choice1: 'blurred',
		choice2: 'erect',
 		choice3: 'magnified',
		choice4 : 'virtual',
		answer: 1,  
},
{
		question: 'In the pin-hole camera, when the size of the pin-hole is increased, the image formed is',

		choice1: 'blurred',
		choice2: 'erect',
		choice3: 'magnified',
		choice4: 'virtual',
		answer: 1,  
},

{
		question: 'Non-reactive metals are preferred in making ornaments and jewellery because they',

		choice1: 'are attractive',
		choice2: 'do not react with atmospheric oxygen',
		choice3: 'do not retain their lustre',
		choice4: 'are corrosive',
		answer: 2,  
},

{
		question: 'Producers in an ecosystem are plants that',

		choice1: 'attract insects',
		choice2: 'feed on other plants',
		choice3: 'manufacture their own food',
		choice4: 'trap insects',
		answer: 3,  
},

{
		question: 'The use of resistant varieties of crop in controlling diseases is described as',

		choice1:'ogical control method',
		choice2: 'chemical control method',
		choice3: 'cultural control method',
		choice4: 'physical control method',
		answer: 1,  
},

{
		question: 'The chemical formula for aluminium oxide is represented as AlxOy. The values of x and y are respectively',

		choice1: '3 and 2',
		choice2: '3 and 1',
		choice3: '1 and 3'
		choice4: '2 and 3'
		answer: 4,  
},

{
		question: 'In electrical circuits, the component that protects appliances against very high currents is the',

		choice1: 'capacitor',
		choice2: 'fuse',
		choice3: 'resistor',
		choice4: 'switch',
		answer: 2,  
},

{
		question: 'One benefit of technology to industrialization is',

		choice1: 'environmental pollution',
		choice2: 'reduction in skilful labour',
		choice3: ,'provisi of machinery',
		choice4: 'increase in cost of production of goods',
		answer: 3,  
},

{
		question: 'Which of the following factors contribute to early parenthood?'+'\n' + 
         'I. Poverty' +
        'II. Illiteracy' +
        'III. Lack of parental care' +
        'IV. Peer pressure',

		choice1: 'I and II only',
		choice2: 'II and III only',
		choice3: 'III and IV only',
		choice4: 'I, II, III and IV',
		answer: 4, 
},

{
		question: 'Which of the following examples of fertilizers improves soil texture?',

		choice1: 'Compost',
		choice2: 'NPK',
		choice3: 'Sulphate of ammonia',
		choice4: 'Urea',
		answer: 1,  
},


{
		question: 'The reaction between hydrochloric acid and sodium hydroxide produces',

		choice1: 'sodium oxide only',
		choice2: 'sodium chloride only',
		choice3: 'sodium oxide and water',
		choice4: 'sodium chloride and water',
		answer: 4,  
},

{
		question: 'In modern electrical wirings the colour code for the live wire is',

		choice1: 'blue',
		choice2: 'brown',
		choice3: 'green',
		choice4: 'green and yellow',
		answer: 2,  
},

{
		question: 'An example of soil minor nutrient is',

		choice1: 'calcium',
		choice2: 'iron',
		choice3: 'nitrogen',
		choice4: 'phosphorus',
		answer: 2,  
},

{
		question: 'The complete development of a human foetus in the womb normally takes',

		choice1: '7 months',
o		choice2: '8 months',
		choice3: '9 months',
		choice4: '10 months',
		answer: 3,  
},

{
		questi'A material that allows a small amount of light energy to pass through it but cannot be seen through is referred to as',
		choice1: 'opaque', 
	    choice2: 'reflective',
		choice3: 'translucent',
		choice4: 'transparent',
		
		Canswer: 3,  
},
{
		question: 'The leads of the transistor responsible for activation is the',

		choice1: 'amplifier',
		choice2: 'base',
		choice3: 'collector',
		choice4: 'emitter',
		answer: 2,  
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

		return window.location.assign('end.php') 
	}

	questionCounter++
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
	progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` 

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
	//The next line keep track of the question we are on
	currentQuestiond = availableQuestions[questionsIndex]
	question.innerText = currentQuestion.question

	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]	})
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
