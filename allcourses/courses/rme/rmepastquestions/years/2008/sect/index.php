<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2008 v2.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/grid/">

    

    <!-- Bootstrap core CSS -->
<link href="../../../../../../assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="grid.css" rel="stylesheet">
  </head>
  <body class="py-4">
    
<main>
  <!--<div class="container">

    <h1>Bootstrap grid examples</h1>
    <p class="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>
    <p>In these examples the <code>.themed-grid-col</code> class is added to the columns to add some theming. This is not a class that is available in Bootstrap by default.</p>

    <h2 class="mt-4">Five grid tiers</h2>
    <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>

    <div class="row mb-3">
      <div class="col-4 themed-grid-col">.col-4</div>
      <div class="col-4 themed-grid-col">.col-4</div>
      <div class="col-4 themed-grid-col">.col-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
      <div class="col-sm-4 themed-grid-col">.col-sm-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
      <div class="col-lg-4 themed-grid-col">.col-lg-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
      <div class="col-xl-4 themed-grid-col">.col-xl-4</div>
    </div>

    <div class="row mb-3">
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
      <div class="col-xxl-4 themed-grid-col">.col-xxl-4</div>
    </div>

    <h2 class="mt-4">Three equal columns</h2>
    <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>
    <div class="row mb-3">
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <h2 class="mt-4">Three equal columns alternative</h2>
    <p>By using the <code>.row-cols-*</code> classes, you can easily create a grid with equal columns.</p>
    <div class="row row-cols-md-3 mb-3">
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
      <div class="col themed-grid-col"><code>.col</code> child of <code>.row-cols-md-3</code></div>
    </div>

    <h2 class="mt-4">Three unequal columns</h2>
    <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>
    <div class="row mb-3">
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
      <div class="col-md-6 themed-grid-col">.col-md-6</div>
      <div class="col-md-3 themed-grid-col">.col-md-3</div>
    </div>

    <h2 class="mt-4">Two columns</h2>
    <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">.col-md-8</div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <h2 class="mt-4">Full width, single column</h2>
    <p class="text-warning">
      No grid classes are necessary for full-width elements.
    </p>

    <hr class="my-4">

    <h2 class="mt-4">Two columns with two nested columns</h2>
    <p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>
    <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">
        <div class="pb-3">
          .col-md-8
        </div>
        <div class="row">
          <div class="col-md-6 themed-grid-col">.col-md-6</div>
          <div class="col-md-6 themed-grid-col">.col-md-6</div>
        </div>
      </div>
      <div class="col-md-4 themed-grid-col">.col-md-4</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Mixed: mobile and desktop</h2>
    <p>The Bootstrap v4 grid system has five tiers of classes: xs (extra small, this class infix is not used), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>
    <p>Each tier of classes scales up, meaning if you plan on setting the same widths for md, lg and xl, you only need to specify md.</p>
    <div class="row mb-3">
      <div class="col-md-8 themed-grid-col">.col-md-8</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
      <div class="col-6 col-md-4 themed-grid-col">.col-6 .col-md-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 themed-grid-col">.col-6</div>
      <div class="col-6 themed-grid-col">.col-6</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Mixed: mobile, tablet, and desktop</h2>
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-8 themed-grid-col">.col-sm-6 .col-lg-8</div>
      <div class="col-6 col-lg-4 themed-grid-col">.col-6 .col-lg-4</div>
    </div>
    <div class="row mb-3">
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4 themed-grid-col">.col-6 .col-sm-4</div>
    </div>

    <hr class="my-4">

    <h2 class="mt-4">Gutters</h2>
    <p>With <code>.gx-*</code> classes, the horizontal gutters can be adjusted.</p>
    <div class="row row-cols-1 row-cols-md-3 gx-4">
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gx-4</code> gutters</div>
    </div>
    <p class="mt-4">Use the <code>.gy-*</code> classes to control the vertical gutters.</p>
    <div class="row row-cols-1 row-cols-md-3 gy-4">
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.gy-4</code> gutters</div>
    </div>
    <p class="mt-4">With <code>.g-*</code> classes, the gutters in both directions can be adjusted.</p>
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
      <div class="col themed-grid-col"><code>.col</code> with <code>.g-3</code> gutters</div>
    </div>
  </div>
