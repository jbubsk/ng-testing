class FriendsService {
    private names: Array<string>;

    constructor() {
        this.names = ["Bob", "Jacky", "Santa", "valera", "Vitya"];
    }

    getNames() {
        return this.names;
    }

    addName(name) {
        this.names.push(name);
    }
}

export default FriendsService;