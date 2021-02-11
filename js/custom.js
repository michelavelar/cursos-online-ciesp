/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

	

	// TAB Filter
        var state = {
		  tabLinks: document.querySelectorAll('.topics .tab'),
		  cards: document.querySelectorAll('.filtro')
		};

		// event listener
		function updateActive(filter) {
		  
		  state.tabLinks.forEach(function(link) {
		    if (link.dataset.tab === filter) {
		      link.classList.add('active-tab');
		    } else {
		      link.classList.remove('active-tab');
		    }
		  });
		  
		  state.cards.forEach(function(filtro) {
		    // if all is selected, just clear the display property for all the cards. 
		    if (filter === 'all') {
		      filtro.style.display = null;
		      return;
		    }
		    // never reaches here if all was selected
		    
		    if (filtro.dataset.tab === filter) {
		      filtro.style.display = null;
		    } else {
		      filtro.style.display = "none";
		    }
		  });
		}

		// set up event listener
		state.tabLinks.forEach(function(link) {
		  link.addEventListener('click', function() {
		    updateActive(link.dataset.tab);
		  });
		});
    

   

})(jQuery);