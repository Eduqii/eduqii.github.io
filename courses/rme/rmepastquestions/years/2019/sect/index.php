<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <link rel="shortcut icon" href="../../../../../../images/favicon.ico">
    <title>Quiz | B.E.C.E 2019 v2.0</title>

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

    <center><h2 class="mt-4">2019 Religious And Moral Education (RME) Past Questions – Paper Two</h2></center>
   

      1. (a) Narrate the parable of the sower. <br /><br />

         (b) State four lessons that can be learnt from the parable. 
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
                <p>(a) A sower went out to sow seeds. As he sowed, some of the seeds fell by the way side, and it was trampled upon, and the birds of the air ate it.<br />
                Some other seeds fell upon a rock, and as soon as it germinated, it withered away; because it lacked moisture since their roots were not deep enough in the ground.<br />

                Other seeds fell among thorns, and as the seeds germinated and grew, the thorns choked them<br />

                Others fell on good ground / fertile soil , grew up, and bore fruits in hundredfold, sixtyfold and thirtyfold</p><br /><br /><br />

                (b) i. We must be doers of the Word of God and not hearers only<br />
                (i.e., we must apply the Word of God to our lives after we have heard it)<br /><br />
                ii. We must obey our parents, teachers and elders and follow their guidance.<br /><br />
                iii. Whatever we are taught in school or at home, we must ensure that we understand it very well, in order to apply it properly.<br /><br />
                iv. We must practically apply the education we are given in school and at home.<br /><br />
                v. We must not allow the enjoyable things of this world (such parties, gossips, TV, internet
                browsing, chatting, games) to draw us away from God / our parents / teachers.<br /><br />
                vi. We must not yield to ridicule (being laughed at) or persecution from others<br /><br />
                vii. We must be steadfast and strong in our faith.<br /><br />
                viii. We must not allow riches or hardships to deceive us to commit sin<br /><br />
                ix. We must persevere and not give up in the face of difficulties<br /><br />
                x. We must not allow our friends or our enemies to make us commit evil<br />
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>2 (a) Describe how marriage rites are performed in Islam.<br /><br />

                (b) In what four ways are marriage rites important.</p>

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
                <p>a) Parents usually cooperate to select partners for their children from the Islamic faith.<br />
                The man does the asking although his mother’s family initiates the proposal.
                A matrimonial guardian(Wali) must be present at the legal representativive.
                Necessary background checks are made to avoid prohibitive marriage.
                The dowry (Mahr), which is determined by the woman’s family is paid in the form of money or property (sadaqi).<br />
                Kolanuts/sweets are shared to show that both families have agreed to the marrriage.<br />
                A wedding ceremony is performed by a licensed imam,Islamic priest or Muezzin almost immediately after the payment of the dowry.<br />
                The mimam reads from the fourth chapter of the Qu’ran and preaches on the importance of marriage.<br />
                In some instances, the couple are asked three times if they agree to be married.<br />
                Matrimoninal guardians serve as representatives.
                The wedding feats follows, there is merry making.
                Relatives and friends and well-wishers present gifts to the couple.
                The bride istaken to her matrimonial home and test of chastity is conducted by her husband.<p><br /><br /><br />

                (b) It Promotes good moral behavior.<br />
                It brings families together<br />
                It seals the marriage<br />
                It ushers the couple into a new stage of life/adulthood<br />
                It introduces the couple to the community<br />
                It promotes respect in the society<br />
                It gives confidence to the couple<br />
                It encourages responsible parenthood
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      3 (a) Describe the process of offering libation<br /><br />

(b). Outline four ways in which libation is important to the believer
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
                <p>(a) Libation is the pouring out of special liquids, especially alcoholic beverages, to a deity or the ancestors.<br />
                Libation is a way by which people pray to a deity<br />
                Those who qualify to offer libation include family heads, linguists, chiefs, fetish priests, etc<br />
                Libation is offered to the ancestors, lesser gods and spirits and to the Supreme God<br />
                The one who offers the libation must remove his hat and footwear as a sign of respect to the deity or ancestors and stands in front of the other members of the praying group <br />
                The prayers are said aloud to the hearing of all those present<br />
                The right hand is used in the offering of libation<br />
                The following procedures are followed; Prelude: the capturing of the attention/ consent of the objects of worship.<br />
                Invocation: the spirits are invoked through rending.<br />
                Petition: petitions/requests are made unto the deity/ancestor to which prayers are being rendered.<br />
                Conclusion: Usually marked by the request for curses upon enemies and blessings upon sympathizers.</p><br /><br /><br />

                (b) To Offer thanksgiving and praises to the objects of worship ( Supreme God,lesser gods, ancestors etc)<br />
                To Seek protection from the deities<br />
                To request for blessings.<br />
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>4 (a) Outline four acts considered as good deeds.<br /><br /><br />

               (b) Describe four types of reward a person may receive for doing good.

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
                <p>a)  Running errands free of charge<br />
                    Helping the aged and physically challenged to cross lorry roads.<br />
                    Reporting criminals to the authorities or the police.<br />
                    Helping to teach someone something he or she does not know<br />
                    Participating in communal labour and general environmental cleanliness<br />
                    Protecting social amenities and properties<br /><br /><br />

                    (b) 1. Priases – words that show approval for something / Encouraging words<br /><br />
                    2. Recommendation – verba or written notices showing how good someone is and therefore should be helped when in need<br /><br />
                    3. A good testimonial which is an account of an individial’s character,academic performance, conduct and behavior.<br /><br />
                    4. Certificates – an official document which gives credence to facts about how a person qualifies or is capable of achieving something.<br /><br />
                    5. Awards – these include cash prices, books, scholarships, citations etc. Which is given to an individual in appreciation for hard work.<br /><br />
                    6. Trophies and medals – in some sports and other competitions, successful and disciplined winners are given medal in appreciation for their efforts.<br /><br />
                    7. Promotions to higher classes or grades for excellent or outstanding deeds.
                </div>
            </div>
          </div>
        </div>
              </div><br />
