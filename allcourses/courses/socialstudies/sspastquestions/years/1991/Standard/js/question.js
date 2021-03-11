

//Array of Objects
const quiz = [
 	{
		question: 'he colour used on maps for vegetation is?',
		options: ['brown',
		 ' green',
		 ' yellow',
		 'red',
		 'violete'],
		answer: 1
	},
	{
		question: 'The molten rock beneath the earth‟s surface is called',
		options: ['solid',
		 'horst',
		 'layer',
		 'magma',
		 'swamp'],
		answer: 3
	},
	{
		question: 'The layer of gases which surrounds the earth is known as',
		options: ['atmosphere',
		 ' temperature',
		 'sunshine',
		 ' ozone',
		 ' cloud'],
		answer: 0
	},
	{
		question: ' Which of the following is not an agent of erosion?',
		options: ['Wind',
		 ' River',
		 'Sea',
		 'Ice',
		 'Volcano'],
		answer: 4
	},
	{
		question: 'The conventional sign 1000 on a map represents',
		options: ['spot height',
		 ' conical hill',
		 ' settlement type',
		 'distance',
		 'trigonometric station'],
		answer: 0
	},
	{
		question: ' The year 2000 is in the',
		options: ['thirteenth century',
		 'fifteenth century',
		 ' twentieth century',
		 'twenty first century',
		 'two hundredth century'],
		answer: 3
	},
	{
		question: 'A general pardon for offence against the state is known as',
		options: ['amnesty',
		 'freedom',
		 'permit',
		 ' exeat',
		 'visa'],
		answer: 0
	},
	{
		question: 'Which of the following towns in Ghana is well noted for the mining of diamond?',
		options: ['Konongo',
		 'Akwatia',
		 'Tarkwa',
		 'Obuasi',
		 'Nsuta'],
		answer: 1
	},
	{
		question: 'The West Africa Examination Council (WAEC) consist of',
		options: ['two member countries',
		 'three member countries',
		 ' four member countries',
		 ' five member countries',
		 'six member countries'],
		answer: 3
	},
	{
		question: 'In which of the following regions is Lake Bosomtwi?',
		options: ['Eastern',
		 ' Western',
		 'Volta',
		 'Ashanti',
		 'Central'],
		answer: 3
	},

	{
		question: 'The highest mountain in Africa is',
		options: ['Eglin',
		 ' Adamawa',
		 'Kilimanjaro',
		 'Everest',
		 ' Cameroon'],
		answer: 2
	},
	{
		question: 'The official seat of the government of Ghana is',
		options: [' The official seat of the government of Ghana isr Barracks',
		 ' Peduase Lodge',
		 ' Osu Castle',
		 'The State House',
		 'The Black Star Square'],
		answer: 2
	},
	{
		question: ' Wine production from grapes is an important industry in',
		options: ['Senegal',
		 'south Africa',
		 'Sierra Leone',
		 'Zimbabwe',
		 'The Sudan'],
		answer: 1
	},
	{
		question: 'The Greenwich Meridian passes through',
		options: ['Mexico city',
		 ' Tema',
		 'Tokyo',
		 'Geneva',
		 'Cairo'],
		answer: 1
	},
	{
		question: ' What type of rainfall is likely to be experienced in the Cameroon Mountains?',
		options: [' Cyclonic',
		 ' Relief',
		 ' Conventional',
		 ' Monsoon',
		 'Line squalls'],
		answer: 1
	},
	{
		question: 'The former capital of the Gold Coast (Ghana) was',
		options: ['Sekondi',
		 'Cape Coast',
		 ' Dodowa',
		 'Ho',
		 'Sunyani'],
		answer: 1
	},
	{
		question: 'Mountain Ejuanema is located in the',
		options: [' Kwahu Ranges',
		 ' Akwapim Ridge',
		 'Gambaga Scarp',
		 ' Shai Hills',
		 'Atewa Ranges'],
		answer: 1
	},
	{
		question: 'Odwira is a festival of the?',
		options: [' Fantes',
		 ' Nzemas',
		 ' Kwahu',
		 ' Krobo',
		 ' Akwapim'],
		answer: 4
	},
	{
		question: 'The Peduase Lodge was built by',
		options: ['Dr Kwame Nkrumah',
		 ' Mr Akuffo Addoo',
		 'Dr K. Abrefa Busia',
		 'Gen. J. A. Ankrah',
		 'Justice E. N. P. Sowah'],
		answer: 0
	},
	{
		question: ' Who was the President of the third republic of Ghana?',
		options: ['Dr K. Abrefa Busia',
		 ' Dr J. B. Danquah',
		 ' Mr Victor Owusu',
		 'Dr Hilla Limann',
		 'Dr E. V. C. de Graft Johnson'],
		answer: 3
	},
	{
		question: ' Which of the following is not a man-made feature?',
		options: ['Mosque',
		 ' Road',
		 ' Borehole',
		 ' Bridge',
		 'Waterfall'],
		answer: 4
	},
	{
		question: 'The point where two streams meet is called',
		options: [' river basin',
		 ' delta',
		 ' tributary',
		 'source',
		 'confluence'],
		answer: 4
	},
	{
		question: ' Which of the following is not a latitude?',
		options: [' Equator',
		 ' Greenwich Meridian',
		 'Tropic of Capricorn',
		 'Tropic of Cancer',
		 ' Arctic Circle'],
		answer: 1
	},
	{
		question: ' A common feature found along the lower course of a river is a',
		options: [' meander',
		 'gorge',
		 'tributary',
		 'waterfallo',
		'mountain'],
		answer: 0
	},
	{
		question: 'The instrument used for measuring humidity is',
		options: ['barometer',
		 'thermometer',
		 ' rain gauge',
		 ' wind vane',
		 'hygrometer'],
		answer: 4
	},
	{
		question: ' Which of the following is not considered as an environmental problem?',
		options: [' Air pollution',
		 ' Bush burning',
		 ' Shortage of water',
		 ' Poor drainage',
		 'Afforestation'],
		answer: 4
	},
	{
		question: 'Which country uses Naira as her currency?',
		options:['Ghana',
		 ' Sierra Leone',
		 ' Nigeria',
		 'Togo',
		 'Liberia'],
		answer: 2
	},
	{
		question: 'Which of the following is a killer disease among children?',
		options: ['Tuberculosis',
		 ' Yellow fever',
		 ' Measles',
		 'Malaria',
		 ' Kwashiorkor'],
		answer: 3
	},
	{
		question: ' Oral Rehydration Salts (ORS) is used to treat',
		options: [' diarrhoea',
		 ' measles',
		 'malaria',
		 'kwashiorkor',
		 'leprosy'],
		answer: 0
	},
	{
		question: 'Which of the following insects causes sleeping sickness in both man and cattle?',
		options: [' Housefly',
		 'Tsetse fly',
		 ' Mosquito',
		 ' Moth',
		 'Locust'],
		answer: 1
	},
	{
		question: ' Where in Ghana is irrigation farming practiced?',
		options:['Aburi',
		 ' Vea',
		 ' Obuasi',
		 'Enchi ',
		 'Salaga'],
		answer: 1
	},
	{
		question: 'Which of the following towns is not situated along the Volta Lake?',
		options: ['Yapei',
		 'Buipe',
		 ' Kete Krachi',
		 ' Akosombo',
		 'Ho'],
		answer: 4 
	},
	{
		question: 'The common fish caught in the lagoons of Ghana is',
		options:[' mudfish',
	 ' tuna',
		 ' tilapia',
		 ' herrings',
		 ' dogfish'],
		answer: 2
	},


	{
		question: ' Most of the lakes in East Africa were formed as a result of the',
		options: [' rift valley system',
		 ' fold mountain system',
		 ' action of volcanoes',
		 ' action of tropical winds',
		 'action of waves'],
		answer: 0
	},
	{
		question: ' Who are often called Peace Officers?',
		options: [' Soldiers',
		 'Policemen',
		 ' Lawyers',
		 ' Doctors',
		 'Teachers'],
		answer: 1
	},
	{
		question: ' The Adomi Bridge is built on one of the following rivers',
		 options: [' Volta',
		 'Ankobra',
		 'Tano',
		 'Pra',
		 'Densu'],
		answer: 0
	},
	{
		question: ' The Committee for the Defence of the Revolution (CDR) in Ghana was introduced by',
		options: ['Dr Kwame Nkrumah',
		 ' Dr KA Busia',
		 ' Mr Victor Owusu',
		 ' Dr Hilla Limann',
		 ' Flt Lt J. J. Rawlings'],
		answer: 4
	},
	{
		question: 'When the civil war broke out in Liberia a peace-keeping force was sent there by',
		options: ['Organization of African Trade Union Unity',
		 ' Organization of African Unity (OAU)',
		 ' United Nations Organization (UNO)',
		 ' Non-Aligned Movement (NAM)',
		'Economic Community of West African States (ECOWAS)'],
		answer: 4
	},
	{
		question: 'Who led the 1948 boycott of European goods in the Gold Coast?',
		options: [ ' Paa Grant',
		 ' Nii Kwabena Bonney',
		 ' Ako Adjei',
		 ' Obetsebi Lamptey',
		 'Kojo Botsio'],
		answer: 1
	},
	{
		question: 'The most Southern point of Ghana is',
		options: [' Cape Coast',
		 'Takoradi',
		 ' Ada',
		 'Accra',
		 ' Cape Three Points'],
		answer: 4
	}

]