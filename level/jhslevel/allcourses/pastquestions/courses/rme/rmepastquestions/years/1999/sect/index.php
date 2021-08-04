<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 1999 v2.0</title>

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

    <center><h2 class="mt-4"> 1999 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center><br />
   
SECTIONB ESSAY<br />
1 hour<br /><br />

Answer threequestionsonlyfrom this section, choosingonequestion from each part<br />
Credit will be given for clarity of expression and orderly presentation of material<br /><br />

PART I RELIGION<br />
Answer one question only from this part<br /><br />

1. (a) (b) State five things created by God <br /><br /><br />

Explain the usefulness of any three of them to mankind.
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
                <p>(a) Things created by God<br />
(i) Air<br />
(ii) Rainfall<br />
 (iii) Plants<br />
(iv) Earth<br />
(v) Waterbodies<br />
(vi) Animals <br />
(vii) Stars <br />
(viii)Moon<br /><br /><br />

(b) The usefulness of any three of them to mankind.<br /><br />

CREATION USEFULNESS<br /><br />

Air<br />
(i) For respiration in man<br />
(ii)Plants use it for photosynthesis to provide food for man<br />
(iii)Used for ventilation<br />
(iv)For burning of materials<br />
(v)For transportation by sail boats<br /><br />

Rainfall<br />
(i) Softens the ground for easy ploughing and sowing<br />
(ii) Makes plants grow well<br />
(iii) Provides water for domestic use(bathing, washing, etc)<br /> 
(iv) Provides water for irrigation of farms<br />
(v) Makestheweathercooler for greatercomfort<br />
(vi) Supplies water to increase the volume of water bodies<br /><br />

Plants<br />
 i) Several plants provide food for animals and humankind<br />
ii) Some plants can be used as herbs or for medicine<br />
iii) Certain plants(trees / timber) are used for furniture and building materials<br />
iv) Plants(trees) serve as wind breaks that reduce the destructive impact of strong winds<br />
v) Green plants release oxygen (used for respiration) into
the atmosphere as a result of photosynthesis <br />
vi) Green plants help to reduce the carbon dioxide concentration in the atmosphere by absorbing it for photosynthesis<br />
vii) Certain plants are used to check erosion<br /> 
viii)Some plants(trees) provide shade<br />
ix) Some plants are worshipped as deities in certain traditional societies<br />
x) Some plants(eg, grass, plants with flowers, hedges, trees)are grown to beautify a place.<br />
xi) Certain parts of / substances from some plants can be used to make various items such as adhesives, fabric, brooms, footwear,etc<br />
xii) Parts of certain plants are used to provide fuel, such as firewood and charcoal<br /><br />

The sea / ocean<br />
 (i) It isasourceof food (seafood) for man and animals<br />
(ii) It is a source of water for domestic purposes such as bathing and washing<br />
(iii) It is used for the production of common salt<br />
(iv) It is a means of transport(using boats, ships, submarines, etc)<br />
(v) Crude oil is drilled from below the sea bed<br />
(vi) It provides employment for people such as fishermen, sailors, portworkers, etc<br />
(vii) It helps in rain formation as large amounts of water get evaporated into the atmosphere<br /><br />

Animals<br />
 (i) For transportation, eg, camels, horses, donkeys, etc<br />
(ii) For food, eg, chicken, sheep, cattle,etc<br />
(iii) For sports/ entertainment,eg, horses, bulls<br />
(iv) For working, such asploughing, eg, oxen, bulls<br />
(v) For protection , eg, dogs<br />
(vi) For pleasure/ tourist attraction,(zoo animals, wildlife)<br /><br />

Stars <br />
(i) They give light to the earth<br />
(ii) The sun (a star) provides energy for life activities on earth<br />
(iii) Stars can beused for navigation<br />
(iv) Stars can be used to tell times and seasons<br />
(v) Stars are used in many cultures and religions for predictions, prayer and as a deity<br /><br />

Moon<br /> 
(i) It gives light to the earth during the night<br />
(ii) It causes the rising and falling of seatides<br />
(iii) It can be used to determine times and seasons<br />
(iv) It isused by certain cultures and religions for predictions, prayer and as a deity<br />
(v) It has been used in many works of art, including in national flags, emblems, etc

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.

(a) 

Describe the early life of Prophet Mohammed <br /><br /><br />

(b)Indicate three moral lessons that can be learnt from his life.

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
                <p>(a) The early life of Prophet Mohammed<br />
Prophet Mohammed was born on 20th April, 571 AD in Mecca, Arabia<br />
His father was called Abdullah, and his mother, Amina<br />
His father died before he was born<br />
From age 1-5, a woman named Halima took care of him<br />
She returned him to his mother, who also died after a year, when Mohammed was 6 years old<br />
Hewas then taken careof byhisgrandfather, Abdul Mutalib, who also died 2years later, when Mohammed was 8 years old.<br />
Abu Talib, Mohammed‟s uncle, then looked after him.<br />
He took Mohammed a long on one of his business trips to Syria.<br />
When Mohammed was 12years, there was a prophecy that he will be a great person in future.<br />
Acting on the advice from a monk, Abu Talib took Mohammed back to Arabia from
Syria<br />
Throughout his childhood, Mohammed was perceived to be very hardworking, prayerful, loyal, humble, peace-loving and honest.<br />
Mohammed worked for a rich widow called Khadijah, whom he later married when he was 25years old.<br /><br /><br />

