export class LikeComponent {

  constructor(public likeCount: number, public isSelected: boolean) {
  }

  onclick() {
    this.likeCount += (this.isSelected) ? 1 : -1;
    this.isSelected = !this.isSelected;
  }

}
