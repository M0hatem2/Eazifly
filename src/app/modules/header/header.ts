import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { BtnStart } from "../../shared/btn-start/btn-start";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [  BtnStart, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
