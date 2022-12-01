var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bmw = /** @class */ (function () {
    function Bmw(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bmw.prototype.commonEngineFun = function () {
        console.log("common fun");
    };
    Bmw.prototype.start = function () {
        console.log("start eng");
    };
    Bmw.prototype.stop = function () {
        console.log("stop car");
    };
    return Bmw;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    return ThreeSeries;
}(Bmw));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    return FiveSeries;
}(Bmw));
var threeSeries = new ThreeSeries("bmdw", "1234i", 1245, true);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
var fiveSeries = new FiveSeries("bmdw", "1234i", 1245, true);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
