import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    constructor(private http:HttpClient){}

    create(review,cb){
        this.http.post("/api/restaurants/"+review.restaurant+"/reviews",review)
        .subscribe( data => cb(data) );
    }
}
