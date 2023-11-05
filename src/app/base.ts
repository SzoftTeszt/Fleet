import { Subscription } from "rxjs";
import { BaseService } from './service/base.service';
import { ConfigService } from "./service/config.service";

export class Base {
    adatok:any;
    oszlopok:any;
    feliratkozas: Subscription;

    constructor(public bs: BaseService,
        public cs:ConfigService, public mit:string)
    {
        this.feliratkozas=
        this.bs.getAdatok(mit).subscribe(
            (list:any[])=>{this.adatok=list}
        )
        this.oszlopok=cs.getOszlopok(mit);
    }

    onDelete(sor:any)
    {
        this.bs.delete(sor, this.mit);
    }

    onCreate(sor:any)
    {
        this.bs.create(sor, this.mit);
    }
    onUpdate(sor:any)
    {
        this.bs.update(sor, this.mit);
    }



}
