'use strict';

describe('Service: QuoteFactory', function() {
    
    var quoteFactoryMock, $resource, $httpBackend; 
    beforeEach(module('elegantBytesApp')); 
    
    beforeEach(inject(function(_quoteFactory_, _$resource_, _$httpBackend_) {
        
        quoteFactoryMock = _quoteFactory_; 
        $resource = _$resource_; 
        $httpBackend = _$httpBackend_; 
        
        $httpBackend.expectGET("http://localhost:3000/quotes").respond([{
    "name": "Uphaar",
    "email": "uphaar_g@yahoo.com",
    "company": "Allegro Development",
    "phone": "9154945942",
    "webdev": true,
    "comments": "this is just a test",
    "id": 1
  },
  {
    "name": "Trupti",
    "email": "trupti483@gmail.com",
    "company": "Tech Mahindra",
    "phone": "9154945942",
    "webdev": true,
    "id": 2
  }
        ]);
        
    })); 
    
    
    it('should have quote factory', function(){
        
        expect(quoteFactoryMock).toBeDefined();
        
        
    }); 
    
    it('should get quotes in the backend', function () {
    
        var output = quoteFactoryMock.getQuotes().query();
        
      
      $httpBackend.flush();
      expect(output.length).toEqual(2);
      
  });
    
    
    
}); 