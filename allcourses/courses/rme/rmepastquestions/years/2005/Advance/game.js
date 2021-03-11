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
question: 'God commanded the earth to produce plants on the',
choice1: 'second day',
choice2: 'third day ',
choice3: 'fourth day ',
choice4: 'fifth day',
answer: 2,
},
{
question: 'In the creation story, God ordered Adam to',
choice1: 'subdue and till the earth',
choice2: 'take good careof Eve',
choice3: 'worship Him regularly',
choice4: 'eat all the fruits in the garden',
answer: 1,
},
{
question: 'The three main religions in Ghana believe in',
choice1: 'ancestors and witches',
choice2: 'holy scriptures',
choice3: 'angels and smaller gods',
choice4: 'a supreme being',
answer: 4,
},
{
question: 'The Asafo companies are concerned with the promotion of all the following except',
choice1: 'good behaviour',
choice2: 'cultural development',
choice3: 'adolescent reproductive health',
choice4: 'social development',
answer: 3,
},
{
question: 'The Damba festival is celebrated to mark the',
choice1: 'end of the agricultural year',
choice2: 'birthday of Prophet Muhammad',
choice3: 'founding of the Mole-Dagbon',
choice4: 'birthday of the Yaa Naa I',
answer: 2,
},
{
question: 'For a man to greet an Akan chief he must',
choice1: 'raise hands and bow down',
choice2: 'raise hands and pass by',
choice3: 'remove sandals and kneel down',
choice4: 'remove sandals and lower the cloth',
answer: 4,
},
{
question: 'Muslims throw stones during Hajj to',
choice1: 'keep Satan away from their lives',
choice2: 'commemorate Hagar‟s departure',
choice3: 'help them celebrate the Eid-ul-Adha',
choice4: 'remember Abraham‟s temptation',
answer: 1,
},
{
question: 'Prophet Muhammad‟s marriage with Khadijah enabled himto',
choice1: 'free many Muslim slaves',
choice2: 'devote more time for worship',
choice3: 'migrate to Medina',
choice4: 'preach publicly in Mecca',
answer: 1,
},
{
question: 'The traditions of the Prophet Muhammad which form part of theQuran are the',
choice1: 'Injil and Zabur',
choice2: 'Hadith and Sunnah',
choice3: 'Sunnah and Injil',
choice4: 'Ru‟ya and Hadith',
answer: 2,
},
{
question: 'Which of the following attributes of God is not manifested in the creation story?',
choice1: 'All knowing',
choice2: 'Ever forgiving', 
choice3: 'All powerful', 
choice4: 'Ever present',
answer: 2,
},
{
question: 'According to the Qur‟an, a proud person',
choice1: 'never thinks he is better than others',
choice2: 'respects the opinions of others',
choice3: 'values the experiences of other people',
choice4: 'likes to tell other people what to do',
answer: 4,
},
{
question: 'The chief who offered himself to be sacrificed during the Ashanti-Denkyira war was',
choice1: 'Opoku Ware',
choice2: 'Egya Ahor',
choice3: 'Ntim Gyakari',
choice4: 'Tweneboa Kodua',
answer: 4,
},
{
question: 'The Bible teaches that people in authority must be',
choice1: 'praised',
choice2: 'served',
choice3: 'respected',
choice4: 'proud',
answer: 3,
},
{
question: 'The Janazah prayer is performed',
choice1: 'during Friday worship',
choice2: 'when a Muslim dies',
choice3: 'when a Muslim is traveling',
choice4: 'after the Ramadan fast',
answer: 3,
},
{
question: 'The Young People‟s Guild is an organization in the',
choice1: 'Methodist church',
choice2: 'Anglican church',
choice3: 'Presbyterian church',
choice4: 'Pentecost church',
answer: 3,
},
{
question: 'Thepurpose of Salat is to enable a Muslim',
choice1: 'travel to Mecca ',
choice2: 'have a pure heart ',
choice3: 'become an Imam',
choice4: 'prepare for the Ramadan fast',
answer: 2,
},
{
question: 'The traditional belief that the child needs no one to show him God means',
choice1: 'God is with the child',
choice2: 'God exists',
choice3: 'the child knows God',
choice4: 'the child talks to God',
answer: 2,
},
{
question: 'Abraham was known for his great faith because he',
choice1: 'refused the idols of Canaan',
choice2: 'was willing to sacrifice his son to God',
choice3: 'built an altar to worship God',
choice4: 'agreed to separate from Lot',
answer: 2,
},
{
question: 'Thetribes ofIsrael derived theirnames from the sons of',
choice1: 'Abraham',
choice2: 'Joseph ',
choice3: 'Jacob ',
choice4: 'Isaac',
answer: 3,
},
{
question: 'The transition between childhood and adulthood is termed',
choice1: 'outdooring ',
choice2: 'adolescence ',
choice3: 'puberty',
choice4: 'confirmation',
answer: 3,
},
{
question: 'When one refuses to play with bad friends on the advice of parents, one is described as being',
choice1: 'God-fearing',
choice2: 'sincere ',
choice3: 'obedient ',
choice4: 'polite',
answer: 3,
},
{
question: 'Putting one‟s interest above that of others results in',
choice1: 'understanding',
choice2: 'debate',
choice3: 'togetherness',
choice4: 'conflict',
answer: 4,
},
{
question: 'One disadvantage of the nuclear family system is that',
choice1: 'too many people give orders',
choice2: 'there is difficulty in identifying kinsmen',
choice3: 'there are conflicts in sharing property',
choice4: 'parents feel lonely at old age',
answer: 2,
},
{
question: 'There is dignity in labour. This statement means',
choice1: 'only office work brings recognition',
choice2: 'some jobs are more dignified than others',
choice3: 'we should work among all classes of people',
choice4: 'we need to be proud of our work',
answer: 4,
},
{
question: 'Which of the following is not a peaceful way to ask for your right?',
choice1: 'Petition',
choice2: 'Kidnapping ',
choice3: 'Silent protest ',
choice4: 'Lobbying',
answer: 2,
},
{
question: 'In Ghana people are said to lead decent life when they',
choice1: 'shout in public for their rights',
choice2: 'make people respect them ',
choice3: 'weed around the compound ',
choice4: 'have leisure with friends',
answer: 2,
},
{
question: 'Repentance leads to',
choice1: 'denial forgiveness',
choice2: 'forgiveness and reconciliation',
choice3: 'punishment and forgiveness',
choice4: 'reconciliation and denial',
answer: 2,
},
{
question: 'Which of the following is not an appropriate reward for good deeds?',
choice1: 'Testimonial',
choice2: 'Cash',
choice3: 'Appreciation',
choice4: 'Scholarship',
answer: 2,
},
{
question: 'When people are committed to themselves in friendship they',
choice1: 'work at the same place',
choice2: 'worship together in a church',
choice3: 'show loyalty to each other',
choice4: 'run away from evil',
answer: 3,
},
{
question: 'Duties given by a senior to a junior are termed as',
choice1: 'privileges',
choice2: 'rights',
choice3: 'responsibilities',
choice4: 'authority',
answer: 3,
},
{
question: 'The term idleness in Religious and Moral Education means',
choice1: 'having fun',
choice2: 'enjoying siesta',
choice3: 'wasting time',
choice4: 'playing games',
answer: 3,
},
{
question: 'Sex education in school is important because it',
choice1: 'makes children sexually active',
choice2: 'could lead to early marriage',
choice3: 'creates curiosity among children',
choice4: 'exposes the dangers of pre-marital sex',
answer: 4,
},
{
question: 'Which of the following drugs is most commonly abused',
choice1: 'Cocaine ',
choice2: 'Laxatives ',
choice3: 'Tobacco',
choice4: 'Paracetamol',
answer: 4,
},
{
question: 'In which way can money help spread germs?',
choice1: 'keeping it in a purse for a long period',
choice2: 'Handling it with hands',
choice3: 'Crumpling it in one‟s pocket',
choice4: 'Keeping it in one‟s brassiere',
answer: 4,
},
{
question: 'A child is described as courteous when he or she',
choice1: 'assists the elderly',
choice2: 'dresses well to church',
choice3: 'gives gift to friends',
choice4: 'learns at school',
answer: 1,
},
{
question: 'Waiting and allowing things to happen at the right time shows',
choice1: 'honesty',
choice2: 'patience',
choice3: 'commitment',
choice4: 'obedience',
answer: 2,
},
{
question: 'When we regret for a bad deed, we are showing',
choice1: 'courage',
choice2: 'forgiveness',
choice3: 'repentance',
choice4: 'reconciliation',
answer: 3,
},
{
question: 'The statement time is money, implies that timeis',
choice1: 'precious ',
choice2: 'limitless ',
choice3: 'life',
choice4: 'everything',
answer: 1,
},
{
question: 'Which of the following is a festival of purification fortheyear?',
choice1: 'Addae ',
choice2: 'Odwira ',
choice3: 'Homowo ',
choice4: 'Damba',
answer: 2,
},
{
question: 'A patriotic citizen is a person who',
choice1: 'helps the family always',
choice2: 'practices personal hygiene',
choice3: 'defends his nation always',
choice4: 'worships his Creator regularly',
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
