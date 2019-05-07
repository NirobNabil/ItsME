// matterJS initializations

//module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
//World.add(engine.world, [boxA, boxB, ground]);

// run the engine
//Engine.run(engine);

// run the renderer
//Render.run(render);

function randNum(min, max) {
    return Math.random() * (max - min) + min;
}

function splitAtLineBreak(DOMTextNode){
    //if(DOMTextNode.querySelector('span') instanceof Element){ return -1 }   //checking if the node contains any span node

    
    let string = DOMTextNode.innerText.trim();                    
    let words = string.split(" ");                              //spliting the words of story for checking where a line ends
    let currentSearchIndex = 0;                                 //this is a kinda pointer to keep track of where the last found word was
    let stringToReplacWith = "";                                
    let newLine = true;                                         //this var says if a new span has to be created in the next iteration of the loop
    for(let i=0; i<words.length-1; i++){
        if(newLine){
            stringToReplacWith += "<span>";
            newLine = !newLine;
        }
        let tempString = "";
        let wordIndex = string.indexOf(words[i], currentSearchIndex);
        tempString = string.slice(0, wordIndex) + "<span>" + words[i] + "</span>" + " " + "<span>" + words[i+1] + "</span>" + string.slice(wordIndex + words[i].length + words[i+1].length +1); //+1 is for the space character between between words[i] and words[i+1]
        DOMTextNode.innerHTML = tempString;
        let spans = DOMTextNode.querySelectorAll('span');
        stringToReplacWith += " " + words[i];
        if(spans[1].offsetTop > spans[0].offsetTop){
            stringToReplacWith += "</span>";
            newLine = true;
        }
        currentSearchIndex = wordIndex + words[i].length;
        //console.log(tempString);
        // console.log(words[i]);
        // console.log(spans[0]);
        // console.log(spans[1]);
        // console.log(spans[0].offsetTop + "  " + spans[1].offsetTop)
        // console.log(currentSearchIndex)
        // console.log(stringToReplacWith);
        if(words[i] == "nulla."){
            //break;
        }
    }
    stringToReplacWith += "</span>";
    DOMTextNode.innerHTML = stringToReplacWith;
}


//function storyAnimation(){
    let storyTextNode = document.querySelector('.story > p')
    
    splitAtLineBreak(storyTextNode);
    let linePadding = 20;
    storyTextNode.style.width = parseInt(getComputedStyle(storyTextNode).width) + linePadding*2 + 'px';
    storyTextNode.querySelectorAll('span').forEach(function(elem){
        elem.style.padding = "0px " + linePadding + "px";
    })

    let storyAttrs = {
        top: storyTextNode.offsetTop,
        left: storyTextNode.offsetLeft,
        right: parseInt(getComputedStyle(storyTextNode).width) + storyTextNode.offsetLeft ,
        width: parseInt(getComputedStyle(storyTextNode).width),
        height: parseInt(getComputedStyle(storyTextNode).height),
        lineHeight: parseInt(getComputedStyle(storyTextNode).lineHeight)
    }
    
    let animContainer = document.querySelector('.about-container > .animation-container');
    let two = new Two({
        width: parseInt(getComputedStyle(animContainer).width),
        height: parseInt(getComputedStyle(animContainer).height),
        type: "SVGRenderer"
    });
    two.appendTo(animContainer);

    //checking how many lines there are in the story
    let linesInText = Math.round(storyAttrs.height) / Math.round(storyAttrs.lineHeight);
    let lines = [];       //an object that'll contain all the lines
    let lineLength = storyAttrs.width + 200;
    let lineDrift = 20
    for(i=0; i<linesInText; i++){
        let line = two.makeRoundedRectangle( parseInt(getComputedStyle(animContainer).width)/2 + randNum(-lineDrift, lineDrift), storyAttrs.top + (storyAttrs.lineHeight/2) + (storyAttrs.lineHeight)*i , lineLength, 2, 4);
        line.fill = "#222222"
        lines.push(line);
    }

    console.log(lines[1])

    //initiializing direction and lastupdate attributes of lines
    lines.map(function(line){
        line.speed = randNum(.3, .5);
        line.direction = '';
        line.lastUpdateTime = new Date();
    })
    two.bind('update', function(){
        lines.forEach(function(line){
            //if(new Date().getTime() >= line.lastUpdateTime.getTime() + 5){
                line.speed = randNum(.1, .3);
                if(line.translation.x <= (two.width/2)-lineDrift){
                    line.direction = 'R';
                }else if(line.translation.x >= (two.width/2)+lineDrift){
                    line.direction = 'L';
                }
                (line.direction == 'L') ? line.translation.x -= line.speed : line.translation.x += line.speed;
                line.lastUpdateTime = new Date();
            //}
        })
    })


    //lines[1].translation.set(230, 130);



    two.play()
    //setInterval(two.update, 100)
//}



//storyAnimation()


