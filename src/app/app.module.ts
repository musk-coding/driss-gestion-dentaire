import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { AuthenticationComponent } from './shared/components/authentication/authentication.component';

//les pipes
import { TypeComptePipe } from './shared/pipes/type-compte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
    ForbiddenComponent,
    AuthenticationComponent,
    TypeComptePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
