<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2013 v2.0</title>

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

    <center><h2 class="mt-4">2013 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

1.(a) Outline two uses each of the following things created by God:<br />
(i) rivers<br />
(ii) sun<br />
(iii) plants<br /><br /><br />

b) State four ways by which God’s creation can be protected
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (i) rivers<br />
                • Means of Transportation<br />
                • Source of Water for Domestic Purposes <br />
                • Source of Water for Industrial Purposes<br />
                • Source of Food (Fish / Protein)<br />
                • Generation of Hydroelectric Power –<br />
                • Tourist Attraction Sites<br />
                • Irrigation of Farmlands<br />
                • Drainage System to Prevent Flooding – <br />
                • Habitat for Aquatic Organisms – <br />
                • Source of Minerals<br />
                • Helps in Rain Formation<br /><br />

                (ii) sun<br />
                • Provision of energy for plants to manufacture food (photosynthesis)<br />
                • Generation of electricity using solar cells/ panels<br />
                • Drying of clothes and other household/ personal items<br />
                • Processing and preservation of foods<br />
                • Production of salt through evaporation<br />
                • Synthesis of vitamin D in our bodies<br />
                • Facilitation of rain formation through evaporation of water from water bodies<br />
                • Provision of light for seeing<br /><br />

                (iii) plants<br />
                 Some plants provide raw materials for industries<br />
                 Most plants serve as food for animals (including man)<br />
                 Plants produce oxygen, which is used for respiration and other things.<br />
                 Several plants provide wood for energy – firewood and charcoal<br />
                 Certain plants are used for medicinal purposes<br />
                 Some plants are used for aesthetic purposes – to beautify a place.<br />
                 Leguminous plants help to maintain the fertility of the soil, by fixing atmospheric nitrogen.<br />
                 Certain plants check soil erosion by being used as cover crops or wind brakes<br />
                 Some plants serve as a habitat for other living organisms
                 Trees provide timber for furniture and buildings.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Reforestation – planting more trees to replace ones cut down<br />
                (ii) Afforestation – planting more trees to create a forest<br />
                (iii) Recycling of waste – Waste materials which are not biodegradable must be recycled.<br />
                (iv) Legislation – Making and enforcing laws to prevent human activities that cause environmental degradation<br />
                (v) Setting up government agencies to control the activities of miners and sand winners.<br />
                (vi) Encouraging miners, farmers, fishermen, etc to use appropriate methods<br />
                (vii) Public education on protection of the environment<br />
                (viii) Checking erosion by terracing, ridging, planting cover crops and wind brakes<br />
                (ix) Ensuring proper disposal of sewage and industrial waste
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.(a) Outline five contributions of Caliph Abu Bakr to Islam<br /><br /><br />

(b) State two lessons that can be learnt from the life of Caliph Abu Bakr

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (i) He presented Islam to others in such a way that many of his friends accepted Islam<br />
                (ii) Out of compassion for slaves, he deliberately purchased slaves and freed them.<br />
                (iii) He gave the first public address inviting people to convert to Islam<br />
                (iv) Together with the prophet Muhammed, he led the flight to Medina<br />
                (v) He bought a land for the construction of a mosque in Medina<br />
                (vi) He helped to construct a mosque in Medina<br />
                (vii) He was involved in several battles between Muslims and their enemies<br />
                (viii) He led the delegation in the first Hajj pilgrimage to Mecca<br />
                (ix) He gave his daughter, Aisha, in marriage to Prophet Muhammed<br />
                (x) He led Muslims to conquer several territories, which led to the spread of Islam<br />
                (xi) He brought unity among Muslims by resolving many conflicts<br />
                (xii) He organized the compilation of the holy Quran into one book<br /><br /><br />

                (b) Lessons that can be learnt from the life of Caliph Abu Bakr<br />

                (i) Compassion – we must be compassionate<br />
                (ii) Kindness –we must be kind and willing to give to others<br />
                (iii) Commitment – we must show commitment in everything we do<br />
                (iv) Perseverance – we must persevere in doing good things and never give up<br />
                (v) Good stewardship – we must take good care of whatever has been entrusted to us and endeavour to improve upon it.<br />
                (vi) Humility – we must be humble, and not think of ourselves more highly than we should<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
