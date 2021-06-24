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
  question: 'Our teacher was late for school because he ……..a flat tyre.',


choice1: 'had',
choice2: 'will have',
choice3: 'is having',
choice4: 'has',
answer: 1,
},
{
question: 'We had dinner at a Chinese restaurant where I ………….fried chicken.',

choice1: 'am enjoying',
choice2: 'will enjoy',
choice3: 'enjoyed',
choice4: 'would enjoy',
answer: 3,
},
{ 

question: 'Ama’s father asked her to choose …………John and William.',

choice1: 'among',
choice2: 'from',
choice3: 'with',
choice4: 'between',
answer: 4,
},
 {

question: 'Willie has malaria and is not ………..enough to go to school.',

choice1: 'good',
choice2: 'well',
choice3: 'fine',
choice4: 'free',
answer: 2,
},
{

 
question: 'The school band …………two days a week.',

choice1: 'practise',
choice2: 'are practicing',
choice3: 'practises',
choice4: 'were practising',
answer: 3,

question: 'Philomena ………passed the examination if she had tried harder.',

choice1: 'could have',
choice2: 'will have',
choice3: 'may have',
choice4: 'could',
answer: 1, 

question: 'The law was passed according to strict legal ………….',

choice1: 'cases',
choice2: 'principles',
choice3: 'rules',
choice4: 'issues',
answer: 2,
},
 {

question: 'The book, as well as several others, ………..interesting reading.',

choice1: 'makes',
choice2: 'are to make',
choice3: 'are making',
choice4: 'make',
answer: 1,

question: '……………….. Joe scored the first goal, he was injured in the process.',

choice1: 'But',
choice2: 'Nevertheless',
choice3: 'Although',
choice4: 'Furthermore',
answer: 3,
},
 {

question: 'Neither Kojo nor his friend ……… the issue clearly.',

choice1: 'understands',
choice2: 'have understood',
choice3: 'understand',
choice4: 'is understanding',
answer: 1,
},
{
 
question: 'The ………..centre is located on the hill.',

choice1: 'womens’',
choice2: 'woman',
choice3: 'womans’',
choice4: 'women’s',
answer: 4,
},
{
question: 'One of the cows …………from the herd.',

choice1: 'has strayed',
choice2: 'have strayed',
choice3: 'have been strayed',
choice4: 'has been strayed',
answer: 1,
},
{
question: 'At the party, the guests placed an order for a large…………of drinks.',

choice1: 'count',
choice2: 'total',
choice3: 'quantity',
choice4: 'sum',
answer: 3,
},
{
question: 'The hall was so small that it could …………contain all of us.',

choice1: 'rarely',
choice2: 'comfortably',
choice3: 'conveniently',
choice4: 'hardly',
answer: 4,
 },
{
question: 'If I were a manager, I …………satisfy my customers.',

choice1: 'will',
choice2: 'shall',
choice3: 'would',
choice4: 'must',
answer: 3,
}, 
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Florence performs c͟r͟e͟d͟i͟t͟a͟b͟l͟y͟ in all examinations.',

choice1: 'fairly',
choice2: 'well',
choice3: 'graciously',
choice4: 'good',
answer: 1,
},
 {

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The choir sang some m̲e̲l̲o̲d̲i̲o̲u̲s̲ songs at the function.',

choice1: 'loud',
choice2: 'pleasant',
choice3: 'soft',
choice4: 'musical',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Jane is always i͟m͟m͟a͟c͟u͟l͟a͟t͟e͟l͟y͟ dressed.',

choice1: 'modestly',
choice2: 'correctly',
choice3: 'neatly',
choice4: 'scantily',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The village was e͟n͟v͟e͟l͟o͟p͟e͟d͟ in a thick fog.',

choice1: 'built',
choice2: 'put',
choice3: 'shaped',
choice4: 'covered',
answer: 4,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The i͟n͟q͟u͟i͟s͟i͟t͟i͟v͟e͟ stranger asked many questions.',

choice1: 'curious',
choice2: 'pompous',
choice3: 'intelligent',
choice4: 'cowardly',
answer: 1,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.\n\n  Whenever Kweku goes to Kumasi, he p̲u̲t̲s̲ ̲u̲p̲ ̲w̲i̲t̲h̲ ̲h̲i̲s̲ ̲u̲n̲c̲l̲e̲.̲ This means that Kweku ……….',

choice1: 'helps',
choice2: 'stays with',
choice3: 'converses with',
choice4: 'avoids',
answer: 2,
},
 {

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n I g̲l̲a̲n̲c̲e̲d̲ ̲o̲v̲e̲r̲ the papers as I walked home. This means that I quickly ……….the papers.',

choice1: 'wrote',
choice2: 'analysed',
choice3: 'saw',
choice4: 'read',
answer: 4,
 },
 {

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The woman entered the room to find her daughter with her e͟y͟e͟s͟ ͟g͟l͟u͟e͟d͟ to the television. \nThis means that her daughter was …………the television.',

choice1: 'smiling at',
choice2: 'dismantling',
choice3: 'intently watching',
choice4: 'cleaning',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n Kojo was dragged to the farm like a̲ ̲l̲a̲m̲b̲ ̲t̲o̲ ̲t̲h̲e̲ ̲s̲l̲a̲u̲g̲h̲t̲e̲r̲.̲\n  This means that Kojo was dragged …….',

choice1: 'with difficulty',
choice2: 'without resistance',
choice3: 'with a lamb on his shoulder',
choice4: 'without anything on him',
answer: 2,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.\n\n The bully was ordered t̲o̲ ̲l̲e̲a̲v̲e̲ ̲h̲i̲s̲ ̲y̲o̲u̲n̲g̲e̲r̲ ̲b̲r̲o̲t̲h̲e̲r̲ ̲a̲l̲o̲n̲e̲.̲ This means that the bully was told …….',

choice1: 'not to accompany him anywhere',
choice2: 'to accompany him everywhere',
choice3: 'not to disturb him',
choice4: 'to teach him well',
answer: 3,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n Some of the guests at the party were r̲u̲d̲e̲.̲' + '</u>' ,

choice1: 'courteous',
choice2: 'bold',
choice3: 'friendly',
choice4: 'shy',
answer: 1,
 },
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The lawyer supported his argument with c͟o͟p͟i͟o͟u͟s͟ evidence.',

