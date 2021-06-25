<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2004 v2.0</title>

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

    <center><h2 class="mt-4">2004 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center><br />
   
SECTION B ESSAY<br />
1 hour <br /><br />

Answer three questions only from this section, choosing one question from each part<br />
Credit will be given for clarity of expression and orderly presentation of material<br /><br />


PART I RELIGION<br />
Answer one question only from this part<br /><br />

1. (a) Explain the usefulness of the following as created by God:<br />
 (i) plants<br />
(ii) sea, moon, stars<br /><br /><br />

(b) What four steps can you take to preserve the plants in your environment?


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
                <p>(a) (i) The usefulness of plants: <br />
(i) Several plants provide food for animals and human kind<br />
(ii) Some plants can be used as herbs or for medicine<br />
(iii) Certain plants (trees / timber)are used for furniture and building materials<br />
(iv) Plants (trees) serve as wind breaks that reduce the destructive impact of strong winds<br />
(v) Green plants release oxygen(used for respiration)into the atmosphere as a result of photosynthesis<br />
(vi) Green plants help to reduce the carbon dioxide concentration in the atmosphere
by absorbing it for photosynthesis<br />
(vii) Certain plants are used to check erosion<br />
(viii)Some plants (trees) provide shade<br />
(ix) Several plants, especially trees, serve as habitat /resting/ hiding place for other living things, such as birds, monkeys, insects, snakes, etc<br />
(x) Some plants are worshipped as deities in certain traditional societies<br />
(xi) Some plants (eg, grass, plants with flowers, hedges, trees) are grown to beautify a place.<br />
(xii) Certain parts of /substances from some plants can be used to makevarious items such as adhesives,fabric, brooms,footwear,etc<br />
(xiii)Parts of certain plants are used to provide fuel, such as firewoodand charcoal<br /><br />

(ii) The usefulness of the sea,<br />
It serves as a habitat for fish and other sea creatures and plants<br />
It is a source of food (seafood) formanand animals<br />
It is a source of water for domestic purposes such as bathing and washing<br />
It is used for the production of common salt<br />
It is a means of transport (using boats, ships, submarines, etc)<br />
It is a source of water for domestic purposes<br />
Crude oil is drilled from below the sea bed<br />
It provides employment for people such as fishermen, sailors, port workers,etc<br />
It helps in rain formation as large amounts of water get evaporated into the atmosphere<br /><br />

The usefulness of the moon,<br />
It gives light to the earth during the night<br />
It causes the rising and falling of seatides<br />
It can be used to determine times and seasons<br />
It is used by certain cultures and religions for predictions, prayer and as a deity<br />
It has been used in many works of art, including in national flags, emblems,etc<br /><br />

The usefulness of the stars<br />
They give light to the earth<br />
The sun (a star)provides energy for life activities on earth<br />
Stars can be used for navigation<br />
Stars can be used to tell times and seasons<br />
Stars are used in many cultures and religions for predictions, prayer and as a deity<br /><br /><br />

(b) Steps you can take to preserve the plants in your environment<br />
(i) Planting more trees to replace ones that have been cut down / felled– (Reforestation)<br />
 (ii) Ensuring that only trees of a certain minimum size can be felled–(Controlled felling)<br />
 (iii) Proposing the making and enforcement of laws to control the destruction of plants<br />
(iv) Causing the arrest, prosecution and punishment of those who destroy the vegetation<br />
(v) Planting trees to create aforest– (Afforestation)<br />
(vi) Creating forest reserves– forests that are kept from human exploitation<br />
(vii) Preventing overgrazing by cattle and other animals<br />
(viii)Preventing bush fires by public education and other control measures


              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2. (a) What is prayer?<br /><br /><br />
(b) State the importance of prayer to the traditional worshipper.

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
                <p>(a) Prayer <br />
Prayer is the communication between man and a deity. The deity could be God / lesser gods /
spirits / ancestors, etc<br /><br /><br />

(b)
The importance of prayer to the traditional worshipper.<br />
(i) To offer thanksgiving and praises to the objects of worship (Supreme God, lesser
gods, ancestors, etc)<br />
(ii) To strengthen the bond between the worshipper and the object of worship<br />
(iii) To express the worshippers faith and confidence in the deities (Supreme God, lesser gods, certain spirits)<br />
(iv) To show reverence / honour for the deities / object of worship<br />
(v) To seek protection / security from the deities<br />
(vi) To request for blessings– favour,success, prosperity, riches, strength, etc<br />
(vii) To confess their evil deeds / wrong doings and seek forgiveness<br />
(viii) It promotes unity, solidarity and harmony among the members of the community<br />
(ix) It encourages spiritual growth and progress<br />
(x) It shows dependence on the deities for wellbeing and life


                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
            
3. (a) Give five contributions of Caliph Abubakar to Islam.
(b) What three lessons can be learnt from the contributions of Caliph Abubakar?


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
               (a) Contributions of Caliph Abubakar to Islam. <br />
(i) He presented Islam to others in such away that many of his friends accepted Islam<br /><br />

