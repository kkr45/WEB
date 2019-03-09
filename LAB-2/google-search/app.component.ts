import {Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-search';
  @ViewChild('text') texts: ElementRef;
  @ViewChild('search') searched: ElementRef;
  text: any;
  name: any;
  type: any;
  description:any;
  articlebody:any;
  wikiurl:any;
  liscence:any;
  url:any;
  imageurl:any;









  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  search() {
    this.text = this.texts.nativeElement.value;
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.text + '&key=AIzaSyCNxgbDr5kAFjAv3qGxdryLMrDPMfHzKOg&limit=1&indent=True')
      .subscribe((data:any) => {
        this.name = data.itemListElement[0].result.name;
        this.description = data.itemListElement[0].result.description;
        this.imageurl = data.itemListElement[0].result.description;
        this.articlebody = data.itemListElement[0].result.detailedDescription.articleBody;
        this.wikiurl = data.itemListElement[0].result.detailedDescription.url;
        this.liscence = data.itemListElement[0].result.detailedDescription.liscence;
        this.url= data.itemListElement[0].result.url;

        return this.name;
      });

  }
}
