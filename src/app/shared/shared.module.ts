import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DashboardService} from './services/dashboard.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent],
  providers: [DashboardService]
})
export class SharedModule { }
