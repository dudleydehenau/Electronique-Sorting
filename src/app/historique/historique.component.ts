import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

interface Components {
  [key: string]: number | null;
}

interface HistoricElement {
  date: Date;
  image: string;
  action: number; // 0 = tri / 1 = ajout / 2 = supr
  components: Components;
  comp_number: number; // action = 0 > comp qui fonctione / action = 1 > comp ajouté / action = 2 > comp jeté 
  comp_not_sorted?: number;
  host: string;
}

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
})


export class HistoriqueComponent {
  // Exemples
  historicElements: HistoricElement[] = [
    {
      date: new Date('2024-10-10'),
      image: 'assets/historique/images/resistor.png',
      action: 0,
      components: { resistor: 5, led: 5, logic_door: 3},
      comp_number: 12,
      comp_not_sorted: 1,
      host: 'D. De Smet',
    },
    {
      date: new Date('2024-10-10'),
      image: 'assets/historique/images/led.png',
      action: 0,
      components: { resistor: 3, led: 3},
      comp_number: 6,
      comp_not_sorted: 0,
      host: 'A. Dewulf',
    },
    {
      date: new Date('2024-10-8'),
      image: 'assets/historique/images/resistor.png',
      action: 1,
      components: { resistor: 10},
      comp_number: 10,
      host: 'A. Dewulf',
    }
  ];

  showMore = false;

  groupedHistoricElements: { date: number, elements: any[] }[] = [];

  groupHistoricElementsByDate() {
    const grouped = new Map<number, any[]>();
  
    this.historicElements.forEach(element => {
      const date = element.date.getTime();
      if (!grouped.has(date)) {
        grouped.set(date, []);
      }
      grouped.get(date)?.push(element);
    });
  
    this.groupedHistoricElements = Array.from(grouped, ([date, elements]) => ({ date, elements }));
  }
  
  ngOnInit(): void {
    this.groupHistoricElementsByDate();
  }

  // Ajouter dynamiquement un nouvel élément (WIP)
  public addHistoricElement(element: HistoricElement) {
    this.historicElements.push(element);
  }

  getComponents(components: any): string {
    const componentLabels: { [key: string]: string } = {
      resistor: 'Résistance',
      led: 'LED rouge',
      logic_door: 'Porte logique',
      _74ls80: '74LS80',
      newComponent: 'Composant personnalisé',
    };
  
    return Object.keys(components)
      .map(key => `${componentLabels[key] || key} (${components[key]})`)
      .join(', ');
  }

  getAction(action: number): string {
    if (action == 0) {
      return "Triage";
    } else if (action == 1) {
      return "Ajout";
    } else {
      return "Suppression"
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  isTextTooLong(text: string): boolean {
    return text.length > 100; // Si le texte dépasse 100 caractères, afficher "voir plus"
  }
}
