import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        this.currentLong= position.coords.longitude;
      })
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;




    if (this.placeValue != null && this.placeValue != "" && this.recipeValue != null && this.recipeValue != "") {
      this._http.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=QQTS3TNWKHGAW31IALD2TUNA3ZMPUVMBR0LIAAJZHQTY0P0O" +
        "&client_secret=3JY2W1GOCB0NZD4LSHGRQII04BTT1UTPVJUL2NGUTRN5YFGI" +
        "&v=20160215&limit=5" +
        "&near=" + this.placeValue +
        "&query=" + this.recipeValue)
        .subscribe((data: any) => {
            for (var i = 0; i < data.response.venues.length; i++) {
            this.venueList[i] = {
              "name": data.response.venues[i].name,
              "id": data.response.venues[i].id,
              "location": data.response.venues[i].location
            };
              console.log(this.venueList[i]);

            }

        })
    }
  }
}
