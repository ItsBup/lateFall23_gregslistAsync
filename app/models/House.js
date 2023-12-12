import { AppState } from "../AppState.js"

export class House{
  constructor(data){
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get HouseCard(){
    return `
    <div class="col-4">
      <div class="card">
      <img src="${this.imgUrl}" class="img-fluid"/>
      <h4 class="text-center mt-1"> Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Levels: ${this.levels} - Year: ${this.year}</h4>
      <p class="text-success me-2 fw-bold">${this.description}</p>
      <p class="text-end text-success me-2 fw-bold">$${this.price}</p>
      <p>listed by <i>${this.creator.name}</i></p>
      ${this.RemoveHouseButton} 
      </div>
    </div>
    `
  }

  get RemoveHouseButton(){
    if(this.creatorId == AppState.account?.id){
      return `<button onclick="app.HouseController.removeHouse('${this.id}')" class="btn btn-danger" title="delete the ${this.bedrooms} bedroom ${this.bathrooms} bathroom house"><i class="mdi mdi-delete-forever"></i></button>`
    }
    return ''
  }
}