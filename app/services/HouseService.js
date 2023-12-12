import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";



class HouseService{
  async removeHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log('hmmm', response);
    const indexToRemove = AppState.houses.findIndex(house => house.id == houseId)
    AppState.houses.splice(indexToRemove, 1)
  }

  async createHouse(formData) {
    const response = await api.post('api/houses', formData) 
    const newHouse = new House(response.data) 
    AppState.houses.push(newHouse)
  }

  async getHouses(){
    const response = await fetch('https://sandbox.codeworksacademy.com/api/houses', {})
    const body = await response.json()
    const newHouses = body.map(houseData => new House(houseData))
    AppState.houses = newHouses
  }

  async updateHouse(formData){
    const response = await api.post('api/houses', formData) 
    const newHouse = new House(response.data) 
    AppState.houses.push(newHouse)
  }
}

export const houseService = new HouseService()