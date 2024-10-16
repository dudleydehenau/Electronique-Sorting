import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  async getInventory() {
    const { data, error } = await this.supabase
      .from('') // Nom de ta table dans Supabase
      .select('*');

    if (error) {
      console.error('Error fetching data', error);
      return [];
    }
    return data;
  }
}
