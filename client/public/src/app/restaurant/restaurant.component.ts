import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
    private restaurant;

    constructor(private restaurantService:RestaurantService,private route:ActivatedRoute) {}

    ngOnInit(){
        this.route.params.subscribe(params=>{
            this.restaurantService.findById(params.id,data=>{
                this.restaurant = data;
            });
        });
    }

}
