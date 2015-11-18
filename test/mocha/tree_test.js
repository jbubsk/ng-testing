var assert = require('chai').assert;

describe("case tree extraction", function () {
    it("check", function () {
        function Obj(id, parentId) {
            this.id = id;
            this.parentId = parentId;
        }

        Obj.prototype.toString = function () {
            return this.id
        };

        var array = [
            new Obj(1),
                new Obj(6, 1),
                new Obj(3, 1),
                    new Obj(7, 3),
                        new Obj(4, 7),
                            new Obj(8, 4),
                        new Obj(11, 7),
                        new Obj(12, 7),
                    new Obj(9, 3),
            new Obj(2),
            new Obj(5, 2),
            new Obj(13, 2)
        ];


        function extractTree() {
            var shouldBeSought = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].parentId) {
                    findParent(array, {item: array[i], index: i});
                    array.splice(i, 1);
                    shouldBeSought = true;
                    break;
                }
            }
            if (shouldBeSought) {
                extractTree()
            }
        }

        function findParent(arr, element) {
            var item = element.item;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id === item.parentId) {
                    appendChild(arr[i], item);
                    break;
                } else if (arr[i].children && arr[i].children.length > 0) {
                    findParent(arr[i].children, element);
                }
            }
        }

        function appendChild(parent, item) {
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(item);
        }

        extractTree();
        assert.equal(array[0].children[1].children[0].children[0].children[0].id, 8);
        assert.equal(array[1].children[1].id, 13);
    });
});