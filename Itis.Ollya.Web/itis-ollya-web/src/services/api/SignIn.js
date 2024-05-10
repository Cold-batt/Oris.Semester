import {authToken, userIdItem, userNameItem} from "../../constants/LocalStorage.js";
import {userClient} from "../../constants/AxiosClients.js";

export async function signIn(signInData) {
    localStorage.removeItem(authToken);
    localStorage.removeItem(userNameItem);
    localStorage.removeItem(userIdItem);
    let errorText = "";
    await userClient
        .post("signIn", signInData)
        .then((result) => {
            let token = result.data.jwtToken;
            localStorage.setItem(authToken, token);
            localStorage.setItem(userIdItem, result.data.userId);
            localStorage.setItem(userNameItem, result.data.firstName);
            console.log(result);
            return ""
        })
        .catch((error) => {
            errorText = error.response?.data?.title !== undefined
                ? error.response.data.title
                : "Не удалось получить ответ от сервера"
        });

    console.log(errorText)
    return errorText
}
