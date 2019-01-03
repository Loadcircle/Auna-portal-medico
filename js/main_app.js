(function(){
    let toggle_menu = document.querySelectorAll('.toggle_menu');
    let only_not = document.querySelector('.bell.toggle_menu');
    let only_not_mob = document.querySelector('nav.only_mobile .bell.toggle_menu');
    if(toggle_menu){
        toggle_menu.forEach(function(k){
            k.addEventListener('click', function(){
                this.classList.toggle('active');
            })
        })
        
        if(only_not){
            only_not.addEventListener('click', function(){
                this.classList.toggle('active_d');
            });
        }
    }

    if(only_not_mob){
        only_not_mob.addEventListener('click', function(){
            this.classList.toggle('active_d');
        });
    }
    const menu_portal_btn = document.getElementById('deploy_menu_btn');
    const menu_portal = document.getElementById('deploy_menu');

    if(menu_portal && menu_portal_btn){
        menu_portal_btn.addEventListener('click', function(){
            menu_portal.classList.toggle('active');
        });
    }
    
    



    

    let sede_click = document.getElementById('sede_click');
    let sede_deploy = document.getElementById('sede_deploy');
    let change_sede  = document.querySelector('.change_sede ');
    
    if(sede_click){
        sede_click.addEventListener('click', function(){
            change_sede.classList.toggle('active');
        })
    }
    


})();