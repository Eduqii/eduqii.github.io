/*const question = document.querySelector('#question');
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
	question: 'Man was the last creation of God because, God wanted him to',
	choice1: 'be satisfied with all that he would need',
	choice2: 'go round and see all other things He created',
	choice3: 'help him name the creatures',
	choice4: 'produce and fill the earth',
	answer: 1,
},
 {

	question: 'The Gye Nyame symbol of the Akans signifies that God is',
	choice1: 'everywhere',
	choice2: 'all-powerful',
	choice3: 'all-seeing',
	choice4: 'all-loving',
	answer: 2,

},
 {

	question: 'Muslims believe that God created the rain in order to',
	choice1: 'give us rivers and fish',
	choice2: 'make a mighty ocean',
	choice3: 'sustain plant and animal growth',
	choice4: 'cool the atmosphere',
	answer: 3,
},
 {

	question: 'A lesson from the fall of man is that we should',
	choice1: 'continue to do good',
	choice2: 'take instructions from people',
	choice3: 'be obedient to our leaders',
	choice4: 'love all equally',
	answer: 3,

},
{
	question: 'The Oneness of Allah is known as',
	choice1: 'Tawhid',
	choice2: 'Shahadah',
	choice3: 'Shirk',
	choice4: 'Tawaf',
	answer: 1,
},
{
	question: 'The two dreams of Joseph focused on',
	choice1: 'apprenticeship',
	choice2: 'kinship',
	choice3: 'leadership',
	choice4: 'stewardship',
	answer: 3,
},
 {
 	question:'The sixth commandment You shall not kill teaches a lesson on',
	choice1: 'respect and fear of God',
	choice2: 'punishment for those who kill',
	choice3: 'the respect for human life',
	choice4: 'man being more valuable than animals',
	answer: 3,
},
 {

	question: 'Togbe Tsali gave his jaws to his people as a',
	choice1: 'totem to be worshipped',
	choice2: 'powerful instrument of divination',
	choice3: 'foundation stone for shrines',
	choice4: 'present to the king after him',
	answer: 3
},
 {

	question: 'Which of the following traditional festivals is used for cleansing and purification of society',
	choice1: 'Adae Kese',
	choice2: 'Akwasidae',
	choice3: 'Kundum',
	choice4:'Odwira',
	answer: 4,
},
 {
	question:' Muslims face the east when praying because',
	choice1: 'they believe that Allah is in the east',
	choice2: 'the sun rises from the east',
	choice3: 'of the position of the Kabah',
	choice4: 'the Prophet came from the east',
	answer: 3,
},
{
	question:' Christians call the Friday on which Jesus was crucified Good Friday because, it',
	choice1: 'marks the beginning of the Easter festivities',
	choice2: 'is a day on which they fast',
	choice3: 'marks the redemption from sin',
	choice4: 'shows the end of Jesus? ministry on earth',
	answer: 3,
},
{
	question:' A traditional chief may be destooled if he',
	choice1: 'becomes a born-again Christian',
	choice2: 'takes many wives',
	choice3: 'does not give birth to children',
	choice4:' misuses stool property',
	answer: 4,
},
{ 
	question:' The immediate cause of Muhammad’s departure to Madina was the',
	choice1: 'invitation from Yathrib',
	choice2: 'harsh conditions in Mecca',
	choice3: 'plan to kill him',
	choice4: 'desire to spread Islam',
	answer: 3,
},
{
 	question:' The moral significance of most Akan naming ceremonies is',
	choice1: 'bravery',
	choice2: 'patience',
	choice3: 'truthfulness',
	choice4: 'obedience',
	answer: 3,
},
{
	question:' In traditional religion, burying the dead with personal belongings signifies that',
	choice1: 'there is life after death',
	choice2: 'items are sent to the spiritual world',
	choice3: 'the dead pay for their journey',
	choice4: 'there is hunger in the spiritual world',
	answer:1,
},
{
 	question:' Most Ghanaians name their children after their ancestors. This act reveals their belief in',
	choice1: 'child birth',
	choice2: 'reincarnation',
	choice3: 'destiny',
	choice4: 'spirit powers',
	answer: 2,
},
{
 	question:' Which of the following religious practices is observed by the three major religions in Ghana',
	choice1: 'Ancestral worship',
	choice2: 'Animal sacrifice',
	choice3: 'Charity',
	choice4: 'Fasting',
	answer: 3,
},
{
	question:' God made man a steward of the earth to',
	choice1: 'take care of the environment',
	choice2: 'control all living things',
	choice3: 'feed himself and others',
	choice4: 'name all creatures',
	answer: 1,
},
{
 	question:' The washing of feet, hands and face by Muslims before prayers is known as',
	choice1: 'Janabah',
	choice2: 'Nifas',
	choice3: 'Wudu',
	choice4: 'Janazah',
	answer: 3,
},
{
	question:' Which of the following were not among the twelve disciples?',
	choice1: 'Matthew and James',
	choice2: 'Simon and Andrews',
	choice3: 'Peter and John',
	choice4: 'Paul and Barnabas',
	answer: 4,
},
{ 
	question:' To respect the views of others, one has to be',
	choice1: 'honest',
	choice2: 'calm',
	choice3: 'tolerant',
	choice4: 'patriotic',
	answer: 3,
},
{
	question:' Greetings portray an individual as being',
	choice1: 'gentle and obedient',
	choice2: 'God fearing and friendly',
	choice3: 'lovely and sincere',
	choice4: 'respectful and polite',
	answer: 4,
},
{
	question:' The proverb tasty soup draws seats means',
	choice1: 'it is good to be nice to people',
	choice2: 'parties should be well organized',
	choice3: 'good dishes are always enjoyable',
	choice4: 'one should learn to cope with difficulties',
	answer: 1,
},
 {
	question:' A person who is sincere and upright in his ways is said to be',
	choice1: 'generous',
	choice2: 'tolerant',
	choice3: 'honest',
	choice4: 'grateful',
	answer: 3,
},
{
	question:' Good behaviour pattern approved by society is known as',
	choice1: 'loyalty',
	choice2: 'moral value',
	choice3: 'patriotism',
	choice4: 'truthfulness',
	answer: 2,
},
 {
	question:' Rendering an apology for a wrong done shows one as being',
	choice1: 'sincere',
	choice2: 'repentant',
	choice3: 'God-fearing',
	choice4: 'comporting',
	answer: 2,
},
 {
	question:' Children who are obedient and live good moral lives are',
	choice1: 'hailed in society',
	choice2: 'always successful',
	choice3: 'promoted in school',
	choice4: 'bright in school',
	answer: 1,
},
{
	question:' Capital punishment is meant to',
	choice1: 'rehabilitate offenders',
	choice2: 'deter others',
	choice3: 'avenge a crime',
	choice4: 'compensate victims',
	answer: 2,
},
 {

	question:' According to Jesus, the summary of the ten commandments is',
	choice1: 'love for God and one’s neighbour',
	choice2: 'obedience to parents and the elderly',
	choice3: 'observing the Sabbath and keeping it holy',
	choice4: 'worshipping only God and not gods',
	answer: 1,
 },
{
	question:' Society expects us to perform good deeds in order to',
	choice1: 'avoid failure in life',
	choice2: 'help avoid laziness',
	choice3: 'make people responsible',
	choice4: 'promote peace and unity',
	answer: 4,
},
 {
	question: 'A child who does not want the mother to sleep will not sleep either.',
	question: 'his implies that our wrong deeds',
	choice1: 'affects us only',
	choice2: 'affect us and others',
	choice3: 'make the mother restless',
	choice4: 'make us unable to sleep.',
	answer: 2
},
{
	question:' The spirit of patriotism is best shown by the youth of',
	choice1: 'Young People’s Guild',
	choice2: 'Pentecost Youth Ministry.',
	choice3: 'Asafo Company.',
	choice4: 'Ahmadiyya Muslim Youth',
	answer: 3,
}, 
 {
	question:' Which of the following can be noticed in those who use drugs?',
	choice1: 'Quick response to questions in class',
	choice2: 'Disrespect for authority',
	choice3: 'Poor relationship with friends',
	choice4: 'Involvement in communal activities',
	answer: 3,
 },
 {
	question:' One civic responsibility of a citizen is to',
	choice1: 'expose wrongdoers in the community',
	choice2: 'be willing to accept correction',
	choice3: 'respect the traditions of the community',
	choice4: 'look after the poor in the community',
	answer: 1,
}, 
{
	question:' Repentance for one’s wrong action is necessary because it',
	choice1: 'demonstrates the fear of God',
	choice2: 'makes one live long',
	choice3: 'repairs broken relationship',
	choice4: 'leads to better understanding',
	answer: 3,
 },
 {
	question:' In the family system, an aunt is',
	choice1: 'a brother’s sister',
	choice2: 'an uncle’s daughter',
	choice3: 'a grandparent’s sister',
	choice4:'a father or mother’s sister',
	answer: 4,
},
 {
	question:' One way of living a chaste life is to avoid',
	choice1: 'talking to the opposite sex',
	choice2: 'casual sex',
	choice3: 'challenging authority',
	choice4: 'hard drugs',
	answer: 2,
},
{
 	question:' Privileges can be earned by showing that one is',
	choice1: 'intelligent',
	choice2: 'trustworthy',
	choice3: 'decent',
	choice4: 'hospitable',
	answer: 2,
},
{
 	question:' Story telling is an important event in a traditional home because it',
	choice1: 'makes children creative',
	choice2: 'teaches moral values',
	choice3: 'keeps children awake',
	choice4: 'brings people together',
	answer: 2,

},
 {

	question:' A pupil who is committed to his school will always',
	choice1: 'be obedient to his parents and learn hard',
	choice2: 'love his teachers and wash their clothes',
	choice3: 'buy gifts for his school when leaving',
	choice4: 'be punctual and do his preps',
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
