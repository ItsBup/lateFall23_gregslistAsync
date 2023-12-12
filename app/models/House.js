import { AppState } from "../AppState.js"


// REVIEW when working with an API that you want to send data too, always check their documentation for a guide or 'model' that they use. In this case they make the rules and will only store what they specify
export class Car{
  constructor(data){
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.engineType = data.engineType
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    console.log('✨🚗', this); // 🧪
    // TODO creator info
    this.creator = data.creator
    this.creatorId = data.creatorId
  }

  get CarCard(){
    // return `${this.make} ${this.model}`// 🧪 test small template first
    return `
    <div class="col-4">
      <div class="card">
      <img src="${this.imgUrl}" class="img-fluid"/>
      <h4 class="text-center mt-1"> ${this.make} - ${this.model} - ${this.year}</h4>
      <p class="text-end text-success me-2 fw-bold">$${this.price}</p>
      <p>listed by <i>${this.creator.name}</i></p>
      ${this.RemoveCarButton} 
      </div>
    </div>
    ` //🧪 tested as we added more to the template that the draw still worked
  }

  get RemoveCarButton(){
    if(this.creatorId == AppState.account?.id){ //only tries to access id if there is an account, otherwise will leave null
      return `<button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger" title="delete the ${this.make} ${this.model}"><i class="mdi mdi-delete-forever"></i></button>`
    }
    return '' //🧪 if you're not the creator, return nothing
  }
}