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
question:'God created the sky on the',
choice1: 'first day',
choice2: 'second day',
choice3: 'third day',
choice4: 'fourth day',
answer: 2,
},
{
question:'The saying„ service to mankind is service to God‟ relates to which teaching of Jesus?',
choice1: 'Loving God and neighbour as yourself',
choice2: 'Giving service to people outside your family',
choice3: 'God must be served by all humankind',
choice4: 'The son of man came to serve human kind',
answer: 1,
},
{
question:'A teaching common to both Christianity and Islam on salvation is that, salvation is',
choice1: 'a gift of God for all people',
choice2: 'the resultof ourgood deeds',
choice3: 'for those who would go to heaven',
choice4: 'for those who would observe the ten commandments',
answer: 1,
},
{
question:'Whose preaching ministry urged the Jews to bear fruits that befit repentance?',
choice1: 'Jesus Christ ',
choice2: 'Paul ',
choice3: 'Peter ',
choice4: 'John the Baptist',
answer: 4,
},
{
question:'The Caliph Abu Bakr was referred to as Siddiq by Muhammad due to his',
choice1: 'courage ',
choice2: 'tolerance ',
choice3: 'truthfulness ',
choice4: 'generosity',
answer: 3,
},
{
question:'All those who took custody of Prophet Muhammad were happy with him because he',
choice1: 'had aunique character',
choice2: 'was a hardworking youngman ',
choice3: 'was an orphan at a tender age ',
choice4: 'was prayerful',
answer: 2,
},
{
question:'In the traditional society, rites of passage involve a ',
choice1: 'transition from death to become anancestor ',
choice2: 'life cycle from one stageto another',
choice3: 'transition from death to reincarnation',
choice4: 'period of death and resurrection',
answer: 2,
},
{
question:'Which ofthe following best sums up the Ten Commandments?',
choice1: 'Respect ',
choice2: 'Hospitality ',
choice3: 'Sincerity ',
choice4: 'Love',
answer: 4,
},
{
question:'God made a covenant with',
choice1: 'Isaac ',
choice2: 'Abraham ',
choice3: 'Jacob ',
choice4: 'Joshua',
answer: 2,
},
{
question:'Like the Jews, the Muslims also believe they are descendants of',
choice1: 'Abraham',
choice2: 'Isaac ',
choice3: 'Moses ',
choice4: 'Jacob',
answer: 1,
},
{
question:'By creating Adam and Eve, God was establishing the institution of',
choice1: 'Comportment ',
choice2: 'brotherliness', 
choice3: 'friendship ',
choice4: 'marriage',
answer: 4,
},
{
question:'The importance of fasting in Islam is to',
choice1: 'honour the poor and needy',
choice2: 'guard against evil',
choice3: 'keep the body fit',
choice4: 'store food for future use',
answer: 2,
},
{
question:'Which of the following persons knew God„face to face‟?',
choice1: 'Abraham ',
choice2: 'Isaac ',
choice3: 'Jacob ',
choice4: 'Moses',
answer: 4,
},
{
question:'The Hadith of the Muslims signifies the',
choice1: 'revelations of the„Junnah‟',
choice2: 'revelations of Abu Bakr',
choice3: 'sayings of the Holy Prophet',
choice4: 'writings of the Holy Prophet',
answer: 3,
},
{
question:'Which of the following serve as intermediary to God during traditional prayers?',
choice1: 'Lesser gods ',
choice2: 'Diviners ',
choice3: 'Dwarfs ',
choice4: 'Herbalists',
answer: 1,
},
{
question:'The main reason for the celebration of festivals isto',
choice1: 'entertain people',
choice2: 'install a new chief',
choice3: 'thank the gods for a successful year',
choice4: 'bring wrong doers in the community to book',
answer: 3,
},
{
question:'The rite of going round the Ka‟aba seven times during the Hajj signifies',
choice1: 'honesty ',
choice2: 'bravery ',
choice3: 'endurance ',
choice4: 'obedience',
answer: 3,
},
{
question:'Traditional believers wear charms and talismans',
choice1: 'to look attractive',
choice2: 'for special protection',
choice3: 'to be able to fight in the market',
choice4: 'for longer life',
answer: 2,
},
{
question:'Fishermen all over the country do not go to seaon',
choice1: 'Tuesdays ',
choice2: 'Fridays ',
choice3: 'Saturdays ',
choice4: 'Sundays',
answer: 1,
},
{
question:'To the traditional believer the next in importanceto the Supreme Being are the',
choice1: 'lesser gods',
choice2: 'earth goddess',
choice3: 'ancestral spirits',
choice4: 'spirits in plants and animals',
answer: 3,
},
{
question:'The purpose of school rules and regulations is to',
choice1: 'get pupils punished',
choice2: 'encourage pupils to become good pastors',
choice3: 'promote good conditions for work',
choice4: 'reward obedient pupils',
answer: 3,
},
{
question:'It is the responsibility of the child to',
choice1: 'do his household chores',
choice2: 'invite his friends to his house',
choice3: 'request his parents to organize a party',
choice4: 'wake his parentsup frombed',
answer: 1,
},
{
question:'The basic role of the father is to',
choice1: 'cook for the family',
choice2: 'make sure the children work',
choice3: 'make sure there is water in the house',
choice4: 'provide shelter for the family',
answer: 4,
},
{
question:'In the traditional society giving birth to children is considered asa',
choice1: 'privilege ',
choice2: 'responsibility ',
choice3: 'right ',
choice4: 'virtue',
answer: 2,
},
{
question:'In a school‟s speech and prize-giving day, the best pupil is rewarded with a',
choice1: 'book prize ',
choice2: 'cash prize ',
choice3: 'testimonial ',
choice4: 'certificate',
answer: 1,
},
{
question:'When Fatimah and Mansah are committed to each other in friendship, they are prepared to',
choice1: 'Worship God sincerely',
choice2: 'run away from evil',
choice3: 'write an examination together',
choice4: 'share their wealth and poverty together',
answer: 4,
},
{
question:'Anyone who enters a house is expected to first',
choice1: 'ask for water',
choice2: 'remove his sandals',
choice3: 'offer greetings',
choice4: 'ask for a seat',
answer: 3,
},
{
question:'The basis for describing some drugs as sedative is that they',
choice1: 'stimulate the user',
choice2: 'tend to relax the nerves and reduce stress',
choice3: 'make the user to „feel high‟',
choice4: 'protect the user from the physical effects of drugs',
answer: 2,
},
{
question:'The popular saying that„ all work and no play makes Jack a dull boy‟ means Jack must',
choice1: 'play a lot after work ',
choice2: 'must work very hard ',
choice3: 'have leisure hours',
choice4: 'work while playing',
answer: 3,
},
{
question:'Teenage pregnancy mostly occurs between the ages of',
choice1: '6 – 8years ',
choice2: '8 – 10years ',
choice3: '13 – 19years ',
choice4: '20 – 24 years',
answer: 3,
},
{
question:'The best way to becomea committed Christian isto',
choice1: 'repent and accept Christ as Saviour',
choice2: 'attend all church activities',
choice3: 'co-operate with other believers',
choice4: 'take the holy communion regularly',
answer: 1,
},
{
question:'The cutlass given to a boy at puberty signifies',
choice1: 'acceptance into the military sector',
choice2: 'bravery and courage',
choice3: 'readiness to defend the community',
choice4: 'working to maintain himself and the family',
answer: 4,
},
{
question:'One important objective of religious youth organizations is to',
choice1: 'organize dancing competitions',
choice2: 'organize pleasure trips',
choice3: 'practise moral teachings',
choice4: 'challenge elders on community development committees',
answer: 3,
},
{
question:'The following are methods of preventing teenage pregnancy except',
choice1: 'avoidingpre-marital sex',
choice2: 'influence of peer group pressure',
choice3: 'adequate parental care',
choice4: 'adequate sex education',
answer: 2,
},
{
question:'People lead decent livesin order to',
choice1: 'be praised for patriotism',
choice2: 'be seen as kindandgenerous',
choice3: 'promote healthy and peaceful conditions',
choice4: 'qualify as an ancestor',
answer: 3,
},
{
question:'Good deeds are rewarded to',
choice1: 'encourage people',
choice2: 'make people courteous ',
choice3: 'instill bravery in people ',
choice4: 'promote peace',
answer: 1,
},
{
question:'When we show regret for bad deeds donewe',
choice1: 'repair broken relationships',
choice2: 'drive people away',
choice3: 'harden people‟s heart',
choice4: 'break people‟s heart',
answer: 1,
},
{
question:'The importance of work is to help us to',
choice1: 'be honest in our daily activities',
choice2: 'plan our duties at all times',
choice3: 'be reliable in the society',
choice4: 'keep healthy and active minds',
answer: 3,
},
{
question:'A person is regarded as tolerant when the person is',
choice1: 'courteous ',
choice2: 'patient ',
choice3: 'hardworking ',
choice4: 'truthful',
answer: 2,
},
{
question:'Anyone who accepts responsibility for wrongdoing and is prepared to correct it is described as being',
choice1: 'God-fearing ',
choice2: 'obedient ',
choice3: 'repentant ',
choice4: 'sincere',
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
