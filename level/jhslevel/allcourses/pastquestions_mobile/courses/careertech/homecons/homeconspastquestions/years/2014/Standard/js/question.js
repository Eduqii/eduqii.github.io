

//Array of Objects
const quiz = [
  {
  	question:'To hold a lining onto a fabric temporarily, one can use',
  	options:['basting', 'even tacking', 'tailor’s tacks', 'thread marking'],
  	answer:1
  },
  {	
  	question: 'Which of the following stitches can be used to neaten raw edges of a set-in-sleeve?',
	options:[ 'Feather','Fishbone', 'Herringbone', 'Loop'],
	answer:2
  },
  {
  	question:'The goiter on Evelyn’s neck is caused by lack of',
  	options:['calcium', ' iodine',
		 'protein',
		 'vitamin'],
  	answer:1
  },
  {
  	question:'Man-made elements represented in art include',
  	options:[ 'branches',
		 'rivers',
		 'stones',
		 'walls'],
  	answer:3
  },
  {
  	question:'The visitors’ book signed at exhibitions helps the exhibitor to know the',
  	options:[ 'dignitaries who attended',
		 'number of works in high demand',
		'observations made about the work',
		 'people who came'],
  	answer:2
  },
  {
  	question: '<i>' + 'Use the sketch below to answer question' + '</i>' + 'Which of the following represents the front view in the direction of arrow Z?',
		options: ['A',
		 'B',
		 'C',
		'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2014econsques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2014econsques6options6.png'
  },
  {
  	question: '<i>' + 'Use the sketch below to answer question' + '</i>' + 'Which of the following represents the left end elevation in the direction of arrow X?',
	 options: [ 'A',
		 'B',
		 'C',
		 'D'],
		answer: 2,
		img: 'https://eduqii.github.io/sharedassets/assets/2014econsques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2014econsques7options.png',
  },
  {
  	question: 'A place where art works are sold is',
		options: [ 'an archive',
		 'a gallery',
		 'a museum',
		 'a studio'],
		answer: 1
  },
  {
  	question: 'In design, the conditions that the final solution must satisfy is termed',
		options: ['investigation',
		 'specification',
		 'development',
		 'analysis'],
		answer: 1
  },
  {
  	question: 'Which of the following instruments is most suitable for drawing horizontal lines?',
		options: ['Tee-square',
		 'Protractor',
		 'Compass',
		 'Set-square'],
		answer: 0

  },
  {
  	question: '<i>' + 'Figure 1 shows a design process. Use it to answer this question' + '</i>' + 'Figure 1 shows the method of',
		options: ['specifying solutions',
		 'stating specification',
		 'evaluating artifact',
		 'identifying needs'],
		answer: 3,
		img: 'https://eduqii.github.io/sharedassets/assets/beceHomeEcons20141112.png'

  },
  {
  	question: '<i>' + 'Figure 1 shows a design process. Use it to answer this question' + '</i>' + 'Which of the following design process stages follows the method shown in figure 1?',
		options: ['Writing specifications',
		 'Writing situation',
		 'Analyzing a situation',
		 'Sketching possible solutions'],
		answer: 3
  },
  {
  	question: 'Shading with lines is described as',
		options: ['cross hatching',
		 'hatching',
		 'stippling',
		'tonal value'],
		answer: 1
  },
  {
  	question: 'Which of the following colours produces a feeling of warmth?',
		options: ['Blue',
		 'Green',
		 'Violet',
		 'White'],
		answer: 2
  },
  {
  	question: 'Which of the following factors can cause a sewing business to collapse?',
		options: ['Advertising',
		 'Insurance',
		 'Low sales',
		 'Skilled labour'],
		answer: 2
  },
  {
  	question: 'Which of the following tools is used for drawing lines when drafting patterns?',
		options: ['A pair of dividers',
		 'A protractor',
		 'Metre rule',
		 'Tape measure'],
		answer: 2
  },
  {
  	question: 'It is better to use cotton fabrics for making specimen because it is',
		options: ['beautiful',
		 'dirt resistant',
		 'durable',
		 'easy to handle'],
		answer: 2
  },
  {
  	question: 'All vegetable fibres leave ………………… when burnt.',
		options: ['ashes',
		 'charcoal',
		 'hard ball',
		 'soft ball'],
		answer: 0
  },
  {
  	question: 'The most suitable fabric for making a bed sheet is',
		options: ['cotton',
		 'nylon',
		 'rayon',
		 'silk'],
		answer: 0
  },
  {
  	question: 'One can make an embroidered table runner if he or she learns',
		options: ['designing',
		 'drawing',
		 'sewing',
		 'weaving'],
		answer: 3
  },
  {
  	question: 'Which of the following measurement is needed when making a boy’s pair of shorts?',
		options: ['Back length',
		 'Chest',
		 'Crotch',
		 'Width'],
		answer: 2
  },
  {
  	question: 'The commonest collar on babies’ garment is',
		options: ['Chinese',
		 'Peterpan',
		 'Shawl',
		 'Shirt'],
		answer: 1
  },
  {
  	question: 'Which of the following are portions of control equipment?' + '<br />' + 'I. Measuring cups' + '<br>' + 
  	'II. Weighing scales' + '<br>' +
  	'III. Polythene bags' + '<br>' +
  	'IV. Empty tins' ,
		options: ['I, II and III only',
		 'I, II and IV only',
		 'I, III and IV only',
		 'II, III and IV only'],
		answer: 1
  },
  {
  	question: 'Moist heat causes ………………… to the human skin.',
		options: ['bruises',
		 'burns',
		 'cuts',
		 'scalds'],
		answer: 3
  },
  {
  	question: 'Food preservation is the treatment given to foods to enable them stay fresh for',
		options: ['a long time',
		 'some days',
		 'three days',
		 'three weeks'],
		answer: 0
  },
  {
  	question: 'The method of cooking in which heat travels directly to the food is',
		options: ['baking',
		 'boiling',
		 'grilling',
		 'stewing'],
		answer: 2
  },
  {
  	question: 'The method of cooking which is fast but expensive to use is',
		options: ['boiling',
		 'frying',
		 'grilling',
		 'roasting'],
		answer: 1
  },
  {
  	question: 'Which of the following are reasons for cooking food? To' + 
  	'<br>' + 'I. help food digest faster' + '<br>' +
  	'II. make the food edible' + '<br>' +
  	'III. make the food soft' + '<br>' +
  	'IV. make the food last longer',
		options: ['A',
		 'B',
		 'C',
		 'D'],
		answer: 0
  },
  {
  	question: 'The most important factor to consider when planning meals is the',
		options: ['appearance of the food',
		 'family budget',
		 'food available',
		 'service of the food'],
		answer: 1
  }
]