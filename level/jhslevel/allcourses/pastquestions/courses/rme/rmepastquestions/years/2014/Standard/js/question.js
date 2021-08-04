

//Array of Objects
const quiz = [
  {
  	question:'God created the two great lights in the heavens in order to',
  	options:['show His mercy',
			 'separate night from day',
			 'give life to the earth',
		     'provide heat to the earth'],
  	answer:1
  },
  {	
  	question: 'The Eucharist, in Christian worship, refers to',
	options:[ 'prayer of thanksgiving',
			  'preaching of sermon',
			  'the Holy communion',
			  'payment of tithe'],
	answer: 2
  },
  {
  	question:'The most important Christian festival is the',  	
  	options:[ 'Ascension',
			  'Easter',
			  'Lent',
			  'Pentecost'],
  	answer: 1
  },
  {
  	question:'Sadiq in Islam means',  	
  	options:[ 'courageous',
			  'righteous',
			  'truthful',
			  'patience'],
  	answer: 2
  },
  {
  	question: 'The Gye Nyame symbol of the Akans signifies that God is',		
  	options: ['all-powerful',
			  'all-serving',
			  'all-loving',
			  'all-merciful'],
		answer: 1
  },
  {
  	question:'The twelfth son of Jacob was',
  	options:['Benjamin',
			 'Daniel',
			 'Joseph',
			 'Simon'],
  	answer:0
  },
  {
  	question: 'Moses led the Israelites through the wilderness for',	 
  	options: [ 'forty years',
			   'forty months',
			   'fifty years',
			   'fifty months'],
		answer: 0
  },
  {
  	question: 'God created water bodies to provide humankind with',		
  	options: [ 'air',
			   'plants',
			   'salt',
			   'shelter'],
		answer: 2
  },
  {
  	question: 'The prayer which is said in the early afternoon by Muslims is',		
  	options: ['fajr',
			  'Ishar',
			  'Magrib',
			  'Zuhr'],
		answer: 3
  },
  {
  	question: 'The period of courtship in marriage is meant for',		
  	options: ['the couples to know each other',
			  'the payment of the knocking fee',
		  	  'convincing parents of both parties',
			  'the presentation of gifts to friends.'],
		answer: 0
  },
  {
  	question: 'By creating Adam and Eve, God was establishing the institution of',
		options: ['brotherliness',
			 	  'friendship',
				  'marriage',
				  'Sabbath'],
		answer: 2
  },
  {
  	question: 'Traditional worshippers remember their ancestors by',
		options: ['fasting and praying to them',
				  'offering them food and drinks',
				  'singing of songs and praises',
				  'calling their names always'],
		answer: 1
  },
  {
  	question: ' Prayer enables the Muslim to',
		options: ['punish his / her enemies',
				  'become clean',
				  'go to heaven',
				  'receive gifts'],
		answer: 1
  },
  {
  	question: 'Dirges as a traditional song is sung to',		
  	options: ['praise and hail chiefs',
			  'hoot at people with evil spirits',
			  'recreate and entertain people.',
			  'sympathize with bereaved families.'],
		answer: 3
  },
  {
  	question: 'Creation according to the Bible was by means of',		
  	options: ['command',
			  'instruction',
			  'prayers',
			  'prophecy'],
		answer: 0
  },
  {
  	question: 'It is the responsibility of a Muslim to make a pilgrimage to Makkah at least',
		options: ['three times in a life time',
			  	  'twice in a life time',
			 	  'once in a life time',
				  'five times in a life time.'],
		answer: 2
  },
  {
  	question: 'Exchange of rings in a Christian marriage signifies',		
  	options: ['faithfulness to God',
			  'blessing from God',
			  'faithfulness to one another.',
			  'love for the bride’s family'],
		answer: 2
  },
  {
  	question: 'In Islamic practice, Wudu is the',		
  	options: [' intention to say salat',
			  'preparation made after salat.',
			  'ritual washing before salat',
			  'ritual washing after salat.'],
		answer: 2
  },
  {
  	question: 'Traditional funeral rites are meant to',		
  	options: ['raise money from donations',
		  	  'assist the dead to go to heaven',
			  'avoid future occurrence of such deaths',
			  'pay the last respect to the dead'],
		answer: 3
  },
  {
  	question: 'Which of the following is not an effect of bad environment practice?',		
  	options: ['Afforestation',
			  'Deforestation',
			  'Soil erosion',
			  'Global warming'],
		answer: 0
  },
  {
  	question: 'A punishment that could be given for fighting in the classroom is',
		options: ['flogging',
				  'fine',
				  'imprisonment',
				  'remand'],
		answer: 0
  },
  {
  	question: 'The main teaching of the Ten Commandments is',		
  	options: ['courtesy',
			  'love',
			  'kindness',
			  'patience'],
		answer: 1
  },
  {
  	question: 'A person who is tolerant',		
  	options: ['respects the opinions of others',
			  'looks down upon other people',
			  'likes telling others what to do',
			  'thinks he/ she is better than others.'],
		answer: 0
  },
  {
  	question: 'Which of the following is not an act of sexual immorality?',		
  	options: ['Prostitution',
			  'Rape',
			  'Premarital sex',
			  'Sexual abstinence'],
		answer: 3
  },
  {
  	question: 'The wise saying ‘it is difficult to catch up with someone who has gone ahead of you’ tells us that',
		options: ['we need to be smart',
			 	  'time lost cannot be regained',
				  'all is well with people ahead',
				  'we must run in order to catch up'],
		answer: 1
  },
  {
  	question: 'Repentance is relevant because it',		
  	options: ['separates us from enemies',
			  'brings us back to God',
			  'gives us energy to work',
			  'drives the devil away'],
		answer: 1
  },
  {
  	question: 'Courtesy is a polite and acceptable way of',		
  	options: ['commitment',
			  'behaviour',
			  'obedience',
			  'tolerance'],
		answer: 1
  },
  {
  	question: 'Which of the following does not constitute good manners?',		
  	options: ['Chuckling at prefects',
			  'Stitching torn dresses',
			  'Complying with dress codes',
			  'Running of errands'],
		answer: 0
  },
  {
  	question: 'By respecting other people’s religion, we are',		
  	options: ['showing commitment to God',
			  'showing commitment to those religions.',
			  'practising religious obedience',
			  'showing religious tolerance'],
		answer: 3
  },
  {
  	question: 'Authority is instituted in the society to ensure',		
  	options:['hard work',
			 'loyalty',
			 'peace',
			 'respect'],
		answer: 2
  },
  {
  	question: 'A positive attitude towards work is',		
  	options: ['commitment',
			  'graciousness',
			  'intelligence',
			  'purity'],
		answer: 0
  },
  {
  	question: 'School rules help pupils to',		
  	options: ['avoid being punished',
			  'worship God regularly',
			  'compete with one another',
			  'disobey school authorities.'],
		answer: 0
  },
  {
  	question: 'Carrying out assigned duties is necessary because it',		
  	options: ['pleases God and humankind',
			  'attracts hatred from enemies',
			  'leads to pacification of the gods',
			  'leads to fulfillment of promises'],
		answer: 0
  },
  {
  	question: 'Which of the following does not promote progress in the society?',
		options: ['Communal labour',
			  	  'Conflicts',
				  'Festival',
				  'Reconciliation'],
		answer: 1
  },
  {
  	question: 'The most important requirement for a happy and prosperous life is',		
  	options: ['courage',
			  'hard work',
			  'loyalty',
			  'respect'],
		answer: 1
  },
  {
  	question: 'In planning personal budget, it is necessary to ensure that',		
  	options: ['expenditure is more than income',
			  'income is more than expenditure',
			  'expenditure equals income',
			  'income is less than expenditure'],
		answer: 0
  },
  {
  	question: 'One of the advantages the extended family has over the nuclear family is',
		options: ['persistent quarrelling in the family',
			  	  'over-reliance on a few rich people',
				  'having little privacy for its members',
				  'opportunity to associate with more people.'],
		answer: 3
  },
  {
  	question: 'Leisure is best used to',		
  	options: ['perform house chores',
			  'attend church service',
			  'acquire new skills',
			  'attend extra classes'],
		answer: 2
  },
  {
  	question: 'The presence of a shrine is a characteristic of',		
  	options: ['Christian neighbourhood',
			  'traditional neighbourhood',
			  'Islamic neighbourhood',
			  'religious neighbourhood'],
		answer: 1
  },
  {
  	question: 'The Asafo Youth Movements do not promote',		
  	options: ['unity among its members',
			  'selflessness among its members',
			  'regular attendance at church service.',
			  'the spirit of law abiding among its members.'],
		answer: 2
  } 
]