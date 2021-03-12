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
question: 'God revealed himself in the Garden of Eden to',
choice1: 'Moses ',
choice2: 'Abraham ',
choice3: 'Eve ',
choice4: 'Adam',
answer: 4,
},
{
question: 'The Qur‟an was revealed to Muhammed through',
choice1: 'Abu Bakr ',
choice2: 'Angel Jibril ',
choice3: 'Zayd Ibn Thabit ',
choice4: 'Angel Mikail',
answer: 2,
},
{
question: 'Which of the following celebrations signifies the salvation of all Christians?',
choice1: 'Christmas ',
choice2: 'Palm Sunday ',
choice3: 'Good Friday ',
choice4: 'Easter',
answer: 4,
},
{
question: 'Which of the Ten Commandments carries a promise?',
choice1: 'You shall honour your father and mother',
choice2: 'You shall not tell lies about somebody',
choice3: 'You shall not swear falsely.',
choice4: 'You shall keep the Sabbath day holy.',
answer: 1,
},
{
question: 'The most important source of morality in Islam is',
choice1: 'Hadith ',
choice2: 'Sunnah ',
choice3: 'Qur’an ',
choice4: 'Tawrah',
answer: 3,
},
{
question: 'Isaac prayed for his wife Rebecca because, she',
choice1: 'had twins in her womb',
choice2: 'did not believe in God‟s promises',
choice3: 'suffered from her pregnancy',
choice4: 'was a barren woman',
answer: 4,
},
{
question: 'The practice whereby a Muslim gives a certain percentage of his wealth to the needy is called',
choice1: 'Sadaqah ',
choice2: 'Zakat ',
choice3: 'Hajj ',
choice4: 'Sawn',
answer: 2,
},
{
question: 'God saved the believers from the flood through',
choice1: 'Abraham ',
choice2: 'Moses ',
choice3: 'Noah ',
choice4: 'Joseph',
answer: 3,
},
{
question: 'Caliph Abu Bakr is remembered for',
choice1: 'going on pilgrimage with the prophet',
choice2: 'marrying the prophet‟s daughter ',
choice3: 'compiling the Qur‟an into a book ',
choice4: 'defending the prophet in Mecca',
answer: 3,
},
{
question: 'The sprinkling of kpoikpoi during Homowo signifies',
choice1: 'abundance of food',
choice2: 'driving away of evil spirits',
choice3: 'feeding the ancestors',
choice4: 'showing togetherness',
answer: 3,
},
{
question: 'The belief in the oneness of Allah is known as',
choice1: 'Salat ',
choice2: 'Tawhid ',
choice3: 'Tawaf ',
choice4: 'Zakat',
answer: 3,
},
{
question: 'Mu slims fast in the month of Ramadan in order to',
choice1: 'save food',
choice2: 'guard against evil',
choice3: 'keep the body fit',
choice4: 'honour the poor and needy',
answer: 2,
},
{
question: 'The need for repentance is expressed in the parable of the',
choice1: 'Sower',
choice2: 'Mustard seed',
choice3: 'Good Samaritan',
choice4: 'Prodigal son',
answer: 4,
},
{
question: 'Constant prayers are offered among Muslims to enable them to',
choice1: 'be tolerant and clean ',
choice2: 'become upright in life ',
choice3: 'have humour and love',
choice4: 'become steadfast and patriotic',
answer: 2,
},
{
question: 'Unhappiness in marriage occurs when couples',
choice1: 'come from the same background',
choice2: 'pursue personal interests',
choice3: 'share similar values and ideas',
choice4: 'accept each other‟s family',
answer: 2,
},
{
question: 'Which of the following attributes of God shows that He has the whole world under His view?',
choice1: 'omnipotence ',
choice2: 'creator ',
choice3: 'omnipresence ',
choice4: 'omniscience',
answer: 3,
},
{
question: 'The Ga introduce the child to rain and earth during outdooring ceremony by',
choice1: 'placing the child on the ground three times',
choice2: 'lifting the child to the sky three times',
choice3: 'pouring corn-wine libation to ancestors',
choice4: 'throwing water on the roof to trickle onto the child', 
answer: 4,
},
{
question: 'The Holy Communion reminds Christians of Jesus‟',
choice1: 'resurrection ',
choice2: 'last supper ',
choice3: 'crucifixion ',
choice4: 'birth',
answer: 3,
},
{
question: 'The name Moses means',
choice1: 'washed in water',
choice2: 'drawn out of water ',
choice3: 'abandoned in water ',
choice4: 'baptized with water',
answer: 2,
},
{
question: 'The traditional festival which helps to develop the strength of the youth is',
choice1: 'Aboakyer ',
choice2: 'Hogbetsotso ',
choice3: 'Damba ',
choice4: 'Fetu',
answer: 1,
},
{
question: 'Good working habits include all the following except',
choice1: 'honesty ',
choice2: 'reliability ',
choice3: 'commitment ',
choice4: 'faith',
answer: 4,
},
{
question: 'In advising the youth, the elderly usually ends with the proverb, ',
choice1: 'patience moves mountains',
choice2: 'a rolling stone gathers no moss',
choice3: 'a child cracks snails and not tortoise. ',
choice4: 'a word to the wise is enough',
answer: 4,
},
{
question: 'Which of the following is not a cause of teenage pregnancy?',
choice1: 'Broken home',
choice2: 'Lack of societal amenities',
choice3: 'Peer pressure',
choice4: 'Immoral practices',
answer: 2,
},
{
question: 'Hard work is most often crowned with',
choice1: 'favours ',
choice2: 'success ',
choice3: 'popularity ',
choice4: 'obedience',
answer: 2,
},
{
question: 'We show good manners by',
choice1: 'wearing fashionable dress',
choice2: 'smiling to people',
choice3: 'attending social gatherings',
choice4: 'giving money to people',
answer: 2,
},
{
question: 'Which of the following factors best helps in promoting good family relationships?',
choice1: 'Boys going to school instead of girls',
choice2: 'Staying with other relatives',
choice3: 'Parents coming closer to children',
choice4: 'Children being sent on errands',
answer: 3,
},
{
question: 'When things go wrong with our lives, we must blame',
choice1: 'our teachers ',
choice2: 'our peers ',
choice3: 'ourselves ',
choice4: 'our parents',
answer: 3,
},
{
question: 'The Adae festival is celebrated to mark the',
choice1: 'beginning of farming season ',
choice2: 'purification of the community ',
choice3: 'remembrance of the ancestors',
choice4: 'migration of the people to their present location',
answer: 3,
},
{
question: 'Household chores are done mainly by the',
choice1: 'grandmother ',
choice2: 'mother ',
choice3: 'father ',
choice4: 'children',
answer: 4,
},
{
question: 'The rights and privileges of every citizen is guaranteed in the',
choice1: 'Constitution ',
choice2: 'Bible ',
choice3: 'Qur‟an ',
choice4: 'By-laws',
answer: 1,
},
{
question: 'One who loves his / her country',
choice1: 'helps the needy always',
choice2: 'practices personal hygiene',
choice3: 'defends the nation',
choice4: 'worships God always',
answer: 3,
},
{
question: 'A major reason for establishing traditional youth organization is to',
choice1: 'defend the interest of the community',
choice2: 'protect the ancestors and gods',
choice3: 'embark on educational tours',
choice4: 'fight those who destroy the environment',
answer: 1,
},
{

question: 'The basic quality expected in any youth organisation is',
choice1: 'the spirit of voluntarism',
choice2: 'love for one‟s parents',
choice3: 'disregard for non-members of the group',
choice4: 'constant prayers',
answer: 1,
},
{
question: 'To promote peaceful living in the home,',
choice1: 'the father should take decisions alone',
choice2: 'the mother should take decisions alone',
choice3: 'only the fatherand mother should take decisions',
choice4: 'father, mother and children should take decisions',
answer: 4,
},
{
question: 'Which of the following is not a reason for living a decent life?',
choice1: 'To earn the respect of people',
choice2: 'To gain the trust ofothers',
choice3: 'To receive praises from others',
choice4: 'To have a good name',
answer: 3,
},
{
question: 'A proverb is a wise saying meant to',
choice1: 'test people‟s endurance', 
choice2: 'enrich one‟s language', 
choice3: 'make people proud',
choice2: 'sing praises of men.',
answer: 2, 
},
{
question: 'At what age does one qualify to vote?',
choice1: '15 years ',
choice2: '17 years ',
choice3: '18 years ',
choice4: '21 years',
answer: 3,
},
{
question: 'Human rights include all the followingexcept',
choice1: 'the right to vote',
choice2: 'administering instant justice',
choice3: 'the right to live',
choice4: 'freedom ofworship',
answer: 2,
},
{
question: 'Folktales are important because, they',
choice1: 'teach about other people',
choice2: 'teach moral lessons',
choice3: 'make children happy',
choice4: 'are loved by grandparents',
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
