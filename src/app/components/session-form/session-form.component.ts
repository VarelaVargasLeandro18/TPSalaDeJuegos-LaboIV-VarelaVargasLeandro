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

  constructor() { }

  ngOnInit(): void {
  }

}
