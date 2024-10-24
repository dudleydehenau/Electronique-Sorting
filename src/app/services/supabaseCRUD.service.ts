import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SupabaseCRUDService {
  private supabase: SupabaseClient;
  private user: User | null = null;

  // Méthode Constructeur : - Définition de la Session Client Supabase
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

    this.supabase.auth.onAuthStateChange((event, session) => {
      this.user = session?.user || null;
    });

    this.login();
  }

  // Fonction signIn : - Permet véridier les identifiants et mdp de connexions pour l'API
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

  // Méthode login : - Initialise la connexion avec l'API de la DB
  async login() {
    try {
      const user = await this.signIn(environment.email_user, environment.password_user);
      console.log('Utilisateur connecté:', user);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  }

  // Fonction signOut : - Quitte la session de connexion si une erreur surviens avec l'API
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Erreur de déconnexion:', error);
      throw error;
    }
    this.user = null;
  }

  // Fonction currentUser : - Permet d'obtenir le 'user' connecté pour la session (si il y en a un)
  get currentUser() {
    return this.user;
  }


  // Fonction getDataFromTable : - Permet de récupérer des données d'une table
  async getDataFromComponent(table: string, column: string) {
    const { data, error } = await this.supabase
      .from(table)
      .select(column);

    if (error) {
      console.error('Erreur lors de la récupération des données :', error);
      return [];
    }
    return data || [];
  }

  // Méthode insertDataInTable : - Permet d'insérer des données dans la DB
  // async insertDataInTable(
  //   table: string,
  //   id: number,
  //   name: string,
  //   type_id: number,
  //   quantity: number,
  //   feature_id: number,
  //   compartment_id: number) {
    
  //     try {
  //       // Validation: `quantity` peut être nul, mais pas les autres champs
  //       // if (!table || !column || !id || !type_id || !feature_id || !compartment_id) {
  //       //   throw new Error('Tous les champs sauf "quantity" et "name" sont obligatoires.');
  //       // }
    
  //       const { data, error } = await this.supabase
  //         .from(table)
  //         .insert([
  //           {
  //             Id: id,
  //             Name: name,
  //             Type_id: type_id,
  //             Quantity: quantity,
  //             Feature_id: feature_id,
  //             Compartment_id: compartment_id
  //           },
  //         ]);
    
  //       if (error) {
  //         console.error('Erreur lors de l\'insertion:', error.message);
  //       } else {
  //         console.log('Données insérées avec succès:', data);
  //       }
  //     } catch (error) {
  //       console.error('Erreur:', error);
  //     }
  // }
  
  async getComponentsWithDetails() {
    const { data, error } = await this.supabase.from('Component').select(`
        *,
        Feature (
          Description,
          Image
        ),
        Type (
          Name
        )
      `);

    if (error) {
      console.error('Error fetching components with details:', error);
      return [];
    }

    return data || [];
  }
}

