

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Saa nnipa yi mu nea ɔwɔ he na ɔyɛ wo papa busuani? Wo papa',   
  	options:['Akonta',
			 'Ba',
			 'Sewaa',
			 'Wɔfa'],
  	answer: 2
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Sɛ Akanfo ka se bogya a, na ɛkyerɛ dɛn?' + '</b />' + '<br />' + 'Sɛ Akanfo ka se bogya a, na ɛkyerɛ dɛn?',	
  	options:[ 'Abusua',
			  'Adamfo',
			  'Akyiwade',
			  'Aware',],
	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Akanfoɔ wɔ gyidi sɛ onipa biara wɔ ɔkra ne sunsum. Kyerɛ din foforo a yɛde frɛ sunsum.' ,
  	options:['Abusua',
			  'Bogya',
			  'Ntɔn (Ntorɔ)',
			  'Saman',],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Kyerɛ nea enti a ɔba ne ɛna yɛ abusuafo.',  	
  	options:[ 'Wɔbɔ abusua koro',
			  'Wɔbɔ ntɔn koro',
			  'Wɔwɔ adwene koro',
			  'Wɔwɔ sunsum koro'],
  	answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Ɔkwan bɛn so na Akanfo nam bɔ agya abusua?',  	
  	options:[ 'Abusuabɔ',
			  'Awareɛ',
			  'Kunayɛ',
			  'Owu'],
  	answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Sɛ wo papa ware mmea baanu a, ɔbaa biako no yɛ wo maame dɛn?',  	
  	options: ['Abanoma',
			  'Akumaa',
			  'Kora',
			  'Sewaa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Nneyɛe a edidi so yi mu nea ɛwɔ he na ɛyɛ akyiwade? Sɛ woware….',  	
  	options: [ 'Wo Papa ba',
			   'Wo Sewaa ba',
			   'W’adamfo ba',
			   'Wo Wɔfa ba'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Dεn na ɛma obi hu sɛ ɔne ɔfoforo som agya bosom biako? Sɛ…',  	
  	options: [ 'Wɔbɔ abusua koro',
			   'Wɔn akyiwade yɛ pɛ',
			   'Wɔfiri kurow biako',
			   'Wɔyɛ bogya korɔ'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Abusua bɛn na wɔgye di sɛ wɔde ogya baa wiase?',  	
  	options: ['Aduana',
			  'Asona',
			  'Ɔyoko',
			  'Biretuo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ pa a ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Abusua bɛn na wɔne akraboa din sɛ?',  	
  	options: ['Aduana',
			  'Agona',
			  'Asona',
			  'Ɛkoɔna'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Sɛ wɔpaw ɔhene foforo a, wɔde no kɔkyerɛ ……..kan.',  	
  	options: ['Abakomahene',
			  'Amankrado',
			  'Gyaasehene',
			  'Sanaahene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Berɛ bɛn ban a woyi odiadefo?',		
  	options: ['Adaduanan du a',
			  'Da a onipa no bɛ wu no',
			  'Wɔnom sikasa wie a',
			  'Wɔyɛ dɔteyie wie a'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Abusua bɛn mu na wɔyi odiadefo firi?',  	
  	options: ['Okunafo abusua mu',
			  'Owufo no abusua mu',
			  'Owufo no papa abusua mu',
			  'Ɔhene abusua mu'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '<b>' + '<br>' + 'Sɛ okunafo bi mpɛ sɛ ɔware odiadefo a, kasakoa a ɔka ne sɛ ɔbɛware…..',		
  	options: ['Mmoatia',
			  'Nkɔtɔ ne mmɛbɛ',
			  'Ne kunu saman',
			  'Nsamanpɔw mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Sɛ obi …….ampene a, onii no ntumi nni obi adeɛ.',
  	options: ['Maame',
			  'Nana',
			  'Papa',
			  'Wɔfa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Nnipa baanu bɛn na wɔbɔ mu si ɔhene anan mu?',  	
  	options: ['Ɔhemaa ne Abusuapanin',
			  'Ɔhemaa ne Amankrado',
			  'Ɔhemaa ne Gyaasehene',
			  'Ɔhemaa ne Dabehene'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Toa asɛm yi so; Sɛ niwaa mma nsaeɛ a…..nni ade.',  	
  	options: ['Maame',
			  'Nana',
			  'Onua',
			  'Wɔfaase'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuaeɛ A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ adedi ne ahensɛm ho.' + '</b>' + '<br />' + 'Nkroma te hɔ a Badu nni ade. Eyi kyerɛ sɛ…….',  	
  	options: ['Abɔfra wɔhɔ a, ɔpanyin nni ade',
			  'Badu mma nkroma nni ade',
			  'Wɔfaase wɔhɔ a onua nni ade',
			  'ɔpanin wɔ hɔ a, abɔfra nni ade'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Aboa bɛn na Simpafo kyere de di Aboakyere afahyɛ?',  	
  	options: ['Ɔkankane',
			  'Ɔnwansane',
			  'Ɔsebɔ',
			  'Ɔtorɔmo'],
		answer: 1
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Kyerɛ botae a Akyemfo gyina so de di Ohum.',  	
  	options: ['Wɔde frɛ dɔm',
			  'Wɔde gye wɔn ani',
			  'Wɔde huro ɔkɔm',
			  'Wɔde sua amammerɛ'],
		answer: 3
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Ɛhefo na wɔdi Akwantukɛse afahyɛ?',  	
  	options: ['Akuapemfo',
			  'Bonofo',
			  'Dwaben foforofo',
			  'Kwawufo'],
		answer: 2
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Nsɛm a ɛdidi soɔ yi nea ɛwɔ he na ɛyɛ nokware?',		
  	options: ['Afahyɛ de ɛka ba',
			  'Afahyɛ kyerɛ abusua ase',
			  'Afahyɛ ma yɛhu amammerɛ',
			  'Afahyɛ sɛe berɛ kwa'],
		answer: 2
  },
  {
  	question: '<b>' + + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Sɛ obi pɛ sɛ ɔkɔhwɛ Bakatue afahyɛ a, ɛsɛ sɛ ɔkɔ…………',  	
  	options: ['Ɛdena',
			  'Akyemfo',
			  'Odwaa',
			  'Simpa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Afahyɛ bɛn na Akuapemfo di?',		
  	options: ['Akwammɔ',
			  'Apoɔ',
			  'Ohum',
			  'Odwira'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + ' ………..yɛ amammerɛ bi a ɛkyerɛ da titiriw bi a atwa mu wɔ ɔman bi abrabɔ mu.',
  	options: ['Afahyɛ',
			  'Anansesɛm',
			  'Bragoru',
			  'Nsagu'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Kontromfi se: me suman ne ……',  	
  	options: ['M’adwene',
			  'M’ani',
			  'Me nan',
			  'M’aso'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Nsɛm a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ nokware?',  	
  	options: ['Yɛde ɛbɛ kyerɛ kasakoa ase',
			  'Yɛde ɛbɛ toa ɛbɛ so',
			  'Yɛde ɛbɛ twa asɛm tenten tiawa',
			  'Yɛde ɛbɛ si kasakoa anan mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Mpanin se; Nsamanpom soduro, wo ni wu a, na ………asa.',  	
  	options: ['W’abusua',
			  'Wo nkorɔfo',
			  'Wo nnamfonom',
			  'Wo nuanom'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo afahyɛ ho.' + '</b>' + '<br />' + 'Anomaa antu a, ………',  	
  	options: ['ɔbua da',
			  'ɔgyina hɔ',
			  'ɔsi faako',
			  'ɔte hɔ'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Hwan na tete no na wɔse ɔwe aburowpata no?',		
  	options:['Aduobi Ata',
			 'Ampomfi',
			 'Asebu Amanfi',
			 'Atakora'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Tete no na wɔse Onyankopɔn bɛn nnipa. Ɛyɛɛ dɛn na ɔkɔɔ sorosoro?',		
  	options: ['Aberewa bi de wɔmma wɔɔ no',
			  'Abɔfra bi tia ne nan so',
			  'Obi hwiee nsu guu ne so',
			  'Papa bi too ɔbo bɔɔ no'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Dwom a atiefo to wɔ anasesɛm mu no wɔfrɛ no dɛn?',  	
  	options: ['Abraa braa',
			  'Aho',
			  'Mmogu',
			  'Nnwonkorɔ'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Anansesɛm botae titiriw ne sɛ…..',  	
  	options: ['Wɔde bɔ nkɔmmɔ',
			  'Wɔde gyegye mmofra agoru',
			  'Wɔde tu fo',
			  'Wɔde twa asɛm tiawa'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Anasesɛm mma mu nea ɔwɔ he na ɔyɛ anite pa ara?',  	
  	options: [' Akokɔ Antwiwaa',
			  'Ananse',
			  'Ntikuma',
			  'Ɔkraman'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Sɛ yɛka sɛ anansesɛm mfimfini a na ɛkyerɛ……',  	
  	options: ['Anansesɛm no ankasa',
			  'Anansesɛm no awiei',
			  'Mmogu',
			  'ɔfrɛ'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Sisiri mbo, tabon mbo. Adwuma bɛn mu dwom ni?',  	
  	options: ['Ahayε',
			  'Kuayε',
			  'Ntomanwene',
			  'Apokɔ'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Antoakyire yɛ mmɔfra agoru no mu biako. Kyerɛ ne botae.',  	
  	options: ['Ahoɔden',
			  'Ahwɛyie',
			  'Nnamfofa',
			  'Papayɛ'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Toa saa dwom yi so: Dedendee Kwaw, Dedendee Kwaw, Agya Bɔfoɔ ne nkwan yɛ me dɛ nanso……',
		options: ['N’ataade yɛ me tumm',
				  'Ne mpaboa yɛ me kɔɔ',
				  'Ne nam yɛ me dɛ',
				  'Ne tuo ho yɛ me tumm'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Adɛn nti na sɛ obi reyɛ adwuma a ɔto dwom? Sɛdeɛ…..',		
  	options: ['nkurɔfo bɛte ne nne',
			  'nnipa bɛhu sɛ ɔwɔ hɔ',
			  'ɔbenya aboafo',
			  'ɔrente ɔbrɛ'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo agoru ne adwuma mu nnwom ho.' + '</b>' + '<br />' + 'Nea edidi so yi mu nea ɛwɔ he na ɛnyɛ Akanfo agoru?',  	
  	options: ['Ahayɔ',
			  'Antoakyire',
			  'Asɔba',
			  'atentam'],
		answer: 0
  }
]