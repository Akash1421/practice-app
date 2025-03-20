import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  public registrationForm:FormGroup
  constructor( private fb:FormBuilder) { 
   this.registrationForm = this.fb.group({ 
    
   })
  }

  ngOnInit(): void {
  }
  onSubmit(){ 

  }

}
