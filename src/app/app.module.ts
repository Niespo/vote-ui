import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {PollListComponent} from './poll-list/poll-list.component';
import {PollComponent} from './poll/poll.component';
import {QuestionComponent} from './question/question.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'polls', component: PollListComponent},
  {path: 'polls/:id', component: PollComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollListComponent,
    PollComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
