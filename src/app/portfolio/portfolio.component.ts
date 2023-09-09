import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // Set the title for this component/page
    this.titleService.setTitle('Portfolio');
  }

booleanExp:boolean=false;
imgSrc:string=''

test(e:any,imgSelected:string){
  e.stopPropagation();
  this.imgSrc=imgSelected
  console.log(e)

  this.booleanExp= !this.booleanExp
}
close(){
  this.booleanExp= !this.booleanExp
}




 
}
