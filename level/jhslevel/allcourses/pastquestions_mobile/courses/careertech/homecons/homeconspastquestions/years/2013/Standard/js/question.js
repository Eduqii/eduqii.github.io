

//Array of Objects
const quiz = [
  {
  	question:'Which of the stitches can be used to hold down a hem decoratively?',
  	options:['Basting', 'Hemming', 'Herringbone', 'Overcasting'],
  	answer:2
  },
  {	
  	question: 'The advantage of buying food in bulk is that it',
	options:[ 'becomes abundant','becomes cheaper', 'is easier to choose', 'is easier to store'],
	answer:1
  },
  {
  	question:'A balanced meal must contain',
  	options:['food from each food group', 'little fat and oil only',
		 'protective foods only',
		 'protein foods only'],
  	answer:0
  },
  {
  	question:'Drawing and painting are grouped under',
  	options:[ 'landscape',
		 'still life',
		 'three-dimensional work',
		 'two-dimensional work'],
  	answer:3
  },
  {
  	question:'Identify the drawing tool from the following items',
  	options:[ 'Crayon',
		 'Paper',
		'Palette',
		 'Ruler'],
  	answer:0
  },
  {
  	question: '<i>' + 'The figure below is a wooden block. Use it to answer Question' + '</i>' + 'Which of the following represents the front view in the direction of arrow Q?',
		options: ['A',
		 'B',
		 'C',
		'D'],
		answer: 2,
		img: 'https://eduqii.github.io/sharedassets/assets/2013econsques6.png',
		img: 'https://eduqii.github.io/sharedassets/assets/2016econsques6options.png'
  },
  {
  	question: '<i>' + 'The figure below is a wooden block. Use it to answer Question' + '</i>' + 'The plan is represented by',
	 options: [ 'A',
		 'B',
		 'C',
		 'D'],
		answer: 0,
		img: 'https://eduqii.github.io/sharedassets/assets/2013econsques6.png',
  },
  {
  	question: 'A sole proprietor',
		options: [ 'shares profit with friends',
		 'shares profit with a partner',
		 'takes decisions alone',
		 'takes decision with his staff'],
		answer: 2
  },
  {
  	question: 'The statement describing the problem in designing is referred to as',
		options: ['design brief',
		 'design process',
		 'situation',
		 'investigation'],
		answer: 2
  },
  {
  	question: 'Which of the following is not a type of joint for fixing parts of furniture',
		options: ['movable joints',
		 'unmovable joints',
		 'Temporary joints',
		 'permanent joints'],
		answer: 2
  },
  {
  	question: 'In oblique drawing one side of the object is inclined at an angle of',
		options: ['30°',
		 '45°',
		 '60°',
		 '90°'],
		answer: 1
  },
  {
  	question: 'In a circuit diagram, current flows from',
		options: ['neutral to negative',
		 'neutral to positive',
		 'positive to negative',
		 'negative to positive'],
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
  	question: 'The first step in designing is',
		options: ['choosing the right materials',
		 'colouring the sketches',
		 'identifying the problem',
		 'making sketch models'],
		answer: 2
  },
  {
  	question: 'A dressmaker may also be skillful in' + '<br>'
  	'I. embroidery making' + '<br>'
  	'II. furnishing homes beautifully' + '<br>'
  	'III. making beautiful paintings' + '<br>' +
  	'IV. selecting materials for upholstery',
		options: ['I, II and III only',
		 'I, II and IV only',
		 'I, III and IV',
		 'II, III and IV only'],
		answer: 1
  },
  {
  	question: 'The basic items in a dressmaker’s shop include',
		options: ['embroidery machine and tracing wheel',
		 'long mirror and buttonhole maker',
		 'neatening machine and long meter rule',
		 'sewing machine and measuring tape'],
		answer: 3
  },
  {
  	question: 'The presser foot on the sewing machine',
		options: ['controls the thread from the bobbin',
		 'holds fabric in position',
		 'Tin',
		 ' Manganese',
		 'Bauxite'],
		answer: 2
  },
  {
  	question: 'The main cause of the formation of the Volta Lake was the?',
		options: ['construction of a dam across the Volta River',
		 'generation of hydro-electric power from the Volta River',
		 'oactivities of the fishermen along the Volta River',
		 'construction of a bridge across the Volta River',
		 'development of river transportation on the Volta River'],
		answer: 0
  },
  {
  	question: ' Which of the following may help solve the problem of forest destruction in Ghana?',
		options: [' Bush burning',
		 ' Lumbering',
		 'Mining',
		 'Farming',
		 'Afforestation'],
		answer: 4
  },
  {
  	question: 'The most popular mode of transport in Ghana is by',
		options: ['sea',
		 'rail',
		 'air',
		 'road',
		 ' river'],
		answer: 3
  },
  {
  	question: 'All the big textile factories in Ghana are located at',
		options: ['Tamale',
		 'Winneba',
		 'Tema',
		 'Kumasi',
		 'Nsawam'],
		answer: 2
  },
  {
  	question: ' Which of the following do people belonging to the same ethnic group in Ghana have in common?',
		options: ['Clothes',
		 'Language',
		 'Name',
		 'Occupation',
		 ' Religion'],
		answer: 1
  },
  {
  	question: ' Which of the following is not associated with celebration of festivals in Ghana?',
		options: [' Planning Developmental Projects',
		 ' Cleansing Ancestral Stools',
		 ' Feasting and Merry-making',
		 'Paying homage of chiefg',
		 'Establishing a new settlement'],
		answer: 4
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