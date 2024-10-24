import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { SupabaseCRUDService } from '../services/supabaseCRUD.service';


@Component({
  selector: 'app-composants',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatGridListModule],
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {
  name!: string;
  quantity!: number;

  data: any[] = [];

  constructor(private supabaseCRUDService: SupabaseCRUDService) {

  }

  async getData() {
    try {
      // Fetch data from the Component table
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
    // this.insertData();
  }
}
