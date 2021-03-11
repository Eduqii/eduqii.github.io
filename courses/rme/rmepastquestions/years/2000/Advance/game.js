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
question: 'Christians, Muslims and Traditional worshippers believe that the world was created by',
choice1: 'man',
choice2: 'an angel',
choice3: 'the Holy Spirit',
choice4: 'God',
choice5: 'a prophet',
answer: 4,
},
{
question: 'Which religion believes that God moved awayfrom the earth because of the activities ofhumankind?',
choice1: 'Christianity',
choice2: 'Islam',
choice3: 'Traditional ',
choice4: 'Hinduism ',
choice5: 'Buddhism',
answer: 3,
},
{
question: 'Which of the following attributes of God shows that He has the whole world in His hands',
choice1: 'Omnipotence ',
choice2: 'Omnipresence ',
choice3: 'Faithfulness',
choice4: 'Kindness',
choice5: 'Love',
answer: 1,
},
{
question: 'The third Islamic daily prayer is',
choice1: 'Asr ',
choice2: 'Zuhr ',
choice3: 'Fajr ',
choice4: 'Maghrib ',
choice5: 'Ishai',
answer: 1,
},
{
question: 'Satan (Iblis) was cursed by Allah after the creation of man because he',
choice1: 'was made from fire',
choice2: 'was the leader of the angels',
choice3: 'refused to bow down before Adam ',
choice4: 'influenced Adam and Hawa to fall ',
choice5: 'was superior to all created things',
answer: 4,
},
{
question: 'To become a Christian, one must first',
choice1: 'say the Lord‟s Prayer',
choice2: 'recite the Apostle‟s creed',
choice3: 'be confirmed',
choice4: 'be baptized',
choice5: 'marry the Christian way',
answer: 4,
},
{
question: 'The revelation of the entire Qu‟rantook',
choice1: '23years ',
choice2: '24years ',
choice3: '25years ',
choice4: '26years ',
choice5: '27years',
answer: 1,
},
{
question: 'One of the religious values in celebrating traditional festivals is to',
choice1: 'acknowledge the presence of the gods',
choice2: 'bring the citizens together',
choice3: 'raise funds to develop the community',
choice4: 'contract marriages',
choice5: 'settle family disputes',
answer: 1,
},
{
question: 'The pillar of faith in Islam which expresses charity is',
choice1: 'salat ',
choice2: 'sawm ',
choice3: 'zakat ',
choice4: 'kalimat ',
choice5: 'hajj',
answer: 3,
},
{
question: 'Muslims pray five times daily in order to',
choice1: 'beknown in their community',
choice2: 'avoid evil and bad actions',
choice3: 'dominate world affairs',
choice4: 'be role models in society',
choice5: 'be nice to other members in the society',
answer: 2,
},
{
question: 'The importance of naming ceremony is to',
choice1: 'announce that a woman has delivered',
choice2: 'make known to the society the additional mouth to be fed',
choice3: 'ask for future suitors for the child',
choice4: 'give the child an identity',
choice5: 'solicit help for the mother',
answer: 4,
},
{
question: 'Which of the following is not a patriarch?',
choice1: 'Abraham ',
choice2: 'Isaac ',
choice3: 'Jacob ',
choice4: 'Noah ',
choice5: 'Joseph',
answer: 5,
},
{
question: 'The festival celebrated by Christians in memory of the resurrection of Jesus is called',
choice1: 'Christmas ',
choice2: 'Easter ',
choice3: 'Pentecost ',
choice4: 'Passover ',
choice5: 'Ash',
answer: 2,
},
{
question: 'Which of these commandments carried with it a promise',
choice1: 'Refraining from murder',
choice2: 'Not committing adultery ',
choice3: 'Loving one‟s neighbour ',
choice4: 'Not bearing false witness ',
choice5: 'Honouring one‟s parents',
answer: 5,
},
{
question: 'A religious leader in Islam is called',
choice1: 'Khalifah ',
choice2: 'Imam ',
choice3: 'Alhaji ',
choice4: 'Mallam ',
choice5: 'Sheikh',
answer: 2,
},
{
question: 'Which of the following rites is performed to usher the individual into adulthood?',
choice1: 'Baptism ',
choice2: 'Puberty ',
choice3: 'Naming ',
choice4: 'Marriage ',
choice5: 'Installation',
answer: 2,
},
{
question: 'The blind man Jesus healed was called',
choice1: 'Bartholomew',
choice2: 'Barabbas',
choice3: 'Bartimaeus ',
choice4: 'Nicodemus ',
choice5: 'Lazarus',
answer: 3,
},
{
question: 'The system by which a drink is poured to the gods and the Supreme Being is known as',
choice1: 'sacrifice ',
choice2: 'thanksgiving ',
choice3: 'worship ',
choice4: 'libation ',
choice5: 'protection',
answer: 4,
},
{
question: 'Uthman D. Affan standardized the Qur‟an in order to',
choice1: 'bring it into one volume',
choice2: 'avoid the omission of some verses ',
choice3: 'give the Qur‟an the same reading ',
choice4: 'stop the fighting among Muslims',
choice5: 'encourage Muslims to love one another',
answer: 1,
},
{
question: 'The first book in the Bible is called',
choice1: 'Genesis ',
choice2: 'Deuteronomy ',
choice3: 'Exodus ',
choice4: 'Revelation ',
choice5: 'Jude',
answer: 1,
},
{
question: 'The payment of school fees and other bills is mainly the responsibility of the',
choice1: 'grandfather ',
choice2: 'mother ',
choice3: 'uncle ',
choice4: 'aunt ',
choice5: 'father',
answer: 5,
},
{
question: 'One of the advantages of the extended family system is that',
choice1: 'the uncle inherits the father‟s property',
choice2: 'the children are cared for by members of the family',
choice3: 'the old people are sent to old people‟s homes',
choice4: 'girls become maidservants of their aunties',
choice5: 'boys are sent out to work on family lands',
answer: 2,
},
{
question: 'Theimportance of washing the hands before eating is to',
choice1: 'show others that one is learned',
choice2: 'show that one is clean and neat',
choice3: 'avoid getting germs into the food ',
choice4: 'teach others about food hygiene ',
choice5: 'wet one‟s appetite before eating',
answer: 3,
},
{
question: 'You should not talk when eating because you',
choice1: 'may get choked by the food',
choice2: 'will expose the food inyour mouth',
choice3: 'will make unusual noise',
choice4: 'may lose your mother',
choice5: 'will become dumb later',
answer: 1,
},
{
question: 'When greeting a chief, a man is expected to',
choice1: 'remove his sandals and lower his cloth',
choice2: 'put his hands on his head',
choice3: 'raise both hands as he walks towards the chief',
choice4: 'raise his hands and bow down',
choice5: 'stretch both arms towards the chief',
answer: 1,
},
{
question: 'Which of the following shows that one is improperly dressed',
choice1: 'Tucking in the shirt',
choice2: 'Wearing the belt at the proper place',
choice3: 'The underwear being longer than the dress',
choice4: 'Combing the hair neatly',
choice5: 'Polishing the shoes everyday',
answer: 3,
},
{
question: 'Human rights include all the following except',
choice1: 'the right to live',
choice2: 'freedom of association',
choice3: 'freedom of worship',
choice4: 'administering instant justice',
choice5: 'the right to vote',
answer: 4,
},
{
question: 'Rules and regulations in schools are there to ensure',
choice1: 'that children attend school regularly',
choice2: 'good behaviour from children',
choice3: 'proper maintenance of school property',
choice4: 'that children do their assignments regularly',
choice5: 'that children should bepunished',
answer: 2,
},
{
question: 'One of the important aims of a youth organization is to',
choice1: 'bring unity among the youth',
choice2: 'learn dancing and merry-making',
choice3: 'oppose the views of the elderly',
choice4: 'let the youth be on their own and look forjobs',
choice5: 'run away from parental control',
answer: 1,
},
{
question: 'One way of helping to protect the environment from degradation is to',
choice1: 'rear more animals',
choice2: 'encouragesmall-scale mining',
choice3: 'cover the earth‟s surface with sand',
choice4: 'plant more trees',
choice5: 'grow more food crops',
answer: 4,
},
{
question: 'A child is said to be courteous when he',
choice1: 'converses with adults',
choice2: 'gives gifts to friends',
choice3: 'is admired by his age group',
choice4: 'dresses well to school',
choice5: 'gives a helping hand to the elderly',
answer: 5,
},
{
question: 'Which of the following behaviours can best be described as comportment',
choice1: 'Respect for oneself',
choice2: 'Control of one‟s temper',
choice3: 'Apologising for mistakes done',
choice4: 'Respect for one‟s father',
choice5: 'Love for one‟s enemy',
answer: 1,
},
{
question: 'The best way to live in peace in a communityis to',
choice1: 'understand and co-operate with others',
choice2: 'disagree with your enemies',
choice3: 'to be afraid of those in authority',
choice4: 'enterinto conflict with your neighbours',
choice5: 'sit on the fence always',
answer: 1,
},
{
question: 'Conflicts in our society can best be resolved by',
choice1: 'being obedient to truants',
choice2: 'obeying the scriptures',
choice3: 'being authoritative and proud ',
choice4: 'tolerating and forgiving others ',
choice5: 'being forgiving and aggressive',
answer: 4,
},
{
question: 'Love for our community should be part of our training so that we can',
choice1: 'work harder for its good',
choice2: 'become democratic',
choice3: 'develop good skills in it',
choice4: 'build good and happy homes',
choice5: 'build better schools',
answer: 1,
},
{
question: 'To be patriotic means',
choice1: 'going to school regularly',
choice2: 'practising personal hygiene',
choice3: 'defending the nation at all times',
choice4: 'engaging in sporting activities',
choice5: 'participating in cultural activities',
answer: 3,
},
{
question: 'It is our moral responsibility to prevent the spread of cholera by',
choice1: 'eating a balanced diet',
choice2: 'attending hospital regularly',
choice3: 'taking good care of our wounds',
choice4: 'immunizing against the six killer diseases',
choice5: 'keeping the surroundings clean',
answer: 5,
},
{
question: 'Weshow good manners when we',
choice1: 'give instant justice to a thief',
choice2: 'talk to people with both hands',
choice3: 'smile to people',
choice4: 'wink our eyes at people',
choice5: 'eat very fast at table when late',
answer: 3,
},
{
question: 'People are committed to each other in friendship when they',
choice1: 'perform the same type of duty',
choice2: 'are loyal to each other',
choice3: 'fail to protect each other‟s interest',
choice4: 'attend the same school together',
choice5: 'attend social gatherings together',
answer: 2,
},
{
question: 'Giving out money or gifts to somebody to seek a favour shows that one is',
choice1: 'unpatriotic',
choice2: 'corrupt ',
choice3: 'deceitful ',
choice4: 'unfaithful ',
choice5: 'insincere',
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

