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
Once, in the world of animals, there was a great famine and the animals were dying. For about three months, Tortoise and his family had eaten very little. Tortoise‟s body rattled in his empty shell as he walked. One day as he thought of a way to get food, his throat began to itch.

He would go to the next village where he had heard there was still some food. He would steal some for himself and his family. He took the bush path and arrived at the village after sunset. The people were preparing their meals and the smell made his mouth water.

How would he get this food? Not far away from him was the village playground where there was a big hollow log leaning against a tree. This log was the drum used to summon the villagers for very important announcements. When he reached the tree he decided to climb it so that he could see the village better. Unfortunately, as he was climbing, he fell because he was very weak and hungry. His shell hit the drum, sending out a loud „kpom! kpom! noise.

When they heard this noise, the villagers ran to the playground, believing they had been called, thereby leaving the food cooking in their homes.

Very quickly Tortoise disappeared into a nearby bush and ran to the village. He filled his empty shell with as much of the food as he could carry and returned home.

Que 6 - 10 

PASSAGE II

In the centre of the town, the town clock chimed two o‟clock. In an abandoned house on the outskirts of the town an owl hooted as if to signal to Sergeant Abora and Constable Abaidoo to wake up from slumber. They had patrolled the town for hours and were heavy with sleep. The night was very dark and so cold that in spite of his thick overcoat, the Sergeant‟s teeth were chattering. He was about to speak when he heard a faint sound down the road that led to the town. Abaidoo also picked the sound. Both listened attentively and realized that a late traveller was coming up the road. They took cover behind two opposing trees. As he reached where Abaidoo was hiding, the traveller stumbled over what looked like the root of a tree.

Then Constable Abaidoo quickly flashed his torchlight and bawled out, „Stop or I shoot!‟ Abora‟s gun was also held in readiness. The traveller who carried a heavy load on his left shoulder panicked, dropping his cutlass in the process.

„Who are you? Where are you from? What‟s in your bag? Speak out or I shoot! We‟ve got you at last!‟ Abora exclaimed.

Trembling with fear and stammering for words the traveller gave his name as Nsiah. He was returning from
Fosa with a bag of plantain and cassava.
But his cutlass and bag, both dripping with blood, gave him away. After a search the police found a human head and triumphantly marched him to the police station.

*/		