(ii) Out of compassion for slaves, he deliberately purchased slaves and freed them.<br /><br />
 (iii) He gave the first public address inviting people to convert to Islam<br /><br />
(iv) Together with the prophet Muhammed, he led the flight to Medina<br /><br />
(v) He bought a land for the construction of a mosque in Medina<br /><br />
(vi) He helped to construct a mosque in Medina<br /><br />
(vii) He was involved in several battles between Muslims and their enemies<br /><br />
(viii)He led the delegation in the first Hajj pilgrimage to Mecca<br /><br />
(ix) He gave his daughter, Aisha, in marriage to Prophet Muhammed<br /><br />
(x) He led Muslims to conquer several territories, which led to the spread of Islam<br /><br />
(xi) He brought unity among Muslims by resolving many conflicts<br /><br />
(xii) Heorganized the compilation of the holy Quran into one book<br /><br /><br />

(b) Lessons that can be learnt from the contributions of Caliph Abubakar<br /><br />
(i) Compassion– we must be compassionate<br /><br />
(ii)Kindness –we must be kind and willing to give to others<br /><br />
(iii) Commitment– we must show commitment in everything we do<br /><br />
(iv) Perseverance –we must persevere in doing good things and never give up<br /><br />
(v) Good stewardship – we must take good care of whatever has been entrusted to us and endeavour to improve upon it.<br /><br />
(vi) Humility– we must be humble, and not think of ourselves more highly than we should



                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
           PART II MORAL LIFE<br />
Answer one question only from this part<br /><br />

4. (a)  State five good deeds that will merit commendation<br /><br /><br />
(b)Mention four types of rewards that go with good deeds.




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
                <p>(a) Good deeds that will merit commendation<br /><br />
(i) Greeting people one meets.<br />
(ii) Goingto school / workearly/ punctually<br />
(iii) Going to school regularly<br />
(iv) Doing one‟s homework properly<br />
(v) Doing one‟s school chores diligently and faithfully<br />
(vi) Dressing neatly and decently<br />
(vii) Excelling in one‟s test or examination<br />
(viii) Assisting / helpingfriends with their school work whenever they need help.<br /> 
(ix) Reporting people who do bad deeds to the appropriate authority<br />
(x) Doing one‟s house chores diligently and faithfully<br />
(xi) Obeying instructions from elderly people<br />
(xii) Surrendering one‟s seat in a bus or at a gathering for an elderly person<br />
(xiii) Disposing of litter in a proper way<br />
(xiv) Keeping our bodies and surroundings clean and tidy at all times<br />
(xv) Using water and electricity wisely.<br /><br /><br />

(b) Types of rewards that go with good deeds.<br />
(i) Book awards– Books or other educational material, usually given at schools‟ Speech
and Prize-giving ceremonies, especially to pupils for excellent academic performance.<br /><br /> 
(ii) Cash prizes– Amounts of money given as a reward for a commendable accomplishment<br /><br />
(iii) Certificates–Formal documents, usually using a card, given in recognition of the successful completion of a particular course or examination.<br /><br />

(iv) Promotion– A raise (an elevation) of the class /status / level / position ofsomeone after having done satisfactory work at the previous stage.<br /><br />
(v) Verbal appreciation– Words spoken, either to the person alone or to the hearing of everyone, to acknowledge a good / commendable work by that person<br /><br />
(vi) Recommendation– An expression of support / endorsement / approval for someone
to another party. It could be either verbal or written<br /><br />
(vii) Scholarship– Financial help / an amount of money awarded to someoneto pursue further studies<br /><br />
(viii) Good testimonial– A favourable report on the qualities and virtues of someone<br /><br />
(ix) Citation– An official document or speech that lauds someone, especially due to his/
her achievement.<br /><br />
(x) Praise– Words that express approval or admiration for someone or one‟s work.<br /><br />
(xi) Medals– a small flat pieceof metal, usually shaped like a coin and stamped with an inscription or design, awarded to somebody for outstanding<br /><br />
(xii) Holiday – An exemptionperiod from regularor routinework<br /><br />
(xiii) Party – a social gathering to which people are invited in order to enjoy themselves and often celebrate something or someone.<br /><br />
(xiv) A pleasurable experience, such as taking one out for dinner, giving one an
opportunity to travel for holidays, etc
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

5.
(a) 
List four benefits of living a chaste life<br /><br /><br />
(b)Mention five effects of teenage pregnancy

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
                <p>(a) 
(i) Benefits of living a chaste life
Honour to one‟s family<br />
(ii) High social reputation (how society sees one)<br />
(iii) High selfesteem / confidence (how one sees himself / herself)<br />
(iv) Peace of mind (sound mind) to focus on education.<br />
(v) Smooth progress of education / training<br />
(vi) Prevention of Sexually Transmitted Diseases (STDs)<br />
(vii) Avoidance of teenage pregnancy and related problems<br />
(viii)Greater trust and respectfrom spousein marriage<br />
(ix) Higher chance of attracting responsible partner for marriage<br /><br /><br />

