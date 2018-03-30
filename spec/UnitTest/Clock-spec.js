"use strict";
var Clock = require('../../lib/Clock.js');

describe("Clock", function(){
var clock;
var timerCallback;
var timeAddOn;

  beforeEach(function(){

jasmine.clock().install();
    timeAddOn = 10;
    clock = new Clock(timeAddOn);
    timerCallback = jasmine.createSpy("timerCallback");

  });

  afterEach(function() {
   jasmine.clock().uninstall();
 });

  it("gets timeNow : test with 8 millisecond tolerance", function(){
    var baseTime = new Date();
      jasmine.clock().mockDate(baseTime);
        jasmine.clock().tick(0);
        expect(clock.getTimeNow()).toBeGreaterThan(baseTime.getTime()-4);
        expect(clock.getTimeNow()).toBeLessThan(baseTime.getTime()+4);
  });

  it("gets date in the future which is 'timeCountDown' from now", function(){
    var dateTimeStart = new Date("Sep 6, 2018 15:37:25");
    var expectedResult = new Date("Sep 6, 2018 15:37:35");
      jasmine.clock().mockDate(dateTimeStart);
      jasmine.clock().mockDate(expectedResult)

      spyOn(clock, "getTimeNow").and.returnValue(dateTimeStart.getTime());
      expect(clock.getTimeStampFuture()).toEqual(expectedResult.getTime());
  });

describe("Build the time display with hours/minutes/seconds", function() {
  it("outputs '0h 0m 2s' format for the timer", function(){
    expect(clock.formatTime(0,0,2)).toEqual("0h 0m 2s");
  });


});













});
