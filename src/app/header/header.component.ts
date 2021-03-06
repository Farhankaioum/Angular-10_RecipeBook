import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeMenu(featureName: string){
    this.selectedFeature.emit(featureName);
  }

}
