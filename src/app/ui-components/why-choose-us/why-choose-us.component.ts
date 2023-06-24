import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {
  cards = [
    {
      title: "Corporate Services with Business Advice and Legal Expertise",
      body: "Our primary aim is to serve your corporation interests. In addition to our legal services, we are also able to provide business advice. We also provide you with lawyers from other practice areas to assist you in matters requiring special expertise beside corporate matters."
    },
    {
      title: "Legal Compliance for Business",
      body: "We make sure that your business houses are run in compliance with the corporate law. Our job requires rigorous hard work, dedication, and perseverance. Our corporate law practice deals with the legal formalities of a business. After business formation, there are other legal documents that clearly establish the direction and management of the business."
    },
    {
      title: "Dependable Corporate Legal Counsel",
      body: "As choosing EHSLF as your corporate legal counsel, we always provide you with guidance through predictable and unpredictable matters including regulatory issues, or advising you in what to do in the event of looming business litigation, and ensure of providing insight into corporate dissolution alternatives in all cases."
    },
  ]
}
