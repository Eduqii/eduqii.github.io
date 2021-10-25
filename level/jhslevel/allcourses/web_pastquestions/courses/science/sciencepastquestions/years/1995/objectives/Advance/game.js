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
		question: 'Which of the following activities does not cause soil erosion?',
choice1: 'Clearing of vegetation',
choice2: 'Bush burning ',
choice3: 'Heavy rainfall ',
choice4: 'Overgrazing ',
choice5: 'Crop rotation',
answer: 5,
},
{
question: 'What is the differencebetween massand weight?The',
choice1: 'mass of a body is twice the weight',
choice2: 'weight of a body is constant butits mass varies',
choice3: 'mass of a body varies but its weight does not ',
choice4: 'weight of a body varies but its mass does not ',
choice5: 'mass of a body is half the weight',
answer: 4,
},
{
question: 'By what process is heat transferredfrom thebottom of abeaker containing waterto thetop?',
choice1: 'convection ',
choice2: 'conduction ',
choice3: 'radiation',
choice4: 'absorption',
choice5: 'transmission',
answer: 1,
},
{
question: 'Inwhat units arework and energymeasured?',
choice1: 'work in joules, energyinwatts',
choice2: 'work in joules, energyinjoules',
choice3: 'work in newtons,energyin joules',
choice4: 'energyin watts, work in watts',
choice5: 'energyin newtons, workin joules',
answer: 2,
},
{
question: 'Which ofthe followingis the organic part ofthe soil?',
choice1: 'Mineral salts',
choice2: 'Water',
choice3: 'Rock particles',
choice4: 'Air',
choice5: 'Humus',
answer: 5,
},
{
question: 'A mixtureof sugarandwatercan beseparated by',
choice1: 'Filtration',
choice2: 'Evaporation ',
choice3: 'Decantation ',
choice4: 'Distillation',
choice5: 'Condensation',
answer: 2,
},
{
question: 'The air pressureat greatheights can bemeasuredwith',
choice1: 'A thermometer ',
choice2: 'An anemometer ',
choice3: 'A barometer',
choice4: 'A hydrometer',
choice5: 'A hygrometer',
answer: 3,
},
{
question: 'Which ofthe following animals reproduces without mating?',
choice1: 'Toad ',
choice2: 'Lizard ',
choice3: 'Dog',
choice4: 'Man',
choice5: 'Amoeba',
answer: 5,
},
{
question: 'Which of the following environmental factors can cause the fastest rate of water loss from leaf surfaces?',
choice1: 'High humidity',
choice2: 'Wet wing',
choice3: 'Stillair',
choice4: 'Low temperature',
choice5: 'Dry air',
answer: 5,
},
{
question: 'A fruit adapted for dispersal by wind is likely to be',
choice1: 'succulent',
choice2: 'brightlycoloured',
choice3: 'hooked ',
choice4: 'sticky ',
choice5: 'hairy',
answer: 5,
},
{
question: 'All the followingsubstances aremixtures except',
choice1: 'ink',
choice2: 'blood',
choice3: 'air',
choice4: 'palmwine',
choice5: 'carbondioxide',
answer: 5,
},
{
question: 'Ina first class lever, theload is placed',
choice1: 'on the effort',
choice2: 'between theeffort arm and the pivot',
choice3: 'at one end of the load arm',
choice4: 'between the pivot and the load arm',
choice5: 'on the pivot',
answer: 3,
},
{
question: 'Excretion in animals involves the removal of',
choice1: 'water from the body',
choice2: 'urine and faeces from the body',
choice3: 'blood from the body',
choice4: 'waste materials from the body cells',
choice5: 'undigested food from the body',
answer: 4,
},
{
question: 'Which ofthe followingis an indirect sourceof light?',
choice1: 'Torch light',
choice2: 'Thesun',
choice3: 'Fire',
choice4: 'The moon',
choice5: 'Candle flame',
answer: 4,
},
{
question: 'Which ofthe followingis the sense organforsight?',
choice1: 'Skin ',
choice2: 'nose ',
choice3: 'eye ',
choice4: 'ear',
choice5: 'tongue',
answer: 3,
},
{
question: 'Liquids suitable for use in thermometers must not: ',
choice1: 'wet glass',
choice2: 'havealow boilingpoint',
choice3: 'haveahigh meltingpoint',
choice4: 'haveahigh density',
choice5: 'expand',
answer: 1,
},
{
question: 'When living organisms die, the mineral salts in their bodies become available to the soil through the process of',
choice1: 'evaporation',
choice2: 'sedimentation',
choice3: 'defecation',
choice4: 'decay',
choice5: 'osmosis',
answer: 4,
},
{
question: 'Ice floats on waterbecause',
choice1: 'water is denser than ice',
choice2: 'ice is denser than water',
choice3: 'ice has the same temperature as water',
choice4: 'ice has a lower temperature than water ',
choice5: 'ice is different from water',
answer: 1,
},
{
question: 'The reason for chewing foodbeforeswallowingis to',
choice1: 'soften the food',
choice2: 'make digestion faster',
choice3: 'cause saliva to flow out',
choice4: 'exercise the jaws',
choice5: 'make the teeth strong',
answer: 1,
},
{
question: 'Power is defined as the',
choice1: 'ability to do work',
choice2: 'amount of energy',
choice3: 'rate of distance covered',
choice4: 'rate of doing work',
choice5: 'ease of moving a heavy object',
answer: 4,
},
{
question: 'The force which is able to hold light objects on the surface of liquids is called',
choice1: 'surfacetension',
choice2: 'friction',
choice3: 'capillarity ',
choice4: 'viscosity ',
choice5: 'cohesion',
answer: 1,
},
{
question: 'In the nucleus ofan atom, thereare',
choice1: 'neutrons and shells',
choice2: 'protons and electrons ',
choice3: 'neutrons and protons ',
choice4: 'electrons and shells',
choice5: 'electrons and neutrons',
answer: 3,
},
{
question: 'Themalesperms fertilizethe femaleeggs to formthe',
choice1: 'embryo ',
choice2: 'ovary ',
choice3: 'ovum',
choice4: 'placenta',
choice5: 'uterus',
answer: 1,
},
{
question: 'Mostplants will notdowellin thedesert because',
choice1: 'there is no top soil ',
choice2: 'it is too sunny there ',
choice3: 'rainfall is very poor',
choice4: 'the speed of wind is high',
choice5: 'the gullies are too deep for plant cultivation',
answer: 3,
},
{
question: 'What is the work done when a girl lifts a pot of water weighing 40N upward through a distance of 1 m?',
choice1: '400.0 J ',
choice2: '40.0 J ',
choice3: '4.0 J',
choice4: '1.0 J ',
choice5: '0.4 J',
answer: 2,
},
{
question: 'Which of the following is not characteristic of all living organisms? The ability to',
choice1: 'break down food to obtain energy',
choice2: 'produce food using the sun’s energy',
choice3: 'makeuse of food nutrients to grow',
choice4: 'respond to changes within the environment',
choice5: 'give rise to young new individuals',
answer: 2,
},
{
question: 'Theprocess used ingettingsalt from seawateris',
choice1: 'boiling',
choice2: 'condensation',
choice3: 'decantation',
choice4: 'sedimentation',
choice5: 'evaporation',
answer: 5,
},
{
question: 'Which ofthe following bodies is a satellite oftheearth?',
choice1: 'Mars',
choice2: 'Sun',
choice3: 'Venus',
choice4: 'Moon',
choice5: 'Mercury',
answer: 4,
},
{
question: 'Which ofthe following aresoil micro-organisms?',
choice1: 'Termites ',
choice2: 'Viruses ',
choice3: 'Ticks',
choice4: 'Bacteria',
choice5: 'Crabs',
answer: 4,
},
{
question: 'Thedarkest part of ashadow formed when alargesourceof light is used is the',
choice1: 'Partial eclipse ',
choice2: 'Lunar eclipse ',
choice3: 'night',
choice4: 'penumbra',
choice5: 'umbra',
answer: 5,
},
{
question: 'Thepart ofair which supports burningis',
choice1: 'nitrogen',
choice2: 'inert gas',
choice3: 'watervapour',
choice4: 'oxygen',
choice5: 'carbondioxide',
answer: 4,
},
{
question: 'What structurelinks themouth with thestomach?The',
choice1: 'duodenum ',
choice2: 'oesophagus ',
choice3: 'Ileum',
choice4: 'trachea',
choice5: 'colon',
answer: 2,
},
{
question: 'Which ofthe followinginstruments is used in measuring current in an electric circuit?',
choice1: 'Voltmeter ',
choice2: 'Ammeter ',
choice3: 'Barometer',
choice4: 'Thermometer',
choice5: 'Anemometer',
answer: 2,
},
{
question: 'There arethickforestsin part ofthe world wherethe climateis',
choice1: 'Hot and wet ',
choice2: 'cool and wet ',
choice3: 'hot and dry ',
choice4: 'cool and dry',
choice5: 'warm and dry',
answer: 1,
},
{
question: 'Theouterear is also referred to as',
choice1: 'cochlea',
choice2: 'tympanum',
choice3: 'pinna',
choice4: 'incus',
choice5: 'malleus',
answer: 3,
},
{
question: 'Gin can beobtained from palm wine by',
choice1: 'condensation',
choice2: 'freezing',
choice3: 'sedimentation',
choice4: 'distillation',
choice5: 'filtration',
answer: 4,
},
{
question: 'Which ofthe followingis likelyto happen when the relative humidityis high?',
choice1: 'It is likelyto rain',
choice2: 'It is likelyto be dry',
choice3: 'It is likelyto be sunny',
choice4: 'Thedaywillbehot',
choice5: 'It will be windy',
answer: 1,
},
{
question: 'Which of the following features is common to both the fish and the lizard? The possession of',
choice1: 'a sticky tongue',
choice2: 'a lateral line system',
choice3: 'dorsal fins',
choice4: 'clawed digits',
choice5: 'scales on thebody',
answer: 5,
},
{
question: 'Which ofthe following statements about thesolar system is true?The',
choice1: 'sun moves round the earth',
choice2: 'planets move round the sun',
choice3: 'planets move round themoon',
choice4: 'sun moves in its orbit',
choice5: 'sun moves round themoon',
answer: 2,
},
{
question: 'What typeof fruit isamango?',
choice1: 'Drupe ',
choice2: 'Pepo ',
choice3: 'Berry',
choice4: 'Caryopsis',
choice5: 'Pome',
answer: 1,
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
