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
	When the car suddenly screeched to a halt sending tons of dust into the air, the children of the village ran helter-skelter. Then they rushed to Mr Opiah‟s compound where the car had stopped. They were delighted to see a car again after a very long time and marvelled at its beauty.

	Akwasi Seth, Mr Opiah‟s eldest son, the darling boy of the village had finally arrived. The day before, the gong-gong had been beaten to announce the arrival of the first son of the village who had gone to learn the ways of the white man. Everybody was prepared to give him a rousing welcome.

	Fervent preparations started there and then. However, the children‟s only anxiety was to see what the man
	had brought and listen to what he had to say.

	Meanwhile, Mr Opiah and his family, immaculately dressed and full of joy and anxiety, were seated in the house. There was great expectation written all over their faces. They had been told that their son would arrive at
	7 a.m. but by 1 p.m. there was still no sign of him. So when they heard the screeching of the car, they all heaved
	sighs of relief. They were extremely happy when Akwasi Seth entered the compound. The women began to sing his praises.

	Akwasi had not forgotten his culture. He went round shaking hands with everybody. When it was his
	father‟s turn the old man hugged him beaming with smiles. His mother also hugged him and shed tears of joy.


Que 7 - 11
PASSAGE II

At the far end of the village beyond the houses, in its ground, stood the village school, ruled over by the head teacher, Mr Kodwo Twum. Surrounded by shady trees and with large games field to one side, it was one of the best schools in the area.

Mr Twum himself was a teacher of the old school, of the days when education had to be fought for, for the boys walked many kilometres for a chance to read and write. He was very strict, but was held in such esteem by both parents and teachers that no one resented his discipline. He took a personal interest in all his pupils and was affectionately known as “Master” by the big men in the city who had passed through his hands.

The ground round the school was always well kept and tidy, for cutting and weeding the grass was one of the punishments given to inattentive or insolent children. A small farm belonging to the school stretched down the hillside behind it and the children were taught the elements of farming as part of their lesson.

Master Twum‟s house was across the road from the school and next to that belonging to John Agyemang the catechist, so that the two men were often seen gossiping together in the evenings or going into the small village church to discuss parish affairs.

*/
		
