

//Array of Objects
const quiz = [
  {
  	question:'The Gye Nyame symbol of the Akan signifies that God is',
  	options:['all-loving.',
			 'all-merciful.',
			 'all-powerful.',
			 'all-seeing.'],
  	answer: 2
  },
  {	
  	question: 'God’s covenant with the patriarchs is associated with',
	options:[ 'Abraham.',
			  'Joshua.',
			  'Joseph.',
			  'Moses.'],
	answer: 0
  },
  {
  	question:'According the Christian teaching, God created man and woman on the',
  	options:['first day.',
			 'second day.',
			 'fifth day.',
			 'sixth day.'],
  	answer: 3
  },
  {
  	question:'The belief that God sees the secret deeds of all and punishes those who do evil implies that He is',
  	options:[ 'omnipotent.',
			  'omnipresent.',
			  'omniscient.',
			  'sovereign.'],
  	answer: 1
  },
  {
  	question:'Christians who are persecuted for the sake of righteousness are blessed because',
  	options:[ 'God will be merciful to them',
			  'God’s kingdom belongs to them.',
			  'they shall be comforted.',
			  'they shall see God.'],
  	answer: 1
  },
  {
  	question: 'Egya Ahor is remembered for sacrificing his life to',
 	options: ['ensure victory at war.',
			  'free his people from slavery.',
			  'save children from being kidnapped.',
			  'ward off an epidemic.'],
		answer: 3
  },
  {
  	question: 'Jacob’s children went to Egypt because',
  	options: [ 'Joseph was a governor in Egypt.',
			   'people were losing their lives.',
			   'there was a great famine.',
			   'there was a good pasture there for cattle.'],
		answer: 2
  },
  {
  	question: 'A crab cannot give birth to a bird. This expression teaches that',
		options: [ ' a bird is more powerful than a crab.',
				   'one could resemble a bird or a crab.',
				   'one shows the character of his or her parents.',
				   'the truth always stands everywhere.'],
		answer: 2
  },
  {
  	question: 'Which of the following people in Ghana celebrate the Odwira festival?',
		options: ['Akwapim.',
				  'Fante.',
				  'Ewe.',
				  'Gonja.'],
		answer: 0
  },
  {
  	question: 'The festival celebrated by the people of Winneba is',
		options: ['Aboakyir.',
				  'Damba.',
				  'Homowo.',
				  'Ogun.'],
		answer: 0
  },
  {
  	question: 'Puberty rites should be encouraged because it',
		options: ['helps the youth to become rich.',
				  'links the youth to adulthood.',
				  'makes the youth look more attractive.',
				  'promotes chastity among the youth.'],
		answer: 3
  },
  {
  	question: 'Which of the following statements is not true about puberty rites? They',
		options: ['teach girls to be obedient.',
				  'prevent teenage pregnancy.',
				  'teach girls how to live together.',
				  'protect girls against evil forces.'],
		answer: 3
  },
  {
  	question: 'The period of courtship in marriage is meant for',
		options: ['convincing parents of both parties.',
				  'presentation of gifts to friends.',
				  'the couple to study each other.',
				  'the payment of the knocking fee.'],
		answer: 2
  },
  {
  	question: 'The exchange of rings in Christian marriage signifies',
		options: ['blessing from God.',
				  'faithfulness to God.',
				  'faithfulness to one another.',
				  'love for the family.'],
		answer: 2
  },
  {
  	question: 'The first Muezzin in Islam was',
		options: ['Abu Talib.',
				  'Bilal.',
				  'Salman.',
				  'Zayd.'],
		answer: 1
  },
  {
  	question: 'The first pillar in Islam is the belief in',
		options: ['angels.',
			      'oneness of God.',
			      'prophets.',
				  'revealed books.'],
		answer: 1
  },
  {
  	question: 'Praying regularly is important because it is a',
		options: ['moral responsibility.',
				  'political responsibility.',
				  'social responsibility.',
				  'spiritual responsibility.'],
		answer: 3
  },
  {
  	question: 'Looking simple and decent is a sign of',
		options: ['comportment.',
				  'faithfulness.',
				  'tolerance.',
				  'repentance.'],
		answer: 0
  },
  {
  	question: 'Which of the following factors is not a reason why we greet?',
		options: ['Disloyalty',
				  'Friendship',
				  'Humility',
				  'Politeness'],
		answer: 0
  },
  {
  	question: 'Which of the following actions does not constitute good manners?',
		options: ['Chuckling at prefects',
				  'Complying with dress codes',
				  'Running of errands',
				  'Stitching torn clothes'],
		answer: 0
  },
  {
  	question: 'To live a chaste life, one must',
		options: ['avoid sexual intimacy.',
				  'participate in communal labour.',
				  'perform his or her responsibilities.',
				  'respect and obey school rules.'],
		answer: 0
  },
  {
  	question: 'Submission to the will of Allah in Islam brings',
 	options: ['life and comfort.',
			  'peace and purity.',
			  'unity and love.',
			  'wealth and joy.'],
		answer: 1
  },
  {
  	question: 'Behaviour patterns of individuals approved by society are known as',
		options: ['moral values.',
				  'ritual values.',
				  'sacraments.',
			      'taboos.'],
		answer: 0
  },
  {
  	question: 'By respecting other people’s religion, we are',
		options: ['practising religious obedience.',
				  'showing commitment to God.',
				  'showing commitment to those religions.',
				  'showing religious tolerance.'],
		answer: 3
  },
  {
  	question: 'Good deeds are rewarded to',
		options: ['encourage people.',
				  'make people courteous.',
				  'instil kindness in people.',
				  'promote peaceful co-existence.'],
		answer: 0
  },
  {
  	question: 'Repentance begins with',
 	options: ['acceptance of one’s guilt.',
			  'regret for doing wrong.',
			  'request for forgiveness.',
			  'vowing to do good.'],
		answer: 0
  },
  {
  	question: 'The first thing to do when you enter a house is to',
		options: ['ask for a seat.',
			      'ask for water.',
				  'offer greetings.',
			      'remove your sandals.'],
		answer: 2
  },
  {
  	question: 'A citizen who indulges in social vices in the community is said to be',
		options: ['a deviant.',
				  'unfriendly.',
			  	  'untruthful.',
				  'a conformist.'],
		answer: 0
  },
  {
  	question: 'One advantage the extended family has over the nuclear family is',
		options: ['having little privacy for its members.',
				  'opportunity to associate with more people.',
				  'over-reliance on a few rich people.',
				  'persistent quarrelling in the family.'],
		answer: 1
  },
  {
  	question: 'The maintenance of law and order in the nuclear family is the responsibility of the',
		options:['aunts.',
				 'parents.',
			     'grandparents.',
				 'children'],
		answer: 1
  },
  {
  	question: 'An attitude which must not be encouraged at the work place is',
		options: ['diligence.',
				  'loyalty.',
				  'grumbling.',
				  'tolerance.'],
		answer: 2
  },
  {
  	question: 'To earn a living, one needs to be',
  	options: ['healthy.',
			  'hardworking.',
			  'prayerful.',
			  'responsible.'],
		answer: 1
  },
  {
  	question: 'Jesus Christ taught his disciples that, ‘Blessed are the peace makers, for they shall …"',
		options: ['be comforted.',
				  'be called sons of God.',
			 	  'see God.',
				  'inherit the kingdom of God.'],
		answer: 1
  },
  {
  	question: 'The ummah is the Islamic',
  	options: ['community.',
			  'congregation.',
			  'diviner.',
			  'scholar.'],
		answer: 0
  },
  {
  	question: 'Which of the following activities best offers relaxation?',
		options: ['Eating',
				  'Painting',
			      'Running',
				  'Reading'],
		answer: 3
  },
  {
  	question: 'Saving money helps the individual to',
		options: ['become rich overnight.',
				  'attend school regularly.',
				  'make more friends.',
				  'plan for the future.'],
		answer: 3
  },
  {
  	question: 'The most important requirement for a happy and responsible life is',
		options: ['courage.',
				  'hardwork.',
				  'loyalty.',
				  'respect.'],
		answer: 1
  },
  {
  	question: 'A positive attitude towards work is',
		options: ['commitment.',
				  'graciousness.',
				  'intelligence.',
				  'purity.'],
		answer: 0
  },
  {
  	question: 'In planning personal budget, it is necessary to ensure that',
  	options: ['expenditure is equal to income.',
			  'expenditure is more than income.',
			  'income is less than expenditure.',
			  'income is more than expenditure.'],
		answer: 3
  },
  {
  	question: 'Dumping of refuse at residential areas is dangerous because it may',
		options: ['cause damage to houses.',
				  'lead to disease outbreak.',
				  'reduce plant species.',
				  'result in soil erosion.'],
		answer: 1
  } 
]