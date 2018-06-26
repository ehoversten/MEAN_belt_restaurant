import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../review.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
    private review;

    constructor(private reviewService:ReviewService,private route:ActivatedRoute,private router:Router){
        this.review = {
            reviewer_name:"",
            rating:1,
            review:""
        };
    }

    ngOnInit(){
        this.route.params.subscribe(params=>this.review.restaurant=params.id);
    }

    create(){
        this.reviewService.create(this.review,(data)=>{
            console.log(data);

            if(data.errors){

            }else{
                this.router.navigateByUrl("/restaurants/"+this.review.restaurant);
            }
        });
    }
}
