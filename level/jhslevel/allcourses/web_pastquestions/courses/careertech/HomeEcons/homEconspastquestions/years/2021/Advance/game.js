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
		question: 'Seam include all these except.....',
		choice1: 'Run and fell seam',
		choice2: 'French seam',
		choice3: 'Open seam',
		choice4: 'Loop switch',
		answer: 4,
	},
	{
		question: 'The fat soluble vitamins are....',
		choice1: 'A,D,E and K vitamins',
		choice2: 'A and D vitamins',
		choice3: 'Vitamins A and K',
		choice4: 'Vitamins C, B and D',
		answer: 2,
	},
	{
		question: 'The soil can be enriched before planting with....',
		choice1: 'Flower',
		choice2: 'Seed',
		choice3: 'Manure',
		choice4: 'Plantain',
		answer: 3,
	},
	{
		question: 'The first thing to do when you want to clean a refrigerator is to.....',
		choice1: 'Switch on',
		choice3: 'Remove ice trays',
		choice2: 'Defrost',
		choice4: 'Remove its contents',
		answer: 3,
	},
	{
		question: 'In the kitchen arrangement, the sink should be near the window for....',
		choice1: 'Ventilation and walk',
		choice2: 'Light and ventilation',
		choice3: 'Light and walk',
		choice4: 'Size of cook',
		answer: 2,
	},
	{
		question: 'The best method used in preserving food nutrients, while cooking is by....',
		choice1: 'Frying',
		choice2: 'Baking',
		choice3: 'Steaming',
		choice4: 'Roasting',
		answer: 3,
	},
	{
		question: '...... is a natural fibers that costs a lot.',
		choice1: 'Wool',
		choice2: 'Silk',
		choice3: 'Rayon',
		choice4: 'Cotton',
		answer: 1,
	},
	{
		question: 'A well groomed person has .....',
		choice1: 'Well groomed hair',
		choice2: 'A neat and clean body',
		choice3: 'A neat and clean appearance',
		choice4: 'Well groomed hair and nails',
		answer: 3,
	},
	{
		question: 'One of the following parts of the body is used for smelling',
		choice1: 'Hands',
		choice2: 'Mouth',
		choice3: 'Tongue',
		choice4: 'Nose',
		answer: 4,
	},
	{
		question: 'One of these is not a description of an aerobic exercise.',
		choice1: 'Sit-ups',
		choice2: 'Cycling',
		choice3: 'Running',
		choice4: 'Jogging',
		answer: 1,
	},
	{
		question: 'Exercise is a ........',
		choice1: 'Mental movement',
		choice2: 'Body movements',
		choice3: 'Physical movement',
		choice4: 'Walking movement',
		answer: 3,
	},
	{
		question: 'Stretching exercises are done to ......',
		choice1: 'Develop muscles',
		choice2: 'Be healthy',
		choice3: 'Strengthen the heart',
		choice4: 'Firm the muscles',
		answer: 4,
	},
	{
		question: 'Crossway strips are also called ......',
		choice1: 'Binding strips',
		choice2: 'Warp',
		choice3: 'Bias',
		choice4: 'Weft',
		answer: 3,
	},
	{
		question: 'The first step in the application of makeup is to.....',
		choice1: 'Tone the face',
		choice2: 'Moisturise the face',
		choice3: 'Cleanse the face',
		choice4: 'Powder the face',
		answer: 3,
	},
	{
		question: 'The following are used in making up the face except.......',
		choice1: 'Skin tonic',
		choice2: 'Face powder',
		choice3: 'Foundation cream',
		choice4: 'Cleansing lotion',
		answer: 4,
	},
	{
		question: 'The provision of the basic family needs is the role of....',
		choice1: 'Mother',
		choice2: 'Father, mother and children',
		choice3: 'Children',
		choice4: 'Father',
		answer: 4,
	},
	{
		question: 'Which of the following is a transmitted disease?',
		choice1: 'Hypertension',
		choice2: 'Gonorrhea',
		choice3: 'Headache',
		choice4: 'Hearing impairment',
		answer: 2,
	},
	{
		question: 'Which of the following fibres is of natural source',
		choice1: 'Acrylics',
		choice2: 'Polyester',
		choice3: 'Nylon',
		choice4: 'Silk',
		answer: 4,
	},
	{
		question: 'Which of the following is not a floor covering?',
		choice1: 'Terrazzo',
		choice2: 'Mat',
		choice3: 'Linoleum',
		choice4: 'Rug',
		answer: 1,
	},
	{
		question: '..... is for healthy teeth?',
		choice1: 'Flouride',
		choice2: 'Nutrient',
		choice3: 'Chloride',
		choice4: 'Protein',
		answer: 1,
	},
	{
		question: 'Food stuffs that could be stored for a long period are called......',
		choice1: 'Perishable',
		choice2: 'Non-protected',
		choice3: 'Protective',
		choice4: 'Non-perishable',
		answer: 4,
	},
	{
		question: 'Your siblings son is your........',
		choice1: 'Niece',
		choice2: 'Cousin',
		choice3: 'Nephew',
		choice4: 'Brother',
		answer: 3,
	},
	{
		question: 'Needle used for embroidery are known as......',
		choice1: 'Crewel',
		choice2: 'Betweens',
		choice3: 'Sewing needles',
		choice4: 'Darning needles',
		answer: 1,
	},
	{
		question: 'The best methd of coooking an invalid dishes is......',
		choice1: 'Boiling',
		choice2: 'Baking',
		choice3: 'Stewing',
		choice4: 'Steaming',
		answer: 4,
	},
	{
		question: 'A broken marriage is also referred to as ......',
		choice1: 'Engagement',
		choice2: 'Divorce',
		choice3: 'Crisis',
		choice4: 'Reunion',
		answer: 2,
	},
	{
		question: 'Family needs are divided into ......',
		choice1: 'Three',
		choice2: 'Five',
		choice3: 'Four',
		choice4: 'Two',
		answer: 4,
	},
	{
		question: 'Which one can be tagged as a primary need?',
		choice1: 'Housing',
		choice2: 'Car',
		choice3: 'Money',
		choice4: 'Telephone',
		answer: 1,
	},
	{
		question: 'The secondary needs of a family include the following include the following except .......',
		choice1: 'Education',
		choice2: 'Car',
		choice3: 'Food',
		choice4: 'Electricity',
		answer: 3,
	},
	{
		question: 'The breaking down of food into smaller particles is called .......',
		choice1: 'Metabolism',
		choice2: 'Digestion',
		choice3: 'Anabolism',
		choice4: 'Metabolism',
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
