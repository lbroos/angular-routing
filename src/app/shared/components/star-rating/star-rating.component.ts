import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input('rating') private rating: number;
  @Output() private ratingUpdated: EventEmitter<number> = new EventEmitter<number>();

  public ratingStars = [];

  constructor() { }

  public ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.ratingStars.push(index);
    }
  }

  public onClick(rating:number): void {
    this.ratingUpdated.emit(rating);
  }

  public showIcon(index:number): string {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
