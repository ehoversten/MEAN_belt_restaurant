import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
    private restaurants:any;

    constructor(private restaurantService:RestaurantService){}

    ngOnInit(){
        this.restaurantService.all(data=>{
            this.restaurants = data;
        });
    }

    destroy(restaurant){
        this.restaurantService.destroy(restaurant,(data)=>{
            if(data.errors){
              
            }else{
                this.restaurants = this.restaurants.filter(i => i._id != data._id);
            }
        });
    }
}
