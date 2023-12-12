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
      <div id="edit-house-form">

      </div>
    </div>
    `
  }

  get RemoveHouseButton(){
    if(this.creatorId == AppState.account?.id){
      return `
        <button onclick="app.HouseController.removeHouse('${this.id}')" class="btn btn-danger" title="delete the ${this.bedrooms} bedroom ${this.bathrooms} bathroom house"><i class="mdi mdi-delete-forever"></i></button>
        <form onsubmit="app.HouseController.updateHouse()" class="row justify-content-center bg-white mb-4">
        <div class="col-10 text-center fw-bold">
          Edit your listing
        </div>
        <div class="mb-1 col-3">
          <label for="house-bedrooms">Bedrooms</label>
          <input class="form-control" required name="bedrooms" type="number" min="0" max="100" value="${this.bedrooms}">
        </div>
        <div class="mb-1 col-3">
          <label for="house-bathrooms">Bathrooms</label>
          <input class="form-control" required name="bathrooms" type="number" min="0" max="100" value="${this.bathrooms}">
        </div>
        <div class="mb-1 col-3">
          <label for="house-level">Levels</label>
          <input class="form-control" required name="levels" type="number" min="0" max="100000" value="${this.levels}">
        </div>
        <div class="mb-1 col-3">
          <label for="house-year">Year</label>
          <input class="form-control" required name="year" type="number" min="1900" max="2024" value="${this.year}">
        </div>
        <div class="mb-1 col-12">
          <label for="house-price">Price [1-10000]</label>
          <input class="form-range" name="price" type="range" min="1" max="10000" step="10" value="${this.price}">
        </div>
        <div class="mb-1 col-12">
          <label for="house-image">Picture of House</label>
          <input class="form-control" required name="imgUrl" type="url" maxlength="500" value="${this.imgUrl}">
        </div>
        <div class="mb-2 col-12">
          <label for="house-description">Description</label>
          <textarea name="description" id="house-description" rows="5" class="w-100 form-control">${this.description}</textarea>
        </div>
        <div class="mb-2 col-12 text-end">
          <button type="submit" class="btn btn-success"><i class="mdi mdi-home-edit"></i>Save Edit</button>
        </div>
      </form>
      `
    }
    return ''
  }
}