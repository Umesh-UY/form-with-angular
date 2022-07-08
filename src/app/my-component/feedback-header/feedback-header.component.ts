import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-header',
  templateUrl: './feedback-header.component.html',
  styleUrls: ['./feedback-header.component.css']
})
export class FeedbackHeaderComponent implements OnInit {

  constructor() {
    var displaymsg = false;
  }

  ngOnInit(): void {
  }

  onclick(){
    console.log("clicked");
    const option = document.querySelector(".option-msg");
    const optionstyle = document.querySelector("#box")?.classList.value;
    if(optionstyle ==  "option-msg hide-msg"){
      document.querySelector(".option-msg")?.classList.add("show-msg");
      document.querySelector(".option-msg")?.classList.remove("hide-msg");
    }else{
      document.querySelector(".option-msg")?.classList.remove("show-msg");
      document.querySelector(".option-msg")?.classList.add("hide-msg");
    }
  }
}