3.(a) Identify five occasions at which libation is offered<br /><br /><br />

(b) In what four ways is libation important?
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
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) Puberty rites ceremonies<br />
                  (ii) Engagements ceremonies<br />
                  (iii) Marriage ceremonies<br />
                  (iv) Festivals<br />
                  (v) Naming ceremonies<br />
                  (vi) National events, such Independence Day<br />
                  (vii) Funerals<br />
                  (viii) Enstoolment / destoolment of chiefs<br />
                  (ix) Commissioning of important buildings, structures, places, etc<br />
                  (x) National and local durbars.<br /><br />

                  b.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) To offer thanksgiving and praises to the objects of worship (Supreme God, lesser gods, ancestors, etc)<br />
                  (ii) To seek protection / security from the deities<br />
                  (iii) To request for blessings – favour, success, prosperity, riches, strength, etc<br />
                  (iv) To confess their evil deeds / wrongdoings and seek forgiveness<br />
                  (v) It promotes unity, solidarity and harmony among the members of the community<br />
                  (vi) It encourages spiritual growth and progress<br />
                  (vii) To strengthen the bond between the worshipper and the object of worship<br />
                  (viii) To express the worshipper’s faith and confidence in the deities (Supreme God, lesser gods, certain spirits)<br />
                  (ix) To show reverence / honour for the deities / object of worship<br />
                  (x) It shows dependence on the deities for well-being and life
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>4.(a) Identify four ways by which people show their commitment to God<br /><br /><br />

               (b) State four reasons why commitment to one’s family is necessary

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  a) Ways by which people show their commitment to God<br />

                  (i) Attending worship sessions (at church / mosque / shrine) as often as one has to<br />
                  (ii) Praying to God in the various ways as prescribed by one’s religion<br />
                  (iii) Studying and obeying the Scriptures or traditions of one’s religion<br />
                  (iv) Giving offering, tithes, sacrifices and other contributions to the church / mosque /
                  shrine<br />
                  (v) Singing and dancing in praise / worship to God<br />
                  (vi) Sharing the principles of their faith with others in order to encourage them to join<br />
                  (vii) Forgiving others who offend them in any way<br />
                  (viii) Offering various kinds of help (financial / material / social, etc) to those who need it<br />
                  (ix) Repenting of their sins and living an upright life
                  (x) Serving the church / mosque / shrine by working in one of their department<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) It strengthens the bond among family members<br />
                  (ii) It helps members to progress steadily in life<br />
                  (iii) Family members can be helped in times of need<br />
                  (iv) It boosts members’ self-worth and confidence<br />
                  (v) It creates peace, love and harmony<br />
                  (vi) It makes the family united and strong<br />
                  (vii) It gives the family a good reputation in society<br />
                  (viii) It helps members to have a peaceful mind in order to work effectively<br />
                  (ix) Family members get to learn and show good moral and behaviour.
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5.(a) Explain any four types of reward available to those who put up good behaviour.<br /><br /><br />

(b) Identify any four acts which are considered to be bad deeds.
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
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) Book awards – Books or other educational material, usually given at schools? and Prize-giving ceremonies, especially to pupils for excellent academic performance.<br />
                  (ii) Cash prizes – Amounts of money given as a reward for a commendable accomplishment<br />
                  (iii) Certificates – Formal documents, usually using a card, given in recognition of the successful completion of a particular course or examination.<br />
                  (iv) Promotion – A raise (an elevation) of the class /status / level/ position of someone after having done satisfactory work at the previous stage.<br />
                  (v) Verbal appreciation – Words spoken, either to the person alone or to the hearing of everyone, to a
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>6.(a) Highlight any five habits which constitute good manners<br /><br /><br />

              (b) Explain any four benefits of showing good manners in the community

