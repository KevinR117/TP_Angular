import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookApp';
  constructor() {
    const config = {
      apiKey: "AIzaSyAvJCv7T36Fsq_MjwC-WH603yVNu5b6HXg",
      authDomain: "tpangular-9c39b.firebaseapp.com",
      databaseURL: "https://tpangular-9c39b.firebaseio.com",
      projectId: "tpangular-9c39b",
      storageBucket: "tpangular-9c39b.appspot.com",
      messagingSenderId: "567630906193",
      appId: "1:567630906193:web:252ffc21ea3def03804970"
    };
    firebase.initializeApp(config);
  }
}
