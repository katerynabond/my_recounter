


/*jshint esversion: 6*/
const Counter = {
  rootElement: '#app',
  countInc: 0,
  countDec: 10,
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.buttonInc = document.querySelector('#increment');
    this.outputInc = document.querySelector('#output_increment');
    this.buttonDec = document.querySelector('#decrement');
    this.outputDec = document.querySelector('#output_decrement');

  },

  bindEvents: function(){
    this.buttonInc.addEventListener('click', () =>{
      this.countInc += 1;
      this.render();
    });

    this.buttonDec.addEventListener('click', () =>{
      if (this.countDec > 0){
      this.countDec -= 1;
    }
      this.render();
    });

  },

  render: function(){
    this.outputInc.textContent = this.countInc;
    this.outputDec.textContent = this.countDec;
  },

};
Counter.start();
