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
  	question:'The Omniscience of God portrays Him as',
  	choice1:'all knowing',
	choice2:'very gracious',
	choice3:'all forgiving',
	choice4:'ever present',
  	answer: 1
  },
  {	
  	question: 'Jacob’s children went to Egypt because',
	choice1: 'there was a great famine',
	choice2:'Joseph was a governor',
	choice3:'there was good pasture for cattle',
	choice4:'people were losing their lives',
	answer: 1
  },
  {
  	question:'The aboakyir festival is celebrated by the',
  	choice1:'Anlo',
	choice2:'Akan',
	choice3:'Dangbe',
	choice4:'Efutu',
  	answer: 4
  },
  {
  	question:'The Janazah prayer is performed',  	
  	choice1:'when a Muslim is travelling',
	choice2:'during Friday worship',
	choice3:'after a Ramadan fast',
	choice4:'when a Muslim dies',
  	answer: 4
  },
  {
  	question:'The outpouring of the Holy Spirit on Christians occurred during the',
  	choice1: 'Ascension',
	choice2:'Passover',
	choice3:'Pentecost',
	choice4:'Resurrection',
  	answer: 3
  },
  {
  	question: 'The attributes of God refer to His',		
  	choice1:'names and titles',
	choice2:'wonderful creation',
	choice3:'order of creation',
	choice4:'relationship with people',
		answer: 1
  },
  {
  	question: 'Braggro is an Akan',	 
  	choice1: 'marriage rite',
	choice2:'burial ceremony',
	choice3:'puberty ceremony',
	choice4:'naming ceremony',
		answer: 3
  },
  {
  	question: 'According to Christian teachings, God created man and woman on the',
	choice1:'first day',
	choice2:'second day',
	choice3:'fifth day',
	choice4:'sixth day',
		answer: 4
  },
  {
  	question: 'The teachings of Prophet Muhammad are found in the',
	choice1:'Hadith',
	choice2:'Ijma',
	choice3:'Kalima',
	choice4:'Sura',
		answer: 1
  },
  {
  	question: '“A crab cannot give birth to a bird” This expression teaches that',
	choice1:'truth always stands',
	choice2:'one cannot resemble a bird or a crab',
	choice3:'birds are more powerful than crabs',
	choice4:'one shows the character of one’s parents',
		answer: 4
  },
  {
  	question: 'Jesus came into the world so that people may',
	choice1:'forgive their enemies',
	choice2:'have eternal life',
	choice3:'overcome problems',
	choice4:'become wealthy',
		answer: 2
  },
  {
  	question: 'God’s covenant with the patriarchs is associated with',
	choice1:' Abraham',
	choice2:'Joseph',
	choice3:'Joshua',
	choice4:'Moses',
		answer: 10
  },
  {
  	question: 'Zakat is important in Islam because it',		
  	choice1:'is mentioned in the Qu’ran',
	choice2:'is paid by the wealthy',
	choice3:'is a religious form of taxation',
	choice4:'reduces the suffering of the poor',
		answer: 4
  },
  {
  	question: 'By facing the wild beast, Toha Zie',		
  	choice1:'helped the poor in the community',
	choice2:'led his people to defeat their enemies',
	choice3:'risked his life for his people',
	choice4:'preached peace to his people',
		answer: 3
  },
  {
  	question: 'Praying regularly is important because it is a',
	choice1:'moral responsibility',
	choice2:'social responsibility',
	choice3:'political responsibility',
	choice4:'spiritual responsibility',
		answer: 4
  },
  {
  	question: 'The congregational prayer observed by Muslims on Fridays is',
	choice1:'Eid',
	choice2:'Janazah',
	choice3:'Jumu’ah',
	choice4:'Zuhr',
		answer: 3
  },
  {
  	question: 'In traditional religion, it is a taboo to',
	choice1:'bury the dead in town',
	choice2:'drink alcohol at funeral',
	choice3:'insult a chief or a god',
	choice4:'wear sandals in the graveyard',
		answer: 3
  },
  {
  	question: 'Israel came out of slavery in Egypt under the leadership of',		
  	choice1:'Abraham',
	choice2:'Joseph',
	choice3:'Joshua',
	choice4:'Moses',
		answer: 4
  },
  {
  	question: 'Egya Ahor is remembered for sacrificing his life to',		
  	choice1:'ensure victory at war',
	choice2:'free his people from slavery',
	choice3:'save children from hunger',
	choice4:'ward off an epidemic',
		answer: 4
  },
  {
  	question: 'The last festival celebrated by the Israelites before they left Egypt was the',
	choice1:'Booths',
	choice2:'Passover',
	choice3:'Feast of Tabernacles',
	choice4:'Feast of weeks',
		answer: 2
  },
  {
  	question: 'Workers go on strike to',		
  	choice1:'have some rest',
	choice2:'demand better conditions of service',
	choice3:'destroy company property',
	choice4:'attend political rallies',
		answer: 2
  },
  {
  	question: 'Which of the following is not a responsibility of a family head?',
	choice1:'Oversight of the general well-being of the family',
	choice2:'Taking care of all family property',
	choice3:'Settling disputes',
	choice4:'Granting loans',
		answer: 4
  },
  {
  	question: 'One danger associated with drug abuse is that it',
	choice1:'causes idleness',
	choice2:'makes a person arrogant',
	choice3:'destroys the blood group',
	choice4:'can deform a person',
		answer: 4
  },
  {
  	question: 'Running errands for the elderly portrays the child to be',
	choice1:'honest',
	choice2:'humble',
	choice3:'obedient',
	choice4:'sincere',
		answer: 1
  },
  {
  	question: 'A common practice in traditional homes at night is',
	choice1:'pouring of libation',
	choice2:'story telling',
	choice3:'feeding the gods',
	choice4:'visiting the stool room',
		answer: 2
  },
  {
  	question: 'Which of the following is not a positive attitude to work?',
	choice1:'hardworking',
	choice2:'Lateness',
	choice3:'Punctuality',
	choice4:'Truthfulness',
		answer: 0
  },
  {
  	question: 'People lead decent lives in order to',		
  	choice1:'be praised for patriotism',
	choice2:'be seen as kind',
	choice3:'promote peaceful living',
	choice4:'qualify to be ancestors',
		answer: 3
  },
  {
  	question: 'Good deeds are rewarded to',		
  	choice1:'encourage people',
	choice2:'make people courteous',
	choice3:'instill kindness in people',
	choice4:'promote peace',
		answer: 1
  },
  {
  	question: 'The insect which is proverbially associated with good time management is the',
	choice1:'ant',
	choice2:'bee',
	choice3:'butterfly',
	choice4:'wasp',
		answer: 1
  },
  {
  	question: 'Youth camps are usually held to help young people',		
  	choice1:'find their life partners',
	choice2:'learn to socialize with others',
	choice3:'form important study groups',
	choice4:'organize their lives properly',
		answer: 2
  },
  {
  	question: 'Putting one’s interest above that of others results in',
	choice1:'conflict',
	choice2:'patriotism',
	choice3:'selflessness',
	choice4:'tolerance',
		answer: 1
  },
  {
  	question: 'Folktales are important because, they',		
  	choice1:'teach about other people',
	choice2:'are loved by grand parents',
	choice3:'make children happy',
	choice4:'teach moral lessons',
		answer: 4
  },
  {
  	question: 'A wrong way of using one’s leisure is',		
  	choice1:'reading story books',
	choice2:'gossiping',
	choice3:'playing games',
	choice4:'telling stories',
		answer: 2
  },
  {
  	question: 'In traditional societies, rules used to control the behaviour of members are known as',
	choice1:'ancestral rites',
	choice2:'puberty rites',
	choice3:'taboos',
	choice4:'totems',
		answer: 3
  },
  {
  	question: 'Behaviour patterns of individuals approved by society are known as',
	choice1:'sacraments',
	choice2:'taboos',
	choice3:'ritual values',
	choice4:'moral values',
		answer: 4
  },
  {
  	question: 'Looking simple and decent is a sign of',		
  	choice1:'comportment',
	choice2:'faithfulness',
	choice3:'repentance',
	choice4:'tolerance',
		answer: 1
  },
  {
  	question: 'Respectful children are always',		
  	choice1:'good in sports',
	choice2:'intelligent in school',
	choice3:'decently dressed',
	choice4:'accepted by society',
		answer: 4
  },
  {
  	question: 'Which of the following is a way of establishing cordial relationship?',
	choice1:'Faith',
	choice2:'Intelligence',
	choice3:'Joy',
	choice4:'Tolerance',
		answer: 4
  },
  {
  	question: 'The growth of pubic hair is a sign of',		
  	choice1:'motherhood',
	choice2:'pregnancy',
	choice3:'puberty',
	choice4:'respect',
		answer: 2
  },
  {
  	question: 'People demonstrate good manners in order to',		
  	choice1:'have their sins forgiven',
	choice2:'win God’s favour',
	choice3:'earn trust and respect',
	choice4:'be born again Christians',
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
