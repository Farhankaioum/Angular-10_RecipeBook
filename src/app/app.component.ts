import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  featureName = 'recipe';

  onSelectedFeature(featureName: string){
    this.featureName = featureName;
  }
}
