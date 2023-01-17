(function () {
  'use strict';

  // Define values for keycodes
  var VK_ENTER = 13;
  var VK_SPACE = 32;
  var VK_LEFT = 37;
  var VK_UP = 38;
  var VK_RIGHT = 39;
  var VK_DOWN = 40;

  // Helper function to convert NodeLists to Arrays
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function RadioGroup(id) {
    this.el = document.querySelector(id);
    this.buttons = slice(this.el.querySelectorAll('.radio'));
    this.focusedIdx = 0;
    this.focusedButton = this.buttons[this.focusedIdx];

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  RadioGroup.prototype.handleKeyDown = function (e) {
    console.log(e)
    switch (e.keyCode) {

      case VK_UP:
      case VK_LEFT: {

        e.preventDefault();

        // This seems like a good place to do some stuff :)
        console.log('this', this);
        console.log('this.focusedIndx', this.focusedIdx);
        console.log('e.keyCode', e.keyCode);
        console.log('e', e);

        if (this.focusedIdx === 0) {
          console.log('focusedIdx is 0')
          this.focusedIdx = this.buttons.length - 1;
          console.log('new focusedIdx is ', this.focusedIdx, 'because this.buttons.length is ', this.buttons.length);
        } else {
          this.focusedIdx === -1;
        }


        break;

      }

      case VK_DOWN:
      case VK_RIGHT: {

        e.preventDefault();

        // This seems like a good place to do some stuff :)
        if (this.focusedIdx === this.buttons.length) {
          console.log('this.focusedIdx is equal to this.buttons.length. That means they are both ', this.focusedIdx);
          this.focusedIdx = 0;
          console.log('we have reset this.focusedIdx to be 0.')
        } else {
          console.log('this.focusedIdx is currently ', this.focusedIdx, 'and will be increased...')
          this.focusedIdx++;
          console.log('the focusedIdx is now ', this.focusedIdx);

        }

        break;
      }

    }

    this.changeFocus(this.focusedIdx); // <-- Hmm, interesting...
  };

  // This gets called when the focus is changed
  // idx is always 0
  RadioGroup.prototype.changeFocus = function (idx) {
    // console.log(this)
    // Set the old button to tabindex -1
    this.focusedButton.tabIndex = -1;
    this.focusedButton.removeAttribute('checked');

    // Set the new button to tabindex 0 and focus it
    this.focusedButton = this.buttons[idx];
    this.focusedButton.tabIndex = 0;
    this.focusedButton.focus();
    this.focusedButton.setAttribute('checked', 'checked');
  };

  var group1 = new RadioGroup('#group1');

}());
