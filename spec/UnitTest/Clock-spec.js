"use strict";
var Clock = require('../../lib/Clock.js');

describe("Clock", function(){
var clock;
var timerCallback;
var timeAddOn;

  beforeEach(function(){
    timeAddOn = 10;
    clock = new Clock(timeAddOn);
    timerCallback = jasmine.createSpy("timerCallback");

  });

  it("outputs the time test has 8 millisecond tolerance", function(){
    var timeNow = new Date().getTime();
    var timeNowMinus4MilSec = timeNow - 4;
    var timeNowPlus4MilSec = timeNow + 4;
    expect(clock.getTimeNow()).toBeLessThan(timeNowPlus4MilSec);
    expect(clock.getTimeNow()).toBeGreaterThan(timeNowMinus4MilSec);


  });









});
