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

Antobam\u2019s first day in senior secondary school was the day he would never forget. That morning he got up earlier than usual ready for his father to take him to the new school. With the help of his father\u2019s houseboy, his trunk and chop box were packed into his father\u2019s car. At exactly eleven o\u2019clock, the car sped off as Antobam happily waved goodbye to his brothers and sisters.

After about one and a half hours\u2019 drive, they arrived at the school. Antobam beamed with smiles as the car pulled up in front of the administration block. Some huge boys rushed to the car shouting, \u201CHommo, welcome; hommo, welcome!” Antobam misunderstood this for a warm welcome, but he was soon proved wrong.

From the list of newcomers displayed on the notice board, Antobam\u2019s father saw his son\u2019s name under House Two and wanted to take the luggage there. But one of the boys politely said, \u201CDaddy, stop. We have a tradition here.” Before he knew what was happening, two of the boys had lifted his trunk and chop box and put them on Antobam\u2019s head. He had never carried any load on his head before, but here he was with the arduous task of carrying two heavy boxes. Tears started flowing as his father looked on in disbelief. He later left the school very disturbed, wondering what was going to happen to his beloved son.

Que 6 - 11

PASSAGE II

Every year, thousands of African school leavers from the rural areas rush to the urban areas to seek employment. Apart from leaving the countryside thinly populated, these youths cause overcrowding in the cities. They cannot get any house to live in so they are found sleeping in market places and on verandas.

Most of our youths regard agriculture as a poor man\u2019s business. They prefer white-collar jobs to farming and forget that one can gain fame or wealth through agriculture. Most of these youths are greatly disappointed in the townships. Lack of jobs and money force them to join bad companies, break into houses at night or snatch people\u2019s bags at lorry parks or in the street during the day. They often wear dirty clothes and are seen in the streets trying to find something to eat.

One way of checking this movement is by setting up factories in the rural areas and establishing large farms where the school leavers can easily find work. Other ways are providing good means of transport and communication. Libraries, medical services and post offices are equally important amenities necessary in rural areas.

These facilities together with good drinking water and electricity will make these areas attractive enough for the youth to remain and help grow food and cash crops for the country. They can also produce raw materials for our industries.

*/	

