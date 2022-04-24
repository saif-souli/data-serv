import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { MyspaceComponent } from './myspace/myspace.component';
import { ProfileComponent } from './profile/profile.component';

import { SettingsComponent } from './settings/settings.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminRegestrationComponent } from './admin/admin-regestration/admin-regestration.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { LogRelationnalComponent } from './log-relationnal/log-relationnal.component';
import { DashbordsComponent } from './dashbords/dashbords.component';
import { SourcePropertiesComponent } from './admin/source-properties/source-properties.component';
import { PropertyComponent } from './admin/property/property.component';
import { MigrationComponent } from './admin/migration/migration.component';
import { LogElasticsearchComponent } from './admin/log-elasticsearch/log-elasticsearch.component';
import { ScNavbarComponent } from './sc-navbar/sc-navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './alert';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    MyspaceComponent,
    ProfileComponent,
    SettingsComponent,
    AdminUsersComponent,
    AdminRegestrationComponent,
    DataSourceComponent,
    LogRelationnalComponent,
    DashbordsComponent,
    SourcePropertiesComponent,
    PropertyComponent,
    MigrationComponent,
    LogElasticsearchComponent,
    ScNavbarComponent,
    AppComponent,
    AlertComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'myspace', component: MyspaceComponent},
      { path:'profile', component: ProfileComponent},
      { path:'settings', component: SettingsComponent},
      { path:'login', component: LoginComponent},
      { path:'admin/regestration', component: AdminRegestrationComponent},
      { path:'admin/users', component: AdminUsersComponent},
      { path:'myspace/datasource', component: DataSourceComponent},
      { path:'logrelationnal', component: LogRelationnalComponent},
      { path:'dashbords', component: DashbordsComponent},
      { path:'admin/sourceproperties', component: SourcePropertiesComponent},
      { path:'admin/property', component: PropertyComponent},
      { path:'admin/migration', component: MigrationComponent},
      { path:'admin/logelastic', component: LogElasticsearchComponent},
    ]),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
