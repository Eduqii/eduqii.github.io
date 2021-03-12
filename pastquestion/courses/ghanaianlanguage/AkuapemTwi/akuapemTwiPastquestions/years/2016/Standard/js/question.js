

//Array of Objects
const quiz = [
  {
  	question:'Nkyia de dɛn na ɛba obi so?',
   	options:['Awerɛhow ne animka',
			 'Osu ne menaasepɔw',
			 'Ahosɛpɛw, obu ne nidi',
			 'Nyansa ne nitan'],
  	answer: 2
  },
  {
  	question:'Ɛhefa na yɛte nkyia “hyɛ den?”',
  	options:['Ayiase',
			 'Awaregye ase',
		  	 'Nkurobɔ mu',
			 'Ayeforohyia ase'],
  	answer: 0
  },
  {	
  	question: 'Akanfo taa kyia akokoaa a wɔawo no foforo',
	options:[ 'Ayikoo ne awo',
			  'Aba-a-tena-ase',
			  'Kosɛkosɛ',
			  'Nkyerɛ oo'],
	answer: 1
  },
  {
  	question:'Aware mu no, hefo na wogu ɔbea no hyirew?',  	
  	options:[ 'Adɔfonom',
			  'Nsewnom',
			  'Nkontanom',
			  'Nkumaafo'],
  	answer: 3
  },
  {
  	question:'Sɛ ɔbea bi kunu ka baabi na owufo no nuabarima ware no a, ɛyɛ……',
  	options:[ 'Ayɛte',
			  'Kunaware',
		  	  'Asiwa',
			  'Mpenaware'],
  	answer: 1
  },
  {
  	question: 'Abofra a ne na dii awommawu ansa na wɔrewo no no yɛ…..',		
  	options: ['Ankonam',
			  'Kɔsanba',
			  'Ɔdefo',
			  'Oduefo'],
		answer: 1
  },
  {
  	question: 'Din ahorow yi mu nea ɛwɔ he na ɛyɛ apɛntɛdin?',	 
  	options: [ 'Kaakyire',
			   'Asaseasa',
			   'Ahenkan',
			   'Piesie'],
		answer: 1
  },
  {
  	question: 'Duku yɛ abofra a ɔtɔ so ……. wɔ awo ntoatoaso mu.',		
  	options: [ 'dunan',
			   'dunum',
			   'dubiako',
			   'du'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n' + '</b>' +  'Akanfo Kasadwini gu ahorow ahe?',		
  	options: ['Anum',
			  'Anan',
			  'Abiɛsa',
			  'Abien'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n' + '</b>' + 'Nea edidi so yi mu biako yɛ Anom Kasadwini.',		
  	options: ['Anwensɛm',
			  'Abasɛm',
			  'Ahwɛgoru',
			  'Anansesɛm'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n' + '</b>' + 'Nea ɛwɔ he na ɛyɛ Akyerɛw Kasadwini?',		
  	options: ['Amoma',
			  'Nsaguo',
			  'Anwensɛm',
			  'Apae'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo kasadwini ho.\n' + '</b>' + 'Anom Kasadwini su biako ne sɛ ….',
		options: ['ɛyɛ ɔman no nyinaa dea',
			 	  'ɛwɔ ɔkyerɛwfo pɔtee',
				  'enni nhyehyɛe pɔtee',
				  'enni ɔyɛfo ne atiefo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n' + '</b>' + 'Akanfo gyidi ne sɛ ntɔn sunsum no fi …….',
		options: ['Ɛna',
				  'Wɔfa',
				  'Agya',
				  'Abusuapanyin'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n' + '</b>' + 'Abusuakuw bɛn na wɔn akraboa no ara yɛ wɔn din?',		
  	options: ['Aduana',
			  'Ɛkoɔna',
			  'Agona',
			  'Asakyiri'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n' + '</b>' + 'Abusuakuw bɛn na wɔwɔ akraboa abien?',		
  	options: ['Asona',
			  'Ɛkoɔna',
			  'Agona',
			  'Aduana'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n' + '</b>' + ' ……….. yɛ Agona abusuakuw no akraboa.',		
  	options: ['Kwaakwaadabi',
			  'Akoroma',
			  'Akoo',
			  'Ɛkoɔ'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo mmusuakuw ne ntɔn ho.\n' + '</b>' + 'Akanman mu, hena ne abusua no nyinaa ti?',		
  	options: ['Abusuapanyin',
				  'Ayipasohene',
				  'Nkwaankwaahene',
			 	  'Adadifo'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.' + '</b>' + 'Ade titiriw bɛn na Akamfo hwɛ ansa na wɔapaw ɔhene?',		
  	options: ['Onipa tenten bran',
			  'Ɛsɛ sɛ ɔyɛ ɔdehye kronn',
			  'Ohiani a ɔwɔ mma bebree',
			  'Obi a otumi di akakabens?m'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.' + '</b>' + 'Sɛ ɔhene tu kwan a, ɔde ɔman no gyaw hena?', 		
  	options: ['Safohene',
			  'Ɔkyeame',
			  'Kurontihene',
			  'Dabehene'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.' + '</b>' + '………. na ɔhwɛ ɔhene ne ɔmamfo sika so wɔ ahemfi.',		
  	options: ['Gyaasehene',
			  'Sodoohene',
			  'Mmerantehene',
			  'Sannaahene'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.' + '</b>' + 'Sɛ ɔmamfo hyia wɔ aguabɔ ase a, hena na ogu nsa?',		
  	options: ['Ɔkyeame',
			  'Kurontihene',
			  'Safohene',
			  'Dabehene'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo ahenni ne ahemfi nhyehyɛe ho.' + '</b>' + 'Sɛ Akanfo reyi apae a, hena na wodi kan bɔ ne din?',		
  	options: ['Asase Yaa',
			  'Onyankopɔn',
			  'Nsamanfo',
			  'Ateasefo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Nneɛma kuw yi mu nea ɛwɔ he na okuafo de adwuma?',
		options: ['Ɔsosɔw, twitae, asadua',
				  'Asɔw, asaa, peaw',
			 	  'Nkrante, ɔsosɔw, asɔw',
				  'Asadua, asɔw, kɔtɔkorɔ'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Wokɔ ɔtomfo adwuma mu a, wubenya ….. atɔ.',		
  	options: ['kɛntɛ ne nkrante',
			  'peaw ne adwiniasa',
			  'twitae ne bommo',
			  'ɔsosɔw ne asɔw'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Dwom “Kurohinko” fa adwuma bɛn ho?',		
  	options: ['Nkɔbɔ',
			  'Kentenwene',
			  'Atono',
			  'Ahayɔ'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Hena na ɔnto dwom wɔ n’adwumayɛ mu?',		
  	options: ['Ɔbɔmmɔfo',
			  'Okuafo',
			  'Kentenwenefo',
			  'Ɔtomfo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Toa ɛbɛ yi so: “Otuo tow a …..”',		
  	options: ['esi ɔbarima bo',
			  'ɛkanyan ɔhene ma osuae',
			  'nkurɔfo bɔ hu',
			  'mmea konhintaw'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Mpanyin se: “Ɛkaa akyekyere ne nnaw nko a anka ……”',		
  	options: ['mmea bɛkɔ afum daa',
			  'mmofra bɛkɔ atwee da biara',
			  'ɔbɔmmɔfo bɛda kɔm',
			  'otuo rentow wuram da'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Yaw Mɛnsa buu n’adamfo no bɛ sɛ: “ Ɔbaakofo nsa…..”',   		
  	options: ['ntumi nguare ne ho',
			  'tumi dɔw n’afum',
			  'nso n’abusuafo nyinaa so',
			  'nso nyame ani kata'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Kasakoa yi ase ne dɛn? Adwuma no dɔɔso enti ma wo nsa so.',
		options:['Yɛ no ntɛmntɛm',
				 'Pagyaw wo nsa kɔ soro',
				 'Bɔ wo nsam ɔhare so',
				 'Ka wo nsa abien bɔ mu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, mmɛ ne kasakoa ho.\n' + '</b>' + 'Mprempren de, nna amee me nenabarima.',		
  	options: [' Ayɛ aberantewa koraa',
			  'Ayɛ basaa',
			  'Anyin papaapa',
			  'Ntumi nkasa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n' + '</b>' + 'Ɔhene bɛn na otumi de ɛsono si ne bamkyinii so?',		
  	options: ['Abɔntendɔmhene',
			  'Kurontihene',
			  'Guantoahene',
			  'Ɔmanhene'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n' + '</b>' + 'Ɔhene a ……..si n’akyeampomaa so no yɛ ɔsonani.',		
  	options: ['ɔkraman',
			  'kwaakwaadabi',
			  'akoroma',
			  'akoo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n' + '</b>' + 'Kurow a Akyekyere ne nwaw da wɔn hene asɛsɛgua ho kyerɛ sɛ …….',
		options: ['wɔnka mmara',
			  	  'hwee nyɛ wɔn asɛm',
				  'wɔpɛ asomdwoe',
				  'mmoa abien no yɛ nam a wɔpɛ yiye.'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n' + '</b>' + 'Agyarekɔ, ogyaa me asraafo ɔha a wɔn nyinaa abɔso yɛ biako. Ɛyɛ dɛn?',		
  	options: ['Ɔprae',
			  'Muka',
			  'Asesawura',
			  'Asomurofi'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo tete nnwuma, nsɛnkyerɛnne a ɛkasa ne Agyarekɔ ho.\n' + '</b>' + 'Agyarekɔ, ogyaa me anuanom baanu nanso obiara nhu ne yɔnko anim. Ɛyɛ onipa',
		options: ['Nansoaa du',
				  'Nsa abien',
			 	  'Nan abien',
				  'Nniwa abien'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + '“Ɔrebɔ ne dade so kyankyan” yɛ dwom a ɛfa hena ho?',		
  	options: ['Ɔtomfo',
			  'Ɔbɔmmɔfo',
			  'ɔdansifo',
			  'okuafo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + '“…………” yɛ dwom a ɛfa adɔw ho.',		
  	options: ['Ayikoo, anyaado',
			  'Kɔtɔkɔ sarewa, gyansarewa',
			  'Kurohinko, kurohinko na ɛyɛ me dɛ',
			  'Adonko, fa me kɔ oo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + 'Dwom bɛn na mmofra de di abosi agoru?',		
  	options: ['Mpempenaa, nana aa…..',
			  'Obi ba o, yee yei!',
			  'Sansan koroma, wo ni awuo oo',
			  'Asɔba, yee yei, asɔba'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D no mu biako a eye pa ara na ɛfa Akanfo agoru ne nnwuma nnwom ho.\n' + '</b>' + 'Mpempenaa agodi mu no, mmofra to dwom',		
  	options: ['kɔtɔkɔ sarewa, gyansarewa',
			  'asɔba, bɛtɔ mu',
			  'oni wu o.',
			  'sii, sii, sii, sii dadako o.'],
		answer: 3
  } 
]