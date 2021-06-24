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
question: 'Read the following passages carefully and answer the questions which follow \n PASSAGE I \n\n What made the writer wake up?',

choice1: 'The father crashing into the pillar',
choice2: 'The noise made by the father',
choice3: 'The attack by the armed robbers',
choice4: 'The shouting of the tenants',
answer: 4,
},
{
question: 'Read the following passages carefully and answer the questions which follow \n PASSAGE I \n\n The writer’s father was holding his forehead because he',

choice1: 'had fallen flat on his back',
choice2: 'had hit his head against the pillar',
choice3: 'wanted to stop the blood from flowing',
choice4: 'was thinking of what to do',
answer: 2,
},
{
question: 'Read the following passages carefully and answer the questions which follow \n PASSAGE I \n\n The purpose of the ice cubes was to',

choice1: 'stop the bleeding',
choice2: 'heal the cut',
choice3: 'manage the cut',
choice4: 'reduce the swelling',
answer: 4,
},
{
question: 'Read the following passages carefully and answer the questions which follow \n PASSAGE I \n\n Pathetic in the passage means',

choice1: 'naughty',
choice2: 'merciless',
choice3: 'sad',
choice4: 'strange',
answer: 3,
},
{
question: 'Read the following passages carefully and answer the questions which follow \n PASSAGE I \n\n What happened to the tenant?',

choice1: 'He opened the door',
choice2: 'He was killed by the robbers',
choice3: 'He fell down heavily',
choice4: 'He saw a pathetic scene',
answer: 2,
},
{
	question: 'Refer to PASSAGE II \n\n According to the passage, members of the choir can sing without difficulty because they',

choice1: 'are born good singers',
choice2: 'easily learn to sing',
choice3: 'have good songs',
choice4: 'have to sing',
answer: 1,
},
{
question: 'Refer to PASSAGE II \n\n The male songbirds sing',

choice1: 'to instruct others',
choice2: 'four notes at a time',
choice3: 'to attract the females',
choice4: 'what others have composed',
answer: 3,
},
{
question: 'Refer to PASSAGE II \n\n According to the passage, birds sing',

choice1: 'only in the breeding season',
choice2: 'some of the sweetest songs',
choice3: 'to invite the bachelors',
choice4: 'only one note',
answer: 2,
},
{
question: 'Refer to PASSAGE II \n\n Unique in the passage means',

choice1: 'suitable',
choice2: 'similar',
choice3: 'exciting',
choice4: 'special',
answer: 4,
},
{
question: 'Refer to PASSAGE II \n\n The writer suggests that',

choice1: 'human beings sing better than birds',
choice2: 'birds can interpret notes better',
choice3: 'birds make louder noise than human beings',
choice4: 'birds compose more interesting songs.',
answer: 2,
},
{
	question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n The house by the sea has been a̲b̲a̲n̲d̲o̲n̲e̲d̲.̲',

choice1: 'deserted',
choice2: 'destroyed',
choice3: 'infested',
choice4: 'robbed',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n Most Ghanaians were o͟p͟t͟i͟m͟i͟s͟t͟i͟c͟ about the Black Stars winning the African Cup.',

choice1: 'reasonable',
choice2: 'happy',
choice3: 'concerned',
choice4: 'hopeful',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n The i͟n͟d͟i͟g͟e͟n͟o͟u͟s͟ people provided the labour during the building of the school.',

choice1: 'skilled',
choice2: 'native',
choice3: 'expatriate',
choice4: 'urban',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n The effort of the watchman which led to the arrest of the thieves was l̲a̲u̲d̲a̲b̲l̲e̲.̲',

choice1: 'quick',
choice2: 'real',
choice3: 'constant',
choice4: 'praiseworthy',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n Our parents deserve our a̲p̲p̲r̲e̲c̲i̲a̲t̲i̲o̲n̲.̲',

choice1: 'assistance',
choice2: 'gratitude',
choice3: 'concern',
choice4: 'encouragement',
answer: 2,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n Mr. Taiwoo t̲o̲o̲k̲ ̲t̲h̲e̲ ̲c̲l̲e̲r̲k̲ to task for losing the letters. This means that Mr. Taiwoo',

choice1: 'sacked the clerk',
choice2: 'blamed the clerk',
choice3: 'called the clerk a criminal',
choice4: 'gave the clerk another work',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n The quarrel g̲o̲t̲ ̲o̲u̲t̲ ̲o̲f̲ ̲h̲a̲n̲d̲.̲ This means that the quarrel', 
choice1: 'became uncontrollable',
choice2: 'was prolonged',
choice3: 'became boring',
choice4: 'was unhealthy',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n On seeing the headmaster, the girl t̲o̲o̲k̲ ̲t̲o̲ ̲h̲e̲r̲ ̲h̲e̲e̲l̲s̲.̲ This means that the girl',

choice1: 'fainted',
choice2: 'felt frightened',
choice3: 'ran away',
choice4: 'hid herself',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n Joseph lives w̲i̲t̲h̲i̲n̲ ̲a̲ ̲s̲t̲o̲n̲e̲’̲s̲ ̲t̲h̲r̲o̲w̲ from the station. This means that Joseph',

choice1: 'lives in a stony house',
choice2: 'lives very close to the station',
choice3: 'goes to the station',
choice4: 'often throws stones at the station',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence \n\n All his plans for building a new theatre c̲a̲m̲e̲ ̲t̲o̲ ̲n̲o̲u̲g̲h̲t̲.̲ This means that',

choice1: 'the theatre was built',
choice2: 'his plans were unsuccessful',
choice3: 'the building collapsed',
choice4: 'there was nothing in the theatre',
answer: 2,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n My father has a c͟o͟r͟d͟i͟a͟l͟ relationship with all his neighbours.',

choice1: 'harsh',
choice2: 'hostile',
choice3: 'scornful',
choice4: 'different',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n John’s latest play is rather d͟u͟l͟l͟',

choice1: 'interesting',
choice2: 'informative',
choice3: 'sensible',
choice4: 'educative',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The f͟e͟e͟b͟l͟e͟ old man spoke for about three hours.',

choice1: 'bold',
choice2: 'strong',
choice3: 'bright',
choice4: 'successful',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The thief descended the stairs h͟u͟r͟r͟i͟e͟d͟l͟y͟',

choice1: 'consciously',
choice2: 'lazily',
choice3: 'slowly',
choice4: 'noisily',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n\n The d͟i͟l͟i͟g͟e͟n͟t͟ student won a prize.',

choice1: 'careless',
choice2: 'lucky',
choice3: 'playful',
choice4: 'proud',
answer: 1,
},
{
	question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n My father wanted to find out how Abu was getting ………… at school.',

choice1: 'on',
choice2: 'down',
choice3: 'back',
choice4: 'up',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n If the boat had been maintained properly it…………..capsized.',
choice1: 'had not',
choice2: 'will not have',
choice3: 'would not have',
choice4: 'might have not',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The white horse is …………..than the black one.',

choice1: 'faster',
choice2: 'very fast',
choice3: 'fast',
choice4: 'more fast',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n They thought he would become a businessman………?',

choice1: 'wouldn’t they',
choice2: 'didn’t they',
choice3: 'wasn’t it',
choice4: 'isn’t it',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n There were only two of us who ………… any idea of the answer.',

choice1: 'have',
choice2: 'had',
choice3: 'has',
choice4: 'would have',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He had boarded a taxi, ……….?',

choice1: 'wouldn’t he',
choice2: 'hadn’t he',
choice3: 'isn’t it',
choice4: 'won’t he',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Mrs. Mensah ………. in Saltpond since 1970.',

choice1: 'was living',
choice2: 'has been living',
choice3: 'has lived',
choice4: 'is living',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The booking clerk made him ………….. a deposit.',

choice1: 'to pay',
choice2: 'paid',
choice3: 'to be paying',
choice4: 'pay',
answer: 4,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Although all the dresses were beautiful, she liked …………..of them.',

choice1: 'any',
choice2: 'none',
choice3: 'neither',
choice4: 'Both',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Kwesi and Ama are in love with ……….',

choice1: 'themselves',
choice2: 'one another',
choice3: 'each other',
choice4: 'ourselves',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n It is …………. to attempt in one day.',

choice1: 'too long and difficult a journey',
choice2: 'the journey too long and difficult',
choice3: 'long and difficult too a journey',
choice4: 'too long and difficult the journey',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The rain shouldn’t deter you ……. going out.',

choice1: 'for',
choice2: 'on',
choice3: 'by',
choice4: 'from',
answer: 4,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Ben is leaving ……….. Takoradi this morning.',

choice1: 'for',
choice2: 'to',
choice3: 'by',
choice4: 'from',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Yesterday I met the man ………..',

choice1: 'the car of whom I bought',
choice2: 'whose car I bought',
choice3: 'I bought his car',
choice4: 'whom I bought his car',
answer: 2,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n No sooner had the Minister opened the bank …………. the bank was filled to capacity.',

choice1: 'when',
choice2: 'for',
choice3: 'as',
choice4: 'than',
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
