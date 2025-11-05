import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { EventsModule } from './features/events/events.module';
import { TicketsModule } from './features/tickets/tickets.module';
import { FeedbackModule } from './features/feedback/feedback.module';
import { UsersModule } from './features/users/users.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './useritem/useritem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    UserlistComponent,
    UseritemComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardComponent,
    EventsModule,
    TicketsModule,
    FeedbackModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
