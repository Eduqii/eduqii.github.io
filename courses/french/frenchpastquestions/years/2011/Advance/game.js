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
question: 'Les élèves cherchent ……….informations sur le Togo',

choice1: 'd’',
choice2: 'du',
choice3: 'des',
choice4: 'de la',
answer: 3,
},
{
question: 'Ecris-moi ……………lettre',

choice1: 'une',
choice2: 'un',
choice3: 'du',
choice4: 'de la',
answer: 1,
},
{
question: '…………étudiant est paresseux.',

choice1: 'Ce',
choice2: 'Cet',
choice3: 'Ces',
choice4: 'Cette',
answer: 2,
},
{
question: 'Voici trois stylos. Prenez-…………… !',

choice1: 'les',
choice2: 'la',
choice3: 'le',
choice4: 'leurs',
answer: 1,
},
{ 

question: '………….belles couleurs !',

choice1: 'Quel',
choice2: 'Quelle',
choice3: 'Quels',
choice4: 'Quelles',
answer: 4,
},
{
question: 'Christine va ……..hôpital pour voir le médecin.',

choice1: 'à',
choice2: 'au',
choice3: 'a l’',
choice4: 'à la',
answer: 3,
},
{ 

question: 'Les enfants aiment jouer ………… volleyball',

choice1: 'au',
choice2: 'de',
choice3: 'du',
choice4: 'aux',
answer: 1,
},
{
question: 'Antoine, mets ………….gomme dans ton sac !',

choice1: 'ta',
choice2: 'ton',
choice3: 'tes',
choice4: 'toi',
answer: 1,
},
{
question: 'Cet homme est très ……………..',

choice1: 'gentil',
choice2: 'gentils',
choice3: 'gentille',
choice4: 'gentilles',
answer: 1,
},
{
question: 'Les étudiants invitent leurs amis à …………..avec eux.',

choice1: 'sort',
choice2: 'sortir',
choice3: 'sortez',
choice4: 'sortent',
answer: 2,
},
{
	question: 'Les villageois ont …………………..de nouvelles cases',
choice1: 'mis',
choice2: 'corrigé',
choice3: 'construit',
choice4: 'fabriqué',
answer: 3,
},
{
question: 'On voit des …………….dans la forêt.',
choice1: 'mers',
choice2: 'arbres',
choice3: 'avions',
choice4: 'poisons',
answer: 2,
},
{
question: 'Je veux …………..de l’eau.',
choice1: 'boire',
choice2: 'piler',
choice3: 'manger',
choice4: 'brûler',
answer: 1,
},
{
question: 'Cette chemise est trop sale ; je dois la …………',
choice1: 'laver',
choice2: 'porter',
choice3: 'repasser',
choice4: 'vendre',
answer: 1,
},
{
question: 'L’agriculteur à besoin de ……………pour cultiver la terre.',
choice1: 'clé',
choice2: 'houe',
choice3: 'craie',
choice4: 'cuillère',
answer: 2,
},
{
question: 'Ouvre la bouche ! Ah ! Tes ……………..sont très blanches !',
choice1: 'dents',
choice2: 'doigts',
choice3: 'cheveux',
choice4: 'orielles',
answer: 1,
},
{
question: 'Marc mange trop. Il est ………………',
choice1: 'bavard',
choice2: 'méchant',
choice3: 'ivrogne',
choice4: 'gourmand',
answer: 4,
},
{
question: 'Ma sœur ……….le repas du soir',
choice1: 'met',
choice2: 'conduit',
choice3: 'boit',
choice4: 'prépare',
answer: 4,
},
{
question: 'Le fils de ma sœur est mon',
choice1: 'père',
choice2: 'oncle',
choice3: 'neveu',
choice4: 'cousin',
answer: 3,
},
{
question: 'Un ………….fait des tables et des chaises.',
choice1: 'fermier',
choice2: 'chauffeur',
choice3: 'menuisier',
choice4: 'professeur',
answer: 3
},
{
	question: 'En Classe\n\n A quelle heure est-ce que le cours de français commence ? \n – Le cours de français commence à …………heures.',

choice1: '8',
choice2: '9',
choice3: '10',
choice4: '11',
answer: 3,
},
{ 

question: 'En Classe\n\n Le nom du professeur est …………..',

choice1: 'Achana',
choice2: 'Sarfo',
choice3: 'Madame Ampaafo',
choice4: 'Monsieur Ampaafo',
answer: 3,
},
{ 

question: 'En Classe\n\n Le professeur entre dans la classe …………',

choice1: 'avant l’heure',
choice2: 'en avance',
choice3: 'en retard',
choice4: 'à l’heure',
answer: 4,
},
{ 

question: 'En Classe\n\n ‘…………vos livres’ dit le professeur quand elle entre en classe.',

choice1: 'Cachez',
choice2: 'Ouvrez',
choice3: 'Fermez',
choice4: 'Cherchez',
answer: 3,
},
{ 

question: 'En Classe\n\n Quelles sont sur les papiers que le professeur distribue aux élèves ?',

choice1: 'De bonnes notes',
choice2: 'Des réponses',
choice3: 'Des questions',
choice4: 'Des histoires',
answer: 3,
},
{ 
question: 'En Classe\n\n Tous les élèves écoutent attentivement ………..Sarfo et Achana.',
choice1: 'exceptés',
choice2: 'y compris',
choice3: 'comme',
choice4: 'même',
answer: 1,
},
{ 

question: 'En Classe\n\n L’histoire est ………….',

choice1: 'drôle',
choice2: 'triste',
choice3: 'ennuyeuse',
choice4: 'intéressante',
answer: 4,
},
{ 

question: 'En Classe\n\n Sarfo et Achana ne font pas attention. Ils ………..',

choice1: 'jouent',
choice2: 'parlent',
choice3: 'dorment',
choice4: 'mangent',
answer: 2,
},
{ 

question: 'En Classe\n\n Pourquoi Sarfo et Achana sont tristes ?\n Parce qu’ils ont ……..',
choice1: 'échoué',
choice2: 'réussit',
choice3: 'écouté',
choice4: 'lu',
answer: 1,
},
{ 

question: 'En Classe\n\n A la fin, Sarfo et Achana ………',

choice1: 'jouent',
choice2: 'pleurent',
choice3: 'sortent',
choice4: 'bavardent',
answer: 2,
},
{
	question: 'Maman Serwah – 31 – de l’hôpital il y a huit jours.',
choice1: 'sort',
choice2: 'Est sorti',
choice3: 'Est sortie',
choice4: 'Sortira',
answer: 3,
},
{
question: ' – 32 – ce temps-la, c’est la joie partout dans la maison !',
choice1: 'Après',
choice2: 'avant',
choice3: 'depuis',
choice4: 'Pendant',
answer: 3,
},
{
question: 'Pourquoi ? C’est parce qu’elle a deux – 33 – bébés ; des jumeaux.',
choice1: 'nouveau',
choice2: 'nouveaux',
choice3: 'nouvelle',
choice4: 'Nouvelles',
answer: 2,
},
{
question: 'La famille – 34 – de fêter l’arrivée de ce beau garçon et de cette belle fille.',
choice1: 'Décidé',
choice2: 'Décide',
choice3: 'Décidéz',
choice4: 'Décidons',
answer: 2,
},
{
question: 'Très tôt le matin, les parents et les amis – 35 – pour la fête .',
choice1: 'arrive',
choice2: 'arrivons',
choice3: 'Arrivez',
choice4: 'arrivent',
answer: 4,
},
{
question: 'Bientôt il y a beaucoup de gens dans – 36 – maison de Maman Serwah et son mari, Monsieur Koffi.',
choice1: 'le',
choice2: 'la',
choice3: 'les',
choice4: 'Leur',
answer: 2,
},
{
 question: 'Ils apportent des cadeaux et même de l’argent aux bébés et à la mère. Le chef de famille – 37 – les noms des enfants.',
choice1: 'annonce',
choice2: 'annonces',
choice3: 'annoncez',
choice4: 'Annoncent',
answer: 1,
},
{
question: ' Une semaine après la naissance d’un enfant, on lui donne un nom ; c’est la tradition. Ensuite, il y a beaucoup à boire et à – 38 – .',
choice1: 'mange',
choice2: 'manbge',
choice3: 'mangez',
choice4: 'manger',
answer: 4,
},
{
question: 'On joue de la musique et les gens – 39 – .',
choice1: 'danse',
choice2: 'dansez',
choice3: 'dansons',
choice4: 'Dansent',
answer: 4,
},
{
question: ' Tout le monde est – 40 –.',
choice1: 'content',
choice2: 'contents',
choice3: 'contente',
choice4: 'contentes',
answer: 1,
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
