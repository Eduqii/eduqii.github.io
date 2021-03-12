

//Array of Objects
const quiz = [
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Sɛ wo dɔfo bi bɛsra wo awia na ɔrekɔ a, woma no',  	
  	options:['due ne awɔw',
			 'due ne wia',
			 'due ne brɛ',
			 'due ne nwunu'],
  	answer: 1
  },
  {	
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Sɛ wo ne obi rekɔ baabi na ɔdi kan na wokɔto no a, wokyia no sɛ…',
	options:[ 'mema wo ahyia',
			  'mema wo ɔduru',
			  'nkyɛre ba',
			  'mema wo akwaaba'],
	answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Wɔwo abɔfra na ɔdi …….a, wɔto ne din',
  	options:['adaduanan',
			 'afe',
			 'nnawɔtwe',
			 'bosome'],
  	answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Akanfo de wɔn babarima panin to…..',  	
  	options:[ 'abusuapanin',
			  'agya nua panyin',
			  'agya kumaa',
			  'agya papa'],
  	answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Sɛ ɔbarima ware a, ne yere maame nuanom yɛ ne',  	
  	options:[ 'nsenom',
			  'koranom',
			  'nkumaafo',
			  'nsenkumaa'],
  	answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Sɛ ɔbea ware a, ne kunu nuammarima yɛ ne ……',		
  	options: ['koranom',
			  'nkontanom',
			  'nsenom',
			  'kununom'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Ɔbea ware a, ne kunu nuammarima mma yɛ ne….',	 
  	options: [ 'koramma',
			   'nananom',
			   'mmannoma',
			   'mma'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo nkyea, edin ne abusuabɔ ho.' + '</b>' + '<br>' + 'Nsu ne nsa a wɔde sɔ abofra anom berɛ a wɔreto ne din no kyerɛ ……',
		options: [ 'ahoɔden',
				   'anotew',
				   'nokwaredi',
				   'papa ne bɔne'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + ' Abamo akyiwade ne…..',		
  	options: ['akokɔ',
			  'okisi',
			  'ɔtwe',
			  'wansane'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Akanman mu sɛ obi rewu a,……',		
  	options: [' wɔgu n’anom nsu',
			  'wɔde no to ne benkum so',
			  'wɔnsɔ ne mu',
			  'wɔ teatea no'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Nneεma a Akanfo de gya owufo kwan no wɔfrɛ no dɛn?',
		options: ['akatasode',
				  'akyɛde',
				  'asiede',
				  'nkradi'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Sɛ obi de ka na owu a, hena na otua ka no?',
		options: ['abusuapanyin',
				  'anuanom',
				  'obiara ntua',
				  'odiadefo'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Kuku a okunafo kɔbɔ no kurotia no kyerɛ sɛ…..',		
  	options: ['ɔne ne kunu adi ntetewmu',
			  'ɔmpɛ kuku no',
			  'ne bo afu',
			  'ɔnnidi bio'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Ansa na wɔbɛgoru abeawa bi bra no, wɔkɔbɔ hena amanneɛ?',		
  	options: ['abusuapanin',
			  'ɔhemmea',
			  'ɔhene',
			  'nananom'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo akyiwade, owuo ne bragoru ho.' + '</b>' + '<br>' + 'Sɛ wɔgoro abeawa bi kyiribra a, ……..',		
  	options: ['ɛhyɛ abusua no animuonyam',
			  'ɛma ɔbaa no nya dwetiri',
			  'ɛgu awofo no anim ase',
			  'ɛma ɔbea no nya kunu pa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Eyinom biako nka ɔhemaa adwuma hoo',		
  	options: ['ɔsiesie nsɛm',
			  'ɔtu ɔhene fo',
			  'ɔtumi pa ɔhene',
			  'ɔnoa ɔhene aduan'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Nnipakuw yi mu biako nni dwuma wɔ Akanfo asɛnni mu.',		
  	options: ['adansefo',
			  'lɔyafo',
			  'agyinatufo',
			  'badwafo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Sɛ Akanfo retu agyina wɔ asɛnni mu a, na ɛkyerɛ dɛn?',		
  	options: ['wɔrekɔbisa aberewa',
			  'wɔrekɔdidi aba',
			  'wɔatu asɛm no ahyɛ da',
			  'wɔregye wɔn ahome'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Hena na ɔhwɛ ɔhene foto so?',		
  	options: ['Ankɔbeahene',
			  'Gyaasehene',
			  'Sanahene',
			  'Kurontihene'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Hena na ɔyan ɔhene atumpan?',		
  	options: ['ɛsɛn',
			  'ɔkyerɛma',
			  'abrafo',
			  'mmɛnsonfo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Aboa bɛn na Kumawufo de di Papa afahyɛ?',		
  	options: ['ɔsono',
			  'ɔtwe',
			  'nantwie',
			  'wansane'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo ahenni, asɛnni ne afahyɛ ho.' + '</b>' + '<br>' + 'Sɛ ɔhene reba aguabɔ ase afahyɛ bere a, …….',		
  	options: ['ɔnante bɔkɔɔ',
			  'ɔkasakasa',
		  	  'ɔhurihuri',
			  'ɔtu mmirika'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Wɔfrɛ wɔn a wɔdi ɔbɔfo akyi kɔ ahayɔ sɛ………',
		options: ['aboafo',
			      'ayawfo',
				  'akyidifo',
				  'asomafo'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Akanfoɔ tumi frɛ Akwasidae sɛ…….',		
  	options: ['Fɔkwasi',
			  'Monokwasi',
			  'Nkyikwasi',
			  'Kurukwasi'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Benada Dapaa adekyeeɛ yɛ…..',		
  	options: ['Kwawuku',
			  'Kurudapaaku',
			  'Monowuku',
			  'Ngonawuku'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Akwasidɛɛ biara Akanfo……..',		
  	options: ['gu nsa',
			  'bɔ tikwa',
			  'hyɛ fa',
			  'nnidi'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Sɛ wɔregye aware a, ɔbea no abusuafo taa de ti-ade no ……..',		
  	options: ['kɔma abusuapanin',
			  'kɔgye wɔn ani',
			  'kɔtua abusua ka bi',
			  'kɔma ɔhemaa'],
		answer: 2
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Agyapade titiriw a efi aware mu ba ne……..',		
  	options: ['Ayɔnkofa',
			  'Anigye',
			  'Sika',
			  'Mma'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a eye pa a ɛfa Akanfo aware, nnapɔnna ne adwuma ho.' + '</b>' + '<br>' + 'Hena na ɔgu ɔbea no hyirew wɔ awaregyaeɛ mu?',		
  	options: ['Nkontanom',
			  'Nana',
			  'Nsenom',
			  'Nkumaafo'],
		answer: 3
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + 'Ab)fra nnim adware3 a 3ny3…..',		
  	options:['n’anim',
			 'n’afuru so',
			 'ne kɔn ho',
			 'ne nsa ho'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + 'Aberewa bɛdi twɛre a, na efi ……..',
		options: ['n’ano',
			  	  'ne nsa',
				  'ne nananom',
				  'ne poma'],
		answer: 0
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + 'Wopam ohufo a, …..',		
  	options: ['ne koma te',
			  'woto ne barima',
			  'ɔtwe sekan',
			  'wonya asɛm'],
		answer: 1
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + 'Sɛ woyɛ bi na anyɛ yiye a, wɔfrɛ wo……',		
  	options: ['ayɛbiagya',
			  'ayɛbiagu',
			  'ayɛboafo',
			  'ayɛbiakyerɛ'],
		answer: 1
  },
  {
  	question:'<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' +  'Agya adeɛ bi wɔ hɔ, sɛ wotia n’ayaase a, na ɔresere. Ɛyɛ……',		
  	options: ['apasoɔ',
			  'kaa',
			  'mpaboa',
			  'dadefiri'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfo mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + 'Agya nipa bi wɔ hɔ, ɔte fie a na n’abɔdwesɛ gu abɔnten. Ɛyɛ…..',		
  	options: ['abɛ',
			  'mframa',
			  'wisiw',
			  'nsu'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.' + '</b>' + '<br>' + 'Kane no na wɔfrɛ anansesɛm sɛn?',
	options: ['Nyankonsɛm',
			  'Abasɛm',
			  'Bɔsrɛmka',
			  'Adomankomasɛm'],
		answer: 0
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.' + '</b>' + '<br>' + 'Sɛnti a tete no na wɔnto anansesɛm awia ne sɛ…….',		
  	options: ['ahuhuro bɛde wo',
			  'ɛnyɛ anigye',
			  'yɛmmɔ mmoa din awia',
			  'ɛsɛe adwumayɛ'],
		answer: 3
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.' + '</b>' + '<br>' + 'Asantefo atetesɛm kyerɛ sɛ…….na wɔde egya baeɛ.',		
  	options: ['Asonafo',
			  'Biretufo',
			  'Aduanafo',
			  'Ɔyokofo'],
		answer: 2
  },
  {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.' + '</b>' + '<br>' + 'Wɔnyɛ eyinom biako wɔ nsagu mu.',		
  	options: ['wɔkata wɔn ani',
			  'wɔbɔ abosom ne nsamanfo din',
			  'wɔpia wɔn ntama gu wɔn mmatiri',
			  'wɔyi wɔn nan mu mpaboa'],
		answer: 0
  }, 
 {
  	question: '<b>' + 'Yi mmuae A-D yi mu biako a ɛyɛ paa a ɛfa Akanfoɔ atetesɛm, anansesɛm, nsagu ne nsɛnkyerɛnneɛ a εkasa ho.' + '</b>' + '<br>' + 'Akanman mu sɛ obi resaw na ɔfoforo pagya ne nsa kyerɛ no a, ɛkyerɛ sɛn?',		
  	options: ['ɔnnyae asa',
			  'ɔma no mo',
			  'dwom no yɛ dɛ',
			  'ɔnnyina hɔ'],
		answer: 1
  } 
]