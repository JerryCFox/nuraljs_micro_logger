module.exports.log=log;
module.exports.init=init;

var lcd=0;
var lcd_module;
var err=null;

function init(options,cb){
    if(options){
        if(options.lcd){
            lcd=1;
            lcd_module=options.lcd;
        }
        cb(err,"Ready");
    }
    else{
        cb(err,"Ready");
    }
}

function log(message){
    console.log(message);
    if(lcd){
        lcd_module.log(message);
    };
}


    
