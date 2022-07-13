

//Array of Objects
const quiz = [
  {
  	question:'A common method of cooking ripe plantain for sale is',
  	options:['boiling', 'roasting', 'grilling', 'baking'],
  	answer:2
  },
  {	
  	question: 'To shorten the cooking time for meat,',
	options:[ 'slice along the grain.','cut into small pieces.', 'slice into thin pieces.', 'cut across the grain.'],
	answer:3
  },
  {
  	question:'In taking body measurement, a firm tape measure is needed to',
  	options:['save time.', ' avoid wasting fabric.',
		 'obtain accuracy.',
		 'make sewing easy.'],
  	answer:2
  },
  {
  	question:'Which of the following principles of design is similar to proportion?',
  	options:[ 'Balance',
		 'Perspective',
		 'Rhythm',
		 'Scale'],
  	answer:3
  },
  {
  	question:'A preliminary design is meant to',
  	options:[ 'improve creativity.',
		 'increase production.',
		'make sketches.',
		 'produce ideas.'],
  	answer:3
  },
  {
  	question: '<i>' + 'Use the sketch in Figure 1 to answer this Question' + '</i>' + 'Which of the following represents the front view in the direction of arrow Z?',
		options: ['A',
		 'B',
		 'C',
		'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2017econsques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2017ques6options6.png'
  },
  {
  	question: '<i>' + 'Use the sketch in Figure 1 to answer this Question' + '</i>' + 'Which of the following represents the left end elevation?',
	 options: [ 'A',
		 'B',
		 'C',
		 'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2017econsques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2017ques7options6.png'
  },
  {
  	question: 'A single unit of a design is known as',
		options: [ ' motif',
		 'pattern',
		 'plan',
		 'print'],
		answer: 0
  },
  {
  	question: 'Angles are measured by using a',
		options: ['compass',
		 'protractor',
		 'rule',
		 'set square'],
		answer: 1
  },
  {
  	question: 'In designing, the analysis question, what is the purpose of the unit? falls under',
		options: ['construction',
		 'ergonomics',
		 'function',
		 'material'],
		answer: 2
  },
  {
  	question: 'To repair an electrical fault, a safety precaution to observe is to',
		options: ['disconnect live wires',
		 'remove fuse',
		 'remove cover of socket',
		 'switch off main supply'],
		answer: 3
  },
  {
  	question: 'Which of the following is not a cause of weakness in furniture?',
		options: ['Loose joint',
		 'Insufficient polish',
		 'Overloading',
		 'Removal of nail'],
		answer: 1
  },
  {
  	question: 'The tee-square is used for drawing',
		options: ['arcs',
		 'circles',
		 'horizontal lines',
		'vertical lines'],
		answer: 2
  },
  {
  	question: 'Identify the type of lettering used for emphasis.',
		options: ['Freestyle',
		 'Gothic',
		 'Italics',
		 'Romans'],
		answer: 2
  },
  {
  	question: 'Strips cut on the true cross of fabric are usually used for curved edges because they',
		options: ['stretch easily',
		 'do not fray',
		 'are easily prepared',
		 'are colourful'],
		answer: 0
  },
  {
  	question: 'The best fastening for the full back opening of a fourteen year old school girl’s uniform is',
		options: ['press studs',
		 'zipper',
		 'velcro',
		 ' tapes'],
		answer: 1
  },
  {
  	question: 'When making a shirt sleeve, the two rows of gathering stitches are worked on the',
		options: ['seam allowance of the sleeves.',
		 'hem of the sleeves',
		 'side seam of the sleeves',
		 'cap of the sleeves'],
		answer: 3
  },
  {
  	question: 'The most suitable pocket found on men’s classic shirt is',
		options: ['bound',
		 'in-seam',
		 'patch',
		 'welt'],
		answer: 2
  },
  {
  	question: 'In attaching a turnover to a shirt, the first process to work on is the',
		options: ['joining and stitching of the side seam',
		 'preparation and fixing of a pocket',
		 'joining and stitching of the shoulder',
		 'preparation and setting in of sleeve.'],
		answer: 2
  },
  {
  	question: 'The French seam is the most appropriate seam for',
		options: ['children’s wear',
		 'heavy weight fabrics',
		 'light weight fabrics',
		 'undergarment'],
		answer: 2
  },
  {
  	question: 'A repair work done by weaving thread into weakened portion of article is termed',
		options: ['renovating',
		 'darning',
		 'remodeling',
		 'patching'],
		answer: 1
  },
  {
  	question: 'An advantage of freehand cutting is that',
		options: ['it is good for mass production',
		 'it is good for beginners',
		 'it conserves time and energy',
		 'there is no need for pattern drafting'],
		answer: 3
  },
  {
  	question: 'The most important factor to consider when buying canned food is the',
		options: ['weight',
		 'label on product',
		 'colour',
		 'expiry date'],
		answer: 3
  },
  {
  	question: 'In order to retain the nutrients in leafy vegetables,',
		options: ['cut one hour before cooking',
		 'cut when ready to cook',
		 'cut when the water is boiling',
		 'cut few minutes before cooking'],
		answer: 1
  },
  {
  	question: 'In table setting, a cover refers to the space',
		options: ['beside the person’s seat',
		 'left of the person’s seat',
		 'in front of the person’s seat.',
		 'right of the person’s seat'],
		answer: 2
  },
  {
  	question: 'The basic ingredients for preparation of batter are',
		options: ['flour, egg and milk',
		 'flour, egg and oil',
		 'flour, egg and yeast',
		 'flour, egg and baking powder'],
		answer: 0
  },
  {
  	question: 'Food is preserved mainly to',
		options: ['maintain its shape',
		 'make it last longer',
		 'make it palatable',
		 'protect micro organism'],
		answer: 1
  },
  {
  	question: 'A suitable flour used to prepare bread is',
		options: ['soft flour.',
		 'self raising flour',
		 'composite flour',
		 'strong flour'],
		answer: 3
  },
  {
  	question: 'Which of the following dishes is garnished with lemon and parsley?',
		options: ['Grilled mackerel',
		 'Grilled chicken',
		 'Roast lamb',
		 'Beef loaf'],
		answer: 1
  },
  {
  	question: 'Which of the following is a white fish?',
		options:['Mackerel',
		 'Cod',
		 'Herring',
		 'Tilapia'],
		answer: 3
  }
]