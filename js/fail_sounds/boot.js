document.addEventListener("deviceready", start, false);
document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);
//window.onload = start;

function start(){   
    game = new Phaser.Game(850, 480, Phaser.CANVAS, "");    
      
    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    
    game.state.start("Boot");  
};

var boot = function(game){};
boot.prototype = {
    create: function(){
        game.stage.backgroundColor = '#000000';
        font = 'Luckiest Guy'; 

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
        this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
        
        this.scale.forceOrientation(false, true);
    
        game.state.start('Preloader');
    }
};

function onPause(){
    game.paused = true;
}

function onResume(){
    game.paused = false;
    setTimeout(function(){
        try{
            StatusBar.hide();
        }catch(e){}   
    }, 1000);
}