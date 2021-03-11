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
  
question: '	From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n The jury acquitted the man …………murder.',

choice1:'from',
choice2: ' of',
choice3:' on',
choice4: 'with',
answer: 2,
}, 
{
question: '	From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n Ama’s essay is superior ……………that of Adzo.',

choice1:'from',
choice2: ' over',
choice3:' than',
choice4: 'to',
answer: 4,
}, 
{
question: '	From the alternatives lettered A to D, choose the one which most suitably completes each sentence\n\n I would study hard for the examination if I ……..you.',

choice1:'am',
choice2: ' be',
choice3:' was',
choice4: 'were',
answer: 4,
}, 
{
question: '	From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n I cannot tell you …………',

choice1:'what about the story is',
choice2: ' what about is the story',
choice3:' what is the story about',
choice4: 'what the story is about',
answer: 4,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nThat troublesome friend of ………is here again.',

choice1:'he',
choice2: ' him',
choice3:' his',
choice4: 'himself',
answer: 3,

}, 
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nI told you to leave my office, …….I?',

choice1:'aren’t',
choice2: ' didn’t',
choice3:' don’t',
choice4: 'wasn’t',
answer: 2,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nKofi travelled five days ……….',

choice1:'ago',
choice2: ' hence',
choice3:' now',
choice4: 'since',
answer: 1,


}, 
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nKwame’s uncle, with his three friends, ………coming home tomorrow.',

choice1:'are',
choice2: ' is',
choice3:' were',
choice4: 'would be',
answer: 2,

}, 
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nI am afraid I cannot make you ……….',

choice1:'in',
choice2: ' on',
choice3:' out',
choice4: 'up',
answer: 3,

}, 
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nThe plane takes ……….at noon.',

choice1:'from',
choice2: ' of',
choice3:' off',
choice4: 'to',
answer: 3,

 
},
{ 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\nPlease, can I have ………….salt in my soup?',

choice1:'little more',
choice2: ' a few more',
choice3:' a little more',
choice4: 'few more',
answer: 3,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n I wish I …………my friend next week.',

choice1:'can visit',
choice2: ' am visiting',
choice3:' shall visit',
choice4: 'could visit',
answer: 4,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n By September 2007, I …………….school for nine years.',

choice1:'had attended',
choice2: ' have attended',
choice3:' have been attending',
choice4: 'shall have attended',
answer: 1,

 
},
{

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n ……………….Aso runs short of money, what would she do?',

choice1:'If',
choice2: ' In case',
choice3:' Should',
choice4: 'Were',
answer: 1,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n Human beings will not live forever, ………………?',

choice1:'will they',
choice2: ' isn’t it',
choice3:' does it',
choice4: 'shall they',
answer: 1,

 
},
{ 

 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n I saw Esi ……………a new pair of shoes.',

choice1:'bought',
choice2: ' buy',
choice3:' buys',
choice4: 'to buy',
answer: 2,

 
},
{ 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence \n\n Let us have a cup of tea, ……………?',

choice1:'do we',
choice2: ' shall we',
choice3:' should we',
choice4: 'would we',
answer: 2,

 
},
{ 
 

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n he headteacher’s arrival in the classroom was s̲u̲d̲d̲e̲n̲.̲',

choice1:'quick',
choice2: ' strange',
choice3:' unexpected',
choice4: 'Unusual',
answer: 3,

 
},
{ 
 

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n It is r͟u͟d͟e͟ to talk loudly in the presence of elderly people.',

choice1:'impolite',
choice2: ' incorrect',
choice3:' improper',
choice4: 'unwise',
answer: 1,

 
},
{ 

 

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The pupils g͟r͟u͟m͟b͟l͟e͟d͟ about the assignment.',

choice1:'bothered',
choice2: ' complained',
choice3:' talked',
choice4: 'questioned',
answer: 2,

 
},
{ 

 

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The victim could not i͟d͟e͟n͟t͟i͟f͟y͟ the thief.',

choice1:'discover',
choice2: ' find',
choice3:' know',
choice4: 'recognize',
answer: 4,
}, 
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Armed robbery is a very r͟i͟s͟k͟y͟ undertaking.',

choice1:'dangerous',
choice2: ' dreadful',
choice3:' unacceptable',
choice4: 'uncertain',
answer: 1,

 
},
{ 

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n F̲o̲r̲ ̲a̲l̲l̲ ̲h̲i̲s̲ ̲b̲r̲i̲l̲l̲i̲a̲n̲c̲e̲, Kofi could not solve the problem. This means that Kofi failed to solve the problem',

choice1:'as he was clever enough',
choice2: ' even though he was clever',
choice3:' as he was too clever',
choice4: 'for he was still clever',
answer: 2,
}, 
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n The manager’s decision on the matter i̲s̲ ̲c̲u̲t̲ ̲a̲n̲d̲ ̲d̲r̲i̲e̲d̲.̲ This means that the manager’s decision is',

