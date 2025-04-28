import { HttpClient } from '@angular/common/http';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
