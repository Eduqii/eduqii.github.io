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
  	question:'The biblical commandment which has a promise of blessing is',  	
  	choice1:'remember the Sabbath day',
	choice2:'honour your father and mother',
	choice3:'not to commit adultery',
	choice4:'not to make for yourself graven images',
  	answer: 2
  },
  {	
  	question: 'In Christianity, the sky, seas, animals and other living things came into being through',
	choice1:'the laws of God',
	choice2:'God’s command',
	choice3:'natural order',
	choice4:'the lesser gods',
	answer: 2
  },
  {
  	question:'Ablution is done before prayers in order to',
  	choice1:'have prayers answered in time',
	choice2:'ensure purity of the body',
	choice3:'get closer to Allah',
	choice4:'win the favour of Allah',
  	answer: 2
  },
  {
  	question:'The parable of the Good Samaritan teaches us to',
  	choice1:'forgive others',
	choice2:'be helpful to others',
	choice3:'show gratitude to people',
	choice4:'be time conscious',
  	answer: 2
  },
  {
  	question:'The traditional man wears talismans in order to',  	
  	choice1: 'give birth to children',
	choice2:'become rich',
	choice3:'seek protection against enemies',
	choice4:'bring peace and love into his family',
  	answer: 3
  },
  {
  	question: 'According to Akan belief, the order of creation is',
	choice1:'earth, rivers, plants and sky',
	choice2:'rivers, plants, earth and sky',
	choice3:'sky, earth, rivers and plants',
	choice4:'plants, rivers, sky and earth',
		answer: 3
  },
  {
  	question: 'A summary of the ten commandments is',	 
  	choice1: 'obedience to parents and the elderly',
	choice2:'love for God and one’s neighbour.',
	choice3:'observing the Sabbath and keeping it holy',
	choice4:'worshipping the Almighty God only',
		answer: 2
  },
  {
  	question: 'The Holy Communion reminds Christians of Jesus?',
	choice1: 'birth',
	choice2:'crucifixion',
	choice3:'last supper',
	choice4:'resurrection',
		answer: 2
  },
  {
  	question: 'Ramadan is the',		
  	choice1:'feast of sacrifice',
	choice2:'month of fasting',
	choice3:'feast of breaking fast',
	choice4:'month of Hijra',
		answer: 2
  },
  {
  	question: 'The main reason for celebrating the Homowo Festival is to',		
  	choice1:'outdoor twins',
	choice2:'hoot at hunger',
	choice3:'visit the shrines',
	choice4:'sprinkle spiritual food',
		answer: 2
  },
  {
  	question: 'The patriarchal covenant was made between God and',		
  	choice1:'Abraham',
	choice2:'Aaron',
	choice3:'Moses',
	choice4:'Noah',
		answer: 1
  },
  {
  	question: 'The main lesson that can be learnt from the story of Noah and the flood is',
	choice1:'tolerance',
	choice2:'truthfulness',
	choice3:'sincerity',
	choice4:'obedience',
		answer: 4
  },
  {
  	question: 'Some tribes forbid marriages with close relatives because',		
  	choice1:'the couple may die early',
	choice2:'it leads to bareness',
	choice3:'it is seen as incest',
	choice4:'it leads to quarrels',
		answer: 3
  },
  {
  	question: 'Jesus accepted to be baptized by John in order to',
	choice1:'make the Jews happy',
	choice2:'show His faith in John’s power',
	choice3:'fulfil all righteousness',
	choice4:'confirm His sonship of God',
		answer: 3
  },
  {
  	question: 'Which Christian virtue did Joseph exhibit in his life?',		
  	choice1:'Humility',
	choice2:'Forgiveness',
	choice3:'Repentance',
	choice4:'Tolerance',
		answer: 2
  },
  {
  	question: 'In a prayer of confession, Christians',		
  	choice1: 'adore God who created them',
	choice2:'say sorry to God for their sins',
	choice3:'ask for help in times of trouble',
	choice4:'give thanks for all the gifts they received',
		answer: 2
  },
  {
  	question: 'A Muslim is a person who',		
  	choice1:'comes from Arabia',
	choice2:'visits Mecca annually',
	choice3:'submits to the will of Allah',
	choice4:'recites the Qur’an',
		answer: 3
  },
  {
  	question: 'The festival celebrated by Christians to mark the resurrection of Jesus is known as',
	choice1:'Christmas',
	choice2:'Easter',
	choice3:'Pentecost',
	choice4:'Passover',
		answer: 2
  },
  {
  	question: 'The combination of the Fajr and Asr prayers makes',		
  	choice1:'two rakats',
	choice2:'five rakats',
	choice3:'six rakats',
	choice4:'eight rakats',
		answer: 3
  },
  {
  	question: 'One way by which humankind pollutes the air in the city is by',
	choice1:'the use of insecticides',
	choice2:'the use of detergents',
	choice3:'smoke from motor vehicles',
	choice4:'smoke from the burning of wood',
		answer: 3
  },
  {
  	question: 'A citizen who indulges in social vices in the community is said to be',
	choice1:'unfriendly',
	choice2:'unreliable',
	choice3:'untruthful',
	choice4:'unpatriotic',
		answer: 4
  },
  {
  	question: 'Greetings are important because they',		
  	choice1:'open up conversation',
	choice2:'portray one’s intelligence',
	choice3:'expose disrespectful behaviour',
	choice4:'show a good leader',
		answer: 1
  },
  {
  	question: 'Asking for forgiveness is an indication that a bad deed will be',
	choice1:' exposed',
	choice2:'forgotten',
	choice3:'pardoned',
	choice4:'repeated',
		answer: 3
  },
  {
  	question: 'Children who are obedient and live good moral lives are',
	choice1:'praised in the society',
	choice2:'envied by others',
	choice3:'sent to challenge the elderly',
	choice4:'known to be smart in school',
		answer: 1
  },
  {
  	question: 'People avoid dangerous substances in order to',		
  	choice1:'develop their potentials',
	choice2:'stay healthy',
	choice3:'study hard',
	choice4:'be respected by society',
		answer: 2
  },
  {
  	question: 'Which of the following is a form of physical punishment',		
  	choice1:'Scolding',
	choice2:'Reprimand',
	choice3:'Fine',
	choice4:'Caning',
		answer: 4
  },
  {
  	question: 'To show that a person is patient, he/ she must',		
  	choice1:'worship at appointed times',
	choice2:'preach to people often',
	choice3:'visit the sick regularly',
	choice4:'wait for the right time',
		answer:4 
  },
  {
  	question: 'A defensive mechanism that can help protect students against drug abuse is',
	choice1:'to control one’s temper',
	choice2:'living a chaste life',
	choice3:'refusing and saying no to drugs',
	choice4:'reporting drug peddlers to the police',
		answer: 3
  },
  {
  	question: 'Which of the following behaviours can best be described as comportment?',
	choice1:'Respect for one’s parents',
	choice2:'Love for one’s enemy',
	choice3:'Respect for oneself',
	choice4:'Control of one’s temper',
		answer: 3
  },
  {
  	question: 'Removing one’s hat when greeting an elder constitutes',
	choice1:'good manners',
	choice2:'comportment',
	choice3:'tolerance',
	choice4:'fear of God',
		answer: 3
  },
  {
  	question: 'The saying, Time is money means',
	choice1:'time fetches money',
	choice2:'more time spent on work brings profit',
	choice3:'money is not gained without spending time',
	choice4:'good use of time brings profit',
		answer: 4
  },
  {
  	question: 'The main aim of the Girls’ Brigade is to',		
	choice1:'assist girls to attend school',
	choice2:'encourage girls to work hard',
	choice3:'help establish more girls’ schools',
	choice4:'produce good Christian womanhood',
		answer: 4
  },
  {
  	question: 'The best way to live in peace in a community is to',		
  	choice1:'sit on the fence always',
	choice2:'be afraid of those in authority',
	choice3:'keep to oneself always',
	choice4:'understand and co-operate with others',
		answer: 4
  },
  {
  	question: 'Rules and regulations of the country need to be obeyed in order to',
	choice1:'promote the formation of political parties',
	choice2:'promote peaceful co-existence',
	choice3:'stop rivalry among political parties',
	choice4:'save people from imprisonment',
		answer: 2
  },
  {
  	question: 'In a traditional society, the provision of shelter is the responsibility of the',
	choice1:'father',
	choice2:'grandfather',
	choice3:'mother',
	choice4:'uncle',
		answer: 1
  },
  {
  	question: 'Carrying out instructions given by the elderly shows that one is',
	choice1:'obedient',
	choice2:'sincere',
	choice3:'strong',
	choice4:'truthful',
		answer: 1
  },
  {
  	question: 'Social conflicts can best be resolved by',		
  	choice1:'Obeying the scriptures',
	choice2:'being principled and humble',
	choice3:'being authoritative and principled',
	choice4:'tolerating and forgiving',
		answer: 4
  },
  {
  	question: ' Using one’s position to amass wealth at the expense of the public is',
	choice1:'bribery',
	choice2:'corruption',
	choice3:'greed',
	choice4:'unfaithfulness',
		answer: 2
  },
  {
  	question: 'Humankind works in order to',		
  	choice1:'go to heaven',
	choice2:'be loved by everyone',
	choice3:'win souls for Christ',
	choice4:'cater for one’s basic needs',
		answer: 4
  },
  {
  	question: 'In order to live in harmony with family members, we must be',
	choice1:'brave',
	choice2:'courageous',
	choice3:'faithful',
	choice4:'respectful',
		answer: 3
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
