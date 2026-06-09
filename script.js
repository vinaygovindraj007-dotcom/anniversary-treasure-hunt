const frames = [

{
title:"Step 1",
text:`
Wish you a happy anniversary my darling ❤️

Do you want your gift then find it yourself.

Beneath the shade of an old wise tree,
Where crowds gather happily,
As hearts find comfort there.

Earthenware sing a familiar tune,
From early dawn to afternoon,
Seek the place where relish blend,
Where every Nosh feels like a friend.

Follow the warmth of the rising sun
to find the answer you seek.
`,
answer:"thaza thindi"
},

{
title:"Step 2",
text:`
Well what is the name of the tree
in front of the place?

Go take a better look.
`,
answer:"indian almond tree"
},

{
title:"Step 3",
text:`
Well done.

In a kingdom where hundreds gather,
Yet only a chosen few may speak.

The masses face a single throne,
Waiting for stories they seek.

No crown rests upon the ruler's head,
Yet every eye obeys its call.

For when the lights surrender their glow,
One voice commands them all.

Seek the place where silence becomes power.
And the eyes met led to today

there hidden in the glory of the kingdom
lies the next step of your journey.
`,
answer:"auditorium"
},

{
title:"Step 4",
text:`
Across the seas where dreamers sail,
Beyond each storm and every gale,
A cheerful pirate led the way,
And greeted you at the break of day.
His greatest power was never strength,

Nor how far he could stretch at length,
But how he smiled through every fight,

And filled the darkest days with light.
The first treasure placed in your hand,

Was born from a far-off, wondrous land.
A tiny companion, brave and free,

Who now holds the next clue's key.
The one who protects the key is the one with the answer
.
`,
answer:"luffy"
},

{
title:"Step 5",
text:`
Here brave souls mend broken things,
 Yet this clue grows hidden wings.

Look beyond these healing walls,
 Toward the place where wisdom calls.

Countless dreamers pass its gate,
 Preparing futures yet to create.

Find the citadel of healers that healed you
Deity guards the keep, take the name of the deity and move forward

`,
answer:"ganesha"
},

{
title:"Step 6",
text:`
Before the roses came and went,
Before the countless moments spent,
There was a bloom on a special day,
That quietly took my fears away.

Neither the red of a lover's flame,
Nor the white of snow's pure name,

Not yellow like the morning sun,
Yet somehow it outshone every one.

A shade worn by kings of old,
A gentle mix of calm and bold,


Find the hue that ignited the sparks between
Speak its name to move ahead,
And uncover the map to the key

`,
answer:"purple"
},

{
title:"🎁 Key Found",
text:`
Congratulations baby ❤️

You found the key.

Open the first gift.

Wow nice you are quite fast well done
The journey nears its final page,

 Beyond the halls of learning's stage.
A loyal guardian waits ahead,

 Protecting what he must have built .

Seek the guardian the haze of it
unlocks the path forward

`,
answer:"golden"
},

{
title:"Frame 8",
text:`
The quest is nearly at its end,
Beyond the clues I chose to send.

Seek the keeper of the hound,
 In the place where she is found.

Seek the keeper, loyal and true,
For the faithful hound now waits with you.

Knock upon the familiar door,
And speak the word of ancient lore.

The  sparks that dances, bright and higher,
Utter its name, both warm and dire,

And the hound shall answer

`,
answer:"fire"
},

{
title:"❤️ Final Treasure ❤️",
text:`
The loyal hound has played its part,
Guarding a secret close to heart.

Seek not a key from distant lands,


Look within, not far away,
The answer has been there all day.

Claim the key that the journey led you
The treasure ahead is yours alone,

A secret meant for you to own.
When you reach the final lock and key,

Let no other eyes its contents see.


Happy Anniversary ❤️
`,
final:true
}

];

let current = 0;

function updateProgress() {

let percent =
(current/(frames.length-1))*100;

document.getElementById(
"progressBar"
).style.width = percent + "%";
}

function renderFrame(){

const frame = frames[current];

if(frame.final){

document.getElementById("game").innerHTML = `
<div class="card">
<div class="map-container">
    <img src="images/3527d88b-a31e-43b4-b1a7-28b2bf79fb3b.png" class="map-image" alt="Fantasy Map" onclick="openMap()">
    <button class="expand-btn" onclick="openMap()">🔍 Expand Map</button>
</div>
<h2>${frame.title}</h2>
<p style="white-space:pre-line;">${frame.text}</p>
</div>
`;

updateProgress();

// Launch fireworks for final frame
var duration = 5 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }
  var particleCount = 50 * (timeLeft / duration);
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);

return;
}

document.getElementById("game").innerHTML = `
<div class="card">
<div class="map-container">
    <img src="images/3527d88b-a31e-43b4-b1a7-28b2bf79fb3b.png" class="map-image" alt="Fantasy Map" onclick="openMap()">
    <button class="expand-btn" onclick="openMap()">🔍 Expand Map</button>
</div>
<h2>${frame.title}</h2>

<p style="white-space:pre-line;">
${frame.text}
</p>

<div class="input-group">
    <input
    id="answer"
    placeholder="Enter Answer"
    onkeypress="if(event.key === 'Enter') checkAnswer()">

    <button onclick="checkAnswer()">
    Submit
    </button>
</div>

<p class="error" id="error"></p>

</div>
`;

updateProgress();
}

function checkAnswer(){

const userAnswer =
document
.getElementById("answer")
.value
.trim()
.toLowerCase();

const correct =
frames[current]
.answer
.toLowerCase();

if(userAnswer === correct){

// Trigger success confetti
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
});

current++;

setTimeout(() => {
    renderFrame();
}, 800); // slight delay to enjoy confetti before next frame

}else{

const errElem = document.getElementById("error");
errElem.style.display = "block";
errElem.innerText = "Wrong answer ❤️ Try again";
errElem.style.animation = 'none';
errElem.offsetHeight; /* trigger reflow */
errElem.style.animation = 'shake 0.4s ease-in-out';
}
}

function openMap() {
    document.getElementById("mapModal").style.display = "flex";
}

function closeMap() {
    document.getElementById("mapModal").style.display = "none";
}

renderFrame();