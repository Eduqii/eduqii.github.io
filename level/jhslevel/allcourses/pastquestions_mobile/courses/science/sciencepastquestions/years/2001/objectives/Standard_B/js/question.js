

//Array of Objects
const quiz = [
  {
	question: 'The main pollutant from domestic fires is',
options: ['carbon monoxide ',
 'sulphur dioxide ',
 'water vapour',
 'oxygen',
 'ammonia'],
answer: 0
},
{
question: 'Plantain is propagated vegetatively by',
options: ['corms',
 'stem cuttings',
 'suckers ',
 'rhizomes ',
 'tubers'],
answer: 2
},
{
question: 'Which of the following gases supports combustion?',
options: ['carbon dioxide',
 'carbon monoxide',
 'hydrogen ',
 'nitrogen ',
 'Oxygen'],
answer: 4
},
{
question: 'The main function of petals in a flower is to',
options: ['protect the ovary',
 'produce seeds ',
 'attract insects ',
 'secrete nectar',
 'produce sweet scent'],
answer: 2
},
{
question: 'The organ in the human body which is responsible for the removal of urea is the',
options: ['heart',
 'kidney',
 'lung',
 'liver',
 'bladder'],
answer: 1
},
{
question: 'The sun and the planets form the',
options: ['atmosphere ',
 'constellation ',
 'milky way',
 'solar system',
 'universe'],
answer: 3
},
{
question: 'The bilharzia worm can enter the human body through the',
options: ['anus',
 'ear',
 'mouth ',
 'nostrils ',
 'skin'],
answer: 4
},
{
question: 'Brass is an alloy of copper and',
options: ['aluminium',
 'carbon',
 'iron ',
 'tin ',
 'zinc'],
answer: 4
},
{
question: 'Which of the following diseases is contracted through infected wounds?',
options: ['Chicken pox',
 'Diphtheria',
 'Mumps',
 'Tetanus',
 'Whooping cough'],
answer: 3
},
{
question: '<b>' + 'Use the figure below to answer this question' + '</b>' + '<br />' + '<br />'+'A rigid bar is balanced horizontally at a point by placing a rock on the bar as shown'+'<br />'+'Which of the parts labeled represents the pivot?',
options: ['P ',
 'Q ',
 'R ',
 'X ',
 'Y'],
answer: 1,
img: 'img/rigidBar.jpg'
},
{
question: '<b>' + 'Use the figure below to answer this question' + '</b>' + '<br />' + '<br />' + 'A rigid bar is balanced horizontally at a point by placing a rock on the bar as shown '+'<br />'+'The effort is represented by',
options: ['P ',
 'Q ',
 'R ',
 'X ',
 'Y'],
answer: 0,
img: 'img/rigidBar.jpg'
},
{
question: 'Which of the following parts of the human body are sense organs?' + '<br />' +
'I. Tongue' + '<br />' +
'II. Hair ' + '<br />' + 
'III. Nose IV. Skin',
options: ['I and IV only',
 'II and III only',
 'I, II and III only ',
 'I, III and IV only ',
 'I, II, III and IV'],
answer: 3
},
{
question: 'The function of the cotyledon is to',
options: ['produce the radicle',
 'store food',
 'protect the seed',
 'produce the plumule',
 'produce the fruit'],
answer: 1
},
{
question: 'Which of the following substances are components of a fertile soil?',
options: ['Nitrogen and phosphorous',
 'Phosphorous and sulphur',
 'Phosphorous, calcium and sulphur',
 'Calcium, sulphur, nitrogen and phosphorous',
 'Nitrogen,calcium and phosphorous'],
answer: 3
},
{
question: ' Which of the following appliances transform(s) electrical energy to heat energy?' + '<br />' +
'I. Swish oven'  + '<br />' + 
'II. Hair dryer' + '<br />' +
'III. Refrigerator motor',
options: ['I only',
 'I and II only ',
 'II and III only ',
 'I and III only ',
 'I,II and III'],
answer: 1
},
{
question: 'A ray of light makes an angle of 20'+'&deg;'+' with the surface of a plane mirror. Determine the angle of reflection.',
options: ['20&deg; ',
 '50&deg; ',
 '70&deg;',
 '90&deg;',
 '120&deg;'],
answer: 2
},
{
question: 'Seasonal changes are the result of the',
options: ['rotation and tilting of the earth',
 'revolution and tilting of the earth ',
 'revolution and rotation of the earth ',
 'revolution and tilting of the moon',
 'revolution and rotation of the moon'],
answer: 1
},
{
question: 'Crystals of sugar were obtained when a hot solution of sugar was cooled to room temperature. What conclusion can be drawn from this observation?',
options: ['Sugar does not dissolve in cold water',
 'Sugar does not dissolve in hot water',
 'Sugar dissolves more in hot water than in cold water',
 'Sugar dissolves less in hot water than in cold water',
 'Sugar dissolves more in cold water than in cold water'],
answer: 2
},
{
question: 'Which of the following processes about all living things is/are true?' + 
' I. Reproduction ' + '<br />' + 
'II. Respiration ' + '<br />' + 
'III. Locomotion' + '<br />' + 
'IV. Excretion',
options: ['I only',
'I and II only',
'III and IV only',
'I, II and III only',
'I, II and IV only'],
answer: 4 
},
{
	question: 'Tendrils in plants are adaptations that enable the plant to ',
	options: ['climb',
	'expire',
	'store food',
	'reproduce',
	'propagate vegetatively'],
	answer: 0
},
{
question: 'The density of a substance is 2.5gcm<sup>3</sup>. Calculate the volume of the substance if its mass is 25.0 g.',
options: ['0.1cm<sup>3</sup>',
 '10.0cm<sup>3</sup>',
 '22.5cm<sup>3</sup>',
 '27.5cm<sup>3</sup>',
 '62.5cm<sup>3</sup>'],
answer: 1
},
{
question: 'The food substance that promotes good health is',
options: ['carbohydrate',
 'fat',
 'protein ',
 'vitamin ',
 'water'],
answer: 3
},
{
question: 'The energy that causes the turbine of hydro-electric plant to rotate is',
options: ['chemical energy ',
 'potential energy ',
 'electric energy ',
 'kinetic energy',
 'heat energy'],
answer: 3
},
{
question: 'Which of the following pairs of organs are parts of the central nervous system?',
options: ['Spinal cord and the eyes',
 'Brain and spinal cord',
 'Brain and the ears ',
 'Eyes and the ears ',
 'Eye sand the brain'],
answer: 1
},
{
question: 'Plants manufacture their food using' + '<br />' +
'I. carbon dioxide' + 
' II. oxygen' + 
' III. light' + 
' IV. chlorophyll',
options: ['I only',
 'II only',
 'I and II only',
 'I,III and IV only',
 'I,II,III and IV'],
answer: 3
},
{
question: 'Which of the following crops improves soil fertility when cultivated continuously on the same piece of land?',
options: ['Carrot',
 'Cocoa ',
 'Cassava ',
 'Maize',
 'Peas'],
answer: 4
},
{
question: 'It is necessary to keep household refuse in covered containers in order to prevent',
options: ['the spread of tuberculosis',
 'the decomposition of the refuse',
 'the spread of measles',
 'entry of flies',
 'entry of bacteria'],
answer: 3
},
{
question: 'The fraction of the earth\u2019s surface that faces the sun at any particular time is',
options: ['<sup>1</sup>&frasl;<sub>4</sub>',
 '<sup>1</sup>&frasl;<sub>3</sub>',
 '<sup>1</sup>&frasl;<sub>2</sub>',
 '<sup>2</sup>&frasl;<sub>3</sub>',
 '<sup>3</sup>&frasl;<sub>4</sub>'],
answer: 2
},
{
question: 'Which of the following is a micro-organism?',
options: ['Bread mould',
 'Bacteria',
 'Leech ',
 'Termite ',
 'Tick'],
answer: 1
},
{
question: 'Which of the following statements about machines is/are correct?' + '<br />' +
'I. Machines help us to do work more easily' + '<br />' + '<br />' + 
'II. A force applied at one point of the machine over comes a load at another point of the machine' + '<br />' + '<br />' +
'III. All machines have engines',
options: ['I only ',
 'II only ',
 'III only',
 'I and II only',
 'II and III only'],
answer: 3
},
{
question: 'The female part of a flower is called the',
options: ['filament',
 'petal',
 'pollen grain',
 'sepal',
 'style'],
answer: 4
},
{
question: 'Which of the following substances is a compound?',
options: ['Hydrogen ',
 'Nitrogen ',
 'Oxygen',
 'Sulphur',
 'Water'],
answer: 4
},
{
question: 'A solution in which no more solute will dissolve at a particular temperature is said to be',
options: ['concentrated',
 'dilute',
 'saturated',
 'insoluble',
 'unsaturated'],
answer: 2
},
{
question: 'The process of respiration could be represented by the following equation: ' + '<br />' +
'Glucose + oxygen \u2192 water + carbon dioxide + X' + '<br />' +
'What does X represent?',
options: ['Alcohol',
 'Hydrogen',
 'Heat',
 'Mineral salts',
 'Protein'],
answer: 2
},
{
question: 'When oil and water are shaken together they form a mixture called',
options: ['a solution',
 'an emulsion',
 'a solute',
 'a solvent',
 'a suspension'],
answer: 1
},
{
question: 'The organism which lives in the human blood as a parasite is',
options: ['louse',
 'plasmodium ',
 'roundworm ',
 'tapeworm',
 'tick'],
answer: 1
},
{
question: 'The fusion of an egg cell with sperm forms',
options: ['an ovum',
 'an embryo',
 'a zygote ',
 'an ovary ',
 'a placenta'],
answer: 2
},
{
question: 'The instrument used to measure current in an electric circuit is the',
options: ['ammeter',
 'anemometer',
 'barometer',
 'thermometer',
 'voltmeter'],
answer: 0
},
{
question: 'The atom of an element has 4 protons and 5 neutrons in its nucleus. How many shells are occupied in the atom?',
options: ['1',
 '2',
 '3',
 '4',
 '5'],
answer: 1
},
{
question: 'The gaps left between railway lines is to allow for',
options: ['expansion',
 'cooling',
 'maintenance ',
 'easy stopping ',
 'gear changing'],
answer: 0
}
]