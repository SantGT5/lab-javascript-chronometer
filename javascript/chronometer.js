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
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
