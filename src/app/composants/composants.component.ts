import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { SupabaseService } from './supabase.service';

// export interface ComponentCard {
//   cols: number;
//   rows: number;
//   carac: string;
//   quantity: number;
//   name: string;
// }

@Component({
  selector: 'app-composants',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatGridListModule],
  templateUrl: './composants.component.html',
  styleUrl: './composants.component.scss',
})
export class ComposantsComponent implements OnInit {
  tiles: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory(): void {
    this.supabaseService.getInventory().then((data) => {
      this.tiles = data;
    });
  }
}
