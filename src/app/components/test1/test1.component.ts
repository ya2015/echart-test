import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this, {single})
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

export const single = [
  {
    'name': 'Germany',
    'value': 8940000
  },
  {
    'name': 'USA',
    'value': 5000000
  },
  {
    'name': 'France',
    'value': 7200000
  }
];

export const multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

