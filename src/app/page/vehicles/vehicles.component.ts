import { Component } from '@angular/core';
import { Base } from '../../base';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent extends Base{
  constructor(baseService:BaseService, configService:ConfigService)
  {
    super(baseService, configService,"vehicles");
  }
}
