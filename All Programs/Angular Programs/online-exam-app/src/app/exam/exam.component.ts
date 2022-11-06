import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { ExamService } from '../exam.service';
import { Questions } from '../questions';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questions:Array<Questions>=[];
  answers:Array<Answers>=[];
  myAns=new Map();
  constructor(public ex:ExamService) { }  // DI for Exam Service 
 
  ngOnInit(): void {
    
    this.ex.loadAllQuestions().subscribe({
      next:(data:any)=>this.questions=data.questions,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("questions loaded...")
    });

    this.ex.loadAllAswers().subscribe({
      next:(data:any)=>this.answers=data.answers,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("answers loaded...")
    });

  }
  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = false;
  msg:string =""
  ans(qid:any,ans:any){
    //console.log(qid+" "+ans);
    this.myAns.set(qid,ans);
    //console.log(this.myAns);
  }

  submitExam() {
    let count =0;
    this.answers.forEach((value:any,index:any)=> {
          this.myAns.forEach((v:any,k:any)=> {
                  if(k==value.qid && v==value.ans){
                      count++;
                  }
          });
    })
    //console.log(count);
    this.msg="You score "+count+" marks";
    this.f1 = false;
    this.f2 = true;
  }
  retakeExam() {
    this.f1=true;
    this.f2=false;
  }
  reviewExam() {
    this.f1=false;
    this.f2 =false;
    this.f3=true;
  }
}
