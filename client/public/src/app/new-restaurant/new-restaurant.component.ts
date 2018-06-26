import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-restaurant',
    templateUrl: './new-restaurant.component.html',
    styleUrls: ['./new-restaurant.component.css']
})

export class NewRestaurantComponent implements OnInit {
    private restaurant:any;
    private errors;

    constructor(private restaurantService:RestaurantService,private router:Router){
        this.restaurant = {
            name:"",
            cuisine:""
        };
    }

    ngOnInit(){

    }

    validate(data){
        let errors = [];

        if(data.error || data.message){
          errors.push(data.message);
          for(let error in data.error) errors.push(data.error[error].message);
          return errors;
        }else{
          return false;
        }
    }

    create(){
        this.restaurantService.create(this.restaurant,data=>{
            this.errors = this.validate(data);
            if(!this.errors) this.router.navigateByUrl("/restaurants");
        });
    }
}
