

//Array of Objects
const quiz = [
  {
  	question:'Ↄbea wo abofra a, wↄma no',  	
  	options:['Dammirifua',
			 'Hyεden',
			 'Darekena',
			 'Tirinkwa'],
  	answer: 3
  },
  {	
  	question: 'Wudidi na obi ma wo kita mu a, wubegye so dεn?',
	options:[ 'Magyae mu',
			  'Yoo mate',
			  'Mikura no',
			  'Woamma ntεm'],
	answer: 2
  },
  {
  	question:'Paw apεntεdin a εwↄ nea edidi so yi mu.',
  	options:['Asaase asa',
			 'Agyeman',
			 'Nyankomago',
			 'Akua Badu'],
  	answer: 0
  },
  {
  	question:'Hyehyε din yi nnidiso nnidiso',  	
  	options:[ 'Yaw, Kwasi, Kwabena',
			  'Kwabena, Kwaku, Yaw',
			  'Kwame, Yaw, Kofi',
			  'Kwaku, Kwasi, Kwadwo'],
  	answer: 1
  },
  {
  	question:'Ɛyε akyiwade sε yedidi a',  	
  	options:[ 'Yεwe nam',
			  'Yεfrε obi ma odi bi',
			  'Yεde yεn nsa si fam',
			  'Yεnom nsu'],
  	answer: 2
  },
  {
  	question: 'Wo maame papa yε wo dεn',		
  	options: ['Nanabea',
			  'Nanabarima',
			  'wↄfasewa',
			  'papa panyin'],
		answer: 1
  },
  {
  	question: 'Maame Yaa ne maame Akua ware ↄbarima biako, enti wↄyε',	 
  	options: [ 'akorafo',
		 	   'nnamfo',
			   'anuanom',
			   'atipεnfo'],
		answer: 0
  },
  {
  	question: 'Wo maame nuabarima yε wo dεn?',		
  	options: [ 'wↄfa',
			   'w’agya kumaa',
			   'wↄfasewa',
			   'wↄfase'],
		answer: 0
  },
  {
  	question: 'Wogoru abeawa bi bra a na εkyerε sε',		
  	options: ['n’abusuafo wↄ sika',
			  'ne maame pε n’asεm',
			  'ne ho ayε fε',
			  'wanyin'],
		answer: 3
  },
  {
  	question: 'Sε wↄregoru abeawa bi bra a, wↄma no',		
  	options: ['Otuo',
			  'Bodua',
			  'ↄtↄ',
			  'ayitama'],
		answer: 2
  },
  {
  	question: 'Ade titiriw a Akanfo gyina so ware ne',		
  	options: ['ahoↄfε',
			  'ahosiesie gonn',
			  'anotew bεrebεre',
			  'suban pa'],
		answer: 3
  },
  {
  	question: 'Ↄbarima ne ↄbea ware a, na awofonom abεyε',
		options: ['Nkontafo',
				  'Nkumaafo',
				  'Nsewnom',
				  'Akorafo'],
		answer: 2
  },
  {
  	question: 'yiregu ba aware mu a, na εkyerε sε aware no',		
  	options: ['Agu',
			  'asↄ',
			  'afi ase',
			  'akorafo'],
		answer: 0
  },
  {
  	question: 'Ↄsram bεn na ekura nnafua 28 anaa 29?',		
  	options: ['Ogyefuo',
			  'Ↄbεnem',
			  'Oforisuo',
			  'Kitawonsa'],
		answer: 0
  },
  {
  	question: 'Dapaa ahe na Akanfo wↄ',		
  	options: ['Anan',
			  'Abien',
			  'Abiεsa',
			  'Anum'],
		answer: 1
  },
  {
  	question: 'Wↄka sε oi aka nkyene agu a, εkyerε dεn?',
		options: ['Onni nkyene',
				  'Watu kwan',
				  'Wakohintaw',
				  'Wawu'],
		answer: 3
  },
  {
  	question: 'Nsawa yε …..a ↄmanfo de boa owufo bi abusuafo.',		
  	options: ['Ntama',
			  'Sika',
			  'Nnuan',
			  'Nsu'],
		answer: 1
  },
  {
  	question: 'Okuafo ma yεn mfumduan. Dεn na ↄbↄmmↄfo ma yεn?',		
  	options: ['Hanam',
			  'Nkesua',
			  'Atosode',
			  'Nnuaba'],
		answer: 0
  },
  {
  	question: 'Mpanyimfo hyia a, hena na wↄkasa fa no so?',		
  	options: ['Odikuro',
			  'Ↄkyeame',
			  'Ↄsafohene',
			  'Ɛsεn'],
		answer: 1
  },
  {
  	question: 'Akanman mu ↄhene bεn na ↄwↄ tumi sen ahemfo no nyinaa?',		
  	options: ['Sanaahene',
			  'Kurontihene',
			  'Dabehene',
			  'Ↄmanhene'],
		answer: 3
  },
  {
  	question: 'Nkurow nketewa mu, hena na ↄhene fa no so frε ↄmanfoↄ.',
		options: ['ↄbrafo',
				  'εsεn',
				  'dawubↄfo',
				  'ahenkwaa'],
		answer: 2
  },
  {
  	question: 'Nipa titiriw a εpaw ↄhene no mu biako ne ….',		
  	options: ['ↄkyerεma',
			  'ↄbrafo',
			  'ↄhemmea',
			  'dawubↄfo'],
		answer: 2
  },
  {
  	question: 'Ↄhene bεn na ↄhwε nsa so wↄ ahemfi',		
  	options: ['Dabehene',
			  'Ↄhemmea',
			  'Kurontihene',
			  'Sanaahene'],
		answer: 3
  },
  {
  	question: 'Obi tew owufo bi ntoa a, ase ne dεn?',		
  	options: ['Wadi n’ade',
			  'Watↄ funnaka',
			  'wabↄ da asie no',
			  'wakↄ ayi ase aba'],
		answer: 0
  },
  {
  	question: 'Nwaw ne akyekyere gyina hↄ ma dεn?',		
  	options: ['ntↄkwaw',
			  'asomdwoe',
			  'patapaa',
			  'ahoↄhare'],
		answer: 1
  },
  {
  	question: 'Sε woka asεm kyerε obi na ↄwosow ne ti a, εkyerε sε',		
  	options: ['ↄrenka hwee',
			  'ↄmpene so',
			  'ka asεm no bio',
			  'wagye ato mu'],
		answer: 1
  },
  {
  	question: 'Akanman mu ntama tuntum ne kↄkↄↄ gyina hↄ ma dεn',		
  	options: ['anigye',
			  'ahosεpεw',
			  'awerεhow',
			  'ahotε'],
		answer: 2
  },
  {
  	question: 'Anansesεm mu no, Adanko ho asεm taa kyerε',		
  	options: ['abufuw',
			  'anihaw',
			  'asisi',
			  'ahoↄhare'],
		answer: 3
  },
  {
  	question: 'Agya rek? ogyaw me abofra bi. Wosoma no a, ?nk? . wok? nso a, na odi w’akyi. ?y? d?n?Agya rekↄ ogyaw me abofra bi. Wosoma no a, ↄnkↄ . wokↄ nso a, na odi w’akyi. Ɛyε dεn',
		options: ['Onipa sunsuma',
				  'Onipa nsateaa',
				  'Onipa nan',
			 	  'Onipa nsa'],
		answer: 0
  },
  {
  	question: 'Agya ade bi wↄ hↄ. Ↄnkↄ asu nanso daa ↄwↄ nsu wↄ n’ahina mu. Ɛyε dεn?',
		options:['Mako',
				 'ntↄrewa',
				 'borↄfere',
				 'kube'],
		answer: 3
  },
  {
  	question: 'Mpanyin kae a wↄmmoa sε: wusum nkontopo afiri a, wuyi',
		options: ['nyansa',
				  'kasabrε',
				  'nokware',
				  'ayamuye'],
		answer: 1
  },
  {
  	question: 'Maame no ka kyerεε ne ba no se: wokↄ aware a',
		options: ['kasa',
				  'didi',
				  'bisa',
				  'tena ase'],
		answer: 2
  },
  {
  	question: 'Toa saa εbε yi so: woforo dua pa a, na',		
  	options: ['wopia wo',
			  'wↄkamfo wo',
			  'wↄma wo amo',
			  'wↄbↄ nsam ma wo'],
		answer: 0
  },
  {
  	question: 'Akanfo yi apae a, wↄde ….. na etwa to.',		
  	options: ['Nyira',
			  'Nnome',
			  'ↄfrε',
			  'nkurobↄ'],
		answer: 1
  },
  {
  	question: 'Akanfo de mmorↄnsa yi apae a, wↄde nsa no gu kↄnkↄ no mu mpεn ahe”',
		options: ['Mpεn asia',
				  'Mprεnsa',
				  'Mpεn anan',
				  'Mpεn anum'],
		answer: 1
  },
  {
  	question: 'Akyemfo afahyε titiriw ne',		
  	options: ['Bakatue',
			  'Aboakyere',
			  'Ohum',
			  'Kundum'],
		answer: 2
  },
  {
  	question: 'Dwumadi titiriw bεn na Akanfo de wie afahyε?',		
  	options: ['akwammↄ',
			  'aguabↄ',
			  'hyirewgu',
			  'nkankye'],
		answer: 1
  },
  {
  	question: 'Aman abien wↄ Ghana ha a wↄn mmrane ne Kↄtↄkↄ',		
  	options: ['Akuapem ne Asante',
			  'Kwawu ne Akyem',
			  'Akuapem ne Awawu',
			  'Asante ne Nzema'],
		answer: 3
  },
  {
  	question: 'Dεn na atetesεm kyerε sε Ↄkↄmfo Anↄkye de mpaboa foroe?',		
  	options: ['Mpampuro',
			  'Kokosi',
			  'borↄfere',
			  'abεten'],
		answer: 3
  },
  {
  	question: 'Hena na ↄde ne nsa tuu ↄware wu ↄbo mu no',		
  	options: ['Ↄkↄmfo Anↄkye',
			  'Ansa Sasraku',
			  'Ↄsεe Bonsu',
			  'Ↄkoforoboↄ'],
		answer: 0
  } 
]