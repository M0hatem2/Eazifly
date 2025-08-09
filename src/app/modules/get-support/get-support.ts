import { Component } from '@angular/core';
import { BtnStart } from "../../shared/btn-start/btn-start";
import { Packages } from "../packages/packages";

@Component({
  selector: 'app-get-support',
  imports: [BtnStart, Packages],
  templateUrl: './get-support.html',
  styleUrl: './get-support.scss'
})
export class GetSupport {

}
