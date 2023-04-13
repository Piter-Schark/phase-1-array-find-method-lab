// code your solution here
function superbowlWin(array) {
    for (const football of array) {
        if (football.result === "W"){
            return(football.year)
        }
    }
  }

