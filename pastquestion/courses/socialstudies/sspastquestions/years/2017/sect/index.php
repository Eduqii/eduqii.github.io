<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2017 v2.0</title>

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

    <center><h2 class="mt-4">2017 BECE Social Studies Past Questions – Paper Two</h2></center>
    
    <p>1. (a) (i) Define the term superstition. <br />
(ii) List two examples of superstitious beliefs in Ghana.<br /><br />

(b) Outline five effects of superstitious beliefs in Ghana.</p>
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
It is a belief that is not based on reason of fact and usually instils fear in people. <br /><br />
OR<br />
It is a belief that is not scientifically proven and usually instils fear in people.<br /><br />
ii.
(Mention any two of the following) <br />
a.
Belief in :
taboos / ghosts / wizards (or witches) / juju / curses / deities / myths / magic <br /><br />

b.
(Write an essay of at least five paragraphs to state and explain, with examples, any five of these points) <br />

(i) creates extreme / irrational fear <br />
(ii) slows / retards progress<br />
(iii) prevents scientific growth and development <br />
(iv) allows human rights abuse <br />
(v) brings conflict among family members.<br />
(vi) brings conflict within the society <br />
(vii) creates mistrust/hatred among individuals in a community <br />
(viii) creates tension in the society <br />
(ix) discourages one from seeking appropriate solutions to problems<br />
(x) retards development initiatives <br />
(xi) encourages rest (from work) <br />
(xii) helps maintain law and order <br />
(xiii) promotes environmental conservation and protection <br />
(xiv) controls the spread of communicable/contagious diseases<br />
(xv) prevents people from being wicked to others.<br />
(xvi) lots of money/resources is spent on purification rites and sacrifices <br />
(xvii) prevents crime <br />
(xviii) does not lead to critical / scientific thinking <br />
(xix) promotes outmoded cultural practices
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
      SECTION B <br /><br />

2. (a) State four characteristics of a good map. <br /><br />

(b) Highlight the steps you will take to draw the map of your school compound
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
                A good map should have the following: <br />
a. <br />
(i) Title <br />
(ii) Date <br />
(iii) Scale <br />
(iv) Key / legend <br />
(v) Conventional signs <br />
(vi) Direction <br /><br />

b.
(Using complete sentences, state and briefly explain any eight (8) of the points below)<br />

(i) do a reconnaissance / survey<br />
(ii) do a rough sketch map<br />
(iii) revisit the compound for correction<br />
(iv) measure the length and breadth of compound<br />
(v) choose and state the scale<br />
(vi) draw the outline of the compound using the scale<br />
(vii) insert the outline of the features on the compound.<br />
(viii) show the north pole<br />
(ix) show the key<br />
(x) write the title of the map
                </div>
            </div>
          </div>
        </div>
              </div><br />
  
<div class="container" id="containers">    
    <p>3. (a) Study the table below and match correctly the events in column A against the year it occurred in column B. <br /><br />

(b) Outline four causes of the 1948 riots in the Gold Coast.</p>
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
2017-bece-social-diagram<br / ><br />
b.
(Write an essay of at least four paragraphs to state and explain any four of these points)<br />

(i) the Burns Constitution did not satisfy the political aspirations of the Gold Coasters. <br />
(ii) few African served in the white-dominated civil service <br />
(iii) African businesses were crippled by the Association of West African Merchants (AWAM)<br />
(iv) economic slump/depression after the 2nd World War.<br />
(v) shortage of goods leading to higher prices<br />
(vi) practice of conditional sales / people forced to buy additional goods they did not need<br />
(vii) the attack of swollen shoot diseases on cocoa trees and the financial difficulties as a result.<br />
(viii) the government order to cut down cocoa trees affected by swollen shoots diseases without compensation.<br />
(ix) the plight of the ex-service men / returnee soldiers<br />
(x) the shooting of the three ex-service men<br />
(xi) economy dominated by Syrians and Lebanese nationals<br />
(xii) rising unemployment
              </div>
            </div>
          </div>
        </div></div><br /><br />
              
    <div class="container" id="containers">
    <p>4. Highlight five ways of ensuring political stability in Ghana</p>
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
                (Write an essay of at least five paragraphs to state and explain, with examples, any five of these points) <br />
