

//Array of Objects
const quiz = [
  {
  	question:'Ↄbarima reware a, otua sika bi ma ne yere no nua mmarimanom, wↄfrε saa sika yi dεn?',
  	options:['asew sika',
			 'ti nsa',
			 'akonta sekan',
			 'akonta sika'],
  	answer: 2
  },
  {	
  	question: 'Nsa a edi kan pa ara a ↄbarima de koyi ne ho adi kyerε ↄbea no abusua no wↄfrε no',
	options:[ 'awaregye nsa',
			  'akonta sekan',
			  'ↄpono-akyi-bↄ',
			  'ti ade'],
	answer: 2
  },
  {
  	question:'Nea edidi so yi nyinaa yε nokware wↄ Akanfo nkyia ho, gye sε',
  	options:['sε obi rekↄgya ne nan a, onkyia',
			 'sε obi redidi a, yenkyia no',
			 'yekyia fi nifa so',
			 'yεmfa yεn nsa bεnkum nkyia'],
  	answer: 1
  },
  {
  	question:'Ansa na aware biara bedi mu no, gye sε ↄbarima no tu ↄbea no.',  	
  	options:[ 'nnamfo nyinaa fo',
			  'awofo fo',
			  'nuanom agyina',
			  'ti nsa'],
  	answer: 3
  },
  {
  	question:'Nna dodow a εda Akwasidae ne Fↄdwo ntam yε',
  	options:[ 'akron',
			  'dunum',
			  'aduonu abien',
			  'aduonu'],
  	answer: 1
  },
  {
  	question: 'Ↄsram a edi kan afe biara mu ne',
		options: ['Ↄpεnimaa',
				  'Ↄbεnem',
			      'Ogyefuo',
			 	  'Ↄpεpↄn'],
		answer: 3
  },
  {
  	question: 'Da a ade rekye ma wↄadi Akwasidae yε',	 
  	options: [ 'Mono Mene',
			   'Fↄdwo',
			   'Awukudae',
			   'Memeneda Dapaa'],
		answer: 3
  },
  {
  	question: 'Asram dodow ahe na yenya wↄ afirinhyia biako mu?',		
  	options: [ 'dubiako',
			   'dumien',
			   'dunkron',
			   'dummiεnsa'],
		answer: 1
  },
  {
  	question: 'Awunyade yε nnea owufo no de',		
  	options: ['gya ne mma ne wu akyi',
			  'mane ne mma',
			  'kyε ne nuanom bere a ↄte ase',
			  'ma ne nkonta bere a ↄte ase'],
		answer: 0
  },
  {
  	question: 'Edin bεn na yεde ma obi a osi owufo anan mu hwε n’agyapade so?',		
  	options: ['abusuapanyin',
			  'ananmusini',
			  'odiadefo',
			  'ↄhwεsofo'],
		answer: 2
  },
  {
  	question: 'Hena na εyε amanne sodi ↄbarima ade wↄ Akanfo mu?',		
  	options: ['ne wↄfaase',
			  'n’agya ne wↄfaase',
			  'ne babarima',
			  'n’akonta'],
		answer: 2
  },
  {
  	question: 'Nsεm a obi ka de kyekye n’agyapade ansa na wawu yε dεn?',
		options: ['agyinae',
			  	  'nsamansew',
				  'mmara',
				  'adanse'],
		answer: 1
  },
  {
  	question: 'Bere bεn na Akanfo kyia “Afirinhyia pa”?',		
  	options: ['buronya',
			  'akwasidae',
			  'afahyε',
			  'yesu amanehunu'],
		answer: 2
  },
  {
  	question: 'Bere bεn na wↄma obi “akwaaba”. Bere a',		
  	options: ['wakoguare aba',
			  'ↄbea awo foforo',
			  'ↄrekↄ adwuma',
			  'ofi akwantu mu aba'],
		answer: 3
  },
  {
  	question: 'Sε obi retu kwan a wↄma no',		
  	options: ['due ne akwantu',
			  'mo ne akwantu',
			  'da yiye',
			  'nantew yiye'],
		answer: 3
  },
  {
  	question: 'Sε obi rekyia ↄhene na ↄkwahu ne ntama a, εkyerε dεn?',		
  	options: ['obu',
			  'onuadↄ',
			  'nimdeε',
			  'koroyε'],
		answer: 0
  },
  {
  	question: 'Akyemfo afahyε a wodi ne dεn?',		
  	options: ['Ohum',
			  'Adae kεse',
			  'Akwammↄ',
			  'Aboakyere'],
		answer: 0
  },
  {
  	question: 'Hena na ↄyan atumpan wↄ afahyε ase?',		
  	options: ['Okunini',
			  'Ↄkyerεma',
			  'Ↄbrafo',
			  'Εsεn'],
		answer: 1
  },
  {
  	question: 'Akanfo afahyε biara wↄyε eyi wↄ ase',		
  	options: ['wokum ↄwansan',
			  'wↄnoa aburoduan',
			  'wogu nsa',
			  'wↄpam nsamanfo'],
		answer: 2
  },
  {
  	question: 'Aboa bεn na Simpafo kyere de di Aboakyere afahyε?',		
  	options: ['Gyata',
			  'ↄsebↄ',
			  'ↄtorↄm',
			  'ↄnwansan'],
		answer: 3
  },
  {
  	question: 'Sε obi de Tawia a, na odi …..akyi.',		
  	options: ['Mεnsa',
			  'Ataa',
			  'Badu',
			  'Nkoroma'],
		answer: 1
  },
  {
  	question: 'Edin yi mu nea εwↄ he na εyε kradin?',		
  	options: ['Nyakoaa',
			  'Kwabena',
			  'Agyei',
			  'frεmpↄn'],
		answer: 1
  },
  {
  	question: 'Edin bεn na wↄde ma abeawa a wↄwoo no Fida?',		
  	options: ['Akua',
			  'Adwoa',
			  'Yaa',
			  'Afua'],
		answer: 3
  },
  {
  	question: 'Edin a edidi so yi mu nea εwↄ he na nnapↄnna din?',		
  	options: ['Fofie',
			  'Bεyεεdεn',
			  'Minta',
			  'Kwame'],
		answer: 0
  },
  {
  	question: 'Amanne bεn na Akanfo yε de twe mmeawa ba mpanyin mu?',		
  	options: ['asubↄ',
			  'aware',
			  'bragoru',
			  'nhyira'],
		answer: 2
  },
  {
  	question: 'sε wↄrebegoru abeawa bi bra a, hena na wodi kan kↄbↄ no amaneε?',		
  	options: ['Ↄhene',
			  'Abusuapanyin',
			  'Ↄhemmea',
			  'Sanaahene'],
		answer: 2
  },
  {
  	question: 'Sε wogu abeawa bi kyiribra a,',		
  	options: ['εma abeawa no nya dwetiri',
			  'εma abeawa no nya kunu pa',
			  'εma abeawa no ne n’abusuafo animuonyam',
			  'egu abeawa no ne n’abusuafo anim ase'],
		answer: 3
  },
  {
  	question: 'sε Akanfo ka sε “abeawa” bi abu ne nsa” a na εkyerε dεn?',		
  	options: ['Wayε bra',
			  'Ne nsa ayε tenten',
			  'Owiawia nneεma',
			  'Ne nsa ayε duru'],
		answer: 0
  },
  {
  	question: 'Din bεn na Akanfo de ma onipa a wↄawuwu dedaadaw no?',		
  	options: ['Ahotewfo',
			  'Nsamanfo',
			  'Ateasefo',
			  'abↄfo'],
		answer: 1
  },
  {
  	question: 'akanman mu sε obi wu a,',		
  	options:['wogu n’nom nsu',
		     'wↄde no to ne benkum so',
			 'wonso ne mu',
			 'wↄteatea no'],
		answer: 0
  },
  {
  	question: 'obi wu a abusuafo tumi de n’agyapade hyε…..nsa ma ↄhwε so.',		
  	options: ['Okunafo',
			  'Ne babarima',
			  'Odiadefo',
			  'N’adamfo'],
		answer: 2
  },
  {
  	question: 'Sε obi anto ne kↄn anwu a, wↄfrε no',		
  	options: ['ↄsaman',
			  'fea',
			  'obusufo',
		   	  'ↄtↄfo'],
		answer: 3
  },
  {
  	question: 'agya rekↄ no ogyaw me ade bi, wosoma no a, ↄbεkↄ nyinaa na ↄresu. Ɛyε dεn?',		
  	options: ['ↄkraman',
			  'frama',
			  'lↄre',
			  'lεtε'],
		answer: 2
  },
  {
  	question: 'Agya rekↄ no ogyaw me ade bi, wosoma no a ↄrenkↄ gye sε woapae n’atifi ansa. Ɛyε dεn?',
		options: ['Dadewa',
				  'Akoa',
			  	  'lↄre',
				  'lεtε'],
		answer: 0
  },
  {
  	question: 'Agya rekↄ no ogyaw me akongua fεfε bi sε mentena so, nanso saa akongua no obiara ntumi ntena so . Ɛyε dεn?',
		options: ['Asεsεgua',
				  'Bemu',
				  'borↄde',
				  'akentengua'],
		answer: 1
  },
  {
  	question: 'Agya rekↄ no ogyaw me akoa bi, saa akoa no sε ↄkↄm de no a, ontumi nnyina hↄ, gye sε wadidi amee, Ɛyε dεn?',
		options: ['ↄkraman',
				  'kotoku',
				  'agyinamoa',
			 	  'abofra'],
		answer: 1
  },
  {
  	question: 'Nsεnkyerεnne a obi a ↄredↄw afuw yε wↄ asaase no so ne sε',		
  	options: ['osi nkεtε',
			  'otua asafe',
			  'osum otimpↄn',
			  'osum ohwim'],
		answer: 0
  },
  {
  	question: 'Sε wuhu sε abofra bi tinwi yε mpεsεmpεsε a εkyerε sε',		
  	options: ['ↄyε ↄkↄmfo',
			  'ↄyε Badu',
			  'ↄyε abosomma',
			  'ↄyε ↄsaman'],
		answer: 2
  },
  {
  	question: 'Sε akyekyere ne nwaw wↄ ↄhene bi akyeampoma so a na εkyerε sε',		
  	options: ['ↄhene no akra boa ne nwaw ne akyekyere',
			  'ↄhene no pε asomdwoe',
			  'ↄhene no kyi nwaw ne akyekyere',
			  'ↄhene no pε nwaw ne akyekyere'],
		answer: 1
  },
  {
  	question: 'Nea edidi so yi mu nea εwↄ he na wuhu wↄ ↄhene bi akyeampoma so a, εkyerε sε ↄwↄ tumi sen ↄhene biara',
		options: ['gyata',
				  'ↄsebↄ',
				  'ↄkↄre',
				  'ↄsono'],
		answer: 0
  } 
]