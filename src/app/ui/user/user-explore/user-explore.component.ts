import { Component, OnInit } from '@angular/core';
import {APIService, Company} from '../../../API.service';
@Component({
  selector: 'app-user-explore',
  templateUrl: './user-explore.component.html',
  styleUrls: ['./user-explore.component.scss']
})
export class UserExploreComponent implements OnInit {

  companies: Company[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    // this.createCompany();
    this.loadCompanies();
  }

  async createCompany(): Promise<void> {
    // const newCompany = {
    //   name: "Tian Tian Hainanese Chicken Rice",
    //   address: "1 Kadayanallur St, #01-10/11 Maxwell Food Centre, Singapore 069184",
    //   rating: 4,
    //   type: "asian",
    //   latitude: 1.280020,
    //   longitude: 103.844818,
    // };
    const newCompany = {
      name: "Eng Kee Noodle House",
      address: "254 Jurong East St 24, #01-10, Singapore 600254",
      rating: 4,
      type: "asian",
      latitude: 1.343490,
      longitude: 103.737730,
    };
    const newCompanyDB = await this.api.CreateCompany(newCompany);
  }
  loadCompanies(): void {
    this.api.ListCompanies().then(event => {
      this.companies = event.items as Array<Company>;
      console.log(this.companies);
    });
  }

}
