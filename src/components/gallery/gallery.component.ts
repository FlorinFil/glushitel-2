import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  public links = [
    "https://memegenerator.net/img/instances/46476226/one-does-not-simply-learn-angularjs.jpg",
    "https://www.meme-arsenal.com/memes/242e815c763a7b704b076a792cff6bdf.jpg",
    "https://scontent.fkiv4-1.fna.fbcdn.net/v/t39.30808-6/289357625_5188868981161938_516369997111517192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=PfH-ST0Oh3YAX847QPp&_nc_ht=scontent.fkiv4-1.fna&oh=00_AT-SvIHWwrgX4gbjEAJnrk_xQ15yME-Yc6rAmb5jIN_dXw&oe=62C21E3B",
    "https://i.redd.it/32pjt4txlee71.png",
    "https://memegenerator.net/img/instances/43921301/angular.jpg",
    "https://z5b2s6y7.rocketcdn.me/wp-content/uploads/2017/03/meme-beispiel.png",
  ]


  public addMeme(e: any) {

    alert(e);
    this.links[0] = this.links[1];
  }
  ngOnInit(): void {
  }

}
