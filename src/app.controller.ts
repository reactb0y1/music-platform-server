import {Controller, Get} from "@nestjs/common";
import {AppService} from "./app.service";

// Маршрут, по которому будут отрабатывать запросы
@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {}

    @Get()
    getUsers() {
        return this.appService.getUsers()
    }

}
