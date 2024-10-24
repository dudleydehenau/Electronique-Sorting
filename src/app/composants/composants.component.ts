import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { SupabaseService } from '../service/supabase.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
=======
import { SupabaseCRUDService } from '../services/supabaseCRUD.service';
>>>>>>> 701ef33dca1a16a0c897951528795a649c8a0ddf

@Component({
  selector: 'app-composants',
  standalone: true,
  imports: [CommonModule],
  imports: [CommonModule, MatCardModule, MatChipsModule, MatGridListModule],
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
  styleUrls: ['./composants.component.scss'],
})
export class ComposantsComponent implements OnInit {
  name!: string;
  quantity!: number;

  data: any[] = [];

<<<<<<< HEAD
  constructor(private supabaseService: SupabaseService) {}
=======
  constructor(private supabaseCRUDService: SupabaseCRUDService) {

  }
>>>>>>> 701ef33dca1a16a0c897951528795a649c8a0ddf

  async getData() {
    try {
<<<<<<< HEAD
      // Fetch data from the Component table
      this.data = await this.supabaseService.getComponentsWithDetails();
      console.log('Response from Component table:', this.data);
=======
      let response = await this.supabaseCRUDService.getDataFromComponent('Compartment', '*');
      console.log("Type de response : ", typeof(response));
      console.log('Response from Supabase:', response); // Affiche la réponse reçue brute
      

      // On vérifie si `response` est un tableau et s'il contient des objets ayant la clé `Name`
      if (Array.isArray(response)) {
        this.data = response;
        // Affichage des noms dans la console
        this.data.forEach(item => {
          console.log('Name:', item.Name);
          console.log('Location:', item.Location);
          console.log('Id: ', item.Id);
        });
      } else {
        console.warn('No valid data received');
      }
>>>>>>> 701ef33dca1a16a0c897951528795a649c8a0ddf
    } catch (error) {
      console.error('Error fetching data from Component table:', error);
    }
  }

  // async insertData() {
  //   await this.supabaseService.insertDataInTable(
  //     "Component",
  //     2,
  //     "Transistor de Bru",
  //     3,
  //     15,
  //     301,
  //     3
  //   )
  // }

  ngOnInit() {
    // this.supabaseService.login();

    this.getData();
<<<<<<< HEAD
=======
    // this.insertData();
>>>>>>> 701ef33dca1a16a0c897951528795a649c8a0ddf
  }
}
