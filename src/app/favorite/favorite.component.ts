import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("OnClick method triggered")
    this.isFavorite.isSelected = !this.isFavorite.isSelected;
    this.change.emit(this.isFavorite.isSelected);
  }

}