</p>

        </div><br /><br />
  <div class="container themed-container">
    <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Answer 
              </button>
            </h4>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) Greeting and respecting others<br />
                (ii) Helping the elderly with their load<br />
                (iii) Offering one’s seat to the elderly<br />
                (iv) Putting one’s hands behind him/ her when speaking with the elderly<br />
                (v) Using polite language, such as „please?, „thank you? and „sorry? when speaking to others<br />
                (vi) Using the proper modes of greeting, such removing one’s hat, using the right hand, lowering one’s cloth / bowing before a chief, etc<br />
                (vii) Doing one’s school chores diligently and faithfully<br />
                (viii) Dressing modestly and decently<br />
                (ix) Avoiding all forms of social vices, such as prostitution, drug abuse, armed robbery, etc.<br />
                (x) Exercising self-control over one’s desires or temper<br />
                (xi) Assisting / helping friends whenever they need help.<br />
                (xii) Doing one’s house chores diligently and faithfully<br />
                (xiii) Obeying good instructions from elderly people<br />
                (xiv) Disposing of litter in a proper way<br />
                (xv) Keeping our bodies and surroundings clean and tidy at all times<br /><br /><br />

                b.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) It brings honour and respect to the person and his/ her family<br />
                (ii) It creates peace and harmony in the community<br />
                (iii) It makes one gain much favour and help from various people.<br />
                (iv) It makes it easy for one to make good friends.<br />
                (v) It creates unity and a sense of togetherness in the community<br />
                (vi) It promotes rapid development of the community<br />
                (vii) It gives the person a high social reputation (how society sees one)<br />
                (viii) The person builds up a high self esteem / confidence (how one sees him/herself)<br />
                (ix) It brings peace of mind (sound mind) to focus on education.<br />
                (x) There is a higher chance of attracting responsible partner for marriage<br />
                (xi) It creates a sense of satisfaction and joy in people<br />
                (xii) It brings spiritual blessings<br />
                (xiii) It can open up several good opportunities for the person

 
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

   7.(a) List the four main types of work<br /><br /><br />

(b) Explain any four advantages of working hard
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
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) School work – Work done at school as part of the curriculum<br />
                  (ii) Home chores – Work done at home / in our houses as part of our responsibilities<br />
                  (iii) Communal work – Work done in / for our communities as part of our social responsibilities<br />
                  (iv) Occupational work – Work done on a regular basis, especially to earn income<br />
                  (v) Humanitarian work – Work done for the good of humankind<br /><br /><br />

                  b.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) It brings honour and respect to oneself<br />
                  (ii) It builds up our self-esteem/ confidence<br />
                  (iii) It keeps us (spirit, soul and body) healthy and active<br />
                  (iv) It increases and sharpens our knowledge and skills<br />
                  (v) It makes as successful<br />
                  (vi) It can bring us riches / wealth<br />
                  (vii) It promotes the development of the society and community<br />
                  (viii) It creates a sense of fulfilment, satisfaction and joy in us.<br />
                  (ix) It makes us spiritually blessed, as we obey God’s word to work hard<br />
                  (x) It can open up several good opportunities for us<br />
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>8.(a) State any four reasons why one should support religious groups with one’s money<br /><br /><br />

(b) In what four ways can such monies be misused?



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
                <p>a.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) To obey God’s commands<br />
                  (ii) To attract the blessings of God<br />
                  (iii) To express one’s commitment to the religious group<br />
                  (iv) To help cater for the needs of the church/mosque/shrine<br />
                  (v) To help pay the salaries / allowances of the fulltime religious workers<br />
                  (vi) To help to support the poor and needy in the group<br />
                  (vii) To support the development and growth of the religious group<br />
                  (viii) To help promote the education and training of religious workers<br />
                  (ix) To help with the missionary work of the group<br />
                  (x) To help the group to pay its bills or meet its financial obligations<br /><br /><br />

                  b.DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) When the leaders spend most on the money on themselves, rather than for the purpose for which the monies were given<br />
                  (ii) When monies are spent on things which are not in the church’s budget<br />
                  (iii) When monies are spent on things considered unnecessary, simply because there seem to be a lot of money available to spend<br />
                  (iv) When monies are used for bribery and corruption<br />
                  (v) When the monies meant for specific purposes are diverted into other areas<br />
                  (vi) When there is embezzlement of funds by an individual or a group of people<br />
                  (viii) When the funds keep piling while needy and poor members keep suffering<br />
                  (ix) When invoices are overstated<br />
                  (x) When proper financial records are not kept properly<br />
                  (xi) Refusing to help people when they need help which one can provide.
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
