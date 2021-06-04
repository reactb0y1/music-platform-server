import {Injectable} from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Track, TrackDocument} from "./schemas/track.schema";
import {Model} from "mongoose";
import {CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    // Для создания трека
    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0});
        return track
    }

    // Получить все треки из БД
    async getAll() {

    }

    // Получить один трек
    async getOne() {

    }

    // Удалить трек
    async delete() {

    }

}
