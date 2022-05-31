document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var modals = document.querySelectorAll('.modal')
    var fab = document.querySelectorAll('.fixed-action-btn');
    //var instances = M.Sidenav.init(elems);
     M.FloatingActionButton.init(fab);
     M.Sidenav.init(sidenav);
     M.Modal.init(modals);
  });

  //$('.dropdown-trigger').dropdown();