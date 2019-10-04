import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-card-small',
  templateUrl: './room-card-small.component.html',
  styleUrls: ['./room-card-small.component.scss']
})
export class RoomCardSmallComponent implements OnInit {

  constructor() { }

  @Input() cardImagePath: string;

  ngOnInit() {
  }

}
