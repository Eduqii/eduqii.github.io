<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2018 v2.0</title>

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

    <center><h2 class="mt-4">2018 BECE Social Studies Past Questions – Paper Two</h2></center>
    
    <p>1. (a) List five examples of natural disasters<br/><br/>
(b) Outline five ways by which the physical environment can be protected from degradation</p>
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
               a.
(i) flood torrential rain <br />
(ii) hurricane / typhoon<br />
(iii) tsunamis <br />
(iv) volcanic eruption <br />
(v) land slides <br />
(vi) wildfire / bush fire <br />
(vii) drought <br />
(viii) avalanche <br />
(ix) tornado <br />
(x) earthquake <br />
(xi) earth tremor <br />
(xii) sink holes <br />
(xiii) blizzards <br />
(xiv) cyclonic storms <br />
(xv) thunder storms <br />
(xvi) hail stone <br />
(xvii) heat wave <br />
(xviii) water scarcity <br />
(xix) limnic eruption <br />
(xx) lightning <br /><br />
b.<br />
(i) enforcement of legislation against degradation <br />
(ii) use of appropriate farming methods, eg, contour ploughing, shifting cultivation<br />
(iii) use of appropriate technology <br />
(iv) setting up of conservation of forest <br />
(v) public education <br />
(vi) afforestation <br />
(vii) re-afforestation <br />
(viii) recycle of resources <br />
(ix) using lesser known resources <br />
(x) exploration of alternative energy sources <br />
(xi) proper disposal of waste <br />
(xii) use of bio-degradable materials <br />
(xiii) proper waste management <br />
(xiv) controlling of soil erosion <br />
(xv) use of proper fishing methods <br />
(xvi) forest reserves <br />
(xvii) exploration of alternative sources of resources <br />
(xviii) setting up of conservation agencies <br />
(xix) controlled grazing<br />
(xx) cutting down on consumption of limited resources <br />
(xxi) reuse of physical resources <br />
(xxii) green transportation, eg, the use of bicycles / walking, etc to reduce motor vehicle emission<br />
(xxiii) rain water harvest <br />
(xxiv) pursuing sustainable development goals/ policy <br />
(xxv) environmental monitoring <br />
(xxvi) implementing voluntary action on environmental education, eg, communal labour <br />
(xxvii) keeping vehicles in good condition against emission of excessive smoke <br />
(xxviii) using public transport instead of personal vehicles – to reduce number of motor vehicles on the road, in order to reduce emission <br />
(xxix) environmental impact assessment before establishing industries <br />
(xxx) avoiding the use of genetically modified organisms <br />
(xxxi) partaking in programmes supporting environmental protection. <br />
(xxxii) control of sand winning and mining activities <br />
(xxxiii) planting of trees along water bodies <br />
(xxxiv) setting firebelts <br />
(xxxv) use of proper mining methods
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
2. (a) List five characteristics of the North East Trade winds in Ghana.<br/><br/>
(b) Describe five effects of the North East Trade winds in Ghana.
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
                a. 
(i) Another name is the harmattan <br />
(ii) They blow from the North east of Ghana to the South west of Ghana <br />
(iii) They are usually dry / low relative humidity <br />
(iv) The winds do not bring rains <br />
(v) The winds carry dust along <br />
(vi) They blow around November to February/March <br />
(vii) They bring about hazy weather conditions – causing poor visibility <br />
(viii) They are usually cold / have relatively low temperature<br />
(ix) They are associated with movements of air pressure belts <br />
(x) The cloud cover is low<br />
b.
(i) Causes poor visibility <br />
(ii) Facilitates bush fires / wildfires <br />
(iii) Causes the weather to be cold, dry and dusty <br />
(iv) Prevents rainfall <br />
(v) Causes volume of rivers and water-levels in dams to decrease <br />
(vi) Creates dusty condition – uncovered item become dusty quickly <br />
(vii) Causes discomfort on the eye, skin, nose and body<br />
(viii) Promotes air pollution <br />
(ix) Causes some rivers, streams and other water bodies to dry up <br />
(x) Affects aircraft, rail and ship operations <br />
(xi) Facilitates bush fires <br />
(xii) Causes cracks on lips and feet, which can result in bleeding <br />
(xiii) Enhance salt production <br />
(xiv) Facilitates harvesting and drying of crops <br />
(xv) Facilitates the acquisition of respiratory infections / diseases <br />
(xvi) Facilitates drying of wet clothes and other items <br />
(xvii) Reduces the favourable breeding conditions of mosquitoes <br />
(xviii) Facilitates hunting of animals <br />
(xix) Reduces pasture for animals
                </div>
            </div>
          </div>
        </div>
              </div><br />
  
<div class="container" id="containers">    
    <p>3. (a) (i) Define conflict management.<br/>
(ii) List five sources of conflict in society<br/><br/>

(b) Outline four effects of ethnic conflicts in Ghana.</p>
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
              a.
i) Various measures used to reduce tension during period(s) of misunderstanding to facilitate resolution. <br />

ii)
property <br />
intolerance of people <br />
chieftaincy disputes / power struggle <br />
poor media reportage <br />
suspicion <br />
tribalism / ethnocentrism <br />
human rights abuse <br />
location of public facilities <br />
stereotyping / derogatory remarks <br />
greed / selfishness / covetousness <br />
partiality / injustice<br />
misrepresentation of facts / issues <br />
favouritism / nepotism <br />
Discrimination <br />
Land ownership <br /><br />

