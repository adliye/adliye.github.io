function hesapla(x, y){
	maktuharc = 179.90;	
	
	if (x == null) { 
		x = 0.00;
	}
	
	x = parseFloat(x * 68.31);
	
	if (y == false) { 
		z = parseFloat(x / 4000);		
	} else { 
		z = parseFloat(x / 20000);
	}
	
	if (z == 0) {
		sonuc = 0
	} else if (z < maktuharc) { 
		sonuc = maktuharc;
	} else { 
		sonuc = z;
	}	
	return sonuc;
}


$('input[name="islahmiktar"]').keyup(function() {
    var thiz = $(this);
    var deger = $('input[name="islahmiktar"]').val();
    var davamiktar = $('input[name="davamiktar"]').val();		
    var olumcismani = $('input[name="olumcismanii"]').prop('checked');
    var netice = deger - davamiktar;
    
    if (deger - davamiktar > 0) { 
        var sonuc = parseFloat(hesapla(netice, olumcismani)).toFixed(2);			
    } else { 
        myNoty('topRight','danger','Dava miktarı ıslah miktarından büyük yada eşit olamaz');
    
    }		
    
    if (sonuc > 0) { 
        $("#hesapsonuc").html("<h2>Alınması gereken harç :<br>" + parseFloat(hesapla(netice, olumcismani)).toFixed(2) + " TL </h2>");	
    } else { 
        $("#hesapsonuc").html("<h1></h1>");	
    }		  
})

$('input[name="davamiktar"]').keyup(function() {
    var thiz = $(this);
    var deger = $('input[name="islahmiktar"]').val();
    var davamiktar = $('input[name="davamiktar"]').val();		
    var olumcismani = $('input[name="olumcismanii"]').prop('checked');
    var netice = deger - davamiktar;
    
    if (deger - davamiktar > 0) { 
        var sonuc = parseFloat(hesapla(netice, olumcismani)).toFixed(2);		
    } else { 
        myNoty('topRight','danger','Dava miktarı ıslah miktarından büyük yada eşit olamaz');
    
    }		
    
    if (sonuc > 0) { 
        $("#hesapsonuc").html("<h2>Alınması gereken harç :<br>" + parseFloat(hesapla(netice, olumcismani)).toFixed(2) + " TL </h2>");	
    } else { 
        $("#hesapsonuc").html("<h1></h1>");	
    }		  
})

$('input[name="olumcismani"]').change(function() {
    
    var deger = $('input[name="miktar"]').val();
    var olumcismani = $('input[name="olumcismani"]').prop('checked');
    var sonuc = parseFloat(hesapla(deger, olumcismani)).toFixed(2);
    
    if (sonuc > 0) { 
        $("#hesapsonuc").html("<h2>Alınması gereken harç :<br>" + parseFloat(hesapla(deger, olumcismani)).toFixed(2) + " TL </h2>");	
    } else { 
        $("#hesapsonuc").html("<h1></h1>");	
    }     
})