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

Njoman and Putu then went to a quiet spot on the path where it crossed a small stream. A few women were bathing in the stream; some were washing clothes. They joked with Njoman, for they knew why he was there. Soon they saw Ragini approaching with a basket of fruits and vegetables on her head.

„Hello, Njoman,‟ she said, pretending not to know why he waited there with his best friend. „Hello Ragini. What did you buy in the market?‟ „Mostly fruits for rudjaks‟ (spicy salad). „Wait, Ragini‟, Njoman said as he stood up. „Putu will carry them for you. It is time for us to go off together and marry‟. Putu took the basket; Njoman took Ragini by the hand and said, „We shall go to my cousin‟s house in the next village‟.

As they were walking off, Ragini turned to the women and feigned distress. „Njoman is taking me away. What can I do?‟ In this way, according to Balinese tradition, Ragini submitted to her abductor.


Que 7 - 11
PASSAGE II

Apart from foods which supply us with energy, we need certain substances called protein to help us grow, and when we are fully grown, to maintain our strength. These proteins are found in meat, fish, eggs, milk, green vegetables and to a much lesser extent in grains like millet, wheat, guinea corn, rice, etc.

Children fed chiefly on roots will, therefore, stop growing. They often get very ill and die while children who are given milk and eggs grow well and live longer.

However, cow milk is expensive in West Africa and in many places there is a wrong tradition about eggs. Some old people say that if eggs are given to children they become liars. This is not true. Eggs do not make children either tell truth or lie. They are simply good food which will help the child to grow well. Also, the tradition that boys become thieves when they eat meat is not true. Both are bad traditions which have been repeated in some villages from one generation to another.

So, the intelligent mother who wishes to bring up healthy children must discard them.

