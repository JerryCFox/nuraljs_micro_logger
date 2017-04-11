module.exports.log=log;
module.exports.init=init;

var lcd=0;
var lcd_module;
var lcdconfig;
var history=[];
var err=null;

function init(options,cb){
    if(options){
        if(options.lcd){
            lcd=1;
            lcd_module=options.lcd;
            if(options.lcdconfig){
                lcdconfig=options.lcdconfig;
            }
        }
        cb(err,"Logger Ready");
    }
    else{
        cb(err,"Logger Ready");
    }
}

function log(message){
    console.log(message);
    if(lcd){
        if(lcdconfig){
            if(lcdconfig.lines){
                //console.log(history);
                history.push(message);
                if(history.length>lcdconfig.lines){
                    history.shift();
                }
                var output="";
                for(var i=0;i<history.length;i++){
                    output+=history[i]+"\n";
                }
                lcd_module.log(output);
            }
            else{
                lcd_module.log(message);
            }
        }
        else{
            lcd_module.log(message);
        }
    };
}


    
