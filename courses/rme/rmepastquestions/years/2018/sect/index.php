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

    <center><h2 class="mt-4">2018 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

      1. (a) Narrate the Dagomba traditional story of creation.<br /><br /><br />

(b) State three attributes of God according to the Akan.
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
                  To the Dagomba, the Supreme Being (Nawuni) is the creator of the heaven and the earth and all the living things in it.<br />
                  They believe that Nawuni is Omnipotent, Omniscient and Omnipresent and has no partner.<br />
                  They believe that Nawuni took six days to create the world and all creatures
                  The things created by Nawuni include human beings, the sky, animals, vegetation, water bodies, etc<br />
                  Apart from human beings, Nawuni created spirit forces and lesser gods (bola) as his messengers.<br />
                  The lesser gods were created to act as intermediaries between Him and human beings.<br />
                  After six days of creation, Nawuni rested on the seventh day.<br />
                  Nawuni gave laws and principles to humankind to avoid sin.<br />
                  Nawuni is celebrated by the Dagomba, especially during the New Yam season.<br />
                  During the season, the Dagomba express their thanks to Nawuni for bumper harvest and also recognise Him as the creator of the heavens and earth.<br /><br /><br />

                  b.
                (i) God is omnipotent / almighty / all-powerful<br />
                (ii) God is omnipresent / ever present everywhere<br />
                (iii) God is omniscient / all-knowing<br />
                (iv) God is sovereign / Otumfuor<br />
                (v) God is creator of all things / Ɔboadeε<br />
                (vi) God is immortal – forever living<br />
                (vii) God is merciful and kind<br />
                (viii) God is love<br />
                (ix) God gives satisfaction / Nyame<br />
                (x) God is dependable / Tweredeapon<br />
                (xi) God is holy / Ɔkronkron ni
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2. (a) Narrate the covenant God made with Abraham.<br /><br /><br />

                (b) What three lessons can be learnt from God’s covenant with Abraham?</p>

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                a.<br />
                (Write an essay of at least eight brief paragraphs to narrate / explain at least eight of these points)<br />
                  At the age of 75 years, God called Abraham and asked him to leave his country for the land of Canaan.<br />
                  God promised Abraham many descendants who would be a great nation.
                  God blessed Abraham and promised to make him famous.<br />
                  God told Abraham, he would bless those who bless him and curse those who curse him.<br />
                  Abraham built an altar and worshiped God<br />
                  But Abraham did not have a child so he was worried that his servant would inherit him.<br />
                  Then, God promised to give Abraham a child<br />
                  God asked Abraham to perform a sacrifice as a sign that He would fulfil His promise to him<br />
                  Then Abraham had a dream in which God revealed to him that, his descendants would be strangers in a foreign land for 400 years after which they would be freed.<br />
                  God promised Abraham long life.<br />
                  God told Abraham to be obedient and lead a blameless life.<br />
                   God promised Abraham that he would be a father of a great nation<br />
                  God changed Abram’s name to Abraham<br />
                  God sent angels to Abraham’s wife to inform her that she would give birth to a son at old age.<br />
                  The covenant God had with Abraham was extended to all his descendants.
                   God instructed Abraham to circumcise all the male children and new born on the eight day<br />
                  The covenant made Abraham a close friend of God
                  When Abraham was 99 years, God revealed himself to him and declared to him that he was God almighty.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) God is almighty / powerful<br />
                (ii) God must be respected for his greatness<br />
                (iii) He is gracious and deals with people peacefully / with love and mercy<br />
                (iv) God is ready to fulfil his promise to human beings<br />
                (v) God has the power to decide who he chooses to use to fulfil his plans<br />
                (vi) God can change a person and situations<br />
                (vii) Obedience to God and elders attracts blessings<br />
                (viii) We must be patient for God to solve our problems at the right time.<br />
                (ix) We need to have faith and trust to interact with God<br />
                (x) One must be ready to change from his bad ways to win trust and favour from people and God.
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      3. (a) Describe how Christians celebrate Easter.<br /><br /><br />

