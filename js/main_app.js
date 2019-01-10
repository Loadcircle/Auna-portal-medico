(function(){
    let toggle_menu = document.querySelectorAll('.toggle_menu');
    let only_not = document.querySelector('.bell.toggle_menu');

    //menus sede y perfil
    if(toggle_menu){
        toggle_menu.forEach(function(k){
            k.addEventListener('click', function(){
                
                if(this.classList.contains('active')){
                    this.classList.remove('active');
                }else{
                    toggle_menu.forEach(function(e){
                        e.classList.remove('active');
                    });
                    if(only_not){
                        only_not.classList.remove('active_d');
                    }
                    this.classList.add('active');
                }
            })
        })
        //Campana desktop
        if(only_not){
            only_not.addEventListener('click', function(){
                this.classList.toggle('active_d');
                this.classList.remove('active_bell');
            });
        }
    }

    //Menu portal medico
    const menu_portal_btn = document.getElementById('deploy_menu_btn');
    const menu_portal = document.getElementById('deploy_menu');

    if(menu_portal && menu_portal_btn){
        menu_portal_btn.addEventListener('click', function(){
            
            if(only_not_mob){
                only_not_mob.classList.remove('active_d');
            }
            menu_portal.classList.toggle('active');
        });
    }
    

    //Campana mobile

    let only_not_mob = document.querySelector('nav.only_mobile .bell.toggle_menu');
    
    if(only_not_mob){
        only_not_mob.addEventListener('click', function(){
            if(change_sede){                
                change_sede.classList.remove('active');
            }
            if(app_ambu){
                app_ambu.classList.remove('active_search');
            }
            if(app_eme){
                app_eme.classList.remove('active_search');
            }
            if(app_hops){
                app_hops.classList.remove('active_search');
            }
            if(menu_portal){
                menu_portal.classList.remove('active');
            }
            this.classList.toggle('active_d');
            this.classList.remove('active_bell');
        });
    }


    //Cambio de sede mobile

    let sede_click = document.getElementById('sede_click');
    let sede_deploy = document.getElementById('sede_deploy');
    let change_sede  = document.querySelector('.change_sede ');
    
    if(sede_click){
        sede_click.addEventListener('click', function(){
            if(app_ambu){
                app_ambu.classList.remove('active_search');
            }
            if(app_eme){
                app_eme.classList.remove('active_search');
            }
            if(app_hops){
                app_hops.classList.remove('active_search');
            }
            if(only_not_mob){
                only_not_mob.classList.remove('active_d');
            }
            change_sede.classList.toggle('active');
        })
    }
    
    //Buscador mobile
    
    const search_toggle = document.getElementById('search_toggle');
    const app_ambu = document.getElementById('historia_ambu');
    const app_eme = document.getElementById('historia_emer');
    const app_hops = document.getElementById('historia_hosp');

    if(search_toggle){
        search_toggle.addEventListener('click', function(){
            
            if(only_not_mob){
                only_not_mob.classList.remove('active_d');
            }
            if(change_sede){                
                change_sede.classList.remove('active');
            }
    
            if(app_ambu){
                app_ambu.classList.toggle('active_search');
            }
            if(app_eme){
                app_eme.classList.toggle('active_search');
            }
            if(app_hops){
                app_hops.classList.toggle('active_search');
            }
        });

    }



    window.onclick = function(e) {
        if (!e.target.matches('.toggle_menu') &&
        !e.target.matches('.toggle_menu *') &&
        !e.target.matches('.bell') && 
        !e.target.matches('.bell *') && 
        !e.target.matches('.perfil') && 
        !e.target.matches('.perfil *')){
            var dropdowns = document.getElementsByClassName("toggle_menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
                if(openDropdown.classList.contains('active_d')){
                    openDropdown.classList.remove('active_d');
                }
            }
        }
    }


})();