class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {

    setInterval(() => {

    return this.currentTime++

    }, 1000);

}

  getMinutes() {
    let minutesPass = 60

    if(this.currentTime > minutesPass){
        return this.currentTime - minutesPass
    }

      if(this.currentTime){


      }

    if(this.currentTime === 0){
      return 0
    }
  }

    getSeconds() {
      return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
      if (value < 10) {
        let result = "0" + value.toString();
        return result;
      }
  
      let result = value.toString();
      return result;
    }

  stop() {

    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
