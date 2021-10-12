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
Que 1 - 7
PASSAGE I

When Mr Appiah looked at the two happy faces of his nephews, he forgot about his aching feet and smiled. He had spent the whole day showing Asare and Attah, who came from the village, around Accra. He was satisfied that they were happy. It was not until they were seated on a bench in the public garden that he realized how hot, tired and dusty he was.

It was a long time since he had walked so much. Like many other successful men, Mr Appiah had acquired the habit of going everywhere in his car, so that day\u2019s sight-seeing expedition had worn him out.

Well, what do you think of Accra?\u2019 He asked the boys.
Oh!\u2019 exclaimed Attah. it\u2019s a wonderful place!\u2019

I didn\u2019t imagine any place could be like this, Uncle\u2019 said Asare, Everything is so splendid. The roads are very wide and the buildings magnificent\u2019.

Boys, don\u2019t get the wrong impression. Today you\u2019ve seen the best parts of our city, but there are bad areas with buildings falling apart, narrow streets and insanitary conditions. However, these buildings are being demolished, said Mr. Appiah.

Que 8 - 13

PASSAGE II

The Akosombo Dam and the great Volta Lake are famous over the world. The two main reasons for building the dam were, to generate electricity and to use the electricity for the production of aluminium from bauxite.

Aluminium is used throughout the world; so both the production of electricity and the production of aluminium are of great value to Ghana.

It may seem strange to talk about producing electricity by building a dam, but in fact a lot of dams have been built all over the world for this purpose. What happens is that a concrete wall, called a dam, is constructed across a river at a narrow point. A large lake then develops behind the wall. Tunnels are made in the dam so that water from the lake can rush fiercely through them. This powerful flow of water is used to drive huge machines called turbines, to generate electricity. All that the engineers need is the water rushing down from the lake, and all this costs them nothing! But of course the building of the dam and the fixing of the machines cost a great
deal of money.

Big dams have been built in many parts of the world. The Akosombo Dam is one of the biggest. However, the lake, which has been formed, is in fact the biggest man-made lake in the world.

