import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private user: User | null = null;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    this.supabase.auth.onAuthStateChange((event, session) => {
      this.user = session?.user || null;
    });
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
    // Si `data` contient un `user`, on l'attribue à `this.user`.
    if (data?.user) {
      this.user = data.user as User;
    }
    
    return data.user;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Erreur de déconnexion:', error);
      throw error;
    }
    this.user = null;
  }

  get currentUser() {
    return this.user;
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
