<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2014 v2.0</title>

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

    <center><h2 class="mt-4">2014 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

1.(a) Describe the call of Moses by God.<br /><br /><br />

(b) What three lessons can be learnt from the life of Moses
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
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                Introduction<br />
                • Moses fled from Egypt, where he was brought up in Pharoah’s palace, to Midian after he killed an Egyptian.<br />
                • Moses married Zipporah and became the shepherd of the sheep of his father-in-law, Jethro.<br /><br />

                The burning bush<br />
                • One day, as Moses was taking care of the sheep in the desert, he saw a bush in flames which was not actually burning.<br />
                • As Moses drew closer to see, God called him from the burning bush and instructed him not to draw closer any more.<br />
                • He was told to remove his sandals because the land on which he was standing was holy.<br />
                • He told Moses go to Egypt to rescue His people<br />
                • Moses gave excuses and God gave a way out of each one of them to reassure him.<br /><br />

                The dialogue<br />
                • God said to Moses ‘come, I will send you to Pharaoh to inform him that he should let my people go.’<br />
                • Moses replied and said to God ‘who am I to go to Pharaoh and bring the children of Israel out of Egypt’<br />
                • So God said to him, ‘I will be with you. When you bring the people out you shall serve God on this mountain.’<br />
                • Then Moses said again ‘if I go and tell them God has sent me and they ask me of your name, what should I tell them’<br />
                • God told Moses, ‘tell them that I AM WHO I AM has sent you’<br />
                • God then gave Moses further details and yet Moses was still not convinced and told God that they will still not believe him.<br />
                • God then asked Moses what he was holding and he replied saying, ‘a rod’. God told him to throw it onto the floor. Moses did so and the rod became a snake. Moses became afraid and started to run. God now instructed him to take the snake by the tail, which he did and it turned into a rod again.<br />
                • He also told Moses to put his hands in his bosom, and Moses did so. When he removed it, his hand had leprosy. So God asked him to put it back into his bosom and it became healed, after he had done so.<br />
                • God finally told him that ‘if after these two signs they still do not believe you, then take water from their river and pour it on a dry land. The water will become blood.<br />
                • In spite of these signs and assurance from God, Moses gave yet another excuse, ‘O my Lord, I am not eloquent. I am slow in speaking’<br />
                • God was patient with Moses and assured him that He will be with him and teach him what to say.<br />
                • Moses was not convinced and asked God to send someone else. This time, God became angry with Moses and now told him that he will let Aaron his brother go with him and be his spokesman.<br /><br />
                The Departure<br />
                • Moses finally agreed; went back home to ask permission of his father-in-law, Jethro, and left for Egypt with his wife and children. <br /><br /><br />

                b.<br />
                DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                (State, relating to story and briefly explain)<br /><br />

                • Diligence / Hardwork –<br />
                Moses was diligently taking care of the sheep of his father-in-law when God called him. We learn that we should also be hard working at school, home and wherever we are.<br />
                • We must be responsible and stop giving excuses.<br />
                Initially, Moses didn’t want to heed God’s command and kept giving excuses, which eventually made God angry.<br />
                • Patience / tolerance –<br />
                Despite Moses’ excuses, God was patient with Moses and helped him to overcome his initial fear. We must also learn to be patient with others who do not meet our expectations, and rather help them out.<br />
                • Obedience –<br />
                Although Moses was fearful and hesitant, he obeyed all the instructions that God gave him. We must also be obedient to God, our parents, teachers and other older people, whenever they give us good instructions.<br />
                • Omnipotence of God / Faith in God –<br />
                God showed by the signs he gave Moses that He is truly all powerful. We therefore need to have faith in God to help us whenever we call on Him. There is nothing God cannot do.<br />
                • Courage / Boldness –<br />
                Initially, Moses was not courageous and didn’t want to go. We must always be bold to do any good thing that must be done, knowing that God has already empowered us and He is with us all the time.<br /><br />
                • Humility –<br />
                Moses finally humbled himself unto God and heeded God’s call. He also showed humility when he went back to Jethro, his father-in-law to request permission before leaving. We must also humble ourselves unto God, our parents, older brothers and sisters, etc.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2.(a) Explain the following types of prayer in Islam:<br /><br />

                (i) Jumu’ah<br />
                (ii) Tarawih<br />
                (iii) Tahajjud<br />
                (iv) Janazah<br /><br /><br />

                (b) State four things that spoil Wudu.</p>

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
                <p>DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED ,IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) Jumu’ah<br />
                  This is Friday prayer said congregationally. It is said between 1:00 and 1:30pm<br /><br />

                  (ii) Tarawih<br />
                  This is a prayer said during the month of Ramadan<br /><br />

                  (iii) Tahajjud<br />
                  Also known as the “night prayer” is a voluntary prayer, performed by followers of Islam. It’ is any prayer performed after Isha time.<br /><br />

                  (iv) Janazah<br />
                  This is a special prayer said for the dead in Islam.<br />
                  It is believed by Muslims that this prayer allows the soul of the dead gain pardon from Allah for the sins committed while alive<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED ,IF REQUIRED, INTO ESSAY FORM FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (Note: State and briefly explain)<br />
                  (Write complete and meaningful sentences)<br /><br />

                  Introduction<br />

                  Wudu is washing of some parts of the body by Muslims before Salat.
                  Some of the parts are the hair, feet, hands, nostrils, mouth, ear, etc.<br /><br />

                  Things that spoil Wudu<br />
                  • Washing with dirty water<br />
                  • Contact with blood<br />
                  • Farting<br />
                  • Stepping on faeces with barefoot<br />
                  • Sexual arousal and sex<br />
                  • Wearing dirty cloths<br />
                  • Performing Wudu in a dirty environment<br />
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
3. (a) Explain four features of traditional religious homes.<br /><br /><br />

