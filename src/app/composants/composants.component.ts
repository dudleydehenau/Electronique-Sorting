import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-composants',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatGridListModule],
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss'],
})
export class ComposantsComponent implements OnInit {
  name!: string;
  quantity!: number;

  data: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async getData() {
    try {
      // Fetch data from the Component table
      this.data = await this.supabaseService.getComponentsWithDetails();
      console.log('Response from Component table:', this.data);
    } catch (error) {
      console.error('Error fetching data from Component table:', error);
    }
  }

  ngOnInit() {
    this.supabaseService.login();

    this.getData();
  }
}
