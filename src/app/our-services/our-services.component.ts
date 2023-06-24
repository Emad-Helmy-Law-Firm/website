import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faAngleRight,
  faCircle,
  faSquarePlus,
  faSquareMinus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  clickedIndex = 0;

  faAngleRight = faAngleRight;
  faCircle = faCircle;
  faSquarePlus = faSquarePlus;
  faSquareMinus = faSquareMinus;
  clicked = 'Litigation';
  plusClicked = true;

  services = [
    'Litigation',
    'Real Estate',
    'Civil Law',
    'Intellectual Property',
    'Administrative Law',
    'Labor Law',
    'Contractual Agreements',
    'International Arbitration',
    'Mergers and Acquisitions',
    'Family Law',
  ];

  servicesData = [
    {
      img: './assets/litigation_background.webp',
      data: 'Our lawyers have extensive experiences in all matters involving litigation, especially in civil and criminal litigation. Our team is well prepared to assist our clients at every stage of the process and help structure and plan the most suitable strategy as well as approach in handling the case.',
      titleOne: 'Training and Expertise',
      descOne:
        'The firm’s lawyers possess the training and expertise that allows them to litigate matters before courts of all degrees and instances as well as administrative authorities nationwide; and are able to handle a multitude of corporate and commercial litigations ranging from routine matters to large and complex affairs.',
      titleTwo: 'Requisite Insight',
      descTwo:
        'Emad Helmy Said Law Firm’s litigation practice builds on the firm’s requisite insight into the sources of disputes, which has granted us a unique edge in reaching commercially viable judgments or settlements that are favorable to our clients.',
      extraOfferings:
        'The firm also offers assistance to individual and corporate clients with out-of-court negotiations and remedies.',
      listOfSpec: [
        'Tax and insolvency',
        'Insurance claims',
        'Construction and real estate',
        'Employment and labor',
        'White collar and corporate crime',
        'IP matters',
        'Shareholders’ and share transfer disputes',
        'Agency and distribution',
      ],
      endingPar:
        'Our lawyers at Emad Helmy Said Law Firm have the ability to effectively negotiate and represent client interests, to ensure the most successful trial possible outcomes. That being by providing advice on case evaluations and developing the most effective defense strategies.',
    },
    {
      img: './assets/real-estate.jpg',
      data: 'A law firm specializing in real estate law can offer significant contributions to the field. Real estate law is a complex and multi-faceted area of law that deals with a broad range of legal issues related to property ownership, transfer, development, and management. Given the complexities associated with real estate transactions, it is essential to work with a legal expert who can provide sound legal advice and guidance.\n\n One of the primary contributions of a law firm is their ability to navigate the complexities of real estate transactions. Real estate lawyers have extensive knowledge of real estate law and can advise on all aspects of the purchase, sale, and leasing of real estate properties. They can help clients review, draft, and negotiate contracts, and ensure that all applicable laws and regulations are complied with.\n\nReal estate lawyers can also assist with due diligence, title searches, and other legal matters involved in real estate transactions. They can help clients evaluate and manage risks associated with real estate transactions, including resolving disputes related to title, property boundaries, and zoning issues.',
      titleOne: 'Assistance with Property Development Projects',
      descOne:
        'Another critical contribution of a law firm is their ability to assist with property development projects. A real estate law firm can help clients obtain necessary permits, draft construction agreements, and negotiate with contractors and other parties involved in the project. They can also advise on zoning laws and regulations, and help clients navigate the regulatory landscape to ensure compliance with all applicable laws.',
      titleTwo: 'Advice on Investment Strategies and Risk Mitigation',
      descTwo:
        'In addition, real estate lawyers can advise clients on real estate investment strategies and help them identify and mitigate risks. They can provide guidance on tax and financing implications of real estate transactions, and help clients develop a comprehensive real estate investment plan.',
      extraOfferings:
        'Overall, the contribution of a law firm specializing in real estate law is essential in ensuring that clients are equipped to navigate the complexities of real estate transactions and investments with confidence. Their expertise and insight are invaluable in mitigating risks and ensuring that clients achieve the best possible outcomes.',
    },
    {
      img: './assets/civil_background.png',
      data: 'Civil law is a broad and ever-evolving area of law that covers a range of legal issues related to the rights and obligations of individuals and organizations. Given the complexities associated with civil law issues, it is critical to work with a legal expert who can provide sound legal advice and guidance.\n\n One of the primary contributions of a modern law firm specializing in civil law is their ability to navigate the complexities of civil litigation through the use of cutting-edge legal technology and innovative legal strategies. A modern civil law firm can represent clients in various civil matters, including contract disputes, personal injury claims, employment disputes, and property disputes. They can leverage legal technology to streamline the litigation process and optimize case management, providing clients with efficient and cost-effective legal representation.',
      titleOne: 'Providing Business Law Advice in the Digital Age',
      descOne:
        "Another critical contribution of a modern law firm is their ability to provide legal advice and guidance related to business law matters in the context of the rapidly evolving digital landscape. A modern civil law firm can offer legal insight on a range of business law issues, including corporate law, mergers and acquisitions, and commercial transactions. They can leverage technology to provide clients with real-time legal support and innovative solutions that are tailored to each client's unique needs.",
      titleTwo: 'Digital Estate Planning and Administration',
      descTwo:
        'In addition, modern civil law firms can provide legal advice and guidance related to estate planning and administration utilizing digital tools and resources. They can help clients draft wills and trusts, navigate the probate process, and ensure that their wishes are carried out in a secure and efficient manner.',
      extraOfferings:
        'Overall, the contribution of a modern law firm specializing in civil law is essential in ensuring that clients are equipped to navigate the complexities of civil law issues with confidence. Their expertise and use of cutting-edge legal practices and resources are invaluable in mitigating risks, protecting rights, and ensuring that clients achieve the best possible outcomes.',
    },
    {
      img: './assets/intellectual_property_background.png',
      data: 'A law firm specializing in intellectual property (IP) can offer significant contributions to the field by providing comprehensive and strategic legal advice and support to individuals and organizations seeking to manage and protect their intellectual property assets. Intellectual property refers to creations of the mind, such as inventions, literary and artistic works, and symbols, names, and images used in commerce.\n\n One of the primary contributions of a law firm in managing intellectual property is their ability to help clients obtain and protect their IP rights. A law firm specializing in IP can work with clients to identify and register their intellectual property assets, such as patents, trademarks, and copyrights. They can also advise clients on how to enforce their IP rights, including filing lawsuits to stop infringing activities and seeking damages for lost profits.',
      titleOne: 'Licensing, Commercialization and \n Due Diligence',
      descOne:
        'Another critical contribution of a law firm is their ability to provide legal advice and guidance on IP licensing and commercialization. A law firm specializing in IP can help clients negotiate and draft licensing agreements, as well as provide advice on how to monetize their intellectual property assets. They can also assist with due diligence and IP audits, helping clients identify and evaluate the IP assets of a potential acquisition or merger target.',
      titleTwo: 'Strategic IP Portfolio Management',
      descTwo:
        'In addition, an IP law firm can provide legal advice and guidance related to IP portfolio management. They can assist clients in developing a comprehensive IP strategy, including identifying, assessing, and managing IP assets, as well as help clients navigate the complex landscape of IP laws and regulations.',
      extraOfferings:
        "Overall, the contribution of a law firm specializing in intellectual property is essential in managing and protecting a client's intellectual property assets. Their expertise and guidance in obtaining, protecting, and commercializing intellectual property rights can help clients maximize the value of their IP assets and minimize the risk of costly litigation.",
    },
    {
      img: './assets/administrative_background.png',
      data: 'Administrative law is a specialized area of law that deals with the legal principles governing the relationship between individuals and government agencies. A law firm specializing in administrative law can provide significant contributions to the field by offering legal guidance and support to individuals and organizations that are navigating the complex and evolving regulatory landscape.\n\n One of the primary contributions of an administrative law firm is their ability to help clients comply with government regulations and policies. An administrative law firm provides clients with advice on regulatory compliance issues, including licensing requirements, permits, and other regulatory obligations. They can also represent clients in administrative proceedings, such as hearings and appeals, to ensure that their interests are safeguarded, and their rights are protected.',
      titleOne: 'Expertise in Government Contracts and Procurement',
      descOne:
        'Another critical contribution of an administrative law firm is their expertise in government contracts and procurement. Administrative law firms help clients navigate the complex and competitive government procurement process, including bidding and proposal preparation, contract formation, and contract administration. They can also assist clients in resolving disputes related to government contracts and procurement.',
      titleTwo: 'Advocacy in Rulemaking and Government Relations',
      descTwo:
        'In addition, an administrative law firm can assist clients in participating in the administrative rulemaking process, including advocating for changes to proposed regulations and participating in public comment periods. They can also provide legal advice and representation related to lobbying and government relations, helping clients navigate the complex legal and ethical requirements associated with these activities.',
      extraOfferings:
        'Overall, the contribution of a law firm specializing in administrative law is essential in ensuring that clients are equipped to navigate the complexities of governmental regulations and policies with confidence. Their expertise and insight are invaluable in mitigating risks, protecting rights, and ensuring that clients achieve the best possible outcomes.',
    },
    {
      img: './assets/Labor_background.png',
      data: 'Labor law is a specialized area of law that governs the rights and obligations of employers and employees. A law firm specializing in labor law can provide significant contributions to the field by offering legal guidance and support to individuals, businesses, and organizations that are navigating the complex and evolving legal landscape.\n\n One of the primary contributions of a labor law firm is their ability to help clients comply with labor laws and regulations. Labor law firms can provide clients with advice on all aspects of labor law, including employment contracts, workplace policies, and compliance with state and federal labor laws. They can also represent clients in disputes related to wage and hour violations, discrimination, harassment, and retaliation.',
      titleOne: 'Expertise in Collective \nBargaining and Union Representation',
      descOne:
        'Another critical contribution of a labor law firm is their expertise in collective bargaining and union matters. Labor law firms can represent employers, unions, and employees in collective bargaining negotiations, grievance proceedings, and other disputes related to union organizing and representation. They can also provide legal advice and representation in matters related to labor relations, such as unfair labor practices and union elections.',
      titleTwo: 'Litigation and Workplace Investigations',
      descTwo:
        'In addition, a labor law firm can assist clients with employment-related litigation, including wrongful termination, discrimination, and harassment claims. They can also assist with workplace investigations and audits, helping clients identify and address potential legal issues before they become significant liabilities.',
      extraOfferings:
        'Overall, the contribution of a law firm specializing in labor law is essential in ensuring that clients are equipped to navigate the complexities of labor law issues with confidence. Their expertise and insight are invaluable in mitigating risks, protecting rights, and ensuring that clients achieve the best possible outcomes.',
    },
    {
      img: './assets/Contractual_background.png',
      data: 'A law firm specializing in contractual agreements can advise clients on the legal implications of proposed contract terms, and work with them to develop contract language that meets their needs while mitigating risk. The firm can also assist clients in negotiating contract terms, and reviewing agreements for compliance with legal requirements.\n\n Another critical contribution of a law firm is their ability to provide legal advice and representation in disputes related to contracts. A law firm specializing in contractual agreements can assist clients in resolving disputes related to contract performance, interpretation, and breach. They can also represent clients in litigation related to contractual agreements, and assist clients in resolving disputes through mediation or arbitration.',
      titleOne: 'Effective Contract Management Strategies',
      descOne:
        'In addition, a law firm can assist clients in developing and implementing effective contract management strategies. This includes assisting clients in maintaining accurate records of contracts, tracking contract deadlines and renewal dates, and managing contract performance.',
      extraOfferings:
        'Overall, the contribution of a law firm specializing in contractual agreements is essential in ensuring that clients are equipped to navigate the complexities of contractual agreements with confidence. Their expertise and insight are invaluable in mitigating risks, protecting rights, and ensuring that clients achieve the best possible outcomes.',
    },
    {
      img: './assets/international_arbitration.jpeg',
      data: "International arbitration is a dispute resolution process that involves the use of an independent, neutral third party - an arbitrator or arbitral tribunal - to resolve a dispute between two or more parties that arise from an international commercial agreement. International arbitration is a preferred method of dispute resolution because it offers the parties more flexibility, efficiency, and confidentiality than traditional litigation. International arbitration can also ensure that the dispute is resolved by an expert in the relevant field, with knowledge of cultural and legal differences between the parties' jurisdictions. In international arbitration, the parties to a dispute agree to resolve their dispute through arbitration rather than through traditional court proceedings. The parties select an arbitrator or a panel of arbitrators to hear their case and decide the outcome. The arbitrator or panel will receive evidence and arguments from each side, and will then make a binding decision on the dispute. The decision of the arbitrator or panel is final and enforceable under international law.",
      titleOne: 'International Arbitration Rules',
      descOne:
        'International arbitration can be conducted under a variety of rules, such as the International Chamber of Commerce (ICC) Rules, the London Court of International Arbitration (LCIA) Rules, or the United Nations Commission on International Trade Law (UNCITRAL) Rules. These rules provide a framework for the arbitration process, including provisions on the selection of the arbitrator or arbitral tribunal, the conduct of the arbitration, and the enforcement of the award.',
      titleTwo: 'Advantages of International Arbitration',
      descTwo:
        'The advantages of international arbitration are numerous. It provides a confidential forum for the parties to resolve their dispute, which can be important in sensitive commercial matters. It can also be more efficient than traditional litigation, as the parties can choose the arbitrator and set the timetable of the arbitration. International arbitration can also be more flexible, as the parties can agree on the rules governing the arbitration and the language to be used. Finally, international arbitration can be more enforceable, as the award is enforceable under international law in over 160 countries that have signed the New York Convention.',
      extraOfferings:
        'In summary, international arbitration is a preferred method of dispute resolution for international commercial agreements. It offers the parties more flexibility, efficiency, and confidentiality than traditional litigation, and ensures that the dispute is resolved by an expert in the relevant field. International arbitration is conducted under a variety of rules, and provides an enforceable award under international law.',
    },
    {
      img: './assets/mergers_n_acquisition.jpeg',
      data: 'Mergers and acquisitions (M&A) are complex transactions that involve the combination of two or more companies to form a new company or the acquisition of one company by another. M&A transactions can be beneficial for the companies involved, as it can lead to increased market share, expanded product lines, and improved access to resources and capabilities.\n\nM&A transactions involve a range of legal and financial issues that require careful consideration and planning. Companies typically engage in M&A transactions with the assistance of experienced legal and financial advisors to ensure that the transaction is structured in a way that maximizes value and minimizes risk.',
      titleOne: 'The Process of an M&A Transaction',
      descOne:
        "In an M&A transaction, the parties must first negotiate and agree on the terms of the transaction, including the purchase price, the structure of the transaction, and any contingencies or conditions. The parties must then conduct due diligence, which involves a comprehensive review of the other party's financial and legal records to identify any potential liabilities or risks. Once due diligence is completed and all contingencies or conditions have been satisfied, the parties can proceed with the closing of the transaction. The closing involves the exchange of consideration, such as cash, stock, or a combination of both, and the transfer of ownership of the acquired company to the buyer.",
      titleTwo: 'Regulatory Considerations in M&A Transactions',
      descTwo:
        'M&A transactions can also involve regulatory approval, particularly in industries that are subject to government oversight. Companies must comply with anti-trust laws and other regulations to ensure that the transaction is not anti-competitive and does not violate any laws or regulations.',
      extraOfferings:
        'The legal and financial issues involved in M&A transactions can be complex and require the expertise of experienced advisors. Companies must carefully consider the risks and benefits of an M&A transaction before proceeding, and should work closely with their advisors to ensure that the transaction is structured in a way that maximizes value and minimizes risk.',
      endingPar:
        'In summary, M&A transactions are complex transactions that involve the combination of two or more companies or the acquisition of one company by another. The legal and financial issues involved in M&A transactions can be complex, and require the expertise of experienced advisors. Companies must carefully consider the risks and benefits of an M&A transaction before proceeding, and work closely with their advisors to ensure that the transaction is structured in a way that maximizes value and minimizes risk.',
    },
    {
      img: './assets/family_law.png',
      data: 'Family law cases can be emotionally charged and complex. A skilled family law attorney can help guide you through the process to ensure your rights and interests are protected. A family law attorney can provide valuable legal advice and representation in a variety of areas such as divorce, child custody, child support, spousal support, property division, and more. They can assist with negotiating settlements, drafting legal agreements, and representing you in court if necessary. A family law attorney is dedicated to helping families navigate the legal system and achieve the best possible outcomes for their unique situations.',
      extraOfferings:
        'A family law attorney provides legal guidance and representation in a range of areas such as divorce, child custody, and property division. They are dedicated to helping families navigate the legal system and achieve the best possible outcomes for their unique situations.',
    },
    {
      img: './assets/criminal_law_background.jpeg',
      data: 'When accused of a criminal charge, you need the peace of mind that only a skilled lawyer can provide. As we understand that facing the possible ramifications of a criminal conviction can be quite disturbing. Since criminal charges present the risk of stiff legal penalties. In addition to the possibility of a criminal record that can follow you for the rest of your life. Going unrepresented should not be an option. as the stakes are too high. At Emad Helmy Said  Law firm we have the elites of criminal defense lawyers and the international defense lawyers get your advice and contact us promptly.\n\n Moreover, without the proper advice, you could unknowingly talk yourself into being charged, arrested and/or convicted. \n\n If you or you loved ones are being investigated or may be under investigation for a crime that allegedly took place in Egypt. All you need is to contact us, and we will carry on all aspects of your case in the most professional and experienced manner.Our team consists of well-qualified trial lawyers who focus their practices on criminal defense work. Equipped with their exquisite legal drafting and pleading skills, research and investigation skills, creative and analytical Skills, Legal knowledge, and practical experiences.\n\n We provide a variety of services, from investigating the case and interviewing witnesses. To research case law, laws, crime codes, and procedural law. in addition to Building a defense and developing case strategy. As well as negotiating with the prosecution to challenge the deal on lower charges.',
      titleOne:
        'In addition to the exemplary legal representation before all Egyptian criminal courts:',
      listOne: ['District Courts', 'Misdemeanors and Appeal Courts'],
      listTwo: ['Criminal courts', 'Court of Cassation'],
      extraOfferings:
        'Emad Helmy Said Law firm’s experienced team of criminal defense lawyers will provide you with the strong legal defense that you need. Our team believes that there are many things an experienced and skillful attorney can do to resolve a criminal case before it results in charges and/or a trial, either of which could have a devastating effect on your life. However, if you have already been charged, our Attorney in Emad Helmy Said Law Firm provides the best representation you can obtain in Egypt.',
    },
  ];

  setClicked(service: string, clickedIndex: number) {
    this.clicked = service;
    this.clickedIndex = clickedIndex;
  }

  setPlusIcon() {
    this.plusClicked = !this.plusClicked;
  }
}
