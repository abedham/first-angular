import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;
  @Input() index: number;
  @Output() deletedJoke = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
  }
  deleteJoke(index: number) {
    this.deletedJoke.emit(index);
  }
}
