function theControls() {
    const startBtn = document.querySelector("#start");
    const stopBtn = document.querySelector("#stop");
    const resetBtn = document.querySelector("#reset");
    const seconds = document.querySelector("#seconds");
    const minutes = document.querySelector("#minutes");

    // at first, we had the secs and min set to "let"
    // but that was messing up the function counter()
    // when "reset" and then "start" again
    // the minute left over before the "reset" was still being added to
    // instead of being set to "0"
    // ex 6:45 *reset 0:00, when the next minute is added 
    // instead of 1:00 it was 7:00
    var secs = 00;
    var min = 0; 
    let begin;

    function counter(){
        secs++;

        if (secs <= 09){
            seconds.textContent = "0" + secs;
        } else if (secs === 59){
            secs = 00;
            min ++;
            minutes.textContent = "0" + min; 
            if (min > 9){
                minutes.textContent = min; 
            } 
        } else if (secs > 09){
            seconds.textContent = secs;
        } 
    }

    startBtn.addEventListener("click", () => {
        clearInterval(begin);
        begin = setInterval(counter, 1000);  
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(begin);
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(begin);
        secs = 00;
        min = 0; 
        seconds.textContent = "0" + secs;
        minutes.textContent = "0" + min;
    })

}

theControls();

