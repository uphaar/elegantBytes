'use strict';

describe('Controller: QuoteController', function () {

    
  beforeEach(module('elegantBytesApp'))      ;
  

  var QuoteCtrl,
    scope,
      $httpBackend, quoteFactory;
      

    
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _quoteFactory_) {
    scope = $rootScope.$new();
      
      $httpBackend = _$httpBackend_; 
      quoteFactory = _quoteFactory_;
    QuoteCtrl = $controller('QuoteController', {
      $scope: scope,
        quoteFactory:quoteFactory
      // place here mocked dependencies
    });
      //$httpBackend.flush();
  }));

  it('should have a quote controller', function() {
      
     expect(QuoteCtrl).toBeDefined();  
     
  });
 
    it('should post a quote in the backend', function() {
        
        var quote = {
        "name": "test3",
        "email": "test3",
        "company": "test3",
        "phone": "test3",
        "webdev": true,
        "id": 8
        }; 
        
        scope.quote = quote;
        
        scope.quoteForm1 = {
        
        $setPristine: function() {}
        };
        
        scope.quoteForm2 = {
        
        $setPristine: function() {}
        };
        
        $httpBackend.expectPOST("http://localhost:3000/quotes", quote).respond('201'); 
        scope.sendQuote(); 
        $httpBackend.flush(); 
        expect(scope.status).toEqual(true); 
        
    });
    
//  
});
