"use strict";
var Clock = require('../../lib/Clock.js');

describe("Clock", function(){
var subject;
var timerCallback;
var countDownInterval;

  beforeEach(function(){

jasmine.clock().install();
    countDownInterval = 10;
    subject = new Clock();
    timerCallback = jasmine.createSpy("timerCallback");
    subject.setIntervalCountDown(countDownInterval);

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

  it("shows the countDown interval in milliseconds ", function(){

    expect(subject.getIntervalMilSec()).toEqual(10000);

  });

  it("sets time interval for the clock object", function(){
    subject.setIntervalCountDown(20);
    expect(subject.getIntervalMilSec()).toEqual(20000);

  });

});