(b) Moral lessons that can be learnt from his life.<br />
(i) Hard work / diligence<br />
(ii) prayerfulness<br />
(iii)loyalty<br />
(iv)humility<br />
(v) peacefulness<br />
(vi)honesty


                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
3.
(a) 
Describe the traditional festival celebrated in your community. <br /><br /><br />
(b) List three reasons why the festival is celebrated.


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
        The traditional festival celebrated in your community.<br />
PS:In this question, the student is expected to name a particular festival, (eg, Homowo of the

(a) Gas, Hogbetsotso of the Anlos, Adaekese of the Asantes) and describe that named festival<br /><br />

The following are the reasons why most festivals are celebrated<br /><br />

(i) NEW YEAR-Festivals are celebrated to mark the beginning of a new year <br /><br />

(ii) THANKSGIVING AND PRAYER– To thank the Supreme Being, lesser gods and ancestors for a successful past year and pray for their blessings in the coming year.<br /><br />

(iii) PURIFICATION – To purify the ancestral stools, the people and theland.<br /><br />

(iv) REMEMBRANCE– To remember and celebrate the lives and works of past leaders
(both religious and traditional) and rulers<br /><br />

(v) PAST DELIVERANCE– To commemorate past victories over hunger, oppression, disease,etc.<br /><br />

(vi) HOMAGE/ HONOUR– To pay homage to (or honour) the chief and renew loyalty to the chief by sub-chiefs and subjects:<br /><br />

(vii) FAMILY REUNION– To bring various family members together and renew relationships after long periods of separation<br /><br />

(viii) CONFLICT RESOLUTION – To settle family / communal conflicts and litigations and chart a new course for future relationship:

(ix) DEVELOPMENT– To plan and implement developmental projects<br /><br />

(x) FUND-RAISING – To raise funds to support various socio-economic programmes.<br /><br />

(xi) TOURISM – To attract tourists into the community. Tourism helps to support the arts and crafts industry and raise foreign exchange for the country <br /><br />

(xii) CULTURAL PRESERVATION– To preserve the indigenous culture/ traditions and therefore prevent it from dying out.

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>
           PART II MORAL LIFE<br />
Answer one question only from this part<br /><br />

4. (a) Mention three school rules and three regulations at home<br /><br /><br />

(b)
Why are rules and regulations important?



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
                <p>(a) School rules<br />
(i) Come to school before the stipulated arrival time (eg, 7:00am)<br />
 (ii) Do your school chores diligently<br />
(iii) Attend morning assembly and all other school gatherings regularly and punctually.<br />
 (iv) Greet and respect all teachers and school mates<br />
(v) Pay attention in class<br />
(vi) Do and submit your class and home work on time<br />
 (vii) Ensure that your surrounding is always kept clean<br /> 
 (viii) Wear the required uniform at all times <br />
(ix) Dress modestly and decently<br />
(x) Assist / help others whenever they need help.<br />
(xi) Obey good instructions from teachers and seniors<br />
(xii) Raise your hand and wait to be called to answer or ask a question<br />
(xiii) Pay attention during lessons<br />
(xiv) Take part in all classroom activities<br />
(xv) Respect the views of others<br />
(xvi) Greet the teacher and your classmates when you enter the classroom<br />
(xvii) Do not leave the classroom without permission<br />
(xviii)Do not stand on the tables and chairs except by permission<br />
(xix) Do not litter the classroom or school compound<br />
(xx) Do not makenoise in class<br />
(xxi) Do not fight in class (or anywhere)<br />
 (xxii) Do not eat in class<br />
(xxiii)Do not sleep in class<br /><br />

Regulations at home<br />
(i) Wash your face and brush your teeth after waking up<br /> 
(ii) Say yours prayers and read the scriptures everyday <br />
(iii) Lay your bed after waking up<br />
(iv) Greet whoever you meet for the first time<br />
(v) Do your house chores everyday<br />
(vi) Do not use abusive language<br />
(vii) Use electricity wisely / do not leave electrical gadgets on without using them<br />
(viii) Use water wisely/ do not misuse water/ do not leave the tap running<br /><br /><br />

(b) Why rules and regulations are important<br /><br /><br />

(i) They help to maintain order<br />
(ii) They instill discipline in people<br />
(iii) They promote peaceful coexistence <br />
(iv) They create an atmosphere of security<br /> 
(v) They encourage responsible behavior<br />
(vi) They help to cultivate tolerance in people<br />
(vii) They make teaching and learning easier and more effective<br />
(viii) They help to improve the standard of that community <br />
(ix) They help to protect one‟s fundamental human rights<br /> 
(x) They help to protect life and property

                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">