*/
question: 'Read Passage I carefully and answer this question which follow\n\nMr Appiah was hot, tired and dusty because \u2026..',
choice1: 'he had gone to bring his nephews from the village.',
choice2: 'he had taken his nephews to the high buildings',
choice3: 'he had shown the boys around the city of Accra.',
choice4: 'he had helped them to demolish the buildings',
choice5: 'he had been satisfied that the boys were happy',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n Where were the boys living before visiting Accra?',
choice1: 'In the high buildings',
choice2: 'In the village',
choice3: 'In the big houses',
choice4: 'In the public gardens',
choice5: 'In the building falling apart.',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n Everything is so splendid means everything is \u2026..',
choice1: 'satisfactory ',
choice2: 'magnificent ',
choice3: 'important',
choice4: 'brilliant',
choice5: 'special',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n According to the passage many successful men are used to \u2026..',
choice1: 'walking around Accra',
choice2: 'bringing their nephews from the village to Accra',
choice3: 'going on sight-seeing in the city of Accra',
choice4: 'talking with boys in the public gardens',
choice5: 'riding in cars wherever they go',
answer: 5,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n Which of the following statements is not true according to the passage?',
choice1: 'Every part of the city is wonderful and splendid',
choice2: 'Mr Appiah normally rides in his car',
choice3: 'Asare and Attah are in Accra for the first time',
choice4: 'The boys rested in the public gardens',
choice5: 'The boys as well as Mr Appiah must have been hot, tired and dusty',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n Insanitary conditions in the last paragraph means \u2026.',
choice1: 'some people in Accra are insane',
choice2: 'some places in Accra are dirty and unclean ',
choice3: 'insanitary is seen in all conditions in the city ',
choice4: 'unsatisfactory reports about the city',
choice5: 'there are many sanitary inspectors in Accra',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question which follow\n\n Demolished as used in the passage means',
choice1: 'replaced ',
choice2: 'repaired ',
choice3: 'painted',
choice4: 'pulled down',
choice5: 'hire out',
answer: 4,
},
{


question: 'Read Passage II carefully and answer this question which follow\n\n The main reasons why Akosombo Dam was built were \u2026.',
choice1: 'to produce electricity to manufacture aluminium',
choice2: 'to produce electricity from aluminium and bauxite',
choice3: 'to find the mineral called bauxite and use it',
choice4: 'to use aluminium and electricity',
choice5: 'to make aluminium, bauxite and electricity',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question which follow\n\n Aluminium is produced from \u2026',
choice1: 'dams',
choice2: 'electricity',
choice3: 'bauxite ',
choice4: 'machine ',
choice5: 'tunnels',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question which follow\n\n From the passage, dams are built all over the world mainly to \u2026.',
choice1: 'produce aluminium from bauxite',
choice2: 'provide water for the generation of electricity',
choice3: 'extract bauxite from lakes ',
choice4: 'provide water for drinking ',
choice5: 'make electricity cheap',
answer: 2,
},
{

question: 'Read Passage II carefully and answer this question which follow\n\n Which of the following statements is not true according to the passage?',
choice1: 'The Akosombo Dam is the biggest in the world',
choice2: 'The production of both electricity and aluminium is of great value to Ghana',
choice3: 'Water from the lake runs fiercely through tunnels',
choice4: 'The Akosombo dam is valuable to Ghana',
choice5: 'A great collection of water running through tunnels can produce electricity anywhere in the world.',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question which follow\n\n According to the passage which of the following statements is true?',
choice1: 'In building dams rivers are blocked at their broadcast points',
choice2: 'Water is used to produce electricity',
choice3: 'Building the dam and fixing machines to produce electricity cost nothing at all',
choice4: 'In producing electricity engineers need a lot of petrol to drive the machines',
choice5: 'Turbines are used in the production of electricity',
answer: 5,
},
{
question: 'Read Passage II carefully and answer this question which follow\n\n The most suitable title for the passage is',
choice1: 'Akosombo and Bauxite',
choice2: 'Electricity from water',
choice3: 'Dams of the world',
choice4: 'Electricity and power',
choice5: 'Aluminium from electricity',
answer: 2,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n Your dress material is i͟n͟f͟e͟r͟i͟o͟r͟ to what I bought from the shop. This means that your dress material is \u2026',
choice1: 'of poor quality',
choice2: 'very beautiful',
choice3: 'brightly coloured',
choice4: 'expensive',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The girl is a s͟p͟e͟n͟d͟t͟h͟r͟i͟f͟t͟: she used all her pocket money to buy a pair of shoes. This means \u2026',
choice1: 'careless',
choice2: 'bold',
choice3: 'extravagant',
choice4: 'kind',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The pupils in the town often help in c͟o͟m͟m͟u͟n͟a͟l͟ activities. This means that they help in \u2026',
choice1: 'all activities',
choice2: 'interesting activities',
choice3: 'public activities',
choice4: 'usual activities',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\n\n The a͟r͟o͟m͟a͟ of Kate\u2019s food made everyone hungry. This means the food \u2026..',
choice1: 'smells good',
choice2: 'is tasty',
choice3: 'is spicy',
choice4: 'is valuable',
answer: 1,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He wasn\u2019t at the scene of the accident, \u2026..?',
choice1: 'wasn\u2019t he',
choice2: 'isn\u2019t it ',
choice3: 'did he ',
choice4: 'was he',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n You don\u2019t speak Chinese, \u2026.?',
choice1: 'do you ',
choice2: 'can you ',
choice3: 'don\u2019t you',
choice4: 'won\u2019t you',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n We worked hard in our final year, \u2026.?',
choice1: 'did we',
choice2: 'isn\u2019t it',
choice3: 'aren\u2019t we',
choice4: 'didn\u2019t we',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n They have lost the match, \u2026..?',
choice1: 'didn\u2019t they',
choice2: 'isn\u2019t it',
choice3: 'haven\u2019t they',
choice4: 'is it',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n He has stolen the box \u2026..',
choice1: 'in which we kept the gold chain ',
choice2: 'which we kept in the gold chain ',
choice3: 'we kept the gold chain',
choice4: 'where we kept the gold chain',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n \u2026hard he tried, Adansi came last in the test.',
choice1: 'Whatever',
choice2: 'How',
choice3: 'Whenever',
choice4: 'However',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Akwetey did the exercise \u2026',
choice1: 'even though he was sick ',
choice2: 'during which he was sick ',
choice3: 'but he was sick',
choice4: 'for which he was sick',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n We are not allowed \u2026..',
choice1: 'to walk at the lawn',
choice2: 'to be walking across the lawn',
choice3: 'walking across the lawn',
choice4: 'to walk across the lawn',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Everybody was pleased \u2026..the pastor\u2019s sermon.',
choice1: 'for',
choice2: 'in',
choice3: 'with',
choice4: 'at',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n John\u2019s father congratulated him \u2026his success in the examination',
choice1: 'on',
choice2: 'during',
choice3: 'at',
choice4: 'to',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The patient is generally recovering \u2026..his illness',
choice1: 'from ',
choice2: 'with ',
choice3: 'for',
choice4: 'during',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n We have been in this school \u2026.three years',
choice1: 'since',
choice2: 'in ',
choice3: 'by ',
choice4: 'for',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n It would be unwise to \u2026the chance of making extra money.',
choice1: 'throw away',
choice2: 'throw in',
choice3: 'throw over',
choice4: 'throw by',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n Koku was sad when he lost his mother but he will soon \u2026.it',
choice1: 'get along',
choice2: 'get on',
choice3: 'get by',
choice4: 'get over',
answer: 4,
},
{ 
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n \u2026.these words in your dictionary.',
choice1: 'Look around',
choice2: 'Look on',
choice3: 'Look up',
choice4: 'Look about',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n If he \u2026the elections he would have become an assemblyman.',
choice1: 'won',
choice2: 'has won',
choice3: 'had won',
choice4: 'should win',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n If he continues to work hard, he \u2026..his examination with ease.',
choice1: 'will pass ',
choice2: 'is passing ',
choice3: 'has passed ',
choice4: 'would pass',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\n The news he brought \u2026.bad',
choice1: 'are',
choice2: 'were',
choice3: 'has been',
choice4: 'was',
answer: 4,
},
{

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The headmaster thanked his teachers for a w͟o͟n͟d͟e͟r͟f͟u͟l͟ job done.',
choice1: 'quick',
choice2: 'difficult',
choice3: 'big ',
choice4: 'bad ',
choice5: 'odd',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The present day youth still i͟n͟d͟u͟l͟g͟e͟ in all forms of drug abuse.',
choice1: 'avoid',
choice2: 'increase',
choice3: 'discourage',
choice4: 'disallow',
choice5: 'discontinue',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Some people prefer to eat l͟e͟a͟n͟ meat.',
choice1: 'uncooked',
choice2: 'fatty ',
choice3: 'spoilt ',
choice4: 'bloody ',
choice5: 'tasty',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Kojo\u2019s teacher was r͟e͟l͟u͟c͟t͟a͟n͟t͟ to accept his explanation for being late to school.',
choice1: 'willing ',
choice2: 'afraid ',
choice3: 'unable',
choice4: 'planning',
choice5: 'likely',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The workers wanted their director to h͟o͟l͟d͟ the meeting.',
choice1: 'continue',
choice2: 'delay ',
choice3: 'cancel ',
choice4: 'support',
choice5: 'interrupt',
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