-->
  <div class="container" id="containers">

    <center><h2 class="mt-4">2008 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

 1. (a) Narrate thecreation storyaccordingto theQur‟an<br /><br /><br />
    (b) State three ways in which humankind is useful to God

  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Answer 
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>1. (a) The creation story according to the Qur’an<br />
(i) Accordingto theQuran,Allah created theuniversein 6 days<br />
(ii) Allah said, “Be”,and itwas, as bydivine command<br />
(iii) Themoon and sun were created byAllah togive light duringthe dayand night<br />
(iv) He also created theheavens to demonstrate his power and majesty<br />
(v) Humans were createdfrom themixtureof male and femaleseminal fluid orsecretions<br />
(vi) Adam, theman, wascreated first. Eve, the womanwas created next<br />
(vii) Afterfertilization, the resultingorganismis deposited in the mother‟s womb as a seed.<br />
(viii) From Adam, Eve first delivered aset of twins<br />
(ix) Thus humankind was created in stages<br />
The formation stagesare „nutfa‟(sperm)→ „alaqa‟(clot) → „mudagha‟(flesh) →
„adaam‟(bones)→ dressingwith muscles<br />
(x) Allah created all things out of nothing, except his might, power,wisdom and goodness<br /><br /><br />

(b) Ways in which human kind is useful to God<br />
(i) Humans obeyand submitto the will of God <br />
(ii) They represent God on earth<br />
(iii) They praise and worship God<br />
(iv) They exhibit the attributes of God for the sake of all creation<br />
(v) They are formed in the image of God, and are therefore his children<br />
(vi) Theymakeuse of all that God has created<br />
(vii) They continue the creation process through reproduction and inventions<br />
(viii) They have dominion over / take care of all that God has created 


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.
(a) Explain three types of Christian prayer<br /><br /><br />
(b) Give five reasons why Christians pray.

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingTwo">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Answer 
              </button>
            </h4>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>2. (a) Types of Christian prayer <br />
(i) Thanksgiving– Bythis typeof prayer, theyshowappreciation / gratitudeto God for what Hehas done forthem<br />
(ii) Praise– Bythis prayer, theyexpress approvalandadmiration for what Godhas done and how Hedid it.<br />
(iii) Worship– Christian express reverence andadoration for who God is (not what he has done)<br />
(iv) Confession– In this prayer, Christians declarethewrongthings / sins theyhavedone and ask forforgiveness from God.<br />
(v) Intercession– Christian prayforother peopleforvarious reasons bythis prayer.<br />

(vi) Supplication/ Petition– Theyask God to do certain things forhim/ herbythis prayer.<br />
(vii) Individual prayers – Aprayer that involves onlyoneperson and God<br />
(viii) Group prayers– Prayers offered byagroupof people forcertain purposes<br />
(ix) Congregational prayers– Prayers offered bytheentirecongregation (people present at church) foraparticularreason.<br /><br /><br />

(b) Reasons why Christians pray.<br />
(i) To obeyGod‟scommandto prayat all times<br />
(ii) To thank God forhis kindness and other blessings<br />
(iii) To praise God for his mightyworks <br />
(iv) To worship God forwhoHeis<br />
(v) To request forGod‟sguidance, favour,protection, preservation, etc<br />
(vi) To confess their sins andask for forgiveness<br />
(vii) To purifytheir hearts andconsecrate themselves<br />
(viii) To intercedeon behalf of others<br />
(ix) To fellowship with God<br />
(x) To gain spiritual strengthand vitality

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
               3.
(a) List five types of sacrifices in the Ghanaian traditional society<br /><br /><br />
(b)Give five advantages of sacrifices to the worshipper.
  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Answer 
              </button>
            </h4>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                3.

(a)

Types ofsacrifices in the Ghanaian traditional society<br />
Concerning FUNCTION<br />
Thanksgivingsacrifice –Given to thank the gods / the deity<br />
Purification sacrifice – offered to purifythe person/ people<br />
Pacification sacrifice – offered to make/ restorepeacebetween the deityand the person /
people<br />
Preventivesacrifice – offered to prevent a disaster/ calamity<br />
Votive sacrifice– offered to fulfillavow made<br />
Substitution sacrifice – offered to takethe placeof anotherthing/ person<br />
Concerning ITEMUSED<br />
Animal sacrifice– animals are used for the sacrifice<br />
Human sacrifice– human beingsareused for the sacrifice<br />
Blood sacrifice– the blood of an animal or a person is used<br />
Food/ Meal sacrifice – food is sacrificed to the deity<br />
Drink sacrifice– drink isoffered as a sacrifice<br /><br />

Concerning GIVER/PARTICIPANT<br />
Individual Sacrifice – only one person is involved(makes the sacrifice forhim/herself)<br />
Communal sacrifice – the sacrifice is made for the whole community<br /><br /><br />