(b) Effects of teenage pregnancy<br />
(i) Medical Complications– due to the fact that a teenage girl‟s body is usually not matured enough to safely carry a baby<br /><br />
(ii) Shame and disgrace on both teenage mother and family– since teenage pregnancy is considered unacceptable in most societies and cultures.<br /><br />
(iii) Worries about the future – regardinghow to cater for herself and her child, since
she is most likely unemployed; and especiallywhen the fatherof the child has either refused responsibility or is unable to help<br /><br />
(iv) Delayed Education– because she may have to suspend her education ordrop out of school for a while in order to deliverand nurse the baby for sometime.<br /><br />
(v) Depression– due the intense mental stress she may be going through as a result of the situation.<br /><br />
(vi) Financial difficulties– in the case where she has little or no support from her parents or the father of the child. She may have to use the little money she may have to care for the baby.<br /><br />

(vii) Baby health– The baby‟s health may be poor as a result of the inadequate care it
may receive.<br /><br />
(viii) Reduced parental care– for the baby as a result of the teenage mother‟s several
challenges, including financial, mental, physical, educational, etc<br /><br />
(ix) Increased burden on society – if the child due to inadequate care, ends up in the
social welfare children‟s home or becomes a street child.

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6.
(a) 
What are religious songs?<br /><br /><br />
(b)Explain five moral lessons that can be learnt from such songs


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
                <p>(a) Religious songs
These are songs that are sung by the religious groups usually as part of the worship activities. These songs normally express praise /adoration /consolation / affirmation /confession / inspiration / instruction /admonition etc.<br /><br /><br />

(b)
Moral lessons that can be learnt from such songs<br />
(i) Love– We must love God and love our neighbour<br />
(ii) Peace– we must live at peace with one another<br />
(iii) Compassion– we must be compassionate towards others, especially those in unfortunate circumstances<br />
(iv) Obedience– we must obey God and those who have authority over us<br />
(v) Trust – we must trust God with all our heart and be trustworth yourselves <br />
(vi) Faithfulness– we must be faithful with whatever we are responsible for<br /> 
(vii) Submission– we must submit ourselves to God and to our elders<br />
(viii)Mercy / Forgiveness – we must show mercy to those who offend us and forgive them<br />
(ix) Graciousness– we must be gracious to others, just as God has been to us<br />
(x) Honesty – we must be honest in all our dealings and relationships<br />
(xi) Perseverance –we must not give up our goodworks even in difficult times<br />
(xii) Diligent work– we must work diligently<br />
(xiii)Generosity – we must give cheerfully and abundantly



                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
PART III SOCIAL LIFE
Answer onequestion onlyfrom this part.

7. (a) How is leisure time different from idleness?<br /><br /><br />
(b) Indicate five ways in which you can use your leisure time profitably


 

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
                <p>(a) How leisure time is different from idleness <br /><br />

LEISURE IDLENESS<br />
Taking a break from one‟s usual
work Refusing / failing to do one‟s usual
work<br />
Good practice for the individual Bad practice for the individual<br />
A sign of discipline A sign of laziness
Beneficial or useful Detrimental or harmful<br /><br /><br />

(b) Ways in which you can use your leisure time profitably<br />
(i) Taking a nap<br />
(ii) Playing beneficial games<br />
(iii)Taking part in a sporting activity<br />
(iv)Reading a good storybook or other good materials (not textbooks)<br /> 
(v) Exercising the body<br />
(vi)Taking part in communal labour (or other activity) <br />
(vii)Seeking guidance and counseling<br />
(viii)Learning a new skill, such as riding a bicycle, playing an instrument<br />
(ix)Singing and dancing<br />
(x) Listening to good music or other artistic work<br />
(xi)Watching a good movie or a beneficial programme on TV
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 


8.
(a) 
Explain five moral responsibilities of parents<br /><br /><br />
(b)What four duties is a pupil expected to perform in school?
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
                <p>(a) Moral responsibilities of parents <br />
(i) Teaching children good manners <br />
(ii) Helping their children with their school work <br />
(iii) Trainingthe children to do domestic work / manage the home <br />
(iv) Providing the basic needs(food, shelter and clothes)for their children<br />
(v) Providing a peaceful and harmonious environment in the home for their children<br />
(vi) Paying the school fees of the children<br />
(vii) Leading exemplary lives for their children to emulate<br />
(viii)Making savings / investments for the future well being of the children<br />
(ix) Guiding their children tomake right choices in life<br />
(x) Praying for their children<br /><br /><br />

(b) Duties that a pupil is expected to perform in school<br />
(i) Doing one‟s school chores diligently and faithfully<br />
(ii) Attending morning assembly and all other school gatherings regularly and punctually.
(iii) Greeting and respecting teachers and school mates<br />
(iv) Paying attention during lessons<br />
(v) Doing and submitting class work on time<br />
(vi) Ensuring that one‟s surroundings is always kept clean<br />
(vii) Dressing modestly and decently<br />
(viii) Assisting / helping friends whenever they need help. <br /> 
(ix) Obeying good instructions from teachers and seniors<br /> 
(x) Abiding by all school rules.


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