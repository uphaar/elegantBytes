'use strict';

describe('elegantBytes App e2e testing', function() {


    it('should automatically redirect to / when localtion hash/fragment is empty', function() {

        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");

    });



});

describe('index', function() {

     beforeEach(function() {

           browser.get('index.html#/');

       });

   it('should have a title', function() {

       expect(browser.getTitle()).toEqual('elegantBytes');



   }) ;

    it('should have home nav as active', function() {

      expect(element(by.css('.active')).isPresent()).toBe(true);


    });


});

describe('request quote', function() {

    beforeEach(function() {

        browser.get('#!/requestquote');

    });

    it('should have request a quote nav as active', function() {


        expect(element(by.css('.active')).isPresent()).toBe(true);

        element(by.id('raq')).getAttribute('ng-class').then(function(ngclass){

          expect(ngclass).toContain('active');

        });


    });

    it('should post a quote', function() {
      element(by.id('name')).sendKeys('sholmes');
      element(by.id('email')).sendKeys('sholmes');
      element(by.id('phone')).sendKeys('sholmes');
      element(by.id('company')).sendKeys('sholmes');
      browser.sleep(5000);
      element(by.id('submit')).click();
      element(by.id('submit')).click();
      element(by.id('submit')).click();


    });

});
