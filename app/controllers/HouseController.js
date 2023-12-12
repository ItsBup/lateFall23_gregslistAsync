import { AppState } from "../AppState";
import { setHTML } from "../utils/Writer";

function _drawHouse(){
  const houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.HouseCard)
  setHTML('houses-list', content)
}

export class HouseController{
  constructor(){
    console.log('🏚️🎮');
    _drawHouse()
  }
}