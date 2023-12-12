import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { houseService } from "../services/HouseService.js";

function _drawHouse(){
  const houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.HouseCard)
  setHTML('houses-list', content)
}

export class HouseController{
  constructor(){
    console.log('🏚️🎮');
    AppState.on('houses', _drawHouse)
  }
}