import axios from "axios";
import HTTP from "../GeneralService";

class SignUpService extends HTTP{
    constructor(){super();}
    async signUp(username, password, nickname, email){
        try{
            const response = await axios.post(this.END_POINT + "signup", {
                username: username,
                password: password,
                nickname: nickname,
                profile_image: 'https://i.pinimg.com/1200x/d2/28/71/d22871b6c9e94e1d973663bbe1d0b276.jpg',
                email: email
            });
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
}

export default new SignUpService();