(b) State four benefits that can be derived from interacting with members of other religions.
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
                <p>a. DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                    (Write an essay in at least four (4) paragraphs explaining, with examples, any four features)<br /><br />

                    SUGGESTED POINTS FOR YOUR ESSAY<br />
                    First define a traditional religious home<br /><br />

                     The presence of smaller gods / idols.<br />
                     The use of proverbs, myths, storytelling is very common in these homes<br />
                     The performance of sacrifices and libation<br />
                     The belief in totems and destiny<br />
                     Celebration of festivals and religious rites are common<br /><br /><br />

                    b.<br />
                    DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                    (Note: State and briefly explain)<br />
                    (Write complete and meaningful sentence<br />s)
                    Introduction<br />
                    Religion is a set of beliefs held and worship of a superhuman by a group of people.<br />
                    eg. Christianity, Islam, African Traditional Religion, Buddhism etc.<br /><br />

                     It brings religious tolerance<br />
                     It reduces terrorism<br />
                     It leads to unity and development<br />
                     It increases our understanding and tolerance of other religions<br />
                     It leads to peaceful co-existence<br />
                     It widens our scope of knowledge<br />
                     It opens our minds to new ways of doing things
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">
  
          <p>4.(a) Explain four ways by which people can comport themselves.<br /><br /><br />

(b) State four reasons why you should comport yourself.

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
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (Write an essay in paragraphs to explain four points – Give situations, where and when to show these behaviors)<br /><br />

                  SUGGESTED POINTS FOR YOUR ESSAY<br /><br />

                  (First define comportment and give examples)<br /><br />

                  Comportment is one’s ability to behave in a manner that brings self- respect<br />

                  • Control of one’s temper<br />
                  • Eating at the right place and at the right time<br />
                  • Disposing of refuse in the proper way – putting into rubbish bins<br />
                  • Freeing one’s bowels at the appropriate places<br />
                  • Avoiding fighting in public<br />
                  • Apologizing for one’s mistakes<br />
                  • Showing respect for authority<br />
                  • Paying attention in class or at meetings<br />
                  • Respecting the views of others<br />
                  • Dressing appropriately for an occasion<br />
                  • Greeting and respecting others<br />
                  • Speaking politely to others., etc<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (Note: State and briefly explain)<br />
                  (Write complete and meaningful sentences)<br /><br />

                  • It brings respect to oneself<br />
                  • It brings favor<br />
                  • It allows one to fit into a group<br />
                  • It enhances good relationship<br />
                  • Comportment enhances orderliness and peace<br />
                  • It brings blessings from man and God etc.
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5(a) Describe four processes involved in showing repentance<br /><br /><br />

