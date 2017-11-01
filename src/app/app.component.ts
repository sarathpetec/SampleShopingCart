import { Component } from '@angular/core';

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
  onFavoriteChange() {
    console.log("OnFavoriteChange triggered");
  }
}
