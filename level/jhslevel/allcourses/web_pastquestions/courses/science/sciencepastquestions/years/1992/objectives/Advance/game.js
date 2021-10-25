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
		question: 'Which of the following is true about matter? It has',
choice1: 'Weight and direction',
choice2: 'Weight only',
choice3: 'Weight and volume',
choice4: 'Volume and direction',
choice5: 'Volume only',
answer: 3,
},
{
question: 'The combining power of an element is called',
choice1: 'ion',
choice2: 'electron',
choice3: 'atom',
choice4: 'valency',
choice5: 'proton',
answer: 4,
},
{
question: 'Why is it bad to throw faeces into rivers? Because',
choice1: 'Other people collect drinking water from them',
choice2: 'It changes the colour of the river',
choice3: 'It causes hardness of the water',
choice4: 'The faeces cannot dissolve in the water',
choice5: 'The riverbanks will be dirty',
answer: 1,
},
{
question: 'Which of the following methods will be most suitable for separating a mixture of iron filings and sulphur powder?',
choice1: 'Winnowing',
choice2: 'Decanting',
choice3: 'Magnetization',
choice4: 'Evaporation',
choice5: 'Distillation',
answer: 3,
},
{
question: 'During athletics, a boy slipped on a banana peel on the ground and fell. This is because',
choice1: 'There was no friction',
choice2: 'The ground was hard',
choice3: 'The banana peel was soft',
choice4: 'The ground was sandy',
choice5: 'The frictional force was too great',
answer: 1,
},
{
question: 'Which of the following is a rhizome?',
choice1: 'Potato',
choice2: 'Ginger',
choice3: 'Onion',
choice4: 'Cocoyam',
choice5: 'Cassava',
answer: 2,
},
{
question: 'How many different elements are present in the compound CuCl2?',
choice1: 'Five ',
choice2: 'Four ',
choice3: 'Three ',
choice4: 'Two ',
choice5: 'One',
answer: 4,
},
{
question: 'Which of the following energy changes takes place when a church bell is tolled?',
choice1: 'Potential energy to kinetic energy',
choice2: 'Kinetic energy to sound energy',
choice3: 'Potential energy to sound energy',
choice4: 'Chemical energy to heat energy',
choice5: 'Sound energy to Kinetic energy',
answer: 2,
},
{
question: 'Living things are different from non-living things because living things',
choice1: 'are made up of protoplasm',
choice2: 'do not have definite forms',
choice3: 'take in liquid foods',
choice4: 'have chlorophyll',
choice5: 'vary widely in form and size',
answer: 1,
},
{
question: 'Which of the following gases enable burning to take place?',
choice1: 'Oxygen',
choice2: 'Carbon dioxide',
choice3: 'Hydrogen',
choice4: 'Ammonia',
choice5: 'Nitrogen',
answer: 1,
},
{
question: 'The work done when a weight of 40 N is lifted up vertically through a distance of 10m is',
choice1: '400 J ',
choice2: '50 J ',
choice3: '30 J ',
choice4: '4 J ',
choice5: '0.25 J',
answer: 1,
},
{
question: 'Which of the following products is not excreted by the skin?',
choice1: 'Water',
choice2: 'Sweat',
choice3: 'Urea',
choice4: 'Common salt',
choice5: 'saliva',
answer: 5,
},
{
question: 'An element is formed by the combination of',
choice1: 'an atom and a compound',
choice2: 'a compound and a mixture',
choice3: 'an atom and a mixture',
choice4: 'a molecule and a compound',
choice5: 'the same kind of atoms',
answer: 5,
},
{
question: 'Energy is measured in',
choice1: 'Kelvin',
choice2: 'Joules',
choice3: 'Watts',
choice4: 'Metres',
choice5: 'Amperes',
answer: 2,
},
{
question: 'Which of the following is not a characteristic of all livingthings?',
choice1: 'Transpiration',
choice2: 'Growth',
choice3: 'Reproduction',
choice4: 'Feeding',
choice5: 'Respiration',
answer: 1,
},
{
question: 'Which of the following substances is a mixture?',
choice1: 'Sodium chloride',
choice2: 'Sulphur dioxide',
choice3: 'Sugar solution',
choice4: 'Carbon dioxide',
choice5: 'Ammonium chloride',
answer: 3,
},
{
question: 'The best reason why a cooking pan should have a wooden handle is that, wood is a',
choice1: 'good conductor of heat ',
choice2: 'bad conductor of heat ',
choice3: 'good radiator of heat',
choice4: 'bad radiator of heat',
choice5: 'good reflector of heat',
answer: 2,
},
{
question: 'For healthy growth, the food we eat must contain',
choice1: 'fat, oils and proteins',
choice2: 'important nutrients in the right proportions',
choice3: 'a good proportion of carbohydrates and proteins',
choice4: 'mineral salts, vitamins and water',
choice5: 'mineral salts in right proportion',
answer: 2,
},
{
question: 'When the testa of a soaked bean is removed, the seed is seen to be made up of mainly',
choice1: 'micropyles',
choice2: 'hilum',
choice3: 'radicle',
choice4: 'embryo',
choice5: 'cotyledons',
answer: 5,
},
{
question: 'Which of the following human activities causes pollution of the environment?',
choice1: 'Cutting down timber in the forest for firewood',
choice2: 'Overgrazing of the field by cattle',
choice3: 'Burning of coal and petrol in industries',
choice4: 'Building dams across rivers',
choice5: 'Destruction of diseased crops',
answer: 3,
},
{
question: 'Which of the following explains why no work is done when a push is made against a firm wall?',
choice1: 'The force acts in the opposite direction',
choice2: 'The wall does not move',
choice3: 'The force is in the same direction',
choice4: 'The material of the wall is strong',
choice5: 'The force is in horizontal direction',
answer: 2,
},
{
question: 'The process by which a hot saturated solution is cooled to obtain some of the solute is called',
choice1: 'condensation',
choice2: 'evaporation',
choice3: 'crystallization',
choice4: 'distillation',
choice5: 'sedimentation',
answer: 3,
},
{
question: 'Which of the following diseases is caused by a fungus?',
choice1: 'Typhoid',
choice2: 'Leprosy',
choice3: 'Ringworm',
choice4: 'Measles',
choice5: 'Dysentery',
answer: 3,
},
{
question: 'Stem cutting is used in propagating cassava because it',
choice1: 'gives rise to roots and leaves',
choice2: 'stores food in the stem',
choice3: 'gives rise to big tubers',
choice4: 'gives rise to small tubers',
choice5: 'stores food in the leaves',
answer: 1,
},
{
question: 'Which of the following methods is not away of preventing malaria parasites from person to person?',
choice1: 'Sleeping in mosquito nets',
choice2: 'Sleeping outside in the open',
choice3: 'Draining all stagnant pools of water around our homes',
choice4: 'Taking anti-malaria drugs weekly',
choice5: 'Burying all emptycans that hold water in our surroundings',
answer: 2,
},
{
question: 'Faeces is the',
choice1: 'excretory products resulting from body activities',
choice2: 'food which is digested',
choice3: 'food in the mouth which is removed from the body',
choice4: 'unwanted product of digestion which is removed from the body',
choice5: 'excess food which is stored in the body',
answer: 4,
},
{
question: 'Which of the following explains why a wet cloth dries faster on a dry day than on a humid day?',
choice1: 'The rate of evaporation is very high during a dry day',
choice2: 'There is much water vapour in the atmosphere during a dry day',
choice3: 'It is very misty during a dry day',
choice4: 'there is no evaporation during a humid day',
choice5: 'The sun does not set during a humid day',
answer: 1,
},
{
question: 'Urinating in rivers is a common manner of spreadingdiseases such as',
choice1: 'cholera',
choice2: 'bilharzia',
choice3: 'malaria',
choice4: 'measles',
choice5: 'Typhoid',
answer: 2,
},
{
question: 'Which of the following is not away of preventing soil erosion?',
choice1: 'Planting trees on bare soil.', 
choice2: 'Clearing trees along slopes',
choice3: 'Planting grasses along slopes',
choice4: 'Ploughing across slopes',
choice5: 'Preventing bush fire',
answer: 2,
},
{
question: 'Atmospheric pressure is measured with',
choice1: 'an anemometer',
choice2: 'athermometer',
choice3: 'agalvanometer',
choice4: 'abarometer',
choice5: 'avoltmeter',
answer: 4,
},
{
question: 'Which of the following is not matter?',
choice1: 'Iced block',
choice2: 'Air',
choice3: 'Light',
choice4: 'Smoke',
choice5: 'Stone',
answer: 3,
},
{
question: 'Regular brushing of teeth is primarily done in order to',
choice1: 'keep the mouth fresh',
choice2: 'clear away food particles from the teeth',
choice3: 'remove bad smelling the mouth',
choice4: 'kill bacteria in the mouth',
choice5: 'control the flow of saliva',
answer: 2,
},
{
question: 'On heating a certain solid in a dry container, all the substance was lost without passing through the liquid state. This means the',
choice1: 'solid can easily melt',
choice2: 'solid is an alloy',
choice3: 'solid cannot stand heat',
choice4: 'solid particles are held together by weak forces',
choice5: 'solid undergoes sublimation',
answer: 5,
},
{
question: 'Which of the following forces tends to pull forces towards the centre of the earth?',
choice1: 'Electrostatic force',
choice2: 'Magnetic force',
choice3: 'Force of gravity',
choice4: 'Force of attraction',
choice5: 'Centrifugal force',
answer: 3,
},
{
question: ' Which of the following diseases will result from eating improperlycooked meat?',
choice1: 'Tapeworm infestation',
choice2: 'Guinea worm infestation',
choice3: 'Small pox',
choice4: 'Leprosy',
choice5: 'Measles',
answer: 1,
},
{
question: 'The angle between a ray of light and the surface it strikes is 30°. Calculate the angle of incidence.',
choice1: '210° ',
choice2: '120° ',
choice3: '90° ',
choice4: '60° ',
choice5: '30°',
answer: 4,
},
{
question: 'The Central Nervous System consists of',
choice1: 'the brain and the spinal cord',
choice2: 'the brain and the ears',
choice3: 'the spinal cord and eyes',
choice4: 'the brain, eyes and ears',
choice5: 'eyes, ears, skin and spinal cord',
answer: 1,
},
{
question: 'Which of the following classes of food can be broken down into amino acids?',
choice1: 'Carbohydrates',
choice2: 'Vitamins',
choice3: 'Mineral salts',
choice4: 'Fats and oils',
choice5: 'Proteins',
answer: 5,
},
{
question: 'Which of the following is the name of the darkest part of a shadow formed when a large source of light falls on an object?',
choice1: 'Partial eclipse',
choice2: 'Lunar eclipse',
choice3: 'Total eclipse',
choice4: 'Penumbra',
choice5: 'Umbra',
answer: 5,
},
{
question: 'Which of the following is evidence that particles in gases move faster than those in liquids and solids?\n'+
'I. The scent of a perfume fills a room when its container is opened \n' +
'II. Smoke spreads over a large area as burning takes place\n' +
'III. The wind blows fast when it is about to rain',
choice1: 'I only',
choice2: 'III only',
choice3: 'II only',
choice4: 'I and IIonly',
choice5: 'I,II and III',
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
