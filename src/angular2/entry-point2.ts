import "reflect-metadata";
import "zone.js";
import template from "./display.tmpl.html!text";
// noinspection TypeScriptCheckImport
import {Component, View, bootstrap, NgFor} from "angular2/angular2";
import FriendsService from "./friends.service.ts";

@Component({
    selector: "my-component",
    providers: [FriendsService]
})
@View({
    template: template,
    directives: [NgFor]
})

class DisplayComponent {
    myName: string;
    names: Array<string>;
    friendsService: FriendsService;

    constructor(friendsService: FriendsService) {
        this.friendsService = friendsService;
        this.myName = "Alice";
        this.names = friendsService.getNames();
    }

    addName(input) {
        this.friendsService.addName(input.value);
        input.value = null;
    }

    endTyping(event) {
        if (event.which === 13) {
            this.addName(event.target);
        }
    }
}

bootstrap(DisplayComponent);