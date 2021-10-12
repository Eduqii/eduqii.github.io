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
Que 1 - 5
SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I

The persistent sound of the big bell at that time of the day surprised everybody. What could the matter be? The pupils, bumping into each other, raced to the assembly hall. In less than a minute, Mr Amoh, the
headmaster, stood with a grim face before them. He raised his hand and everybody was quiet.

\u201CChildren,” he began. \u201CThe reason why I have summoned you here is to tell you that, at long last, we have
found the students who stole the school\u2019s microphones. Bring them here!” he commanded.

Necks craned to catch a glimpse of the thieves. There was Kofi Smith, the best footballer in the school. Eyes popped out. \u201CShiee!” exclaimed the students, completely surprised. Next was Akwesi Ameko. \u201CWhat\u2026!” blurted out someone from the back. \u201CIs he not the Form Two Class Prefect?” As if that was not enough, Akwasi Osei appeared last, his withered leg dangling on a crutch. The students exploded into uncontrollable laughter. The Senior Prefect had to shout his head off before silence was restored. Everybody was at a loss as to what came over the trio to commit such a crime.

In a clear voice, the headmaster handed down the punishment – two weeks\u2019 suspension.


Que 6 - 11
PASSAGE II

Before Obu left the house that morning for the Christmas service, he tried on his brand new clothes together with a cap which was beautifully embroidered with yellow thread. He wore the cap at various angles, using a hand mirror to choose the most suitable.

During the service, Obu caught himself several times admiring his clothes. Whenever the congregation sat down, he switched his attention from the clothes to his shoes, nicknamed \u201Cstand by”, his first pair ever. He was not alone. Even the choristers who should have joined the procession preferred to sit with the rest of the congregation in order to show off their new clothes. The church itself was in a festive mood, beautifully decorated with palm fronds and flowers.

Obu\u2019s only problem was that he could not wear his cap inside the church. Outside, the harmattan wind was dry and dusty, making one thirsty. One could not even smile without bleeding since one\u2019s lips were so dry. Despite this, Obu preferred staying outside to being inside the church where he could not display his cap. Therefore, when the catechist was on his way to the pulpit for the sermon, Obu lied to the Warden that he wanted to relieve himself outside.

