import {Component} from "angular2/core";
import {VotingList} from "./voting-list";
import {HTTP_PROVIDERS} from "angular2/http";
import {VotingService} from "./voting.service";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";


@Component({
	selector: "vote-abq",
	templateUrl: "app/templates/splash-page.html",
	directives: [VotingList],
	providers: [HTTP_PROVIDERS, VotingService]
})

export class VoteAbq {}