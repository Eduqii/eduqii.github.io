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
After the wine had been drunk Okwonkwo laid his difficulties before Nwakibie. I have come to you for help, he said. „Perhaps you can already guess what it is. I have cleared a farm but have no yams to sow. I know what it is to ask a man to trust another with his yams, especially these days when young men are afraid of hard work. I am not afraid of work.

The lizard that jumped from the high iroko tree to the ground said he would praise himself if no one else did. I began to fend for myself at an age when most people will suck at their mothers‟ breast. If you give me some yam seeds I shall not fail you.

Nwakibie cleared his throat. „It pleases me to see a determined young man like you these days when our youth have gone so soft. Many young men have come to me to ask for yams but I have refused because I knew they would just dump them in the earth and leave them to be choked by weeds. When I say no to them they think I am hard-hearted. But it is not so. Eneke the bird says that since men have learnt to shoot without missing, he has learnt to fly without perching. I have learnt to be stingy with my yams. But I can trust you. I know it as I look at you. As our fathers said, you can tell a ripe corn by its look. I shall give you four hundred yams. Go ahead and prepare your farm.‟


Que 6 - 10
PASSAGE II
We were suddenly awakened at dawn by the screams of the tenants in the house. Daddy quickly jumped from his bed and made for the door. Not long after we heard him screaming. We ran to the hall, switched on the light and saw him lying flat on his back, holding his forehead.

In his haste to get to the hall door, he must have forgotten to switch on the light thus running straight and crashing his head against the pillar in the middle of the hall. When we examined his forehead, we saw a big lump and blood oozing from a deep cut near his eyebrow. Mother, a retired nursing sister, shouted instructions at me to get the first aid box, some ice cubes and Daddy‟s towel.

When the items were brought she then sat to work first on the cut. She put some ice-cubes in the towel
and pressed them on the cut for about two minutes. She then wiped the blood gently. Afterwards, she put a little iodine on gauze, placed it on the cut and bandaged it. Then turning to the lump, she massaged it with some ice- cubes, which reduced the swelling. She then opened the door and we were confronted with a pathetic scene. Lying in the middle of the house was the body of one of the tenants. Trying to resist an attack by armed robbers, he had been butchered mercilessly and his body left in the middle of the house.

