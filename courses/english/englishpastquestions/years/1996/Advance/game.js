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
	/*
que 1 - 6
SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I

The class was very quiet when suddenly Mr Mensah heard a giggle from the back of the classroom. Of late he has observed that giggling and murmuring have reared their ugly heads in the class. This time he was determined to find the cause of this naughty behaviour and discipline the culprits.

Pretending not to have heard the noise, he moved to the blackboard as if to write something on it but in reality to set a trap. Immediately the giggling and murmuring resumed, he turned and spotted three big boys at the back of the class chattering. His turning was so quick that he caught them right in the act. He also saw one of the boys passing on a magazine to the boy next to him.
	
With the speed of lightning, Mr Mensah got there, asked the three boys to stand up and then searched them in order to seize the magazine. Smart though he was, the boys were even smarter, for the boy sitting next to the window had thrown the magazine onto the veranda. After a thorough search Mr Mensah nearly gave up. It was, perhaps, an exercise book he had seen and not a magazine. However, his long years of teaching
experience suggested to him that the boys could have thrown the magazine outside. When he looked through the window, lo and behold, there lay the magazine! He retrieved it, flipped through it and saw that it was full of obscenities. Mr Mensah fumed.

que 7 - 11
 PASSAGE II

Kwadwo‟s naming ceremony on the fifteenth day was a grand occasion to which everyone at Elmina had come. Aboagye had specifically invited only the three elders but over three hundred people had come to the ceremony without any invitation.

“The ceremony will start at 5:30 a.m.”, Aboagye told everyone who passed his shop the previous day. They in turn went and told others and at 5 a.m., when the ceremony was about to begin, there were about seventy people already in the house.

“Will you bring chairs from the rooms?” Aboagye requested the young ones among the guests. They entered every room in the house and brought out chairs and benches of all shapes and sizes. They were placed in a circle with the three elders sitting in the centre. “Where is the child? The ceremony should be completed before the sun rises”. One of them said.

The mother soon brought the two-week old baby. Twelve calabashes scrubbed the previous day were brought. They looked white and dry. The old man took one and poured some of the gin into it. He raised the head of the child and dipped his finger into the gin. He turned and asked the second elder sitting next to him, “Have you got the name?” “Agyepong, alias Koo Kra” .

*/
question: 'Read Passage I carefully and answer this question\n According to the passage, Mr Mensah was determined to ………..',
choice1: 'find the trouble makers. ',
choice2: 'write on the board.',
choice3: 'insult the class.',
choice4: 'talk to the three big boys.',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\n The children giggled and murmured because ………….',
choice1: 'Mr Mensah turned to write on the board.',
choice2: 'they thought Mr Mensah was funny.',
choice3: 'of what they saw in the magazine.',
choice4: 'the boy near the window threw the magazine away.',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nThe boys threw the magazine away because ………..',
choice1: 'they were murmuring and giggling',
choice2: 'the window was open',
choice3: 'the teacher turned quickly',
choice4: 'they did not want the teacher to see it.',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nThe teacher found the magazine because …………',
choice1: 'it was thrown onto the veranda',
choice2: 'of his many years of teaching experience ',
choice3: 'he walked quickly to the back of the class ',
choice4: 'the children gave it to him',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\nThe expression have reared their ugly heads in the passage means have become unpleasantly ………..',
choice1: 'common',
choice2: 'funny',
choice3: 'troublesome',
choice4: 'ugly',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nThe word fumed in the passage means ……….',
choice1: 'exclaimed',
choice2: 'left the room',
choice3: 'smoked',
choice4: 'became very angry',
answer: 4,
},
{

question: 'Read Passage II carefully and answer this question\nThe people gathered in order to ……',
choice1: 'settle a serious case',
choice2: 'drink gin',
choice3: 'witness a ceremony',
choice4: 'hear Mr Aboagye',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nThe expression of all shapes and sizes tells us the pieces of furniture were …………..',
choice1: 'big',
choice2: 'long',
choice3: 'measured differently',
choice4: 'of different types',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nAboagye was a ………………',
choice1: 'teacher',
choice2: 'lawyer',
choice3: 'counsellor',
choice4: 'trader',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nThe word grand means….',
choice1: 'smooth ',
choice2: 'solemn ',
choice3: 'happy ',
choice4: 'noisy',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following is not true according to the passage?',
choice1: 'The ceremony must be performed before sunrise',
choice2: 'The elder dipped the head of the child into the calabash',
choice3: 'The first elder did not know the name of the child',
choice4: 'The ceremony was well attended.',
answer: 2,
},
{
//SECTION B
 
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The thieves who raided the house last night have been r̲o̲u̲n̲d̲e̲d̲ ̲u̲p̲.̲',
choice1: 'killed ',
choice2: 'beaten ',
choice3: 'arrested',
choice4: 'wounded',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'When you come across a new word l͟o͟o͟k͟ it up in a dictionary.',
choice1: 'examine it',
choice2: 'observe it',
choice3: 'find the meaning',
choice4: 'record the meaning',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The radio won‟t talk because it is d̲e̲f̲e̲c̲t̲i̲v̲e̲.̲',
choice1: 'dirty',
choice2: 'broken ',
choice3: 'faulty ',
choice4: 'tuned',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'Our team was e͟l͟i͟m͟i͟n͟a͟t͟e͟d͟ at the semi-final stage.',
choice1: 'forgotten ',
choice2: 'kicked out ',
choice3: 'wiped off ',
choice4: 'promoted',
answer: 3,
},
{
//SECTION C
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Tony h̲e̲l̲d̲ ̲h̲i̲s̲ ̲t̲o̲n̲g̲u̲e̲ for an hour before speaking.\n This means that Tony',
choice1: 'was angry.',
choice2: 'was happy',
choice3: 'smiled for a while',
choice4: 'kept quiet',
answer: 4,

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'The boy, reluctant to go on the errand, walked a̲t̲ ̲a̲ ̲s̲n̲a̲i̲l̲‟̲s̲ ̲p̲a̲c̲e̲.̲ This means that the boy walked ……….',
choice1: 'carefully',
choice2: 'slowly',
choice3: 'noisily',
choice4: 'carelessly',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'It was a r̲e̲d̲-̲l̲e̲t̲t̲e̲r̲ day. This means it was a ……………',
choice1: 'day I got a red letter',
choice2: 'day I was sad',
choice3: 'memorable day',
choice4: 'real day',
answer: 3,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'I have a̲ ̲b̲o̲n̲e̲ ̲t̲o̲ ̲p̲i̲c̲k̲ with my prefect for reporting me. This means …………',
choice1: 'the prefect and I are going to chat',
choice2: 'I have to report the prefect',
choice3: 'I have to take the bone to the prefect',
choice4: 'I have a quarrel with the prefect.',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'His failure in the examination came o̲u̲t̲ ̲o̲f̲ ̲t̲h̲e̲ ̲b̲l̲u̲e̲.̲ This means his failure was',
choice1: 'destined',
choice2: 'obvious',
choice3: 'surprising',
choice4: 'sent from the blue',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Efua behaves like a̲ ̲f̲i̲s̲h̲ ̲o̲u̲t̲ ̲o̲f̲ ̲w̲a̲t̲e̲r̲ among boys. This means Efua …………….among boys.',
choice1: 'breathes heavily',
choice2: 'feels uncomfortable',
choice3: 'swims better',
choice4: 'looks quite happy',
answer: 2,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'These fruits are s͟t͟a͟l͟e͟; please take them away.',
choice1: 'juicy ',
choice2: 'sour ',
choice3: 'fresh ',
choice4: 'nice',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'Moses is on a t͟e͟m͟p͟o͟r͟a͟r͟y͟ appointment.',
choice1: 'daily',
choice2: 'permanent',
choice3: 'probationary',
choice4: 'weekly',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'The beggar v͟a͟n͟i͟s͟h͟e͟d͟ when he saw the policeman.',
choice1: 'showed ',
choice2: 'defected ',
choice3: 'jumped',
choice4: 'appeared',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'The taxi driver drove r͟e͟c͟k͟l͟e͟s͟s͟l͟y͟ throughout the journey.',
choice1: 'speedily',
choice2: 'carefully',
choice3: 'noisily',
choice4: 'leisurely',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'Those machines are not g͟e͟n͟u͟i͟n͟e͟ brands.',
choice1: 'fine',
choice2: 'tested',
choice3: 'fake',
choice4: 'new',
answer: 3,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I am free to sleep now, I ……..my work.',
choice1: 'completed',
choice2: 'do complete',
choice3: 'have completed',
choice4: 'complete',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'After Roderick ……….the dress, he looked round for a pair of shoes that would match it.',
choice1: 'has bought',
choice2: 'is buying',
choice3: 'had bought',
choice4: 'was buying',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I saw him while he …………the cloth.',
choice1: 'is folding',
choice2: 'has been folding',
choice3: 'was folding',
choice4: 'had been folding',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'You can‟t eat all, ………?',
choice1: 'can‟t you',
choice2: 'do you ',
choice3: 'can you ',
choice4: 'don‟t you',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Not only was she pretty …………intelligent.',
choice1: 'or',
choice2: 'nor',
choice3: 'but also',
choice4: 'and also',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Neither the headmaster nor his assistant ……….today.',
choice1: 'is working',
choice2: 'do work',
choice3: 'have worked',
choice4: 'are working',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The antelope ……..when the hunter fired.',
choice1: 'is eating ',
choice2: 'is eaten ',
choice3: 'was ate',
choice4: 'was eating',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'There were ………..cars at the beach.',
choice1: 'plenty ',
choice2: 'most ',
choice3: 'much ',
choice4: 'many',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Lucy is the ……….beautiful girl in her class.',
choice1: 'much',
choice2: 'very much ',
choice3: 'very more ',
choice4: 'most',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'He is …………….to fight with a fool.',
choice1: 'too wise a man ',
choice2: 'too a wise man ',
choice3: 'a too wise man ',
choice4: 'a man wise too',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Mantey and Kofi shook hands with ………….',
choice1: 'each other',
choice2: 'each one',
choice3: 'one another',
choice4: 'themselves',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The school organised a …………..art exhibition.',
choice1: 'two days ',
choice2: 'two day ',
choice3: 'two-day ',
choice4: 'two-days',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'We told the stranger we would put him …………if he wanted.',
choice1: 'down',
choice2: 'up ',
choice3: 'on ',
choice4: 'over',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'In wrestling, it is not wise to take ……..someone twice your size.',
choice1: 'off ',
choice2: 'in ',
choice3: 'on',
choice4: 'over',
answer: 3,
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
