import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ReadPersonsComponent } from './components/read-persons/read-persons.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'personas', component: ReadPersonsComponent},
	{path: 'crear-personas', component: CreateComponent},
	{path: 'editar-personas/:id', component: EditComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
