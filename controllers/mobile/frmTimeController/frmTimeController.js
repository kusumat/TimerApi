define({ 

  //This function is called when you schedule the timer
  generateAlert: function()
  {
    alert("You have generated an alert after 3 seconds ");
  },
  //This function is called when you use the setCallBack Timer API  
  callbackfunction: function()
  {
    alert("Hello World");
  },

  /*To cancel the scheduled timer use the below code snipppet. Use the Timer ID of the
  scheduled timer to cancel the timer.
  */
  cancelTimer: function()
  {
    kony.timer.cancel("timer4");
    alert("You have successfully cancelled the timer");
  }

});