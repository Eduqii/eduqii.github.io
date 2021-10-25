

//Array of Objects
const quiz = [
  {
  	question:'The colour used for showing rivers and lakes on topographical maps is',
  	options:['red', 'blue', 'brown', 'green', 'yellow'],
  	answer:1
  },
  {	
  	question: 'Use the contour line below to answer this question' + '<br>' + 'The vertical interval is',
	options:[ '100 m','200 m', '300 m', '400 m', ' 500 m'],
	answer:0,
	img: 'img/contour.png'
  },
  {
  	question:'Use the contour line below to answer this question' + '<br />' + 'The landform shown is a',
  	options:['cliff', ' valley',
		 ' ridge',
		 ' plateau',
		 'spur'],
  	answer:4,
  	img: 'img/contour.png'
  },
  {
  	question:'How many days does the earth take to complete its journey around the sun?',
  	options:[ '360 ¼',
		 ' 365',
		 '365 ¼',
		 '366',
		 '366 ¼'],
  	answer:2
  },
  {
  	question:'The revolution of the earth around the sun is the main cause of',
  	options:[ 'the rise and fall in the sea level',
		 'day and night',
		' changes in wind direction',
		 'the four seasons',
		 'changes in the direction of the ocean current'],
  	answer:3
  },
  {
  	question: 'When it is 2:00 pm at a place on longitude 0°, the time at a place on longitude 45°W will be',
		options: ['10:00 am',
		 '11:00 am',
		 '12:00 noon',
		'4:00 pm',
		 '5:00 pm'],
		answer: 1
  },
  {
  	question: 'When the sun is overhead on the Tropic of Capricorn, areas in the Southern Hemisphere experience',
	 options: [ 'equinoxes',
		 ' spring',
		 'summer',
		 'autumn',
		 ' winter'],
		answer: 2
  },
  {
  	question: 'Which of the following is not a coastal landform?',
		options: [ ' Cliff',
		 'Estuary',
		 'Sandbar',
		 'Lagoon',
		 'Inselberg'],
		answer: 0
  },
  {
  	question: 'A common feature found along the lower course of a river is a',
		options: ['meander',
		 'gorge',
		 ' tributary',
		 'waterfall',
		 'mountain '],
		answer: 0
  },
  {
  	question: ' In which month was the highest rainfall recorded?',
		options: ['April',
		 'May',
		 ' June',
		 'July',
		 'August'],
		answer: 2
  },
  {
  	question: ' The total amount of rainfall recorded for the year was',
		options: [' 576 mm',
		 ' 607 mm',
		 '667 mm',
		 '706 mm',
		 '767 mm'],
		answer: 0
  },
  {
  	question: 'The annual range of temperature was',
		options: [' 10 °C',
		 '20 °C',
		 ' 21 °C',
		 '25 °C',
		 ' 30 °C'],
		answer: 0
  },
  {
  	question: 'Which of the following statements best describes the position of Ghana?',
		options: [' Ghana is to the east of the Republic of Togo',
		 'Burkina Faso is the southern neighbour of Ghana',
		 ' Ghana is to the immediate west of Niger',
		'Ghana is to the immediate east of La Cote d‟Ivoire',
		 'Ghana is boarded to the north by the Gulf of Guinea'],
		answer: 3
  },
  {
  	question: ' The main vegetation types found in the Northern parts of Ghana is',
		options: ['evergreen forest',
		 ' mangrove swamp',
		 'hot desert',
		 'semi-deciduous forest',
		 'savanna grassland'],
		answer: 4
  },
  {
  	question: 'The hot dry winds that blow over most parts of Ghana during the harmattan are the',
		options: ['south-west monsoon',
		 'south easterly winds',
		 ' north-westerly winds',
		 'north-east trade winds',
		 ' easterly winds'],
		answer: 3
  },
  {
  	question: 'The most important export commodity for Ghana is',
		options: [' timber',
		 ' cocoa',
		 'coffee',
		 '  pineapple',
		' kola'],
		answer: 1
  },
  {
  	question: 'Which of the following minerals is not mined in Ghana?',
		options: ['Gold',
		 'Diamond',
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