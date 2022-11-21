import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LookupComponent } from './components/lookup/lookup.component';

import { SkillService } from './services/skill.service';
import { QuestService } from './services/quest.service';
import { StorageService } from './services/storage.service';
import { JsonPlaceHolderService } from './services/json-place-holder.service';
import { ButtonComponent } from './components/button/button.component';
import { UserComponent } from './components/json/user/user.component';
import { TodoComponent } from './components/json/todo/todo.component';
import { PhotoComponent } from './components/json/photo/photo.component';
import { AlbumComponent } from './components/json/album/album.component';
import { CommentComponent } from './components/json/comment/comment.component';
import { PostComponent } from './components/json/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LookupComponent,
    ButtonComponent,
    UserComponent,
    TodoComponent,
    PhotoComponent,
    AlbumComponent,
    CommentComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [
    SkillService,
    QuestService,
    StorageService,
    JsonPlaceHolderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
