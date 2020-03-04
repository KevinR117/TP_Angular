import { Injectable } from '@angular/core';
import { Book } from './../models/book.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {
    this.getBooks();
  }

  books : Book[] = [];

  bookSubject = new Subject<Book[]>();

  emitBooks() {
    this.bookSubject.next(this.books);
  }

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books').on('value', (data : DataSnapshot) => {
      this.books = data.val();
      this.emitBooks();
    });
  }

  getSingleBook(id : number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data : DataSnapshot) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
