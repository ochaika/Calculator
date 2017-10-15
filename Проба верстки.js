jQuery("document").ready(function(){
		jQuery("input").on("keyup",function(){
				var val1,val2,val3,val4,val5;
				val1=jQuery("#val1").val();
				val2=jQuery("#val2").val();	
				val4=jQuery("#val4").val();			
				val1=parseInt(val1);
				val2=parseInt(val2);				
				val4=parseInt(val4);
				
				jQuery("#btn1").click(function() { 
				val3=val1+val2;
				jQuery("#result").html(val3);
			});	
		
		
				
				jQuery("#btn2").click(function() {
				val3=val1-val2;
				jQuery("#result").html(val3);
				
			});	
		
				jQuery("#btn3").click(function() {
				val3=val1*val2;
				jQuery("#result").html(val3);
				
			});	
				
				jQuery("#btn4").click(function() {
				val3=val1/val2;
				jQuery("#result").html(val3);
				
			});		
				
				
				
								
				
								
				jQuery("#btn5").click(function() { 
				
				var val4 =$("#val4").val();
				var val5 = 1;
				if (val4 <= 0) {
						return "invalid value";
						}
					else 
						for(i=1; i<=val4; i++){
							val5=val5*i;
						}
				jQuery("#resultat").html(val5);
			});	
			
			
		});
							
				
	});
	
				
	