(i) tolerance to divergent views / different opinions<br />
(ii) respecting the views of the minority <br />
(iii) respecting the fundamental human rights, e.g. freedom of speech, movements, life, etc. <br />
(iv) freedom of the press <br />
(v) accountable and transparent governance <br />
(vi) those in authority accepting constructive criticisms <br />
(vii) the rule of law / enforcing the law<br />
(viii) avoiding dictatorship <br />
(ix) promoting ethnic integration <br />
(x) avoiding politics of insults <br />
(xi) probity and accountability <br />
(xii) inculcating moral values in all members of the society <br />
(xiii) periodic free and fair election <br />
(xiv) access to quality education <br />
(xv) availability of employment opportunities <br />
(xvi) eradication of poverty <br />
(xvii) avoiding tribalism / ethnicity <br />
(xviii) avoiding stereotyping <br />
(xix) national policy for successive governments to follow
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
    <p>5. (a) (i) Define primary production. <br/>
(ii) List two examples of a primary production industry in Ghana. <br /><br />

(b) Identify five problems facing the primary production industries in Ghana </p>
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
                a i)
The production / extraction of raw materials from the nature / natural environment. <br /><br />

a ii.
(Mention any two of the following)<br />

(i) fishing <br />
(ii) mining <br />
(iii) lumbering <br />
(iv) quarrying <br />
(v) salt winning <br />
(vi) farming <br />
(vii) hunting <br />
(viii) gathering fruits and seeds <br /><br />

b.
(Write an essay of at least five paragraphs to state and explain, with examples, any five of these points) <br />

(i) pests / rodents <br />
(ii) diseases <br />
(iii) poor road network <br />
(iv) transportation difficulties <br />
(v) land tenure system <br />
(vi) traditional methods of extraction <br /> 
(vii) inadequate storage facilities <br />
(viii) rainfall vagaries / inconsistent rainfall pattern <br  />
(ix) Inadequate credit facilities <br />
(x) high interest rates on credit facilities <br />
(xi) inadequate capital <br />
(xii) lack of ready market / inadequate ready market <br />
(xiii) price instability <br />
(xiv) high costs of inputs <br />
(xv) competition from imported goods <br />
(xvi) inadequate protection from government policies <br />
(xvii) inadequate labour
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
    <p>6. (a) (i) Define discipline. <br />
(ii) List five acts of indiscipline in the Ghanaian society. <br /><br />

(b) Identify four reasons that account for indiscipline in the Ghanaian society.</p>
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
                a i.
Conforming to rules and regulations governing a group of people <br /><br />

a ii)
(Mention any two of the following)<br />

(i) disrespect to people / disobedience / stubbornness <br />
(ii) gossiping  <br />
(iii) (child) pornography <br />
(iv) alcoholism / drug abuse <br />
(v) bribery and corruption <br  />
(vi) cheating / defrauding / cyber fraud <br />
(vii) rape / defilement <br />
(viii) careless driving  <br />
(ix) overspeeding  <br />
(x) disregard for environmental rules on sanitation /littering the environment <br />
(xi) armed robbery <br />
(xii) insulting attitudes <br />
(xiii) intolerance <br />
(xiv) rebellion and illegal demonstration against authorities  <br />
(xv) poor work attitudes/etiquettes, e.g, procrastination <br />
(xvi) lawlessness, e.g. fighting <br />
(xvii) examination malpractices  <br />
(xviii) petty thieving <br />
(xix) pre-marital sex <br  />
(xx) vandalism <br />
(xxi) gang culture, e.g., bullying, instant justice <br />
(xxii) truancy / malingering <br />
(xxiii) non-performance of civic responsibility <br />
(xxiv) indecent dressing <br /><br />

b.
(Write an essay of at least four paragraphs to state and explain, with examples, any four of these points) <br />

(i) irresponsible parenting <br />
(ii) influence of media  <br />
(iii) influence of foreign movies and culture <br />
(iv) unemployment <br />
(v) poverty <br  />
(vi) peer pressure <br />
(vii) lack of education / ignorance <br />
(viii) curiosity and adventure <br />
(ix) copying unacceptable behaviours of some adults in society <br />
(x) broken homes <br />
(xi) pride in practicing acts of delinquency / truancy / streetism <br />
(xii) the use of drugs and alcoholism <br />
(xiii) inability to enforce rules against indiscipline by institutions <br />
(xiv) crave for material possessions <br />
(xv) breakdown of traditional values and norms <br />
(xvi) urbanization
              </div>
            </div>
          </div>
        </div></div><br /><br />

  <div class="container-xxl themed-container"><center>Good Luck</center></div>
</main>


    
  </body>
  <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</html>
