import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() isFavorite;
  @Output() change = new EventEmitter();

  onClick() {
    console.log("OnClick method triggered");
    this.isFavorite.isSelected = !this.isFavorite.isSelected;
    this.change.emit({newValue: this.isFavorite.isSelected, name: 'test'});
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
  name: String;
}
