
export async function processSignIn(signInData) {
    if (isValidSignInData(signInData)) {
        return await signIn(signInData)
    }
    else if (!isValidEmail(signInData.email)){
        return "Формат почты неверен"
    }
    else{
        return "Неверный формат пароля"
    }
}

function isValidSignInData(signInData) {
    return isValidEmail(signInData.email) && isValidPassword(signInData.password)
}

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password){
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    return password!=='' && hasLowerCase && hasUpperCase && password.length>=6
}
