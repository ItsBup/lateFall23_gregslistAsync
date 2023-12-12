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
    this.getHouses()
  }

  async createHouse(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await houseService.createHouse(formData)
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
    
  }
  async removeHouse(houseId){
    try {
      await houseService.removeHouse(houseId)
      Pop.toast('Your House Has Been Purged', 'success')
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
    
  }
  async getHouses(){
    try {
      await houseService.getHouses()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
  }
  async updateHouse(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await houseService.updateHouse(formData)
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
    
  }
}