

//Array of Objects
const quiz = [
  {
  	question:'The belief that God sees the secret deeds of all and punishes those who do evil implies that He is',
  	options:['Omniscient',
			 'Omnipotent',
			 'Omnipresent',
			 'Sovereign'],
  	answer: 2
  },
  {	
  	question: 'The outpouring of the Holy Spirit on Christians is marked by the',
	options:[ 'Ascension',
			  'Resurrection',
			  'Pentecost',
			  'Passover'],
	answer: 2
  },
  {
  	question:'The congregational prayers observed by Muslims on Friday is',
  	options:['Eid',
			 'Jumuah',
			 'Janazah',
			 'Zuhr'],
  	answer: 1
  },
  {
  	question:'Adam described Eve as woman because she',  	
  	options:[ 'was the mother of all living',
			  'was made out of his rib',
			  'allowed the serpent to deceive her',
			  'was made a helper fit for man'],
  	answer: 1
  },
  {
  	question:'Islam shows a concern for the poor and needy by practicing',  	
  	options:[ 'Zawn',
			  'Zakat',
			  'Salat',
			  'Kalimat'],
  	answer: 1
  },
  {
  	question: 'Marriages have a good chance to succeed if the',		
  	options: ['man has much money to cater for the wife',
			  'woman is very beautiful',
			  'couple understands each other',
			  'couple is from the same town'],
		answer: 2
  },
  {
  	question: '“Blessed are the peacemakers for they shall',	 
  	options: [ 'see God”',
			   'be called sons of God”',
			   'inherit the earth”',
			   'obtain mercy”'],
		answer: 1
  },
  {
  	question: 'The name Moses means',		
  	options: [ 'washed in water',
			   'drawn out of water',
			   'abandoned in water',
			   'baptized with water'],
		answer: 1
  },
  {
  	question: 'The Hogbetsotso festival is celebrated to mark the',		
  	options: ['death of King Agokorli',
			  'end of the farming season',
			  'migration of the Anlo',
			  'end of famine among the Anlo'],
		answer: 2
  },
  {
  	question: 'The Fajr Salat is observed at',		
  	options: ['dawn',
			  'noon',
			  'night',
			  'sunset'],
		answer: 0
  },
  {
  	question: 'Christians share a common belief that',		
  	options: ['the Holy Spirit works with fire',
			  'trust in Jesus Christ brings eternal life',
			  'one should pray to God directly',
			  'one who suffers in life will go to heaven'],
		answer: 1
  },
  {
  	question: 'The parable of the prodigal son teaches that one',
		options: ['needs repentance for forgiveness',
				  'needs to be watchful and loving',
				  'must be faithful and prayerful',
				  'must be committed and hardworking'],
		answer: 0
  },
  {
  	question: 'An important religious value of traditional festivals is to',		
  	options: ['acknowledge the presence of the ancestors',
			  'settle disputes among families',
			  'contract marriages',
			  'bring citizens together to sacrifice'],
		answer: 0
  },
  {
  	question: ' The dream of Joseph about the sun, moon and eleven stars meant that he would',
		options: ['be sold into slavery by his brothers',
				  'be hated by his brothers',
				  'rule over his family',
				  'become a seer one day'],
		answer: 2
  },
  {
  	question: 'The rainbow is important in the story of Noah because, it',		
  	options: ['normally appears after rainfall',
			  'is a symbol of God’s covenant',
		 	  'appears in the horizon in colours',
			  'marked the beginning of the flood'],
		answer: 1
  },
  {
  	question: 'One of the ways of protecting God’s creation is by',		
  	options: ['constructing buildings and roads',
			  'polluting air and water bodies',
			  'engaging in sound farming practices',
			  'killing snakes and other dangerous animals'],
		answer: 2
  },
  {
  	question: 'The Islamic institution for reducing poverty is',		
  	options: ['Zakat',
			  'Salat',
			  'Sawn',
			  'Hajj'],
		answer: 0
  },
  {
  	question: 'The following practices apply to Traditional Religion except',		
  	options: ['libation',
			  'fasting',
			  'prayers',
			  'sacrifices'],
		answer: 1
  },
  {
  	question: 'Which of the following disciples of Jesus were brothers?',		
  	options: ['John and James',
			  'Joseph and John',
			  'Peter and Andrew',
			  'Judas and Thomas'],
		answer: 0
  },
  {
  	question: 'The use of sand in the absence of water by a Muslim for purification is',		
  	options: ['Taharah',
			  'Tashahhud',
			  'Tayammum',
			  'Takbir'],
		answer: 2
  },
  {
  	question: 'A major reason for establishing a traditional youth organization is to',		
  	options: ['defend the interest of the community',
			  'protect ancestors and the gods',
			  'embark on educational tours',
			  'fight those who destroy the environment'],
		answer: 0
  },
  {
  	question: 'Behaviour patterns of individuals approved by society are known as',		
  	options: ['rituals',
			  'moral values',
			  'taboos',
			  'sacrament'],
		answer: 1
  },
  {
  	question: ' School rules are meant to ensure',		
  	options: ['punishment for school children',
			  'patriotism among children',
			  'competition among children',
			  'good behaviour of children'],
		answer: 3
  },
  {
  	question: 'A person who is sincere and upright in his/her ways is said to be',		
  	options: ['generous',
			  'tolerant',
			  'honest',
			  'grateful'],
		answer: 2
  },
  {
  	question: 'Which of the following is responsible for morality in traditional society?',		
  	options: ['Linguist',
			  'Gong gong beater',
			  'Chief priest',
			  'Fortune teller'],
		answer: 2
  },
  {
  	question: 'A father shows commitment to the family by',		
  	options: ['being punctual at work and helping others',
			  'travelling with wife outside the country',
			  'being steadfast at prayer and sacrificing',
			  'treating all dependants with patience and tolerance'],
		answer: 3
  },
  {
  	question: 'Which of the following is an effect of drug abuse?',		
  	options: ['Obedience',
			  'Truancy',
			  'Politeness',
			  'Truthfulness'],
		answer: 1
  },
  {
  	question: 'The best way to live in peace in a community is to',		
  	options: ['disagree with your enemies',
			  'sit on the fence',
			  'understand and co-operate with others',
			  'enter into conflict with your neighbours'],
		answer: 2
  },
  {
  	question: 'It is a bad habit to use one’s leisure time in',		
  	options: ['playing games',
			  'telling stories',
			  'reading story books',
			  'gossiping about friends'],
		answer: 3
  },
  {
  	question: 'It is our responsibility to prevent the spread of cholera by',
		options:['immunizing against the six killer diseases',
				 'eating a balanced diet',
				 'keeping our surroundings clean',
				 'taking good care of our wounds'],
		answer: 2
  },
  {
  	question: 'A child who apologizes for committing an offence is said to be',
		options: ['knowledgeable',
				  'intelligent',
				  'law abiding',
				  'obedient'],
		answer: 1
  },
  {
  	question: '“A child breaks the shell of a snail but not that of the tortoise” This implies that one should',
		options: ['work hard',
				  'be afraid of tortoise',
				  'not be over ambitious',
				  'be kind to animals'],
		answer: 2
  },
  {
  	question: 'A person is regarded as tolerant when the person is',
		options: ['hardworking',
				  'brilliant',
				  'truthful',
				  'patient'],
		answer: 3
  },
  {
  	question: 'To live a chaste life, one must',		
  	options: ['speak the truth',
			  'be humble',
			  'avoid casual sex',
			  'be courageous'],
		answer: 2
  },
  {
  	question: 'Which of the following is a symptom of Acquired Immune Deficiency Syndrome (AIDS)?',
		options: ['Strong pains in the abdomen',
				  'Rapid loss of weight',
				  'Sleeping very often',
				  'Suffering from the waist'],
		answer: 1
  },
  {
  	question: 'Repeating a bad deed shows that one',		
  	options: ['has realized and accepted a fault',
			  'is determined to ask for pardon',
			  'wants another opportunity to make amends',
			  'has not regretted'],
		answer: 3
  },
  {
  	question: 'Giving money to a person to influence a decision is',		
  	options: ['corruption',
			  'cheating',
			  'bribery',
			  'embezzlement'],
		answer: 2
  },
  {
  	question: 'All the following are teachers’ responsibilities towards their pupils except',
		options: ['ensuring discipline',
				  'making themselves approachable',
				  'inviting parents of troublesome children',
				  'feeding hungry pupils at school'],
		answer: 3
  },
  {
  	question: 'A happy and prosperous life depends on',		
  	options: ['obedience',
			  'hard work',
			  'respect',
			  'courage'],
		answer: 1
  },
  {
  	question: 'The first thing to do when you enter a house is to',		
  	options: ['offer greetings',
			  'ask for water',
			  'ask for a seat',
			  'remove your sandals'],
		answer: 0
  } 
]