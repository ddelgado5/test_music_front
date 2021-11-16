import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/api.service';
import { PlayListProvider } from 'src/core/playlist.provider';
import { IUser } from 'src/models/IUser.model';
import { PlayList, Song } from 'src/models/Song.model';

@Component({
  selector: 'login-root',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      password: ['', Validators.required]
    });
  }

  singIn(user: IUser) {
    this.apiService.login(user)
      .subscribe(res => {
        console.log('res: Aqui debe estar el token', res);
      },
      err => {
        console.log("Si pasa algun Error", err)
      })
      // quitarla de qui y ponerla en el susbcribe 
      this.router.navigate(['lista'])
  }

  resetData() {
    // Reset forms
    this.form.reset
  }

}