*/
question: 'Read Passage I carefully and answer the question which follow\n\n Njoman was on the path because he wanted to.....',
choice1: 'cross the stream',
choice2: 'bath in the stream',
choice3: 'spy on the woman',
choice4: 'meet Ragini',
choice5: 'meet Putu',
answer: 4,
},
{
question: 'Read Passage I carefully and answer the question which follow\n\nHow did Ragini behave when she was invited by Njoman?',
choice1: 'She pretended she was in great pain and misery. ',
choice2: 'She talked to the women furiously',
choice3: 'She just walked off with her basket of fruits',
choice4: 'She greeted the women noisily',
choice5: 'She danced about with joy',
answer: 1,
},
{
question: 'Read Passage I carefully and answer the question which follow\n\nWhich of the following is not true according to the passage?',
choice1: 'The women teased Njoman',
choice2: 'Putu held Ragini‟s hand',
choice3: 'All the women definitely knew his reason for coming',
choice4: 'Njoman waited for sometime before Ragini arrived',
choice5: 'Njoman had a secret plan to follow',
answer: 2,
},
{
question: 'Read Passage I carefully and answer the question which follow\n\nThe expression pretending not to know means',
choice1: 'not knowing what to do',
choice2: 'behaving well after knowing',
choice3: 'behaving as if everybody knew what to say',
choice4: 'behaving as if one did not know something was happening',
choice5: 'not knowing how to behave.',
answer: 4,
},
{
question: 'Read Passage I carefully and answer the question which follow\n\nThe expression feigned distress means',
choice1: 'fainted upon seeing the women',
choice2: 'pretended to be upset and having pain',
choice3: 'pretended to be very hungry on seeing the fruits',
choice4: 'fell down with flushed face',
choice5: 'stood still and watched the women',
answer: 2,
},
{
question: 'Read Passage I carefully and answer the question which follow\n\nThe word abductor means',
choice1: 'a thief',
choice2: 'an armed robber',
choice3: 'a hijacker ',
choice4: 'a kidnapper ',
choice5: 'a murderer',
answer: 4,
},
{


question: 'Read Passage II carefully and answer the question which follow\n\nAccording to the passage, proteins ………………',
choice1: 'make us well satisfied',
choice2: 'help us grow well',
choice3: 'fill our bodies',
choice4: 'give us energy',
choice5: 'help to maintain our tradition',
answer: 2,
},
{
question: 'Read Passage II carefully and answer the question which follow\n\nWhich of the following statements is not true according to the passage?',
choice1: 'Children must eat roots only',
choice2: 'Old people think meat makes boys thieves',
choice3: 'Children who are given milk and eggs will grow well',
choice4: 'The intelligent mother has to do away with some bad traditions',
choice5: 'Grains do not contain much protein.',
answer: 1,
},
{
question: 'Read Passage II carefully and answer the question which follow\n\nCow milk is expensive means it is',
choice1: 'sweet ',
choice2: 'white ',
choice3: 'good ',
choice4: 'strong ',
choice5: 'dear',
answer: 5,
},
{
question: 'Read Passage II carefully and answer the question which follow\n\nWhat happens to children who are not given food containing proteins regularly?',
choice1: 'They often become liars.',
choice2: 'They often become thieves. ',
choice3: 'They often become ill.',
choice4: 'They should preserve tradition. ',
choice5: 'Their traditions often help them.',
answer: 3,
},
{
question: 'Read Passage II carefully and answer the question which follow\n\nWhat advice did the writer give to mothers?',
choice1: 'They should eat foods containing proteins',
choice2: 'They should accept traditions',
choice3: 'They should do away with bad traditions',
choice4: 'They should preserve traditions',
choice5: 'They should feed their children on roots and grains only',
answer: 3,
},
{


question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n Adiza‟s mother prepares very p͟a͟l͟a͟t͟a͟b͟l͟e͟ dishes',
choice1: 'expensive',
choice2: 'rich',
choice3: 'tasty',
choice4: 'colourful',
choice5: 'interesting',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n Sindi was b̲r̲o̲u̲g̲h̲t̲ ̲u̲p̲ by a very strict woman',
choice1: 'saved ',
choice2: 'reared ',
choice3: 'born ',
choice4: 'taught ',
choice5: 'beaten',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n Janet promised to a̲t̲t̲e̲n̲d̲ ̲t̲o̲ her mother-in-law who was ill.',
choice1: 'look after',
choice2: 'look at',
choice3: 'look into ',
choice4: 'look for ',
choice5: 'look on',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The printing company has over a thousand a͟g͟e͟n͟t͟s͟ here.',
choice1: 'vendors',
choice2: 'caretakers',
choice3: 'deputies',
choice4: 'correspondents',
choice5: 'representatives',
answer: 5,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The police Inspector asked all drivers to o͟b͟e͟y͟ the speed-limit regulations',
choice1: 'understand',
choice2: 'notice',
choice3: 'recognize',
choice4: 'observe',
choice5: 'answer',
answer: 4,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n It is very difficult for many workers to m̲a̲k̲e̲ ̲e̲n̲d̲s̲ ̲m̲e̲e̲t̲.̲',
choice1: 'do two jobs at a time',
choice2: 'make workers and managers come together',
choice3: 'live within their means',
choice4: 'feed two people',
answer: 3, 
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n Since the thief came out of prison he has t̲u̲r̲n̲e̲d̲ ̲o̲v̲e̲r̲ ̲a̲ ̲n̲e̲w̲ ̲l̲e̲a̲f̲.̲ This means he has',
choice1: 'changed his style of stealing',
choice2: 'started growing flowers',
choice3: 'changed for the better',
choice4: 'grown even more stubborn',
choice5: 'got a new job',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n When the army stormed the village, all the inhabitants t̲o̲o̲k̲ ̲t̲o̲ ̲t̲h̲e̲i̲r̲ ̲h̲e̲e̲l̲s̲.̲ This means ……..',
choice1: 'the army came to the village in the storm',
choice2: 'the inhabitants were frightened and stood still',
choice3: 'the inhabitants had their shoes removed',
choice4: 'the inhabitants danced around on their heels',
choice5: 'the inhabitants were frightened and so ran away',
answer: 5,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n Berko is in t̲w̲o̲ ̲m̲i̲n̲d̲s̲ about resigning from his job.\nThis means that Berko has',
choice1: 'not really decided to resign ',
choice2: 'written his resignation letter ',
choice3: 'decided not to resign',
choice4: 'withdrawn his resignation letter',
choice5: 'been advised to resign',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n\n The teacher advised Kofi not to b̲e̲a̲t̲ ̲a̲b̲o̲u̲t̲ ̲t̲h̲e̲ ̲b̲u̲s̲h̲.̲ This means Kofi was asked to ………….',
choice1: 'clear the bush',
choice2: 'beat others in the bush ',
choice3: 'go straight to the point ',
choice4: 'waste no more time',
choice5: 'stop clearing the bush',
answer: 3,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n He s͟e͟l͟d͟o͟m͟ comes here.',
choice1: 'never',
choice2: 'sometimes',
choice3: 'rarely ',
choice4: 'nearly ',
choice5: 'always',
answer: 5,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The police office was h̲a̲r̲s̲h̲ ̲o̲n̲ the criminal',
choice1: 'soft to',
choice2: 'lenient with',
choice3: 'mild with',
choice4: 'cruel to',
choice5: 'rough',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Musa was arrested for printing c͟o͟u͟n͟t͟e͟r͟f͟e͟i͟t͟ cedi notes',
choice1: 'correct',
choice2: 'new',
choice3: 'acceptable',
choice4: 'genuine',
choice5: 'fine',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n My father was a very s͟t͟o͟u͟t͟ man',
choice1: 'handsome',
choice2: 'short ',
choice3: 'lean ',
choice4: 'ill',
choice5: 'weak',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n I a̲g̲r̲e̲e̲d̲ ̲t̲o̲ everything Lucy said.',
choice1: 'mocked at',
choice2: 'stood by',
choice3: 'interfered with',
choice4: 'took in',
choice5: 'objected to',
answer: 5,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  Help him to pay his fees, …………?',
choice1: 'will you ',
choice2: 'must you ',
choice3: 'can‟t you ',
choice4: 'won‟t you',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  Kwasi, you are coming to see me tomorrow, ………….?',
choice1: 'isn‟t it',
choice2: 'aren‟t you',
choice3: 'won‟t you',
choice4: 'don‟t you',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  If Mary had known she wouldn‟t have come, ……….?',
choice1: 'wasn‟t it ',
choice2: 'hadn‟t she ',
choice3: 'did she',
choice4: 'would she',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  She dances so beautifully, …………..?',
choice1: 'not so',
choice2: 'can‟t she',
choice3: 'doesn‟t she',
choice4: 'isn‟t it',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  JSS students work hard, ………?',
choice1: 'don‟t they',
choice2: 'shouldn‟t they',
choice3: 'can‟t they',
choice4: 'haven‟t they',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  The chief with his linguists ………..coming to the durbar ground.',
choice1: 'is ',
choice2: 'are ',
choice3: 'were',
choice4: 'have been',
choice5: 'nothing',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  Most people find it hard to live up ………..their ideals',
choice1: 'by ',
choice2: 'to ',
choice3: 'for',
choice4: 'with',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  The football match was put ……..until next week.',
choice1: 'in ',
choice2: 'out ',
choice3: 'off',
choice4: 'away',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  These days, students are not keen ……..improving their English.',
choice1: 'with',
choice2: 'of',
choice3: 'about',
choice4: 'on',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  When the plane arrived Kofi ………nowhere to be found.',
choice1: 'will be',
choice2: 'had been',
choice3: 'was',
choice4: 'would have been',
choice5: 'nothing',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  The boys swore that the books were ………..',
choice1: 'his',
choice2: 'theirs ',
choice3: 'their‟s ',
choice4: 'theirs‟',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  Unless your father reports at the police station we …………all be whipped',
choice1: 'will',
choice2: 'shall',
choice3: 'should',
choice4: 'would',
choice5: 'nothing',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  The bell will go ………the next ten minutes',
choice1: 'between',
choice2: 'under',
choice3: 'from within',
choice4: 'within',
choice5: 'nothing',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n  The heavy rains have ……….early this year.',
choice1: 'set in ',
choice2: 'set out ',
choice3: 'set up ',
choice4: 'set on',
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
