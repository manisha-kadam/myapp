import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private http:Http) { }

  validate(form){
    //console.log(form.value);
    this.http.post("http://localhost:3000/login",form.value).subscribe((res:Response)=>{
      console.log(res);
    })
  }
  ngOnInit() {
  }

}
