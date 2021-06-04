import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";

@Module({
    controllers: [AppController],
    providers: [AppController]
})

export class AppModule {}
