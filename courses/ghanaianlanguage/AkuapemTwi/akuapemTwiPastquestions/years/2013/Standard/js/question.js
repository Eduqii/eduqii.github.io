

//Array of Objects
const quiz = [
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' + 'Sε obi didi na wokↄto no a, wubekyia no dεn?',
  	options:['Ayekoo',
			 'Woato me',
			 'Kita mu',
			 'Adwuma o'],
  	answer: 2
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' +  'Ↄkwantuni a wafi kwan so abefu fie no, yεma no ………',
	options:[ 'Akwaaba',
			  'Nantew yiye',
			  'Nkyεre o',
			  'Aba a tena ase'],
	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' + 'Da bεn na wↄwoo abofra a ↄde Kwame?',
  	options:['Dwowda',
			 'Benada',
			 'Memeneda',
			 'Kwasida'],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' + 'Abofra bi de Tawia a na εkyerε sε odi ……….akyi.',  	
  	options:[ 'Mansa',
			  'Ntaafo',
		  	  'Anane',
			  'Nyankomago'],
  	answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' + 'Wo wↄfa papa yε wo dεn?',  	
  	options:[ 'Wo na ba',
			  'W’agya ba',
			  'W’agya kumaa',
			  'Wo nanabarima'],
  	answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' +  'Wo papa nuabea yε wo …..',		
  	options: ['wↄfa',
			  'nua panyin',
			  'maame kumaa',
			  'sewaa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho' + '</b>' + '<br>' +  'Mmofra a εna biako awo wↄn no yε',	 
  	options: [ 'wↄfa mma',
			   'εna mma',
			   'sewaa mma',
			   'abusua mma'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Ɛyε Akanfo akyiwade sε……..',
		options: [ 'Yεguare a, yεnto dwom',
				   'Yekyia obi a, yekia no',
				   'Yebehu agyinamoa awia',
				   'yεbεbↄ yεn nsam afrε obi'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Akanman mu obi wu a, …….no ansa na wↄadeda no wↄ mpa so.',
		options: ['Woguare',
				  'wↄsoa',
				  'wosie',
				  'wↄbↄ nsawa'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Din bεn na yεde ma sika a ↄmanfo de boa owufo no abusuafo no?',
		options: ['Ayise',
				  'Nsawa',
				  'Tow',
				  'Ayiyε'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Akanfo mu wodi asεm wie a, sika a wↄde ma mpanyimfo no, wↄfrε no dεn?',
		options: ['Hyirewgu',
				  'Mpata',
				  'Baguade',
				  'Agyinamudi'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Asεnni mu sika a nea wadi fↄ no tua ne …… ma nea wadi bem no.',
		options: ['Sonkahyire',
				  'Aboade',
				  'Tow',
			   	  'Mpata'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Ansa na obi bedi hene no, εsε sε ↄyε ….',
		options: ['Osikani mapa',
				  'Ↄdehye kronn',
				  'ↄdekyerεfo',
				  'ↄhoↄfεfo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Ↄhene bεn na ↄhwε sika so wↄ ahemfi?',
		options: ['Abakomahene',
				  'Dabehene',
				  'Ↄhemmea',
				  'Sanaahene'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo bragoru, aware ne adedi ho.' + '</b>' + '<br>' + 'Kasakoa foforo a etumi kyerε ↄkↄ afikyiri ne ……..',
		options: ['Wabu ne nsa',
				  'Wada ne nan so',
				  'Wabu ne nan mu',
				  'Wada ne kↄn so'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Wogoru abeawa bi bra a, wↄma no ↄtↄ ne …..',
		options: ['Nkyenam',
				  'Bankye',
				  'ntↄrewa',
				  'nkesua'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Agya sika a ogye wↄ ne babea aware mu no, wↄfrε no dεn?',		
  	options: ['Danta',
			  'Sonkahyiri',
			  'Akontasekan',
		  	  'Aseda'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Ↄbarima bi reware a otua akontasekan ma ↄbea no …..',		
  	options: ['Nkumaafo',
			  'Awofo',
			  'Nua barimanom',
			  'Nua mmeanom'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Akanfo regu aware a, awarefo no mu biara bↄ ne ………',		
  	options: ['Din',
			  'Nkuro',
			  'Ti mu pↄw',
			  'Ho aguaa'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Din bεn na yεde frε obi a wↄde no si owufo bi anan mu?',
		options: [' Ↄyↄnko brεbo',
				  'Okunafo',
				  'Odiadefo',
				  'Opiafo'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo akyiwade, ayiyε, asεnni ne ahenni ho.' + '</b>' + '<br>' + 'Din bεn na Akanfo de ma onipa a otua abusua no ano?',		
  	options: ['Ahenekwaa',
			  'Ↄdehye',
			  'Ↄsomafo',
			  'Abusuapanyin'],
		answer: 3
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho.' + '</b>' + '<br>' + 'Dεn na mpanyimfo yε ma nsamafo afahyε bere mu?',		
  	options: ['Wogu wↄn nsa',
			  'Wokokyia wↄn',
			  'wↄkↄda',
			  'wↄkyε wↄn nneεma'],
		answer: 0
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho.' + '</b>' + '<br>' + 'Akuapemfo afahyε kεse pa ara ne …..',
		options: ['Aboakyere',
			 	  'Bakatue',
				  'Odwira',
				  'akwambↄ'],
		answer: 2
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho.' + '</b>' + '<br>' + 'Afarefo de saa nneεma yi yε adwuma',		
  	options: ['ↄkorow, otuo, asau',
			  'ↄkorow, asau, darewa',
			  'darewa, atuduru, asau',
			  'otuo, asau, atuduru'],
		answer: 1
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho.' + '</b>' + '<br>' + 'Ↄsram bεn na edi Oforisuo anim?',		
  	options: ['Kitawonsa',
			  'Ↄsanaa',
			  'Ɛbↄ',
			  'Ↄbεnem'],
		answer: 3
  },
  {
  	question:'<b>'+ 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nkyia, edin ne abusuabↄ ho.' + '</b>' + '<br>' + 'Edin foforo bεn na Akanfo de ma nnawↄtwe asia?',		
  	options: ['Adaduonu',
			  'Adaduasa',
			  'Adaduanan',
			  'Adaduosia'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Toa εbε yi so: Abofra hu ne nsa hohoro a, ↄne mpanyimfo …….',
		options: ['Didi',
				  'Nantew',
				  'Kasa',
				  'Tu kwan'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Mpanyin se: wopε asaka akyerε Nyame a, …',		
  	options: ['Wokra w’adamfo',
			  'Wokyerεw no nwoma so',
			  'Woka kyerε mframa',
			  'Wutu kwan kↄ wim'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Papa no buu yεn bε se: Seantie εne …',		
  	options: ['W’asεm aka wo ti mu',
			  'ↄnwam atikↄ pↄw',
			  'woanya anidaso',
			  'woante ase'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Agya rekↄ, ogyaw me ade bi. Da biara ↄte hↄ a, na ne ti kyerε fam. Ɛyε …..',
		options: ['Opurow',
				  'Ampan',
				  'kↄtↄkↄ',
				  'ankyem'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Agya rekↄ ogyaw me maame bi. Ↄhwe ase a, onipa baako pε na otumi ma no so . Ɛyε ….',		
  	options:['Pane',
			 'Bokiti',
			 'Adaka',
			 'Ntama'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Hena na atetesεm kyerε sε ↄde akofena wↄw fam na obiara ntumi ntui no?',
		options: ['Ↄkↄmfo Anↄkye',
			  	  'Kwabia Amamfi',
				  'Oti Akεntεn',
				  'Tweneboa Kodua'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Sε wↄbↄ ↄhene bi mmran Otumfo a, εkyerε sε ….',		
  	options: ['ↄpε ntↄkwaw',
			  'ↄwↄ sika',
			  'ↄwↄ ahode bebree',
			  'ↄwↄ tumi'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agyarekↄ ne atetesεm ho.' + '</b>' + '<br>' + 'Hena na atetesεm mu na ↄyε Ↄkↄmfo Anↄkye adamfo berεbo?',
		options: ['Oti Akεntεn',
				  'Obiri Yεboa',
				  'Ↄsεe Tutu',
				  'Ntim Gyakari'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Nneεma titiriw bƐn na Akanfo de yi apae?',		
  	options: ['Nsa, nsu',
			  'Nsu, εwo',
			  'Εwo, wisa',
			  'Nsa, mako'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Akanfo yi apae a, wodi kan frε',		
  	options: ['nsubↄnten',
			  'onyankopↄn',
			  'abosom',
			  'nsamanfo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Ↄhene a nnipa ti abien si n’akyeampoma so kyerε sε:',		
  	options: ['Yenim yεn ho',
			  'Yεmpε yεn ho asεm',
			  'Yεbεkyε no pεpεεpε',
			  'Yεredwen abↄ mu'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Sε obi yε bↄne na ↄde ne nsa to ne nsayam a, εkyerε sε ….',
		options: ['Ne nsa yε no yaw',
				  'ↄpa kyεw',
				  'n’asεm yε dε',
				  'ne nsam gow'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Ↄsebↄ yε aboa a ne suban kyerε …..',		
  	options: ['ahummↄbↄ',
			  'ahoↄfε',
			  'asisi',
			  'nyansa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo apae, nsεnkyerεnne ne anansesεm ho.' + '</b>' + '<br>' + 'Akanfo anansesεm mu Ananse taa yε ne ho …..',		
  	options: ['ↄfotufo',
			  'ↄdomfo',
			  'ↄyamyefo',
			  'onitefo'],
		answer: 3
  }
]