*/	
question: 'Read Passage I carefully and answer this question\nThe full form of if no one else did will be, „if no one ……‟',
choice1: 'jumped',
choice2: 'looked',
choice3: 'was afraid',
choice4: 'praised him',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nI began to fend for myself means the speaker …….',
choice1: 'defended himself',
choice2: 'protected his family',
choice3: 'looked after himself',
choice4: 'looked for yams',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nBeing hard-hearted is to ………',
choice1: 'be solid',
choice2: 'have no kind feeling',
choice3: 'be wild',
choice4: 'refuse to smile',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\nNwakibie refused to give yams to some young men because they were …….',
choice1: 'lazy',
choice2: 'stingy',
choice3: 'unable to shoot well',
choice4: 'unable to trust him',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nAccording to the passage one can say that Okwonkwo is ……..',
choice1: 'always praising himself',
choice2: 'a determined hardworking young farmer',
choice3: 'always sucking his mother‟s breast',
choice4: 'very stingy with yams',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nWhat made the writer wake up?',
choice1: 'The noise made by his father',
choice2: 'The shouting of people in the house',
choice3: 'His father‟s jumping out of bed',
choice4: 'His father crashing into the pillar.',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nThe father was holding his forehead because he',
choice1: 'ran',
choice2: 'lay on his back',
choice3: 'did not put on the light',
choice4: 'hit his head against the pillar',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following statements, according to the passage, is not true?',
choice1: 'Mother retired as a nursing sister',
choice2: 'Mother used Daddy‟s towel',
choice3: 'Mother used iodine and ice-cubes',
choice4: 'Mother applied warm water',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nHow did the tenant die?',
choice1: 'He was a pathetic scene',
choice2: 'He was killed by armed robbers',
choice3: 'He was merciless',
choice4: 'He had resisted armed robbers',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\n„Pathetic‟ in the passage means',
choice1: 'sad',
choice2: 'strange',
choice3: 'mighty',
choice4: 'merciless',
answer: 1,
},
{
//SECTION B


question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nWe were advised to make our handwriting l̲e̲g̲i̲b̲l̲e̲.̲',
choice1: 'crooked',
choice2: 'clear',
choice3: 'straight',
choice4: 'deep',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nOur supporters planned to j͟u͟b͟i͟l͟a͟t͟e͟ after the match.',
choice1: 'embrace the supporters',
choice2: 'reward the players',
choice3: 'rejoice',
choice4: 'feast',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nBullying has been b͟a͟n͟n͟e͟d͟ in this school.',
choice1: 'encouraged ',
choice2: 'forbidden ',
choice3: 'discussed ',
choice4: 'introduced',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe p͟e͟n͟a͟l͟t͟y͟ for stealing is dismissal from school.',
choice1: 'trouble ',
choice2: 'cause ',
choice3: 'foul',
choice4: 'punishment',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe talking c͟e͟a͟s͟e͟d͟ as soon as the teacher appeared.',
choice1: 'changed over',
choice2: 'dragged on',
choice3: 'stopped',
choice4: 'increased',
answer: 3,
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\nIt will s̲e̲r̲v̲e̲ ̲h̲e̲r̲ ̲r̲i̲g̲h̲t̲ if she does not meet her friends at the airport. This means that …..',
choice1: 'she will have what she likes. ',
choice2: 'it will be too much for her.',
choice3: 'she will have what she deserves.',
choice4: 'it will be her right to travel.',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\nMr. Mensah appears to be an honest worker, but h̲e̲ ̲l̲e̲a̲d̲s̲ ̲a̲ ̲d̲o̲u̲b̲l̲e̲ ̲l̲i̲f̲e̲. This means that he ………',
choice1: 'comes to work early',
choice2: 'works harder than everybody',
choice3: 'leads a bad private life',
choice4: 'has two different jobs.',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\nMy uncle visits me o̲n̲c̲e̲ ̲i̲n̲ ̲a̲ ̲b̲l̲u̲e̲ ̲m̲o̲o̲n̲. This means that he visits …………',
choice1: 'at the end of the month',
choice2: 'rarely',
choice3: 'during the night',
choice4: 'daily',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\nAcademically the Science Class is s̲e̲c̲o̲n̲d̲ ̲t̲o̲ ̲n̲o̲n̲e̲ in the school. This means that the class ………..',
choice1: 'always takes the second position',
choice2: 'does not do very well',
choice3: 'is the best',
choice4: 'is the second largest',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\nI̲f̲ ̲w̲e̲ ̲h̲a̲d̲ ̲s̲e̲n̲t̲ ̲h̲i̲m̲ ̲t̲o̲ ̲t̲h̲e̲ ̲h̲o̲s̲p̲i̲t̲a̲l̲ ̲e̲a̲r̲l̲i̲e̲r̲ ̲h̲e̲ ̲w̲o̲u̲l̲d̲n̲‟̲t̲ ̲h̲a̲v̲e̲ ̲d̲i̲e̲d̲.̲\n This means that we ………..',
choice1: 'sent him to the hospital.',
choice2: 'didn‟t send him to the hospital at all.',
choice3: 'sent him to the hospital late.',
choice4: 'were told to send him to the hospital.',
answer: 3,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe prefect was punished for being d͟i͟s͟h͟o͟n͟e͟s͟t͟.',
choice1: 'rough ',
choice2: 'respect ',
choice3: 'sincere ',
choice4: 'tactful',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nOur teachers always advised us to be h͟u͟m͟b͟l͟e͟.',
choice1: 'arrogant',
choice2: 'gentle',
choice3: 'hardworking',
choice4: 'wicked',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nOur headmaster has p͟u͟r͟c͟h͟a͟s͟e͟d͟ a lot of books for the library.',
choice1: 'selected ',
choice2: 'collected ',
choice3: 'sold',
choice4: 'lent',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe meat I had was t͟o͟u͟g͟h͟.',
choice1: 'big',
choice2: 'soft',
choice3: 'slippery',
choice4: 'rough',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nVegetation is s͟c͟a͟n͟t͟y͟ in desert countries.',
choice1: 'green',
choice2: 'dry ',
choice3: 'little ',
choice4: 'dense',
answer: 4,
},
{
//SECTION E


question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAnto should …………….his teeth before eating.',
choice1: 'have cleaned ',
choice2: 'has cleaned ',
choice3: 'cleaned',
choice4: 'cleans',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nMr Tawiah regularly ………….late in the night.',
choice1: 'eat ',
choice2: 'eats ',
choice3: 'eaten',
choice4: 'eating',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nCan you make ………….Issaka in the crowd?',
choice1: 'of ',
choice2: 'up ',
choice3: 'out',
choice4: 'away',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe earlier we ………..the work, the better.',
choice1: 'have done',
choice2: 'do',
choice3: 'did',
choice4: 'had done',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nYou will pass this examination, …………?',
choice1: 'don‟t you ',
choice2: 'have you ',
choice3: 'may you ',
choice4: 'won‟t you',
answer: 4,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nHe showed me the car …………knocked him down.',
choice1: 'who ',
choice2: 'which ',
choice3: 'whom ',
choice4: 'what',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe man is a good friend of …………',
choice1: 'my',
choice2: 'me',
choice3: 'myself',
choice4: 'mine',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe national team is preparing ………….their next match.',
choice1: 'with',
choice2: 'by ',
choice3: 'on ',
choice4: 'for',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nLook carefully around for those books; they must be ……….in this room.',
choice1: 'somehow',
choice2: 'everywhere ',
choice3: 'somewhere ',
choice4: 'anywhere',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nFind out who is the ………….of the two boys.',
choice1: 'most tall',
choice2: 'taller',
choice3: 'more tall',
choice4: 'tallest',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n……………boys are very happy with the toys.',
choice1: 'they ',
choice2: 'those ',
choice3: 'this ',
choice4: 'that',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nJulie wants to visit a relative of …………….',
choice1: 'hers',
choice2: 'herself',
choice3: 'themselves',
choice4: 'ourselves',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe visitors don‟t know Krokrobite ………..?',
choice1: 'is it',
choice2: 'haven‟t they',
choice3: 'do they',
choice4: 'isn‟t it',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nWas it not your sister who ………..this hole yesterday?',
choice1: 'has dug ',
choice2: 'have dug ',
choice3: 'dig',
choice4: 'dug',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI can‟t hear her; I wish she …………louder.',
choice1: 'was speaking ',
choice2: 'would speak ',
choice3: 'had spoken',
choice4: 'might speak',
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
