import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: [''], });
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
    
      let barsik = new Pisica();
      let sharik = new Caine();
    
      barsik.sound("asdf");
      sharik.sound("wert@.Kub2RC");

      
  }

}


export class Animal implements Vietate {
  public sound(rasa: string) {
    console.log("aaaaaaaaaa");
  }

  public ochi: string = "doi ochi"
  private intestine: string = "stomac";
  protected codGenetic: string = "qwer";
}
export interface Vietate {
  sound(param: string): void;
}
export class Pisica extends Animal {
  override sound(rasaPisica: string) {
    console.log("meow")
    new Email("hello", 'florin.filip@gmail.com');
  }
  calitateVedereNoapte: number = 0;

}

export class Caine extends Animal {

}

export class Email {
  static emailCount: number = 0;

  
  text: string = '';
  address: string = '';
  constructor(text: string, address: string) {
    this.text = text;
    this.address = address;
    Email.emailCount++;
    // send new email.

    Array.isArray(['asd'])
    Object.keys({a: 1, b: 2}) 
    new CalculatorDeBuzunar();
    return this;
  }
  
}

interface MasinaDeCalcul {
  putereProcesare: number;
  start(): void;
  stop(): void;
}

abstract class Calculator implements MasinaDeCalcul {
  static wifiStandard: 811;
  socketuri: Array<any> = [];
  putereProcesare: number = 0;
  abstract startDinButon(): void;
  abstract stopDinButon(): void;

  start(): void {
    
  }
  stop(): void {
    
  }




}

class CalculatorDeBuzunar extends Calculator {
  stopDinButon(): void {
    console.log("apas butonasul mic pe partea laterala")
  }
  startDinButon(): void {
    console.log("apas butonasul mic pe partea laterala")
  }
}

class iPhoneXr512 extends CalculatorDeBuzunar {
  override stopDinButon(): void {
    console.log("intram in setarti si alegem oprirea sistemului")
  }
}