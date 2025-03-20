import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  registrationForm:FormGroup
  public hide:boolean = true
  constructor(private fb:FormBuilder) { 
   this.registrationForm = fb.group({ 
    input1:['',[]],
    password:['',[Validators.required]]
   })
  }

  ngOnInit(): void {
  }
  onSubmit(){ 

  }

}
