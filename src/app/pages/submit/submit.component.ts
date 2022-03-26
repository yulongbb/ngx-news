import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  submitForm = new FormGroup({
    title: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  edit($event){
    console.log($event);
    
  }

  submit(post){
    console.log(post);
    

  }

}
