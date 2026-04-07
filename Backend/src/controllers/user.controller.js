import {asyncHandler} from '../utils/asyncHandler.js';

const registerUser = asyncHandler( async (req, res) =>{
    
    const {name, email, username, password} = req.body;
    if(!name || !email || !username || !password){
        apiError(400, "please provide all the details")
    }

})

export {registerUser}