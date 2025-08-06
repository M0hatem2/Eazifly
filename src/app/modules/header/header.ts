import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { BtnStart } from "../../shared/btn-start/btn-start";

@Component({
  selector: 'app-header',
  imports: [Navbar, BtnStart],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
