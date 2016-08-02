Template.prestadoresContainer.helpers( {
   display: function (elem) {
      if((Session.get('view')==='especialidades' && elem=='especialidades')||
        (Session.get('view')==='all' && elem=='prestadores')){
        console.log('entro');
        return "display:block";
      }
      else{
        return "display:none";
      }
        // $('#div_prestadores').css("display", "none");
        // $('#div_especialidades').css("display", "block");

   },
  //  display_prestadores: function (elem) {
  //    console.log('elem:',elem);
  //     if(Session.get('view')==='all'){
  //       console.log('entro');
  //       return "display:block";
  //     }
  //     else{
  //       return "display:none";
  //     }
  //       // $('#div_prestadores').css("display", "none");
  //       // $('#div_especialidades').css("display", "block");
   //
  //  }
 });
