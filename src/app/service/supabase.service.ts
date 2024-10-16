import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }


  // Méthode pour récupérer les données d'une table
  async getDataFromTable(table: string, column: string) {
    const { data, error } = await this.supabase
      .from(table)
      .select(column);

    if (error) {
      console.error('Erreur lors de la récupération des données :', error);
      return [];
    }
    return data || [];
  }
}
