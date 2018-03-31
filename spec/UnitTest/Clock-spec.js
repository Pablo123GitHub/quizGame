"use strict";
var Clock = require('../../lib/Clock.js');

describe("Clock", function(){
var subject;
var timerCallback;
var timeAddOn;

  beforeEach(function(){

jasmine.clock().install();
    timeAddOn = 10;
    subject = new Clock(timeAddOn);
    timerCallback = jasmine.createSpy("timerCallback");

  });

  afterEach(function() {
   jasmine.clock().uninstall();
 });

  it("gets timeNow : test with 8 millisecond tolerance", function(){
    var baseTime = new Date();
      jasmine.clock().mockDate(baseTime);
        jasmine.clock().tick(0);
        expect(subject.getTimeNow()).toBeGreaterThan(baseTime.getTime()-4);
        expect(subject.getTimeNow()).toBeLessThan(baseTime.getTime()+4);
  });

  it("gets date in the future which is 'timeCountDown' from now", function(){
    var dateTimeStart = new Date("Sep 6, 2018 15:37:25");
    var expectedResult = new Date("Sep 6, 2018 15:37:35");
      jasmine.clock().mockDate(dateTimeStart);
      jasmine.clock().mockDate(expectedResult)

      spyOn(subject, "getTimeNow").and.returnValue(dateTimeStart.getTime());
      expect(subject.getTimeStampFuture()).toEqual(expectedResult.getTime());
  });

describe("Build the timer display with hours/minutes/seconds", function() {
  var dateOne;
  var dateTwo;
  var interval;
  beforeEach(function(){
     dateOne = new Date("Sep 6, 2018 15:37:25");
     dateTwo = new Date("Sep 7, 2018 18:40:32");
    jasmine.clock().mockDate(dateOne);
    jasmine.clock().mockDate(dateTwo);
     interval = dateTwo.getTime() - dateOne.getTime() ;

  })

  it("outputs '0h 0m 2s' format for the timer", function(){
    expect(subject.formatTime(0,0,2)).toEqual("0h 0m 2s");
  });

  it("extracts hours from time expressed in milliseconds", function(){
  expect(subject.extractHourFromMilSec(interval)).toEqual(3)
});

it("extracts minutes from time expressed in millisec", function(){
  expect(subject.extractMinFromMilSec(interval)).toEqual(3);
});

it("extracts seconds from time expressed in millisec", function(){
    expect(subject.extractSecFromMilSec(interval)).toEqual(7);
  });

it("outputs '0h 0m 2s' with values extracted from milliseconds timeStamp", function(){
  expect(subject.displayMilSecNiceFormat(interval)).toEqual("3h 3m 7s");
});


});

});
