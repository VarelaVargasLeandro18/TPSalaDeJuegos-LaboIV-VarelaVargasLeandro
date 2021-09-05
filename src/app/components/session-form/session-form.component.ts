import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  @Input() 
  title: string = "";

  @Input()
  button_title: string = "";

  @Input()
  user_label: string = "";

  @Input()
  user_placeholder: string = "";

  @Input()
  password_label: string = "";

  @Input()
  password_placeholder : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
