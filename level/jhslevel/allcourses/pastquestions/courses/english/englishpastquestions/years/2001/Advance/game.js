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
COMPREHENSION

Read the following passages carefully and answer the questions that follow each of them.

PASSAGE I

There stood an enormous tree in the centre of the town. Its big branches and dense foliage gave shelter in all weathers and so it had become a natural meeting place. Benches had been placed round the base of its huge trunk so that the elders of the town might sit in comfort and gossip or talk about serious affairs of the town. This particular morning, three old men were resting on one of the benches. They had chosen the side which overlooked the road entering the town. From there they could see the market, the lorry park and the main street.

As they watched, a large green bus drove into the lorry park. It was surrounded immediately by a jostling crowd. Those who wished to travel hurried forward and food sellers rushed from all sides struggling to sell their wares. In the general uproar which followed, new passengers tried to get into the bus, whilst those who had reached their destination tried to alight. Others who were not willing to risk losing their seats stood blocking the doorway or leaned out of the bus windows as they bargained with the food sellers.


Que 6 - 11
PASSAGE II

As I stood by a street in Accra that late afternoon watching people rushing home from work, I felt very safe. My sense of security came from the fact that Ghanaians are generally a kind and hospitable people, particularly to strangers. Although I had just arrived from my village, I was a Ghanaian and in my own capital. I should not fear anything.

Just then, I felt a firm grip on my arm from behind. I did not feel threatened; rather I was relieved. I thought an old schoolmate must have spotted me, James Cudjoe, and decided to play our old game on me. How welcome! The good old days are here again.

I turned to look the fellow in the face but the more I turned to my left the faster he moved to my right as he tightened his grip on my wrist watch. Suddenly he let go of my arm and bolted. I saw him vanish into the thick crowd. Certainly, this was not how to welcome a friend. People of the city are surely very strange!

Totally confused, I made my way towards the lorry park to leave for my brother‟s house. In the gathering darkness, I tried to find out what time it was. To my utter surprise, I discovered that my wrist watch was gone. The rascal had made away with it. It was hardly new or even expensive yet the rogue found it worth stealing.

*/
		
