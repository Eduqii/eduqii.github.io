

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
  	question: ' In the history of Ghana, Yaa Asantewaa is noted for the',
		options: ['War of 1901',
		 'Akatamanso war',
		 'War of 1874',
		 'Adaamanso war',
		 'Feyiase war'],
		answer: 0
  },
  {
  	question: 'The Mamprusi in Ghana are believed to have come from',
		options: ['the Upper East Region',
		 ' Western Region',
		 ' southern Ghana',
		 ' eastern part of Lake Chad',
		 'western part of Lake Chad'],
		answer: 3
  },
  {
  	question: ' The Accelerated Development Plan of education was introduced in Ghana in 1951 for the following reasons except?',
		options: [' reduction of primary school education to six years',
		 ' setting up many teacher training colleges',
		 ' reduction in the number of job opportunities for school leavers',
		 ' helping of some workers study privately to enter universities',
		 ' increasing of the number of university students'],
		answer: 2
  },
  {
  	question: 'The second Republic of Ghana covered the period',
		options: [' 1957 to 1960',
		 ' 1960 to 1966',
		 '1966 to 1969',
		 '1969 to 1972',
		 '1972 to 1979'],
		answer: 3
  },
  {
  	question: ' The struggle for the independence of Ghana from 1951 to 1957 was led by?',
		options: [' Dr J.B. Danquah',
		 ' Mr Ako Adjei',
		 'Dr K.A. Busia',
		 ' Mr K.A. Gbedemah',
		 'Dr Kwame Nkrumah'],
		answer: 4
  },
  {
  	question: 'Who was the chairman of the Center for Civic Education in Ghana?',
		options: [' Dr K.A. Busia',
		 ' Mr Kojo Botsio',
		 'Dr John Bilson',
		 ' Mr A Casely-Hayford',
		 ' Mr K.A. Gbedemah'],
		answer: 0
  },
  {
  	question: 'The 1979 Constitution of Ghana was the',
		options:['  first after independence',
		 ' second after independence',
		 ' third after independence',
		 ' fourth after independencee',
		 ' fifth after independence'],
		answer: 2
  },
  {
  	question: 'Trade between two countries is called?',
		options: [' barter trade ',
		 'surplus trade',
		 ' domestic trade',
		 'multilateral trade',
		 'bilateral tradee'],
		answer: 4
  },
  {
  	question: 'Which of the following Educational Policies emphasized the education of the girl-child in Ghana??',
		options: ['Education Act of 1961',
		 ' Education Act of 1951',
		 ' FCUBE of 1996',
		 ' Education Reforms of 1987',
		 ' New Reform of 1974'],
		answer: 0
  },
  {
  	question: ' Most of the lakes in East Africa were formed as a result of the?',
		options: [' rift valley system',
		 'fold mountain system',
		 'action of volcanoes',
		 ' action of wind',
		 ' action of sea waves'],
		answer: 0
  },
  {
  	question: 'There is a large population of white settlers in the highland areas of East Africa mainly because',
		options: [' of the beautiful natural scenery',
		 'it is safe to travel along the steep slopes',
		 'of the sunshine and warmth',
		 ' of the availability of water',
		 ' of the cool, healthy and pleasant environmente'],
		answer: 4
  },
  {
  	question: 'Which of the following African countries is a leading producer of cotton?',
		options: [' Kenya',
		 ' Malawi',
		 'Egypt',
		 'Zambia',
		 ' Uganda'],
		answer: 2
  },
  {
  	question: ' Cotton is the raw material used in making',
		options: [' paper',
		 ' clothes',
		 'shoes',
		 ' cigarettes',
		 ' furniture'],
		answer: 1
  },
  {
  	question: ' All the following are metallic minerals except',
		options: [' bauxite',
		 ' copper',
		 ' gold',
		 'diamond',
		 'manganese'],
		answer: 3
  },
  {
  	question: 'In which of the following countries is the system of apartheid commonly practiced',
		options: ['Egypt',
		 ' Mauritania',
		 ' Kenya',
		 ' Nigeria',
		 'South Africa'],
		answer: 4
  },
  {
  	question: ' Which of the following organizations was set up mainly to help solve the problem of hunger and disease in the world?',
		options: ['The FAO',
		 'The ECA',
		 'The UNDP',
		 'The OAU',
		 ' The UNHCR'],
		answer: 0
  },
  {
  	question: 'The UNO has all the following aims except',
		options: ['maintenance of international peace and security',
		 ' development of friendly relations among nations',
		' removal of unpopular heads of states of member countries',
		 ' solving international problems',
		 'promotion of respect for human rights'],
		answer: 2
  } 
]