import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../service/supabase.service';

@Component({
  selector: 'app-composants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {
  name!: string;
  quantity!: number;

  data: any[] = [];
  // data: { Name: string }[] = [];

  constructor(private supabaseService: SupabaseService) {

  }


  async ngOnInit() {
    this.name = "LED";
    this.quantity = 25;

    // Ici, vous spécifiez le nom de la table et de l'attribut

    try {
      let response = await this.supabaseService.getDataFromTable('Compartment', 'Name');
      console.log("Type de response : ", typeof(response));
      console.log('Response from Supabase:', response); // Affiche la réponse reçue brute
      

      // On vérifie si `response` est un tableau et s'il contient des objets ayant la clé `Name`
      if (Array.isArray(response)) {
        this.data = response;
        // Affichage des noms dans la console
        this.data.forEach(item => {
          console.log('Name:', item.Name);
        });
      } else {
        console.warn('No valid data received');
      }
    } catch (error) {
      console.error('Error fetching data from Supabase:', error); // Affiche l'erreur si elle se produit
    }
  }
}
