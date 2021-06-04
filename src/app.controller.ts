import {Controller, Get} from "@nestjs/common";

// Маршрут, по которому будут отрабатывать запросы
@Controller('/api')
export class AppController {

    @Get()
    getUser() {
        return "GET ALL USERS"
    }

}
