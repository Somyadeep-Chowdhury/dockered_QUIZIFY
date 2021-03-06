
import { QuizifyModule } from './quizify/quizify.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuizifyMaterialModule } from './quizify/quizify.material.module';
import { FormsModule } from '@angular/forms';
import { QuestionService } from './quizify/services/question.service';
import { GameserviceService } from './quizify/services/gameservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuizifyModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [QuestionService,
  GameserviceService] ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
