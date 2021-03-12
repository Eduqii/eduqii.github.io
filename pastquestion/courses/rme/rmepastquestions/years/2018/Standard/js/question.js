

//Array of Objects
const quiz = [
  {
  	question:'The power of God is seen in His',
  	options:['omniscience',
			 'omnipotence',
			 'omnipresence',
			 'omnivorous'],
  	answer: 1
  },
  {	
  	question: 'According to the Bible, God commanded the earth to produce plants on the',
	options:[ 'first day',
			  'third day',
			  'fifth day',
			  'sixth day'],
	answer: 1
  },
  {
  	question:'Which of the following options is not a reason for which we must care for God’s creation?',
  	options:['It makes us righteous people',
			 'To show respect for God’s gift of nature',
			 'To preserve it for future generation',
			 'We are stewards of God’s creation'],
  	answer: 0
  },
  {
  	question:'Sadique in Islam means',
  	options:[ 'courageous',
			  'patience',
			  'righteous',
			  'truthful'],
  	answer: 3
  },
  {
  	question:'The holy pilgrimage to Makkah by Muslims is known as',
  	options:[ 'Hajj',
		      'Ijma',
			  'Ru’ya',
			  'Salat'],
  	answer: 0
  },
  {
  	question: 'The first Muezzin was',
 	options: ['Ali',
			  'Bilal',
			  'Ibrahim',
			  'Musah'],
		answer: 1
  },
  {
  	question: 'Moses led the Israelites through the wilderness for',
	 options: [ 'forty months',
			    'forty years',
				'fifty months',
				'fifty years'],
		answer: 1
  },
  {
  	question: 'Egya Ahor is fondly remembered by the Fante for',
		options: [ 'commanding the Golden Stool',
				   'his miraculous powers',
				   'his resurrection from death',
				   'saving his people'],
		answer: 3
  },
  {
  	question: 'The parable of Jesus that teaches forgiveness is the',
		options: ['unjust steward',
				  'rich fool',
				  'Good Samaritan',
				  'Prodigal Son'],
		answer: 3
  },
  {
  	question: 'Which of the following celebrations signifies the salvation of all Christians?',
		options: ['Christmas',
				  'Easter',
				  'Palm Sunday',
				  'Pentecost'],
		answer: 1
  },
  {
  	question: 'The food offered the ancestors during the Adae festival is meant to',
		options: ['drive witches away from the society',
				  'bring development to the state',
				  'secure protection for the chief',
				  'unite the living with the dead'],
		answer: 3
  },
  {
  	question: 'It is our responsibility to prevent the spread of cholera by',
		options: ['eating a balance diet',
				  'keeping our surroundings clean',
				  'taking good care of our bodies',
				  'immunizing against the six killer diseases'],
		answer: 1
  },
  {
  	question: 'Both Islamic and Traditional religions accept',
		options: ['polyandry',
				  'polygamy',
				  'the use of incense',
				  'the five daily prayers'],
		answer: 1
  },
  {
  	question: 'The growth of hairs in the armpit is a sign of',
		options: ['motherhood',
			 	  'pregnancy',
				  'puberty',
				  'respect'],
		answer: 2
  },
  {
  	question: 'On what occasion do Muslims perform the Janazah prayer?',
		options: ['After observing fast',
				  'Before a Muslim travels',
				  'During Friday worship',
				  'When a Muslim dies'],
		answer: 3
  },
  {
  	question: 'Which traditional prayer is offered when a vow or a pledge is fulfilled?',
		options: ['Intercessory',
				  'Supplication',
				  'Thanksgiving',
				  'Votive'],
		answer: 3
  },
  {
  	question: 'Which Islamic prayer is observed at sunset?',
		options: ['Isha',
				  'Janazeh',
				  'Maghrib',
				  'Tarawib'],
		answer: 2
  },
  {
  	question: 'The act of going round the Ka’bah seven times during Hajj teaches',
		options: ['bravery',
				  'endurance',
				  'fairness',
				  'tolerance'],
		answer: 1
  },
  {
  	question: 'The Eucharist in Christian worship refers to',
		options: ['prayer of thanksgiving',
				  'preaching of sermon',
				  'payment of tithe',
				  'the Holy Communion'],
		answer: 3
  },
  {
  	question: 'An individual who is respectful and polite is said to be',
		options: ['chaste',
			      'courteous',
				  'kind',
				  'moral'],
		answer: 1
  },
  {
  	question: 'To live a chaste life, one must',
		options: ['attend church regularly',
				  'avoid casual sex',
				  'be obedient to teachers',
				  'work hard to become rich'],
		answer: 1
  },
  {
  	question: 'HIV/AIDS affect the society mostly by the',
  	options: ['acquisition of more drugs',
			  'reduction in workforce',
			  'reduction in death rates',
			  'training of more doctors'],
		answer: 1
  },
  {
  	question: 'Putting one"s interest above that of others results in',
		options: ['conflict',
				  'patriotism',
			      'selflessness',
				  'tolerance'],
		answer: 0
  },
  {
  	question: 'The main teaching of the Ten Commandments is',
		options: ['courtesy',
				  'kindness',
				  'love',
				  'patience'],
		answer: 2
  },
  {
  	question: 'In traditional societies, rules used to control the behaviour of members are known as',
		options: ['ancestral rites',
				  'puberty rites',
				  'taboos',
				  'abominations'],
		answer: 2
  },
  {
  	question: 'Repentance is an act that', 
  	options: ['delivers us from enemies',
			  'drives us away from peers',
			  'purifies our character',
			  'satisfies God’s demands'],
		answer: 2
  },
  {
  	question: 'When a person repents from bad deeds, he or she always receives',
		options: ['forgiveness',
				  'freedom',
				  'promotion',
				  'punishment'],
		answer: 0
  },
  {
  	question: 'Authority is instituted in society to ensure',
		options: ['freedom of speech',
				  'peace and order',
				  'respect for adults',
				  'the right to vote'],
		answer: 1
  },
  {
  	question: 'The best way to live in peace in a community is to',
		options: ['remain neutral',
				  'sit on the fence',
				  'offer special gifts to friends in school',
				  'understand and co-operate with others'],
		answer: 3
  },
  {
  	question: 'Which of the following activities is not a responsibility of a family head?',
		options:['Giving loan to people',
				 'Settling disputes among people',
				 'Ensuring the wellbeing of the people',
				 'Taking custody of family property'],
		answer: 0
  },
  {
  	question: 'A child who refuses to play with bad friends is said to be',
		options: ['faithful',
				  'obedient',
				  'polite',
				  'sincere'],
		answer: 1
  },
  {
  	question: 'Tidying the school compound is the child"s',
 	options: ['commitment',
			  'behaviour',
			  'loyalty',
			  'role'],
		answer: 3
  },
  {
  	question: 'Refusal to follow medical prescription may lead to',
		options: ['disrespect for authority',
				  'failure in life',
				  'reduction in wealth',
				  'substance abuse'],
		answer: 3
  },
  {
  	question: 'Which of the following factors is a benefit of hard work?',
  	options: ['Becoming financially sound',
			  'Becoming popular in town',
			  'Building the body size',
		      'Having time for leisure'],
		answer: 0
  },
  {
  	question: 'A home where members learn their religion through oral sources is known as',
		options: ['Christian',
				  'Islamic',
				  'Traditional',
				  'Jewish'],
		answer: 2
  },
  {
  	question: 'Work done to earn income can be described as',
		options: ['community work',
				  'home work',
				  'occupational activity',
				  'school work'],
		answer: 2
  },
  {
  	question: 'Carrying out assigned duties is necessary because it',
		options: ['attracts hatred from enemies',
				  'leads to fulfilment of promises',
				  'leads to pacification of the gods',
				  'pleases God and human kind'],
		answer: 3
  },
  {
  	question: 'School rules help pupils to',
		options: ['avoid being punished',
				  'compete with one another',
				  'protect properties all the time',
				  'worship God regularly'],
		answer: 0
  },
  {
  	question: 'C.Y.O. as a religious youth group stands for',
  	options: ['Catechist Youth Organization',
			  'Catholic Youngmen Organization',
			  'Christian Youngmen Organization',
			  'Catholic Youth Organization'],
		answer: 3
  },
  {
  	question: 'Religious youth associations foster peace among its members by',
		options: ['being law abiding',
				  'caring for the sick',
			      'causing the arrest of offenders',
				  'worshipping and praying'],
		answer: 0
  } 
]