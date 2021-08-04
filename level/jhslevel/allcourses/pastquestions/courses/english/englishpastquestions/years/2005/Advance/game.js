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

		
question: 'Read Passage I carefully and answer this question\n\n Why is Ayele not talking today?',
choice1: 'She does not like Esinam‟s new bag',
choice2: 'She wants to get to school early',
choice3: 'She is moody',
choice4: 'Esinam is making her angry',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\n For Esinam, It’s great to be young means',
choice1: 'having everything one wants',
choice2: 'being able to go to school',
choice3: 'having a mum and dad',
choice4: 'being cheerful',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\n\n We learnt from the passage that Ayele‟s parents are ……',
choice1: 'sort of poor',
choice2: 'rich but miserly',
choice3: 'hardworking',
choice4: 'honest and cheerful',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\n\n In the passage, Ayele comes across as one who is …..',
choice1: 'proud',
choice2: 'hard to please ',
choice3: 'hardworking ',
choice4: 'thoughtful',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n\n The word tremble means',
choice1: 'disturbance',
choice2: 'quiver',
choice3: 'drop',
choice4: 'loudness',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n\nAccording to the passage, people laugh when they ………',
choice1: 'wear new clothes',
choice2: 'see something funny',
choice3: 'are at a party',
choice4: 'are going to school',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n\n From the passage we learn that laughter makes people look ….',
choice1: 'strong', 
choice2: 'healthy', 
choice3: 'queer', 
choice4: 'ugly ',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n\nPeople who laugh a lot …..', 
choice1: 'look strange',
choice2: 'blame others',
choice3: 'hurt their bodies',
choice4: 'make friends easily',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\nSocieties can use laughter to …………',
choice1: 'create fun',
choice2: 'annoy people',
choice3: 'correct behaviour',
choice4: 'praise people',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\nThe word awkwardly in the passage means',
choice1: 'foolishly',
choice2: 'happily',
choice3: 'respectably',
choice4: 'eagerly',
answer: 1,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n' + 'Our d͟e͟p͟e͟n͟d͟a͟b͟l͟e͟ goalkeeper saved us from disgrace.',
choice1: 'reliable',
choice2: 'tall',
choice3: 'smart',
choice4: 'muscular',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n' + 'A n͟e͟u͟t͟r͟a͟l͟ referee handled the final match.',
choice1: 'foreign',
choice2: 'local',
choice3: 'impartial',
choice4: 'athlete',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n' + 'The pupils were j͟u͟b͟i͟l͟a͟t͟i͟n͟g͟ because they had passed their examinations.',
choice1: 'singing',
choice2: 'shouting ',
choice3: 'dancing ',
choice4: 'rejoicing',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n' + 'Kuuki‟s dream is to become a c͟e͟l͟e͟b͟r͟a͟t͟e͟d͟ musician.',
choice1: 'gospel',
choice2: 'rich',
choice3: 'famous',
choice4: 'reggae',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n' + 'Appiah is a t͟a͟l͟e͟n͟t͟e͟d͟ football player.',
choice1: 'strong ',
choice2: 'gifted ',
choice3: 'dull',
choice4: 'lucky',
answer: 2,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n' + 
'Andy returned to school after p̲l̲a̲y̲i̲n̲g̲ ̲t̲r̲u̲a̲n̲t̲ for three days. This means that Andy was………',
choice1: 'expelled',
choice2: 'kidnapped',
choice3: 'deliberately absent',
choice4: 'very sick',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n' + 
'Ama was the only one who was c̲l̲o̲s̲e̲-̲l̲i̲p̲p̲e̲d̲ about the theft. This means that Ama……….',
choice1: 'did not cry ',
choice2: 'was serious ',
choice3: 'did not talk ',
choice4: 'was relaxed',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n' + 
'Issah was asked to t̲o̲e̲ ̲t̲h̲e̲ ̲l̲i̲n̲e̲ or quit the team. This means that Issah was asked to………..',
choice1: 'apologize',
choice2: 'resign ',
choice3: 'change ',
choice4: 'obey',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n' + 
'The students were advised to g̲i̲v̲e̲ ̲u̲p̲ ̲s̲m̲o̲k̲i̲n̲g̲.̲ This means that the students were asked to ……..smoking',
choice1: 'suspend',
choice2: 'stop',
choice3: 'prevent',
choice4: 'hate',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n' + 
'Mrs. Vesa has a h̲e̲a̲r̲t̲ ̲o̲f̲ ̲g̲o̲l̲d̲.̲ This means that Mrs. Vesa is very ……….',
choice1: 'bright ',
choice2: 'clever ',
choice3: 'kind ',
choice4: 'smart',
answer: 3,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' +
'My grandfather is a r͟o͟b͟u͟s͟t͟ ninety-year-old.',
choice1: 'troublesome ',
choice2: 'inquisitive ',
choice3: 'weak',
choice4: 'cheerful',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' +
'I c͟o͟n͟s͟e͟n͟t͟e͟d͟ to his suggestion because it was useful',
choice1: 'disagreed ',
choice2: 'submitted ',
choice3: 'replied',
choice4: 'applied',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' +
'A s͟h͟a͟r͟p͟ cutlass is one of the items on the prospectus',
choice1: 'new ',
choice2: 'used ',
choice3: 'short ',
choice4: 'blunt',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' +
'The JSS students are reading the a͟b͟r͟i͟d͟g͟e͟d͟ version of Shakespeare‟s Macbeth',
choice1: 'old',
choice2: 'original',
choice3: 'cheap',
choice4: 'paperback',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n' +
'The best pupil was a͟w͟a͟r͟d͟e͟d͟ a prize.',
choice1: 'rewarded',
choice2: 'shown ',
choice3: 'denied ',
choice4: 'robbed',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Ashia is used to ……….her parents every weekend.',
choice1: 'visit',
choice2: 'have visited',
choice3: 'visited',
choice4: 'visiting',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'……………..students were present.',
choice1: 'The whole ',
choice2: 'The several ',
choice3: 'Much of the ',
choice4: 'All the',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Jenny has ……………..on her head.',
choice1: 'plenty hair ',
choice2: 'a lot of hair ',
choice3: 'many hairs ',
choice4: 'much hairs',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Korkoi is a ……………….of twelve.',
choice1: 'tall, shapely, girl ',
choice2: 'shapely, tall, girl ',
choice3: 'girl, shapely, tall ',
choice4: 'tall, girl, shapely',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'The man of God preached that we should love…………',
choice1: 'another',
choice2: 'each other ',
choice3: 'one another ',
choice4: 'one other',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Mansah is ………..beautiful than any of her three sisters',
choice1: 'very ',
choice2: 'most ',
choice3: 'more ',
choice4: 'much',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Appiah was appointed prefect of his class,……………',
choice1: 'wasn‟t it?',
choice2: 'didn‟t he?',
choice3: 'isn‟t it?',
choice4: 'wasn‟t he?',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Anytime Ataa went to school she………into trouble',
choice1: 'got',
choice2: 'gets',
choice3: 'is getting',
choice4: 'has got',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'My dream school is for …………only',
choice1: 'boy ',
choice2: 'boy‟s ',
choice3: 'boys ',
choice4: 'boys‟',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Sam, have you ever …………in this river?',
choice1: 'swam ',
choice2: 'swum ',
choice3: 'swim ',
choice4: 'swims',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Susie and Tim are friends; they like………..',
choice1: 'each other ',
choice2: 'themselves ',
choice3: 'the other',
choice4: 'one another',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'Aunt Ekua …………..be able to solve the problem.',
choice1: 'can ',
choice2: 'has ',
choice3: 'will',
choice4: 'ought',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'For one week I went to school …………foot.',
choice1: 'by ',
choice2: 'on ',
choice3: 'at ',
choice4: 'in',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'The committee has been meeting over the case …………2pm',
choice1: 'over',
choice2: 'by',
choice3: 'since',
choice4: 'until',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n' + 
'I hope you are not ……………tired to run an errand for me.',
choice1: 'very',
choice2: 'so ',
choice3: 'as ',
choice4: 'too',
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
