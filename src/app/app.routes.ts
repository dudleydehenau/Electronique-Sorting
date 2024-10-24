import { Routes } from '@angular/router';
import { ComposantsComponent } from './composants/composants.component';
import { DemarerComponent } from './demarer/demarer.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ParametresComponent } from './parametres/parametres.component';
import { TriComponent } from './tri/tri.component';

export const routes: Routes = [
    {
        path: '',
        component: ComposantsComponent
    },
    {
        path: 'historique',
        component: HistoriqueComponent
    },
    {
        path: 'parametres',
        component: ParametresComponent
    },
    {
        path: 'demarer',
        component: DemarerComponent
    },
    {
        path: 'tri',
        component: TriComponent
    }
];