(b) State four reasons for which Easter feast is important to the Christian.
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
                <p>a. <br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                (Write an essay of at least eight brief paragraphs to state and describe / explain at least eight of these points)<br /><br />

                  Easter is the festivities that comprise Palm Sunday, Good Friday and Easter Sunday<br />
                  Palm Sunday is celebrated to symbolise the triumphant entry of Jesus Christ into Jerusalem with his disciples to celebrate the Passover feast.<br />
                  Christians go to worship with palm branches (frond)<br />
                  They parade through the major streets singing Hosanna songs with drumming and dancing.<br />
                  Good Friday marks the day Jesus Christ was crucified on the cross of calvary.<br />
                  Christians go to worship in the morning and evenings wearing mourning clothes (black, red and black and white) to commemorate the crucifixion of Jesus<br />
                  They symbolically / dramatically mourn the death of Christ and ask for forgiveness of their sins.<br />
                  Some churches sing mourning songs and hymns<br />
                  Some churches celebrate Good Friday at conventions. All these conventions meetings are held in the mornings and evenings.<br />
                  Christians make joyful noise on Sunday to celebrate the resurrection of Jesus
                  They wear colourful or white clothes.<br />
                  During the church services on Sunday, stories of the suffering, death and resurrection of Jesus are told and special prayers and songs are offered.<br />
                  The celebration continues at home after church. Assorted dishes and drinks are served and shared with family members and friends.<br />
                   On Easter Monday, churches organise picnics for members and this is a time of merry-making.<br />
                  Christians use the occasion to make new friends and to demonstrate Jesus’ teachings on brotherly love.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (i) It marks the death and resurrection of Jesus Christ<br />
                (ii) The death of Christ ensures forgiveness of our sins / Christ died for our sins<br />
                (iii) The resurrection story is a pillar of Christian faith<br />
                (iv) It gives Christians courage and hope that the Lord they worship is alive<br />
                (v) The resurrection of Jesus Christ confirms that he is the Son of God.<br />
                (vi) It is the authority that makes Christians feel assured of eternal life through Jesus Christ.<br />
                (vii) Death is only a gateway to eternal life in the kingdom of God<br />
                (viii) Jesus has won victory over death for mankind<br />
                (ix) It preserves and promotes Christian traditional values<br />
                (x) It promotes friendliness and family reunions<br />
                (xi) It is also a time of meeting to plan and raise funds for development.<br />
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>4. (a) Describe four ways by which one can demonstrate good dressing habit to school.<br /><br /><br />

                (b) State four reasons for which students must dress well to school.

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                  (Write a short essay of at least four paragraphs to state and describe any four of these points)<br /><br />
                  (i) Wear neatly washed and ironed uniform<br />
                  (ii) Put on uniforms that cover sensitive parts of the body<br />
                  (iii) Underwear should not be longer than the dress<br />
                  (iv) Shave one’s hairs neatly / comb one’s hair / well kept hair<br />
                  (v) Wear belts on the waist lines appropriately.<br />
                  (vi) Tuck in one’s shirts appropriately<br />
                  (vii) Put on laced shoes and sandals<br />
                  (viii) Wear dresses that are fairly loosed on the body (not too tight)<br />
                  (ix) Keep one’s nails well cut<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (i) To serve as role model to others<br />
                  (ii) It makes one look smart and confident<br />
                  (iii) To meet the expectations of the school and society / maintain one’s dignity<br />
                  (iv) To show that one is well trained and disciplined<br />
                  (v) To attract respect and admiration from others<br />
                  (vi) To avoid exposing parts of the body which can lead to abuse<br />
                  (vii) To promote moral values in society, eg, decency<br />
                  (viii) It attracts rewards from teachers and friends<br />
                  (ix) It shows obedience to God’s commands<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5. (a) Explain four ways of showing commitment to Allah.<br /><br /><br />

(b) State four benefits of showing commitment to Allah.
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                (Write a short essay of at least four paragraphs to state and explain any four of these points)<br /><br />
                (i) Obeying all the commandments of Allah<br />
                (ii) Praying to Allah and believing in him.<br />
                (iii) Studying the Qur’an and other relevant books<br />
                (iv) Being faithful and truthful<br />
                (v) Living good moral life<br />
                (vi) Showing good neighbourliness by helping others / observing sadaqa<br />
                (vii) Fulfilling one’s duties and responsibilities<br />
                (viii) Preaching the word of Allah to others and sharing one’s faith with them<br />
                (ix) Attending congregational prayers<br />
                (x) Sacrificing one’s resources to the course of Allah / Zakat<br />
                (xi) Performance of Hajj<br />
                (xii) Observing the fast during Ramadan and Eid ul fitr<br />
                (xiii) Defending Islam through Jihads<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (i) It gives peace and joy in a person’s life / fulfillment<br />
                (ii) It assures a person of eternal life / salvation<br />
                (iii) It promotes good health and long life<br />
                (iv) It draws protection from Allah<br />
                (v) It makes one responsible<br />
                (vi) It ensures one leads a righteous life<br />
                (vii) It strengthens a person’s faith<br />
                (viii) It improves one’s relation with others<br />
                (ix) It makes one become disciplined / law abiding<br />
                (x) It attracts success and blessings from Allah
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>6.(a) Explain four causes of substance abuse by students.<br /><br /><br />

