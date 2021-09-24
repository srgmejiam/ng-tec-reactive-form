import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from 'src/app/core/models/input-config';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputConfig: InputConfig | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputConfig);
  }

}
