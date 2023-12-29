window.onload = function() {
    var i = 0;
    var j = null;
    var txt = 'Welcome to shift J'; // The text
    var speed = 30; // Speed of typing in milliseconds

    function typeWriter() {
        if (i < txt.length) {
            document.querySelector('.dynamic-title').innerHTML = txt.slice(0, i+1) + '<span class="blink">|</span>';
            i++;
            setTimeout(typeWriter, speed);
        } else if (i === txt.length) {
            j = txt.length;
            setTimeout(eraseWriter, 1660); // 2-second pause before deleting
        }
    }

    function eraseWriter() {
        if (j > 0) {
            j--;
            document.querySelector('.dynamic-title').innerHTML = txt.slice(0, j) + '<span class="blink">|</span>';
            setTimeout(eraseWriter, speed);
        } else if (j === 0) {
            i = 0;
            setTimeout(typeWriter, 1750); // Wait for half a second before retyping
        }
    }

    typeWriter();
};