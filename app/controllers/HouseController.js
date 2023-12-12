import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

function _drawHouse(){
  const houses = AppState.houses
  let content = ''
  houses.forEach(house => content += house.HouseCard)
  setHTML('houses-list', content)
}
function _showCreateHouseForm(){
  if(AppState.user){
    let form = document.getElementById('create-house-form')
    form.classList.remove('d-none')
}
}

export class HouseController{
  constructor(){
    console.log('🏚️🎮');
    AppState.on('houses', _drawHouse)
    AppState.on('user', _showCreateHouseForm)
    AppState.on('account', _drawHouse)
    _showCreateHouseForm()
  }

  async createHouse(){
    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)
    houseService.createHouse(formData)
    form.reset()
  }
  async removeHOuse(houseId){
    houseService.removeHouse(houseId)
  }
  async getHouses(){
    houseService.getHouses()
  }
}