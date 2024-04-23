import axios from "axios"

const login = function(user){
    return axios.post('/api/login', 
        user
      );
};

export default login;