choice1:'clear',
choice2: ' simple',
choice3:' unchangeable',
choice4: 'unknown',
answer: 3,

 
},
{ 

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Abla made a̲n̲ ̲a̲s̲s̲ ̲o̲f̲ ̲h̲e̲r̲s̲e̲l̲f̲ at the party. This means that Abla behaved',

choice1:'foolishly',
choice2: ' shamefully',
choice3:' uncontrollably',
choice4: 'unpleasantly',
answer: 1,

}, 
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n In spite of his boasting, Mensah proved to a̲ ̲c̲h̲i̲c̲k̲e̲n̲-̲h̲e̲a̲r̲t̲e̲d̲ ̲f̲e̲l̲l̲o̲w̲.̲ This means that Mensah was',

choice1:'cowardly',
choice2: ' mean',
choice3:' stupid',
choice4: 'weak',
answer: 1,

},
{ 
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n Efua can always t̲a̲l̲k̲ ̲h̲e̲r̲ ̲w̲a̲y̲ ̲o̲u̲t̲ of trouble. This means that Efua',

choice1:'is troublesome',
choice2: ' can defend herself',
choice3:' can avoid trouble',
choice4: 'is talkative',
answer: 2,
}, 
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n My friends w͟e͟l͟c͟o͟m͟e͟d͟ my suggestion.',

choice1:'changed',
choice2: ' discussed',
choice3:' disliked',
choice4: 'rejected',
answer: 4,
}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n Unlike his sister, Ackah is s̲t̲i̲n̲g̲y̲.̲',

choice1:'friendly',
choice2: ' generous',
choice3:' selfless',
choice4: 'sympathetic',
answer: 2,
}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n Serwa’s dress was d̲e̲c̲e̲n̲t̲.̲',

choice1:'dirty',
choice2: ' old',
choice3:' shabby',
choice4: 'ugly',
answer: 3,

}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n It is c̲o̲m̲p̲u̲l̲s̲o̲r̲y̲ for all pupils to be in school uniform for the ceremony.',

choice1:'considerate',
choice2: ' optional',
choice3:' unnecessary',
choice4: 'expected',
answer: 2,
}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n Aminata is b̲o̲a̲s̲t̲f̲u̲l̲ about her beauty.',

choice1:'careless',
choice2: ' humble',
choice3:' modest',
choice4: 'uneasy',
answer: 3,

}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence \n\n A metaphor achieves the same effect as a/an ……………',

choice1:'alliteration.',
choice2: ' metonymy.',
choice3:' paradox.',
choice4: 'simile.',
answer: 4,
}, 
{
question: 'One of the following gives a clue to a character’s nature:',

choice1:'what he thinks',
choice2: ' how he feels',
choice3:' what he says',
choice4: 'how he moves about',
answer: 1,

}, 
{

question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' +  '\n\n The dominant sound device used in the extract is',

choice1:'alliteration.',
choice2: ' onomatopoeia.',
choice3:' pun.',
choice4: 'rhyme.',
answer: 1,

}, 
{
question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' +  '\n\n The device in the extract helps to express the',

choice1:'silence of the sea.',
choice2: ' smoothness of the movement.',
choice3:' whiteness of the foam.',
choice4: 'fairness of the weather.',
answer: 2,

 
},
{ 


question: 'A good novel or play both entertains and',

choice1:'condemns.',
choice2: ' preaches.',
choice3:' teaches.',
choice4: 'warns.',
answer: 3,

 
},
{ 

 

question: 'A character that develops in a play or novel in the course of the work is known as',

choice1:'complete.',
choice2: ' flat.',
choice3:' round.',
choice4: 'sound',
answer: 3,


}, 
{
question: 'Which of the following best help(s) to develop the plot of a novel or play?',

choice1:'Characters',
choice2: ' Literary devices',
choice3:' Setting',
choice4: 'Style',
answer: 1,

 
},
{ 

 

question: 'A lyric is usually fairly short and',

choice1:'tells a short story.',
choice2: ' praises a dead person.',
choice3:' expresses thoughts and feelings.',
choice4: 'is sung to send a child to sleep.',
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

		return window.location.assign('end.php') 
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
