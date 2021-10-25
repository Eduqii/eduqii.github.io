

//Array of Objects
const quiz = [
  {
		question: 'The method used to separate an insoluble solid from a liquid is',
options: ['crystallization',
 'distillation',
 'filtration',
 'sublimation'],
answer: 2
},
{
question: 'The scent of a perfume sprayed at one corner of a room fills the entire room through',
options: ['conduction',
 'diffusion ',
 'osmosis ',
 'radiation'],
answer: 1
},
{
question: 'Which of the following processes is a physical change?',
options: ['Rusting of iron',
 'Burning of wood',
 'Formation of water from hydrogen and oxygen',
 'Solidification of water into ice'],
answer: 3
},
{
question: 'Atoms of the same element have the same\n' +
'I. number of electrons II. number of protons III. chemical properties' +
'\n\n Which of the above statements are true?',
options: ['I and II only ',
 'II and III only', 
 'I and III only', 
 'I,II and III'],
answer: 3
},
{
question: 'The unit of measurement of energy is',
options: ['joule',
 'kelvin',
 'newton',
 'watt'],
answer: 0
},
{
question: 'Which of the following energy transformations takes place at a hydroelectric power station?',
options: ['Potential energy \u2192 kinetic energy→electrical energy',  'Potential energy \u2192 sound energy \u2192 electrical energy',  'Kinetic energy \u2192 electrical energy \u2192 light energy',
 'Electrical energy \u2192 light energy \u2192 heat energy'],
answer: 0
},
{
question: 'A drawing of magnetic lines of force provides information on the',
options: ['source of the field',
 'type of magnet',
 'strength of the field',
 'length of the magnet'],
answer: 2
},
{
question: 'A bottle of water removed from a refrigerator soon becomes covered with droplets of water because the',
options: ['bottle is porous',
 'bottle is full of water',
 'water in the surrounding atmosphere is colder than the water in the bottle',
 'water in the surrounding atmosphere is warmer than the water in the bottle'],
answer: 3
},
{
question: 'The volume of a metal ball was determined by dropping it into a measuring cylinder containing 20cm<sup>3</sup> of water and the water level rose to 35cm<sup>3</sup>. If the mass of the ball is 35g, calculate its density.',
options: ['1.0gcm<sup>-3</sup>',
 '1.6gcm<sup>-3</sup>',
 '1.8gcm<sup>-3</sup>',
 '2.3gcm<sup>-3</sup>'],
answer: 3
},
{
question: 'A boy stepped on a bananapeel on the ground and fell because the',
options: ['boy was not wearing shoes',
 'ground was too hard',
 'banana peel reduced the friction on the ground',
 'banana peel increased the friction on the ground'],
answer: 2
},
{
question: 'Which of the following conditions describes a first class lever?',
options: ['The load is between the effort and pivot',
 'The pivot is between the effort and the load ',
 'The effort is between the pivot and the load ',
 'The load arm is equal to the effort arm'],
answer: 1
},
{
question: 'A man did 75J of work by lifting a 50 N load from the floor on to a shelf . Calculate the height of the shelf',
options: ['0.67 m ',
 '1.50 m ',
 '25.00 m',
 '125.00 m'],
answer: 1
},
{
question: 'The lion is a carnivore because it eats',
options: ['flesh ',
 'grass ',
 'fruits',
 'uncooked food'],
answer: 0
},
{
question: 'The structure which helps a fish to breathe underwater is the',
options: ['gill',
 'air sac',
 'operculum',
 'mouth'],
answer: 0
},
{
question: 'The thorns found on some plants are used for',
options: ['breathing',
 'protection',
 'absorbing water from the air',
 'resisting bush fires'],
answer: 1
},
{
question: 'The following characteristics are features of all living things except ability to',
options: ['bring forth young ones',
 'excrete',
 'grow',
 'move from place to place'],
answer: 3
},
{
question: 'Which of the following parasites lives on field animals',
options: ['Aphid',
 'Plasmodium',
 'Tick',
 'Tapeworm'],
answer: 2
},
{
question: 'The greatest danger faced by mammals living on land is',
options: ['becoming too cold',
 'becoming too hot',
 'losing water through evaporation',
 'gaining too much water through absorption'],
answer: 2
},
{
question: 'The insect responsible for the spread of malaria is the',
options: ['female anopheles mosquito',
 'housefly',
 'male anopheles mosquito',
 'tsetsefly'],
answer: 0
},
{
question: 'Which of the following substances is a dded to the soil to reduce its acidity?',
options: ['Charcoal ',
 'Humus ',
 'Lime',
 'Manure'],
answer: 2
},
{

question: 'Fig. 1 shows the arrangement of parts of the soil when some soil sample was shaken with water in a glass cylinder and allowed to settle. Which of the labeled layers contains organic matter?',
options: ['M ',
 'N ',
 'O ',
 'P'],
answer: 0,
img: 'img/fig1.jpg'
},
{
question: 'Fig. 1 shows the arrangement of parts of the soil when some soil sample was shaken with water in a glass cylinder and allowed to settle.The layer which does not have the ability to retain much water is',
options: ['N ',
 'O ',
 'P ',
 'Q'],
answer: 3,
img: 'img/fig1.jpg'
},
{
question: 'Which of the following characteristics applies to only plants?',
options: ['Excretion of waste materials',
 'Response to stimuli',
 'Ability to manufacture food from simple substances',
 'Ability to respire'],
answer: 2
},
{
question: 'The waste products of respiration are',
options: ['glucose and oxygen',
 'carbon dioxide and water',
 'carbon dioxide and heat',
 'oxygen and water'],
answer: 1
},
{
question: 'The function of the lung is to',
options: ['maintain a constant amount of water in the body',
 'absorb oxygen from the blood',
 'absorb carbon dioxide from the blood',
 'maintain the temperature of the body constant'],
answer: 2
},
{
question: 'Which of the following plants reproduce(s) vegetatively?' + '<br />' +
'I. Banana II. Mango III. Ginger',
options: ['II only',
 'I and II only ',
 'I and III only ',
 'III only'],
answer: 2
},
{
question: 'The process which takes place in all living cells is',
options: ['digestion',
 'fertilization',
 'photosynthesis',
 'respiration'],
answer: 3
},
{
question: 'The food substance found in yam is',
options: ['carbohydrate',
 'oil',
 'protein',
 'vitamin'],
answer: 0
},
{
question: 'The end-products of the digestion of fats and oils are',
options: ['amino acids and glucose ',
 'amino acids and glycerol ',
 'fatty acids and glycerol',
 'fatty acids and amino acids'],
answer: 2
},
{
question: 'Which of the following factors promote plant germination?' + '<br/ >' + '<br />' + 
'I. Adequate temperature ' +
' II. Moisture ' +
' III. Good soil',
options: ['I and II only ',
 'I and III only ',
 'II and III only ',
 'I,II and III'],
answer: 0
},
{
question: 'The female part of a flower is the',
options: ['calyx',
 'pistil ',
 'petal ',
 'stamen'],
answer: 1
},
{
question: 'Which of the following substances breaks down fats into tiny droplets during digestion',
options: ['Bile',
 'Gastric juice',
 'Pancreatic juice',
 'Saliva'],
answer: 0
},
{
question: 'Blood in the urine is a symptom of',
options: ['bilharzia',
 'cholera',
 'gonorrhoea',
 'typhoid'],
answer: 0
},
{
question: 'A free movement of the bowels is aided by',
options: ['sleeping at least 6 hours a day',
 'washing one\u2019s body at least once a day',
 'eating fatty foods',
 'eating foods containing fibre'],
answer: 3
},
{
question: 'Which of the following diseases is spread through the air?',
options: ['AIDS ',
 'Measles ',
 'Typhoid ',
 'Yaws'],
answer: 1
},
{
question: 'How many days in a month does the moon appear?',
options: ['7 days ',
 '14 days ',
 '21 days ',
 '28 days'],
answer: 3
},
{
question: 'The earth moves completely round the sun once in every',
options: ['1 day ',
 '28 days ',
 '30 days ',
 '365 days'],
answer: 3
},
{
question: 'A smaller heavenly body, which orbits a bigger one could be described as a',
options: ['comet ',
 'meteor ',
 'moon ',
 'sun'],
answer: 2
},
{
question: 'Which ofthe following parasites is a plant?',
options: ['Aphid ',
 'Dodder ',
 'Flea ',
 'Jigger'],
answer: 1
},
{
question: 'Which of the following substances is not a constituent of a balanced diet?',
options: ['Carbohydrate ',
 'Protein ',
 'Table salt ',
 'Vitamin'],
answer: 2 
}
]