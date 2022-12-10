import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpServiceService } from 'src/service/http-service.service';

@Component({
  selector: 'meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent  {


  @Input() imgLink = '';
  @Output() newMemeRequest = new EventEmitter<string>();

  constructor(public httpService: HttpServiceService) { }


  public plusClicked() {
    this.newMemeRequest.emit("Requested new meme")
  }

}
