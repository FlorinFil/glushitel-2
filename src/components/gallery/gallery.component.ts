import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  public links: string[] = [

  ]


  public addMeme(e: string) {
    this.links.push(e);
  }
  ngOnInit(): void {
  }

}
