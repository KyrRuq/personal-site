//testing testing

// #region Typewritter
// hm, cant seem to find a way to make this function only when in the 
// users viewport. Maybe disable for now?//
document.querySelectorAll(".type").forEach(el => {
  const text = el.textContent.replace(/\s+/g, " ").trim();
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 25);
    }
  }
  type();
});

// as learned in class, the document selects the whole page, and the 
// query selector applies it to anything I put the class "type" on. 
// Line 2 starts a loop that
// happens independently for each element that the query chooses.
// Line 3 reads the lines of text, and saves it temporarily (?),
// then Line 4 wipes what was previously there (the original text)
// and then retypes it in as defined later.
// Line 5 is a way of saying start at the beginning (changing it to 7
// seems to erase the first 7 characters of the text/not type them out.
// Line 7s if statement means if the typed out length does not yet match
// the copied length, it keeps going (go until finished).
// Many similarities to python in my eyes. Line 8 uses the same index format,
// same starting point too (0, not 1), += is still shorthand for "this thing
// is now this thing + what I'm typing next." i++ is the same shorthand as +=,
// but for i,
// telling the code to continue to the next character (?).
// Line 9 is the delay between characters, in ms.//

document.querySelectorAll(".type-title").forEach(el => {
  const text = el.textContent.replace(/\s+/g, " ").trim();
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 80);
    }
  }
  type();
});
// #endregion Typewritter

// #region Prank Button
// The absolute wall of text; not great. Try line by line comments?
if (localStorage.getItem("pranked") === "yes") {
    localStorage.removeItem("pranked");

// This if statement only plays if it detects that the user has been 
// "pranked," as defined below. If they have, then this code plays, and 
// the "prank" status is reset.//

// localStorage is the only thing on a page that persists past a reset/refresh.
// Is this what Cache Storage is? Thats why it can fill up, its stuff sites save 
// that persists?//

    const whiteout = document.getElementById("whiteout");
    const resultBlock = document.getElementById("prank-result");
    const secondMessage = document.getElementById("message-2");
    const enterButton = document.getElementById("enter-site");

// like query, getElement grabs ids by whats written, then saves them as 
// a "const" (constant), like saving a variable in python. The name after 
// const is arbitrary, to be used in JS itself. Try to get used to this 
// "lowercase uppercase" naming convention, believe we do it/is recommended to 
// in Intro to Programming. Hmm. //

    whiteout.classList.add("active");

// This is where the CSS mentioned .active comes into play. JS is what 
// commands the CSS to change to this "mode." //

    setTimeout(() => {
        resultBlock.style.display = "block";
        void resultBlock.offsetWidth; 
        resultBlock.classList.add("show");
    }, 400);

// Timeout once again sets a delay, resultBlock was set earlier; its connected 
// to the "prank-result" div. The void line somehow is what stops the text 
// from appearing immediately, still unsure how that works. Check later. The "show"
// change just changes which CSS gets applied/activated. //

    enterButton.addEventListener("click", function () {
        resultBlock.classList.remove("show");
// This has been connected to my go-back-to-my-site button, and allows it 
// to be clicked. //

        setTimeout(() => {
            secondMessage.classList.add("show");
        }, 1500);

// When clicked, this line activates, connected to the secondary message, which 
// then displays (once again, just telling a new CSS section to activate). //

        setTimeout(() => {
            secondMessage.classList.remove("show");
            whiteout.classList.remove("active");
        }, 6000);

// This is what causes the final message to slowly fade out, once the user is 
// sent back to the main page, simply a reverse of previous actions. //

    });
}

let prankArmed = false;
window.addEventListener("beforeunload", function () {
    if (prankArmed) {
        localStorage.setItem("pranked", "yes");
    }
});

// let is a variable that can be reassigned, const cannot. By default, we set 
// it to false, boolean whatcha-ma-call-it. beforeunload is what runs RIGHT
// before the page is "allowed" to close; this is what allows the prank to function. //

document.getElementById("prank-button").addEventListener("click", function () {
    prankArmed = true;

// This is what is connected to the initial button; pressing it sets 
// the rest in motion. //

    document.getElementById("whiteout").classList.add("active");
    setTimeout(function () {
        document.getElementById("message").classList.add("show");
    }, 800);

// Now the whitout is activated, the prank is armed, and the user READY
// TO BE TROLLED MWA-HA-HAAAAA.//

});
// #endregion Prank Button

document.querySelectorAll("button").forEach((button) => {
    addEventListener("click",() => {
        if (button.dataset.state === "e") {
            button.style.backgroundColor = "red";
            button.dataset.state = "a";
        } else {
            button.style.backgroundColor = "green";
            button.dataset.state = "e";
        }
    });
});

// this should change all buttons colors! ^
// color = red isnt working on the 2nd one?? come back later
// ah. button 2 is red by default, no wonder there wasn't a change.
// silly silly 
// WORKS!
// SelectorAll grabs every button, forEach(button) is an arbitrary name
// simple if statement, dataset is just that; sets the data for the variable.
// The state itself can be whatever I like hahaha//

// find a way to "disable" html elements/stop things from showing up,
// unless a button is pressed? Could activate the "neat" bonus things,
// like CSS animations and whatnot. So, the page could be super basic,
// buuut if the button is pressed..its alive!//