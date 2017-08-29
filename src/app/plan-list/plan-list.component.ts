import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';
import { Plan } from '../bean/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  /*plans = [
    {
      name: '豆子',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      name: '倪妮',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    },
    {
      name: '包子',
      date: '2017-8-8',
      totalTime: 1,
      comment: '学习到天亮'
    }
  ];*/
  plans: Plan[];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.plans = this.planService.getPlans();
  }
  // 删除计划
  deletePlan (plan) {
    this.planService.deletePlan(plan.id);
    this.plans = this.planService.getPlans();
  }

}
