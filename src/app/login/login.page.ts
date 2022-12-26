import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route,Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { UserOptions } from '../interfaces/user-options';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private route: Router,
    private breakpointObserver : BreakpointObserver
    // public userData: UserData,

  ) {}
  @ViewChild("apresentation", { read: ElementRef, static: true }) apresentation: ElementRef | undefined
  @ViewChild("initial", { read: ElementRef, static: true }) initial: ElementRef | undefined

  login: UserOptions = { username: '', password: '' };
  submitted = false;
  breaks:any;
  isSplashScreen : boolean = false;
  anApresentation!: Animation;
  anInital?: Animation;

  ngAfterViewInit() {
    this.animateButton()
  }

  public animateButton() {
    this.anApresentation = this.animationCtrl
      .create()
      .addElement(this.apresentation?.nativeElement)
      .delay(3000)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: "100" },
        { offset: 1, opacity: "0" }
      ]);


    var result : Promise<void> =   this.anApresentation.play();
    // result.then(ok =>  this.isSplashScreen = true )




    this.anInital = this.animationCtrl
    .create()
    .addElement(this.initial?.nativeElement)
    .delay(3500)
    .duration(1000)
    .iterations(1)
    .keyframes(this.getLayoutAnimationLogin())



    this.anInital.play()
  }

  getLayoutAnimationLogin(){
    if(this.breaks[Breakpoints.HandsetPortrait]){
      return [
        { offset: 0, opacity: "0" ,transform: 'translateY(-90%)'},
        { offset: 1, opacity: "100", transform: 'translateY(-130%)' }
      ]
    }
    if(this.breaks[Breakpoints.HandsetLandscape]){
      return [
        { offset: 0, opacity: "0" ,transform: 'translateY(-350%)'},
        { offset: 1, opacity: "100", transform: 'translateY(-360%)' }
      ]
    }
    return []
  }
  ngOnInit() {
    this.breakpointObserver
    .observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
    ])
    .subscribe((state) => {
      this.breaks = state.breakpoints;
      if(this.breaks[Breakpoints.HandsetLandscape]){
        this.anApresentation?.play();
        this.anInital = this.animationCtrl
        .create()
        .addElement(this.initial?.nativeElement)
        .delay(3500)
        .duration(1000)
        .iterations(1)
        .keyframes(this.getLayoutAnimationLogin())
        this.anInital?.play();

      }

      if(this.breaks[Breakpoints.HandsetPortrait]){
        this.anApresentation?.play();
        this.anInital = this.animationCtrl
        .create()
        .addElement(this.initial?.nativeElement)
        .delay(3500)
        .duration(1000)
        .iterations(1)
        .keyframes(this.getLayoutAnimationLogin())
        this.anInital?.play();
      }

      if(this.breaks[Breakpoints.TabletLandscape]){
        console.log("Tablet paisagem");

    }

    if(this.breaks[Breakpoints.TabletPortrait]){
      console.log("Tablet Retrato");
    }

    });
  }



  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.userData.login(this.login.username);
      this.route.navigateByUrl('/main');
    }
  }

  onSignup() {
    this.route.navigateByUrl('/signup');
  }



}
