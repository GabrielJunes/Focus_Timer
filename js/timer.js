export function Timer({
    displayMinutes,
    displaySeconds,
    timerTimeout,
    minutes
    

}) {
    

    function updateTimerDisplay (minutes, seconds) {
        displayMinutes.textContent  = String(minutes).padStart(2, "0")
        displaySeconds.textContent  = String(seconds).padStart(2 , "0")
    }
    
    function countDown () {
        timerTimeout =  setTimeout(function() {
         
             let minutes = Number(displayMinutes.textContent)
             let seconds = Number(displaySeconds.textContent)
             
             if (seconds <= 0 && minutes <= 0) {
                 resetTimer()
                 return
             }
     
     
             if (seconds <= 0) {
                 seconds = 60
                 --minutes
             }
     
             if (seconds <= 10 || minutes <= 10){
                 updateTimerDisplay(minutes, seconds)
             }
     
             updateTimerDisplay (minutes, String(seconds - 1))
             
             countDown()
                   
         },1000)
         }
    
    function resetTimer (){
        displaySeconds.textContent = '00'
        displayMinutes.textContent = 30
    }
    
    function stopTimer() {
        clearTimeout(timerTimeout)
    }
    
    function incrementTimer(){
         let minutesUp= Number(displayMinutes.textContent)
         minutesUp = minutesUp +5
         displayMinutes.textContent = minutesUp
    }

    function decrementTimer(){
        let minutesDown= Number(displayMinutes.textContent)

        if(minutesDown <= 5) {
            minutesDown = minutesDown - minutesDown
            displayMinutes.textContent = minutesDown
        }

        else {
        minutesDown = minutesDown -5
        displayMinutes.textContent = minutesDown
        }
       
        
    }
    
    return {
        countDown,
        stopTimer,
        incrementTimer,
        updateTimerDisplay,
        decrementTimer
    }
}



