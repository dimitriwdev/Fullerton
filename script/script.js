console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  

  
  // Tested on :
  // Firefox 76.0.1
  // Chrome 81.0.4044.138
  // Edge 81.0.416.72


  
  addMyEventListener()

  checkStorage()  // localStorage first step, check if a value has been previously stored

});

function addMyEventListener(){



  /* Accordion */

    $('#accordion > p').hide();             // hide all paragraphs by default

    $('h2').click(function(){               //on h2 click
        $('#accordion > p').hide();         // hide all unclicked paragraphs everytime a h2 is clicked
        $(this).next().show();              // show the paragraph on click heading       
    });





  // Local Storage

  // Creation of a function on button click
  // creation of a variable userName containing the value entered in the input field
  // store the entered value in local storage assigning a key 'userName' to the value

    $('#storeUserName').click(function(){            
      var userName = $('#userName').val();           
      localStorage.setItem('userName', userName);    
    });

    
}


// Creation of a function to verify if a value has been stored previously
// if there is no value, Hello will be display
// if a value has been stored, Hello + value will be display

function checkStorage(){                    
  if(localStorage.getItem('userName') === null){
    $('#greetUser').html('Hello');
  } else {
    $('#greetUser').html('Hello ' + localStorage.getItem('userName'));
  }
}






