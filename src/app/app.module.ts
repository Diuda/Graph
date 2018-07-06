import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BargraphComponent } from './bargraph/bargraph.component';
const appRoutes: Routes = [
  { path: 'bargraph', component: BargraphComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BargraphComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
