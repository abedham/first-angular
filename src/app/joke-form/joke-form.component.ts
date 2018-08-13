import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit, AfterViewInit {
  model: Joke = new Joke("", "");
  @ViewChild("f") form: any;
  @Output() createdJoke = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(
      values => {
        console.log('values, ', values)
      }
    );
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('values ', this.form.value);
      this.createdJoke.emit(this.model);
      this.model = new Joke("", "");
      this.form.reset();
    } else {
      console.log('Invalid Form ');
    }
  }
}
