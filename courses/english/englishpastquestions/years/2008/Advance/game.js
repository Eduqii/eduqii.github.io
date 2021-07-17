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

		
question: 'Read Passage I carefully and answer this question\n\nWhen were the residential structures built at Kpota?',
choice1: 'When the hospital was begun.',
choice2: 'Long before the hospital was started. ',
choice3: 'After the hospital had been built.',
choice4: 'They were built together with the hospital.',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\nDr. Grant did not give the plan to Mr Akpaloo because',
choice1: 'the houses belonged to him.',
choice2: 'Mr Akpaloo can make a design for himself. ',
choice3: 'it was not a wise thing to do.',
choice4: 'the caretaker had the plan.',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\nWhat did Mr. Akpaloo do when he was ready to build a house? He',
choice1: 'made a sketch of the building',
choice2: 'sent a plan to Dr. Grant',
choice3: 'looked for the plan of the house',
choice4: 'made sure he had enough money',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n\nThe word magnificent means',
choice1: 'massive ',
choice2: 'beautiful ',
choice3: 'good',
choice4: 'expensive',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n\n… One particular cluster of houses took the fancy of Mr. Akpaloo ….. This means Mr. Akpaloo',
choice1: 'laughed at the houses',
choice2: 'was confused by the houses ',
choice3: 'found the house attractive ',
choice4: 'detested the houses',
answer: 3,
},
{

question: 'Read Passage II carefully and answer this question\n\nAccording to the passage, the fisherman caught',
choice1: 'a pot of gold',
choice2: 'a lead pot ',
choice3: 'a big fish ',
choice4: 'no fish',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\nWhat is the genie?',
choice1: 'A big fish',
choice2: 'A copper pot',
choice3: 'Smoke',
choice4: 'A spirit',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n\nThe word captivity in the passage, means',
choice1: 'loss',
choice2: 'birth',
choice3: 'imprisonment',
choice4: 'defeat',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\nHow many times did the genie swear?',
choice1: 'Once',
choice2: 'Twice',
choice3: 'Three times',
choice4: 'Four times',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n\nAccording to the passage, the',
choice1: 'fisherman freed himself',
choice2: 'fisherman killed the genie',
choice3: 'genie made many people rich',
choice4: 'genie saved the fisherman from troubles',
answer: 1,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n Ama was p͟e͟r͟s͟u͟a͟d͟e͟d͟ by her brother to change her course.',
choice1: 'convinced',
choice2: 'commanded',
choice3: 'told',
choice4: 'advised',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nThe t͟a͟l͟e͟n͟t͟e͟d͟ footballer scored three goals.',
choice1: 'trained ',
choice2: 'serious ',
choice3: 'gifted',
choice4: 'skilled',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nAraba was s͟a͟d͟d͟e͟n͟e͟d͟ because she failed to win the beauty contest.',
choice1: 'furious ',
choice2: 'amazed ',
choice3: 'excited',
choice4: 'sorrowful',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nCharles behaved in an u͟n͟r͟u͟l͟y͟ manner towards his teacher.',
choice1: 'impolite ',
choice2: 'strange ',
choice3: 'indecent ',
choice4: 'wicked',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\nMy mother is very e͟n͟t͟h͟u͟s͟i͟a͟s͟t͟i͟c͟ about my success.',
choice1: 'anxious',
choice2: 'frank ',
choice3: 'aware',
choice4: 'hopeful',
answer: 4,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\n The accused died without c̲l̲e̲a̲r̲i̲n̲g̲ ̲h̲i̲s̲ ̲n̲a̲m̲e̲.̲ This means, the man did not',
choice1: 'prove his innocence',
choice2: 'erase his name',
choice3: 'make a will',
choice4: 'prove his case',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nThe teacher advised us to g̲o̲ ̲o̲v̲e̲r̲ our work before submitting them. This means the teacher asked us to ……….our work.',
choice1: 'rewrite',
choice2: 'remember',
choice3: 'repeat',
choice4: 'review',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nYou don‟t have to be so h̲i̲g̲h̲ ̲a̲n̲d̲ ̲m̲i̲g̲h̲t̲y̲ about your own opinion. This means',
choice1: 'positive ',
choice2: 'confused ',
choice3: 'strong',
choice4: 'arrogant',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nMr. Ala urged Peter and Paul to m̲e̲n̲d̲ ̲t̲h̲e̲i̲r̲ ̲f̲e̲n̲c̲e̲s̲.̲ This means Peter and Paul should',
choice1: 'repair their broken fences',
choice2: 'make peace',
choice3: 'be careful',
choice4: 'defend themselves',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n\nHe was asked not to attend the party but he t̲u̲r̲n̲e̲d̲ ̲a̲ ̲d̲e̲a̲f̲ ̲e̲a̲r̲ to the advice. This means that he ……..the advice.',
choice1: 'did not hear',
choice2: 'laugh at',
choice3: 'was angry at',
choice4: 'ignored',
answer: 4,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Everyone knows Musa to be very g͟e͟n͟e͟r͟o͟u͟s͟',
choice1: 'stingy ',
choice2: 'selfish ',
choice3: 'strict',
choice4: 'serious',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The headmaster r͟e͟b͟u͟k͟e͟d͟ the students who came in late.',
choice1: 'admitted ',
choice2: 'praised ',
choice3: 'admired',
choice4: 'embraced',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Naa answered the questions with c͟o͟n͟f͟i͟d͟e͟n͟c͟e͟',
choice1: 'joy',
choice2: 'firmness',
choice3: 'timidity',
choice4: 'uncertainty',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Judges are expected to be i͟m͟p͟a͟r͟t͟i͟a͟l͟.',
choice1: 'biased',
choice2: 'proud',
choice3: 'disrespectful',
choice4: 'bold',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Our father advised us not to e͟x͟a͟l͟t͟ ourselves.',
choice1: 'humble',
choice2: 'raise',
choice3: 'decorative',
choice4: 'train',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n I promised my parents that I ……..study very hard.',
choice1: 'would ',
choice2: 'should ',
choice3: 'will',
choice4: 'can',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n If Kofi ………me, I would have helped him.',
choice1: 'had asked',
choice2: 'asks',
choice3: 'has asked',
choice4: 'asked',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Let‟s leave now, Akosua, ………….?',
choice1: 'may we ',
choice2: 'can we ',
choice3: 'must we ',
choice4: 'shall we',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Adjo is …………young to marry.',
choice1: 'so',
choice2: 'very',
choice3: 'too',
choice4: 'much',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Give that book of ………….to Mansah.',
choice1: 'their ',
choice2: 'yours ',
choice3: 'my',
choice4: 'your‟s',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n ……………the warning of the weatherman, the fishermen went to sea.',
choice1: 'In spite of',
choice2: 'Apart from ',
choice3: 'In case of ',
choice4: 'Instead of',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n We‟ve been living here …………2001.',
choice1: 'since',
choice2: 'by ',
choice3: 'in ',
choice4: 'for',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Kofi told the court that he had met the suspect two days…………',
choice1: 'before',
choice2: 'ago ',
choice3: 'now ',
choice4: 'then',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Kwame has been accused …………stealing the money.',
choice1: 'with ',
choice2: 'for ',
choice3: 'of',
choice4: 'on',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n This is the man …………I met at the bus stop.',
choice1: 'who',
choice2: 'whose ',
choice3: 'whom ',
choice4: 'which',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n My friend is good ………….English.',
choice1: 'on ',
choice2: 'at ',
choice3: 'for',
choice4: 'with',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n I hear the programme was interesting; I wish I ……..there.',
choice1: 'am ',
choice2: 'were ',
choice3: 'was',
choice4: 'have been',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Our pastor is now the ……….senior of the pastors in the church.',
choice1: 'much ',
choice2: 'more ',
choice3: 'most ',
choice4: 'far',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n I prefer oranges ………….mangoes.',
choice1: 'to',
choice2: 'than',
choice3: 'against',
choice4: 'from',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n I hope the team ……………..perform better next year.',
choice1: 'would',
choice2: 'will',
choice3: 'should',
choice4: 'shall',
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
