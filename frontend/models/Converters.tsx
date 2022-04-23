import { JsonConvert, JsonConverter, JsonCustomConvert } from "json2typescript";
import { Employer, JobSeeker, UserDto } from "./user/Users";


@JsonConverter
export class UserConverter implements JsonCustomConvert<UserDto> {

    serialize(device: UserDto): any {
        const jsonConvert: JsonConvert = new JsonConvert();
        return jsonConvert.serialize(device);
    }

    deserialize(user: any): UserDto {
        const jsonConvert: JsonConvert = new JsonConvert();
        
        let userDto: UserDto = new UserDto();
        if(user['usertype'] == 'C') {
            userDto = jsonConvert.deserialize(user, JobSeeker);
        } else if(user['usertype'] == 'E') {
            userDto = jsonConvert.deserialize(user, Employer);
        }
        return userDto;
    }

}