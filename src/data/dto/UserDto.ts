export class UserDto {
    constructor(
        public id?: number,
        public userName?: string,
        public email?: string
    ){}

    static fromJson(json: any): UserDto {
        return new UserDto(json.id, json.userName, json.email)
    }
}