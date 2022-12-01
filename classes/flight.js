var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.displya = function () {
        console.log(this.flightNo, this.from, this.to);
    };
    return Flight;
}());
var flight = new Flight(125, "Patna", "Bengaluru");
flight.displya();
