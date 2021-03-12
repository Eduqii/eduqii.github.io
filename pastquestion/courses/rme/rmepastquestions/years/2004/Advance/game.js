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
question: 'According to the Holy Bible, God created the sun, moon and stars in order to',
choice1: 'give man kind the times and seasons',
choice2: 'bless mankind with light',
choice3: 'give mankind longlife',
choice4: 'direct movements of people and animals',
answer: 1,
},
{

question: 'Joseph was hated by his brothers because',
choice1: 'Jacob promised himof inheritance',
choice2: 'heloved his fatherverymuch',
choice3: 'of his prophetic dreams',
choice4: 'he was gentle and handsome',
answer: 3, 
},
{

question: 'The patriarch described as agreat man of faith was',
choice1: 'Jacob ',
choice2: 'David ',
choice3: 'Moses ',
choice4: 'Abraham',
answer: 4,
},
{

question: 'Which of the following people was not a disciple of Jesus?',
choice1: 'Paul ',
choice2: 'Peter ',
choice3: 'Matthew ',
choice4: 'James',
answer: 1,
},
{

question: 'The HolyQur‟an describes angels as creatures who',
choice1: 'anoint prophets and messengers of Allah ',
choice2: 'punish evil doers on the judgement day ',
choice3: 'act on the orders of Allah',
choice4: 'lead the faithful to observe Hajj',
answer: 3,
},
{

question: 'Which ofthe following acts inIslam promotes good neighbourliness, love and brotherhood?',
choice1: 'Hajj ',
choice2: 'Zakat ',
choice3: 'Salat ',
choice4: 'Ramadan',
answer: 3,
},
{

question: 'The Muslim prayer observed after sunset is',
choice1: 'Magrib ',
choice2: 'Asr ',
choice3: 'Zuhr ',
choice4: 'Fajr',
answer: 1,
},
{

question: '„If you want to talk to God,you must talk to the wind‟. This traditional proverb means that God is',
choice1: 'omnipotent ',
choice2: 'everywhere ',
choice3: 'the creator ',
choice4: 'alistener',
answer: 2,
},
{

question: 'To the traditional believer, the change from the physical to spiritual lifeo ccurs through',
choice1: 'naming ',
choice2: 'birth ',
choice3: 'death ',
choice4: 'puberty',
answer: 3,
},
{

question: 'The most important activity during the Odwira festival of the Akwapim is',
choice1: 'merry making and dancing ',
choice2: 'purification and cleansing ',
choice3: 'feastingand meditation',
choice4: 'familymeetingsand dancing',
answer: 2,
},
{

question: 'In the book of Genesis the world was created in',
choice1: '3 days ',
choice2: '5 days ',
choice3: '6 days ',
choice4: '7 days',
answer: 3,
},
{

question: 'All religions teach mankind to be steward of the earth and to',
choice1: 'farm on it ',
choice2: 'build on it ',
choice3: 'care for it',
choice4: 'make it fertile',
answer: 3, 
},
{

question: '„Thereis no God but God, and Muhammad is the Apostle of God‟.This is known as the',
choice1: 'Shahadah ',
choice2: 'Iqamah ',
choice3: 'Adhan ',
choice4: 'Sunnah',
answer: 1,
},
{

question: 'The Prophet Muhammad is described as al-Amin because he was',
choice1: 'wealthy ',
choice2: 'generous ',
choice3: 'honest ',
choice4: 'brave',
answer: 3, 
},
{

question: 'During naming ceremonies the baby is given drops of water and wine to signify that he should be',
choice1: 'truthful ',
choice2: 'patient ',
choice3: 'brave ',
choice4: 'obedient',
answer: 1,
},
{

question: 'The powerful god Penkyi Otu is associated with the',
choice1: 'Kundum festival ',
choice2: 'Aboakyir festival ',
choice3: 'Fetu Afashie ',
choice4: 'Akwambo festival',
answer: 2,
},
{

question: 'In traditional society, the dead is buried with money to ensure that the',
choice1: 'deceased can pay the fare to the other world',
choice2: 'deceased can pay the gods and ancestors for protection',
choice3: 'spirit of the deceased does not attack family members ', 
choice4: 'family members are blessed with riches',
answer: 1,
},
{

question: 'God has no human face in',
choice1: 'Islam and Christianity',
choice2: 'Islam and Traditional Religion',
choice3: 'Traditional Religion and Christianity',
choice4: 'Islam, Traditional Religion and Christianity',
answer: 2,
},
{

question: 'The snakeas an animal was created by God to',
choice1: 'give man meat',
choice2: 'kill man',
choice3: 'lead man to sin',
choice4: 'tempt man',
answer: 1,
},
{

question: 'The legendary Tsali performed his magical powers in and around',
choice1: 'Agbozume ',
choice2: 'Akpafu ',
choice3: 'Anloga ',
choice4: 'Tsiame',
answer: 4,
},
{

question: 'The nuclear family consists of',
choice1: 'parents and grandchildren',
choice2: 'children and parents',
choice3: 'parents, children and other relations',
choice4: 'grand children and children',
answer: 2,
},
{

question: 'The environment can be protected from degradation by',
choice1: 'rearing more animals ',
choice2: 'continuous farming ',
choice3: 'planting more trees',
choice4: 'extensive lumbering system',
answer: 4,
},
{

question: 'Greetings are very important in',
choice1: 'identifying a good speaker ',
choice2: 'opening up conversations ',
choice3: 'showing one‟s intelligence ',
choice4: 'knowing one‟s background',
answer: 2,
},
{

question: 'Work helps us to become',
choice1: 'reliable ',
choice2: 'sincere ',
choice3: 'healthy ',
choice4: 'courteous',
answer: 1,
},
{

question: 'Good eating habits include',
choice1: 'eating with a knife',
choice2: 'mouth closed when chewing',
choice3: 'stretching over to take something',
choice4: 'speaking when eating',
answer: 2,
},
{

question: 'Money offered to influence a public officer over an important issue is',
choice1: 'bribery ',
choice2: 'scandal ',
choice3: 'corruption ',
choice4: 'cheating',
answer: 1,
},
{

question: 'An Akan girl qualifies for puberty rites when',
choice1: 'she is between the ages of fifteen and seventeen',
choice2: 'she first experiences her menses',
choice3: 'her breasts develop',
choice4: 'she first becomes pregnant',
answer: 2,
},
{

question: 'Leisure time is used for',
choice1: 'playing games',
choice2: 'congregational worship',
choice3: 'doing house chores',
choice4: 'weeding the house',
answer: 1,
},
{

question: 'The duty of a member of a community falls under',
choice1: 'civic responsibility',
choice2: 'governmental responsibility',
choice3: 'filial responsibility',
choice4: 'communal responsibility',
answer: 1,
},
{

question: 'The most important prayer request during marriage rites is for',
choice1: 'prosperity and wealth',
choice2: 'protection and long life',
choice3: 'good health and protection',
choice4: 'long life and children',
answer: 4,
},
{

question: 'One joins a religious youth movement in order to',
choice1: 'go to heaven',
choice2: 'help to develop the religion',
choice3: 'organize crusades',
choice4: 'have prayers answered',
answer: 2,
},
{

question: 'Which of the following is a responsibility of children?',
choice1: 'Paying their own school fees',
choice2: 'Providing their friends with their needs ',
choice3: 'Making sure parents are always at home ',
choice4: 'Helping parents at home',
answer: 4,
},
{

question: 'Giving a good testimonial to somebody for his good deed is a',
choice1: 'reward ',
choice2: 'sacrifice ',
choice3: 'respect ',
choice4: 'protection',
answer: 1,
},
{

question: 'To live a life of obedience means being',
choice1: 'gentle, loving and generous',
choice2: 'respectful to parents and elders',
choice3: 'a religious person',
choice4: 'honest and generous',
answer: 2, 
},
{

question: 'The most important reason for celebrating the Homowo festival is to',
choice1: 'outdoor twins',
choice2: 'hoot at hunger',
choice3: 'visit various shrines',
choice4: 'sprinkle spiritual food',
answer: 2,
},
{

question: 'Which of the following is not a cause of teenage pregnancy?',
choice1: 'Curiosity and ignorance',
choice2: 'Peer pressure',
choice3: 'Low moral standard',
choice4: 'Effective parental care',
answer: 4,
},
{

question: 'Substances that tend to relax the nerves and reduce stress are',
choice1: 'sedatives',
choice2: 'stimulants ',
choice3: 'hard drugs',
choice4: 'common drugs',
answer: 1,
},
{

question: 'The main purpose of punishment is to',
choice1: 'reform the offender',
choice2: 'hurt the offender',
choice3: 'protect the offender',
choice4: 'advise the offender',
answer: 1,
},
{

question: 'Self medication means',
choice1: 'taking medicine prescribed by a doctor ',
choice2: 'buying drugs with prescription forms ',
choice3: 'taking medicine given at the hospital',
choice4: 'taking drugs without medical advice',
answer: 4,
},
{

question: 'A special right that puts a person in a better position is',
choice1: 'favour ',
choice2: 'choice ',
choice3: 'freedom ',
choice4: 'privilege',
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