<div class="container" id="containers">

      5 (a) Outline four ways of getting reconciled with one another<br /><br />

(b)Explain the benefits of Repentance
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
                <p>(a) 1. Forgiveness – pardoning the offender with no condition when remorse or confession or admission of guilt is made.<br />
                    2. Be prepared to have misunderstanding or dispute resolved peacefully.<br />
                    3. Avoid unnecessary arguments and disputes.<br />
                    4. Use of dialogue devoid of vulgar language and mockery<br />
                    5. Taking part in workshops and seminars on peace-building to develop skills for getting on well with others.<br />
                    6. Being a role model by showing good character traits of respect, love, compassion etc.<br />
                    7. Being sympathetic, tolerant and accommodative (open-mindedness)<br />
                    8. Restoration, reparation, and payment of compensation<br />
                    9. Admission of guilt and promise of not doing the wrong things again.<br /><br /><br />

                    (b). 1. It leads to the release of guilt<br />
                    2. It brings restoration of broken relationships<br />
                    3. It promotes unity and peace<br />
                    4. It leads to respect and trust in the individual<br />
                    5. It enables a person to receive forgiveness.<br />
                    6. It helps save a person from eternal punishment.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>6. (a) Define the term Decency<br /><br /><br />

                (b) Describe four behaviours considered as decent in your community<br /><br /><br />

                (c) Give three reasons for leading a decent life.

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
                <p>(a) Decency is an acceptable way of behavior in a given society or community. It includes habits that show respect, honesty etc towards people.<br /> <br /><br />

                    (b) 1. Decent and appropriate dressing<br />
                    2. Proper eating habits and manners<br />
                    3. Greeting the proper way<br />
                    4. The use of polite words and tone in communication<br />
                    5. Being respectful and showing appreciation<br /><br /><br />

                    (c) 1. It serves as the basis for gaining self-respect.<br />
                    2. IT makes individuals gain respect from others<br />
                    3. It makes one earn trust and confidence of others<br />
                    4. It gets individuals closer to God/ It attracts blessings from God<br />
                    5. It shows that people are well trained and brought up<br />
                    6. The community expects members to be decent all the time<br />
                    7. It promotes togetherness and peace in the society.
                </div>
            </div>
          </div>
        </div>
              </div><br />
              <div class="container" id="containers">

      7 (a) List four factors that promote good family relationship.<br /><br /><br />

(b) Explain four benefits of healthy relationships among family members
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
                <p>(a)1. Respect for one another regardless of age, social or economic status in the family.<br />
                    2. Obeying the family rules and regulations, children must obey their parents and elders.<br />
                    3. Good communication among members.<br />
                    4. Cooperation and love other members of the family<br />
                    5. Giving support to others in times of difficulties, e.g. financially etc.<br />
                    6. Members must avoid selfishness and greed<br />
                    7. Forgiveness to foster peace and unity among members.<br />
                    8. Tolerance for each other in the family.<br /><br /><br />

                    (b) 1. It promotes peace, unity and progress and happiness and all members feel free to communicate with one another.<br />
                    2. The family gains respect from other families and become role model to them.<br />
                    3. Members will work hard to defend and protect the good name of the family<br />
                    4. It enables the weak and poor members to seek for help from privileged ones.<br />
                    5. It ensures security against external aggression and attacks.<br />
                    6. It promotes progress of the family.
              </div>
            </div>
          </div>
        </div></div><br /><br />
        <div class="container" id="containers">
  
          <p>8(a) List four religious youth organizations in Ghana<br /><br /><br />

              (b) Explain four moral teachings of religious youth organizations

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
                <p>(a) 1. Scripture union<br />
                    2. Catholic Youth organization<br />
                    3. Methodist youth fellowship<br />
                    4. Baptist youth Association<br />
                    5. Pentecost Youth movement<br />
                    6. Charismatic renewal<br />
                    7. Young Men Christian Association (YMCA)<br />
                    8. Young women Christian Association (YWCA)<br />
                    9. Young people’s Guild<br />
                    10. Ahmadiyya Muslim Youth Organization<br />
                    11. Ahmadiyya Students Union<br />
                    12. Muslim Youth Movement<br />
                    13. Ghana Muslim Students Association<br />
                    14. Asafo Companies<br /><br /><br />

                    (b) 1. Members learn to be disciplined and avoid social vices.<br />
                    2. They teach members to be committed to their faith.<br />
                    3. Communal spirit and patriotism are learned by members.<br />
                    4. They teach stewardship and need to care for others<br />
                    5. They teach/ensure peace and stability in the community<br />
                    6. They teach holiness<br />
                    7. They instill sincerity in the people<br />
                    8. They teach members to be courageous<br />
                    9. They enforce unity and love<br />
                    10. They teach the spirit of hard work<br />
                    11. They teach members to persevere and endure<br />
                    12. They teach members to be truthful and honest.<br />
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