Concerning STATE<br />
Tangible sacrifice – a sacrifice madew ith physical material (can be felt or seen)<br />
Intangible sacrifice – a sacrifice which is not physical (cannot be seen)<br /><br /><br />

(b)
Advantages ofsacrifices to the worshipper.<br />
(i) It produces blessings<br />
(ii) It enable one to gain victory in any situation<br />

(iii) Itgives the opportunityto offer thanksgiving to God<br />
(iv) It purifies the soul of the person<br />
(v) It facilitates peace and harmony between the deity and the person<br />
(vi) Itgive one an advantageover theotherin times of battle<br />
(vii) It makes it possible to vow and honour it<br />
(viii) It serves asa channel forprotection andguidance (ix) It promotes unityand peacewithin the community <br />
(x) It inspires the person to guard against evil<br />
(xi) It strengthens the faith ofthe giver.<br />
 (xii) It helps oneto succeed and prosper <br />
 (xiii) It makes the person spirituallystrong<br />
(xiv) It enables one to show one‟s commitment to a deity or course.



                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
            SECTIONB MORAL LIFE <br /><br />

Answer one question only fromthis section<br /><br />

4. (a) State four behaviours considered to be decent in your community<br /><br /><br />
(b)Mention four advantages of showing decent behaviours at a sport festival


</p>

        </div><br /><br />
<div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFour">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Answer 
              </button>
            </h4>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>4. (a) Behaviours considered to be decent in your community<br />
(i) Greeting and respecting people one meets<br />
(ii) Talking politely to everyone, whether older or younger<br />
(iii) Obeying and showing respect for the elderly<br />
(iv) Dressingneatlyand modestly.<br />
(v) Participating in social activities such as sports and game<br />
(vi) Taking part in communal labour<br />
(vii) Servingas peacemakers<br />
(viii) Making gestures,giving and receiving items with the right hand only<br />
(ix) Keepingone‟slitter(rubbish) on oneself till the one gets a rubbish bin to dispose of it.<br />
 (x) Supporting the poor and needy in society<br />
(xi) Carrying out various charitable deeds<br /><br /><br />

(b) Adva<br />
(i) ntages ofshowingdecent behaviourat asports festival<br />
It creates an atmosphere ofpeace, unityand harmony<br />
(ii) It helps oneto makegood friends easily<br />
(iii) It showsgood sportsmanship<br />
(iv) A person‟sdecent behaviour can be noticed and rewarded<br />
(v) It prevents insults, confrontations and fights.<br />
(vi) It promotesreconciliation between two persons orgroups that werein conflict with
each other.<br />
(vii) It creates ahigh reputation for the sporting groupto which one belongs<br />
(viii) It promotesfriendliness and cooperation amongthesporting groups


                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

5.
(a) List five good eating habits <br /><br /><br />
(b) Outline four dangers of over-eating

  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Answer 
              </button>
            </h4>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>5. (a) Goodeating habits<br />
(i) Waitingpatientlyfor food to be served<br />
(ii) Praying before one starts eating<br />
(iii) Washing hands with soap and water before eating<br />
(iv) Askingfor an item to bepassed toyou, instead ofstanding/ stretchingacross the table for it<br />
(v) Usingthecorrectcutleryin the proper waywheneating<br />
(vi) Stirringto makehot foodcool, ratherthan blowingair onto it<br />
(vii) Avoidingthe makingofnoises in themouth or throat while eating, as much as possible<br />
(viii) Beingpolite whencommunicating(using„please‟,„thankyou‟and“I‟msorry/ Pardonme”)<br />
(ix) Not talkingwhile thereisfood in one‟smouth<br />
(x) Placing just enough amounts (morsels) of food in one‟s mouth at a time, instead of stuffing/ filling it<br />
(xi) Closingone‟smouth while chewing(or masticating)food<br />
(xii) Turning awayfrom thefood and people and covering one‟smouth with apersonal<br />
handkerchief, in caseonecoughs or sneezes<br />
(xiii) Avoidingthe lickingof fingers and cutlery.<br />
(xiv) Keepingone‟scutlerycrossed in one‟splate afterfinishing, to indicate one has<br />
finished eating.<br /><br /><br />

(b) Dangers ofover-eating<br />
(i) Insomnia / sleeplessness<br />
(ii) Indigestion<br />
(iii) Constipation<br />
(iv) Becomingoverweight <br />
(v) Abdominal disorders <br />
(vi) Nausea and/or vomiting<br /> 
(vii) Feelinglazy<br />
(viii) Bedwetting<br />
(ix) Lack ofconcentration<br />
(x) Heart Disease<br />
(xi) Diabetes (type2)


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6.(a) Identify four causes of immoral behaviour among the youth<br /><br /><br />
  (b) Mention four effects of indulging in immoral behaviour

