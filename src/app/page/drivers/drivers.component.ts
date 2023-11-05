import { Component } from '@angular/core';
import { Base } from '../../base';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent extends Base{

  constructor(baseService:BaseService, configService:ConfigService)
  {
    super(baseService, configService,"drivers");
  }

}
