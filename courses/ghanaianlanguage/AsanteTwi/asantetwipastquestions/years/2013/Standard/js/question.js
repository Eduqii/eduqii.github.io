

//Array of Objects
const quiz = [
  {
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ wohyia obi na woankyea a, yɛtaa dwene sɛ….',

options: ['W’ani ate',
 'Wompɛ ntɔkwa',
 'Wonni nteteeɛ',
 'Wowɔ ɔdɔ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.' + '</b>' + '<br />' + '<br />' + 'Akanfoɔ amammerɛ mu no, wɔkyea firi',

options: ['Nifa so',
 'Mpanin so',
 'Benkum so',
 'Mfinimfini'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.' + '</b>' + '<br />' + '<br />' + 'Edin a ɛdidi soɔ yi mu deɛ ɛwɔ he na ɛyɛ abusua din?',

options: ['Adusa',
 'Anto',
 'Opoku',
 'Bediako'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ wowɔ obi Memeneda a ɛyɛ dabɔne a, wɔbɛfrɛ no…….',

options: ['Ama Bagyina',
 'Ama Dapaa',
 'Kwame Duku',
 'Kwame Tutu'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nkyea ho.' + '</b>' + '<br />' + '<br />' + 'Agyeiwaa mmrane yɛ……',

options: ['Ɔsɔɔnɔ',
 'Kyeiwaa',
 'Amponyinamoa',
 'Kɔdeɛ'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ wo kunu nuabaa yɛ akumaa a na ne nuabarima ye……',

options: ['ase',
 'wɔfa',
 'papa',
 'kunu'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.' + '</b>' + '<br />' + '<br />' + 'Maame kunu nuabarima yɛ ne kunu a, na ne yere nuabaa yɛ ɔbarima no….',

options: ['nua',
 'yere',
 'ase',
 'akumaa'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.' + '</b>' + '<br />' + '<br />' + 'Sika a wɔde ma ɔbaa nua mmarima no yɛ…..',

options: ['Akontasekan',
 'Taw',
 'Danta',
 'Tiri adeɛ'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.' + '</b>' + '<br />' + '<br />' + 'Hwan na ɔgye awareɛ ma ba barima?',

options: ['Papa',
 'Maame',
 'Nana',
 'Wɔfa'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ awareɛ ne akyiwadeɛ ho.' + '</b>' + '<br />' + '<br />' + 'Ntam bɛn ne ntam kɔkɔɔ?',

options: ['Ntam kumaa',
 'Ntam kɛseɛ',
 'Ntam piadeɛ',
 'Ntam fufuo'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ agya bosom yɛ wo ntɔn a, maame mogya yɛ wo…',

options: ['Kra',
 'Bosom',
 'Abusua',
 'Nkwa'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ abaayewa bi hunu mogya a, wɔde no kɔkyerɛ……',

options: ['Abusua panin',
 'Odikro',
 'Ɔhene',
 'Ɔhemaa'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.' + '</b>' + '<br />' + '<br />' + 'Ɔkɔmfoɔ bɛn na ɔtumi de mpaboa foroo onyina?',

options: ['Ɔkɔmfoɔ Kyei',
 'Ɔkɔmfoɔ Anokye',
 'Aseibu Amamfi',
 'Ansa Sasraku'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.' + '</b>' + '<br />' + '<br />' + 'Dabɛn na Asantehene nsa kaa sikadwa Kofi no?',

options: ['Dwoada',
 'Wukuda',
 'Memeneda',
 'Fiada'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ abusua, ntɔ, bragorɔ ne atetesɛm ho.' + '</b>' + '<br />' + '<br />' + 'Bragorɔ mu no baabi a ɔbrani kɔtena yɛ….',

options: ['Brafie',
 'ɔmaame fie',
 'abusua fie',
 'ɔhemaa fie'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Ɔhene ne ne manfoɔ hyia a, nea ɔma dwam yɛ din yɛ…..',

options: ['Ɔhemmaa',
 'Adumfoɔ',
 'Sanaafoɔ',
 'Ɛsɛn'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Mmenakurafoɔ taa yɛ ɔhene……',

options: ['Nananom',
 'Wɔfasenom',
 'Nuanom',
 'Asomfo'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ ɔman bi rekɔ sa a, deɛ ɔdi ɔhene anim pɛɛ ne….',

options: ['Gyasehene',
 'Benkumhene',
 'Adɔntenhene',
 'Kyidɔmhene'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Akanman mu no…..na ɔtu ɔhene fo.',

options: ['Ɔkyeame',
 'Ɔhemaa',
 'Odikro',
 'Gyaase'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Mpanimfoɔ a ɔhene ne wɔn bu ne man no wɔfrɛ wɔn…….',

options: ['Mpapahwekwa',
 'Nhenkwaa',
 'Atenankonnwa',
 'Adikrofoɔ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ ahensɛm ne adwuma ho.' + '</b>' + '<br />' + '<br />' + 'Wɔfrɛ baabi a wɔbɔ nnadeɛ ne nsɔ sɛ',

options: ['Gyedua ase',
 'Amanfo so',
 'Afuom',
 'Tonsuom'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Nam dodoɔ ……..nkwan.',

options: ['nnsɛe',
 'sɛe',
 'resɛe',
 'bɛsɛe'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Ɔdehyeɛ anko a…………….',

options: ['ɛmfa obiara ho',
 'mpanin dwane',
 'akoa dwane',
 'mpanin bisa no'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + '………………su agyenkuku su a ne to pae.',

options: ['Apatuprɛ',
 'Aserewa',
 'Aburuburo',
 'Akyem'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Agya adeɛ bi wɔ hɔ ɔrebɛwu a gye sɛ ɔkra ne maame. Ɛyɛ…………..',

options: ['kanea',
 'ɛgya',
 'bokyea',
 'mankese'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Agya adeɛ bi wɔ hɔ ɛnni ani nso ɛtumi wura tokuro biara mu. Ɛyɛ deɛn?',

options: ['Ɔwɔ',
 'Okusie',
 'Nsuo',
 'Paneɛ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Nsaguo mu no yɛhyira yɛn',

options: ['Adɔfo',
 'Nsamanfoɔ',
 'Atamfo',
 'Akɔmfoɔ'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Nsaguo mu no yɛtaa srɛ nneɛma a ɛdidi soɔ yi gye sɛ…..',

options: ['Siadeɛ',
 'Nhyira',
 'Nnome',
 'Onyinkyerɛ'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + 'Apoɔ yɛ fa a wɔhyɛ no wɔ Takyiman ne',

options: ['Dɔmaa',
 'Wankyi',
 'Kintampo',
 'Sunyane'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ mmɛ ne agya rekɔ ho.' + '</b>' + '<br />' + '<br />' + '……………yɛ afahyɛ a wɔde huro kɔm.',

options: ['Aboakyere',
 'Ohum',
 'Adɛɛ kɛse',
 'Akwanbo'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Abɔfra a wɔatwa ne tiri mpɛsempɛsɛ yɛ…………..',

options: ['ɔbosomma',
 'aboatia ba',
 'ɔkɔmfoɔ ba',
 'ɔdehyeɛ'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ ɔkanni bi ani gye a ɔfira ntoma……..',

options: ['Fitaa',
 'Tuntum',
 'Kɔkɔɔ',
 'Kuntunkuni'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Sɛ ɔbɔfoɔ kɔ wuram a, deɛ ɔyɛ de hyɛ ɔkwan nso ne sɛ……..',

options: ['ɔpae kwan so',
 'ɔtwitwa nnunsin a ɛwɔ kwan so',
 'ɔhye ɔkwan so nwura',
 'ɔbotabota nnua ho'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Akyekyedeɛ wɔ anansesɛm mu gyina hɔ ma',

options: ['Aniteɛ',
 'Ntɔkwa',
 'Asomdwoeɛ',
 'Manso'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Yɛfrɛ bosome dubaako sɛ…….',

options: ['Obubuo',
 'Ɛbɔ',
 'Ɔpɛpɔn',
 'Oforisuo'],
answer: 0
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Hwehwɛ deɛ ɛda nso wɔ saa nsɛm yi mu………',

options: ['Ɔgyefuo',
 'Oforisuo',
 'Ɔpɛnima',
 'Ɔpɛpɔn'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Firi bere a obi bewu kɔpem berɛ a wɔbesie no yɛ…..',

options: ['ayipa',
 'ayiseɛ',
 'ahosiesie',
 'dɔteyie'],
answer: 3
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Amanneɛ a wɔyɛ obi a ne kunu anaa ne yere awu yɛ',

options: ['ayeforohyia',
 'kuna',
 'awaregyeɛ',
 'awareguo'],
answer: 1
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + '…………..yɛ nkra a ɛtwa toɔ ma awufoɔ ne ateasefoɔ.',

options: ['Awaregyeɛ',
 'Ayeforohyia',
 'Ayiyɔ',
 'Awareguo'],
answer: 2
},
{
question: '<b>' + 'Yi mmuaeɛ A-D yi mu baako a ɛyɛ paa a ɛfa Akanfoɔ nsɛnkyerɛne a ɛkasa fa ayiyɛ ne nnabuo ho.' + '</b>' + '<br />' + '<br />' + 'Ɔbarima wu a deɛ ɔdi adeɛ fa no……',

options: ['sekan',
 'akonnwa',
 'agyapadeɛ',
 'tuo'],
answer: 3
} 
]