import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendcliPipe } from './pipes/appendcli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { postService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    AppendcliPipe,
    SummaryPipe,
    PostComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [postService],
  bootstrap: [AppComponent]
})
export class AppModule { }
