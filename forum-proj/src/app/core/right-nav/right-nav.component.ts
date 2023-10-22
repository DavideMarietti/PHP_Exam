import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Controller, Utente} from "../../variable-type";

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent {
  @Input() control: Controller;
  @Output() control_ = new EventEmitter<Controller>();
  @Output() searchword_ = new EventEmitter<string>();

  newsArray: any[] = [];
  search: string = "";

  constructor() {
    this.newsArray = [{
      title: 'Global OpenStack Cloud Management Market Report 20…o Reach $10.3 Billion by 2028 at a CAGR of 23.52%',
      url: 'https://www.prnewswire.com/news-releases/global-op…billion-by-2028-at-a-cagr-of-23-52-301787216.html',
      time_published: '04/04/2023',
      authors: "James Rogers",
      summary: 'Global OpenStack Cloud Management Market Report 2023: Sector...'
    },
      {
        title: 'Higher Education Market to grow at a CAGR of 14.49… educational content delivery methods - Technavio',
        url: "https://www.prnewswire.com/news-releases/higher-ed…ntent-delivery-methods---technavio-301784592.html",
        time_published: '04/04/2023',
        authors: "Justin Pope",
        summary: "Higher Education Market to grow at a CAGR of 14.49% from 2022 to..."
      },
      {
        title: '9 Best Index Funds for Long-Term Investors',
        url: "https://www.fool.com/investing/how-to-invest/index-funds/best-index-funds/",
        time_published: "04/04/2023",
        authors: "Zack Investments",
        summary: "Here are the nine best index funds to add to your portfolio for steady, low-cost growth."
      },
      {
        title: '3 Robotics Dividend Stocks Driving the Industrial Internet of Things',
        url: 'https://www.fool.com/investing/2023/03/30/3-robotics-stocks-driving-the-industrial-internet/',
        time_published: '04/04/2023',
        authors: "Technavio",
        summary: 'These stocks offer nice blends of income and value.'
      }
    ]
  }

  insertnewTD() {
    this.control.newthread = !this.control.newthread;
  }

  sendword() {
    this.searchword_.emit(this.search);
  }
}
