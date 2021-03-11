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
question: ' On the fifth day of creation, God commanded',
choice1: 'lights to appear in the sky to separate day from night',
choice2: 'water and air to be filled with many kinds of living creatures',
choice3: 'water to come together in one place so that the land will appear',
choice4: 'the waters under the firmament to separate from that above the firmament',
answer: 2,
},
{
question: 'The omnipresence of God means that He is',
choice1: 'everywhere ',
choice2: 'all knowing ',
choice3: 'always alive ',
choice4: 'all powerful',
answer: 1,
},
{
question: 'All the three main religions in Ghana believe strongly in',
choice1: 'angels ',
choice2: 'ancestors ',
choice3: 'destiny ',
choice4: 'righteousness',
answer: 4,
},
{
question: 'One of the main reasons why Christians pray is to ask God to',
choice1: 'let them fight their enemies',
choice2: 'forgive them their sins',
choice3: 'draw them closer to their friends',
choice4: 'give them more wealth',
answer: 2,
},
{
question: 'The most important rite in an Islamic marriage is the',
choice1: 'presentation of household utensils to the bride ',
choice2: 'delivery of wedding sermon during the feast ',
choice3: 'payment of the dowry',
choice4: 'celebration of the marriage feast',
answer: 3,
},
{
question: 'In Islam a Muslim must offer prayers',
choice1: 'six times daily ',
choice2: 'five times daily ',
choice3: 'four times daily ',
choice4: 'three times daily',
answer: 2,
},
{
question: 'A traditional believer sacrifices when he',
choice1: 'pours libation to the gods',
choice2: 'offers food and living things to the gods',
choice3: 'sings dirges to the dead',
choice4: 'wins a fortune',
answer: 2,
},
{
question: 'Christians believe in Jesus Christ because He',
choice1: 'had a virgin birth',
choice2: 'came to save humankind from their sins',
choice3: 'overcame death on the holy cross',
choice4: 'could per form many miracles',
answer: 2,
},
{
question: 'One of the best advantages of celebrating festivals is to',
choice1: 'come together to fight for one‟s rights',
choice2: 'help organize funerals well',
choice3: 'trainthe youth in defending the community',
choice4: 'continue with the traditions',
answer: 4,
},
{
question: ' A naming ceremony gives the new-born baby',
choice1: 'a position in the family ',
choice2: 'an identity in the family ',
choice3: 'a home to stay',
choice4: 'reunion with the community',
answer: 2,
},
{
question: ' Palm Sunday is celebrated to mark the',
choice1: 'birth ofJesus Christ',
choice2: 'outpouring of the Holy Spirit',
choice3: 'joyful journey of Jesus into Jerusalem',
choice4: 'resurrection of Jesus from the dead',
answer: 3,
},
{
question: ' Id-ul-Fitrin Islam is the feast of',
choice1: 'sacrifice on 10th of Zul-Hijjah',
choice2: 'breaking the Fast of Ramadan',
choice3: 'Ramadan in which the Quran was revealed',
choice4: 'the Prophet‟s birthday on 12th of Rabii Al-Awwal',
answer: 2,
},
{
question: ' The traditionalist believes that his destiny can be changed if he',
choice1: 'is born again into Christianity',
choice2: 'could consult the gods',
choice3: 'becomes a wizard',
choice4: 'is well educated',
answer: 2,
},
{
question: ' For the Muslim to gain salvation, he must',
choice1: 'confess very often',
choice2: 'observe the teachings of Islam',
choice3: 'marrynotmore than five women',
choice4: 'help his neighbour to go on a Hajj',
answer: 2,
},
{
question: ' The importance of performing funeral rites is that it',
choice1: 'helps the dead to join the ancestors',
choice2: 'avoids more deaths in the family',
choice3: 'opens the way for the dead to go to heaven',
choice4: 'enables the dead to resurrect on the last day',
answer: 1,
},
{
question: ' A person cannot qualify to be an ancestor if he',
choice1: 'had many wives',
choice2: 'had many children ',
choice3: 'was very unpopular ',
choice4: 'committed suicide',
answer: 4,
},
{
question: ' The best way to pray during worship is to',
choice1: 'face thee a stand in reverence',
choice2: 'kneel with arms open and humbly',
choice3: 'be humble and sincere',
choice4: 'remove your sandals',
answer: 3,
},
{
question: ' The Islamic practice by which wealthy Muslims show concern for the poor and the needy is',
choice1: 'Tawaf ',
choice2: 'Zakat ',
choice3: 'Hajj ',
choice4: 'Salat',
answer: 2,
},
{
question: ' All the laws which Moses gave toIsraelcan be foundin the Books of',
choice1: 'Genesis, Exodus and Numbers',
choice2: 'Genesis, Deuteronomy and Numbers ',
choice3: 'Genesis, Deuteronomy and Leviticus ',
choice4: 'Exodus, Leviticus and Deuteronomy',
answer: 4,
},
{
question: ' A Muslim performs Tayammum when he',
choice1: 'is late to the mosque',
choice2: 'vitiates his wudu',
choice3: 'cannot find water',
choice4: 'meets the Imamin the mosque',
answer: 3,
},
{
question: ' The extended family meetsoften to',
choice1: 'name a new-born baby ',
choice2: 'share family property ',
choice3: 'select a new chief',
choice4: 'elect the head of the family',
answer: 1,
},
{
question: ' As a child of the state, you have the right to',
choice1: 'vote ',
choice2: 'education ',
choice3: 'work ',
choice4: 'worship',
answer: 2,
},
{
question: ' As pupils, we should use our leisure time to',
choice1: 'play games',
choice2: 'do our homework',
choice3: 'do house hold chores',
choice4: 'go to church',
answer: 1,
},
{
question: ' The expression work and happiness means',
choice1: 'when one works, one becomes happy',
choice2: 'enjoying the fruits of one‟s labour',
choice3: 'singing whilst working',
choice4: 'always working',
answer: 2,
},
{
question: ' In order to live in harmony with family members, we must be',
choice1: 'respectful ',
choice2: 'brave ',
choice3: 'courageous ',
choice4: 'faithful',
answer: 1,
},
{
question: ' One important responsibility as a member of a religious group is to',
choice1: 'sweep the meeting place everyday ',
choice2: 'gather the youth and talk to them ',
choice3: 'obey the rules of the religion',
choice4: 'attend church service always',
answer: 3,
},
{
question: ' In a matrilineal home, the head of the family is the',
choice1: 'father ',
choice2: 'aunt ',
choice3: 'uncle ',
choice4: 'mother',
answer: 3,
},
{
question: ' The institution of authority in the society ensures',
choice1: 'peace and order',
choice2: 'good religious lives',
choice3: 'a healthy environment',
choice4: 'respect for adults',
answer: 1,
},
{
question: ' We can avoid conflicts in our communities by',
choice1: 'talking to our enemies ',
choice2: 'ignoring trouble makers ',
choice3: 'going to the courts',
choice4: 'settling our differences peacefully',
answer: 4,
},
{
question: ' Which of the following is a symptom of the Acquired Immune Deficiency Syndrome (AIDS)?',
choice1: 'Sleeping very often',
choice2: 'Suffering from the waist',
choice3: 'Rapid loss of weight',
choice4: 'Strong pains in the abdomen',
answer: 3,
},
{
question: ' A happy and prosperous life depends on',
choice1: 'obedience ',
choice2: 'respect ',
choice3: 'courage ',
choice4: 'hard work',
answer: 4,
},
{
question: ' Which of the following behaviours does not show courtesy?',
choice1: 'Respect for age group',
choice2: 'Apologising for mistakes',
choice3: 'Helping the aged',
choice4: 'Being aggressive',
answer: 4,
},
{
question: ' Which ofthe following activities destroys our vegetation?',
choice1: 'Cutting down trees without replanting',
choice2: 'Killing birds for game',
choice3: 'Constructing drains everywhere',
choice4: 'Clearing the land for building projects',
answer: 1,
},
{
question: ' To overcome teenage pregnancy, a girl should',
choice1: 'avoid sex completely',
choice2: 'attend hospital regularly',
choice3: 'be obedient and hardworking',
choice4: 'be well educated on sex',
answer: 1,
},
{
question: ' Which ofthe following is an example of a harddrug?',
choice1: 'Chloroquine ',
choice2: 'Coffee ',
choice3: 'Alcohol ',
choice4: 'Cocaine',
answer: 4,
},
{
question: ' Commitment can best be explained as an act of',
choice1: 'devoting oneself to something ',
choice2: 'accepting one‟s faults publicly ',
choice3: 'fighting for one‟s basic rights ',
choice4: 'showing forgiveness',
answer: 1,
},
{
question: ' Blessed are the meek for they shall',
choice1: 'see God',
choice2: 'obtain mercy',
choice3: 'inherit the earth',
choice4: 'enterthe kingdomofheaven',
answer: 3,
},
{
question: ' A patriotic citizen is one who is',
choice1: 'loyal and law abiding',
choice2: 'loyal and hospitable to strangers',
choice3: 'loving and willing to die for the nation',
choice4: 'respectful in the community',
answer: 1,
},
{
question: ' Which ofthe following is the best way of handling money?',
choice1: 'Keeping it under the breast',
choice2: 'tying it ina handkerchief',
choice3: 'Crumpling it into a savings box',
choice4: 'Folding it neatly into the pocket',
answer: 4,
},
{
question: ' One good reason for the establishment of the Catholic Youth Organisation(CYO)is to',
choice1: 'serve as soldiers to defend the church',
choice2: 'foster unity among the priests',
choice3: 'perform cultural dances in the church',
choice4: 'teach the young about the tradition of the church',
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
