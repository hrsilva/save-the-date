import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  usuarios: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.usuarios = firestore.collection('usuarios').valueChanges();
  }

  ngOnInit() {
    
  }
}
