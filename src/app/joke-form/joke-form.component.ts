import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JokeListComponent } from '../joke-list/joke-list.component';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() createdJoke = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }
  addJoke(setupVal: string, punchlineVal: string) {
    this.createdJoke.emit(new Joke(setupVal,punchlineVal));
  }
}
