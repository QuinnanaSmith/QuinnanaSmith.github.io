let animationMonster = document.getElementById("animationMonster");
let toggle_c  = 0;
let monster = 
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/27a6a91b-9798-4bf6-b8db-fac886a38573/EtYKO4uA3K.json"
        });
        
//tantrum
        animationMonster.addEventListener('click', function (){
            monster.playSegments([110,210], true);
        })

//wiggle feet 

        animationMonster.addEventListener('mouseenter', function () {
            monster.playSegments([31,66], true);
        })

//shrug
        animationMonster.addEventListener('mouseleave', function() {
            monster.playSegemnts ([250,300], true);
        })

//toggle animation

        let toggle = 
        bodymovin.loadAnimation({
              container: animationToggle,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "https://lottie.host/86472a94-ee08-4c3e-8db4-4c888da8e8c6/P6mnd9huiy.json"
            });
    
            animationToggle.addEventListener('click', function (){
                toggle.playSegments([110,210], true);
            })   

            
            //toggle to oneside

            animationToggle.addEventListener('click', function(){
                if (toggle_c == 0) {
                    toggle.playSegments([1,20], true);
                    toggle_c = toggle_c + 1;
                }
                else {
                    toggle.playSegments([21,60], true);
                    let toggle_c = 0
                }
            })


