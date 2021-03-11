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
question: 'The first Ark to save God‟s people from the flood was built by',
choice1: 'David ',
choice2: 'Abraham ',
choice3: 'Noah ',
choice4: 'Solomon ',
choice5: 'Moses',
answer: 3,
},
{
question: 'Jesus Christ began his ministry at the age of',
choice1: '12 ',
choice2: '25 ',
choice3: '30 ',
choice4: '33 ',
choice5: '45',
answer: 3,
},
{
question: 'A Muslim is a person who',
choice1: 'is at peace with God and his neighbour',
choice2: 'can recite the whole Quran ',
choice3: 'fasts during the Ramadan ',
choice4: 'visits Mecca every year',
choice5: 'comes from Arabia',
answer: 1,
},
{
question: 'From the age of eight, Muhammad was brought up by',
choice1: 'Halimah',
choice2: 'Abdul Mutalib',
choice3: 'Khadijah',
choice4: 'Abu Talib',
choice5: 'Abdullah Amina',
answer: 4,
},
{
question: 'The Muslim festival of sacrifice is',
choice1: 'Eid-ul-Fitr ',
choice2: 'Bilabi Nabi ',
choice3: 'Ramadan',
choice4: 'Eid-ul-Khalimat',
choice5: 'Eid-ul-Adhar',
answer: 5,
},
{
question: 'One of the characteristics of the African Traditional Religion is that it',
choice1: 'originates from the Far East',
choice2: 'regards God and Jesus at the centre of worship',
choice3: 'was established by a powerful African King ',
choice4: 'has common beliefs and practices with Islam ',
choice5: 'has no written scriptures',
answer: 5,
},
{
question: 'Traditional religion is practiced in order to',
choice1: 'instil discipline',
choice2: 'worship idols',
choice3: 'preserve African culture',
choice4: 'disregard other religion',
choice5: 'seek help from magicians',
answer: 1,
},
{
question: 'God is omnipresent. This means that God',
choice1: 'is all-powerful',
choice2: 'knows everything',
choice3: 'is everywhere ',
choice4: 'is all forgiving ',
choice5: 'is very gracious',
answer: 3,
},
{
question: 'God blessed and made the Sabbath holy because it was the day',
choice1: 'the Israelites fought their wars',
choice2: 'for settling all disputes',
choice3: 'set aside for the Passover feast',
choice4: 'that God rested from creation',
choice5: 'Moses received the Ten Commandments',
answer: 4,
},
{
question: 'Salat is to prayer as charity is to',
choice1: 'Zakat ',
choice2: 'Shahadah ',
choice3: 'Sawm ',
choice4: 'Hajj ',
choice5: 'Sunnah',
answer: 1,
},
{
question: 'Akwasi dae according to the Akan calendar is',
choice1: 'a day that marks the beginning of the month',
choice2: 'the first Sunday that marks the beginning of the month',
choice3: 'the Sunday that marks the 42nd day of themonth',
choice4: 'a day on which the Golden Stool descended',
choice5: 'a day when rituals are not performed',
answer: 3,
},
{
question: 'The first Jewish temple was built by',
choice1: 'David ',
choice2: 'Saul ',
choice3: 'Solomon ',
choice4: 'Samuel ',
choice5: 'Elijah',
answer: 3,
},
{
question: 'Jesus Christ was born in',
choice1: 'Jerusalem ',
choice2: 'Bethlehem ',
choice3: 'Bethsaida ',
choice4: 'Galilee ',
choice5: 'Nazareth',
answer: 2,
},
{
question: 'Which of the following succeeded Muhammad?',
choice1: 'Abdullah',
choice2: 'Musa Muhammad',
choice3: 'Abubakar',
choice4: 'Issa Ibrahim',
choice5: 'Ali Muhammad',
answer: 3,
},
{
question: 'The main role of angels in Islam is to',
choice1: 'reveal Allah‟s orders and messages to His Prophets',
choice2: 'help Allah‟s Prophets to understand the Quran',
choice3: 'explain dreams to the people',
choice4: 'give spiritual powers for the writing of Quran',
choice5: 'give spiritual powers to those who perform sacrifices to Allah',
answer: 1,
},
{
question: 'Howmanytimes do Muslims go round the Ka‟ba during the Hajj?',
choice1: '1 ',
choice2: '3 ',
choice3: '5 ',
choice4: '7 ',
choice5: '10',
answer: 4,
},
{
question: 'The Dentsi Asafo Company is associated with the festival of',
choice1: 'Homowo ',
choice2: 'Aboakyir ',
choice3: 'Odwira ',
choice4: 'Akwambo ',
choice5: 'Damba',
answer: 2,
},
{
question: 'Which of the following festivals help to develop the strength and vitality of the youth?',
choice1: 'Hogbetsotso',
choice2: 'Odwira',
choice3: 'Fetu',
choice4: 'Damba',
choice5: 'Aboakyir',
answer: 5,
},
{
question: 'One of the roles of the ancestor is to ',
choice1: 'ensure harmony in the family ',
choice2: 'give authority to thepeople',
choice3: 'settle our debts',
choice4: 'raise more ancestors from the family',
choice5: 'avenge his death',
answer: 1,
},
{
question: 'Dipo is a traditional',
choice1: 'festival',
choice2: 'naming ceremony',
choice3: 'puberty rite',
choice4: 'death rite',
choice5: 'worship',
answer: 3,
},
{
question: 'One can promote good relationship and peaceful living by being',
choice1: 'violent and respectful ',
choice2: 'respectful and obedient ',
choice3: 'helpful to relatives',
choice4: 'tactful and aggressive',
choice5: 'kind and vocal',
answer: 2,
},
{
question: 'Which of the following does not promote progress in a society?',
choice1: 'Conflicts',
choice2: 'Reconciliation',
choice3: 'Communal labour',
choice4: 'Confession',
choice5: 'Festivals',
answer: 1,
},
{
question: 'Kofi‟s father is an Ewe and the mother is Fante. Which of the following statements about Kofi is true?',
choice1: 'He belongs to the father‟s clan only',
choice2: 'He belongs to the mother‟s clan only',
choice3: 'He belongs to both the father and mother‟s clan', 
choice4: 'He cannot become a chief in the mother‟s town', 
choice5: 'He cannot inherit his father or mother',
answer: 3,
},
{
question: 'The main cause of diseases in our communities is',
choice1: 'filth in our surroundings',
choice2: 'lack of refuse trucks',
choice3: 'lack of drugs',
choice4: 'malaria parasites',
choice5: 'poor eating habits',
answer: 1, 
},
{
question: 'Conflicts develop among us through',
choice1: 'good neighbourliness',
choice2: 'reconciliation',
choice3: 'ambitions',
choice4: 'laziness',
choice5: 'misunderstandings',
answer: 5,
},
{
question: 'Which organisation in Ghana, deals with human rights issues',
choice1: 'National Commission on Children',
choice2: 'National Council for Women and Development',
choice3: 'Commission on Human Rights and Administrative Justice',
choice4: 'National Commission for Civic Education',
choice5: 'United Nations Commission on Human Rights',
answer: 3,
},
{
question: 'To die intestate means',
choice1: 'dying with a will made',
choice2: 'dying with so much property and wealth ',
choice3: 'having no one inheriting you after death ',
choice4: 'being inherited by your own children',
choice5: 'dying without making a will',
answer: 5,
},
{
question: 'Which ofthe following pairs ofgamescan bestmakethe child wise andstrong?',
choice1: 'Riddles and oware',
choice2: 'Ampe and quizzes',
choice3: 'Tug-of-war andwrestling',
choice4: 'Oware and quizzes',
choice5: 'Ampe and wrestling',
answer: 2,
},
{
question: 'When you apologize for committing an offence, you aresaid to be',
choice1: 'comporting ',
choice2: 'courteous ',
choice3: 'obedient',
choice4: 'knowledgeable',
choice5: 'law abiding',
answer: 2,
},
{
question: 'Leisure time is described as a time for',
choice1: 'scrubbing the toilet and kitchen',
choice2: 'going to church to worship',
choice3: 'attending the funeral of are lative',
choice4: 'attending school and doing home work',
choice5: 'playing indoor and outdoor games',
answer: 5,
},
{
question: 'Obedience to the laws of the state can make us',
choice1: 'fearful and honest citizens',
choice2: 'gentleand loving citizens',
choice3: 'simple and God-fearing citizens',
choice4: 'patriotic and good citizens',
choice5: 'tolerant and forgiving citizens',
answer: 4,
},
{
question: 'A good eating habit involves',
choice1: 'eating and drinking noisily at table',
choice2: 'eating with a cutlery set',
choice3: 'eating and talking at the same time',
choice4: 'putting on aprons before eating',
choice5: 'requesting the one close to you to pass on an item to you',
answer: 5,
},
{
question: 'We contribute to church dues and offerings to ',
choice1: 'enable the church develop spiritually ',
choice2: 'promote deliverance services.',
choice3: 'help pastors preach well.',
choice4: 'help evangelize and care for the poor',
choice5: 'help the church members to be anointed',
answer: 4,
},
{
question: 'To live a chaste life, one must',
choice1: 'avoid bad friends and casual sex',
choice2: 'work hard and speak the truth',
choice3: 'beobedient to parents and elders',
choice4: 'become a born again Christian',
choice5: 'avoid teenage pregnancy',
answer: 1,
},
{
question: 'The practice of the moral teachings of the various religions will lead to',
choice1: 'increase in church attendance',
choice2: 'war and violence',
choice3: 'peace in society',
choice4: 'building of more schools',
choice5: 'the creation of more jobs',
answer: 3,
},
{
question: 'Which type of substance is coffee?',
choice1: 'Stimulant',
choice2: 'Hard drug',
choice3: 'Common drug',
choice4: 'Beverage',
choice5: 'Vitamin',
answer: 1,
},
{
question: '“The child breaks the shell of a snail and not that of the tortoise.” This proverb means one',
choice1: 'must work hard',
choice2: 'should avoid laziness',
choice3: 'should not be over-ambitious',
choice4: 'should fight courageously',
choice5: 'should be kind to animals',
answer: 3,
},
{
question: 'Which of the following does not constitute a moral responsibility of the child?',
choice1: 'Sweeping the classroom',
choice2: 'Working on his plot',
choice3: 'Worshipping God',
choice4: 'Being punctual at school',
choice5: 'Payment of school fees',
answer: 5, 
},
{
question: 'What contribution can a child make when a community school is being put up?',
choice1: 'Roofing the building',
choice2: 'Fetching water and sand',
choice3: 'Drawing up the building plan',
choice4: 'Cheering the workers up with songs',
choice5: 'Providing food for the workers',
answer: 2,
},
{
question: 'One of the benefits of working hard is',
choice1: 'putting up good houses',
choice2: 'having leisure',
choice3: 'becoming financially self-reliant ',
choice4: 'becoming popular and respectful ',
choice5: 'becoming rich and authoritative',
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
