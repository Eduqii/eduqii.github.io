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
question: 'According to Christian teaching, God created man and woman on the',
choice1: '1st day ',
choice2: '2nd day', 
choice3: '3rd day ',
choice4: '5th day ',
choice5: '6th day',
answer: 5,
},
{
question: 'Palm Sunday is observed by Christians to remember the',
choice1: 'birth and baptism of Christ',
choice2: 'resurrection and appearance of Christ ',
choice3: 'joyful journey of Christ into Jerusalem ',
choice4: 'baptism of the Holy Spirit',
choice5: 'last supper and sacrifice of Christ',
answer: 3,
},
{
question: 'God gaveNoah and hispeople the rainbow toremember',
choice1: 'the floods which destroyed the world',
choice2: 'the disobedience of the idol worshippers',
choice3: 'that God would not destroy the world with water again',
choice4: 'the building of the ark',
choice5: 'the usefulness of the heavenly bodies',
answer: 3,
},
{
question: 'All the religions in Ghana believe in',
choice1: 'Jesus Christ',
choice2: 'the Bible',
choice3: 'the Prophet Muhammed',
choice4: 'the Rain God',
choice5: 'the Supreme God',
answer: 5,
},
{
question: 'The Muslim prayers observed between Asr and Isha is',
choice1: 'Zuhr',
choice2: 'Juumu‟ah',
choice3: 'Idd',
choice4: 'Subhi',
choice5: 'Maghrib',
answer: 5,
},
{
question: 'The Islamic practice where wealthy Muslims cater for the needs of the poor and needy is',
choice1: 'Hajj ',
choice2: 'Zakat ',
choice3: 'Ihram ',
choice4: 'Mahr ',
choice5: 'Talaq',
answer: 2,
},
{
question: 'Prophet Muhammed‟s twelfth birthday is important because',
choice1: 'there was Prophecy about his future ',
choice2: 'Halimah returned himto his parents ',
choice3: 'Amina passed away',
choice4: 'his fatherdied',
choice5: 'Abdul Mutalib died',
answer: 0,
},
{
question: 'Muslim‟s last respect to the dead is by',
choice1: 'offering Janazah',
choice2: 'burial with a coffin',
choice3: 'dressing the corpse in suit',
choice4: 'sacrificing a ram',
choice5: 'keeping the corpse in the mortuary',
answer: 0,
},
{
question: 'Festivals are celebrated every year in order to',
choice1: 'make the people happy',
choice2: 'thank the gods for a successful year',
choice3: 'adore a new year',
choice4: 'punish the wrong doers in the community',
choice5: 'initiate the youth into adulthood',
answer: 2,
},
{
question: 'The burial of pieces of hair, fingernails and toe nails of a corpse at his hometown signifies that',
choice1: 'there is life after death',
choice2: 'the spirit has contact with the living',
choice3: 'lesser gods want thespirit',
choice4: 'witches are powerful in one‟s hometown',
choice5: 'everyone must be buried in his hometown',
answer: 5,
},
{
question: 'Mourners from the cemetery wash their hands before entering funeral house again to',
choice1: 'break relations with the dead',
choice2: 'show that theyare among the living',
choice3: 'announce their return from the cemetery',
choice4: 'cleanse themselves from any curse',
choice5: 'enable them shake hands with the other mourners',
answer: 4,
},
{
question: 'Bringing forth children shows that man is',
choice1: 'sharing in God‟s creation',
choice2: 'taking God‟s position ',
choice3: 'trying to be like God ',
choice4: 'feeling self-sufficient',
choice5: 'controlling God‟s creation',
answer: 1,
},
{
question: 'Among the Asante farming is not done on Thursday because',
choice1: 'the soil becomes fertile on this day',
choice2: 'farmers have to rest on this day',
choice3: 'wild animals come out on this day',
choice4: 'it is specially reserved for the ancestors',
choice5: 'it is the day of the earth goddess',
answer: 5,
},
{
question: 'Which of the following months is also a special occasion on the Islamic Calendar?',
choice1: 'Rajab',
choice2: 'Ramadan ',
choice3: 'Sha‟ban ',
choice4: 'Shawal',
choice5: 'Safar',
answer: 2,
},
{
question: 'The act of going round the Ka‟ba seven times during the Hajj teaches',
choice1: 'bravery',
choice2: 'cleanliness',
choice3: 'humility ',
choice4: 'endurance ',
choice5: 'honesty',
answer: 4,
},
{
question: 'It is believed that burying the dead with money helps him to',
choice1: 'pay his debtors in the spiritual world',
choice2: 'pay for his fare to cross the river to the other world',
choice3: 'pay the ancestors for welcoming him',
choice4: 'take care of his needs',
choice5: 'remove any curse on the living',
answer: 2,
},
{
question: 'Blessed are the merciful for they shall',
choice1: 'see God',
choice2: 'obtain mercy',
choice3: 'inherit the earth',
choice4: 'be called the children of God',
choice5: 'be comforted',
answer: 2,
},
{
question: 'Eid-Ul-Fitr celebration teaches Muslims to',
choice1: 'submit to Allah',
choice2: 'give alms',
choice3: 'sacrifice themselves to God',
choice4: 'endure hardship',
choice5: 'appreciate God‟s mercy',
answer: 5,
},
{
question: 'The rite of throwing stones at the pillars during the Hajj signifies the',
choice1: 'exercising of the body',
choice2: 'victory over the devil',
choice3: 'preparing to fight the enemies',
choice4: 'securityof the holy place',
choice5: 'beginning of the pilgrimage',
answer: 2,
},
{
question: 'The essence of the Muslim fast of Ramadan is to',
choice1: 'keep the body fit',
choice2: 'save food',
choice3: 'make one become used to hunger',
choice4: 'guard against evil',
choice5: 'honour the poor and needy',
answer: 4,
},
{
question: 'The animal which is proverbially known to make good use of its time is the',
choice1: 'bee',
choice2: 'ant',
choice3: 'tortoise',
choice4: 'hare',
choice5: 'serpent',
answer: 2,
},
{
question: 'People normally save money in order to',
choice1: 'use their income wisely',
choice2: 'help the government to generate more revenue',
choice3: 'be generous to people ',
choice4: 'prepare for the future ',
choice5: 'avoid envious friends',
answer: 4,
},
{
question: 'Which ofthe following practices may cause sickness?',
choice1: 'throwing rubbish any how',
choice2: 'boiling untreated water',
choice3: 'keeping the surroundings clean',
choice4: 'cleaning the teeth properly',
choice5: 'washing dirty clothes',
answer: 1,
},
{
question: 'The water and wine or gin given to the child during naming ceremony signifies',
choice1: 'loyalty',
choice2: 'faithfulness ',
choice3: 'truthfulness ',
choice4: 'respect',
choice5: 'obedience',
answer: 3,
},
{
question: 'Thesaying“tastysoup draws people to itself”means that',
choice1: 'empty barrels make the most noise ',
choice2: 'there is success in unity of purpose ',
choice3: 'it pays to be good and nice to people ',
choice4: 'one man‟s meat is another‟s poison ',
choice5: 'a tasty meal is appealing to all',
answer: 3,
},
{
question: 'Which of the following is not a cause of Teenage Pregnancy?',
choice1: 'financial problems',
choice2: 'broken home',
choice3: 'immoral practices',
choice4: 'responsible parenthood',
choice5: 'peer pressure',
answer: 4,
},
{
question: 'Youth camps are organized purposely for the youth to',
choice1: 'fend for themselves',
choice2: 'find theirparents',
choice3: 'learn to socialize',
choice4: 'run away from household chores',
choice5: 'form study groups',
answer: 3,
},
{
question: 'It is a bad habit to use one‟s leisure time in',
choice1: 'reading a storybook',
choice2: 'tellingstories',
choice3: 'playing games',
choice4: 'gossiping about friends',
choice5: 'learning a new skill',
answer: 4,
},
{
question: 'Hard work is most often crowned with',
choice1: 'success ',
choice2: 'jealousy ',
choice3: 'hatred',
choice4: 'failure',
choice5: 'favour',
answer: 1,
},
{
question: 'One of the child‟s responsibilities in the home is to',
choice1: 'sweep the compound ',
choice2: 'provide his clothing ',
choice3: 'pay the school fees',
choice4: 'pay the hospital fees',
choice5: 'provide his food',
answer: 1,
},
{
question: 'Which ofthe following is not the reason for contributingmoneyin the church?',
choice1: 'provide school building',
choice2: 'building of hospitals',
choice3: 'paying the priest',
choice4: 'making the elders rich',
choice5: 'helping the poor and needy',
answer: 4,
},
{
question: 'The traditional saying that “one finger cannot pick a stone” means',
choice1: 'it is easier for people to work together',
choice2: 'a crab cannot give birth to a bird',
choice3: 'patience is good but hard to practice',
choice4: 'poor people have no friends',
choice5: 'one should take care of the environment',
answer: 1,
},
{
question: 'Kente weaving is popular amongthe',
choice1: 'Asante ',
choice2: 'Kwahu ',
choice3: 'Fante',
choice4: 'Akwapim',
choice5: 'Ewe',
answer: 1,
},
{
question: 'One of the rights of the child is the right',
choice1: 'to work on his plot',
choice2: 'to education',
choice3: 'to sweepingthe classroom ',
choice4: 'to attend school regularly ',
choice5: 'to obey school rules',
answer: 2,
},
{
question: 'Which of the following is not taught in religious youth organization?',
choice1: 'serving God and nation',
choice2: 'leading a disciplined life',
choice3: 'loving one‟s neighbour as one‟s self',
choice4: 'being law abiding',
choice5: 'using violence to demand rights',
answer: 5,
},
{
question: 'Cleanliness is next to',
choice1: 'obedience',
choice2: 'service',
choice3: 'godliness',
choice4: 'neatness',
choice5: 'faithfulness',
answer: 3,
},
{
question: '“Train thechild the wayheshouldgoand when hegrows he will …………………..”',
choice1: 'be as wise as a serpent',
choice2: 'not depart from it',
choice3: 'fear the Lord',
choice4: 'be a great person',
choice5: 'be a dedicated citizen',
answer: 2,
},
{
question: 'To show regret forabehaviour means',
choice1: 'faithfulness ',
choice2: 'obedience ',
choice3: 'repentance ',
choice4: 'sincerity',
choice5: 'honesty',
answer: 3,
},
{
question: 'A courteous child ……………',
choice1: 'does not speak to elderswith hands in pocket',
choice2: 'is theonewho does not respect theteacher',
choice3: 'alwaysgoes to school late',
choice4: 'does not do his homework',
choice5: 'is theonewho does not obeyhis parents',
answer: 1,
},
{
question: 'The traditional healer does not normally charge high fees because',
choice1: 'they are in the subsistence economy',
choice2: 'they use cowries for diagnosis',
choice3: 'local herbs and plants are used',
choice4: 'it will weaken the power of the medicine',
choice5: 'of the extended family relationship',
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
