import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CookieModule } from 'ngx-cookie';

// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// services
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import { OrdersComponent } from './orders/orders.component';
import { BatteryModelComponent } from './battery-model/battery-model.component';
import { BatteryComponent } from './battery/battery.component';
import { SingleBatteryComponent } from './single-battery/single-battery.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const firebaseConfig = {
   apiKey: "AIzaSyBhoBZ9Zjr-5BySgE_sdIjVan_CA2b-rlM",
    authDomain: "battery-managment-system.firebaseapp.com",
    databaseURL: "https://battery-managment-system.firebaseio.com",
    projectId: "battery-managment-system",
    storageBucket: "battery-managment-system.appspot.com",
    messagingSenderId: "946958798915"
}


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    EventComponent,
    AboutComponent,
    DashboardHeaderComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    BatteryModelComponent,
    BatteryComponent,
    SingleBatteryComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CookieModule.forRoot(),
    RouterModule.forRoot([
       {
          path:'',
          redirectTo:'login',
          pathMatch: 'full'
       },
       {
           path : 'dashboard',
           canActivate:[AuthGuardService],
           component: DashboardComponent,
           children : [

            {
                path:'',
                redirectTo:'home',
                pathMatch: 'full'
            },
            {
               path: 'home',
               component : HomeComponent    
            },
            {
              path : 'profile',
              component : ProfileComponent
            },
            {
              path: 'events',
              component: EventComponent
            },
            {
              path : 'orders/:id',
              component : OrdersComponent
            },
             {
              path : 'orders/:id/:oid',
              component : BatteryModelComponent
            },
            {
              path : 'orders/:id/:oid/:mid',
              component : BatteryComponent
            },
            {
               path : 'orders/:id/:oid/:mid/:bid',
               component : SingleBatteryComponent
            },
            {
              path: 'about',
              component : AboutComponent
            },
           ] 
       },
        {
          path : 'login',
          component : LoginComponent
        },
        { path: '**', 
         component: PageNotFoundComponent 
        }
    ])

  ],
  providers: [AuthService,AngularFireAuth,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
