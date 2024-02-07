class LoginService {

    static async loginUser(LoginUserDTO) {
        try {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify(LoginUserDTO.getData());
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const response = await fetch(`/${LoginUserDTO.lang}/api/login`, requestOptions);
            const responseData = await response.json();
            if (responseData?.error) {
                return Promise.reject(responseData.error.message);
            }
            if (responseData?.result.user_exists) {
                localStorage.setItem("user_id", responseData.result.user_exists);
                localStorage.setItem("just_login", "true");
            }
            return Promise.resolve(responseData);
        } catch (error) {
            console.error('Error', error);
            return Promise.reject(error);
        }
    }
}
class LoginUserDTO {
    brand;
    email;
    password;
    _token;
    social;
    lang;
    dispatcher;

    constructor(data) {
        this.brand = data.brand;
        this.email = data.email;
        this.password = data.password;
        this._token = data._token;
        this.social = data.social;
        this.lang = data.lang;
        this.dispatcher = data.dispatcher;
    }

    getData() {
        return {
            'email': this.email,
            'password': this.password,
            'brand': this.brand,
            '_token': this._token,
            'social': this.social,
            'lang': this.lang,
            'dispatcher': this.dispatcher,
        }
    }
}