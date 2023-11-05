import { Component } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';
import { Base } from '../../base';

@Component({
  selector: 'app-fuelings',
  templateUrl: './fuelings.component.html',
  styleUrls: ['./fuelings.component.css']
})
export class FuelingsComponent extends Base{
  constructor(baseService:BaseService, configService:ConfigService)
  {
    super(baseService, configService,"fuelings");
  }
}
