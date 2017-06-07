
/*jshint esversion: 6*/
const Counter = {
  rootElement: '#app',
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.buttonInc = document.querySelector('#increment');
    this.inputInc = document.querySelector('#input_increment');
    this.buttonDec = document.querySelector('#decrement');
    this.inputDec = document.querySelector('#input_decrement');

  },

  bindEvents: function(){
    this.buttonInc.addEventListener('click', () =>{
      this.inputIncToNumber = Number(this.inputInc.value);
      this.inputIncToNumber += 1;
      this.render();
    });

    this.buttonDec.addEventListener('click', () =>{
      this.inputDecToNumber = Number(this.inputDec.value);
      if (this.inputDecToNumber > 0){
      this.inputDecToNumber -= 1;
    }
      this.render();
    });

  },

  render: function(){
    this.inputInc.value = this.inputIncToNumber;
    this.inputDec.value = this.inputDecToNumber;
  },

};
Counter.start();
