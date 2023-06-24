import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent {
  firstBtnVal = 'Contact us';

  emadHelmyData = {
    name: 'Emad Helmy',
    job_title: 'Founder',
    linkedInURL: 'www.linkedin.com',
    img_with_bg: '../assets/emadHelmyCropped.jpg',
    img_without_bg: '',
  };

  teamData = [
    // {"name": "", "job_title": "Senior Associate", "linkedInURL": "www.linkedin.com", "img_with_bg":"../assets/empOneBG.jpg", "img_without_bg":""},
    {
      name: 'Bishoy E. Shenouda',
      job_title: 'Senior Manager',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empEightBG.jpg',
      img_without_bg: '',
      desc: [
        'Bishoy E. Shenouda is a highly experienced and skilled lawyer with over 15 years of experience in the industry. He is known for his exceptional legal expertise and his client-focused approach. Bishoy has a broad range of legal expertise and has worked on numerous complex cases in various areas of law, including civil litigation, personal injury, and commercial law.',
        'Bishoy is a dedicated professional who is committed to his clients and strives to provide the best possible outcome for each case he takes on. He has a reputation for being a skilled negotiator and is known for his ability to reach favorable settlements for his clients.',
        'Overall, Bishoy E. Shenouda is a talented and accomplished lawyer who is highly respected in his field. With his wealth of experience and commitment to his clients, he is a valuable asset to any legal team.'
      ]
    },
    {
      name: 'Tamer Azer',
      job_title: 'Senior Manager',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empNineBG.jpg',
      img_without_bg: '',
      desc: [
        'Tamer Azer is an innovative and forward-thinking lawyer with a passion for creative problem-solving. With over 15 years of experience, Tamer has established himself as a leading legal expert in various areas of law including, intellectual property, corporate law, and employment law.',
        'Known for his strategic thinking and attention to detail, Tamer has a proven track record of success in representing a diverse range of clients, from startups and small businesses to large corporations. He is known for his ability to anticipate legal issues and develop effective strategies to minimize risk and maximize outcomes.',
        'Tamer is a dynamic and engaging speaker, frequently invited to speak at legal conferences and events. He is also an active member of his community, volunteering his time and resources to various causes. Tamer is committed to making a positive impact on the world and using his legal skills to help others.',
        'Overall, Tamer Azer is a highly skilled and respected legal professional who brings creativity and innovation to every case he takes on. His dedication to his clients, community, and the legal profession makes him a valuable asset to any legal team.'
      ],
    },
    {
      name: 'Wael Mikhail',
      job_title: 'Senior Lawyer',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empThreeBG.jpg',
      img_without_bg: '',
      desc: [
        'Wael Mikhail is a dynamic and driven lawyer with over 12 years of experience in the legal industry. He is a specialist in various areas of law, including commercial litigation, corporate law, and intellectual property law.',
        'Wael is known for his sharp analytical skills and his ability to navigate complex legal issues with ease. He is a strategic thinker who is always thinking two steps ahead and anticipates potential legal risks. Wael is committed to providing his clients with the best possible outcome and prides himself on his attention to detail and his client-focused approach.',
        'In addition to his legal work, Wael is also an accomplished writer and speaker on legal issues. He is frequently invited to speak at legal conferences and events and has published numerous articles on various legal topics.',
        'Wael is deeply committed to his community and is actively involved in various charitable organizations. He believes in using his legal skills to make a positive impact on the world and is dedicated to improving the lives of others.',
        'In conclusion, Wael Mikhail is an exceptional lawyer who combines his legal expertise with his passion for making a positive impact on the world. His dedication to his clients, community, and the legal profession make him a valuable asset to any legal team.'
      ],
    },
    {
      name: 'Wagih shaker',
      job_title: 'Senior',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empSevenBG.jpg',
      img_without_bg: '',
      desc: [
        'Wagih Shaker is a dynamic and charismatic lawyer whose passion for the law is contagious. With over 10 years of legal experience, Wagih is a seasoned legal expert in various areas of law, including corporate law, commercial litigation, and real estate law.',
        'Wagih is known for his creative thinking and his ability to approach legal issues from a unique perspective. He has a talent for finding effective solutions to complex legal problems and is always willing to go the extra mile for his clients.',
        'In addition to his legal work, Wagih is also an accomplished artist and musician. He believes that creativity is an essential part of the legal profession and uses his artistic skills to enhance his legal work. He is an active member of his community and is passionate about using his talents to make a positive impact on the world.',
        'Wagih is a gifted speaker and has a talent for engaging audiences with his wit and charm. He is frequently invited to speak at legal conferences and events and is always a crowd favorite.',
        'In conclusion, Wagih Shaker is not your average lawyer. His unique blend of legal expertise and artistic talent make him a valuable asset to any legal team. His passion for creativity and his dedication to his clients and community make him a true Renaissance man of the legal profession.'
      ],
    },
    {
      name: 'Nora Nagdi',
      job_title: 'Associate',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empFiveBG.jpg',
      img_without_bg: '',
      desc: [
        'Nora Nagdi is an accomplished and highly skilled lawyer with a passion for justice and equality. She has over 8 years of experience in the legal industry, specializing in family law, immigration law, and human rights law.',
        'Nora is known for her compassionate approach and her ability to connect with clients on a personal level. She understands the emotional impact that legal issues can have on individuals and families, and she is dedicated to providing her clients with the support and guidance they need during difficult times.',
        'Nora is deeply committed to social justice and human rights, and she has worked on numerous cases involving discrimination and injustice. She is a fierce advocate for her clients and is not afraid to take on powerful adversaries.',
        'In addition to her legal work, Nora is also actively involved in her community and volunteers her time and resources to various charitable organizations. She is a strong believer in the power of community and believes that every individual has the potential to make a positive impact on the world.',
        'Overall, Nora Nagdi is an exceptional lawyer who brings passion, commitment, and expertise to every case she takes on. Her dedication to justice and equality makes her a valuable asset to any legal team.'
      ],
    },
    {
      name: 'Mohamed El Sayed',
      job_title: 'Associate',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empSixBG.jpg',
      img_without_bg: '',
      desc: [
        'Mohamed El Sayed is a highly experienced and respected lawyer with over 15 years of experience in the legal industry. He is a specialist in various areas of law, including corporate law, commercial litigation, and intellectual property law.',
        'Mohamed is known for his exceptional legal expertise and his ability to approach legal issues with a creative and strategic mindset. He has a talent for finding effective solutions to complex legal problems and is always willing to go the extra mile for his clients.',
        'Mohamed is deeply committed to his clients and community and is known for his strong work ethic and professionalism. He is a trusted advisor to his clients and is dedicated to providing them with the best possible outcome in their legal matters.',
        'In addition to his legal work, Mohamed is also an active member of his community and is passionate about giving back. He volunteers his time and resources to various charitable organizations and is dedicated to making a positive impact on the lives of others.',
        'Overall, Mohamed El Sayed is an exceptional lawyer who combines his wealth of legal expertise with his dedication to his clients and community. His commitment to excellence and his passion for justice make him a valuable asset to any legal team.'
      ],
    },
    {
      name: 'Amir Shaker',
      job_title: 'Office Manager',
      linkedInURL: 'www.linkedin.com',
      img_with_bg: '../assets/empTwoBG.jpg',
      img_without_bg: '',
      desc: [
        'Amir Shaker is a dedicated and skilled office manager with a passion for efficiency and organization. With over 10 years of experience in office management, Amir brings a wealth of knowledge and expertise to his role.',
        'Amir is known for his attention to detail and his ability to manage multiple tasks and priorities with ease. He is a natural problem-solver and is always looking for ways to streamline processes and improve efficiency.',
        'In addition to his organizational skills, Amir is also a great communicator and team player. He works closely with his colleagues to ensure that the office runs smoothly and that everyone has the resources they need to do their jobs effectively.',
        'Amir is committed to creating a positive and productive work environment and is always looking for ways to support his colleagues and improve morale. He is a valuable asset to any organization and is dedicated to helping his team succeed.',
        'Overall, Amir Shaker is an exceptional office manager with a wealth of experience and a passion for excellence. His dedication to organization, communication, and teamwork make him an invaluable member of any organization.'
      ],
    },
  ];
}