question: 'Read Passage I carefully and answer this question\nThe children ran helter-skelter because ………….',
choice1: 'they were expecting a car',
choice2: 'of the sudden screeching of the car',
choice3: 'they hadn‟t seen a car before',
choice4: 'the car was marvellous',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nThe villagers got to know that Akwasi Seth was arriving on that day because ………',
choice1: 'the car stopped in front of Mr Opiah‟s house',
choice2: 'the gong-gong beater had announced it',
choice3: 'Mr Opiah had told them about it',
choice4: 'The children ran to Mr Opiah‟s house',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question\nMr Opiah‟s family members were anxious because they ……..',
choice1: 'were afraid he might not come',
choice2: 'were planning what to do for him',
choice3: 'thought Akwasi Seth would not recognize them',
choice4: 'were surprised at how greatly Akwasi Seth had changed',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nAccording to the passage, Akwasi Seth',
choice1: 'was a truant',
choice2: 'was immaculately dressed',
choice3: 'shed tears of joy',
choice4: 'was loved very much',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nMarvelled in the passage means',
choice1: 'laughed',
choice2: 'surrounded', 
choice3: 'wondered', 
choice4: 'entered',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nAkwasi‟s mother shed tears of joy because …………',
choice1: 'Akwasi looked strange',
choice2: 'she was ill',
choice3: 'she was very happy',
choice4: 'Akwasi remembered his culture',
answer: 3,
},
{

question: 'Read Passage II carefully and answer this question\n The school was to be found ………..',
choice1: 'on the outskirts of the village',
choice2: 'in the centre of the village',
choice3: 'near Mr Kodwo Twum',
choice4: 'with the houses.',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage the school was surrounded by ……..',
choice1: 'shady trees',
choice2: 'the games field ',
choice3: 'the best schools ',
choice4: 'the village',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following is not true of Mr Twum?',
choice1: 'He was respected',
choice2: 'He was a disciplinarian',
choice3: 'He was hated by many people',
choice4: 'He was liked by all his people',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nInsolent in the passage means',
choice1: 'ruffian',
choice2: 'difficult',
choice3: 'disrespectful',
choice4: 'lazy',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nMr Twum and the catechist were able to gossip most of the time because they were ……….',
choice1: 'adults',
choice2: 'free',
choice3: 'very good neighbours',
choice4: 'members of the church',
answer: 3,
},
{
//SECTION B

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'She is very s͟i͟n͟c͟e͟r͟e͟ with the people she works with.',
choice1: 'free',
choice2: 'careful ',
choice3: 'good ',
choice4: 'honest',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'We could not stand the s͟c͟e͟n͟t͟ in the market.',
choice1: 'rush ',
choice2: 'sight ',
choice3: 'smell ',
choice4: 'noise',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'My brother needs somebody to a͟s͟s͟i͟s͟t͟ him complete the work.',
choice1: 'help',
choice2: 'encourage',
choice3: 'join',
choice4: 'guide',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The chief‟s palace was d͟e͟m͟o͟l͟i͟s͟h͟e͟d͟ by the rainstorm.',
choice1: 'opened',
choice2: 'built',
choice3: 'destroyed',
choice4: 'painted',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n' + 'The visitors were happy about the c͟a͟l͟m͟ nature of the village.',
choice1: 'neat ',
choice2: 'good ',
choice3: 'lovely',
choice4: 'peaceful',
answer: 4,
},
{
//SECTION C

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Ekua visits her grandmother o̲n̲c̲e̲ ̲i̲n̲ ̲a̲ ̲b̲l̲u̲e̲ ̲m̲o̲o̲n̲.̲ This means Ekua visits her grandmother ……',
choice1: 'every month ',
choice2: 'once a week ',
choice3: 'occasionally ',
choice4: 'often',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Joana is a clever girl and will come out of her examination with f̲l̲y̲i̲n̲g̲ ̲c̲o̲l̲o̲u̲r̲s̲.̲ This means ………',
choice1: 'she will pass in her favourite subjects',
choice2: 'she will excel in some subjects',
choice3: 'her results will be very good',
choice4: 'she will work hard',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'The Manager h̲i̲t̲ ̲t̲h̲e̲ ̲n̲a̲i̲l̲ ̲o̲n̲ ̲t̲h̲e̲ ̲h̲e̲a̲d̲ in his speech to his workers. This means the manager ……..',
choice1: 'spoke the truth',
choice2: 'was not straight forward',
choice3: 'spoke harshly',
choice4: 'was not happy with his workers',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'Akosua will go to the cinema if Adjei will f̲o̲o̲t̲ ̲t̲h̲e̲ ̲b̲i̲l̲l̲.̲ This means Akosua will go to the film show',
choice1: 'Adjei will take her there on foot ',
choice2: 'The two of them will go together ',
choice3: 'Adjei will pay for her',
choice4: 'She will walk there with others',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words\n' + 'The Pastor advised Yaw and Mensah to b̲u̲r̲y̲ ̲t̲h̲e̲ ̲h̲a̲t̲c̲h̲e̲t̲.̲ This means Yaw and Mensah are to ……..',
choice1: 'keep their cutlass in a safe place',
choice2: 'work together on their farm',
choice3: 'forget about their quarrel',
choice4: 'bury their old cutlass',
answer: 3,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'This room is too d̲i̲m̲.̲',
choice1: 'bright ',
choice2: 'shining ',
choice3: 'clear',
choice4: 'lit',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'That box contains very e͟x͟p͟e͟n͟s͟i͟v͟e͟ jewellery.',
choice1: 'beautiful',
choice2: 'cheap ',
choice3: 'better ',
choice4: 'fine',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'They are waiting in the a͟r͟r͟i͟v͟a͟l͟ hall.',
choice1: 'departure',
choice2: 'return',
choice3: 'acceptance',
choice4: 'common',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'It is very u͟n͟l͟i͟k͟e͟l͟y͟ that he will report before Saturday.',
choice1: 'similar ',
choice2: 'credible ',
choice3: 'close',
choice4: 'possible',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n' + 'This is made from a͟r͟t͟i͟f͟i͟c͟i͟a͟l͟ materials.',
choice1: 'new',
choice2: 'preserved',
choice3: 'wonderful',
choice4: 'natural',
answer: 4,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I object …………your joining our school team.',
choice1: 'on ',
choice2: 'by ',
choice3: 'at ',
choice4: 'to',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'This secret should remain ………you and me.',
choice1: 'for ',
choice2: 'with ',
choice3: 'in',
choice4: 'between',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The kind woman gave ………a box of sweets.',
choice1: 'all and each one ',
choice2: 'all and everyone ',
choice3: 'each and all',
choice4: 'each and everyone',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Tokyo is the ………….expensive city in the world.',
choice1: 'most',
choice2: 'much',
choice3: 'more',
choice4: 'very',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'You have to help your parents …………….?',
choice1: 'have you',
choice2: 'you do',
choice3: 'isn‟t it',
choice4: 'don‟t you',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The car my uncle bought was the …………..',
choice1: 'model latest of the Benz ',
choice2: 'Benz latest of the model ',
choice3: 'latest model of the Benz ',
choice4: 'latest Benz of the model',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'I will wash my clothes when I ………….home.',
choice1: 'went',
choice2: 'have gone ',
choice3: 'could go ',
choice4: 'go',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'She is very jovial ………….she is an orphan.',
choice1: 'since',
choice2: 'as',
choice3: 'though',
choice4: 'even',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'If you ………more attentive you wouldn‟t have been in such a bad situation.',
choice1: 'are',
choice2: 'were',
choice3: 'had been',
choice4: 'could',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Kwabena often …………his grandfather after school.',
choice1: 'had visited',
choice2: 'visited',
choice3: 'has visited',
choice4: 'visit',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The farmer had saved …………money for his son‟s education.',
choice1: 'few',
choice2: 'enough',
choice3: 'most',
choice4: 'plenty',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'This is my book; that one is…….',
choice1: 'your‟s ',
choice2: 'your ',
choice3: 'yours ',
choice4: 'yours‟',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'Birds fly, don‟t they?',
choice1: 'Yes, they don‟t',
choice2: 'No, they do',
choice3: 'Yes, they do',
choice4: 'Yes, they can‟t',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n' + 'The rains had ……….stopped when we set off.',
choice1: 'yet',
choice2: 'either ',
choice3: 'already ',
choice4: 'now',
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