</p>

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingSix">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                Answer 
              </button>
            </h4>
            <div id="collapseSix " class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>6. (a) Causes of immoral behaviour among the youth<br />
(i) Peer pressure <br />
(ii) Drugabuse<br />
 (iii) Poverty<br />
(iv) Unemployment<br />
(v) Inadequate parental guidance<br />
(vi) Broken homes<br />
(vii) Influencebythe media<br />
(viii) Curiosity<br />
(ix) Low self control<br />
(x) Inadequate education on immoralityand its dangers<br />
(xi) Advertisements of dangerous substances, suchasalcohol and cigarettes<br />
(xii) Bad examples byparents, teachers and other older people.<br /> 
(xiii) Bad movies, books, magazines, websites, etc<br /><br /><br />

(b) Effects ofindulging inimmoral behaviour<br />
(i) Infections and diseases<br />
(ii) Death<br />
(iii) Loss of respect and dignity<br />
(iv) Poverty<br />
(v) Unemployment<br />
(vi) Mob action /Lynching<br />
(vii) Risk of arrest, prosecution and imprisonment<br />
(viii) Broken homes<br />
(ix) Low self esteem<br />
(x) Termination of education (dropping out of school)<br /> 
(xi) Spiritual weakness



 
 
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
SECTIONC

SOCIAL LIFE

Answeronequestion only from this section

7. (a) Statefour responsibilities of a child to theparents. <br /><br /><br />
(b) Givefour reasons whypeople avoid responsibilities.
  </div><br /><br />

  <div class="container themed-container"><div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingSeven">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Answer 
              </button>
            </h4>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>7. (a) Responsibilities of a child to the parents.<br />
(i) Obeying parents<br />
(ii) Respecting/ honouringparents (iii) Helpingwith householdchores (iv) Runningerrands forparents<br />
(v) Being truthful to parents<br />
(vi) Being hardworking<br />
(vii) Sharingideas concerning the familywith parents<br /><br /><br />

(b) Reasons why people avoidresponsibilities.<br />
(i) Sheer laziness<br />
(ii) Lack ofappropriatetools / equipment<br />
(iii) Lack of theneeded knowledgeor skills to carryout the responsibility<br />
(iv) Negativeinfluencefrom peers / colleagues / friends / family, etc<br />
(v) Fear ofbeing ridiculed/ mocked / laughed at<br />
(vi) Pride/ arrogance<br />
(vii) Lack ofcommitment<br />
(viii) Tiredness / exhaustion<br />
(ix) Bad intention ofwanting to prove a point<br />
(x) Lack of sufficient remuneration / reward<br />
(xi) Wantingto go somewhereor dosomething else<br />
(xii) Lack of self-belief / confidencein oneself<br />
(xiii) Low self control


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 


8. (a) Outline four effects of idleness<br /><br /><br />
(b) Mention four advantages of enjoying holidays and vacations

</p>

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingEight">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                Answer 
              </button>
            </h4>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>8. (a) Effects ofidleness<br />
(i) Loss of skills and knowledge <br />
(ii) Poverty/ financial difficulty<br /> 
(iii) Dishonour /shame / disgrace (iv) Mocking/ ridicule<br />
(v) Low productivity<br />
(vi) Failureto achieve targets/ objectives<br />
(vii) Social vices, such as swindling, bribery and corruption<br />
(viii) Retrogression /regression (movingbackwards in an endeavour) (ix) Stagnation (not moving forward in anendeavour)<br /><br /><br />

(b) Advantages ofenjoyingholidays andvacations<br /><br />

(i) Resting/ relaxation<br />
(ii) Visiting/ spendingtimewith family and friends <br />
(iii) Developingof talents / skill, such as playing a musical instrument, etc<br />
(iv) Opportunities forsightseeing/ touringo ther places<br />
(v) Participation in socio-communal activities<br />
(vi) Chanceof undertakingshort courses to upgrade oneself<br />
(vii) Enjoying/ partakingin one‟shobbies / recreational activities<br />
(viii) Opportunityto plan properlyforthefuture<br />
(ix) Chanceto assist one‟sfamily or friends<br />
(x) Chanceof spendingmoretime with God


 
                </div>
            </div>
          </div>
        </div>
              </div><br />
  
              
  <div class="container-xxl themed-container"><center>Good Luck</center></div>
</main>


    
  </body>
  <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
