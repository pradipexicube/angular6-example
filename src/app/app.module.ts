import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//ROUTING
import { AppRoutingModule } from './app-routing.module';
//component
import { LikeComponent } from '../components/likecomponent/like.component';
import { CardimageComponent } from '../components/cardimagecomponent/cardimage.component';
//PAGE
import { TestPageComponent } from './test-page/test-page.component';

//FIREBASE
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyANjUwZ_Xw2ziVE4FTnAI1klvRsWvWGMDY",
  authDomain: "angular6-fda86.firebaseapp.com",
  databaseURL: "https://angular6-fda86.firebaseio.com",
  projectId: "angular6-fda86",
  storageBucket: "",
  messagingSenderId: "668665359043"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    LikeComponent,
    CardimageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
