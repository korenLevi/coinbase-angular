import { Component, OnInit,Input} from '@angular/core';
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact
  // @Input() isMove: boolean
  
  constructor() { }
  isContactEdit = false
  isMoveClick = false
  ngOnInit(): void {
    
  }

  onContactEdit():void{
    this.isContactEdit = true
  }
  onMoveModal(event):void{
    
    console.log('here');
    this.isContactEdit = false
    this.isMoveClick = true
    console.log(' this.isMoveClick', this.isMoveClick);
  }
  onCloseModal(event){
    // if(this.isMoveClick) return
    console.log(' this.isMoveClick', this.isMoveClick);
    console.log('is');
    
    this.isContactEdit = false
    this.isMoveClick = false
    console.log(' this.isMoveClick', this.isMoveClick);
  }
}
