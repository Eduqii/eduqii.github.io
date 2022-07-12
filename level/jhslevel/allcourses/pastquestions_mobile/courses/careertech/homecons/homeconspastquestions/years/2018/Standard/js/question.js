

//Array of Objects
const quiz = [
  {
  	question:'Short dashes are used for',
  	options:['cutting planes', 'hidden outlines', 'dimensioning', 'visible outlines'],
  	answer:1
  },
  {	
  	question: 'Which of the following wires carries electric current to an electric iron?',
	options:[ 'Earth','Live', 'Negative', 'Neutral'],
	answer:1
  },
  {
  	question:'Which of the following is not a stage in the design process?',
  	options:['Making', ' Situation',
		 'Specification',
		 'Questionnaire'],
  	answer:3
  },
  {
  	question:'Missing nails in household furniture occur in',
  	options:[ 'concrete benches',
		 'metal tables',
		 'plastic cabinets',
		 'wooden chairs'],
  	answer:3
  },
  {
  	question:'<b>' + 'Figure 1 shows a sketch of wooden block. Use it to answer this question' + '</b>' + 'The view indicated by arrow X is',
  	options:[ 'A',
		 'B',
		'C',
		 'D'],
  	answer:2,
  	img: 'https://eduqii.github.io/sharedassets/assets/2018homeconsQ5.png',
  	img: 'https://eduqii.github.io/sharedassets/assets/2018homeconsoptionsQ5.png'

  },
  {
  	  	question:'<b>' + 'Figure 1 shows a sketch of wooden block. Use it to answer this question' + '</b>' + 'The view indicated by the arrow Y is',
		options: ['A',
		 'B',
		 'C',
		'D'],
		answer: 0,
  	img: 'https://eduqii.github.io/sharedassets/assets/2018homeconsQ6options.png'
  },
  {
  	question: 'The main function of carbohydrate in the body is for',
	 options: [ 'growth',
		 'energy',
		 'repair',
		 'maintenance'],
		answer: 1
  },
  {
  	question: 'Portion control equipment include',
		options: [ 'sauce boat',
		 'oval plate',
		 'casserole',
		 'ladle'],
		answer: 3
  },
  {
  	question: 'The process of making another article out of an existing one is termed',
		options: ['patching',
		 'remodelling',
		 'renovation',
		 'darning'],
		answer: 1
  },
  {
  	question: 'The best seam for children’s dress is',
		options: ['French seam',
		 'open seam',
		 ' overlaid seam',
		 'welt seam'],
		answer: 0
  },
  {
  	question: 'Select the element of design from the following options.',
		options: ['Colour',
		 'Motif',
		 'Repeat',
		 'Rhythm'],
		answer: 0
  },
  {
  	question: 'Shading in tones is best done with',
		options: ['2B pencil',
		 '2H pencil',
		 'HB pencil',
		 'HH pencil'],
		answer: 0
  },
  {
  	question: 'Preliminary sketches help the artist to',
		options: ['increase his drawings',
		 'gather required materials',
		 'get the required form',
		'make the product last longer'],
		answer: 2
  },
  {
  	question: 'Select a neutral colour from the options below',
		options: ['blue',
		 'orange',
		 'red',
		 'white'],
		answer: 3
  },
  {
  	question: 'Which colour is directly opposite red on the six-point colour wheel?',
		options: ['Orange',
		 'Violet',
		 'Green',
		 'Black'],
		answer: 2
  },
  {
  	question: 'The freezer is used to store',
		options: ['fresh milk and cabbage',
		 'kontonmire and eggs',
		 'fresh fish and meat',
		 'lettuce and smoked fish'],
		answer: 2
  },
  {
  	question: 'Which of the following is a standing collar?',
		options: ['Peter pan collar',
		 'Sailor’s collar',
		 'Mandarin collar',
		 'Shirt collar'],
		answer: 2
  },
  {
  	question: 'Tools used for measuring when sewing include',
		options: ['bodkin and stiletto',
		 'needle and sewing pins',
		 'thimble and stitch ripper',
		 'tape measure and metre rule'],
		answer: 3
  },
  {
  	question: 'Stitches used for securing hems and turnings to prevent fraying are',
		options: ['back stitches',
		 'neatening stitches',
		 'running stitches',
		 'temporary stitches'],
		answer: 1
  },
  {
  	question: 'A student can earn income from selling chair backs and fanciful articles when he or she learns',
		options: ['drafting',
		 'embroidery',
		 'sewing',
		 'crocheting'],
		answer: 3
  },
  {
  	question: 'Individual working in a poorly ventilated kitchen often shows signs of',
		options: ['fatigue',
		 'aggression',
		 'forgetfulness',
		 'clumsiness'],
		answer: 0
  },
  {
  	question: 'The major factor to be considered in selecting any equipment for use by a Form Two student is',
		options: ['space for storage',
		 'availability of equipment',
		 'skill of the user',
		 'availability of electricity'],
		answer: 2
  },
  {
  	question: 'In frying meat, heat is transferred by means of',
		options: ['convection',
		 'conduction and radiation',
		 'radiation and convection',
		 'conduction'],
		answer: 0
  },
  {
  	question: 'Incorrect threading of a sewing machine will cause',
		options: ['puckering of seams',
		 'missing stitches',
		 'thread breaking',
		 'loose stitches forming'],
		answer: 3
  },
  {
  	question: 'A suitable inexpensive fabric for making a school bag is',
		options: ['poplin',
		 'denim',
		 'damask',
		 'calico'],
		answer: 3
  },
  {
  	question: 'Fruits are best cooked by',
		options: ['stewing',
		 'poaching',
		 'steaming',
		 'boiling'],
		answer: 0
  },
  {
  	question: 'The food item that absorbs all the liquid during boiling is',
		options: ['rice',
		 'fish',
		 'yam',
		 'meat'],
		answer: 0
  },
  {
  	question: 'A strong neat seam suitable for pyjamas is',
		options: ['double stitched seam',
		 'overlaid seam',
		 'French seam',
		 'open seam'],
		answer: 0
  },
  {
  	question: 'Petroleum jelly is used in the treatment of',
		options: ['open wound',
		 'scald',
		 'minor burns',
		 'bruises'],
		answer: 2
  },
  {
  	question: 'In setting a table, the glass for water is placed',
		options:['on the dinner table',
		 'on side of plate',
		 'at the tip of dessert fork',
		 'at the tip of dinner knife'],
		answer: 3
  }
]