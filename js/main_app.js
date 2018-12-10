(function(){
    let toggle_menu = document.querySelectorAll('.toggle_menu');

    toggle_menu.forEach(function(k){
        k.addEventListener('click', function(){
            this.classList.toggle('active');
        })
    })
})();