(b) State four defensive skills that can be used to protect oneself against the abuse of drugs

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                  (Write a short essay of at least four paragraphs to state and explain any four of these points)<br /><br />

                  (i) Bad parenting<br />
                  (ii) Enticement by adults<br />
                  (iii) Influence from the media / advertisement<br />
                  (iv) Lack of self control<br />
                  (v) The influence of foreign culture<br />
                  (vi) Negative peer influence<br />
                  (vii) Ignorance<br />
                  (viii) Refusal to follow medical advice<br />
                  (ix) Immoral living<br />
                  (x) Curiosity<br />
                  (xi) Emotional stress<br />
                  (xii) Depression and poverty<br />
                  (xiii) Rebellion against authority<br />
                  (xiv) For higher academic achievement<br />
                  (xv) To release boredom / tension<br />
                  (xvi) Out of frustration

                  b.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.
                  (i) Refusing to accept drugs offered by peers and adults
                  (ii) Avoiding friends who indulge in drugs
                  (iii) Reading literature about drugs and following correct administration of drugs
                  (iv) Avoiding self-medication
                  (v) Seeking guidance and counselling / Rehabilitation centres
                  (vi) Avoiding taking food and drinks from people who cannot be trusted
                  (vii) Observing and practising good moral teachings in one’s religion.
                  (viii) Avoiding the use of expired drugs
                  (ix) Engaging in sporting activities
                  (x) Abstinence from drugs
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      7. (a) Describe four problems that may arise if parents and children refuse to perform their duties.<br /><br /><br />

(b) State four consequences of anger in the society.
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
                <p>a.
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                (Write a short essay of at least four paragraphs to state and briefly describe any four of these points)<br /><br />

                (i) There will be lack of mutual respect / recognition in the home<br />
                (ii) It affects character formation of children<br />
                (iii) The needs of the family will not be met.<br />
                (iv) There will be no joy / happiness in the home.<br />
                (v) There would be disunity / conflict / broken home<br />
                (vi) God becomes disappointed in both parents and children<br />
                (vii) Children become disappointed in their parents<br />
                (viii) Parents become disappointed in their children<br />
                (ix) It can lead to children becoming street children<br />
                (x) Social vices, such as prostitution, stealing, drug abuse will increase<br />
                (xi) The education of children will be affected, leading to school dropouts<br />
                (xii) Children will lack development of necessary skills for life.<br />
                (xiii) Parents and children will lack respect from society.<br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                (i) It leads to misunderstanding and conflicts<br />
                (ii) It results in punishments, eg, suspensions, dismissals and imprisonment<br />
                (iii) It brings about destruction of property and loss of life<br />
                (iv) It leads to disunity in the society<br />
                (v) It brings loss of respect from parents, teachers and peers<br />
                (vi) It may tarnish one’s image<br />
                (vii) You may lose friends and dear ones<br />
                (viii) Anger may cause mental and other health problems, eg, hypertension<br />
                (ix) It may incur the displeasure of God<br />
                (x) Anger can lead to low productivity / shoddy work or sub-standard work / low level of development in the society<br />
                (xi) It can lead to accidents, eg, road, work, home, etc
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>8. (a) State five rules that govern behaviour in the classroom.<br /><br /><br />

                (b) Explain five reasons for which rules and regulations must be obeyed

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
                <p>a.
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) Students must be punctual and regular at school and class<br />
                  (ii) Students must attend all school gatherings / Participate in all class activities<br />
                  (iii) Students must dress well to class<br />
                  (iv) Students must respect class prefects and teachers<br />
                  (v) Students must not leave class without permission<br />
                  (vi) All must be tolerant and not fight in the classroom or school compound<br />
                  (vii) Students must not disturb in the classroom especially during lessons.<br />
                  (viii) Students must take good care of all school properties.<br />
                  (ix) Students must comport themselves<br />
                  (x) Students must pay attention during lessons<br />
                  (xi) Students must raise their hands and be allowed before they talk<br />
                  (xii) Students must report cases of abuse or confrontations to their teachers<br />
                  (xiii) Students must not steal their friends’ belongings<br />
                  (xiv) Students must submit their home works and class exercises on time<br />
                  (xv) Students must not eat/ drink in the classroom<br />
                  (xvi) Students must sweep the classroom everyday<br />
                  (xvii) Students must not sleep during lessons<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED, IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br />
                  (Write an essay of at least five paragraphs to state and explain, with examples, any five of these points)<br /><br />

                  (i) They help to promote peace and safety<br />
                  (ii) They help to achieve aims and objectives<br />
                  (iii) They help one to be disciplined<br />
                  (iv) They help to attract blessings from God<br />
                  (v) They guide people to work in unity<br />
                  (vi) They help avoid punishment They prevent confusion and conflicts<br />
                  (vii) Protect property of the state / society<br />
                  (viii) They help to differentiate right from wrong<br />
                  (ix) They help to mould our behaviour<br />
                  (x) They help to prevent disgrace and embarrassment / attract respect<br />
                  (xi) They help prevent / reduce crime<br />
                  (xii) They attract rewards from society<br />
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
