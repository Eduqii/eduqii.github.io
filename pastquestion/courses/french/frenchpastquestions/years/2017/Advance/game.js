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
question: 'A l’école, nous écrivons au tableau avec …………….craie.',

choice1: 'la',
choice2: 'le',
choice3: 'de',
choice4: 'du',
answer: 1,
},
{ 

question: 'Il y a beaucoup de viande ……………la soupe.',

choice1: 'sur',
choice2: 'par',
choice3: 'près',
choice4: 'dans',
answer: 4,
},
{ 

question: 'Ama n’aime …………..préparer le repas pour ses frères.',

choice1: 'rien',
choice2: 'non',
choice3: 'ni',
choice4: 'pas',
answer: 4,
},
{ 

question: 'Ma mère m’a acheté ……………livre de français.',

choice1: 'du',
choice2: 'un',
choice3: 'de',
choice4: 'une',
answer: 2,
},

{ 

question: 'Les filles de ……………..village sont très gentilles.',

choice1: 'mon',
choice2: 'nos',
choice3: 'leurs',
choice4: 'sa',
answer: 1,
},
{ 

question: '…………………monsieur aime frapper les petits.',

choice1: 'Cette',
choice2: 'Ces',
choice3: 'Cet',
choice4: 'Ce',
answer: 4,
},