choice1: 'inconsistent',
choice2: 'scanty',
choice3: 'bad',
choice4: 'unconvincing',
answer: 1
},
 {

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n If you want to be believed, you must be o̲b̲j̲e̲c̲t̲i̲v̲e̲.̲',

choice1: 'subjective',
choice2: 'positive',
choice3: 'active',
choice4: 'emotive',
answer: 1,
},
 {

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n In all boarding schools, going out in the night is p̲r̲o̲h̲i̲b̲i̲t̲e̲d̲.̲',

choice1: 'advised',
choice2: 'ignored',
choice3: 'permitted',
choice4: 'admitted',
answer: 3,
},
 {

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The surest way to avoid d͟e͟f͟e͟a͟t͟ is to strive for …….',

choice1: 'position',
choice2: 'victory',
choice3: 'knowledge',
choice4: 'ability',
answer: 2,
 },
 {

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n S͟u͟d͟d͟e͟n͟l͟y͟ the sky became dark and there was a rainstorm.',

choice1: 'Continuously',
choice2: 'Gradually',
choice3: 'Heavily',
choice4: 'Immediately',
answer: 2,
}, 
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The athlete looked d͟e͟j͟e͟c͟t͟e͟d͟ at the end of the race.',

choice1: 'angry',
choice2: 'calm',
choice3: 'strong',
choice4: 'excited',
answer: 4,
},
 {

question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The extract is an example of …………….',

choice1: 'prose',
choice2: 'poetry',
choice3: 'drama',
choice4: 'dialogue',
answer: 2,
 

question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n The extract is about ……………',

choice1: 'a mirror',
choice2: 'an eagle feather',
choice3: 'the moon',
choice4: 'a beautiful young lady',
answer: 4,
},
{
question: 'Read the following extract carefully and answer this question\n' + '(refer to Extract)' + '\n\n “The moon that walks beautifully across the sky” is an example of',

choice1: 'metaphor',
choice2: 'hyperbole',
choice3: 'alliteration',
choice4: 'personification',
answer: 4,
},
 {

question: '“Young lady, you are like …\n' +
'An eagle feather worn by a husband”\n\n' +
'The above extract is an example of',

choice1: 'simile',
choice2: 'metaphor',
choice3: 'alliteration',
choice4: 'assonance',
answer: 1,
},
{
 
question: 'The writer of a poem is called',

choice1: 'a novelist',
choice2: 'a poet',
choice3: 'a playwright',
choice4: 'an actor',
answer: 2,
},
{
 
question: '“The potter puts the pots in the pans” is an example of',

choice1: 'metaphor',
choice2: 'simile',
choice3: 'alliteration',
choice4: 'personification',
answer: 3,
},
 {

question: '“Twinkle, twinkle, little star\n' +
'How I wonder what you are!\n' +
'Up above the world so high\n,' +
'Like a diamond in the sky.”\n\n The rhyme scheme of the above verse is',

choice1: 'abab',
choice2: 'aabc',
choice3: 'abcc',
choice4: 'aabb',
answer: 4,
},
 {

question: '“Afua Bonsu is the apple of my eye”.\n This is an example of',

choice1: 'metaphor',
choice2: 'simile',
choice3: 'alliteration',
choice4: 'personification',
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
