var assert = require('chai').assert;

describe("case Sorting", function () {
    it("sort", function () {
        function Obj(name, id){
            this.name = name;
            this.id = id;
        }
        Obj.prototype.toString = function(){return this.id};

        var arr = [
            new Obj("Valera",5),
            new Obj("Valera",4),
            new Obj("Valera",1),
            new Obj("Valera",9)
        ];

        function sort(array, sort) {
            for (var i = 0; i < array.length; i++) {
                for (var n = i + 1; n < array.length; n++) {
                    var tmp;
                    if (sort(array[i], array[n])) {
                        tmp = array[n];
                        array[n] = array[i];
                        array[i] = tmp;
                    }
                }
            }
            return array;
        }

        function ascSortFunc(a, b) {
            return a.id > b.id;
        }

        function descSortFunc(a, b) {
            return a.id < b.id;
        }

        assert.equal(sort(arr, ascSortFunc).reverse().join(""), sort(arr, descSortFunc).join(""));
    });
});