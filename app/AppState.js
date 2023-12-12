import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  //NOTE leave the user and account alone, it is used by the authService to track user identity
  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {House[]} */
  houses = [
    new House(
      {
        "_id":"645d60f381faf24223ae886b",
        "bedrooms":3,
        "bathrooms":2,
        "levels":2,
        "imgUrl":"https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
        "year":2003,
        "price":230000,
        "description":"Super sick house",
        "creatorId":"63f7d6202d1cf882287f12e2",
        "createdAt":"2023-05-11T21:41:07.979Z",
        "updatedAt":"2023-05-11T21:41:07.979Z",
        "__v":0,
        "creator":{
          "_id":"63f7d6202d1cf882287f12e2",
          "name":"Charles Francis Xavier",
          "picture":"https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
          "id":"63f7d6202d1cf882287f12e2"
        },
        "id":"645d60f381faf24223ae886b"
      },
    ),
    new House(
      {
        "_id":"64640a81afbe13b729b6517f",
        "bedrooms":6,
        "bathrooms":4,
        "levels":3,
        "imgUrl":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icoc.edu%2Fwp-content%2Fuploads%2F2017%2F09%2Fshutterstock_523076503-e1506375581135.jpg&f=1&nofb=1&ipt=e393a4edd238ce89733d1dbb0ef3622955aca0ea753c07262b329c2bb413f4ad&ipo=images",
        "year":1918,
        "price":56000,
        "description":"We swear it is up to code",
        "creatorId":"6463f697af735760607741be",
        "createdAt":"2023-05-16T22:58:09.733Z",
        "updatedAt":"2023-05-16T22:58:09.733Z",
        "__v":0,"creator":{
          "_id":"6463f697af735760607741be",
          "name":"SadFish",
          "picture":"https://c4.wallpaperflare.com/wallpaper/921/14/483/fish-sad-fantasy-art-1680x1050-animals-fish-hd-art-wallpaper-thumb.jpg",
          "id":"6463f697af735760607741be"
        },
        "id":"64640a81afbe13b729b6517f"
      }
    )
  ]
  
  /** @type {Car[]} */
  cars = [
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Accord",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
            "_id": "63f7d6202d1cf882287f12e2",
            "name": "Charles Francis Xavier",
            "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
            "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    ),
    new Car(
      {
        "_id": "6462ed1266d4560e6cfa0f39",
        "make": "Honda",
        "model": "Civic",
        "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/dsc00620-1677186777.jpg?crop=0.606xw:0.680xh;0.298xw,0.260xh&resize=640:*",
        "year": 2022,
        "price": 1500,
        "description": "zoom zoom",
        "engineType": "unknown",
        "creatorId": "63f7d6202d1cf882287f12e2",
        "createdAt": "2023-05-16T02:40:18.318Z",
        "updatedAt": "2023-05-16T02:40:18.318Z",
        "__v": 0,
        "creator": {
            "_id": "63f7d6202d1cf882287f12e2",
            "name": "Charles Francis Xavier",
            "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
            "id": "63f7d6202d1cf882287f12e2"
        },
        "id": "6462ed1266d4560e6cfa0f39"
      }
    )
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())