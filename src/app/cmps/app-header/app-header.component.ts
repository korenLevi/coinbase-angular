import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }
  isClicked: boolean = false
  ngOnInit(): void {
  }

  onSignUp(){
    this.isClicked = true
  }

  onCloseModal(event){
    // console.log(event);
    
    this.isClicked = false
  }

}