question: 'Read Passage I carefully and answer this question\nAccording to the passage the elders sit under the tree to',
choice1: 'travel outside',
choice2: 'buy and sell',
choice3: 'discuss matters',
choice4: 'drink palmwine',
answer: 3,
},
{
question: 'Read Passage I carefully and answer this question\nWhich of the following could the old men not see from where they sat?',
choice1: 'The benches',
choice2: 'The market',
choice3: 'The lorry park',
choice4: 'The main street',
answer: 1,
},
{
question: 'Read Passage I carefully and answer this question\nUproar in the passage means',
choice1: 'fight',
choice2: 'movement',
choice3: 'selling',
choice4: 'confusion',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nSome people on the bus tried to alight because they wanted to',
choice1: 'buy things',
choice2: 'gossip',
choice3: 'rest',
choice4: 'go home',
answer: 4,
},
{
question: 'Read Passage I carefully and answer this question\nSome of the passengers blocked the way because they',
choice1: 'did not like the food sellers',
choice2: 'did not want to lose their seats',
choice3: 'wanted to stop the new passengers',
choice4: 'wanted to see the old men',
answer: 2,
},
{

question: 'Read Passage II carefully and answer this question\nThe writer thought he was safe in Accra because ',
choice1: 'he saw people rushing home from work ',
choice2: 'he had just arrived from his village',
choice3: 'Ghanaians would welcome him',
choice4: 'Ghanaians are famous for their kindness.',
answer: 4,
},
{
question: 'Read Passage II carefully and answer this question\nSpotted in the passage means',
choice1: 'looked at',
choice2: 'recognized',
choice3: 'marked',
choice4: 'pointed at',
answer: 2,
},
{
question: 'Read Passage II carefully and answer this question\nThe writer turned to his left because he wanted to',
choice1: 'see the person behind him. ',
choice2: 'keep his wrist watch safe. ',
choice3: 'welcome his old friend.',
choice4: 'play with his schoolmate.',
answer: 1,
},
{
question: 'Read Passage II carefully and answer this question\nAccording to the passage, the fellow grabbed Cudjoe‟s arm because',
choice1: 'he wanted to embrace him',
choice2: 'they were mates',
choice3: 'he wanted to steal the watch',
choice4: 'they stood together',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nRogue in the passage refers to',
choice1: 'a worker',
choice2: 'the schoolmate',
choice3: 'the thief',
choice4: 'a citizen',
answer: 3,
},
{
question: 'Read Passage II carefully and answer this question\nWhich of the following is not true according to the passage?',
choice1: 'People in Accra are strange',
choice2: 'People in Accra are classmates. ',
choice3: 'There are thieves in Accra.',
choice4: 'Workers in Accra return home in the evening.',
answer: 2,
},
{

question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nThe director was h͟u͟m͟i͟l͟i͟a͟t͟e͟d͟ when the theft was detected in his ministry.',
choice1: 'angered',
choice2: 'cautioned',
choice3: 'discouraged',
choice4: 'disgraced',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nNortey was i͟n͟d͟u͟s͟t͟r͟i͟o͟u͟s͟ so he was duly rewarded.',
choice1: 'intelligent',
choice2: 'hardworking',
choice3: 'careful',
choice4: 'courageous',
answer: 2,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nBorn and bred in an a͟f͟f͟l͟u͟e͟n͟t͟ home, he never experienced any hardships in life.',
choice1: 'respectable',
choice2: 'religious',
choice3: 'happy',
choice4: 'rich',
answer: 4,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nD͟a͟z͟z͟l͟e͟d͟ by the bright headlights of the approaching vehicle, our driver drove into the bush.',
choice1: 'Disturbed ',
choice2: 'Worried ',
choice3: 'Blinded',
choice4: 'Discouraged',
answer: 3,
},
{
question: 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence\nHe gave a p͟r͟e͟c͟i͟s͟e͟ definition of the word.',
choice1: 'learned',
choice2: 'hasty',
choice3: 'accurate',
choice4: 'short',
answer: 3,
},
{

question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n After serving ten years in prison he returned home u̲n̲d̲e̲r̲ ̲a̲ ̲c̲l̲o̲u̲d̲.̲',
choice1: 'in dull weather ',
choice2: 'very depressed ',
choice3: 'in disgrace',
choice4: 'very secretly',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n His father‟s death, which was a̲ ̲b̲o̲l̲t̲ ̲f̲r̲o̲m̲ ̲t̲h̲e̲ ̲b̲l̲u̲e̲, greatly affected his education.',
choice1: 'a disastrous event ',
choice2: 'a complete surprise ',
choice3: 'a mournful affair',
choice4: 'a blessing in disguise',
answer: 2,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n Kofi Mensah found it difficult to d̲o̲ ̲a̲w̲a̲y̲ ̲w̲i̲t̲h̲ ̲h̲i̲s̲ ̲h̲a̲b̲i̲t̲s̲ This means that Kofi Mensah could not ………….his habits.',
choice1: 'continue',
choice2: 'hide',
choice3: 'stop',
choice4: 'talk about',
answer: 3,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n Many people dislike Abugri because he enjoys b̲l̲o̲w̲i̲n̲g̲ ̲h̲i̲s̲ ̲o̲w̲n̲ ̲t̲r̲u̲m̲p̲e̲t̲.̲ This means that Abugri is',
choice1: 'boastful',
choice2: 'greedy',
choice3: 'disrespectful',
choice4: 'shameless',
answer: 1,
},
{
question: 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined words.\n When Susan was caught stealing money, she s̲h̲e̲d̲ ̲c̲r̲o̲c̲o̲d̲i̲l̲e̲ ̲t̲e̲a̲r̲s̲.̲ This means that Susan',
choice1: 'pretended she was sorry. ',
choice2: 'was annoyed.',
choice3: 'was embarrassed.',
choice4: 'cried like a crocodile',
answer: 1,
},
{


question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The health officer advised the people not to c͟o͟n͟t͟a͟m͟i͟n͟a͟t͟e͟ the water any further',
choice1: 'fetch ',
choice2: 'store ',
choice3: 'purify ',
choice4: 'use',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Theresa wanted to know the time of a͟r͟r͟i͟v͟a͟l͟ of the plane.',
choice1: 'schedule',
choice2: 'routine',
choice3: 'departure',
choice4: 'boarding',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n I must c̲o̲n̲s̲e̲n̲t̲ ̲t̲o̲ this proposal.',
choice1: 'ignore',
choice2: 'question',
choice3: 'disagree with',
choice4: 'react to',
answer: 3,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n Yesterday my cousin looked very d̲e̲p̲r̲e̲s̲s̲e̲d̲.̲',
choice1: 'contented',
choice2: 'active',
choice3: 'surprise',
choice4: 'cheerful',
answer: 1,
},
{
question: 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence\n The level of the river s͟u͟b͟s͟i͟d͟e͟d͟ after the floods.',
choice1: 'outflowed ',
choice2: 'ascended ',
choice3: 'enlarged',
choice4: 'rose',
answer: 4,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI suggest that they ………….the piano instead.',
choice1: 'are playing',
choice2: 'play',
choice3: 'playing',
choice4: 'will play',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n ……………..frankly, I hate the idea.',
choice1: 'Speak ',
choice2: 'Spoken ',
choice3: 'To speak',
choice4: 'For speaking',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nI think we …………….Kwesi‟s offer.',
choice1: 'better taking',
choice2: 'had better take ',
choice3: 'had better taken ',
choice4: 'better to take',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\n…………… the arable land was under cultivation.',
choice1: 'Most',
choice2: 'Many of',
choice3: 'More',
choice4: 'Most of',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nIn attempting to control us, the headmaster gave ………….a great deal of trouble.',
choice1: 'themselves',
choice2: 'himself',
choice3: 'ourselves',
choice4: 'yourself',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nDo you believe in witches? ……………………',
choice1: 'Yes, I don‟t ',
choice2: 'No, I won‟t ',
choice3: 'Yes, I won‟t',
choice4: 'No, I don‟t',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nAba insisted that Adjoa ………….to the party.',
choice1: 'to have come',
choice2: 'has come ',
choice3: 'to come',
choice4: ' should come',
answer: 4,
},
{ 

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nEsi: „I felt rather tired yesterday.‟\n' +
'Efua: „Yes, …………….‟',
choice1: 'I did too',
choice2: 'so I did',
choice3: 'so did I',
choice4: 'I didn‟t',
answer: 3,
},
{

question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe students complained that there was ……………sugar in their tea.',
choice1: 'plenty',
choice2: 'few ',
choice3: 'little ',
choice4: 'small',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nOne of the duties of the police is to …………….traffic.',
choice1: 'lead',
choice2: 'regulate',
choice3: 'direct',
choice4: 'move',
answer: 3,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nHe decided to …………….the entrance examination again.',
choice1: 'have sat',
choice2: 'sit',
choice3: 'be sitting',
choice4: 'have been sitting',
answer: 2,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nWe won the school debate, …………….?',
choice1: 'hadn‟t we',
choice2: 'isn‟t it',
choice3: 'couldn‟t we',
choice4: 'didn‟t we',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nThe plumber turned the pipe so hard that it ………………',
choice1: 'will break',
choice2: 'breaks',
choice3: 'had broken',
choice4: 'broke',
answer: 4,
},
{
question: 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.\nHe was introduced …………………..the directors by his co-worker.',
choice1: 'by',
choice2: 'to',
choice3: 'through',
choice4: 'from',
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
