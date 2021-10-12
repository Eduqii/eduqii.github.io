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
Que 1 - 6
SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I

Bako was both intelligent and hardworking so he soon learnt all that Garba taught him of the art of reading and writing. Now he was able to earn a little extra income as a letter-writer and reader to his fellow illiterate labourers. All the people trusted him because he never revealed any information he got from the letters to anyone.

Bako\u2019s happiest moments came on Saturdays when he received his pay and on Mondays when the labourers returned to work bringing with them all the gossip and laughter of their villages. Unfortunately, a misfortune befell Bako. One day, as he stood gazing proudly at a big tree, which he had just felled, another tree being cut down by a fellow labourer struck him on the head. The branches tore his face and he fell unconscious. His friends carried him to Adom Hospital.

The accident changed Bako\u2019s life. His handsome face became permanently scarred. He lost his strength
and job. At first, he hoped that in time he would regain his strength but Bako grew weaker and weaker.


Que 7 - 10 
PASSAGE II

We can have close friends for a very long time. But when friendship and duty come into conflict, as I
once experienced, many problems may occur.

Almost all my friends and I are leading members of our school\u2019s Supporters Club. In the beginning of our
final year it was time to elect new officers for the club. Everyone stood the chance of being elected.

When I was elected as President, I knew it would be a tough job because I would be in charge of my closest friends. The real test would come when the sports season started.

Just as I had imagined, there were many disputes. No one listened to what I said. Everyone just wanted to have fun instead of cheering our athletes. I knew I had to motivate them and use discipline and that was exactly what I did.

Many of my friends could not understand this. While some of them stopped coming to the games others were not talking to me at all.

I finally decided to have a talk with everyone. I frankly admitted that I did not like the job but since I had it, I was determined to do my best. I also told them to leave sports matters on the field because my friends were more important to me than the job. From that little talk, I had everything resolved.

