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








});
