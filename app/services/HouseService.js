import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"; // this is a instance of axios we can use to make requests
// the api needs to have a baseURL set in the env.js file to work
// api includes methods for GET, POST, PUT, DELETE
// GET(read), POST(create), PUT(update), DELETE(delete)




class CarsService{
  async removeCar(carId) {
    const response = await api.delete(`api/cars/${carId}`)
    console.log('🚗👋📡', response); //🧪
    const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    AppState.cars.splice(indexToRemove, 1) // 🧪 tested that car was removed, and also tested the Pop notification
  }

  async createCar(formData) {
    const response = await api.post('api/cars', formData)
    console.log('🚗📃📡', response); // 🧪 look at payload and response data in dev tools, are they what they should be
    const newCar = new Car(response.data)
    console.log('✨🚗📃', newCar); // 🧪
    AppState.cars.push(newCar)// 🧪 did this add it to the page? did it trigger a draw?
  }

  async getCars(){
    const response = await fetch('https://bcw-sandbox.herokuapp.com/api/cars', {})
    const axiosResponse = await api.get('api/cars') // Axios is a library that makes fetch requests for us. It simplifies the process of making more complex fetch requests and simplifies our response
    console.log('🚗📡', response, axiosResponse); //🧪🧪🧪
    const body = await response.json()
    console.log('🚗👂', body); //🧪🧪 did you await the json()?
    const newCars = body.map(carData => new Car(carData)) // try putting .reverse() in if you want to see newest items at the top
    console.log('✨✨✨🚗🚗🚗', newCars);// 🧪
    AppState.cars = newCars // 🧪 after I save them do they draw to the page?
  }

}

export const carsService = new CarsService()