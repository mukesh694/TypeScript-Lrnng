var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(organizer.id + " " + organizer.name);
    };
    return Organizer;
}());
var organizer = new Organizer(125, "Mandi");
organizer.display();
