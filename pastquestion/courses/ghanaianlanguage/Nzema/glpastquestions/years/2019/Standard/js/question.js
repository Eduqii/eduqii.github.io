

//Array of Objects
const quiz = [
  {
  	question:'Bere bɛn na ɔkanni ka kyerɛ ne yɔnko tipɛn due ne nwunu?',
  	options:['Anwummere',
			 'Anɔpa',
			 'Ahemanakye',
			 'Awia'],
  	answer: 0
  },
  {	
  	question: 'he na Akanfo kyia no aba-a-tenase?',
	options:[ 'Akwakora a wapɔn adwuma',
			  'Akokoaa a wɔawo no foforo',
			  'Asewbea a ɔredi n’awoda',
			  'Onuabarima a ɔretu kwan'],
	answer: 1
  },
  {
  	question:'Okuafo, Adwuma o! Nnyeso no ne…….',
  	options:['Woato me',
			 'Yɛahyiahyia',
		   	 'ɛnkaa akyi ɛ',
			 'Adwuma ye'],
  	answer:4
  },
  {
  	question:'ɛhefa na Akanfo kyia due',  	
  	options:[ 'Awoda ase',
		  	  'Awaregye ase',
			  'Ayi Ase',
			  'Apontow Ase'],
  	answer: 2
  },
  {
  	question:'Din kuw yi mu biako y3 Akanfo kradin nkutoo',  	
  	options:[ 'Agyeman,ɔpɔn, Agyeibea',
			  'Nkansa, Amma, Ofori',
			  'Kwasi, Abena , Yaa',
			  'Twum, Kwame, ɔsaebea'],
  	answer: 2
  },
  {
  	question: 'Din bɛn na wode bɛma mmofra a ɛna awo wɔn koro anaa bere koro mu?',		
  	options: ['Ntaafo',
			  'Ahenkan',
			  'Piesie',
			  'Kaakyire'],
		answer: 0
  },
  {
  	question: 'Paw kuw biako a ne nyinaa yɛ apɛntɛdin.',	 
  	options: [ 'Oforiwa, Adwoa, Obimp3',
			   'Kwakye, Adoma, Nyako',
			   'Ntomago, Sumina, Asaaseasa',
			   'Nkrabrea, Frempɔn, Kwabena'],
		answer: 2
  },
  {
  	question: 'Wo papa wɔfa yɛ wo dɛn wɔ w’abusua mu?',		
  	options: [ 'Akumaa',
			   'Wɔfa',
			   'Wɔfaasewa',
			   'Nanabarima'],
		answer: 3
  },
  {
  	question: 'Akanfo mma bɔ wɔn agyanom …….',		
  	options: ['ntɔn',
			  'Mogya',
			  'Mfuakokɔ',
			  'Sora'],
		answer: 0
  },
  {
  	question: 'Hena ne wo sewaa?',		
  	options: ['papa Nuabea',
			  'Maame Wɔfa',
			  'ɛna nuabea',
			  'Akyi ba a ɔto so abien'],
		answer: 0
  },
  {
  	question: 'Akanman mu sɛ obi ka ntam a …..',		
  	options: ['Wɔde no kɔ kɔɔto',
			  'Wɔhwe no',
			  'Wɔkyere no dedua',
			  'Wɔbɔ no ka'],
		answer: 2
  },
  {
  	question: 'Bragoru yɛ amanne a Akanfo yɛ ma hefo?',
		options: ['Mmerea a wɔayae aware',
				  'Mma mmea a wɔadu mpanyin afe so',
				  'Mma mmarima a wɔrehyɛ kuayɛ ase',
				  'Asigyafo a wɔrekɔ aware ase'],
		answer: 1
  },
  {
  	question: 'Nneɛma kuw yi mu nea ɛwɔ he na Akanfo de ma asakyima mo?',		
  	options: ['Hyirew, Adwerɛ, ɔkɔben',
			  'Birisi, adaka, ɔtɔ',
			  'Ayitama, Nkesua, Ntwoma',
			  'ɔtɔ, Nkesua, Sonwere'],
		answer: 3
  },
  {
  	question: 'Akanfo awaregye mu no, hena na ogye danta no?',		
  	options: ['Agya',
			  'ɛna',
			  'Wɔfa',
			  'Akumaa'],
		answer: 0
  },
  {
  	question: 'Din bɛn na wɔde ma sika a okunu de ma ne yere no?',		
  	options: ['Ti Ade',
			  'Danta',
			  'Akonta Sekan',
			  'Ti Nsa'],
		answer: 0
  },
  {
  	question: 'Awaregyae mu no, hena na ogu hyirew?',		options: [' timber',
		 'Asew Barima',
		 'Akonta',
		 'Akummaa',
		 'ɔkorafo'],
		answer: 2
  },
  {
  	question: 'Abusuakuw Agona akraboa ne ……',		
  	options: ['ɔkraman',
			  'Akoo',
			  'Ampan',
			  'Akorɔma'],
		answer: 1
  },
  {
  	question: 'Abusua bɛn na wɔn akraboa ne Opete?',		
  	options: ['Asenefo',
			  'Aduanafo',
			  'Asakyirifo',
			  'Agonafo'],
		answer: 2
  },
  {
  	question: 'Abusua bɛn na wɔn din ne wɔn akraboa no yɛ pɛ?',		
  	options: ['ɔyoko',
			  'ɛkoɔna',
			  'Aduana',
			  'Asona'],
		answer: 1
  },
  {
  	question: 'Akanfo nnabu mu no, din foforo bɛn na wɔde ma nnawɔtwe asia?',		
  	options: ['Adaduosia',
			  'Adaekɛse',
			  'Adaduɔwɔtwe',
			  'Adaduanan'],
		answer: 3
  },
  {
  	question: 'Dapaa yɛ da a edi ………. anim.',		
  	options: ['Adae',
			  'Odwira',
			  'Afahyɛ',
			  'Abisa'],
		answer: 0
  },
  {
  	question: 'Akanfo Asranna mu no, Adae kuw no yɛ ahe?',		
  	options: ['Abiɛsa',
			  'Abien',
			  'Asia',
			  'Anan'],
		answer: 1
  },
  {
  	question: 'Akuapemfo afahyɛ titiriw ne ……..',		
  	options: ['Odwira',
			  'Aboakyere',
			  'Kundum',
			  'Ohum'],
		answer: 0
  },
  {
  	question: 'Nea edidi so yi mu biako nyɛ afahyɛ ho mfaso.',		options: ['War of 1901',
		 'Abusua tontɔn wɔn nsaase',
		 'Ahemfo ne wɔn manfo bɔ gua',
		 'ɔmanfo sua wɔn amammerɛ',
		 'ɛde akobɔfo ba fie bɛsra abusuafo'],
		answer: 0
  },
  {
  	question: 'Ade titiriw pa ara a Akanfo hwɛ so paw ɔhene ne sɛ, ɛsɛ sɛ onipa ko no yɛ ……… kron.',
		options: ['ɔdehye',
			 	  'ɔyamuyefo ne abakan',
				  'osikani',
				  'patapaa ne akokoduru'],
		answer: 0
  },
  {
  	question: 'Dɛn na ɔhene foforo de suae kyerɛ ne manfo?',		
  	options: ['Atumpan',
			  'Afoa',
			  'ɔdawuru',
			  'Mmena'],
		answer: 1
  },
  {
  	question: 'Sanaahene adwuma ne dɛn wɔ ahemfi?',		
  	options: ['ɔhw3 sikasɛm so',
			  'ɔboaboa dɔm ano',
			  'Odi Kyeame',
			  'ɔhwɛ aduannoa so'],
		answer: 0
  },
  {
  	question: 'Agyarekɔ no, ogyaw me akwakoraa bi; ɔda dan mu a, na ne bogyesɛ gu adiwo. Ɛyɛ dɛn?',
		options: ['Nhwiren a apow',
			  	  'Dɔte a egu borɔde ase',
				  'Mframa a ɛhyɛ toa mu',
				  'Mukaase Wusiw'],
		answer: 0
  },
  {
  	question: 'Kwasi se, agya ade bi wɔ hɔ, ɛnyɛ dɛ nanso ɛka wo nsa pɛ na woatafere. Ɛyɛ ……',
		options: ['ɛwo',
			  	  'gyasramma',
				  'asikiretɛ',
				  'adesaa'],
		answer: 1
  },
  {
  	question: 'Akanfo anansesɛm nhyehyɛe no yɛ …….',		
  	options:['mfiase, mfinimfini, awiei',
			 'Awieim, mfinimfini, mfiase',
			 'mfinimfini ne mfiase nkutoo',
			 'mfinimfini, awiei, mfiase'],
		answer: 0
  },
  {
  	question: 'Anansesɛm mu nnwom gu ahorow abien, Anansesɛm mu nnwom ne …..',		
  	options: ['Mmoguo',
			  'Bɔsrɛmuka',
			  'Mede soa asiamasi',
			  'mfeafeaho'],
		answer: 0
  },
  {
  	question: 'Hena na Akanfo bɔ no mmran; Ototurobonsu?',		
  	options: ['ɔhene a ɔte agua so',
			  'Onyankopɔn a ɔbɔɔ wiase',
			  'Kwaku Ananse ne Ntikuma',
			  'ɔbɔmmɔfo a wakum ɔsono'],
		answer: 1
  },
  {
  	question: 'Akanfo din Antwi mmran ne dɛn?',		
  	options: ['Apea Kubi',
			  'Nyasɛmhwɛ',
			  'Bediako',
			  'Bosiako'],
		answer: 3
  },
  {
  	question: 'Me papa taa bɔ me nua Kwame mmran se …….',		
  	options: ['Okyini',
			  'Atoapoma',
			  'ɔdaaku',
			  'okoto'],
		answer: 1
  },
  {
  	question: 'Toa ɛbɛ yi so: Afiri huan a, …….',		
  	options: ['ɛwɔ wuram',
			  'ɛkɔ ne nkyi',
			  'eyi aseredowa',
			  'ɛba n’anim'],
		answer: 1
  },
  {
  	question: 'Abofra no ka kyerɛɛ n’adamfo no sɛ: “Woankɔ bi a ….”',		
  	options: ['Wuse yɛankɔ',
			  'yɛbɛbɔ nkɔmmɔ',
			  'wobɛtena fie',
			  'Wo papa de ɔbae'],
		answer: 0
  },
  {
  	question: 'Tete nsaano dwuma mu no, dɛn na ɔtomfo ma ɔmanfo?',		
  	options: ['ɔsosɔw, asomukaa, nkyene',
			  'kente, mpɛtea, asaawa',
			  'Asɔw, nkrante, ɔsosow',
			  'Borɛɔde,Asɔw, ntɔrewa'],
		answer: 2
  },
  {
  	question: 'Nneɛma kuw yi mu nea ɛwɔ he na yenya fi okuafo hɔ?',		
  	options: ['Ahwerew, pɛtea, amankani',
			  'Bayerɛ, kɔnmuade, ntama',
			  'Bankye, atosode, borɔde',
			  'Nkontommire, kente, kuku'],
		answer: 2
  },
  {
  	question: 'Agoru yi de mmewa nkutoo na wodi',		
  	options: ['Mpempenaa',
			  'Ahintahinta',
			  'Anansesɛm',
			  'Asɔba'],
		answer: 3
  },
  {
  	question: 'Nea ɛwɔ he na ɛnka mfaso a mmofra nya wɔ agorudi mu?',		
  	options: ['Anigye',
			  'Ahantan',
			  'Apɔwmuden',
			  'Ahosɛpaw'],
		answer: 1
  } 
]