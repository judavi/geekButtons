var arraySounds = [];

function playSound(sound) {
    snd = new Audio("Sounds/" + sound + ".mp3");
    arraySounds.push(snd);
    snd.play();
}

function fillScreen(){

    //color, nombre, archivo
	files = 'orange,Badumtss,Badumtss;\
            pink,Ballsofsteel,Balls of steel;\
            blue,Bazinga,Bazinga;\
            green,BennyHill,Benny Hill;\
            red,BirdTheWorld,Bird The World;\
            white,BoomHeadshot,Boom Headshot;\
            yellow,Burned,Burned;\
            orange,Chan,Chan;\
            pink,ChanChan,Chan Chan;\
            blue,Chewbacca,Chewbacca;\
            green,ComboBreaker,Combo Breaker;\
            red,Correct,Correct;\
            white,Crickets,Crickets;\
            yellow,Cuek,Cuek;\
            orange,Developers,Developers;\
            pink,DoaBarrel Roll,Do a Barrel Roll;\
            blue,Doh,Doh;\
            green,Drama,Drama;\
            red,Dramatic,Dramatic;\
            white,Drumroll,Drumroll;\
            yellow,EmergencyYodel,Emergency Yodel;\
            orange,Epic,Epic;\
            pink,EvilLaugh,Evil Laugh;\
            blue,Excellent,Excellent;\
            green,FalconPunch,Falcon Punch;\
            red,Fatality,Fatality;\
            white,FinishHim,Finish Him;\
            yellow,FuckOff,Fuck Off;\
            orange,HaHa,HaHa;\
            pink,HallelujahLong,Hallelujah Long;\
            blue,HallelujahShort,Hallelujah Short;\
            green,Incorrect,Incorrect;\
            red,InetisforPron,Inet is for Pron;\
            white,ItsaTrap,ItsaTrap;\
            yellow,KameHameHa,KameHameHa;\
            orange,KeyBoardCat,KeyBoard Cat;\
            pink,Khaaan,Khaaan;\
            blue,LALALALA,LALALALA;\
            green,Lazor,Lazor;\
            red,Leeroy,Leeroy;\
            white,Legendary,Legendary;\
            yellow,Mario,Mario;\
            orange,MetalGearSolid,Metal Gear Solid;\
            pink,MLB,MLB;\
            blue,Muppets,Muppets;\
            green,Murloc,Murloc;\
            red,Ommm,Ommm;\
            white,Omnom,Omnom;\
            yellow,Over9000,Over 9000;\
            orange,Penny,Penny;\
            pink,R2D2,R2D2;\
            blue,SadTrombone,Sad Trombone;\
            green,ShhAhh,ShhAhh;\
            red,ShutUp,Shut Up;\
            white,StarWarsNoooo,StarWars Noooo;\
            yellow,Swanee,Swanee;\
            orange,Tada,Tada;\
            pink,ThisIsSparta,This Is Sparta;\
            blue,Trollololol,Trollololol;\
            green,Tumbleweed,Tumbleweed;\
            red,VictoryFF,Victory FF;\
            white,Wakawaka,Wakawaka;\
            yellow,WilhelmScream,Wilhelm Scream;\
            orange,Wololo,Wololo;\
            pink,Worng,Worng;\
            blue,Yeahhh,Yeahhh;\
            green,Youareapirate,You area pirate;\
            red,Zas,Zas;\
            white,Zasca,Zasca;\
            yellow,Zelda Item,Zelda Item;\
            orange,Zelda Secret,Zelda Secret;\'';


	individualSound = files.split(';')

	for (var i = 0; i < individualSound.length - 1; i++) {
	    sound = individualSound[i].split(',');
	    MSApp.execUnsafeLocalFunction(
            function () {
                document.getElementById('buttonsContent').innerHTML += '<div class="individualButton"><h3>' + sound[1] + '</h3><a href="#"  class="button ' + sound[0] + ' glossy oval icon xl" onclick="playSound(\'' + sound[2] + '\')"></a></div>';
            }
        );
	}
	
    //Detener el sonido
	document.onkeypress = function (e) {
	    e = e || window.event;
	    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
	    if (charCode == 27) {
	        stopSound();
	    }
	};
}

function stopSound()
{
    for (var i = 0; i < arraySounds.length; i++) {
        arraySounds[i].src = '';
        arraySounds[i].play();
    }
    arraySounds.length = 0;
}

