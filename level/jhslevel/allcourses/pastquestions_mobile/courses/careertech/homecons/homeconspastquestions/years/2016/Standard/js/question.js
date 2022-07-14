

//Array of Objects
const quiz = [
  {
  	question:'The basic stitch which starts all crocheted articles is',
  	options:['chain', 'cross', 'loop', 'stem'],
  	answer:0
  },
  {	
  	question: 'A glass is best used to serve',
	options:[ 'cream','drinks', 'ice-cream', 'yoghurt'],
	answer:1,
  },
  {
  	question:'Which of the following is inexpensive to use in the rural area?',
  	options:['Coal pot', ' Electric cooker',
		 'Gas cooker',
		 'Kerosene stove'],
  	answer:0
  },
  {
  	question:'The visitors book signed at exhibitions help the exhibitor to know',
  	options:[ 'the number of people who came',
		 'how many works were sold',
		 'the number of people who showed interest',
		 'what people observed about the work'],
  	answer:3
  },
  {
  	question:'In drawing, objects nearer the viewer are in the',
  	options:[ 'background',
		 'foreground',
		 'horizon',
		 'middle ground'],
  	answer:1
  },
  {
  	question: '<i>' + 'Use the sketch in Figure 1 to answer this Question' + '</i>' + 'Which of the following represents the front elevation in the direction of arrow Z?',
		options: ['A',
		 'B',
		 'C',
		'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2016ques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2016ques6options.png'
  },
  {
  	question: '<i>' + 'Use the sketch in Figure 1 to answer this Question' + '</i>' + 'Which of the following represents the left end elevation in the direction of P?',
	 options: [ 'A',
		 'B',
		 'C',
		 'D'],
		answer: 1,
		img: 'https://eduqii.github.io/sharedassets/assets/2016ques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2016ques7.png'
  },
  {
  	question: 'Rhythm, balance and emphasis are',
		options: [ 'design processes',
		 'elements of art',
		 'idea developments',
		 'principles of design'],
		answer: 3
  },
  {
  	question: 'The lines drawn above are',
		options: ['diagonal',
		 'parallel',
		 ' vertical',
		 'zigzag'],
		answer: 1,
		img: 'https://eduqii.github.io/sharedassets/assets/2016ques9.png'
  },
  {
  	question: 'The final stage of the design process is the',
		options: ['evaluation',
		 'possible solutions',
		 'specification',
		 'working drawings'],
		answer: 0
  },
  {
  	question: 'Which of the following is not a method of recording a data for solving a design problem?',
		options: ['Observation',
		 'Photographs',
		 'Sketches',
		 'Write-up'],
		answer: 0
  },
  {
  	question: 'Which of the following joints will be suitable for a chair to be dismantled and reassembled?',
		options: ['Nail lap joint',
		 'Glued butt joint',
		 'Glued screw joint',
		 'Bolt and nut'],
		answer: 3
  },
  {
  	question: 'Figure 2 shows the surface development of a',
		options: ['cylinder',
		 'hexagonal prism',
		 'hexagonal pyramid',
		'square prism'],
		answer: 1,
		img: 'https://eduqii.github.io/sharedassets/assets/2018homeconsQ6options.png'
  },
  {
  	question: 'Select a shading style from the following options',
		options: ['Glazing',
		 'Hatching',
		 'Sgraffito',
		 'Sketching'],
		answer: 1
  },
  {
  	question: 'A formal outlet for raising money to start a sewing business is',
		options: ['a family member',
		 'a rural bank',
		 'money lenders',
		 'the susuman'],
		answer: 1
  },
  {
  	question: 'The sewing machine should be inserted with the flat side facing the ……… of the machine.',
		options: ['back',
		 'front',
		 'inside',
		 'outside'],
		answer: 0
  },
  {
  	question: 'Which of the following items will be the basic tools needed for learning how to sew?',
		options: ['Buttonhole scissors, pins and thread',
		 'Metre rule, needles and shears',
		 'Needles, tape measure and pins',
		 'Pencil, pins and thread'],
		answer: 2
  },
  {
  	question: 'Which of the following fibres is obtained by retting?',
		options: ['Cotton',
		 'Jute',
		 'Linen',
		 'Sisal'],
		answer: 2
  },
  {
  	question: 'When making a French seam, start by placing ……………together.',
		options: ['one wrong side against one right side',
		 'two right sides',
		 'two right sides folded edges',
		 'two wrong sides'],
		answer: 3
  },
  {
  	question: 'The first line of stitching when making a French seam is done on the',
		options: ['cutting line',
		 'right side',
		 'seam line',
		 'wrong side'],
		answer: 1
  },
  {
  	question: 'The first line of stitching when making a French seam is done on the',
		options: ['cutting line',
		 'right side',
		 'seam line',
		 'wrong side'],
		answer: 1
  },
  {
  	question: 'Which of these pattern markings indicates seamline?',
		options: ['A',
		 'B',
		 'C',
		 'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2016homeconsques21options.png'
  },
  {
  	question: 'Strips cut on the true cross of a fabric are usually suitable for curved edges because they',
		options: ['are attractive',
		 'are straight',
		 'have the ability to stretch',
		 'have very narrow widths'],
		answer: 2
  },
  {
  	question: 'Which of the following tools should be used to remove fibre and nut from palm fruit liquid?',
		options: ['Colander',
		 'Metal sieve',
		 'Perforated spoon',
		 'Strainer'],
		answer: 0
  },
  {
  	question: 'Kitchen hygiene includes',
		options: ['using clean water for cooking',
		 'washing hands before handling food',
		 'washing utensils immediately after use',
		 'wearing clean clothes'],
		answer: 2
  },
  {
  	question: 'Lack of calcium results in',
		options: ['anaemia',
		 'goiter',
		 'marasmus',
		 'rickets'],
		answer: 3
  },
  {
  	question: 'The most expensive nutrient in the Ghanaian diet is',
		options: ['carbohydrate',
		 'fat',
		 'protein',
		 'vitamin'],
		answer: 2
  },
  {
  	question: 'For a hardboiled egg, cook between',
		options: ['2 to 5 minutes',
		 '5 to 6 minutes',
		 '7 to 8 minutes',
		 '8 to 10 minutes'],
		answer: 3
  },
  {
  	question: 'Food retains most of the nutrients and flavor when it is',
		options: ['boiled',
		 'fried',
		 'steamed',
		 'stewed'],
		answer: 2
  },
  {
  	question: 'When steaming',
		options:['do not allow water to boil',
		 'put the food in the boiling water.',
		 'the boiling water must not touch the food.',
		 'remove the food when water begins to boil'],
		answer: 2
  },
  {
  	question: 'The elements of design which are readily noticed when a table is set for meals are',
		options: ['lines and dots',
		 'shape and colour',
		 'texture and lines',
		 'texture and shape'],
		answer: 1
  }
]