import axios from "axios";
import HTTP from "../GeneralService";

class SignInService extends HTTP{
    constructor(){super();}
    async signIn(user,password){
        
            const response = await axios.get(this.END_POINT + "signin/" + user + "/" + password);
            return response.data;
        
    }
}

export default new SignInService();