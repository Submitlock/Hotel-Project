import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-thumbnail',
  templateUrl: './room-thumbnail.component.html',
  styleUrls: ['./room-thumbnail.component.scss']
})
export class RoomThumbnailComponent implements OnInit {

  constructor() { }

  @Input() room: any;

  ngOnInit() {
  }

}