(b) Outline four reasons for showing regret for one’s wrong deeds.
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
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  Write a short essay in at least four (4) paragraphs describing, with examples, the four processes)<br /><br />

                  SUGGESTED POINTS FOR YOUR ESSAY:<br /><br />

                  Introduction<br />
                  Define the word repentance.<br />

                  (i) Realize / admit fault or sin committed<br />
                  (ii) Show deep regret for action<br />
                  (iii) Request for pardon from person or God<br />
                  (iv) Make a strong resolution not to repeat the act.<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (Write an essay in at least four (4) paragraphs using any four reasons)<br /><br />

                  SUGGESTED POINTS FOR YOUR ESSAY<br /><br />

                  Introduction<br />
                  Define the word regret and give examples<br /><br />

                  • To appease the offended person / God.<br />
                  • To ensure unity and peace<br />
                  • To renew friendship / cordiality<br />
                  • To bring about forgiveness<br />
                  • To avoid hatred and resentment<br />
                  • To save a person from eternal destruction<br />
                  • To regain trust / confidence
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>
6(a) State three main reasons each why rules and regulations are useful<br /><br /><br />

(b) Outline four benefits of taking instructions from elders.

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
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (i) at home [6 marks]<br /><br />

                  (Note: Define rules and regulations first and give examples)<br /><br />

                   They help to maintain order in the home<br />
                   They instill discipline / good behaviour in both parents and children<br />
                   They promote peace and unity in the home<br />
                   They encourage responsible behavior<br />
                   They help to cultivate tolerance in people<br /><br />

                  (ii) Reasons why rules and regulations are useful in the community. [6 marks]<br />

                   They help to maintain order in the communitty<br />
                   They instil discipline / good behaviour in members of the community<br />
                   They promote peaceful coexistence in the community<br />
                   They create an atmosphere of security<br />
                   They encourage responsible behaviour<br />
                   They help to cultivate tolerance in people<br />
                   They help to improve the standard of that community<br />
                   They help to protect one’s fundamental human rights<br />
                   They help to protect life and property<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (List and give brief explanation)<br />
                  (Note : Define elders first and give examples)<br /><br />

                  (i) It helps us gain favour from them<br />
                  (ii) It maintains good neighbourliness<br />
                  (iii) It also develops our behaviour and character<br />
                  (iv) It makes us avoid certain dangers<br />
                  (v) It protects our future<br />
                  (vi) It helps us to develop spiritually<br />
                  (vii) It pleases God – attracts blessings from God
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

    7(a) List four factors that promote good family relationship<br /><br /><br />

(b) Explain four benefits of healthy relationship among family members.
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
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />
                  (Note: First define good family relationship)<br />

                  (Briefly explain four of these points.)<br /><br />

                  a) Tolerance<br />
                  b) Respect for the elderly<br />
                  c) Sharing<br />
                  d) Commitment<br />
                  e) Obedience<br />
                  f) Love<br />
                  g) Socialization<br /><br /><br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (Write an essay in at least four (4) paragraphs explaining any four benefits, with examples)<br /><br />

                  SUGGESTED POINTS FOR YOUR ESSAY<br /><br />

                  a) It leads to peace and harmony<br />
                  b) It promotes family projects<br />
                  c) It strengthens the family bond<br />
                  d) It allows one to get good moral training<br />
                  e) It enables family members to support one another in times of need.<br />
                  f) It brings respect and honour to the family.<br />
                  g) It reduces the tendency for waywardness among family members<br />
                  h) It brings both physical and spiritual blessings<br />
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>8(a) Outline four reasons why naming ceremony is important in your community.<br /><br /><br />

(b) State four factors to be considered when choosing a name for a child.



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
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (Write an essay in at least four (4) paragraphs explaining any four reasons, with examples)<br /><br />

                  SUGGESTED POINTS FOR YOUR ESSAY<br /><br />

                  (Note : First define naming ceremony with examples)<br /><br />

                  (i) It gives the child a name as his/her identity<br />
                  (ii) It initiates the child into the family and community<br />
                  (iii) It is used to dedicate the child to God.<br />
                  (iv) It promotes unity among the family members<br />
                  (v) It promotes socialization among well-wishers.<br />
                  (vi) It is used to seek protection and blessings for the child.<br />
                  (vii) It provides the chance for well-wishers to contribute towards the upkeep of the child<br />
                  (viii) It brings respect and honour to the parents and family<br />

                  b.<br />
                  DISCLAIMER: ANSWERS PROVIDED ARE ONLY GUIDELINES TO BE EXPANDED INTO ESSAY FORM, IF REQUIRED, FOR FULL MARKS IN THE EXAMINATION.<br /><br />

                  (State and briefly explain)<br /><br />

                  First define the term name<br /><br />

                  (i) Day of birth<br />
                  (ii) Tribe of family<br />
                  (iii) Family name<br />
                  (iv) The meaning of name<br />
                  (v) Sex or gender of child<br />
                  (vi) Religion of family<br />
                  (vii) Circumstance of birth<br />
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
