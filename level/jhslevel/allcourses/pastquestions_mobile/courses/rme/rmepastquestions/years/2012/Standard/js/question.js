

//Array of Objects
const quiz = [
  {
  	question:'The biblical commandment which has a promise of blessing is',  	
  	options:['remember the Sabbath day',
			 'honour your father and mother',
		   	 'not to commit adultery',
			 'not to make for yourself graven images'],
  	answer: 1
  },
  {	
  	question: 'In Christianity, the sky, seas, animals and other living things came into being through',
	options:[ 'the laws of God',
			  'God’s command',
			  'natural order',
			  'the lesser gods'],
	answer: 1
  },
  {
  	question:'Ablution is done before prayers in order to',
  	options:['have prayers answered in time',
			 'ensure purity of the body',
			 'get closer to Allah',
			 'win the favour of Allah'],
  	answer: 1
  },
  {
  	question:'The parable of the Good Samaritan teaches us to',
  	options:[ 'forgive others',
			  'be helpful to others',
			  'show gratitude to people',
			  'be time conscious'],
  	answer: 1
  },
  {
  	question:'The traditional man wears talismans in order to',  	
  	options:[ 'give birth to children',
			  'become rich',
			  'seek protection against enemies',
			  'bring peace and love into his family'],
  	answer: 2
  },
  {
  	question: 'According to Akan belief, the order of creation is',
		options: ['earth, rivers, plants and sky',
			  	  'rivers, plants, earth and sky',
				  'sky, earth, rivers and plants',
				  'plants, rivers, sky and earth'],
		answer: 2
  },
  {
  	question: 'A summary of the ten commandments is',	 
  	options: [ 'obedience to parents and the elderly',
			   'love for God and one’s neighbour.',
			   'observing the Sabbath and keeping it holy',
			   'worshipping the Almighty God only'],
		answer: 1
  },
  {
  	question: 'The Holy Communion reminds Christians of Jesus?',
		options: [ 'birth',
			 	   'crucifixion',
				   'last supper',
				   'resurrection'],
		answer: 1
  },
  {
  	question: 'Ramadan is the',		
  	options: ['feast of sacrifice',
			  'month of fasting',
			  'feast of breaking fast',
			  'month of Hijra'],
		answer: 1
  },
  {
  	question: 'The main reason for celebrating the Homowo Festival is to',		
  	options: ['outdoor twins',
			  'hoot at hunger',
			  'visit the shrines',
			  'sprinkle spiritual food'],
		answer: 1
  },
  {
  	question: 'The patriarchal covenant was made between God and',		
  	options: ['Abraham',
			  'Aaron',
			  'Moses',
			  'Noah'],
		answer: 0
  },
  {
  	question: 'The main lesson that can be learnt from the story of Noah and the flood is',
		options: ['tolerance',
				  'truthfulness',
				  'sincerity',
				  'obedience'],
		answer: 3
  },
  {
  	question: 'Some tribes forbid marriages with close relatives because',		
  	options: ['the couple may die early',
			  'it leads to bareness',
			  'it is seen as incest',
			  'it leads to quarrels'],
		answer: 2
  },
  {
  	question: 'Jesus accepted to be baptized by John in order to',
		options: ['make the Jews happy',
			  	  'show His faith in John’s power',
				  'fulfil all righteousness',
			  	  'confirm His sonship of God'],
		answer: 2
  },
  {
  	question: 'Which Christian virtue did Joseph exhibit in his life?',		
  	options: ['Humility',
			  'Forgiveness',
			  'Repentance',
			  'Tolerance'],
		answer: 1
  },
  {
  	question: 'In a prayer of confession, Christians',		
  	options: ['adore God who created them',
			  'say sorry to God for their sins',
			  'ask for help in times of trouble',
			  'give thanks for all the gifts they received'],
		answer: 1
  },
  {
  	question: 'A Muslim is a person who',		
  	options: ['comes from Arabia',
			  'visits Mecca annually',
			  'submits to the will of Allah',
			  'recites the Qur’an'],
		answer: 2
  },
  {
  	question: 'The festival celebrated by Christians to mark the resurrection of Jesus is known as',
		options: ['Christmas',
				  'Easter',
				  'Pentecost',
				  'Passover'],
		answer: 1
  },
  {
  	question: 'The combination of the Fajr and Asr prayers makes',		
  	options: ['two rakats',
			  'five rakats',
			  'six rakats',
			  'eight rakats'],
		answer: 2
  },
  {
  	question: 'One way by which humankind pollutes the air in the city is by',
		options: ['the use of insecticides',
				  'the use of detergents',
				  'smoke from motor vehicles',
				  'smoke from the burning of wood'],
		answer: 2
  },
  {
  	question: 'A citizen who indulges in social vices in the community is said to be',
		options: ['unfriendly',
				  'unreliable',
				  'untruthful',
				  'unpatriotic'],
		answer: 3
  },
  {
  	question: 'Greetings are important because they',		
  	options: ['open up conversation',
			  'portray one’s intelligence',
			  'expose disrespectful behaviour',
			  'show a good leader'],
		answer: 0
  },
  {
  	question: 'Asking for forgiveness is an indication that a bad deed will be',
		options: [' exposed',
				  'forgotten',
				  'pardoned',
				  'repeated'],
		answer: 2
  },
  {
  	question: 'Children who are obedient and live good moral lives are',
		options: ['praised in the society',
				  'envied by others',
				  'sent to challenge the elderly',
				  'known to be smart in school'],
		answer: 0
  },
  {
  	question: 'People avoid dangerous substances in order to',		
  	options: ['develop their potentials',
			  'stay healthy',
			  'study hard',
			  'be respected by society'],
		answer: 1
  },
  {
  	question: 'Which of the following is a form of physical punishment',		
  	options: ['Scolding',
			  'Reprimand',
			  'Fine',
			  'Caning'],
		answer: 3
  },
  {
  	question: 'To show that a person is patient, he/ she must',		
  	options: ['worship at appointed times',
			  'preach to people often',
			  'visit the sick regularly',
			  'wait for the right time'],
		answer: 3
  },
  {
  	question: 'A defensive mechanism that can help protect students against drug abuse is',
		options: ['to control one’s temper',
				  'living a chaste life',
				  'refusing and saying no to drugs',
				  'reporting drug peddlers to the police'],
		answer: 2
  },
  {
  	question: 'Which of the following behaviours can best be described as comportment?',
		options: ['Respect for one’s parents',
				  'Love for one’s enemy',
				  'Respect for oneself',
				  'Control of one’s temper'],
		answer: 2
  },
  {
  	question: 'Removing one’s hat when greeting an elder constitutes',
		options:['good manners',
				 'comportment',
				 'tolerance',
				 'fear of God'],
		answer: 2
  },
  {
  	question: 'The saying, Time is money means',
		options: ['time fetches money',
			  	  'more time spent on work brings profit',
				  'money is not gained without spending time',
				  'good use of time brings profit'],
		answer: 3
  },
  {
  	question: 'The main aim of the Girls’ Brigade is to',		
  	options: ['assist girls to attend school',
	  	 'encourage girls to work hard',
		 'help establish more girls’ schools',
		 'produce good Christian womanhood'],
		answer: 3
  },
  {
  	question: 'The best way to live in peace in a community is to',		
  	options: ['sit on the fence always',
			  'be afraid of those in authority',
			  'keep to oneself always',
			  'understand and co-operate with others'],
		answer: 3
  },
  {
  	question: 'Rules and regulations of the country need to be obeyed in order to',
		options: ['promote the formation of political parties',
				  'promote peaceful co-existence',
				  'stop rivalry among political parties',
				  'save people from imprisonment'],
		answer: 1
  },
  {
  	question: 'In a traditional society, the provision of shelter is the responsibility of the',
		options: ['father',
				  'grandfather',
				  'mother',
				  'uncle'],
		answer: 0
  },
  {
  	question: 'Carrying out instructions given by the elderly shows that one is',
		options: ['obedient',
				  'sincere',
				  'strong',
				  'truthful'],
		answer: 0
  },
  {
  	question: 'Social conflicts can best be resolved by',		
  	options: ['Obeying the scriptures',
			  'being principled and humble',
			  'being authoritative and principled',
			  'tolerating and forgiving'],
		answer: 3
  },
  {
  	question: ' Using one’s position to amass wealth at the expense of the public is',
		options: ['bribery',
				  'corruption',
				  'greed',
				  'unfaithfulness'],
		answer: 1
  },
  {
  	question: 'Humankind works in order to',		
  	options: ['go to heaven',
			  'be loved by everyone',
			  'win souls for Christ',
			  'cater for one’s basic needs'],
		answer: 3
  },
  {
  	question: 'In order to live in harmony with family members, we must be',
		options: ['brave',
				  'courageous',
				  'faithful',
				  'respectful'],
		answer: 3
  } 
]