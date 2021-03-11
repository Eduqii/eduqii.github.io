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
question: 'According to the Bible, the first thing created was',
choice1: 'darkness',
choice2: 'light ',
choice3: 'plant ',
choice4: 'land',
answer: 4,
},
{
question: 'Cain‟s violent action against Abel was due to',
choice1: 'greed',
choice2: 'jealousy',
choice3: 'selfishness',
choice4: 'misunderstanding',
answer: 2,
},
{
question: 'The Akans call God Tweduampon because He is',
choice1: 'everlasting ',
choice2: 'dependable ',
choice3: 'omnipotent ',
choice4: 'forgiving',
answer: 2,
},
{
question: 'The Israelites were finally led to the land of Canaan by',
choice1: 'Aaron ',
choice2: 'Moses ',
choice3: 'Joshua ',
choice4: 'Caleb',
answer: 3,
},
{
question: ' The Odwira festival is important because it is',
choice1: 'a feast of thanksgiving ',
choice2: 'a feast of purification ',
choice3: 'to honour the ancestors ',
choice4: 'to hoot at hunger',
answer: 2,
},
{
question: 'Amina is popular among Muslims because she',
choice1: 'married Muhammad',
choice2: 'gave birth to Muhammad',
choice3: 'supported Muhammad in the jihad',
choice4: 'was Muhammad‟s sister',
answer: 2,
},
{
question: 'God‟s omniscience implies that He',
choice1: 'loves His children',
choice2: 'protects His people',
choice3: 'knows whatever we do',
choice4: 'forgives us our sins',
answer: 3,
},
{
question: 'Islam recommends early marriage and child betrothal in order to',
choice1: 'avoid moral slips',
choice2: 'prevent child abuse',
choice3: 'receive reward from Allah',
choice4: 'facilitate the practice of polygamy',
answer: 1,
},
{
question: 'The main reason why Christians pray is to',
choice1: 'receive daily needs from God',
choice2: 'have God‟s protection',
choice3: 'overcome temptation',
choice4: 'have fellowship with God',
answer: 4,
},
{
question: 'The three main religions in Ghana teach that',
choice1: 'spirits plead on our behalf',
choice2: 'love and honesty are godliness ',
choice3: 'God will save the wrong doer ',
choice4: 'God is resting after creation',
answer: 2,
},
{
question: 'A chapter of the Qur‟an is called',
choice1: 'Ayah ',
choice2: 'Hadith ',
choice3: 'Surah ',
choice4: 'Sunnah',
answer: 3,
},
{
question: 'The death of Jesus teaches us how we must',
choice1: 'be committed to our children ',
choice2: 'love one another in all things ',
choice3: 'faithfully serve our nation',
choice4: 'sacrifice for the church.',
answer: 4,
},
{
question: 'Mount Calvary was the place where Jesus',
choice1: 'ascended to heaven',
choice2: 'was crucified',
choice3: 'was transfigured',
choice4: 'preached his last sermon',
answer: 2,
},
{
question: 'Moses ordered the celebration of the Passover to commemorate the',
choice1: 'crossing of the Red Sea',
choice2: 'deliverance from Egyptian bondage',
choice3: 'death of Egyptian first-born',
choice4: 'encounter with the Burning Bush',
answer: 2,
},
{
question: 'The moral lesson from the life of Tweneboa Kodua is that one should cultivate the habit of',
choice1: 'faithfulness',
choice2: 'punctuality ',
choice3: 'truthfulness ',
choice4: 'sacrifice',
answer: 4,
},
{
question: 'Caliph Abubakar led prayers in the life time of Prophet Muhammad because the Prophet',
choice1: 'was tired',
choice2: 'was sick',
choice3: 'wanted to test him',
choice4: 'had travelled',
answer: 2
},
{
question: 'Blessed are the meek for they shall',
choice1: 'obtain mercy',
choice2: 'see God',
choice3: 'inherit the earth',
choice4: 'be satisfied',
answer: 3,
},
{
question: 'Dipo is a traditional',
choice1: 'form of worship',
choice2: 'puberty rite',
choice3: 'naming ceremony',
choice4: 'marriage rite',
answer: 2,
},
{
question: 'The essence of Zakat is to',
choice1: 'cater for the needy',
choice2: 'offer sacrifice to Allah',
choice3: 'spread the religion of Islam',
choice4: 'celebrate the Eid festival',
answer: 1,
},
{
question: 'Jesus‟ washing of the feet of His disciples teaches a lesson in',
choice1: 'respect for the elderly',
choice2: 'expressing love to others ',
choice3: 'rendering service to others ',
choice4: 'being helpful to others',
answer: 3,
},
{
question: 'Decent dressing and good eating habits show',
choice1: 'the level of training one has received',
choice2: 'the particular community one comes from', 
choice3: 'that one belongs to the traditional society', 
choice4: 'that one is obedient to teachers',
answer: 1,
},
{
question: 'To promote good neighbourliness, we should',
choice1: 'practice other people‟s religion',
choice2: 'learn about other people‟s religion',
choice3: 'respect the views of others',
choice4: 'be concerned with our own interest',
answer: 3,
},
{
question: 'The best way to enjoy peace and success in life is to',
choice1: 'accumulate wealth',
choice2: 'fight for one‟s right always',
choice3: 'be very strict on others',
choice4: 'develop the spirit of responsibility',
answer: 4,
},
{
question: 'A vow not to marry for religious reasons is known as',
choice1: 'chastity',
choice2: 'celibacy',
choice3: 'abstinence',
choice4: 'purity',
answer: 2,
},
{
question: 'Which ofthe following is not a punishment in schools?',
choice1: 'Bad testimonial',
choice2: 'Banishment',
choice3: 'Flogging',
choice4: 'Reprimand',
answer: 2,
},
{
question: 'The best way a worker can ask for a good salary is through',
choice1: 'negotiation',
choice2: 'confrontation',
choice3: 'strike',
choice4: 'threat',
answer: 1,
},
{
question: 'Which of the following is not true about money?\n It is',
choice1: 'owned by the state',
choice2: 'the accepted means of exchange', 
choice3: 'the official currency of a country', 
choice4: 'the exchange of goods for goods.',
answer: 4,
},
{
question: 'Society frowns mostly on',
choice1: 'people who greet the chief',
choice2: 'women who marry outside their hometown',
choice3: 'people who die through accident',
choice4: 'disobedient children',
answer: 4,
},
{
question: 'One effect of corruption in society is that it',
choice1: 'makes people rich',
choice2: 'provides jobs for people',
choice3: 'helps the country to develop',
choice4: 'puts wrong people in positions',
answer: 4,
},
{
question: 'The most significant sign of puberty among girls is the',
choice1: 'development of breast',
choice2: 'beginning of menstruation',
choice3: 'growth of pubic hair',
choice4: 'broadening of hips',
answer: 2,
},
{
question: '“A mighty tree has been uprooted”.\n This Akan expression shows that a',
choice1: 'difficult problem has been solved',
choice2: 'significant progress has been made',
choice3: 'king has passed away',
choice4: 'battle has been won',
answer: 3,
},
{
question: 'Dumping of refuse at residential areas is dangerous because it may',
choice1: 'result in soil erosion',
choice2: 'reduce plant species',
choice3: 'cause damage to houses',
choice4: 'lead to disease outbreak',
answer: 4,
},
{
question: 'Freedom of expression enables one to',
choice1: 'move about freely', 
choice2: 'engagein any job', 
choice3: 'be heard freely',
choice4: 'accuse other people',
answer: 3,
},
{
question: 'The most important moral value in Christianity is',
choice1: 'justice',
choice2: 'obedience',
choice3: 'love',
choice4: 'humanity',
answer: 3,
},
{
question: 'Filial responsibility refers to one‟s duty as a',
choice1: 'father or a mother',
choice2: 'member ofa society',
choice3: 'son or daughter',
choice4: 'member of the church',
answer: 3,
},
{
question: '“If you travel with lies, you may reach your destination, but you will be unable to retrace your steps”.\n implies that',
choice1: 'those traveling on along journey must be truthful',
choice2: 'when embarking on a journey, one should pay the fare',
choice3: 'when a liar travels, he may not return home',
choice4: 'what a person achieves by means of deceit is short-lived.',
answer: 4,
},
{
question: 'All the following are functions of Asafo groups except',
choice1: 'weeding the surroundings and cleaning choked gutters',
choice2: 'ensuring that traditional norms are followed',
choice3: 'assisting chiefs in punishing wrong-doers in the village',
choice4: 'the supervision of marriage ceremonies in the village',
answer: 4,
},
{
question: 'Smoking is discouraged because it',
choice1: 'results in respiratory problems',
choice2: 'attracts the HIV virus',
choice3: 'leads to sexual promiscuity',
choice4: 'destroys the blood group of people',
answer: 1,
},
{
question: 'Controlling one‟s temper when provoked is a sign of',
choice1: 'anxiety',
choice2: 'obedience',
choice3: 'comportment',
choice4: 'selflessness',
answer: 3,
},
{
question: 'As a sign of repentance, a sinner should',
choice1: 'punish himself',
choice2: 'show regret for his actions',
choice3: 'share his property with the poor',
choice4: 'confess to the church',
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
