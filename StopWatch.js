function theControls() {
    const startBtn = document.querySelector("#start");
    const stopBtn = document.querySelector("#stop");
    const resetBtn = document.querySelector("#reset");
    const seconds = document.querySelector("#seconds");
    const minutes = document.querySelector("#minutes");
    let secs = 00;
    let min = 0; 

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

            setInterval(counter, 10);
        
        


    });







    stopBtn.addEventListener("click", () => {
        console.log("yeah")
    });

    resetBtn.addEventListener("click", () => {
        console.log("we got it working");
    })

}

theControls();