question: 'Read Passage I carefully and answer the question which follow\nThere was famine means that ',
choice1: 'all the animals died ',
choice2: 'food was scarce',
choice3: 'there were no farmers',
choice4: 'food was not cold',
answer: 2,
},
{
question: 'Read Passage I carefully and answer the question which follow\nWhich of the following statements is true?',
choice1: 'Tortoise had not eaten for three months',
choice2: 'The villagers gave food to Tortoise ',
choice3: 'Tortoise got food from his own farm ',
choice4: 'Tortoise stole the villagers‟ food.',
answer: 4,
},
{
question: 'Read Passage I carefully and answer the question which follow\nTortoise arrived at the nearby village',
choice1: 'at sunset',
choice2: 'in the night',
choice3: 'at dawn',
choice4: 'in the afternoon',
answer: 2,
},
{
question: 'Read Passage I carefully and answer the question which follow\nThe villagers went to the playground because',
choice1: 'they wanted to find out who made the noise',
choice2: 'they wanted to hear an announcement',
choice3: 'Tortoise had fallen',
choice4: 'the drum had fallen',
answer: 2,
},
{
question: 'Read Passage I carefully and answer the question which follow\nThe villagers did not see Tortoise at the playground because he',
choice1: 'ate fast',
choice2: 'hid in the drum ',
choice3: 'stole their food ',
choice4: 'hid in the bush',
answer: 4,
},
{

question: 'Read Passage II carefully and answer the question which follow\nAbora‟s teeth chattered because',
choice1: 'he had a toothache ',
choice2: 'the night was cold ',
choice3: 'he wore a cloak',
choice4: 'the owl hooted',
answer: 2,
},
{
question: 'Read Passage II carefully and answer the question which follow\nFrom the beginning the police knew where the traveller was when',
choice1: 'he made a noise ',
choice2: 'the blood dripped ',
choice3: 'he stammered',
choice4: 'the torchlight flashed',
answer: 1,
},
{
question: 'Read Passage II carefully and answer the question which follow\nSergeant Abora and Corporal Abaidoo hid themselves in order to',
choice1: 'keep warm',
choice2: 'avoid being seen ',
choice3: 'load their guns ',
choice4: 'have some sleep',
answer: 2,
},
{
question: 'Read Passage II carefully and answer the question which follow\nSergeant Abora and Corporal Abaidoo hid themselves in order to',
question: 'The police arrested the late traveller',
choice1: 'behind the trees',
choice2: 'near the police station',
choice3: 'in the centre of the town',
choice4: 'near the town',
answer: 4,
},
{
question: 'Read Passage II carefully and answer the question which follow\nSergeant Abora and Corporal Abaidoo hid themselves in order to',
question: '„… gave him away‟ in the passage means',
choice1: 'frightened him',
choice2: 'warned him ',
choice3: 'exposed him ',
choice4: 'disgraced him',
answer: 3,
},
{
//SECTION B



question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nMary‟s mother is c͟o͟n͟f͟i͟d͟e͟n͟t͟ that her daughter will win a prize.',
choice1: 'anxious',
choice2: 'proud',
choice3: 'certain',
choice4: 'determined',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe troops r͟e͟t͟r͟e͟a͟t͟e͟d͟ when they were attacked.',
choice1: 'escaped ',
choice2: 'scattered ',
choice3: 'fought',
choice4: 'withdrew',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nOur teacher advised us to be c͟o͟u͟r͟t͟e͟o͟u͟s͟ always.',
choice1: 'punctual',
choice2: 'mannerly',
choice3: 'hard-working',
choice4: 'kind',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nAll latecomers were p͟r͟o͟m͟p͟t͟l͟y͟ punished.',
choice1: 'immediately ',
choice2: 'mercilessly ',
choice3: 'roughly',
choice4: 'severely',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n We should all learn to r͟e͟s͟t͟r͟a͟i͟n͟ our anger.',
choice1: 'avoid ',
choice2: 'control ',
choice3: 'apply',
choice4: 'delay',
answer: 2,
},
{
//SECTION C



question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n The two brothers are always quarrelling; they never s̲e̲e̲ ̲e̲y̲e̲ ̲t̲o̲ ̲e̲y̲e̲.\n This means they do not ……….each',
choice1: 'agree with',
choice2: 'admire ',
choice3: 'respect ',
choice4: 'trust',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nYou must be o̲f̲f̲ ̲y̲o̲u̲r̲ ̲h̲e̲a̲d̲ if you really believe that the moon is a huge cake. This means that you must be',
choice1: 'crazy',
choice2: 'joking',
choice3: 'unintelligent',
choice4: 'dreaming',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nAmale does not earn much, but she has some money p̲u̲t̲ ̲b̲y̲.̲ This means Amale has some money',
choice1: 'to live on',
choice2: 'for charity',
choice3: 'saved for the future',
choice4: 'to pay her children‟s fees',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nSeveral passengers were killed in the accident, but the driver escaped by the s̲k̲i̲n̲ ̲o̲f̲ ̲h̲i̲s̲ ̲t̲e̲e̲t̲h̲.̲ This means that the driver',
choice1: 'missed death narrowly',
choice2: 'lost all his teeth',
choice3: 'ran into the bush',
choice4: 'had only a scratch on his skin',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nWhen the armed robbers could no longer fight the police, they g̲a̲v̲e̲ ̲i̲n̲.̲ This means the armed robbers',
choice1: 'fled',
choice2: 'surrendered',
choice3: 'shot themselves',
choice4: 'cried for help',
answer: 2,
},
{
//SECTION D


question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe prefect was c͟o͟m͟m͟e͟n͟d͟e͟d͟ for his good work.',
choice1: 'admired ',
choice2: 'promoted ',
choice3: 'rejected ',
choice4: 'rebuked',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe teacher‟s s͟t͟e͟r͟n͟ looks helped maintain discipline in the class.',
choice1: 'proud',
choice2: 'indifferent',
choice3: 'friendly',
choice4: 'concerned',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nOur Assemblyman has d͟e͟c͟l͟i͟n͟e͟d͟ our invitation to talk to us.',
choice1: 'regretted',
choice2: 'denied ',
choice3: 'rejected ',
choice4: 'accepted',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThough her friend asked for some water, Divine c͟a͟l͟l͟o͟u͟s͟l͟y͟ drank all of it.',
choice1: 'mercifully',
choice2: 'greedily',
choice3: 'playfully',
choice4: 'intentionally',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nRain makes the soil m͟o͟i͟s͟t͟ for planting',
choice1: 'fertile ',
choice2: 'loose ',
choice3: 'solid',
choice4: 'dry',
answer: 4,
},
{
//SECTION E


question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe students can go home when they ……………..the work',
choice1: 'had finished',
choice2: 'finished',
choice3: 'finish',
choice4: 'will finish',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nMost people are not kind to animals, ……………?',
choice1: 'weren‟t they',
choice2: 'isn‟t it',
choice3: 'wasn‟t it',
choice4: 'are they',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAfua ………….her clothes on the line to dry.',
choice1: 'hung ',
choice2: 'folded ',
choice3: 'hang',
choice4: 'stretched',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nKwesi went to school after he …………his teeth.',
choice1: 'had brushed ',
choice2: 'has brushed ',
choice3: 'brushing',
choice4: 'brushed',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nKate is the …………..pupil in her class.',
choice1: 'well-behaved',
choice2: 'more well-behaved ',
choice3: 'very well-behaved ',
choice4: 'most well-behaved',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nA bag of money, with some documents, …………stolen from the car.',
choice1: 'were ',
choice2: 'are ',
choice3: 'was',
choice4: 'have been',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIt is necessary sometimes to resort ………..violence.',
choice1: 'through',
choice2: 'to',
choice3: 'into',
choice4: 'with',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nClara understood all ……………her teacher taught.',
choice1: 'what ',
choice2: 'which ',
choice3: 'that',
choice4: 'this',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAli agrees that the rice project is …………..good',
choice1: 'so',
choice2: 'much',
choice3: 'too',
choice4: 'very',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nCharles does not expect ………….his teacher today.',
choice1: 'seeing',
choice2: 'having seen ',
choice3: 'being seen ',
choice4: 'to see',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nKweku thinks that life is difficult ………….you are old.',
choice1: 'if',
choice2: 'while ',
choice3: 'when ',
choice4: 'as',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nMany countries ………….the world use English',
choice1: 'across',
choice2: 'inside',
choice3: 'by',
choice4: 'on',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nDo you like this dress? I made …………….myself.',
choice1: 'for',
choice2: 'that',
choice3: 'which',
choice4: 'it',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAshanti Goldfields is the ………………of gold',
choice1: 'nation‟s producer largest ',
choice2: 'largest nation‟s producer ',
choice3: 'producer nation‟s largest ',
choice4: 'nation‟s largest producer',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nNeither Kwesi nor Yaw …………….. there when I got to the house.',
choice1: 'are',
choice2: 'is',
choice3: 'was',
choice4: 'were',
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
