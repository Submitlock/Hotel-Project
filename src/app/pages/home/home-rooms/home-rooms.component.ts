import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-rooms',
  templateUrl: './home-rooms.component.html',
  styleUrls: ['./home-rooms.component.scss']
})
export class HomeRoomsComponent implements OnInit {

  constructor() { }

  rooms = {
    smallRoom: {
      name: 'Малка Стая',
      price: 50,
      imagePath: 'assets/images/rooms/small-room.jpg',
    },
    familyRoom: {
      name: 'Семейна Стая',
      price: 100,
      imagePath: 'assets/images/rooms/family-room.jpg',
    },
    doubleRoom: {
      name: 'Двойна Стая',
      price: 90,
      imagePath: 'assets/images/rooms/double-room.jpg',
    },
    luxuryRoom: {
      name: 'Луксозна Стая',
      price: 120,
      imagePath: 'assets/images/rooms/luxury-room.jpg',
    },
    apartment: {
      name: 'Апартамент',
      price: 180,
      imagePath: 'assets/images/rooms/apartment.jpg',
    },
  };

  ngOnInit() {
  }

}
