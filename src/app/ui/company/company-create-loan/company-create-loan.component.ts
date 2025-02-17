import { Component, OnInit } from '@angular/core';
import {APIService, Company, Loan} from "../../../API.service";

@Component({
  selector: 'app-company-create-loan',
  templateUrl: './company-create-loan.component.html',
  styleUrls: ['./company-create-loan.component.scss']
})
export class CompanyCreateLoanComponent implements OnInit {
  loans: Loan[] = [];
  constructor(
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.createLoan();
  }

  async createLoan(): Promise<void> {
    const newLoan = {
      company_name: "Song Kee Fish Ball Noodle",
      company_address: "Blk 79 Circuit Road",
      company_number: 91234567,
      applicant_name: "Sheng Qin",
      applicant_id: "1",
      loan_amount: 5000,
      payment_period: "2 years",
      interest_rate: 0.05,
      loan_approval_date: "12/2/2021",
      reason_for_loan: "Expansion",
      loan_period: "3 years",
      maturity_date: "4/4/2024",
      paying_account_id: "ABC1",
      amount_unpaid: 5000,
      status: "Received",
      business_proposal_id: "ABC123",
    };
    const newLoanDB = await this.api.CreateLoan(newLoan);
    console.log(newLoanDB);
  }

}

