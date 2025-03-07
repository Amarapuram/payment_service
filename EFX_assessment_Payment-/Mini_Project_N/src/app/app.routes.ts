import { Routes } from '@angular/router';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PaystatusComponent } from './paystatus/paystatus.component';

export const routes: Routes = [
    { path : '', component : PaymentPageComponent},
    { path : 'status', component : PaystatusComponent},
    { path: 'home', component: PaymentPageComponent },  // Define your home route
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
