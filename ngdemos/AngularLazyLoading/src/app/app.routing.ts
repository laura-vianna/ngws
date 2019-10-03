import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';
// Eager loading
import { LazyComponent } from "./lazy.component";

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  // Eager loading
  // { path: 'lazy', component: LazyComponent }
  // Lazy loading
   { 
    path: 'lazy', 
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);