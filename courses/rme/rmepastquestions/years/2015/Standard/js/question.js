

//Array of Objects
const quiz = [
  {
  	question:'Which of the following people was commanded by God to build an ark?',
  	options:['Joseph',
			 'Jacob',
			 'Noah',
			 'David'],
  	answer: 2
  },
  {	
  	question: ' Who gave the tomb in which Jesus was buried?',
	options:[ 'Simon of Cyrene',
			  'Joseph of Arimathea',
			  'Nicodemus',
			  'Zebedee'],
	answer: 1
  },
  {
  	question:'What is the second pillar of Islam?',
  	options:['Salat',
			 'Sawm',
			 'Zakat',
		     'Hajj'],
  	answer: 0
  },
  {
  	question:'On what occasion do Muslims perform the Janazah prayer?',  
  	options:[ 'Before a Muslim travels',
			  'After observing a fast',
			  'During Friday worship',
			  'When a Muslim dies'],
  	answer: 3
  },
  {
  	question:'The main reason for the celebration of Odwira festival is for community',  	
  	options:[ 'development',
			  'preservation',
			  'purification',
			  're-organization'],
  	answer: 2
  },
  {
  	question: 'Which of the following animals provides security to man?',		
  	options: ['Goat',
			  'Donkey',
			  'Dog',
			  'Cow'],
		answer: 2
  },
  {
  	question: 'Puberty rites should be encouraged because it',	 
  	options: [ 'links the youth into adulthood',
			   'helps the youth to become rich',
			   'promotes chastity among the youth',
			   'makes the youth look more attractive'],
		answer: 2
  },
  {
  	question: 'Which of the ten commandments instructs Christians to be content with what they have?',
		options: [ 'First',
				   'Fourth',
			  	   'Eighth',
			 	   'Tenth'],
		answer: 3
  },
  {
  	question: 'Which of the following parables of Jesus teaches forgiveness? The',		
  	options: ['unjust steward',
			  'rich fool',
			  'good Samaritan',
		      'prodigal son'],
		answer: 3
  },
  {
  	question: 'Christians who are persecuted for the sake of righteousness are blessed because',
		options: ['God will be merciful to them',
			  	  'God’s kingdom belongs to them',
			   	  'they shall be comforted',
				  'they shall see God'],
		answer: 1
  },
  {
  	question: 'Going round the Kaba is an Islamic religious activity done during',		
  	options: ['Eid-ul-Adha',
			  'Eid-ul-Fitr',
			  'Hajj',
			  'Ramadan'],
		answer: 2
  },
  {
  	question: 'Which Islamic prayer is observed at sunset?',
		options: ['Janazah',
				  'Tarawih',
				  'Isha',
				  'Maghrib'],
		answer: 3
  },
  {
  	question: 'Traditionalists pray by means of',		
  	options: ['music and dance',
			  'spirit possession',
			  'pouring libation',
			  'divination'],
		answer: 2
  },
  {
  	question: 'In African Traditional Religion, the living dead are referred to as',		
  	options: ['bad spirits',
			  'witch doctors',
			  'ancestors',
			  'mediums'],
		answer: 2
  },
  {
  	question: 'One of the reasons for which God created the sea is to',		
  	options: ['generate hydro-electric power',
			  'reduce soil erosion',
			  'beautify the environment',
			  'provide habitat for some animals'],
		answer: 3
  },
  {
  	question: 'The most important rite in Christian sacramental worship is the',		
  	options: ['taking of the holy communion',
			  'reading of the old testament',
			  'reading of the new testament',
			  'collection of offertory and tithe'],
		answer: 0
  },
  {
  	question: 'God is called Nyame among the Akans because He is the',		
  	options: ['Creator',
		   	  'Dependable',
			  'Ever-living',
			  'Supreme Being'],
		answer: 1
  },
  {
  	question: 'Egya Ahor is fondly remembered by the Fante for',		
  	options: ['his miraculous powers',
			  'commanding the golden stool',
			  'his resurrection from death',
			  'saving his people'],
		answer: 3
  },
  {
  	question: 'Eid-ul-Adha is celebrated by Muslims to',		
  	options: ['mark Abraham’s sacrifice to Allah',
			  'remember the death of Muhammed',
			  'mark the end of Ramadan',
			  'remember the birth of Muhammed'],
		answer: 0
  },
  {
  	question: 'Which of the following is considered when choosing a name for a new born child?',
		options: [' The weight of the child',
				  'Tribe of the parents',
				  'Age of the mother',
				  'The baby’s place of birth'],
		answer: 1
  },
  {
  	question: 'People cherish the spirit of obedience because it',		
  	options: ['enhances tolerance',
			  'promotes peace',
			  'creates wealth',
			  'promotes security'],
		answer: 1
  },
  {
  	question: 'Muslims show their commitment to Allah by',		
  	options: ['dressing modestly',
			  'visiting the mosque everyday',
			  'marrying four women',
			  'observing all prescribed rituals'],
		answer: 3
  },
  {
  	question: 'Which of the following is an act of good deed?',		
  	options: ['Giving one’s seat to the elderly',
			  'Receiving a testimonial',
			  'Participating in sporting activities',
			  'Ability to perform one’s assignment'],
		answer: 0
  },
  {
  	question: 'Individuals can co-exist peacefully in a community if they',		
  	options: [' practice each other’s religion',
			  'pray together',
			  'respect each other',
			  'share food together'],
		answer: 2
  },
  {
  	question: 'A student must dress decently because it',		
  	options: ['is a mark of intelligence',
			  'shows respect and politeness',
			  'enables one to gain favour from others',
			  'helps one to obey school rules'],
		answer: 1
  },
  {
  	question: 'Someone who is respectful and polite is said to be',		
  	options: ['courteous',
			  'kind',
			  'chaste',
			  'moral'],
		answer: 0
  },
  {
  	question: 'Punishments are meant to',		
  	options: ['disorganize the offender',
		      'calm the offender',
			  'hurt the offender',
			  'reform the offender'],
		answer: 3
  },
  {
  	question: 'Which of the following is a moral value cherished in Ghanaian society?',		
  	options: ['Service',
		      'Honesty',
			  'Tolerance',
			  'Pride'],
		answer: 1
  },
  {
  	question: 'To live a chaste life, one must',		
  	options: ['attend church service regularly',
			  'be obedient to teachers',
			  'work hard to become rich',
			  'avoid casual sex'],
		answer: 3
  },
  {
  	question: 'Which of the following is not a method of preventing teenage pregnancy?',		
  	options:['Sex education',
			 'Good parental care',
			 'Peer pressure',
			 'Avoiding pre-marital sex'],
		answer: 2
  },
  {
  	question: 'Good behaviour is exhibited by',
		options: ['staring at elders',
			   	  'doing what is right',
				  'always studying the scriptures',
				  'praying and fasting'],
		answer: 1
  },
  {
  	question: 'Money is used wisely when',		
  	options: ['things are bought on credit',
			  'it is spent on expensive things',
			  'it is spent on things budgeted for',
			  'it is spent on poor people'],
		answer: 2
  },
  {
  	question: 'Showing respect and obedience to school authority ensures',		
  	options: ['repentance and forgiveness',
			  'peaceful co-existence',
			  'success in examination',
			  'humility and hard work'],
		answer: 1
  },
  {
  	question: 'A nuclear family begins when',		
  	options: ['parents live with siblings',
			  'parents ignore their relations',
			  'couples get legally married',
			  'couples have many siblings'],
		answer: 2
  },
  {
  	question: 'Saving money helps the individual to',		
  	options: ['plan for the future',
			  'become rich overnight',
			  'attend school regularly',
			  'make more friends'],
		answer: 0
  },
  {
  	question: 'The ant is usually used as a symbol of',		
  	options: ['love',
			  'commitment',
			  'hard work',
			  'unity'],
		answer: 2
  },
  {
  	question: 'Which of the following functions is performed by Asafo companies?',		
  	options: ['Acting as watchdogs',
			  'Registration of foreigners',
			  'Collection of taxes',
			  'Collecting Rubbish'],
		answer: 0
  },
  {
  	question: 'Which of the following activities best offers relaxation?',		
  	options: ['Painting',
			  'Eating',
			  'Running',
			  'Reading'],
		answer: 3
  },
  {
  	question: 'Religious Youth Organization are established to',		
  	options: ['honour their leaders',
			  'carry out communal labour',
		  	  'help protect the natural environment',
			  'defend the interest of the society'],
		answer: 3
  },
  {
  	question: 'Work done to earn income can be described as',
		options: ['home work',
			      'community work',
				  'occupational work',
				  'school work'],
		answer: 2
  } 
]