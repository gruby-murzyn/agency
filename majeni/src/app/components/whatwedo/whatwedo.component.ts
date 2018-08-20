import { Component } from '@angular/core';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.scss']
})
export class WhatwedoComponent {
  tittle: string;
  title_a = 'Team';
  title_b = 'Leasing';
  // tslint:disable-next-line:max-line-length
  description = 'BDTS Poland offers its customers the ability to instantly expand their IT department, with the entire team of consultants. This solution guarantees the efficient implementation of the objectives and provides a harmonious and proven team of professionals who work well together.';
  constructor() { }
  showDetails(index) {
    switch (index) {
      case 1:
        this.title_a = 'IT';
        this.title_b = 'OUTSOURCING';
        // tslint:disable-next-line:max-line-length
        this.description = 'This service enables to expand the team with the necessary IT professionals, with responsibilities closely corresponding to the current needs of our clients. This solution provides the ability to instantly adjust to changing conditions and market trends.';
        break;
      case 2:
        this.title_a = 'Team';
        this.title_b = 'Leasing';
        // tslint:disable-next-line:max-line-length
        this.description = 'BDTS Poland offers its customers the ability to instantly expand their IT department, with the entire team of consultants. This solution guarantees the efficient implementation of the objectives and provides a harmonious and proven team of professionals who work well together.';
        break;
      case 3:
        this.title_a = 'Managed';
        this.title_b = 'Service';
        // tslint:disable-next-line:max-line-length
        this.description = 'Managed Service gives our customers the opportunity to reduce the costs of the project and guarantees higher standards of work, while maintaining complete control over the different phases of our consultants working progress.';
        break;
      case 4:
        this.title_a = 'Fixed-Price';
        this.title_b = 'Project';
        // tslint:disable-next-line:max-line-length
        this.description = 'Cooperation in Fixed-Price model guarantees the project to be created in accordance with the defined specification in a pre-set time limit. The customer has a right to expect concrete results, achieved in a specific time, without a need to verify the progress of our consultants.';
        break;
    }

  }
}
