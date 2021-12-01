import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() title: string = ''
  @Input() colorId: number = 0
  @Input() urlVideo: string = ''
}