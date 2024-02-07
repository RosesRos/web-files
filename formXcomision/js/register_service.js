class RegisterService {
    static async register(RegisterUserDTO) {
       try {
            const fetchVariable = await fetch(`/${RegisterUserDTO.lang}/api/register${RegisterUserDTO.affidSRC}`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(RegisterUserDTO.getData())
            });

            const response = await fetchVariable.json();
            const {success, user_message} = response;

            if(success) {
                return Promise.resolve(response);
            }

            return Promise.reject(user_message);
        } catch (error) {
            console.error('Error', error);
            return Promise.reject(error);
        }
    }
}

class RegisterUserDTO{
    username;
    email;
    password;
    isShortForm;
    firstName;
    lastName;
    country;
    phone;
    birthday;
    city;
    address;
    zip;
    currency;
    brand;
    landing;
    _token;
    affidSRC;
    lang;

    constructor(data) {
        this.lang = data.lang;
        this.affidSRC = data.affidSRC;
        this.email = data.email;
        this.password = data.password;
        this.isShortForm = data.isShortForm;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.country = data.country;
        this.phone = data.phone;
        this.birthday = data.birthday;
        this.city = data.city;
        this.address = data.address;
        this.zip = data.zip;
        this.currency = data.currency;
        this.brand = data.brand;
        this.landing = data.landing;
        this._token = data._token;
    }

    getData() {
        return {
            'first_name': this.firstName,
            'last_name': this.lastName,
            'country': this.country,
            'phone': this.phone,
            'email': this.email,
            'birthday': this.isShortForm ? '' : this.birthday,
            'city': this.isShortForm ? '' : this.city,
            'address': this.isShortForm ? '' : this.address,
            'zip': this.isShortForm ? '' : this.zip,
            'currency': this.currency,
            'password': this.password,
            'short_form': !!this.isShortForm,
            'brand': this.brand,
            'landing': this.landing,
            '_token': this._token,
        }
    }
}