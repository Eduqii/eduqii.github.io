

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Ntim’s careless driving resulted …………… a fatal road accident.',
  	options:['in',
			 'to',
			 'into',
			 'with'],
  	answer: 0
  },
  {	
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Abibatu takes ………….. her mother in many ways.',
	options:[ ' by',
			  'on',
			  'up',
			  'after'],
	answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Araba goes to school ………….. foot.',
  	options:['by',
			 'in',
			 'on',
			 'with'],
  	answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The doctor advised the patient to abstain …………. smoking',  	
  	options:[ 'by',
			  'from',
			  'upon',
			  'with'],
  	answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The relationship …………. group A and group B is cordial.',
  	options:[ 'of',
			  'with',
			  'among',
			  'between'],
  	answer:3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Edwin prefers fish ……………meat.',		
  	options: ['to',
			  'for',
			  'from',
			  'than'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'His neighbor complained that the radio was ………..loud.',
	 options: [ 'far',
			    'too',
				'much',
				'enough'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The white horse is ………..than the black one.',
		options: [ 'the faster',
				   'very faster',
				   'much the faster',
				   'very much faster'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'I …………him; then I changed my mind.',		
  	options: ['had told',
			  'have told',
			  'am telling',
			  'was going to tell'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'By the end of the day, I ………….the house.',		
  	options: ['shall paint',
			  'shall be painting',
			  'shall have painted',
			  'shall have been painting'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'You are a member of the society, …………..?',		
  	options: ['isn’t it',
			  'are you',
			  'aren’t you',
			  'weren’t you'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Our captain is not a very reliable person, …………….?',
		options: ['is he',
				  'isn’t he',
				  'does he',
				  'doesn’t he'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'You have been to Lagos, ………………?',		
  	options: ['did you',
			  'have you',
			  'didn’t you',
			  'haven’t you'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'Joseph is the …………in the class.',		
  	options: ['cleverer',
			  'cleverest',
			  'more clever',
			  'very clever'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The triplets love ……………very much',		
  	options: [' each other',
			  'themselves',
			  'theirselves',
			  'one another'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + ' …………….the watch is old, it is still working.',		
  	options: [
		 'Since',
		 'Besides',
		 'Although',
		 'However'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence.' + '</b>' + '<br />' + '<br />' + 'The students set …………..early on their journey.',
		options: ['up',
				  'in',
				  'out',
				  'about'],
		answer: 2
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'If you are a true friend you will not ' + '<u>' + 'disclose' + '</u>' + ' a secret.',
		options: ['give',
				  'show',
				  'display',
				  'reveal'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'As John waited for the interview, he was very ' + '<u>' + 'nervous.' + '</u>',
		options: ['sad',
				  'afraid',
				  'alarmed',
				  'uneasy'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'Patricia was ' + '<u>' + 'satisfied' + '</u>' + ' with the results of the examination.',
		options: ['pleased',
				  'convinced',
				  'pampered',
				  'encouraged'],
		answer: 0
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'The attitude of the gateman was very ' + '<u>' + 'hostile.' + '</u>',		
  	options: ['harsh',
			  'strange',
			  'abusive',
			  'unfriendly'],
		answer: 3
  },
  {
  	question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + 'It was not his ' + '<u>' + 'intention' + '</u>' + ' to hurt his younger brother.',		
  	options: ['aim',
			  'decision',
			  'interest',
			  'ambition'],
		answer: 0
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Ibrahim registered for the course ' + '<u>' + 'at the eleventh hour.' + '</u>' + '<br />' + 'This means that Ibrahim registered',
		options: ['at eleven o’clock',
				  'a few hours before closing time',
				  'during eleven hours of registration',
				  'when it was almost too late'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Bob lives ' + '<u>' + 'within a stone’s throw' + '</u>' + ' of the Jubilee Park.' + '<br />' + 'This means that Bob',		
  	options: [' travels on a stony road',
			  'lives in a hut in the park',
			  'lives very close to the park',
			  'often throws stone at the park'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' When James heard the sound of gun-shots, ' + '<u>' + 'his hair stood on end.' + '</u>' + '<br />' + 'This means that James',		
  	options: ['was worried',
			  'started crying',
			  'was frightened',
			  'became inactive'],
		answer: 2
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'Mary has gone to ' + '<u>' + 'cheer up' + '</u>' + ' her friend' +'<br />' + 'This means that Mary has gone to',		
  	options: ['shout at her',
			  'give her gifts',
			  'tell her stories',
			  'make her happy'],
		answer: 3
  },
  {
  	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + 'The teacher’s abrupt question threw the pupil ' + '<u>' + 'off balance.' + '</u>' + '<br /> ' + 'This means that the pupil was',		
  	options: ['hurt',
			  'annoyed',
			  'worried',
			  'confused.'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'While the ' + '<u>' + 'majority' + '</u>' + ' voted for a change, the …………were against any change.',
		options: ['rivals',
				  'members',
				  'minority',
				  'opposition'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Imported rice is ' + '<u>' + 'expensive' + '</u>' + ' these days.',		
  	options: ['free',
			  'cheap',
			  'tasty',
			  'scarce'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'The student was condemned for his poor work.',		
  	options:['cheered',
			 'praised',
			 'rewarded',
			 'recommended'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Although he had applied for a ' + '<u>' + 'permanent' + '</u>' + ' post, he was only given a ………one.',
		options: ['useful',
				  'boring',
				  'labouring',
				  'temporary'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + 'Some people pay much attention to their ' + '<u>' + 'physical' + '</u>' + ' needs.',		
  	options: ['basic',
			  'moral',
			  'financial',
			  'spiritual'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'A comedy is a play that',
		options: ['ends sadly',
				  'ends happily',
				  'condemns society',
				  'preaches honesty'],
		answer: 1
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'The main female character in a play is the …………..',		
  	options: ['hero',
			  'chorus',
			  'heroine',
			  'persona'],
		answer: 2
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'Expressions that appeal to the senses are collectively called ………..',		
  	options: ['irony',
			  'devices',
			  'pictures',
			  'imagery'],
		answer: 3
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'The purpose of a comic relief is to ……………',		
  	options: ['reduce tension',
			  'teach a moral lesson',
			  'set a moral standard',
			  'compound a character’s problems'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'A play is better enjoyed when ………..',		
  	options: ['acted',
			  'read',
			  'discussed',
			  'memorised'],
		answer: 0
  },
  {
  	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>'+ '<br />' + '<br />' +  'A narrative poem usually ……………',		
  	options: ['praises actions',
			  'tells a story',
			  'mourns the dead',
			  'condemns actions'],
		answer: 1
  },
  {
  	question: '<b>' + 'Read the following extract below and answer this Question' + '</b>' + '<br />' + '<br />' + 'So fair art thou my bonnie lass' + '<br />' +
'So deep in luve am I' + '<br />' + 
'And I will luve thee still my dear' + '<br />' +
'Till all the sea gang dry' + '<br />' + '<br />' + 'The last line is a/an ………..',
		options: ['litotes',
				  'hyperbole',
				  'euphemism',
				  'understatement'],
		answer: 1
  },
  {
  	question: '<b>' + 'Read the following extract below and answer this Question' + '</b>' + '<br />' + '<br />' + 'So fair art thou my bonnie lass' + '<br />' +
'So deep in luve am I' + '<br />' + 
'And I will luve thee still my dear' + '<br />' +
'Till all the sea gang dry' + '<br />' + '<br />' + 'The rhyme scheme of the stanza is ………….',		
  	options: ['abcd',
			  'abca',
			  'abcb',
			  'abba'],
		answer: 2
  } 
]