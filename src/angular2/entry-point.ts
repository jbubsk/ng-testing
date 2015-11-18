import "reflect-metadata";
import "zone.js";
import FriendsService from "./friends.service.ts!typescript";
// noinspection TypeScriptCheckImport
import {Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: "my-component"
})
@View({
    template: `<div>{{myName}}</div>`
})

class DisplayComponent {
    myName: string;

    constructor() {
        this.myName = "Alice";
        let g = new FriendsService();
        console.log(g);
    }
}

bootstrap(DisplayComponent);