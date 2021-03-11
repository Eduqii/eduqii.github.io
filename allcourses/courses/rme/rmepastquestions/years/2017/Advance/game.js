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
  	question:'The Gye Nyame symbol of the Akan signifies that God is',
  	choice1:'all-loving.',
	choice2:'all-merciful.',
	choice3:'all-powerful.',
	choice4:'all-seeing.',
  	answer: 3
  },
  {	
  	question: 'God’s covenant with the patriarchs is associated with',
	choice1:'Abraham.',
	choice2:'Joshua.',
	choice3:'Joseph.',
	choice4:'Moses.',
	answer: 1
  },
  {
  	question:'According the Christian teaching, God created man and woman on the',
  	choice1:'first day.',
	choice2:'second day.',
	choice3:'fifth day.',
	choice4:'sixth day.',
  	answer: 4 
  },
  {
  	question:'The belief that God sees the secret deeds of all and punishes those who do evil implies that He is',
  	choice1:'omnipotent.',
	choice2:'omnipresent.',
	choice3:'omniscient.',
	choice4:'sovereign.',
  	answer: 2
  },
  {
  	question:'Christians who are persecuted for the sake of righteousness are blessed because',
  	choice1:'God will be merciful to them',
	choice2:'God’s kingdom belongs to them.',
	choice3:'they shall be comforted.',
	choice4:'they shall see God.',
  	answer: 2
  },
  {
  	question: 'Egya Ahor is remembered for sacrificing his life to',
 	choice1:'ensure victory at war.',
	choice2:'free his people from slavery.',
	choice3:'save children from being kidnapped.',
	choice4:'ward off an epidemic.',
		answer: 4
  },
  {
  	question: 'Jacob’s children went to Egypt because',
  	choice1:'Joseph was a governor in Egypt.',
	choice2:'people were losing their lives.',
	choice3:'there was a great famine.',
	choice4:'there was a good pasture there for cattle.',
		answer: 3
  },
  {
  	question: 'A crab cannot give birth to a bird. This expression teaches that',
	choice1:' a bird is more powerful than a crab.',
	choice2:'one could resemble a bird or a crab.',
	choice3:'one shows the character of his or her parents.',
	choice4:'the truth always stands everywhere.',
		answer: 3
  },
  {
  	question: 'Which of the following people in Ghana celebrate the Odwira festival?',
	choice1:'Akwapim.',
	choice2:'Fante.',
	choice3:'Ewe.',
	choice4:'Gonja.',
		answer: 1
  },
  {
  	question: 'The festival celebrated by the people of Winneba is',
	choice1:'Aboakyir.',
	choice2:'Damba.',
	choice3:'Homowo.',
	choice4:'Ogun.',
		answer: 1
  },
  {
  	question: 'Puberty rites should be encouraged because it',
	choice1:'helps the youth to become rich.',
	choice2:'links the youth to adulthood.',
	choice3:'makes the youth look more attractive.',
	choice4:'promotes chastity among the youth.',
		answer: 4
  },
  {
  	question: 'Which of the following statements is not true about puberty rites? They',
	choice1:'teach girls to be obedient.',
	choice2:'prevent teenage pregnancy.',
	choice3:'teach girls how to live together.',
	choice4:'protect girls against evil forces.',
		answer: 4
  },
  {
  	question: 'The period of courtship in marriage is meant for',
	choice1:'convincing parents of both parties.',
	choice2:'presentation of gifts to friends.',
	choice3:'the couple to study each other.',
	choice4:'the payment of the knocking fee.',
		answer: 3
  },
  {
  	question: 'The exchange of rings in Christian marriage signifies',
	choice1:'blessing from God.',
	choice2:'faithfulness to God.',
	choice3:'faithfulness to one another.',
	choice4:'love for the family.',
		answer: 3
  },
  {
  	question: 'The first Muezzin in Islam was',
	choice1:'Abu Talib.',
	choice2:'Bilal.',
	choice3:'Salman.',
	choice4:'Zayd.',
		answer: 2
  },
  {
  	question: 'The first pillar in Islam is the belief in',
	choice1:'angels.',
	choice2:'oneness of God.',
	choice3:'prophets.',
	choice4:'revealed books.',
		answer: 2
  },
  {
  	question: 'Praying regularly is important because it is a',
	choice1:'moral responsibility.',
	choice2:'political responsibility.',
	choice3:'social responsibility.',
	choice4:'spiritual responsibility.',
		answer: 4
  },
  {
  	question: 'Looking simple and decent is a sign of',
	choice1:'comportment.',
	choice2:'faithfulness.',
	choice3:'tolerance.',
	choice4:'repentance.',
		answer: 1
  },
  {
  	question: 'Which of the following factors is not a reason why we greet?',
	choice1:'Disloyalty',
	choice2:'Friendship',
	choice3:'Humility',
	choice4:'Politeness',
		answer: 1
  },
  {
  	question: 'Which of the following actions does not constitute good manners?',
	choice1:'Chuckling at prefects',
	choice2:'Complying with dress codes',
	choice3:'Running of errands',
	choice4:'Stitching torn clothes',
		answer: 1
  },
  {
  	question: 'To live a chaste life, one must',
	choice1:'avoid sexual intimacy.',
	choice2:'participate in communal labour.',
	choice3:'perform his or her responsibilities.',
	choice4:'respect and obey school rules.',
		answer: 1
  },
  {
  	question: 'Submission to the will of Allah in Islam brings',
 	choice1:'life and comfort.',
	choice2:'peace and purity.',
	choice3:'unity and love.',
	choice4:'wealth and joy.',
		answer: 2
  },
  {
  	question: 'Behaviour patterns of individuals approved by society are known as',
	choice1:'moral values.',
	choice2:'ritual values.',
	choice3:'sacraments.',
	choice4:'taboos.',
		answer: 1
  },
  {
  	question: 'By respecting other people’s religion, we are',
	choice1:'practising religious obedience.',
	choice2:'showing commitment to God.',
	choice3:'showing commitment to those religions.',
	choice4:'showing religious tolerance.',
		answer: 4
  },
  {
  	question: 'Good deeds are rewarded to',
	choice1:'encourage people.',
	choice2:'make people courteous.',
	choice3:'instil kindness in people.',
	choice4:'promote peaceful co-existence.',
		answer: 1
  },
  {
  	question: 'Repentance begins with',
 	choice1:'acceptance of one’s guilt.',
	choice2:'regret for doing wrong.',
	choice3:'request for forgiveness.',
	choice4:'vowing to do good.',
		answer: 1
  },
  {
  	question: 'The first thing to do when you enter a house is to',
	choice1:'ask for a seat.',
	choice2:'ask for water.',
	choice3:'offer greetings.',
	choice4:'remove your sandals.',
		answer: 3
  },
  {
  	question: 'A citizen who indulges in social vices in the community is said to be',
	choice1:'a deviant.',
	choice2:'unfriendly.',
	choice3:'untruthful.',
	choice4:'a conformist.',
		answer: 1
  },
  {
  	question: 'One advantage the extended family has over the nuclear family is',
	choice1:'having little privacy for its members.',
	choice2:'opportunity to associate with more people.',
	choice3:'over-reliance on a few rich people.',
	choice4:'persistent quarrelling in the family.',
		answer: 2
  },
  {
  	question: 'The maintenance of law and order in the nuclear family is the responsibility of the',
	choice1:'aunts.',
	choice2:'parents.',
	choice3:'grandparents.',
	choice4:'children',
		answer: 2
  },
  {
  	question: 'An attitude which must not be encouraged at the work place is',
	choice1:'diligence.',
	choice2:'loyalty.',
	choice3:'grumbling.',
	choice4:'tolerance.',
		answer: 3
  },
  {
  	question: 'To earn a living, one needs to be',
  	choice1:'healthy.',
	choice2:'hardworking.',
	choice3:'prayerful.',
	choice4:'responsible.',
		answer: 2
  },
  {
  	question: 'Jesus Christ taught his disciples that, ‘Blessed are the peace makers, for they shall …"',
	choice1:'be comforted.',
	choice2:'be called sons of God.',
	choice3:'see God.',
	choice4:'inherit the kingdom of God.',
		answer: 2
  },
  {
  	question: 'The ummah is the Islamic',
  	choice1:'community.',
	choice2:'congregation.',
	choice3:'diviner.',
	choice4:'scholar.',
		answer: 1
  },
  {
  	question: 'Which of the following activities best offers relaxation?',
	choice1:'Eating',
	choice2:'Painting',
	choice3:'Running',
	choice4:'Reading',
		answer: 4
  },
  {
  	question: 'Saving money helps the individual to',
	choice1:'become rich overnight.',
	choice2:'attend school regularly.',
	choice3:'make more friends.',
	choice4:'plan for the future.',
		answer: 4
  },
  {
  	question: 'The most important requirement for a happy and responsible life is',
	choice1:'courage.',
	choice2:'hardwork.',
	choice3:'loyalty.',
	choice4:'respect.',
		answer: 2
  },
  {
  	question: 'A positive attitude towards work is',
	choice1:'commitment.',
	choice2:'graciousness.',
	choice3:'intelligence.',
	choice4:'purity.',
		answer: 1
  },
  {
  	question: 'In planning personal budget, it is necessary to ensure that',
  	choice1:'expenditure is equal to income.',
	choice2:'expenditure is more than income.',
	choice3:'income is less than expenditure.',
	choice4:'income is more than expenditure.',
		answer: 4
  },
  {
  	question: 'Dumping of refuse at residential areas is dangerous because it may',
	choice1:'cause damage to houses.',
	choice2:'lead to disease outbreak.',
	choice3:'reduce plant species.',
	choice4:'result in soil erosion.',
		answer: 2
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
