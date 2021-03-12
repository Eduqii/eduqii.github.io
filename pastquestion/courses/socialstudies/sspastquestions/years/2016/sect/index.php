<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2016 v2.0</title>

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

    <center><h2 class="mt-4">2016 BECE Social Studies Past Questions – Paper Two</h2></center>
    
1. (a) (i) Describe the Solar System <br />
(ii) Name four planets in the Solar System<br /><br />

1(b) Outline two effects of the rotation of the earth.<br /><br />

1(c) Highlight two effects of the revolution of the earth.</p>
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
The system of bodies comprising of the sun, the 8 planets and their satellites (moons), comets, asteroids, meteoroids, and other inter-planetary materials.<br />
a ii.
Mercury, Venus Earth, Mars, Jupiter, Saturn, Uranus and Neptune<br /><br />

b.
[Using complete / meaningful sentences, state and briefly explain any two of the points]<br />

(i) Day and night<br />
(ii) Differences in time (time zones) on the earth<br />
(iii) Deflection of winds and ocean currents<br />
(iv) Rising and falling of sea levels (high and low tides)<br />
(v) Twilight and dawn<br />
(vi) Changes in the earth’s magnetic fields<br /><br />

c.
[Using complete / meaningful sentences, state and briefly explain any two of the points]<br />

(i) The four seasons (Summer, autumn, winter and spring)<br />
(ii) Varying lengths of day and night at different times of the year<br />
(iii) Determines leap year (i.e, whether a year has 365 or 366 days)<br />
(iv) Changes in seasonal temperature<br />
(v) The solar eclipse (ie, eclipse of the sun)<br />
(vi) Equinoxes (the two days of the year when there are equal days and nights)<br />
(vii) Changes in altitudes of the midday sun at different times of the year
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
2.
(a) State four negative effects of rapid population growth on the development
of Ghana.<br /><br />

b) Highlight any four ways by which rapid population growth can be reduced
in Ghana.


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
Using complete sentences, state any four (4) of the points. <br />
(i) High dependency ratio<br />
(ii) Inadequate medical care<br />
(iii) Migration <br />
(iv) Pressure on natural resources / high cost of land <br />
(v) Reduction in capital formation <br />
(vi) Environmental degradation <br />
(vii) Increase in social vices <br />
(viii) Over crowding / congestion <br />
(ix) Pressure on social amenities <br />
(x) Lower standard of living / low per-capita income <br />
(xi) High cost of living <br />
(xii) Environmental pollution <br />
(xiii) High rate of unemployment <br />
(xiv) Poverty <br />
(xv) Increase in crime rate <br />
(xvi) Slums <br />
(xvii) High government expenditure <br />
(xviii) Social unrest <br /><br />
b.
Using complete sentences, state any four (4) of the points and explain each in detail (with relevant examples). <br />
[NB: The marks allotted should guide you on how detailed your answers should be] <br />
NOTE: Write your essay in paragraphs – each point in a different paragraph<br />

(i) Encouraging relatively late marriages <br />
(ii) Family planning <br />
(iii) Legislation on (making laws to control) early marriage <br />
(iv) Education on adequate spacing of children <br />
(v) Checking the inflow of immigrants – nationals from other countries <br />
(vi) Tax relief for small households <br />
(vii) Discouraging polygamy <br />
(viii) Promoting girl-child education <br />
(ix) Increasing gender equality <br />
(x) Economic empowerment of women <br />
(xi) Government policies <br />
(xii) Intensifying education on adolescent reproductive health.
                </div>
            </div>
          </div>
        </div>
              </div><br />
  
<div class="container" id="containers">    
    <p>3. (a) State four characteristics of a good law. <br />

(b) Explain four benefits derived from law and order in a country.</p>
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
Using complete sentences, state any four (4) of the points and explain each
A good law must (be):<br />

(i) in the interest of the people (people centred) <br />
(ii) well publicized <br />
(iii) unambiguous (clear and specific, not vague) <br />
(iv) reasonable <br />
(v) enforceable <br />
(vi) understandable <br />
(vii) fair to all / equality <br />
(viii) acceptable <br />
(ix) meet moral values of the people <br />
(x) backed by authority <br />
(xi) written down <br />
(xii) created and maintained by the state <br />
(xiii) relate to the sovereignty of the people <br />
(xiv) not be retrospective <br />
(xv) able to stand the test of time <br />
(xvi) flexible <br />
(xvii) must have ‘human face’ <br />
(xviii) in accordance with the constitution <br />
(xix) protect the fundamental human rights of the people <br /><br />

b.
Using complete sentences, state any four (4) of the points and explain each in detail (with relevant examples). Write your essay in paragraphs – each point in a separate paragraph <br />

(i) reduces crime <br />
(ii) promotes peace and stability <br />
(iii) protects life and property <br />
(iv) protects human rights <br />
(v) promotes social order / conformity <br />
(vi) encourages social progress <br />
(vii) promotes economic progress <br />
(viii) promotes discipline <br />
(ix) Encourages moral uprightness <br />
(x) Promotes good governance <br />
(xi) Attracts foreign investment <br />
(xii) Promotes unity
              </div>
            </div>
          </div>
        </div></div><br /><br />
              
    <div class="container" id="containers">
    <p>4. (a) Describe the structure of government at the district level in Ghana. <br /><br />

