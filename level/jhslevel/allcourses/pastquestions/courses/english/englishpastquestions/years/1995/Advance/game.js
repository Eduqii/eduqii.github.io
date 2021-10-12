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
SECTION A COMPREHENSION

Read the following passages carefully and answer the questions which follow

PASSAGE I
Where is the performance of songbirds held? It is not in any concert hall but rather on trees, fences and telephone wires. It is from these places that the little feathered creatures blend their voice in one of the most delightful songs in the world.

Songbirds do not just make noise. The male voices in the choir for instance, have two messages.

First, it is a warning to other males not to come near. Secondly, it is an invitation from the bachelors to the female birds. The most vigorous and interesting songs can be heard during breeding season to impress the lady birds.

Songbirds are very remarkable. They can sing three or four notes at once. To the human ear, these sound like one continuous note, but birds can tell the difference because of their keen sense of hearing. At times, what we hear may not be the true song of our winged friends but simply a call to keep flocks together. It may also be warning others of an approaching danger.

Just how birds learn and invent their songs is an interesting subject. Some have their songs fixed in their brains by the time of birth. Other birds, however, try to invent their own unique songs. They will never copy what they hear others sing.


PASSAGE II
Locusts are descending\u2019 was joyfully chanted everywhere. Men, women and children left their work or their play and ran into the open to see the unfamiliar sight. The locusts had not come for many years, and only the old people had seen them before.

At first, a fairly small swarm came. And then, there appeared a slow-moving mass like a sheet of black cloud drifting towards the villages. Soon it covered half the sky. It was an amazing sight full of power and beauty.

Everyone was now about praying that the locust should stay in the village for the night. Although most people had never seen locusts before, they knew by instinct that they were good to eat. At last they descended. They settled on roofs and covered the bare ground. Tree branches broke under them and the whole village turned to brown earth colour with locusts.

Many people who went out with baskets trying to catch them were advised to wait until nightfall. And they were right. The locusts settled in the bushes for the night and their wings became wet with dew. Then all the village folks turned out, in spite of the cold harmattan, to fill their bags and pots with locusts. The next morning they were roasted and spread in the sun until they became dry. For many days after, this rare food was mixed with oil and eaten with relish.

