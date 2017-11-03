import { Component } from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavorite = {
    title: "Angular Application",
    isSelected: true
  };
  onFavoriteChange(isSelectes: FavoriteChangeEventArgs) {
    console.log("OnFavoriteChange triggered", isSelectes);
  }

  courses = [1,2];
  viewMode: String = "map";

  onClick(){
    console.log("Mode Value: "+ this.viewMode)
  }
}
