import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  links = [
    "assets/gallery/14A31D2F-4F68-4860-BE68-F7ABC53D1B3F_1_105_c.jpeg",
    "assets/gallery/2728931C-9455-4D52-9C90-80E1159C0324_1_105_c.jpeg",
    "assets/gallery/2D6FA242-0FFC-4C40-8F0C-8347B9D8792E_1_105_c.jpeg",
    "assets/gallery/301952048_445376954280663_8946512552537818143_n.jpg",
    "assets/gallery/33616E95-BBD3-447E-8E62-71CCEDA7B233_1_105_c.jpeg",
    "assets/gallery/339749369_539606008362378_2732862549149392572_n.jpg",
    "assets/gallery/71645452_104844660926838_5454643564392742912_n (1).jpg",
    "assets/gallery/72165262_118261046251866_8468972133802835968_n.jpg",
    "assets/gallery/72704385_118260909585213_1470373566930223104_n.jpg",
    "assets/gallery/731BB232-058E-4D23-8CB2-BDEF287033CA_1_105_c.jpeg",
    "assets/gallery/74154120_130903131654324_1252824054524542976_n.jpg",
    "assets/gallery/74307762_130903171654320_2932034887189790720_n.jpg",
    "assets/gallery/74782709_130899681654669_8988988138139418624_n.jpg",
    "assets/gallery/75282384_130899458321358_2912444020934311936_n.jpg",
    "assets/gallery/75380276_130903078320996_5775491751846346752_n.jpg",
    "assets/gallery/75435813_130899608321343_2084961680223109120_n.jpg",
    "assets/gallery/75519313_130899641654673_5866277933030572032_n.jpg",
    "assets/gallery/76706883_144100627001241_1180234799369945088_n.jpg",
    "assets/gallery/78470829_144100657001238_6365514473272246272_n.jpg",
    "assets/gallery/78502594_144100687001235_7877366880137117696_n.jpg",
    "assets/gallery/79172169_144100723667898_4609884129322860544_n.jpg",
    "assets/gallery/9B1E6CE8-8510-46D1-BEE5-235A0D66421B.jpeg",
    "assets/gallery/D7A8AA99-8C29-41D2-8D3F-9ACA683ECCF7_1_105_c.jpeg",
    "assets/gallery/F05C26A8-252C-4184-8576-918D5AE44E7F_1_105_c.jpeg",
    "assets/gallery/F31A72A1-E910-4A39-9026-C3FA6FBD1C91_1_105_c.jpeg",
  ]

  ngOnInit(): void {
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

}
