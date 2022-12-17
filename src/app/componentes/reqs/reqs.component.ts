import { Component, OnInit } from '@angular/core';
import { Reqs } from './Reqs';
import { ReqsService } from './reqs.service';

@Component({
  selector: 'app-reqs',
  templateUrl: './reqs.component.html',
  styleUrls: ['./reqs.component.css']
})
export class ReqsComponent implements OnInit {

  reqs: Reqs[] | undefined;

  constructor(private req : ReqsService) { }

  ngOnInit(): void {

      this.req.getReqs().subscribe(
        reqs => this.reqs = reqs
      )
  
  }

}
