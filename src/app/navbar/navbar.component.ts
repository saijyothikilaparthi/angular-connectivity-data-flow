import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbar={
  logo:"portfolio",
  item1:"home",
  item2:"contact us",
  item3:"about us",
  item4:"profile"
}
port={
  src:"https://w7.pngwing.com/pngs/530/79/png-transparent-deep-learning-machine-learning-artificial-neural-network-brain-artificial-intelligence-brain-blue-angle-text-thumbnail.png",
  alt:"logo"
}
}
