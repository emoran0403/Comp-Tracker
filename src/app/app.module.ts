import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LookupComponent } from './components/lookup/lookup.component';

import { SkillService } from './services/skill.service';
import { QuestService } from './services/quest.service';
import { StorageService } from './services/storage.service';
import { JsonPlaceHolderService } from './services/json-place-holder.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LookupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    SkillService,
    QuestService,
    StorageService,
    JsonPlaceHolderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
