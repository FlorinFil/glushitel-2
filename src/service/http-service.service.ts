import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }

  public getUsers(): any {
    return ['Florin', 'Dan']

    let barsik = new Pisica();
    let sharik = new Caine();

    barsik.sound();
    sharik.sound();

  }

}

export class Animal {
  sound() {
    console.log("aaaaaaaaaa");
  }
}

export class Pisica extends Animal {
  override sound() {
    console.log("meow")
  }
}

export class Caine extends Animal {

}



