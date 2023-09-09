import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // Set the title for this component/page
    this.titleService.setTitle('About');
  }
}