b.
(i) loss of property <br />
(ii) loss of lives <br />
(iii) Prevents or slows down development <br />
(iv) discourages local investments <br />
(v) discourages foreign investments <br />
(vi) creates instability / insecurity <br />
(vii) destruction of infrastructure <br />
(viii) intensifies ethnic hatred and bigotry <br />
(ix) human rights abuses <br />
(x) causes suffering among children and women <br />
(xi) displacement of people and property <br />
(xii) increase of government expenditure<br />
(xiii) restriction of goods and services <br />
(xiv) living with constant fear of attack<br />
(xv) imposition of curfews / state of emergency <br />
(xvi) economic activity becomes stagnant <br />
(xvii) lead to famine <br />
(xviii) lead to brain drain / loss of professionals <br />
(xix) lead to emotional and psychological problems <br />
(xx) retardation of education
              </div>
            </div>
          </div>
        </div></div><br /><br />
              
    <div class="container" id="containers">
    <p>4. (a) List four ways through which Ghana co-operate with other nations.<br/><br/>

(b) Outline four reasons for which Ghana co-operate with neighboring countries.</p>
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
                a.
(i) political cooperation<br/>
(ii) social cooperation<br/>
(iii) economic / trade<br/>
(iv) cultural<br/>
(v) educational<br/>
(vi) sports<br/>
(vii) military<br/>
(viii) technical<br/><br/>
b.
(i) sharing of common ideas / technical cooperation<br/>
(ii) fight common interest, eg, hunger, disease,<br/>
(iii) settlement of dispute<br/>
(iv) peace, unity and security<br/>
(v) co-existence / maintain friendly relationship<br/>
(vi) energy supply<br/>
(vii) common industrial and manufacturing projects<br/>
(viii) common banking and insurance facilities<br/>
(ix) improvement of transportation and communication network<br/>
(x) easy movement of goods and services<br/>
(xi) wider markets<br/>
(xii) promote cultural solidarity and sports<br/>
(xiii) solicit financial assistance<br/>
(xiv) relief assistance
              </div>
            </div>
          </div>
        </div></div><br /><br />

    <div class="container" id="containers">
    <p>
5. Outline five ways by which State Owned Enterprises differ from Private Owned Enterprise.</p>
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
                a.
(i) state owned enterprise is set up by central governments while private owned enterprise is set up by private individuals<br/><br/>
(ii) state enterprise is owned by the state, while private owned enterprise is owned by individuals / group of people<br/><br/>
(iii) the motive of setting up state owned enterprise is to provide essential services to people at low prices, while the private owned enterprise is set up to make profit<br/><br/>
(iv) state owned enterprises are controlled/managed by a board of directors appointed by the government, while private owned enterprises are controlled / managed by board of directors appointed by the shareholders / owners of the business.<br/><br/>
(v) state owned enterprises are financed by government, while private owned enterprises raise capital by issuing shares / contributions from shareholders / financed on their own.<br/><br/>
(vi) government bears the losses of state owned enterprises, while owners / shareholders bear losses of private owned enterprises.<br/><br/>
(vii) government pays profit into consolidated account of state owned enterprises while private owned enterprises profits are paid to owners / shareholders<br/><br/>
(viii) government interferes with operations of state owned enterprises, while government does not directly interfere with operations of private owned enterprises.<br/><br/>
(ix) government provides subsidies for state owned enterprises while private owned enterprises pay taxes to government.<br/><br/>
(x) huge capital is involved in the setting up and operations of state owned enterprises, while minimal capital is involved in the setting up and operations of private owned enterprises.<br/><br/>
(xi) government influences pricing of products of state owned enterprises, while private owned enterprises fix their own prices<br /><br />
(xii) government may allow private partnerships in the setting up and operations of state owned enterprises, while private owned enterprises do not allow government partnership in setting up and operations <br/><br/>
(xiii) State owned enterprise is established through the Act of parliament while private enterprise is established through the Registrar General’s Department.
              </div>
            </div>
          </div>
        </div></div><br /><br />

    <div class="container" id="containers">
    <p>6. (a) State four ways by which the health needs of Ghanaians can be improved <br /><br />

(b) Outline four ways by which improved health of people can contribute to national development.</p>
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
                a.
(i) provision of potable water <br />
(ii) health insurance schemes <br />
(iii) improved nutrition <br />
(iv) regular physical exercises<b r/>
(v) public education on the need to seek scientific medical treatment<br />
(vi) development of medical research centres <br />
(vii) training and retraining of medical personnel<br />
(viii) observing proper sanitation and environmental cleanliness <br />
(ix) preventive health education <br />
(x) first aid education <br />
(xi) establishment of health centres <br />
(xii) improvement of existing hospitals and clinic facilities <br />
(xiii) improvement of remuneration of all categories of health workers<br />
(xiv) NGO’s churches and donor agencies be encouraged to assist the health sector <br />
(xv) provision of essential drugs to the hospital <br /><br />

b.
(i) ready and available human resource<br />
(ii) saves income and accumulation of capital <br />
(iii) reduces absenteeism from work <br />
(iv) high human productivity <br />
(v) increases life expectancy <br />
(vi) reduces government expenditure on health <br />
(vii) source of taxes for government <br />
(viii) full utilization
              </div>
            </div>
          </div>
        </div></div><br /><br />
  <div class="container-xxl themed-container"><center>Good Luck</center></div>
</main>


    
  </body>
  <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
