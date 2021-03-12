

//Array of Objects
const quiz = [
  {
  	question:'Nkyia Adwuma, adwuma o, nnyeso ne?',
  	options:['Adwuma asa',
			 'Adwuma da ase',
			 'Adwuma ye',
			 'Adwuma yε den'],
  	answer: 2
  },
  {	
  	question: 'Wote nkyia hyε den a na woadu hefa?',
	options:[ 'Ayiase',
			  'Awaregye ase',
			  'Nnyedua ase',
			  'Nsↄree so'],
	answer: 0
  },
  {
  	question:'Sε obi ma wo aduan na wudidi wie a woma no…..',
  	options:['Nkwan pa yε dε',
			 'Tirinkwa',
			 'Aguare',
		   	 'Amo'],
  	answer: 3
  },
  {
  	question:'Akanman mu, hena na ↄde ↄbea ma aware?',  	
  	options:[ 'Ne wↄfa',
			  'N’asew',
			  'N’akumaa',
			  'N’agya'],
  	answer: 3
  },
  {
  	question:'Mpanyin se, wokↄ aware a, …..',  	
  	options:[ 'Nantew yiye',
			  'Bisa',
			  'Nkyerεkyerε wo ho',
			  'Nkra w’atamfo'],
  	answer: 1
  },
  {
  	question: 'Ansa na aware begu no, baguafo no ma awarefo no mu biara …….',		
  	options: ['Di adanse',
			  'Bↄ ne nkuro',
			  'bↄ ne ho aguaa',
			  'bↄ n’awofonom kↄkↄ'],
		answer: 1
  },
  {
  	question: 'Tete hↄ, amanne kwan so no, abofra di nna ahe a, na wↄto no din?',	 
  	options: [ 'nnawↄtwe',
			   'asram nsia',
			   'adaduanan',
			   'nnanson'],
		answer: 0
  },
  {
  	question: 'Nsu ne nsa a wↄde ka akokoaa ano no kyerε dεn?',		
  	options: [ 'Ahomaso',
			   'Ayamye',
			   'Ahosεpεw',
			   'Nokwaredi'],
		answer: 3
  },
  {
  	question: 'Meka kyerεε m’adamfo no se, me papa nuabea pinyin no yε …. wↄ Akanfo abusuabↄ mu.',
		options: ['M’akonta',
				  'Me nanabea',
				  'Me sewaa',
				  'M’agya kumaa'],
		answer: 2
  },
  {
  	question: 'Akanman mu, hefo na εwↄ abusua kumaa no mu?',		
  	options: ['Agya, εna ne mma',
			  'Agya, wↄfa ne sewaa',
			  'wↄfa, nanabarima',
			  'akonta, sewaa ne mma'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Paw nea εyε din nnidiso pa wↄ kuw yi mu.',		
  	options: ['Piesie, Adusa, Manu',
			  'Manu, Mεnsa, Botwe',
			  'Nkoroma, Badu, Duku',
			  'Anane, Ason, Nsia'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Adεn na wↄfrε no Tawia? Efisε odi ………akyi.',
		options: ['Nyankomago',
				  'atuakↄasan',
				  'ntaafo',
				  'brenyaↃ'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+'Adεn nti na εyε akyiwade sε obi didi a, ↄbεto dwom?',		
  	options: ['Nkwan bεsↄ n’ataade mu',
			  'ↄremmee ntεm',
			  'obedi aduan no nyinaa',
			  'aduan no bεtram no'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akanfo akyiwade biako nso ne sε',		
  	options: ['anadwo wↄmpra dan mu',
			  'wudidi a, mma wo nu abo',
			  'anↄpa wonkyia nnanfo',
			  'wokↄda a, nkra obiara'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Akan mmusuakuw no mu nea n’akraboa yε Akoo ne ……',		
  	options: ['Ɛkoↄna',
			  'Agona',
			  'Asakyiri',
			  'Asona'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Abusuakuw bεn na wↄne akraboa din yε pε?',		
  	options: ['Ↄyokoↄ',
			  'Aseneε',
			  'Aduana',
			  'Ɛkoↄna'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Abusuakuw bεn na wↄwↄ akraboa ahorow abien?',		
  	options: ['Aduana',
			  'Asakyiri',
			  'Agona',
			  'Asona'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Biretufo akraboa ne……..',		
  	options: ['Ↄsebↄ',
			  'Agyinamoa',
			  'akorↄma',
			  'kↄkↄsakyi'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Toa εbε yi so: gua bεba a, ….',
		options: ['Ɛbεba ↄkyena',
			  	  'Na εwↄ awiei',
				  'Efi anↄpa',
				  'Εyε aguatↄnda'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+'Ayↄnkoyↄnko nti na ↄkↄtↄ annya ti kyerε dεn?',		
  	options: ['Ayamye ntraso a εho amma mfaso',
			  'atirimↄden a εma tipae',
			  'patapaasεm a yεde pam atamfo',
			  'ahosεpεw a εma nkuranhyε'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Ti koro nkↄ agyina kyerε sε ……',		
  	options: ['asεm ba a, ↄbaakofo na ↄka ne nyinaa',
			  'asεm ba a, nnipa bebree na wↄdwene ho na εnyε ↄbaakofo',
			  'εyε ne nkutoo asεm enti obiara nka bi',
			  'asεm no mfa me ho koraa'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Agya rekↄ, ogyaw me akoa bi. Ↄba wo fie a woma no agua tena so a, ↄrekↄ a, na wafa agua no atare ne ho. Ɛyε dεn?',
		options: ['ↄhↄho',
				  'nkrante',
				  'abε bemu',
		 		  'aburow bεtεm'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Agya ade bi wↄ hↄ: da biara ↄte hↄ a, wasi ne ti ase ma ne ti kyerε fam nso εnhaw no koraa. Ɛyε dεn?',
		options: ['Okisi',
				  'Akoo',
				  'akↄkono',
				  'ampan'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n' + 'Akanfo frε ↄsram a εtↄ so ason no dεn?',		
  	options: ['Ↄpεpↄn',
			  'Ↄsanaa',
			  'Ɛbↄ',
			  'Kitawonsa'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo mmε, agya rekↄ ne asranna ho\n\n'+ 'Asram kuw yi mu biara kura nnafua aduasa pεpεεpε',		
  	options: ['Ɛbↄ, Ↄsanaa, Ogyefuo',
			  'Ahinime, Ɛbↄ, Kitawonsa',
			  'Oforisuo, Ayεwohomumↄ, Ɛbↄ',
			  'Ↄpεnimaa, Ↄpεpↄn, Ↄbεnem'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n' + 'Da a edi Awukudae anim no, Akanfo frε no dεn?',		
  	options: ['Akwasidae',
			  'Benada Dapaa',
			  'Memeneda Dapaa',
			  'Fida Fofie'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Nnawↄtwe ahe na εwↄ Akanfo adaduanan mu?',		
  	options: ['Asia',
			  'Ason',
			  'Awotwe',
			  'Akron'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Afahyε bere mu dεn na mpanyimfo yε ma nsamanfo?',		
  	options: ['wↄkↄkyε wↄn nsa',
			  'wogu wↄn nsa',
			  'wↄkↄda wↄn ase',
			  'wↄkↄse wↄn ayi'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Akanfo bεn na wodi Ohum afahyε no?',		
  	options: ['mfantefo',
			  'asantefo',
			  'akyemfo',
			  'efutufo'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Bakatue yε hefo afahyε wↄ ↄman yi mu?',		
  	options:['Oguaafo',
			 'Anomabofo',
			 'Ɛdenafo',
			 'Adwumakofo'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Tete hↄ no, sε ↄman bi rekↄ ↄko a, ↄhene bεn na odi dↄm no nyinaa anim?',		
  	options: ['kyidↄmhene',
			  'sanaahene',
			  'nifahene',
			  'adↄntehene'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Sε wↄrepaw obi adi hene a, hena na odi akoten wↄ osiahenefo no mu?',		
  	options: ['Kurontihene',
			  'Ↄhemmea',
			  'nkↄsohene',
			  'ntakrahene'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Ↄhene bεkↄ aguabↄ ase a, hena na osiesie ne ho?',		
  	options: ['Sanaahene',
			  'Sodoofo',
			  'Dabehene',
			  'Ntakrahene'],
		answer: 2
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n'+ 'Akanman mu sε wↄredi nnipa baanu asεm a, obiara fa ….',		
  	options: ['Nnamfo',
			  'Nsewnom',
			  'Atemmufo',
			  'Adansefo'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo nnabu, afahyε, ahensεm ne asεnni ho.\n\n' + 'Hena na ↄpata nea wadi bem wↄ asεnni awiei?',		
  	options: ['Nea wadi fↄ no',
			  'Nea n’asεm yε dε no',
			  'Baguafo no kyeame',
			  'Adansefo no mu biako'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Nnwuma a edidi so yi mu nea εwↄ he na wↄnto dwom wmu koraa?',
		options: ['Atono',
			   	  'Kentenwene',
			 	  'Nkukunwene',
			      'Ahayε'],
		answer: 3
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n'+ 'Okuafo ma yεn borↄde a, dεn na yenya fo ↄbↄmmↄfo hↄ?',		
  	options: ['Atosode',
			  'Hanam',
			  'ↄsosↄw',
			  'ntampehama'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n\n' + 'Agoru yi de, mmarimaa nkutoo na wodi Akanman mu',		
  	options: ['ampe',
			  'ntεwsi',
			  'abosi',
			  'antoakyire'],
		answer: 1
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Mmofra agoru bεn mu na wↄto dwom “sansan korↄma, wo ni awu o?',		
  	options: ['abosi',
			  'mpepenaa',
			  'asↄba',
			  'tomato'],
		answer: 0
  },
  {
  	question: 'Yi mmuae A-D yi mu biako a eye na εfa Akanfo awo nnidiso, akyiwade ne mmusuakuw ho.\n'+ 'Akanfo din Antwi mmran ne',		
  	options: ['Ampem',
			  'Boasiako',
			  'Agyeman',
			  'Guakoro'],
		answer: 1
  } 
]