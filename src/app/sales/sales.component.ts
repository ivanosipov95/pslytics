import {Component, OnInit} from '@angular/core';
import {SaleModel} from './sales.model';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.styl']
})
export class SalesComponent implements OnInit {

  sales: SaleModel[] = [
    {
      gameName: '1 Game',
      price: 11,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '2 Game',
      price: 12,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '3 Game',
      price: 13,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '4 Game',
      price: 14,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '5 Game',
      price: 15,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '6 Game',
      price: 16,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '1 Game',
      price: 11,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '2 Game',
      price: 12,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '3 Game',
      price: 13,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '4 Game',
      price: 14,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '5 Game',
      price: 15,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '6 Game',
      price: 16,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '1 Game',
      price: 11,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '2 Game',
      price: 12,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '3 Game',
      price: 13,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '4 Game',
      price: 14,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA06534_00-UFC3ICONSEDITION/1531243990000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '5 Game',
      price: 15,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA01936_00-EASPORTSUFC2GAME/1528710458000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
    {
      gameName: '6 Game',
      price: 16,
      imageUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0006-CUSA00264_00-EASPORTSUFC14PS4/1526979398000/image?w=200&h=200&bg_color=000000&opacity=100&_version=00_09_000'
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
