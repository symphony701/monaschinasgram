class User{
    constructor(id,nickname,profile_image){
        this.id = id;
        this.nickname = nickname;
        this.profile_image = profile_image;
    }

    toObject(){
        return {
            id: this.id,
            nickname: this.nickname,
            profile_image: this.profile_image
        }
    }
}
export default User;