(b) Identify four problems facing District Assemblies in Ghana <br /><br />

(c) Suggest four ways by which the problems identified in (b) can be solved</p>
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
(i) District chief executive <br />
(ii) District assembly <br />
(iii) Area committee <br />
(iv) Unit committee <br /><br />
b.
(i) Poor infrastructural facilities <br />
(ii) Government interference <br />
(iii) Inability to attract investors <br />
(iv) Lack of co-operation from local people <br />
(v) Politicisation of the District Assembly <br />
(vi) Sanitation <br />
(vii) Inadequate funding <br />
(viii) Inability to use fund judiciously (mismanagement of funds) <br />
(ix) Problems of reliable sources of revenue <br />
(x) Community conflicts <br />
(xi) Problems of logistics <br />
(xii) Revenue mobilization <br />
(xiii) Over reliance on the District Assembly Common Fund <br />
(xiv) Inefficient project monitoring <br />
(xv) Low capacity of both staff and members <br />
(xvi) Irregularities in contract awarding system <br />
(xvii) Inefficient education on policies and concept of District Assemblies <br /><br />

Using complete sentences, state any four (4) of the points and explain each in detail (with relevant examples). Write your essay in paragraphs – each point in a separate paragraph <br />
[Note: Your suggested solutions must address the problems you identified in (b) above]<br />

(i) Administrative commitment <br />
(ii) Judicious use of fund <br />
(iii) Provision of handy information by Assembly members <br />
(iv) Accessibility of information <br />
(v) Information that is user friendly <br />
(vi) Explore other avenues of revenue mobilization <br />
(vii) Education <br />
(viii) Reduced government interference <br />
(ix) Peace and order in communities <br />
(x) Improved infrastructural facilities <br />
(xi) Provision of necessary logistics <br />
(xii) Development plan drawn to contain clear and achievable targets <br />
(xiii) Increase people’s participation <br />
(xiv) Regular capacity building of staff and members <br />
(xv) Understanding roles of functionaries
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
    <p>5. (a) State four advantages of saving money with the bank <br /><br />

(b) Highlight four effects of poor handling of currency

</p>
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
                Using complete sentences, state any four (4) of the points and explain each in detail (with relevant examples). Write your essay in paragraphs – each point in a separate paragraph
a.<br />
(i) Easy access to loans <br />
(ii) Convenient money transfer between different accounts <br />
(iii) Available for future use <br />
(iv) Available for unforeseen circumstances <br />
(v) Security and safety of money <br />
(vi) Interest on saving <br />
(vii) Easy to track transaction / account history <br />
(viii) Easy access to other bank services <br />
(ix) Reduces careless spending habits <br />
(x) Investment starting point <br />
(xi) Easy to withdraw<br /><br />

b.
(i) Destruction of beauty of money <br />
(ii) Contamination with pathogenic bacteria <br />
(iii) Source of transmission of diseases <br />
(iv) Rejection <br />
(v) Replacement at high cost to government <br />
(vi) Capable of causing skin diseases contamination <br />
(vii) Platform for growth of bacteria <br />
(viii) Causes of food poisoning <br />
(ix) Causes of food borne diseases
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
    <p>6. (a) (i) What is a State Enterprise? <br />
(ii) What is a Private Enterprise?<br /><br />

(b) Suggest four ways by which the state can promote private enterprises.</p>
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
                a)
i.State owned enterprises are business entities established by the state / government to provide certain essential public services at affordable / low cost <br /><br />

ii. Private Enterprises are businesses owned and managed by individuals with the aim of making profit <br /><br />

b.
Using complete sentences, state any four (4) of the points and explain each in detail (with relevant examples). Write your essay in paragraphs – each point in a separate paragraph <br />

(i) Suitable economic environment for business <br />
(ii) Suitable political environment for business <br />
(iii) Ensuring production of quality goods and services <br />
(iv) Control / check on importation of goods and services <br />
(v) Financial support guarantees / credit guarantees <br />
(vi) Trade mission sponsorship <br />
(vii) Tax deferrals <br />
(viii) Granting tax rebates <br />
(ix) Advertising products <br />
(x) Government directly holding equities in private enterprises <br />
(xi) Facilitation of access to market <br />
(xii) Facilitation of access to information. <br />
(xiii) Facilitation of access to business networks <br />
(xiv) Legal and regulatory support <br />
(xv) Patronizing made-in-Ghana goods and services <br />
(xvi) Provision of basic infrastructure <br />
(xvii) Organization of training courses / establishing entrepreneurial institutions <br />
(xviii) Trade fair supports <br />
(xix) Grants and cash advances 
              </div>
            </div>
          </div>
        </div></div><br /><br />

  <div class="container-xxl themed-container"><center>Good Luck</center></div>
</main>


    
  </body>
  <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
