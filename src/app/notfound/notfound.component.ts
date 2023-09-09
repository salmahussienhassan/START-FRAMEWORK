import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    // Set the title for this component/page
    this.titleService.setTitle('Not Found');
  }
}