*/
question: 'Read Passage I carefully and answer this question\nAccording to the passage, Garba taught Bako to \u2026..',
choice1: 'use a matchet',
choice2: 'fell trees',
choice3: 'read and write',
choice4: 'gossip and laugh',
choice5: 'read and fell trees',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nBako got additional income by',
choice1: 'cutting down trees',
choice2: 'going to the hospital',
choice3: 'meeting his friends on Monday',
choice4: 'working as a letter-writer and reader',
choice5: 'felling trees and reading letters',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nThe people trusted Bako because he \u2026 ',
choice1: 'kept what he knew about them secretly ',
choice2: 'wrote and read their letters',
choice3: 'gossiped and laughed with them',
choice4: 'was hardworking and clever',
choice5: 'earned extra income',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nHow did the accident affect Bako?',
choice1: 'He lost his senses and job',
choice2: 'He could not read and write again',
choice3: 'He became weak and jobless',
choice4: 'His face was stitched',
choice5: 'His friends left him',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nBako liked Mondays because \u2026',
choice1: 'Monday started the week',
choice2: 'He met all his friends again',
choice3: 'He received his pay',
choice4: 'He wrote and read letters',
choice5: 'He heard news from other villages',
answer: 5,
},
{
question: 'Read Passage I carefully and answer this question\nHe fell unconscious means he',
choice1: 'fell asleep',
choice2: 'became mad',
choice3: 'lost his confidence',
choice4: 'lost awareness of his surroundings',
choice5: 'fell down and died',
answer: 4,
},
{

question: 'Read Passage II carefully and answer this question\nWhy did the writer think his job would be difficult?',
choice1: 'The other members were final year students',
choice2: 'He had to control his closest friends',
choice3: 'He was inexperienced',
choice4: 'He had to work with new officers',
choice5: 'Some of his friends stopped talking to him',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following words best describes the behaviour of the writer\u2019s friends?',
choice1: 'Uncooperative',
choice2: 'Jealous ',
choice3: 'Insulting ',
choice4: 'Funny',
choice5: 'Talkative',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage which of the following statements is true? The writer',
choice1: 'settled the misunderstanding between him and his friends',
choice2: 'stopped talking to his friends',
choice3: 'lost all his closest friends',
choice4: 'appointed only his friends as officers',
choice5: 'did not listen to the advice of his friends',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nThe word disputes means',
choice1: 'misgiving',
choice2: 'debates ',
choice3: 'insults ',
choice4: 'wars',
choice5: 'differences',
answer: 5,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The Manager was dismissed for gross i̲n̲e̲f̲f̲i̲c̲i̲e̲n̲c̲y̲.̲',
choice1: 'laziness',
choice2: 'dishonesty',
choice3: 'incompetence',
choice4: 'misconduct',
choice5: 'disrespect',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n Prices of goods have been fairly c̲o̲n̲t̲r̲o̲l̲l̲e̲d̲.̲',
choice1: 'kept down ',
choice2: 'kept away ',
choice3: 'kept off',
choice4: 'kept out',
choice5: 'kept hanging',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n Remember to l̲o̲o̲k̲ ̲o̲v̲e̲r̲ your work when you finish.',
choice1: 'watch',
choice2: 'look on',
choice3: 'oversee',
choice4: 'read through',
choice5: 'overlook',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n Although the labourers agreed to do the work, they did it r̲e̲l̲u̲c̲t̲a̲n̲t̲l̲y̲.̲',
choice1: 'leisurely',
choice2: 'nervously',
choice3: 'unwillingly',
choice4: 'sparingly',
choice5: 'angrily',
answer: 3,
},
{ 
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n The thief was h͟u͟m͟i͟l͟i͟a͟t͟e͟d͟ when he was caught.',
choice1: 'sentenced',
choice2: 'cautioned',
choice3: 'beaten up',
choice4: 'discouraged',
choice5: 'mocked at',
answer: 5,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n I don\u2019t like Ben. He is always p̲u̲l̲l̲i̲n̲g̲ ̲m̲y̲ ̲l̲e̲g̲s̲.̲ This means Ben is always \u2026',
choice1: 'pulling me down',
choice2: 'gossiping about me',
choice3: 'abusing me',
choice4: 'borrowing my shoes',
choice5: 'teasing me',
answer: 5,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nThe judge t̲u̲r̲n̲e̲d̲ ̲a̲ ̲d̲e̲a̲f̲ ̲e̲a̲r̲ to what the murderer sa',ichoice4: 'This means the judge \u2026',
choice1: 'was partially deaf',
choice2: 'ignored what the murderer said',
choice3: 'favoured the murderer when he heard his story',
choice4: 'pretended that he was listening to the murderer\u2019s story',
choice5: 'was asleep when the murderer gave his evidence',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nIf you don\u2019t want to regret, c̲u̲t̲ ̲y̲o̲u̲r̲ ̲c̲o̲a̲t̲ ̲a̲c̲c̲o̲r̲d̲i̲n̲g̲ ̲t̲o̲ ̲y̲o̲u̲r̲ ̲c̲l̲o̲t̲h̲.̲ This means \u2026',
choice1: 'live within your means',
choice2: 'use the coat cut from your cloth',
choice3: 'sew your own coat',
choice4: 'put on your cloth and coat',
choice5: 'do not worry about the problems of others',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nW̲e̲r̲e̲ ̲i̲t̲ ̲n̲o̲t̲ ̲f̲o̲r̲ ̲t̲h̲e̲ ̲p̲o̲l̲i̲c̲e̲m̲e̲n̲ ̲t̲h̲e̲ ̲w̲o̲r̲k̲e̲r̲s̲ ̲w̲o̲u̲l̲d̲ ̲h̲a̲v̲e̲ ̲g̲o̲n̲e̲ ̲o̲n̲ ̲s̲t̲r̲i̲k̲e̲.̲ From this we know the policemen\u2026',
choice1: 'didn\u2019t go on strike',
choice2: 'saw the workers on strike',
choice3: 'forced the workers to go on strike',
choice4: 'and the workers were on strike',
choice5: 'prevented the workers from going on strike',
answer: 5, 
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nRazak has b̲e̲e̲n̲ ̲i̲n̲ ̲a̲ ̲b̲a̲d̲ ̲w̲a̲y̲ for several days. This means Razak has been \u2026',
choice1: 'badly treated',
choice2: 'unable to eat for many days',
choice3: 'misbehaving',
choice4: 'quite ill',
choice5: 'very unfriendly towards everyone',
answer: 4,
},
{

question: ' From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Our school is now f͟a͟m͟o͟u͟s͟ throughout the district.',
choice1: 'popular',
choice2: 'anonymous',
choice3: 'unknown ',
choice4: 'irrelevant ',
choice5: 'hidden',
answer: 3,
},
{
question: ' From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Our new pastor is very m͟o͟d͟e͟s͟t͟ in his ways.',
choice1: 'friendly',
choice2: 'kind',
choice3: 'particular',
choice4: 'boastful',
choice5: 'fashionable',
answer: 4,
},
{
question: ' From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Issa was very r͟u͟d͟e͟ to his teacher.',
choice1: 'respectful',
choice2: 'polite',
choice3: 'obedient ',
choice4: 'truthful ',
choice5: 'gentle',
answer: 2,
},
{
question: ' From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n We walked on the s͟m͟o͟o͟t͟h͟ side of the pavement.',
choice1: 'hard ',
choice2: 'rough ',
choice3: 'coarse',
choice4: 'slippery',
choice5: 'narrow',
answer: 2,
},
{
question: ' From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The president was d͟e͟n͟o͟u͟n͟c͟e͟d͟ by his subjects.',
choice1: 'elected',
choice2: 'welcomed ',
choice3: 'supported ',
choice4: 'advised',
choice5: 'hailed',
answer: 5,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Our ancestors \u2026to us a lot of knowledge about our culture.',
choice1: 'handed in',
choice2: 'passed out',
choice3: 'passed through',
choice4: 'handed down',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n The government has set \u2026a committee on education.',
choice1: 'apart',
choice2: 'up ',
choice3: 'in ',
choice4: 'by',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n None of the suspects\u2026..his guilt.',
choice1: 'admit',
choice2: 'admits',
choice3: 'are admitting',
choice4: 'have admitted',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Amidu promised to be patient until his toy \u2026..repaired.',
choice1: 'has been ',
choice2: 'will be ',
choice3: 'was',
choice4: 'can be',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n The Headmaster, with his assistant \u2026.inspecting the new school library.',
choice1: 'will have been',
choice2: 'are',
choice3: 'have been',
choice4: 'is',
choice5: 'nothing',
answer: 4,
},
{
 question: 'I would have told you about the wedding if I ........',
 choice1: 'have known',
choice2: 'know',
choice3: 'had known',
choice4: 'have been knowing',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n His writing is so bad that I can\u2019t make it \u2026.',
choice1: 'on',
choice2: 'out',
choice3: 'down',
choice4: 'in',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n You will be ill if you \u2026too much.',
choice1: 'are eating',
choice2: 'eat',
choice3: 'had eaten',
choice4: 'ate',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n If it \u2026necessary, I shall see you again at six o\u2019clock.',
choice1: 'is',
choice2: 'had been ',
choice3: 'is being ',
choice4: 'was',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n If we had not closed down the market, the traders \u2026..there.',
choice1: 'shall still be',
choice2: 'will still be',
choice3: 'are still going',
choice4: 'would have still been',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Mr Adu has never been pleased with his children\u2019s performance, \u2026..?',
choice1: 'hasn\u2019t he ',
choice2: 'didn\u2019t he ',
choice3: 'has he',
choice4: 'did he',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n You prefer playing soccer to volley ball \u2026.?',
choice1: 'do you',
choice2: 'will you',
choice3: 'won\u2019t you',
choice4: 'don\u2019t you?',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n The cashier was r͟u͟d͟e͟ to his boss, \u2026?',
choice1: 'was he',
choice2: 'wasn\u2019t he',
choice3: 'did he',
choice4: 'didn\u2019t he',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n These days students are not very interested \u2026.improving their English.',
choice1: 'on',
choice2: 'about',
choice3: 'of',
choice4: 'in',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n Kofi ate \u2026food than anyone else.',
choice1: 'more ',
choice2: 'most ',
choice3: 'much',
choice4: 'too much',
choice5: 'nothing',
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
