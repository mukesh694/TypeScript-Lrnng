var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "getName", {
        //for accessing the private field we need to use the set and get method
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setName", {
        set: function (name) {
            this._name = this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var st = new Student();
st.setName = "bob";
console.log(st.getName);
