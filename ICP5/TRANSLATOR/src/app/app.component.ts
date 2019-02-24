import {Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('text') texts: ElementRef;
  @ViewChild('inputlang') inlang: ElementRef;
  @ViewChild('outputlang') outlang: ElementRef;
  word: any;
  text: any;
  InputLang: any;
  OutputLang: any;



  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  translate() {
    this.text = this.texts.nativeElement.value;
    this.InputLang = this.inlang.nativeElement.value;
    console.log(this.InputLang);
    this.OutputLang = this.outlang.nativeElement.value;
    this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190223T192433Z.cfd3ef97f865630f.e7ec8379f36a543a347d161c6d2a0627dd859ca5&text=' + this.text+'&lang='+this.InputLang+'-'+this.OutputLang+'&[format=plain]&[options=1]&[callback=?]')
      .subscribe((data:any) => {
        this.word = data.text[0];
        return this.word;
      });

  }
}