{ 

question: 'Mansa lui dit de ……………….la porte à clé.',

choice1: 'ferme',
choice2: 'fermer',
choice3: 'fermes',
choice4: 'fermez',
answer: 2,
},
{ 

question: '………………fleur qui est sur la table est belle.',

choice1: 'L’',
choice2: 'Le',
choice3: 'La',
choice4: 'Les',
answer: 3,
},
{ 

question: 'Je me brosse …………….dents chaque matin avant de manger.',

choice1: 'le',
choice2: 'les',
choice3: 'mon',
choice4: 'mes',
answer: 2,
},
{ 

question: 'Les élèves entrent dans la salle de classe ……………..la cloche sonne.',

choice1: 'que',
choice2: 'qui',
choice3: 'quand',
choice4: 'comment',
answer: 3,
},
{
question: 'Il faut me ……………..la vérité tout le temps.',
choice1: 'dier',
choice2: 'faire',
choice3: 'parler',
choice4: 'voir',
answer: 1,
},
{ 

question: 'Les touristes vont à la piscine de l’hôtel pour ……………….',
choice1: 'Danser',
choice2: 'nager',
choice3: 'pleurer',
choice4: 'voyager',
answer: 2,
},
{ 


question: 'Le ………………..est couvert de nuages ; il va pleuvoir.',
choice1: 'Ciel',
choice2: 'lac',
choice3: 'toit        ',
choice4: 'fleuve',
answer: 1,
},
{ 

question: 'Ma mère est ………………..au centre ville ; elle vend des chaussures et des robes.',
choice1: 'Directrice',
choice2: 'commerçante',
choice3: 'couturière',
choice4: 'professeur',
answer: 2,
},
{ 

question: '…………………..est-ce que vous n’allez pas à l’école ?',
choice1: 'combien',
choice2: 'qui',
choice3: 'Quel',
choice4: 'Pourquoi',
answer: 4,
},
{ 
 

question: 'J’ai soif alors, je veux ……………………',
choice1: 'Dormer maintenant',
choice2: 'Boire de l’eau',
choice3: 'parler avec toi',
choice4: 'manger du riz',
answer: 2,
},
{ 
 
question: 'Le bébé est content …………………il voit sa mère.',
choice1: 'quoi',
choice2: 'quand',
choice3: 'bien      ',
choice4: 'où',
answer: 2,
},
{ 

 

question: 'Les malades vont a …………………pour voir le docteur.',
choice1: 'l’église',
choice2: 'L’ecole',
choice3: 'l’usine',
choice4: 'l’hôpital',
answer: 4,
},
{ 
 

question: 'L’orange est le ……………………que j’aime bien.',
choice1: 'baton',
choice2: 'livre',
choice3: 'journal',
choice4: 'fruit',
answer: 4,
},
{ 
 

question: 'Il y a beaucoup de maisons ………………dans ce village.',
choice1: 'blancs',
choice2: 'verts',
choice3: 'noirs',
choice4: 'rondes',
answer: 4,
},
{ 
	question: 'La famille de Kafui\n\n – Ou est-ce que Kafui vit ? – Il vit …………………',

choice1: 'avec ses amis',
choice2: 'avec sa famille',
choice3: 'chez sa mère',
choice4: 'chez son oncle',
answer: 2, 

},
{ 

question: 'La famille de Kafui\n\n Il y a ………………personnes dans la famille de Kafui.',

choice1: 'quatre',
choice2: 'cinq',
choice3: 'six',
choice4: 'sept',
answer: 2,

},
{ 
 
question: 'La famille de Kafui\n\n ‘Esi l’aînée’ veut dire qu’Esi est ………………',

choice1: 'le premier enfant de la famille',
choice2: 'un enfant unique',
choice3: 'la plus aimée de la famille',
choice4: 'une belle fille',
answer: 1,

},
{ 

question: 'La famille de Kafui\n\n …………………….est le cadet de la famille de Kafui.',

choice1: 'Esi',
choice2: 'Kafui',
choice3: 'Maman',
choice4: 'Sani',
answer: 4,

},
{ 

question: 'La famille de Kafui\n\n – Quelle est la profession de la mère de Kafui ?\nElle est …………………',

choice1: 'professeur',
choice2: 'médecin',
choice3: 'commerçante',
choice4: 'ménagère',
answer: 3,

},
{ 

question: 'La famille de Kafui\n\n La famille fait …………….pour commencer la journée.',

choice1: 'le nettoyage',
choice2: 'la cuisine',
choice3: 'les activités',
choice4: 'les prières',
answer: 4,

},
{ 
 
question: 'La famille de Kafui\n\n A sept heures du matin, ……………………',

choice1: 'le père va au travail',
choice2: 'la mère va au marché',
choice3: 'les enfants vont à l’école',
choice4: 'la famille fait la prière',
answer: 1,

},
{ 

question: 'La famille de Kafui\n\n Qui quitte la maison le dernier ?',

choice1: 'Maman',
choice2: 'Kafui',
choice3: 'Papa',
choice4: 'Esi',
answer: 1,

},
{  

question: 'La famille de Kafui\n\n – Pourquoi Kafui aime-t-il les week-ends ?Parce que ………………',

choice1: 'la famille mange bien',
choice2: 'tout se passe bien',
choice3: 'la famille va au marché',
choice4: 'tout le monde reste à la maison',
answer: 4,

},
{ 

question: 'La famille de Kafui\n\n Selon le texte, la famille de Kafui est ……………………',

choice1: 'musulmane',
choice2: 'chrétienne',
choice3: 'traditionnelle',
choice4: 'laïque',
answer: 2,

},
{ 
	question: 'Une leçon de français\n\n Chaque mardi matin, nous —31— un cours de français. ',
choice1: 'as',
choice2: 'avez',
choice3: 'avons',
choice4: 'ont',
answer: 3, 
},
{
question: 'Une leçon de français\n\n Notre professeur de français, Monsieur Lameton prépare beaucoup —32— activités pour rendre la classe intéressante.',
choice1: 'd’',
choice2: 'des',
choice3: 'de l’',
choice4: 'les',
answer: 1,
},
{
question: 'Une leçon de français\n\n Dès qu’il rentre dans la classe, nous nous levons et —33— nous salue.',
choice1: 'elle',
choice2: 'lui',
choice3: 'ils',
choice4: 'il',
answer: 4,
},
{

question: 'Une leçon de français\n\n Nous répondons tous. Apres, nous nous asseyons et le cours —34—.',
choice1: 'commence',
choice2: 'commencent',
choice3: 'commencez',
choice4: 'commençons',
answer: 1,
},
{
question: 'Une leçon de français\n\n Quand il s’agit —35— noms en français, ',
choice1: 'des',
choice2: 'du',
choice3: 'le',
choice4: 'les',
answer: 1,
},
{
question: 'Une leçon de français\n\n il répète plusieurs fois —36—,',
choice1: 'comment',
choice2: 'quand',
choice3: 'que',
choice4: 'qui',
answer: 3,
},
{
question: 'Une leçon de français\n\n le nom est toujours 37— d’un article.',
choice1: 'précédé             ',
choice2: 'precede',
choice3: 'précèder',
choice4: 'precedent',
answer: 1,
},
{
question: 'Une leçon de français\n\n Il nous donne beaucoup d’exemples des noms —38— et des noms masculins.',
choice1: 'féminin',
choice2: 'feminine',
choice3: 'féminines',
choice4: 'féminins',
answer: 4,
},
{

question: 'Une leçon de français\n\n Finalement, il nous dit de mettre des articles —39— les noms qu’il écrit au tableau.',
choice1: 'après',
choice2: 'devant',
choice3: 'sans',
choice4: 'derrière',
answer: 2,
},
{
question: 'Une leçon de français\n\n J’aime les leçons de Monsieur Lameton parce qu’elles —40— très intéressantes.',
choice1: 'ont',
choice2: 'font',
choice3: 'sont',
choice4: 'vont',
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
