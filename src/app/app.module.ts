import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StarComponent } from './components/shared/star/star.component';
import { FormsModule } from '@angular/forms';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';


const table_de_Routage: Route[] = [
   { path: 'list', component : ProductsListComponent},
   { path: 'welcome', component: WelcomeComponent},
   { path: '', redirectTo: 'welcome', pathMatch: 'full'},
   { path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    ProductsListComponent,
    WelcomeComponent,
    StarComponent,
    ProductsFilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),  // Import de tous les composants de NG Bootstrap
    RouterModule.forRoot(table_de_Routage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
