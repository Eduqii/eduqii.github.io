

//Array of Objects
const quiz = [
  {
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' He is _____poor that he cannot pay his bills.',
options: ['so',
 'too',
 'very',
 'rather'],
answer: 0
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' You will be late _____you hurry.',

options: ['if',

 'or',

 'unless',

 'while'],
answer: 2
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Aminu has been absent from class _____ one month.',

options: ['in',

 'for',

 'from',

 'since'],
answer: 1
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Many people have been invited, but _____ will be employed.', 

options: ['few',

 'a few',

 'little',

 'a little'],
answer: 0
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' The teacher told the girl he had received _____of the two exercises.',

options: ['all',

 'any',

 'none',

 'neither'],
answer: 3
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' My father has bought a _______car',

options: ['private brand new',

 'new brand private',

 'private new brand',

 'brand new private'],
answer: 3
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Mama is never ______ ready for anything.',

options: ['so',

 'ever',

 'even',

 'rather'],
answer: 1
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Akua was _____that she won four prizes.',

options: ['a girl so brilliant',

 'a so brilliant girl',

 'so brilliant a girl',

 'a brilliant so girl'],
answer: 2
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Before he entered the classroom, we _____ the chalkboard.',

options: ['cleaned',

 'have cleaned',

 'had cleaned',

 'are cleaning'],
answer: 2
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' I have forgotten all _____my friend told me.',

options: ['this',

 'that',

 'what',

 'which'],
answer: 1
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' The supervisor will ask the _____to come and repair the pipe in the bath room.',

options: ['mason',

 'repairer',

 'plumber',

 'lumber'],
answer: 2 
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' The stone fell into the river with a loud ______',

options: ['bang',

 'crash',

 'noise',

 'splash'],
answer: 3
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Aggie got _____mark for French in the examination.',

options: ['bad',

 'worse',

 'the worse',

 'the worst'],
answer: 3
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' We won the school debating contest, _____ we?',

options: ['hadn\'t',

 'didn\'t',

 'couldn\'t',

 'did'],
answer: 1
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Kwame looks very handsome, _____?',

options: ['isn\'t he',

 'isn\'t it',

 'doesn\'t he',

 'does he'],
answer: 2
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' Nana Yaa was suffering ____ measles.',

options: ['by',

 'with',

 'from',

 'through'],
answer: 2
},
{
question: '<b>' + 'From the alternatives lettered A to D, choose the one which most suitably completes each sentence. ' + '</b>' + '<br />' + '<br />' + ' The suspect was charged _____ pickpocketing.',

options: ['of',

 'for',

 'on',

 'with'],
answer: 3
},
{
question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + ' One ' + '<u>' + 'essential' + '</u>' + ' item for making local soap is soda ash.',

options: ['correct',

 'main',

 'real',

 'important'],
answer: 3
},
{
question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' +' Pupils are to read the ' + '<u>' + 'instructions' + '</u>' + ' carefully.',

options: ['notices',

 'demands',

 'commands',

 'directives'],
answer: 3
},
{
question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + ' The dog saw its ' + '<u>' + 'image' + '</u>' + ' in the water.',

options: ['nature',

 'condition',

 'reflection',

 'attraction'],
answer: 2
},
{
question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + ' We shall have the final ' + '<u>' + 'rehearsal' + '</u>' + ' for the play tonight',

options: ['meeting',

 'practice',

 'trial',

 'preparation'],
answer: 1
},
{
question: '<b>' + 'Choose from the alternatives lettered A to D the one which is nearest in meaning to the underlined word in each sentence.' + '</b>' + '<br />' + '<br />' + ' My mother is skilled in ' + '<u>' + 'domestic' + '</u>' + ' affairs',

options: ['local',

 'internal',

 'everyday',

 'household'],
answer: 3
},
{
	question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' Akweley was ' + '<u>' + 'taken aback' + '</u>' + ' on seeing a stranger in her room.\n This means Akweley was very',

options: ['angry',

 'afraid',

 'confused',

 'surprised'],
answer: 3
},
{
question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' The employees ' + '<u>' + 'saw eye to eye' + '</u>' + ' with their manager.\n This means that the employees',

options: ['agreed completely with him',

 'were very close to him',

 'rarely saw him',

 'greatly respected him'],
answer: 0
},
{
question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' The priest ' + '<u>' + 'was in high spirits' + '</u>' + ' during the sermon.\n This means that he was',

options: ['content',

 'cheerful',

 'spiritual',

 'annoyed'],
answer: 1
},
{
question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' The opponents decided to ' + '<u>' + 'bury the hatchet.' + '</u>' + '\n This means that they decided to',

options: ['make peace',

 'bury their guns',

 'hold discussions',

 'suspend the fighting'],
answer: 0
},
{
question: '<b>' + 'In each of the following sentences a group of words has been underlined. Choose from the alternatives lettered A to D the one that best explains the underlined group of words.' + '</b>' + '<br />' + '<br />' + ' The headmaster took the students\' version of the theft ' + '<u>' + 'with a pinch of salt.' + '</u>',

options: ['believed the students\' version.',

 'doubted the students\' version.',

 'accepted the students\' version.',

 'ignored the students\' version.'],
answer: 1
},
{
	question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + ' The judge ' + '<u>' + 'acquitted' + '</u>' + ' four of the accused but ______the rest.',

options: ['convicted',

 'discharged',

 'cautioned',

 'rebuked'],
answer: 0
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + ' It pays to be ' + '<u>' + 'courteous' + '</u>' + ' rather than being _____.',

options: ['rude',

 'wicked',

 'disobedient',

 'boastful'],
answer: 0
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + ' Drivers who do not drive with ' + '<u>' + 'care' + '</u>' + ' are sometimes charged with _____.',

options: ['speeding',

 'drunkenness',

 'disobedience',

 'recklessness'],
answer: 3
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + ' King David was the ' + '<u>' + 'heir' + '</u>' + ' to the throne while the brother was the _____ ',

options: ['usurper',

 'successor',

 'claimant',

 'descendant'],
answer: 0
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that is most nearly opposite in meaning to the word underlined in each sentence.' + '</b>' + '<br />' + '<br />' + ' The secretary ' + '<u>' + 'intentionally' + '</u>' + ' hid the documents but the clerk _____burnt them.',

options: ['willingly',

 'hastily',

 'mistakenly',

 'carelessly'],
answer: 2
},
{
	question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + ' A poem of six lines is called a/an _____..',

options: ['octave',

 'opera',

 'sextet',

 'sonnet'],
answer: 2
},
{

question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<i>' + 'Extract:' + '</i>' + '<br />' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '<br />' + '<br />' + ' How would she get home if the worst happened?' + '<br />' + ' The atmosphere is _____ ',

options: ['cheerful',

 'friendly',

 'frightening',

 'undaunting'],
answer: 2
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + '<i>' + 'Extract:' + '</i>' + '<br />' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '<br />' + '<br />' + ' The state of the weather is emphasized by the word _____.',

options: ['angry',

 'cloud',

 'flashed',

 'grey'],
answer: 0
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + '<i>' + 'Extract:' + '</i>' + '<br />' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '<br />' + '<br />' + ' \'Lightning flashed___light from___torch.\' is an example of _____',

options: ['alliteration',

 'ellipsis',

 'parallelism',

 'personification'],
answer: 3
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + '<i>' + 'Extract:' + '</i>' + '<br />' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '<br />' + '<br />' + ' What is being referred to by the question, \'How would she _____ happened?\'',

options: ['Current calm',

 'Imminent rain',

 'Latent sky',

 'Rumbling clouds'],
answer: 1
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + '<i>' + 'Extract:' + '</i>' + '<br />' + 'The sudden change in the weather frightened Araba.' + '<br />' + 
 'The bright orange colour of the sunset sky had' + '<br />' +
'quickly turned dull as the grey clouds gathered,' + '<br />' +
'rumbling, dark and angry.' + '<br />' +
'The booming voice of thunder was intimidating.' + '<br />' +
'Lightning flashed shards of light from his formidable torch.' + '<br />' + 
'Araba was a cornered rat.' + '<br />' + '<br />' + ' The extract is ',

options: ['drama',

 'poetry',

 'prose',

 'story'],
answer: 1
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + ' One special feature of prose is the _____.',

options: ['paragraph',

 'stanza',

 'stage direction',

 'rhyme'],
answer: 0
},
{
question: '<b>' + 'From the list of words lettered A to D, choose the one that correctly answers each question or completes the sentence.' + '</b>' + '<br />' + '<br />' + ' The work of the novelist is in _____.',

options: ['drama',

 'poetry',

 'prose',

 'verse'],
answer: 2
}
]