question: 'Read Passage I carefully and answer this question which follow\nAntobam got up early that morning because he \u2026..',
choice1: 'was very happy',
choice2: 'was anxious to go to his new school',
choice3: 'would never forget that day',
choice4: 'was woken up by his father',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question which follow\n Antobam arrived at his new school at half past \u2026.',
choice1: 'ten',
choice2: 'eleven',
choice3: 'twelve',
choice4: 'two',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question which follow\nThe senior boys made Antobam carry his boxes because they \u2026',
choice1: 'welcomed his father',
choice2: 'were following tradition',
choice3: 'thought he was strong',
choice4: 'tried to seize his provisions',
answer: 2,
},
{
question: 'Read Passage I carefully and answer this question which follow\nArduous in the passage means',
choice1: 'strange',
choice2: 'new',
choice3: 'additional',
choice4: 'difficult',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question which follow\nAntobam\u2019s father left the school \u2026',
choice1: 'a happy man',
choice2: 'crying for his son',
choice3: 'a worried man',
choice4: 'promising to come back',
answer: 3,
},
{


question: 'Read Passage II carefully and answer this question which follow\nSchool leavers migrate to the cities and towns to \u2026.',
choice1: 'seek enjoyment',
choice2: 'look for work',
choice3: 'look for amenities',
choice4: 'continue their education',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question which follow\nOne of the results of the movement of the youth in the rural areas is that the',
choice1: 'towns are overcrowded',
choice2: 'rural areas lack money',
choice3: 'youth are greatly disappointed',
choice4: 'rural areas lose their people',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question which follow\nWhite-collar jobs as used in the passage means \u2026',
choice1: 'working in the cities',
choice2: 'working in offices',
choice3: 'wearing white-collar shirts',
choice4: 'working for white men',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question which follow\nThe word snatch means \u2026.',
choice1: 'carry ',
choice2: 'steal ',
choice3: 'push',
choice4: 'damage',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question which follow\nWhen the youth come into the cities \u2026',
choice1: 'there is over population ',
choice2: 'amenities are provided ',
choice3: 'jobs are created',
choice4: 'they become very happy',
answer: 1,
},
{

question: 'Read Passage II carefully and answer this question which follow\nWhen the youth remain in the rural areas they can help produce \u2026',
choice1: 'electricity',
choice2: 'food',
choice3: 'libraries',
choice4: 'water',
answer: 2,
},
{
//SECTION B

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nJames was so wicked that all his mates a͟b͟h͟o͟r͟r͟e͟d͟ him.',
choice1: 'dismissed',
choice2: 'beat',
choice3: 'hated',
choice4: 'ignored',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe students listened to the headmaster with r͟a͟p͟t͟ attention.',
choice1: 'true',
choice2: 'equal',
choice3: 'undivided',
choice4: 'single',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nSam was appointed the office boy because of his f̲a̲i̲t̲h̲f̲u̲l̲n̲e̲s̲s̲.̲',
choice1: 'honesty',
choice2: 'cleverness ',
choice3: 'punctuality ',
choice4: 'neatness',
answer: 1,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nWe were taught that banks give c͟r͟e͟d͟i͟t͟ to needy businessmen.',
choice1: 'instalments',
choice2: 'debits',
choice3: 'transfers',
choice4: 'loans',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nMost men normally do not wear c͟o͟s͟t͟l͟y͟ jewellery.',
choice1: 'good',
choice2: 'expensive',
choice3: 'shiny',
choice4: 'new',
answer: 2,
},
{
//SECTION C


question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nThe wall clock in the assembly hall is a w̲h̲i̲t̲e̲ ̲e̲l̲e̲p̲h̲a̲n̲t̲\n This means that the clock',
choice1: 'does not work accurately',
choice2: 'is very big',
choice3: 'does not work any longer',
choice4: 'is very strong',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n His clothes are always o̲u̲t̲ ̲o̲f̲ ̲d̲a̲t̲e̲. This means that his clothes are \u2026',
choice1: 'torn',
choice2: 'too tight',
choice3: 'faded',
choice4: 'old-fashioned',
answer: 4,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nWhen it comes to honesty, Kweku is the o̲d̲d̲ ̲o̲n̲e̲ ̲o̲u̲t̲.̲ This means that Kweku',
choice1: 'is always absent',
choice2: 'does not tell the truth',
choice3: 'does not behave normally',
choice4: 'is very tricky',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nI stopped going out with Joe because he is l̲i̲g̲h̲t̲-̲f̲i̲n̲g̲e̲r̲e̲d̲.̲\n This means that Joe is a',
choice1: 'lazy person',
choice2: 'liar',
choice3: 'thief',
choice4: 'dishonest friend',
answer: 3,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\nThe manager\u2019s strange behaviour made the workers s̲m̲e̲l̲l̲ ̲a̲ ̲r̲a̲t̲.̲ This means that the workers became..\u2026',
choice1: 'rude',
choice2: 'discouraged',
choice3: 'disappointed',
choice4: 'suspicious',
answer: 4,
},
{
//SECTION D

question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nMy former headmaster has c͟o͟n͟s͟e͟n͟t͟e͟d͟ to be my referee.',
choice1: 'promised ',
choice2: 'planned ',
choice3: 'decided',
choice4: 'refused',
answer: 4,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe suspect was g̲u̲i̲l̲t̲y̲.̲',
choice1: 'free',
choice2: 'innocent',
choice3: 'discharged',
choice4: 'imprisoned',
answer: 2,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nWhen school starts the national flag is h̲o̲i̲s̲t̲e̲d̲.̲',
choice1: 'lowered ',
choice2: 'dropped ',
choice3: 'saluted ',
choice4: 'hung',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nWe could see that mother was very proud of her d͟a͟r͟k͟ complexion.',
choice1: 'natural',
choice2: 'clean',
choice3: 'fair',
choice4: 'attractive',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\nThe car needs a hard p͟u͟s͟h͟ in order to start.',
choice1: 'drag ',
choice2: 'tow ',
choice3: 'force',
choice4: 'pull',
answer: 4,
},
{
//SECTION E

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe doctor advised the patient to stay away \u2026..alcohol.',
choice1: 'for',
choice2: 'on',
choice3: 'from',
choice4: 'with',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nYou have not paid your fees, \u2026..?',
choice1: 'will you',
choice2: 'won\u2019t you ',
choice3: 'hadn\u2019t you ',
choice4: 'have you',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nHis pair of trousers \u2026..torn.',
choice1: 'is ',
choice2: 'are ',
choice3: 'have ',
choice4: 'has',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI prefer honey \u2026sugar.',
choice1: 'to ',
choice2: 'are ',
choice3: 'from ',
choice4: 'for',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIf it rains I \u2026..my crops.',
choice1: 'have planted',
choice2: 'had planted',
choice3: 'will have planted',
choice4: 'shall plant',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI can \u2026time for my homework.',
choice1: 'find enough easily ',
choice2: 'find easily enough ',
choice3: 'easily enough find ',
choice4: 'easily find enough',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nHave you heard the national anthem \u2026..in your language?',
choice1: 'sing ',
choice2: 'sung ',
choice3: 'sang ',
choice4: 'sings',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThis bag is \u2026.heavy for a child to carry.',
choice1: 'so',
choice2: 'very',
choice3: 'too',
choice4: 'much',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n\u2026..you dislike the girl, you shouldn\u2019t beat her.',
choice1: 'Even if ',
choice2: 'Since ',
choice3: 'As',
choice4: 'Of course',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nGhana is over forty years, therefore she \u2026of age.',
choice1: 'came',
choice2: 'come',
choice3: 'has come',
choice4: 'is coming',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nTo be a teenager is indeed great \u2026..?',
choice1: 'isn\u2019t it',
choice2: 'aren\u2019t you',
choice3: 'it is',
choice4: 'does it',
answer: 1,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAlf and Pat look so identical that it is difficult to pick the \u2026of the two.',
choice1: 'oldest',
choice2: 'old ',
choice3: 'elder ',
choice4: 'eldest',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nUncle Ebo brought a carpenter who easily climbed \u2026..the roof to repair the leakage.',
choice1: 'into',
choice2: 'on',
choice3: 'at',
choice4: 'onto',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nBola is the \u2026beautiful of the three girls.',
choice1: 'more ',
choice2: 'most ',
choice3: 'much ',
choice4: 'better',
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
