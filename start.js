oson.start = {
    vars: {
    	  version : "0.001",
        list:[],    
    },
    start:function(){
    	  for (i=0;jsonb.start.vars.list.length>i;i++){
    	  	   jsonb.start.vars.list[i]();   	  
    	  }
    },
    add:function (newfunction) {
       jsonb.start.vars.list.push(newfunction);
    }
}
window.onload=function(){oson.start.start();};