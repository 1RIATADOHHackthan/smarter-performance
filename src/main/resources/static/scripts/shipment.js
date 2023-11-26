/**
 * 
 */

  $('document').ready(function(){
	
	  $('.btn-next').click(function(){
                    
                    $('.product-form').hide();
                    //$('.product-overview').removeClass('d-none');
                    $('.services').slideDown();

                    
                  
                        $.ajax({
                       type: 'POST',
               data:'{ "@context": { "cargo": "https://onerecord.iata.org/ns/cargo#"},"@type": "cargo:Item","cargo:itemQuantity": { "@type": "cargo:Value", "cargo:unit": "Pieces","cargo:numericalValue": 250 },"cargo:describedByProduct": {"@id": "https://8psprsmhz5.us-east-1.awsapprunner.com:443/logistics-objects/54b10075-7cea-487d-b305-c1474b1fa0d9" }}',
                       url: "https://8psprsmhz5.us-east-1.awsapprunner.com/logistics-objects",       
                       headers:{         
                           'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3MDA5ODA2MzIsImlhdCI6MTcwMDk0NDYzMiwianRpIjoiYTY0ODEyZWYtOTU3ZC00YWU1LTkzZDEtNDE5ZmFjMjM2ZWYzIiwiaXNzIjoiaHR0cHM6Ly92d3NkdXQzMzlxLnVzLWVhc3QtMS5hd3NhcHBydW5uZXIuY29tL3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjIxMi43MC45OC4yMzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImxvZ2lzdGljc19hZ2VudF91cmkiOiJodHRwczovLzhwc3Byc21oejUudXMtZWFzdC0xLmF3c2FwcHJ1bm5lci5jb20vbG9naXN0aWNzLW9iamVjdHMvX2RhdGEtaG9sZGVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW5lb25lLWNsaWVudCIsImNsaWVudEFkZHJlc3MiOiIyMTIuNzAuOTguMjM4IiwiY2xpZW50X2lkIjoibmVvbmUtY2xpZW50In0.sKcud1Gzrj4PIrBAdNuHAi0hjsopP4q2e0KqdroCfSvyDsMqRi-q3NIU1I-TPNW2zZAbSPMGQAKoBdAxceurjCvf_Gb5I13TlQUxc5CTHu7kLo7QUSoagPSo1nUn3d8cGVifcPYjhhSF47anLKk3IaZ2lEvnVPqruzNpSQdLKMlU6Ilwaf1jEM7nn5UoftDOBwcW1vjP_x7PQAoBf1-4JM6thQoTOyXqDSsS97rjYan20jGizHtb0_QS9nnoXgXSLr6h8_-vR1NfpG_HW4siYG2tD-SZWdRda_gP2iV-sWAUByK2k_luHNBOW-7adTOQSW5CZW7QPartnMu43_Z-1Q',
                           'Content-Type':'application/ld+json; version=2.0.0-dev'
                       },
                       succces: function(data){
                           console.log('success',data);                    
                       },
 		fail: function(data){
                           console.log('success',data);                    
                       }
                   });  

                });

	});