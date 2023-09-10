import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({

  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // Set the title for this component/page
    this.titleService.setTitle('Contact');
  }
exp:boolean=false
name:string=''
age:string=''
email:string=''
pass:string=''
name_exp:boolean=false;
age_exp:boolean=false;
email_exp:boolean=false;
pass_exp:boolean=false;

funcN(){
  if(this.name !=''){
   this.name_exp=true


  }
  else{
    this.name_exp=false
  }
}


funcA(){
  if(this.age !=''){
   this.age_exp=true


  }
  else{
    this.age_exp=false
  }
}

funcE(){
  if(this.email !=''){
   this.email_exp=true


  }
  else{
    this.email_exp=false
  }
}

funcP(){
  if(this.pass !=''){
   this.pass_exp=true


  }
  else{
    this.pass_exp=false
  }
}


}



