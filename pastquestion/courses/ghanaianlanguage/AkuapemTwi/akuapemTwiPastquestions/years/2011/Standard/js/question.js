

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Akanfo gye di sɛ ɛna ma ne ba mogya na agya ma no……..',
    options:['Sika',
			 'Abusua',
			 'Aduan',
			 'ɔkra'],
  	answer: 3
  },
  {	
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Edin a wɔfrɛ Ɛna mogya a ɔde ma ne ba ne…….',
	options:[ 'Ahoɔfɛ',
			  'ntoↄ (Ntɔn)',
			  'Saman',
			  'Abusua'],
	answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Sɛ woyɛ ɔbarima a, wo nuabea ba yɛ wo………',
  	options:['Ba',
			 'Wɔfaase',
			 'Nana',
			 'Nanakansowa',],
  	answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Abusua ne ntorↄ (ntɔn) fi nnipa kuw bɛn hɔ?',  	
  	options:[ 'Maame ne nena',
			  'Papa ne nena',
			  'Maame ne papa',
			  'Maame ne abusuapanin'],
  	answer:2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Kyerɛ nea enti a ɛna ne mma da nso firi agya ho.',  	
  	options:[ 'Wɔn na wɔfiri kurow no mu',
		  	  'Wɔn na daa wɔte fie',
			  'Wɔn na wɔbɔ abusua biako',
			  'Wɔn na wɔdi nkɔmmɔ'],
  	answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Suban a ɔbea a ɔwɔ abadae da no adi no wɔfrɛ no',		
  	options: ['ahantan',
			  'anitew',
			  'tema',
			  'obu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo abusuabɔ ho.' + '</b>' + '<br />' + 'Agya, Ɛna ne mma, hena ne ofi no ti?',	 
  	options: [ 'Agya',
			   'Mma',
			   'Ɛna',
			   'mmofra'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Wɔfrɛ Akanfo adedi sɛ…..',		
  	options: [ 'Papa adedi',
			   'Nana adedi',
			   'Sewaa adedi',
			   'Wɔfa adedi'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Saa nnipa yi ase nsae a wɔfaaseɛ nni ade',		
  	options: ['nniwaa mma',
			  'papa mma',
			  'nena mma',
			  'wɔfa mma'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + '“Agya bi wu a, agya bi te ase” yɛ kasa a wɔka kyerɛ……',		
  	options: ['Akunafo',
			  'Nyisiaa',
			  'Odiadefo',
			  'Abusuapanyin'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Kasa a ɛdi akyiri a obi ka ansa na wawu na Akanfoɔ frɛ no……',		
  	options: ['Nsamansew',
			  'Awugyamma',
			  'Kasaprɛko',
			  'Nkwa nsɛm'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Berɛ bɛn na abusuafo hyia bue owufo adaka so?',
		options: ['Afe',
			  	  'ↄsram',
				  'Adaduanan',
				  'Nnawɔtwe'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Duaba bɛn na Akanfo de gyina hɔ ma onipahunu bi a wadi ade?',		
  	options: ['Kwadu',
			  'Amango',
			  'Paya',
			  'Borɔferɛ'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo wu ne adedi ho.' + '</b>' + '<br>' + 'Sɛ okunafo bi mpɛ sɛ ɔware odiadefo a, kasakoa a ɔka ne sɛ ɔbɛware…..',		
  	options: ['Mmoatia',
			  'Nkɔtɔ ne mmɛbɛ',
			  'Ne kunu saman',
			  'Nsamanpɔw mu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Afahyɛ yi mu nea ɛwɔ he na wɔde hurow kɔm',		
  	options: ['Akwambɔ',
			  'Aboakyere',
			  'Ohum',
			  'Kundum'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Bakatue yɛ nnipa bɛn afahyɛ?',		
  	options: ['Adaafo',
			  'Ɛdenafo',
			  'Akyemfo',
			  'Simpafo'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Kyerɛ kurow a edidi so yi mu biako a wɔdi “Adae-kɛse” afahyɛ.',		
  	options: ['Adaa',
			  'Kumase',
			  'Kyebi',
			  'Simpa'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Afahyɛ ho mfaso titiriw biako ne sɛ……..',		
  	options: ['ɛde akobɔfoɔ ba fie',
			  'yɛkye akorɔmfoɔ',
			  'yetu ahemfo adeɛ so',
			  'ede ntↄkwaw ba'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Kyerɛ nea ɛyɛ nokware wɔ afahyɛ ne nkurow a edidi so yi mu.',		
  	options: ['Keta-Aboakyere',
			  'Kumasi –Fetu',
			  'Somanya –Odwira',
			  'Axim- Kundum'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Aboa bɛn na Efutufo kyere no wɔ afahyɛ berɛ?',		
  	options: ['Ɔtwe',
			  'Ɔnwansan',
			  'Ɔtorɔm',
			  'Nantwi'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a eye na ɛfa Akanfo afahyɛ ho' + '</b>' + '<br />' + 'Nsɛm a edidi so yi mu nea ɛwɔ he na ɛnyɛ nokware wɔ afahyɛ ho?',		
  	options: ['Afahyɛ de anigye ba',
			  'Afahyɛ sɛe mmere',
			  'Akobɔfo ba fie',
			  'Nkyirimma sua amammerɛ'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + ' Asram dodow ahe na yɛnya wɔ afirihyia biako mu?',
		options: ['Dummien',
				  'Dubiako',
				  'Dunkron',
				  'Dummiɛnsa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Bosome a ɛtɔ so dumienu no din de…..',		
  	options: ['Ogyefuo',
			  'Ɔbɛnem',
			  'Ɔpɛpɔn',
			  'Ɔpɛnimaa'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Ↄsram bɛn mu na Simpafo kyere aboa?',
		options: ['Kɔtɔnimma',
				  'Ayɛwohomumɔ',
			   	  'Ɔsanaa',
			 	  'Obubuo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Ↄsram yi kura nnafua aduasa.',		
  	options: ['Ɛbɔ',
			  'Kitawonsa',
			  'Ogyefuo',
			  'Ahinime'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Ↄsram bɛn na Akristofo di Yesu awoda?',
		options: ['Ogyefuo',
				  'Ɔpɛpɔn',
				  'Ɔpɛnimaa',
				  'Ɔsannaa'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Kyerɛ amanne titiriw a Akanfoɔ di no dabɔne biara.',		
  	options: ['wogu nsa',
			  'wɔyɛ ayi',
			  'wɔyɛ asiei',
			  'wobu sika ho nkonta'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na a ɛfa Akanfo nnabu ho.' + '</b>' + '<br />' + 'Hyehyɛ asram a edidi so yi nnidiso-nnidiso',		
  	options: ['Ɔpɛpɔn, Ɔpɛnimaa, Ogyefuo',
			  'Ɔpɛnimaa, Ɔpɛpɔn, Ogyefuo',
			  'Ogyefuo, Ɔpɛnimaa, Ɔpɛpɔn',
			  'Ɔpɛpɔn, Ɔgyefuo, Ɔbɛnem'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + 'Toa bɛ yi so “Ɛkaa nwa ne akyekyere nko ara a anka….”',		
  	options: ['otuo rento wɔ kwae mu',
			  'aboa biara nkye ne yɔnko',
			  'abɔfo biara renkɔ wura mu',
			  'nnipa nnya nam nwe'],
		answer: 0
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + 'Mpaninfo bu bɛ sɛ, “Borɔfere a ɛyɛ dɛ na……”',
		options:['mmɔfra di',
				 'yɛtɔn wɔ gua so',
				 'nnomaa di',
				 'abaa da ase'],
		answer: 3
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + '“Sɛ atuduro asa a, na ɛnyɛ…..”',
		options: ['ahemfi',
				  'Akowua ntoa mu',
				  'Ɔbɔmmɔfo kotoku mu',
				  'Asafo mma kotoku mu'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + '“Anomaa nua ne nea ɔne no da dua koro” kyerɛ Akanfo……',		
  	options: ['ayɔnkofa',
			  'ofi tena',
			  'abusuabɔ',
			  'ntɔn bɔ'],
		answer: 2
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + 'Ɛbɛ, “baanu so a emmia” kyerɛ',		
  	options: ['pεsεmenkomenya',
			  'Nkabom',
			  'Asisi',
			  'asondwoe'],
		answer: 1
  },
  {
  	question: '<b>'+ 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ho.' + '</b>' + '<br />' + 'Ɔkɔtɔ nwo anomaa kyerɛ sɛ obi suban sɛ…….',		
  	options: ['N’awofo',
			  'N’adamfo',
			  'Ne nua',
			  'Ne sewaa'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Eyi yɛ anwonwade ahorow no mu biako a Ɔkɔmfo Anɔkye yɛe?',		
  	options: ['Ɔde afena wɔɔ fam ma ɛkaa hɔ',
			  'Ɔpaee asubɔnten mu abien',
			  'Oduaa bebe wɔ wim',
			  'Ɔnyanee owufo'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Kyerɛ ade biako bi a Asebu Amanfi yɛ de gyee din',		
  	options: ['Ɔtɔnn nnipa maa Aborɔfo',
			  'Ɔwee nnipa nam',
			  'Ɔnante firii mpoano kɔɔ serɛm',
			  'Ɔwee aburo pata'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Sɛ yɛbɔ Sikadwa Kofi din a, onipa bɛn na yɛkae no?',		
  	options: ['Asebu Amanfi',
			  'Ansa Sasraku',
			  'Ɔkɔmfo Ntiamoa',
			  'Ɔkɔmfo Anɔkye'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + ' Kyerɛ baabi a ahemfo baasa a edidi so yi ase firi ; Obunumankoma, Ɔdapagyan ne Ɔson.',
		options: [' Okuapemman',
				  'Fanteman',
				  'Asanteman',
				  'Firaw agya'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Kwaku Ananse ba panin din de….',		
  	options: ['Afurudohwedohwee',
			  'Nnakorɔnhwea',
			  'Ntikuma',
			  'Tikenenkene'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ na ɛfa Akanfo atetesɛm ne anansesɛm ho.' + '</b>' + '<br />' + 'Suban bɛn na ɔsebɔ da no adi wɔ anansesɛm mu?',		
  	options: ['Ɔboafo',
			  'Ahobrɛase',
			  'Asisie',
			  'Awiɛmfo'],
		answer: 2
  }
]