5. Describe five ways that one can show good manners

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
                <p>
Ways in which one can show good manners<br />
(i) Greeting and respecting others<br />
(ii) Helping the elderly with their load<br />
(iii) Offering one‟s seat to the elderly<br />
(iv) Putting one‟s hands behind him / her when speaking with the elderly<br />
(v) Using polite language, such as „please‟,„ thankyou‟and „sorry‟ when speaking to
others<br />
(vi) Using the proper modes of greeting, such removing one‟s hat, using the right hand,
lowering one‟s cloth / bowing before a chief, etc<br /> 
(vii) Doing one‟s school chores diligently and faithfully<br />
 (viii) Dressing modestly and decently<br />
(ix) Avoiding all forms of social vices, such as prostitution, drug abuse, armed robbery, etc.<br />
(x) Exercising self-control over one‟s desires or temper<br />
 (xi) Assisting / helping friends whenever they need help.<br /> 
 (xii) Doingone‟shouse chores diligentlyand faithfully<br />
 (xiii) Obeying good instructions from elderly people<br />
(xiv) Disposing of litter in a proper way<br />
(xv) Keeping our bodies and surroundings clean and tidy at all times

              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6. (a) State the stages one has to pass through to show repentance<br /><br /><br />

(b)
Why is repentance necessary?


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
                <p>(a) Stages one has to pass through to show repentance<br />
(i) Admitting/ Confessing/Accepting that one has sinned or done wrong<br />
(ii) Showingregret forthesin /wrong committed<br />
(iii) Asking for forgiveness from the offended person<br /> 
(iv) Ensuring that the sin / wrong is not repeated<br /><br /><br />

(b) Why repentance is necessary<br />
(i) It shows that oneis truly sorry for his /her sins /wrongs.<br /> 
(ii) It enables one to be forgiven and shown mercy<br />
(iii) It makes room for reconciliation (coming back together)<br />
(iv) It shows that one is reasonable and wise.

                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
PART III SOCIAL LIFE<br /><br />

Answer one question only from this part. <br /><br />
7. (a) (b) Explain the nuclear familysystem

State the obligations of each member of the family


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
                <p>(a) The nuclear family system<br />
– This family system comprises the father, mother and children.<br />
– The head of the family is the father<br />
– The assistant head of the family is the mother<br />
– The father is responsible for the provision of essential needs of the family<br />
– The size is relatively small<br /><br /><br />

(b) Obligations of the Father<br />
(i) He serves as the head of the family<br />
(ii) He provides for the basic needs, such as,food, clothing and shelter<br />
(iii) He pays the school fees of the children<br />
(iv) He pays the homebills<br />
(v) He usually provides spiritual and career guidance for the family<br />
(vi) He supplies the educational, health and recreational needs of the children<br />
(vii) He manages the affairs of the home together with mother<br /><br />

Obligations of the Mother<br />
(i) She assists the father to head the home<br />
(ii) She assists the fatherto provide basic needs, suchas, food, clothing and shelter<br />
(iii) She assists the father to manage the affairs of the home<br />
(iv) She usually does the shopping for foodstuffs, groceries and other items<br />
(v) She supervises the household chores in thehome<br />
(vi) She usually provides moral and emotional support for the family.<br /> 
(vii) She assists to supply the needs and wants of the children<br />
(viii) She supervises the provision of food in the home<br /><br />

Obligations of a child in the home<br />
(i) Obeying and respecting the parents<br /> 
(ii) Sweeping rooms and the compound<br /> 
(iii) Tidyingup rooms and the compound <br />
(iv) Fetching water<br />
(v) Helping with cooking<br />
(vi) Laying the table<br />
(vii) Washing dishes, clothes,etc<br />
(viii) Taking care of younger children<br />
(ix) Running errands for parents and older siblings
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p> 
8.
(a) (b)

What are Religious Youth Organisations?<br /><br /><br />

Mention any five functions of such youth organisations in your community

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
                <p>(a) Religious Youth Organizations<br />
Groups made up of young people in the religious bodies. They are established mainly to train
them to uphold the doctrines, values and principles of the religious bodies.<br /><br /><br />

(b)
Functions of youth organizations in the community<br />
(i) To promote peace, love and harmony among people<br />
(ii) To educate the members on the foundation and historical background of their religion<br />
(iii) To teach members the principles, values and doctrines of the religion<br />
(iv) To help members to grow spiritually<br />
(v) To support the needy and under privileged in society<br />
(vi) To help with secular education (both formal and informal) of people<br />
(vii) To create the opportunity for members to discover and develop their talents and potentials<br />
(viii) To give members the opportunity to socialize in a healthy environment<br />
(ix) To help member to keep their physical bodies fit and strong<br />
(x) To create the opportunity for members to learn vocational and other practical skills which could be of commercial value<br />
(xi) To train members to become future leaders<br />
(xii) To give members the chance to explore other places outside their localities

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