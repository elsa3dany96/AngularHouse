import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
        selector:'app-property-card',
        // template:`<h1>Hello Guys !</h1>`, 
        templateUrl:'property-card.component.html',
        // styles:[],
        styleUrls:['property-card.component.css']
    })
export class PropertyCardComponent{
Property:any = {
    "Id":1,
    "Name":"Ivy House",
    "Type":"House",
    "Price": 12000
}
}