'use strict'; 

angular.module('elegantBytesApp')
       .constant("baseURL", "http://localhost:3000/")
        
        .service('quoteFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            
            this.getQuotes = function() {
               
                return $resource("https://localhost:3443/"+"quotes", null, null); 
                
            }; 
            
                                         
                                     
                                     
            
        }]); 