*/
question: 'Read Passage I carefully and answer this question\n Why was everybody surprised when the bell rang?',
choice1: 'the students bumped into each other',
choice2: 'they ran to the assembly hall',
choice3: 'the students saw the headmaster standing before them',
choice4: 'they did not expect the bell to ring at that time',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n The students raced to the assembly hall because the',
choice1: 'headmaster was annoyed',
choice2: 'headmaster asked them to come',
choice3: 'bell rang many times',
choice4: 'bell rang at the normal time',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n There was laughter in the assembly hall because',
choice1: 'Mr Amoh stood before them with a grim face',
choice2: 'Kofi Smith the footballer was involved',
choice3: 'Akwesi Ameko surprised them',
choice4: 'Akwasi Osei the cripple was also involved',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n The expression at a loss means',
choice1: 'dissatisfied',
choice2: 'angry',
choice3: 'confused',
choice4: 'surprised',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n What did the headmaster do to the thieves? He ',
choice1: 'warned them not to repeat the offence ',
choice2: 'asked a teacher to cane them',
choice3: 'sent them home to call their parents',
choice4: 'asked them to stay away from school',
answer: 4,
},
{


question: 'Read Passage II carefully and answer this question\n Obu was inattentive in church because of\u2026.',
choice1: 'the Christmas',
choice2: 'the harmattan',
choice3: 'his new dress',
choice4: 'his embroidery',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n Obu\u2019s shoes were special to him because they\u2026',
choice1: 'were called \u201Cstand by”',
choice2: 'were his first',
choice3: 'made noise',
choice4: 'looked very beautiful',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n According to the passage the choristers\u2026..',
choice1: 'disliked their robes',
choice2: 'did not like singing',
choice3: 'wanted to display their dresses',
choice4: 'preferred sitting to standing',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n Obu went outside the church\u2026.',
choice1: 'since it was so warm inside',
choice2: 'because he did not like the catechist',
choice3: 'in order to relieve himself',
choice4: 'so that he could wear his cap',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\n He was not alone tells us that Obu was not the only one who was\u2026..',
choice1: 'in church that day',
choice2: 'happy',
choice3: 'wearing new clothes',
choice4: 'celebrating',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\n The word relieve in the passage means\u2026.',
choice1: 'lessen his suffering',
choice2: 'show his new clothes',
choice3: 'play happily',
choice4: 'sing melodiously',
answer: 1,
},
{
//SECTION B

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The team\u2019s performance made the coach very a͟n͟x͟i͟o͟u͟s͟',
choice1: 'hopeful',
choice2: 'angry ',
choice3: 'jealous ',
choice4: 'worried',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe Disciplinary Committee was asked to i͟n͟v͟e͟s͟t͟i͟g͟a͟t͟e͟ the theft.',
choice1: 'condemn',
choice2: 'go into',
choice3: 'determine',
choice4: 'look for',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe class teacher could not b͟e͟a͟r͟ the noise.',
choice1: 'tolerate',
choice2: 'understand',
choice3: 'take in',
choice4: 'make out',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nDue to anger the pupil spoke to the teacher in an i͟m͟p͟o͟l͟i͟t͟e͟ way.',
choice1: 'foolish',
choice2: 'loud ',
choice3: 'brave ',
choice4: 'rude',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nFlorence Nightingale was a r͟e͟n͟o͟w͟n͟e͟d͟ nurse.',
choice1: 'strict',
choice2: 'humble ',
choice3: 'brave ',
choice4: 'famous',
answer: 4,
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n The news of the inspector\u2019s visit k̲e̲p̲t̲ ̲t̲h̲e̲ ̲p̲u̲p̲i̲l̲s̲ ̲o̲n̲ ̲t̲h̲e̲i̲r̲ ̲t̲o̲e̲s̲.̲\n This means the pupils',
choice1: 'stood up ',
choice2: 'ran away ',
choice3: 'were alert',
choice4: 'were fatigued',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n During my preparation for the examination, I̲ ̲l̲e̲f̲t̲ ̲n̲o̲ ̲s̲t̲o̲n̲e̲ ̲u̲n̲t̲u̲r̲n̲e̲d̲.̲\n This means that I',
choice1: 'found it difficult to study',
choice2: 'studied thoroughly',
choice3: 'was sure to pass',
choice4: 'took all the stones away.',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n For the sake of peace Kofi g͟a͟v͟e͟ ͟i͟n͟ ͟t͟o͟ his friend after their bitter quarrel.\n This means that Kofi',
choice1: 'Kofi accepted defeat',
choice2: 'Kofi avoided his friend',
choice3: 'Kofi\u2019s friend abandoned him',
choice4: 'Kofi\u2019s friend was defeated.',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n John was far ahead of our class but we soon c̲a̲u̲g̲h̲t̲ ̲u̲p̲ ̲w̲i̲t̲h̲ ̲h̲i̲m̲.̲\n This means that',
choice1: 'John was the tallest in the class',
choice2: 'John kept himself away from the class',
choice3: 'we soon found John in front of us.',
choice4: 'we reached the same level with John',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n Kwadwo t̲u̲r̲n̲e̲d̲ ̲a̲ ̲d̲e̲a̲f̲ ̲e̲a̲r̲ to his mother\u2019s advice. \nThis means that Kwadwo',
choice1: 'turned his deaf ear to his mother',
choice2: 'refused to listen',
choice3: 'stopped his ear',
choice4: 'could not hear well.',
answer: 2,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nShe is h͟o͟p͟e͟f͟u͟l͟ of passing the English Language test.',
choice1: 'mindful',
choice2: 'afraid ',
choice3: 'careful ',
choice4: 'doubtful',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe Headmaster c͟o͟n͟d͟e͟m͟n͟e͟d͟ the Prefect\u2019s behaviour.',
choice1: 'reported ',
choice2: 'pardoned ',
choice3: 'confirmed ',
choice4: 'praised',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Mary looked very a͟t͟t͟r͟a͟c͟t͟i͟v͟e͟ in her new dress.',
choice1: 'comfortable',
choice2: 'clumsy ',
choice3: 'happy ',
choice4: 'proud',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The m͟e͟l͟o͟d͟i͟o͟u͟s͟ song put the baby to sleep.',
choice1: 'triumphant',
choice2: 'old',
choice3: 'strange',
choice4: 'discordant',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nMy father was i͟n͟d͟i͟f͟f͟e͟r͟e͟n͟t͟ to my brother\u2019s suffering.',
choice1: 'similar',
choice2: 'concerned',
choice3: 'stern',
choice4: 'kind',
answer: 2,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n We always look \u2026our parents for help.',
choice1: 'about ',
choice2: 'up to ',
choice3: 'at',
choice4: 'up for',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Finish the work quickly and \u2026your exercise books.',
choice1: 'hand up',
choice2: 'hand out',
choice3: 'hand down',
choice4: 'hand over',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n You don\u2019t believe that, \u2026?',
choice1: 'isn\u2019t it',
choice2: 'do you',
choice3: 'won\u2019t you',
choice4: 'don\u2019t you',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Amina is a good girl, \u2026\u2026.?',
choice1: 'isn\u2019t it',
choice2: 'doesn\u2019t she',
choice3: 'does she',
choice4: 'isn\u2019t she',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Don\u2019t pay him \u2026..he finishes the work.',
choice1: 'since ',
choice2: 'until ',
choice3: 'as',
choice4: 'yet',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n This is the boy \u2026book I took.',
choice1: 'whom ',
choice2: 'which ',
choice3: 'who',
choice4: 'whose',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n She \u2026when her father called her.',
choice1: 'swept',
choice2: 'is sweeping',
choice3: 'has swept',
choice4: 'was sweeping',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n After the fight, the two boxers congratulated \u2026.',
choice1: 'one another ',
choice2: 'each other ',
choice3: 'one other',
choice4: 'each another',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Everybody said my father was the \u2026..hardworking man in the village.',
choice1: 'very most ',
choice2: 'very more ',
choice3: 'most',
choice4: 'more',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n The chief went to the durbar grounds \u2026horseback.',
choice1: 'on',
choice2: 'by',
choice3: 'from',
choice4: 'above',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Nii isn\u2019t in his office; he is\u2026 near this place.',
choice1: 'thereby',
choice2: 'sometimes ',
choice3: 'somewhat ',
choice4: 'nowhere',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Kweku discovered later that \u2026\u2026.has many advantages.',
choice1: 'to be telling the truth',
choice2: 'tell the truth',
choice3: 'having told the truth',
choice4: 'telling the truth',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n The Oseis are our neighbours; they \u2026..near us for twenty years now.',
choice1: 'stay',
choice2: 'were stayed',
choice3: 'stayed',
choice4: 'have stayed',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n He was sure he gave the pan to \u2026.else.',
choice1: 'anyone ',
choice2: 'someone ',
choice3: 'somebody ',
choice4: 'everybody',
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

	    }, 3000)
	    })
	})

incrementScore = num => {
	score +=num
	scoreText.innerText = score
}

startGame()
