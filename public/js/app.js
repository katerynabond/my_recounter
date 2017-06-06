/*jshint esversion: 6*/
const Counter = {
  rootElement: '#app',
  count: 10,
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.button = document.querySelector('#decrement');
    this.output = document.querySelector('#output');
  },

  bindEvents: function(){
    //only click events and only on the button
    this.button.addEventListener('click', () =>{
      console.log('Click!');
     if (this.count > 0){
      this.count -= 1;
     }
      this.render();
    });

  },

  render: function(){
    this.output.textContent = this.count;
  },

};
Counter.start();
