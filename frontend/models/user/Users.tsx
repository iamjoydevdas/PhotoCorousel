import { JsonObject, JsonProperty } from "json2typescript";
import { UserConverter } from "../Converters";


@JsonObject("User")
export class User {
    @JsonProperty("jwt")
    jwt: string = undefined;
    @JsonProperty("user", UserConverter)
    user: UserDto = undefined;
}

@JsonObject("UserDto")
export class UserDto {

}

@JsonObject("JobSeeker")
export class JobSeeker extends UserDto{
    @JsonProperty("id")
    id: string = undefined;
    @JsonProperty("email")
    email: string = undefined;
    @JsonProperty("username")
    username: string = undefined;
    @JsonProperty("usertype")
    usertype: string = undefined;
}

@JsonObject("Employer")
export class Employer extends UserDto{
    @JsonProperty("orgId")
    orgId: string = undefined;
    @JsonProperty("usertype")
    usertype: string = undefined;
    /* @JsonProperty("email")
    email: string = undefined;
    @JsonProperty("username")
    username: string = undefined;
    @JsonProperty("usertype")
    usertype: string = undefined; */
}