*/		
question: 'Read Passage I carefully and answer this question\n According to the passage, members of the chorus can sing without any difficulty because they \u2026.',
choice1: 'have to sing',
choice2: 'easily learn to sing',
choice3: 'have good songs',
choice4: 'are born good singers',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n The male songbirds sing to \u2026.',
choice1: 'encourage others ',
choice2: 'attract the females ',
choice3: 'entertain others',
choice4: 'praise nature',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\n The most interesting songs are produced',
choice1: 'during competitions',
choice2: 'in the morning',
choice3: 'during mating periods',
choice4: 'in the evening',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\n Unique in the passage means',
choice1: 'suitable ',
choice2: 'similar ',
choice3: 'exciting ',
choice4: 'special',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\n According to the passage which of the following is true? Birds \u2026',
choice1: 'are impressive',
choice2: 'are awesome',
choice3: 'make too much noise',
choice4: 'are ridiculous',
answer: 2,
},
{

question: 'Read Passage II carefully and answer this question\nMost of the village people were excited about the coming of the locusts because they \u2026',
choice1: 'were moving slowly ',
choice2: 'had come in a swarm ',
choice3: 'were not common',
choice4: 'had covered the sky',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nWhy was it easier to catch the locusts in the night? Because the locusts \u2026',
choice1: 'could not fly',
choice2: 'were settling down ',
choice3: 'did not like darkness ',
choice4: 'were feeling sleepy',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage, the locust were',
choice1: 'brown ',
choice2: 'black ',
choice3: 'blind ',
choice4: 'bold',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nTurned out in the passage means',
choice1: 'played outside',
choice2: 'slept out',
choice3: 'cried aloud',
choice4: 'came out',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following expressions from the passage indicates that there were a lot of locusts?',
choice1: 'amazing sight',
choice2: 'fairly small swarm',
choice3: 'unfamiliar sight',
choice4: 'slow-moving mass',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage, which of the following is not true?',
choice1: 'Locusts are delicious',
choice2: 'Only the aged knew about the locusts',
choice3: 'The locusts come only in the dry season',
choice4: 'The locusts created a beautiful sight',
answer: 3,
},
{
//SECTION B



question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The government has b͟a͟n͟n͟e͟d͟ the use of hard drugs in the country.',
choice1: 'destroyed',
choice2: 'forbidden',
choice3: 'controlled',
choice4: 'reduced',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'Our Headmaster invited many p͟r͟o͟m͟i͟n͟e͟n͟t͟ citizens to our speech day.',
choice1: 'known',
choice2: 'popular',
choice3: 'distinguished',
choice4: 'good',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The dry season is i͟m͟m͟i͟n͟e͟n͟t͟.',
choice1: 'very close ',
choice2: 'partly over ',
choice3: 'severe',
choice4: 'gone',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The meeting was p͟o͟s͟t͟p͟o͟n͟e͟d͟ to another date.',
choice1: 'cancelled ',
choice2: 'removed ',
choice3: 'called',
choice4: 'shifted',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The man was f͟u͟r͟i͟o͟u͟s͟ when his son failed the examination.',
choice1: 'angry',
choice2: 'anxious',
choice3: 'shocked',
choice4: 'frightened',
answer: 1, 
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'By the end of the lesson, we were c̲o̲m̲p̲l̲e̲t̲e̲l̲y̲ ̲a̲t̲ ̲s̲e̲a̲.̲ This means that we were \u2026..',
choice1: 'fast asleep',
choice2: 'totally confused ',
choice3: 'quite disturbed ',
choice4: 'very inspired',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'She did her best to k̲e̲e̲p̲ ̲o̲n̲ ̲t̲h̲e̲ ̲r̲i̲g̲h̲t̲ ̲s̲i̲d̲e̲ of her teacher. This means she did her best not to \u2026.her teacher.',
choice1: 'interrupt',
choice2: 'mislead',
choice3: 'misunderstand',
choice4: 'offend',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Y̲o̲u̲ ̲s̲h̲o̲u̲l̲d̲n̲\u2019̲t̲ ̲h̲a̲v̲e̲ ̲h̲i̲t̲ ̲K̲u̲u̲k̲u̲ ̲s̲o̲ ̲h̲a̲r̲d̲; it was rather unkind of you. From this we know that Kuuku was',
choice1: 'being naughty',
choice2: 'hurt ',
choice3: 'kind ',
choice4: 'hit',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'I̲f̲ ̲w̲e̲ ̲h̲a̲d̲n̲\u2019̲t̲ ̲g̲o̲n̲e̲ ̲t̲o̲ ̲t̲h̲e̲ ̲b̲e̲a̲c̲h̲ ̲s̲o̲ ̲e̲a̲r̲l̲y̲,̲ ̲w̲e̲ ̲w̲o̲u̲l̲d̲ ̲h̲a̲v̲e̲ ̲m̲e̲t̲ ̲o̲u̲r̲ ̲v̲i̲s̲i̲t̲o̲r̲ . This means that \u2026\u2026.',
choice1: 'we went to the beach late', 
choice2: 'we did not meet our visitor', 
choice3: 'our visitor waited for us',
choice4: 'we met our visitor at the beach',
answer: 2,
},
{

//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'There are guards on our border because the government wants to e̲l̲i̲m̲i̲n̲a̲t̲e̲ smuggling.',
choice1: 'notice',
choice2: 'manage with',
choice3: 'encourage',
choice4: 'investigate',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'The candidate worked the problem with a great deal of p̲r̲e̲c̲i̲s̲i̲o̲n̲.̲',
choice1: 'sense',
choice2: 'energy',
choice3: 'inaccuracy',
choice4: 'detail',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'My grandmother likes o̲l̲d̲ ̲f̲a̲s̲h̲i̲o̲n̲e̲d̲ clothes.',
choice1: 'special',
choice2: 'decorated',
choice3: 'modern',
choice4: 'stylish',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'I am going to a͟r͟r͟a͟n͟g͟e͟ the books in the cupboard.',
choice1: 'display',
choice2: 'scatter',
choice3: 'list',
choice4: 'spill',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'Most of the men were s͟a͟c͟k͟e͟d͟ by the company.',
choice1: 'used',
choice2: 'punished',
choice3: 'warned employed',
choice4: 'employed',
answer: 4,
},
{
//SECTION E 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'It\u2019s a pity I have hardly \u2026..food to give you.',
choice1: 'a little',
choice2: 'too much',
choice3: 'some',
choice4: 'any',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I was given \u2026money than you were given.',
choice1: 'much more',
choice2: 'many',
choice3: 'much',
choice4: 'many more',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The book you gave me was not \u2026..than the one I had before.',
choice1: 'any better',
choice2: 'much better',
choice3: 'any good',
choice4: 'very better',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Are you sure \u2026.shirts on that table were the ones I gave you?',
choice1: 'that ',
choice2: 'these ',
choice3: 'those ',
choice4: 'some',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Give me the book \u2026.I lent you yesterday.',
choice1: 'whom',
choice2: 'what',
choice3: 'whose',
choice4: 'which',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Of the three girls, Awo is the \u2026\u2026..',
choice1: 'shorter',
choice2: 'more shortest',
choice3: 'most short',
choice4: 'shortest',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The soldier was promoted because he was the \u2026..among the lot.',
choice1: 'most courageous',
choice2: 'courageous',
choice3: 'more courageous',
choice4: 'much courageous',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Your nephew could not pass the interview because he was not \u2026..before the panel members.',
choice1: 'confident much',
choice2: 'confident quite',
choice3: 'confident enough',
choice4: 'confident somehow',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Mr Amakye has been robbed \u2026his property',
choice1: 'from',
choice2: 'for ',
choice3: 'by ',
choice4: 'of',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The patient went \u2026.a lot of body exercises',
choice1: 'in out',
choice2: 'out',
choice3: 'through',
choice4: 'ahead',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Can I have a chat \u2026..you?',
choice1: 'to',
choice2: 'with ',
choice3: 'by ',
choice4: 'on',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Kwesi learnt harder so he \u2026..the examination',
choice1: 'passed',
choice2: 'would have passed',
choice3: 'can pass',
choice4: 'passes',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Let\u2019s go out and play\u2026\u2026.?',
choice1: 'will we',
choice2: 'do we',
choice3: 'would we',
choice4: 'shall we',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Can I come to your house on Saturday,\u2026\u2026?',
choice1: 'all right ',
choice2: 'of course ',
choice3: 'certainly ',
choice4: 'please',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'You aren\u2019t hungry, are you?',
choice1: 'No, you aren\u2019t',
choice2: 'Yes, I am not',
choice3: 'No, I am not',
choice4: 'No, I am',
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
