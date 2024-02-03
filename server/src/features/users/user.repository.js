import UserModel from "./user.model.js"



export const registerRepository = async (user) => {
    try {
        console.log("repouser", user)
        const result = new UserModel(user);
        const resSave = await result.save();
        return resSave;
    } catch (error) {
        console.log("error in register repoisotry: ", error.message);
    }
}

export const checkEmailExist = async (email) => {
    const emailExist = await UserModel.findOne({ email });
    return emailExist;
}
