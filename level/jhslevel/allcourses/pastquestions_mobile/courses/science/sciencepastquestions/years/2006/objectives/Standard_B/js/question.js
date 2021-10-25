

//Array of Objects
const quiz = [
  {
		question: 'The property of a rock that makes it different from water is that it has',
options: ['fixed volume ',
 'fixed shape ',
 'density',
 'mass'],
answer: 0
},
{
question: 'A plane mirror can be described as opaque because it',
options: ['absorbs all the light incident on it. ',
 'reflects all the light incident on it',
 'allows all the light incident on it to pass through it',
 'partly absorbs and partly allows the light incident on it to pass through it'],
answer: 1
},
{
question: 'Wood is used to make the handles of cooking utensils because it is a',
options: ['bad conductor of heat ',
 'good absorber of heat ',
 'good reflector of heat ',
 'bad radiator of heat'],
answer: 0
},
{
question: 'Ventilation holes are made at the upper part of a door to allow air to rise by',
options: ['convection ',
 'conduction ',
 'radiation',
 'reflection'],
answer: 0
},
{
question: 'When the north poles of two magnets are brought together they',
options: ['attract each other',
 'repel each other',
 'first attract and then repel each other',
 'have no effect on each other'],
answer: 1
},
{
question: 'A fuse is used in an electrical circuit to',
options: ['measure theenergyusedup',
 'protect appliances',
 'provide more current',
 'make sure current flows continuously'],
answer: 1
},
{
question: 'The angle between an incident ray and a reflecting surface is 20\xBA. Determine the angle of reflection.',
options: ['60\xBA ',
 '70 \xBA ',
 '90\xBA ',
 '110\xBA'],
answer: 1
},
{
question: 'A screw is a machine which works in the same way as',
options: ['a lever',
 'an inclined plane ',
 'a wheel and axle ',
 'a pulley'],
answer: 1
},
{
question: 'Power is defined as the rate at which',
options: ['energy is used',
 'temperature rises',
 'a body travels',
 'a body cools down'],
answer: 0
},
{
question: 'An example of a lever in which the effort is applied at the middle is a',
options: ['wheelbarrow ',
 'pair of forceps ',
 'pair of scissors ',
 'beam balance'],
answer: 1
},
{
question: 'A simpler way of maintaining the efficiency of a machine is by',
options: ['oiling its parts',
 'fitting new parts on the machine ',
 'making sure it is always working ',
 'making sure it works at low speed.'],
answer: 0
},
{
question: 'The part of a seed which grows to become the shoot of a plant is the',
options: ['cotyledon ',
 'plumule ',
 'radicle',
 'testa'],
answer: 1
},
{
question: 'One disease that affects the nervous system of humans is',
options: ['filariasis',
 'measles',
 'poliomyelitis',
 'typhoid'],
answer: 2
},
{
question: 'Which of the following life processes leads to the release of energy?',
options: ['Absorption of food ',
 'Digestion of food ',
 'Photosynthesis',
 'Respiration'],
answer: 3
},
{
question: 'Mineral salts in dead organisms are released into the soil by a process called',
options: ['decomposition',
 'diffusion ',
 'leaching ',
 'osmosis'],
answer: 0
},
{
question: 'Spectacles fitted with concave lenses are worn by people suffering from',
options: ['loss of accommodation',
 'total blindness',
 'long sightedness',
 'short sightedness'],
answer: 3
},
{
question: 'Which of these organs in humans releases carbon dioxide as a waste product?',
options: ['Kidney',
 'Liver ',
 'Lung ',
 'Skin'],
answer: 2
},
{
question: 'Farmers do not plant the stems of maize because the stems',
options: ['do not have buds',
 'are difficult to obtain',
 'dry up too quickly',
 'do not contain food'],
answer: 0
},
{
question: 'Which of the following ways of treating water makes the water soft?',
options: ['Adding alum',
 'Adding washing soda',
 'Chlorinating',
 'Filtering'],
answer: 1
},
{
question: 'Water that needs a small amount of soap to form lather is described as',
options: ['clean ',
 'hard ',
 'pure ',
 'soft'],
answer: 3
},
{
question: 'Common salt(sodium chloride) is obtained from seawater by',
options: ['condensation ',
 'evaporation ',
 'precipitation',
 'sublimation'],
answer: 1
},
{
question: 'The chemical formula of a compound describes the ',
options: ['ratio in which the elements are combined ',
 'number of molecules in a compound',
 'nature of the bonding in the compound',
 'state of matter of the compound'],
answer: 0
},
{
question: 'Which of the following solvents can be used to remove grease from the hand?',
options: ['Alcohol',
 'Palm kernel oil',
 'Turpentine',
 'Water'],
answer: 2
},
{
question: 'How many different elements are present in the compound H' + '<sub>' + '2' + '</sub>' + 'SO' + '<sub>' + '4' + '</sub>' + '?',
options: ['2',
 '3',
 '6',
 '7'],
answer: 1
},
{
question: 'Producers in an ecosystem are plants that',
options: ['feed on other plants',
 'feed on dead materials',
 'manufacture their own food',
 'attract'],
answer: 2
},
{
question: 'The disease caused by the Plasmodium parasite is',
options: ['cholera',
 'malaria',
 'onchocerciasis',
 'schistosomiasis'],
answer: 1
},
{
question: 'Vaccination is carried out to',
options: ['enable sores to heal faster',
 'increase the red blood cells of a person',
 'enable a person\u2019s white blood cells to fight against diseases',
 'kill germs in a person\u2019s body'],
answer: 2
},
{
question: 'Which of the following farming practices is likely to make the soil poor in nutrients?',
options: ['Adding chemical fertilizer during each planting season',
 'Planting cover crops on the land',
 'Tilling the land before planting',
 'Burning the vegetation after clearing'],
answer: 3
},
{
question: 'The type of cloud found closest to the earth\u2019s surface is',
options: ['cirrus',
 'cumulus',
 'stratus',
 'stratocumulus'],
answer: 2
},
{
question: 'The amount of water vapour in the atmosphere is called',
options: ['fog',
 'humidity',
 'rain',
 'temperature'],
answer: 1
},
{
question: 'The planet which is farthest away from the sun is',
options: ['Jupiter ',
 'Mercury ',
 'Mars',
 'Pluto'],
answer: 3
},
{
question: 'Which of the following gases is involved in the process of rusting?',
options: ['H' + '<sub>' + '2' + '</sub>',
 'CO' + '<sub>' + '2' + '</sub>',
 'O' + '<sub>' + '2' + '</sub>',
 'N' + '<sub>' + '2' + '</sub>'],
answer: 2
},
{
question: 'A non-reactive metal can be identified from other metals because its surface is',
options: ['hard',
 'shiny',
 'smooth',
 'rough'],
answer: 1
},
{
question: 'The property to a metal that makes it possible for it to be drawn into a wire is called',
options: ['conductivity',
 'ductility',
 'malleability',
 'resistivity'],
answer: 1
},
{
question: 'The main reason why food is processed is to make it',
options: ['taste better',
 'preservable for a longer period ',
 'possible to eat without cooking ',
 'richer in nutrients'],
answer: 1
},
{
question: 'The process by which kerosene rises up in the wick of a lantern is known as',
options: ['capillarity',
 'diffusion',
 'surface tension',
 'osmosis'],
answer: 0
},
{
question: 'Which of the following statements about friction is not true?',
options: ['It wears off materials',
 'It produces heat',
 'It opposes motion',
 'It increases speed'],
answer: 3
},
{
question: 'Arteries are blood vessels which carry',
options: ['blood to the heart',
 'carbon dioxide to the air',
 'blood away from the heart',
 'oxygen to the lungs'],
answer: 2
},
{
question: 'Which of the following structures is not involved in blood circulation?',
options: ['Capillary',
 'Heart ',
 'Muscle ',
 'Vein'],
answer: 2
},
{
question: 'A substance of mass 10 kg has a density of 2.0 kgm' + '<sup>' + '-3' + '</sup>' + '. Calculate its volume.',
options: ['0.2 m' + '<sup>' + '3' + '</sup>',
 '5.0 m' + '<sup>' + '3' + '</sup>',
 '10.0 m' + '<sup>' + '3' + '</sup>',
 '20.0 m' + '<sup>' + '3' + '</sup>'],
answer: 1 
}
]