import { Component } from '@angular/core';
import { PrimoServiceService } from '../../services/primo-service.service';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-primo-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-primo-service.component.html',
  styleUrl: './test-primo-service.component.scss',
})
export class TestPrimoServiceComponent {
  constructor(private logger: PrimoServiceService, private api: ApiService) {
    this.logger.log('ciao');
    this.logger.somma(5, 5);
    this.logger.sottrazione(10, 2);
    this.logger.moltiplicazione(5, 2);
    this.logger.divisione(8, 2);
  }
  ngOnInit() {
    this.api.get('post').subscribe((res) => {
      console.log(res);
    });
  }
}
