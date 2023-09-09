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


name_exp:boolean=false;
age_exp:boolean=false;
email_exp:boolean=false;
pass_exp:boolean=false;



test(e:any){
  if(e.target.type=='text')
 { this.name_exp= !this.name_exp;}

 else if(e.target.type=='email')
 { this.email_exp= !this.email_exp;}

 else if(e.target.type=='number')
 { this.age_exp= !this.age_exp;}

 else
 { this.pass_exp= !this.pass_exp;}
}


}



