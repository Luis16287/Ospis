var inputFields = {
  init: function () {
    function onInputFocus( event ) {
      $(event.target.parentNode).addClass('input--filled');
    }

    function onInputBlur( event ) {
      if(event.target.value.trim() === '') {
        $(event.target.parentNode).removeClass('input--filled');
      }
    }

    Meteor.setTimeout( ()=> {
      [].slice.call( $('.input-field') ).forEach( inputEl => {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
          $(inputEl.parentNode).addClass('input--filled');
        }
        // events:
        $(inputEl).on('focus', onInputFocus);
        $(inputEl).on('blur', onInputBlur);
      });
    }, 0);
  }
};

export default inputFields;
