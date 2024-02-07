const SITE_ROOT = location.origin + '/';
const affidSRC = location.search;
const html = document.querySelector('html');
const lang = html.getAttribute('lang');

const notMainPage = () =>{
    return (window.location.pathname).includes('terms') || (window.location.pathname).includes('cookies') || (window.location.pathname).includes('privacy');
}
let clearFormIndicator = false;

class URLControllerTemplate {
    BASIC_SEARCH_PARAMS = document.location.search;
    searchParams = new URLSearchParams(this.BASIC_SEARCH_PARAMS);

    getAllParametersFromUrlWithSpecialParam = (specialParam) => {
        if(!!this.isExistSpecialParamInUrl(specialParam)) {
            return this.searchParams.toString();
        }

        if(!!this.searchParams.size) {
            return `${this.searchParams.toString()}&${this.addSpecialParam(specialParam)}`;
        }

        return `${this.addSpecialParam(specialParam)}`;
    }

    isExistSpecialParamInUrl = (specialParam) => {
        const isSpecialParam = this.searchParams.get(specialParam);
        if(!!isSpecialParam) return isSpecialParam;
        
        return false;
    }

    addSpecialParam = (specialParam) => {
        return `${specialParam}=${document.location.host}`;
    }
}

class LoaderController {
    loader = document.querySelector('.loader');

    showLoader = () =>{
        this.loader.classList.remove('hidden');
    }
    hideLoader = () =>{
        this.loader.classList.add('hidden');
    }
}

const URLController = new URLControllerTemplate();
const loaderController = new LoaderController();

class Handlers{
    constructor() {
        this.buttonJoin = document.querySelector('.header-nav__button--join-now');
        this.popupRegistration = document.querySelector('.popup-registration');
        this.overlay = document.getElementById('overlay');
        this.closeButtonRegistration = this.popupRegistration.querySelector('.popup-registration__close');
        this.popupLogin = document.getElementById('popup-login');
        this.popupLoginBtnClose = this.popupLogin.querySelector('.popup-login__close');
        this.popupLoginRegLink = this.popupLogin.querySelector('.login-reg-link');
        this.loginBtn = document.querySelector('.header-nav__button--login');
        this.regLinkLogin = document.querySelector('.reg__link-login');
        this.form = document.getElementById('form');
        this.galleryContainersInputs = this.form.querySelectorAll('.field');
        this.buttonPlayNow = document.querySelector('.main-slide-tagline__link');
        this.gamesCollections = document.querySelectorAll('.main-best-games-image__box');
        this.btnShowAll = document.querySelector('.main-best-games__link');
        this.$inputs = document.querySelectorAll('input');
        this.$languageSelect = document.querySelector('#language');
    }
    init = () => {
        this.popupLoginRegLink.addEventListener('click', this.popupRegistrationToggle);
        this.closeButtonRegistration.addEventListener('click', this.popupRegistrationToggle);
        this.buttonJoin.addEventListener('click', this.popupRegistrationToggle);
        this.loginBtn.addEventListener('click', this.popupLoginToggle);
        this.regLinkLogin.addEventListener('click', this.popupLoginToggle);
        this.popupLoginBtnClose.addEventListener('click', this.hiddenPopupLogin);
        this.overlay.addEventListener('click', this.hiddenPopups);
        this.$inputs.forEach((input) => {
            input.addEventListener("focus", (event) => this.changeNameInput(event.target))
        })
        if(!notMainPage()){
            this.buttonPlayNow.addEventListener('click', this.popupRegistrationToggle);
            this.gamesCollections.forEach((item) => {
                item.addEventListener('click', this.popupRegistrationToggle);
            })
            this.btnShowAll.addEventListener('click', this.popupRegistrationToggle);
        }
        this.$languageSelect.addEventListener("touchstart",(e)=>{
            e.target.click();
            this.hoverToggle();
        });
        this.$languageSelect.addEventListener("mouseover", () => {
            this.addHoverClass();
            document.addEventListener('scroll', this.removeHoverClass);
        });
        this.$languageSelect.addEventListener("mouseout", () => {
            this.removeHoverClass()
            document.removeEventListener('scroll', this.removeHoverClass)
        });

    }

    getBrand = () => {
        return document.querySelector('meta[name="brand"]').content;
    }
    showPopupLogin = () =>{
        this.popupLogin.classList.add('active');
        this.overlay.classList.add('active');
        this.addNoScrollClass();
    }
    showPopupRegistration = () =>{
        this.popupRegistration.classList.add('active');
        this.overlay.classList.add('active');
        this.addNoScrollClass();
    }
    hiddenPopupLogin = () =>{
        this.popupLogin.classList.remove('active');
        this.overlay.classList.remove('active');
        this.removeNoScrollClass()
    }
    hiddenPopupRegistration = () =>{
        this.popupRegistration.classList.remove('active');
        this.overlay.classList.remove('active');
        this.removeNoScrollClass()
        if(clearFormIndicator){
            this.galleryContainersInputs.forEach((element) => {
                element.classList.remove('field--correct');
                element.classList.remove('field--error');
            })
            clearFormIndicator = false;
        }
    }
    showPopupBlocked = () => {
        const popupBlocked = document.querySelector('.popup-blocked');
        popupBlocked.classList.add('active');
        this.overlay.classList.add('active');
        this.addNoScrollClass();
    }
    hiddenPopupBlocked = () => {
        const popupBlocked = document.querySelector('.popup-blocked');
        if(popupBlocked){
            popupBlocked.classList.remove('active');
        }
        this.overlay.classList.remove('active');
        this.removeNoScrollClass();
    }

    showCommonPopup = ( className ) => {
        const commonPopup = document.querySelector(`.popup-common${className}`);
        commonPopup.classList.add('active');
        this.overlay.classList.add('active');
        this.addNoScrollClass();
    }

    hideCommonPopup = () => {
        const commonPopup = document.querySelector('.popup-common');
        commonPopup && commonPopup.remove();
        this.overlay.classList.remove('active');
        this.removeNoScrollClass();
    }
    hiddenPopups = () =>{
        this.hiddenPopupLogin();
        this.hiddenPopupRegistration ();
        this.hideCommonPopup();
    }
    popupLoginToggle = () =>{
        this.hiddenPopupRegistration();
        if(this.popupLogin.classList.contains('active')){
            this.hiddenPopupLogin();
            return
        }
        this.scrollToTop()
        this.showPopupLogin();
    }
    popupRegistrationToggle = () =>{
        this.hiddenPopupLogin();
        if(this.popupRegistration.classList.contains('active')){
            this.hiddenPopupRegistration();
            return;
        }
        this.scrollToTop()
        this.addNoScrollClass();
        this.showPopupRegistration();
    }
    randomString = () =>{
        return (Math.random() + 1).toString(36).substring(7);
    }
    changeNameInput = (item) => {
        item.setAttribute('name', this.randomString());
    }
    addNoScrollClass = () => {
        document.documentElement.classList.add('popup-open');
        document.body.classList.add('popup-open');
    }
    removeNoScrollClass = () => {
        document.documentElement.classList.remove('popup-open');
        document.body.classList.remove('popup-open');
    }
    scrollToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    hoverToggle= (element) =>{
        if(this.$languageSelect.classList.contains('hover')){
            this.removeHoverClass();
            document.removeEventListener('scroll', this.removeHoverClass)
            return true;
        }
        this.addHoverClass();
        document.addEventListener('scroll', this.removeHoverClass);
    }
    addHoverClass = () =>{
        this.$languageSelect.classList.add('hover')
    }
    removeHoverClass = () =>{
        this.$languageSelect.classList.remove('hover');
    }
}
class Registration{
    constructor() {
        this.form = document.getElementById('form');
        this.showButtons = document.querySelectorAll('.see-psw');
        this.firstName = this.form.querySelector('.registration__first-name');
        this.lastName = this.form.querySelector('.registration__last-name');
        this.country = this.form.querySelector('.registration__country');
        this.phone = this.form.querySelector('.registration__phone-number');
        this.email = this.form.querySelector('.registration__email');
        this.dateOfBirth = this.form.querySelector('.registration__date');
        this.currency = this.form.querySelector('.registration__currency');
        this.password = this.form.querySelector('.registration__password');
        this.city = this.form.querySelector('.registration__city');
        this.address = this.form.querySelector('.registration__address');
        this.confirmPassword = this.form.querySelector('.registration__confirm-password');
        this.zip = this.form.querySelector('.registration__postcode');
        this.checkbox = this.form.querySelector('.checkbox__button--age');
        this.checkboxLabel = this.form.querySelector('.checkbox__label--age');
        this.galleryCountries = this.country.querySelectorAll('option');
        this.galleryCurrencies = this.currency.querySelectorAll('option');
        this.galleryInputs = document.querySelectorAll('.input');
        this.passwordIndicator = this.form.querySelector('.password-indicator__progress');
        this.popupLogin = document.getElementById('popup-login');
        this.formPassword = this.popupLogin.querySelector('.login__password');
        this.formEmail = this.popupLogin.querySelector('.login__email');
        this.loader = document.querySelector('.loader');
        this.currentCountry = null;
        this.currentCurrency = null;

        this.inputsForValidate = this.form.querySelectorAll('[data-field]');
    }

    customParametersTemplate = {
        landing: 'landing',
    };

    requiredFields = {
        phone: false,
        email: false,
        password: false,
    }

    init = () =>{
        this.countryCodeChange();
        this.showButtons.forEach((item) => {
            item.addEventListener('click', (evt)=>{
                this.controlViewPassword(evt);
            })
        });
        this.phone.addEventListener('focus',() => this.phone.closest('.field__input--mobile').classList.add('field__mobile--focus'));
        this.phone.addEventListener('blur',() => this.phone.closest('.field__input--mobile').classList.remove('field__mobile--focus'));
        this.country.addEventListener('change',() => this.countryCodeChange());
        this.checkbox.addEventListener('change', () => {
            this.checkbox.checked ? this.checkboxLabel.classList.remove('checkbox-unchecked') : this.checkboxLabel.classList.add('checkbox-unchecked');
        });
        if(this.checkbox.checked){
            this.checkboxLabel.classList.remove('checkbox-unchecked');
        }

        !IS_SHORT_FORM && this.dateOfBirth.setAttribute("max", this.getShiftDateToPeriod())
        !IS_SHORT_FORM && this.dateOfBirth.addEventListener('change', function() {this.value !== '' ? this.classList.add('has-value') : this.classList.remove('has-value')});

        this.galleryInputs.forEach((element) => {
            element.addEventListener('input', ()=> this.onInput(element));
            element.addEventListener('focusout',(element) => this.validation(element.target));
        });
        this.form.addEventListener('submit', this.ajaxSend);

        // setTimeout(this.definitionCountry, 700);
    }

    setCustomLandingParameterFromUrl = (parameter) => {
        const searchedParameter = URLController.isExistSpecialParamInUrl(parameter);
        
        if(!!searchedParameter) {
            return searchedParameter;
        };

        return document.location.host;
    }

    controlViewPassword = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        const block = event.target.closest('.field__wrp-input');
        const input = block.querySelector('.field__input--psw');
        const currentTypeField = input.getAttribute("type");
        const blockEye = block.querySelector('[data-element=see-psw]');
        blockEye.classList.toggle("hidden");
        input.setAttribute("type", currentTypeField === "password" ? "text" : "password");
    }
    countryCodeChange = () =>{
        if(this.phone.value.length > 0) return;

        const phonePlaceholder = this.galleryCountries[this.country.selectedIndex].getAttribute('data-iso-code');
        PhoneInput.setCountry(this.phone, phonePlaceholder);
    }
    simplifiedValidationTemplate = (field, country = '') =>{
        const fieldValue = field.value;
        const isValue = !!fieldValue;
        const MIN_LENGTH_OF_NUMBER = 5;

        if (!isValue) return country;
        if (fieldValue.length <= MIN_LENGTH_OF_NUMBER && fieldValue === fieldValue) return country;
        if (fieldValue.length >= MIN_LENGTH_OF_NUMBER + 1) return fieldValue;

        return country;
    }
    definitionCountry = () =>{
        let currentLang = window.location.pathname.slice(1, -1).toLowerCase();
        const $france = document.querySelector('[data-iso-code="FR"]');

        this.galleryCountries.forEach((item) => {
            if(currentLang === item.getAttribute('data-iso-code').toLowerCase()){
                item.selected = true;
                this.currentCountry = item.getAttribute('data-iso-code');
                this.countryCodeChange();
            }else{
                $france.setAttribute('selected','true');
            }
        })
    }

    isValidateAllInputs = () => {
        const validatedField = Array.from(this.inputsForValidate).map((input) => {
            const container = input.closest('.field');
            return container.classList.contains('field--correct');
        })

        return this.checkIsValidEveryFieldInArray(validatedField);
    }

    checkIsValidEveryFieldInArray = (arrayOfValues = []) => {
        const isArrayValid = Array.isArray(arrayOfValues) && arrayOfValues.length > 0;
        if(isArrayValid) {
            return arrayOfValues.every(currentValue => currentValue === true);
        }
    }

    validationOnlyNumber = (item) =>{
        const corrected = item.value.replace(/([^0-9]+)/gi, '');
        return item.value = `${corrected}`;
    }
    validationName = (element) =>{
        const regex_1 =/[^\D]/;
        const regex_2 = /[!@#$%^&*()_+/=*~`&?|{}\-\[\]/\/\\";:.><№,]/;
        let editStroke = element.value.toString().replace(regex_1, '').trim();
        editStroke = editStroke.toString().replace(regex_2, '')
        element.value = editStroke;
    }
    maxLengthValue = (item, maxlength) =>{
        const itemValueLength = item.value.length;
        if(itemValueLength > maxlength){
            item.value = item.value.slice(0, itemValueLength - 1);
        }
    }
    passwordConfirm = (item) =>{
        const isEquel = this.password.value === this.confirmPassword.value;
        const isEmpty = this.password.value == 0;

        if(isEquel){
            return this.setCorrect(item);
        }

        if(isEmpty){
            return this.setError(this.password, ERROR_TEXT_REQUIRED);
        }
        this.setError(item, ERROR_TEXT_PASSWORD);
    }
    setCorrect = (item) => {
        item.closest('.field').classList.remove('field--error');
        item.closest('.field').classList.add('field--correct');
    }
    setError = (item ,textContent) => {
        const errorTooltip = item.closest('.field').querySelector('.tooltip-red');
        errorTooltip.textContent = textContent;
        errorTooltip.classList.remove('hide');
        item.closest('.field').classList.add('field--error');
        item.closest('.field').classList.remove('field--correct');
        loaderController.hideLoader();
    }
    requiredFieldCheck = () =>{
        const requiredPhone = this.phone.closest('.field').classList.contains('field--correct');
        const requiredPassword = this.password.closest('.field').classList.contains('field--correct');
        const requiredEmail = this.email.closest('.field').classList.contains('field--correct');
        // const requiredAddress = this.address.closest('.field').classList.contains('field--correct');
        // const requiredPostCode = this.zip.closest('.field').classList.contains('field--correct');
        // const requiredCity = this.city.closest('.field').classList.contains('field--correct');
        // const requiredBirthOfDate = this.dateOfBirth.closest('.field').classList.contains('field--correct');
        const isCorrectListOfItems = requiredPassword && requiredEmail && requiredPhone;

        console.log('requiredPassword: ' + requiredPassword)
        console.log('requiredEmail: ' + requiredEmail)
        console.log('requiredPhone: ' + requiredPhone)
        return isCorrectListOfItems;
    }

    fieldContentCheck = () =>{
        const arr = Array.from(this.inputsForValidate).map((element) => {
            if(element.value === '' || element === this.phone && this.phone.value.length < 6) {
                this.tooltipShow(element);
                return false;
            }

            return true;
        });

        return arr.every(domElement => domElement === true)
    }

    tooltipShow = (element) =>{
        const errorTooltip = element.closest('.field').querySelector('.tooltip-red');
        errorTooltip.textContent = ERROR_TEXT_REQUIRED;
        if(element === this.phone && this.phone.value.length < 6 && this.phone.value.length > 0){
            errorTooltip.textContent = ERROR_TEXT_MIN_SYMBOL;
        }
        errorTooltip.classList.remove('hide');
        element.closest('.field').classList.add('field--error');
    }
    onInput = (item) =>{
        this.currentCountry = this.galleryCountries[this.country.selectedIndex].getAttribute('data-iso-code');
        this.currentCurrency = this.galleryCurrencies[this.currency.selectedIndex].getAttribute('name');
        item.closest('.field').classList.remove('field--correct');
        item.closest('.field').classList.remove('field--error');
        item.closest('.field').querySelector('.tooltip-red').classList.add('hide');

        if(item === this.password && this.password.value.length === 0) {
            this.passwordIndicator.setAttribute('data-password-strength', 'very-weak');
        }

        if(item === this.firstName || item === this.lastName){
            this.validationName(item);
        }
        if(item === this.dateOfBirth){
            if(item.value.length !== 0){
                item.closest('.field').classList.remove('field--error');
                item.closest('.field').classList.add('field--correct');
            }
        }
        if(item === this.phone){
            this.validationOnlyNumber(item);
            this.maxLengthValue(item, 16);
        }
        if(item === this.zip){
            this.validationOnlyNumber(item);
        }
    }

    checkValidation = async () => {
        const elements = Array.from(this.galleryInputs).map(async (element) => {
            return await this.validation(element);
        });

        return await Promise.all(elements);
    }

    ajaxSend = async(e) => {
        e.preventDefault();
        let formattedDate = "";

        this.fieldContentCheck();

        if(this.checkbox.checked && this.fieldContentCheck()) {
            loaderController.showLoader();
            await this.checkValidation();
        }

        if(!IS_SHORT_FORM) {
            const dateParts = this.dateOfBirth.value.split("-");
            formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        }

        if(this.checkbox.checked && this.isValidateAllInputs() && this.checkIsValidEveryFieldInArray(Object.values(this.requiredFields))) {
            const csrfElem = form.querySelector('input[name="_token"]');
            const registerUserDTO = new RegisterUserDTO({
                "firstName": this.firstName.value,
                "lastName": this.lastName.value,
                "country": this.currentCountry,
                "phone": PhoneInput.getNumber(this.phone),
                "email": this.email.value,
                "birthday": formattedDate || '',
                "city": this.city?.value || '',
                "address": this.address?.value || '',
                "zip": this.zip?.value || '',
                "currency": this.currentCurrency,
                "password": this.password.value,
                "isShortForm": IS_SHORT_FORM,
                "brand": new Handlers().getBrand(),
                "landing": this.setCustomLandingParameterFromUrl(this.customParametersTemplate.landing),
                "_token": csrfElem ? csrfElem.value : '',
                "lang" : lang,
                "affidSRC" : affidSRC || ''
            });
            RegisterService.register(registerUserDTO)
                .then(response => {
                    clearFormIndicator = true;
                    this.form.reset();
                    if (response.token && response.tokenx) {
                        window.location.href = `${window.dispatcher}/${lang}/deposit/?auto_token=${response.token}&tokenx=${response.tokenx}&${URLController.getAllParametersFromUrlWithSpecialParam(this.customParametersTemplate.landing)}`;
                    }
                })
                .catch(errorMsg => {
                    loaderController.hideLoader();
                    clearFormIndicator = false;
                    new Handlers().hiddenPopupRegistration();
                    new Popup().createCommonPopup({message: errorMsg || ALERT_MESSAGE});
                });
        } else if (!this.checkbox.checked){
            this.checkboxLabel.classList.add('checkbox-unchecked');
        }
    }
    validation = async(item) =>{
        const isName = item === this.firstName || item === this.lastName;
        if(isName){
            const isValueMoreThanTwo = item.value.length >= 2;
            if(isValueMoreThanTwo) return item.closest('.field').classList.add('field--correct');

            this.setError(item, ERROR_TEXT_REQUIRED);
        }

        if(item === this.phone){
            const minLengthWithOutCodeCountry = 6;
            const emptyValue = 0;
            if(this.phone.value.length === emptyValue){
                this.setError(this.phone, ERROR_TEXT_REQUIRED);
                return;
            }
            if(this.phone.value.length < minLengthWithOutCodeCountry){
                this.setError(this.phone, ERROR_TEXT_MIN_SYMBOL);
                return;
            }

            try{
                const fetchVariable = await fetch(`${SITE_ROOT}${lang}/api/register/validate/phone-is-free`, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        "phone": PhoneInput.getNumber(this.phone),
                        "country_id": this.galleryCountries[this.country.selectedIndex].value,
                        "brand": new Handlers().getBrand(),
                    })
                });
                const response = await fetchVariable.json();

                console.log(response)

                const {success, user_message} = response;

                if(success) {
                    this.phone.closest('.field').classList.add('field--correct');
                    return this.requiredFields.phone = success;
                }
                this.setError(this.phone, user_message);
            } catch (error) {
                throw new Error('Error: ' + error);
            }
        }

        if(item === this.password) {
            try {
                const isEqualPasswordAndEmail = this.password.value === this.email.value;
                const isEmptyPassword = this.password.value.length === 0;
                const fetchVariable = await fetch(`${SITE_ROOT}${lang}/api/register/validate/password`, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        "password": this.password.value,
                        "brand": new Handlers().getBrand(),
                    })
                })
                const response = await fetchVariable.json();
                const {is_valid, strength_name, user_message} = response;

                if (is_valid && !isEqualPasswordAndEmail && !isEmptyPassword) {
                    this.password.closest('.field').classList.add('field--correct');
                    const newPasswordIndicator = strength_name;
                    if (newPasswordIndicator) {
                        this.passwordIndicator.setAttribute('data-password-strength', newPasswordIndicator);
                    }
                    return this.requiredFields.password = is_valid;
                }

                this.setError(this.password, user_message);

                if (isEqualPasswordAndEmail) {
                    this.setError(this.password, ERROR_TEXT_EMAIL_DIFFERENT);
                }
                if (isEmptyPassword) {
                    this.setError(this.password, ERROR_TEXT_REQUIRED);
                }
            }catch (error) {
                console.error('Error', error);
                new Popup().createCommonPopup({message: ALERT_MESSAGE});
            }
        }

        if(item === this.email){
            try {
                const fetchVariable = await fetch(`${SITE_ROOT}${lang}/api/register/validate/email`, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        "email": this.email.value,
                        "phone": PhoneInput.getNumber(this.phone),
                        "brand": new Handlers().getBrand(),
                    })
                })
                const response = await fetchVariable.json();
                const {is_valid, is_free, user_message} = response;
                console.log(response);
                if(is_valid && is_free){
                    this.email.closest('.field').classList.add('field--correct');
                    return this.requiredFields.email = is_valid;
                }
                this.setError(this.email, user_message);
            }catch (error) {
                console.error('Error', error)
                new Popup().createCommonPopup({message: ALERT_MESSAGE});
            }
        }

        if(item === this.city || item  === this.address ){
            item .closest('.field').classList.add('field--correct');
        }

        if(item === this.zip || item === this.formEmail || item === this.formPassword){
            if(item.value.length > 3){
                item.closest('.field').classList.add('field--correct');
                return
            }
            item.closest('.field').classList.remove('field--correct');
        }

        if(item === this.confirmPassword){
            this.passwordConfirm(item)
        }
    }
  
    getShiftDateToPeriod = () =>{
        const MIN_USER_AGE = 18;

        const currentDate = new Date();
        const userAgeAgoDate = new Date(currentDate.getFullYear() - MIN_USER_AGE, currentDate.getMonth(), currentDate.getDate());
        const year = userAgeAgoDate.getFullYear();
        const month = (userAgeAgoDate.getMonth() + 1).toString().padStart(2, '0');
        const day = userAgeAgoDate.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
}
class Login{
    constructor() {
        this.popupLogin = document.getElementById('popup-login');
        this.formLogin = this.popupLogin.querySelector('.popup-login__form');
        this.formPassword = this.popupLogin.querySelector('.login__password');
        this.formEmail = this.popupLogin.querySelector('.login__email');
        this.loginRequiredFieldValue = false;

    }
    init = () =>{
        this.formLogin.addEventListener('submit', this.login);
    }
    login = async (e) => {
        e.preventDefault();
        loaderController.showLoader();
        const _token = document.querySelector('.popup-login__form input[name="_token"]').value;
        const loginUserDTO = new LoginUserDTO({
            'email': this.formEmail.value,
            'password': this.formPassword.value,
            'brand': new Handlers().getBrand(),
            '_token': _token,
            'social': false,
            'dispatcher': window.dispatcher,
            'lang': lang
        });
        LoginService.loginUser(loginUserDTO)
            .then(responseData => {
                if (responseData?.link) {
                    window.location.href = responseData.link;
                }

                if (responseData.result.user_exists) {
                    window.location.reload();
                }
            })
            .catch(errorMsg => {
                const props = {message: errorMsg || ALERT_MESSAGE, isBtnOk: true, popupClass: 'popup-error'};
                loaderController.hideLoader();
                new Handlers().hiddenPopupLogin();
                new Popup().createCommonPopup(props);
                this.popupLogin.classList.remove('active');
            });
    }
}
class Parameters{
    constructor() {
        this.footerLinksGallery = document.querySelectorAll('.footer__box a');
        this.regLink = document.querySelector('.registration__terms');
        this.firstReplace = true;
        this.body = document.querySelector('body');
        this.langLinks = document.querySelectorAll('.language__link');
    }
    init = () => {
        const isHaveParameters = location.search !== '';
        if(isHaveParameters) {
            localStorage.setItem('affid', `${location.search}`);
        }

        const isSavedParameters = !!localStorage.getItem('affid');

        if(isSavedParameters){
            this.addAndSaveParameters(this.footerLinksGallery, this.regLink);
            this.addAndSaveParameters(this.langLinks);
        }
        if(notMainPage()){
            this.body.classList.add('second-page');
            const backHomeLink = document.querySelector('.header-nav__item-back');
            this.addAndSaveParameters(backHomeLink, this.regLink);
        }
    }
    addAndSaveParameters = (linksFooterOrTop, regLink) =>{
        if(!(!!localStorage.getItem('affid'))){
            return;
        }
        if(linksFooterOrTop === this.langLinks){
            if(this.langLinks.length > 0){
                this.langLinks.forEach((item) => {
                    let itemHref = item.href;
                    item.href = item.href + localStorage.getItem('affid');
                })
                return;
            }
            let itemHref = this.langLinks.href;
            this.langLinks.href = itemHref + localStorage.getItem('affid');
        }
        if(this.firstReplace){
            this.firstReplace = false;
            regLink.href = regLink.href + localStorage.getItem('affid');
        }
        if(linksFooterOrTop.length > 0){
            linksFooterOrTop.forEach((item) => {
                this.addParametersToLink(item);
            })
            return;
        }
        this.addParametersToLink(linksFooterOrTop);
    }
    addParametersToLink = (item) =>{
        let itemHref = item.href;
        item.href = itemHref + localStorage.getItem('affid');
    }
}
class Popup{
    constructor(){
        this.header = document.querySelector('.header');
    }

    templateCommonPopup = (props) => {
        const btnOk = (props) => {
            return `<div class="buttons">
                        <input type="button" class="custom-btn btn-gold btn-ok" value="Ok">
                    </div>`};

        const message = props?.message ? props.message : '';
        const className = props?.popupClass ? props.popupClass : '';
        const isBtnOk = props?.isBtnOk ? props.isBtnOk : '';

        return `<div class="popup-common ${className}">
                    <div class="popup-common__logo"></div>
                    <div class="popup-common__text-box">
                        <p class="popup-common__text">${message}</p>
                        ${isBtnOk ? btnOk() : ''}
                    </div>
                </div>`;
    }

    createCommonPopup = (props) => {
        const className = props?.popupClass ? `.${props?.popupClass}` : '';
        const isPopupExist = !!document.querySelector(`.popup-common${className}`);
        !isPopupExist && this.header.insertAdjacentHTML('afterend', this.templateCommonPopup(props));
        new Handlers().showCommonPopup(className);
        if (!!props?.isBtnOk) {
            const btnOk = document.querySelector('.popup-common .btn-ok');
            !!btnOk && btnOk.addEventListener('click', new Handlers().hideCommonPopup);
        }
    }
}
class ModalCookies{
    constructor() {
        this.modalCookies = document.querySelector('.use-cookie');
        this.modalButton = this.modalCookies.querySelector('.use-cookie__btn');
    }
    init = () =>{
        if(!!localStorage.getItem("Cookies")){
            this.hiddenModalCookies();
        }
        if(!(!!localStorage.getItem("Cookies"))){
            localStorage.clear();
            this.modalCookies.classList.add('use-cookie--show');
        }
        this.modalButton.addEventListener('click', this.activeCookies);
    }
    hiddenModalCookies = () =>{
        this.modalCookies.classList.remove('use-cookie--show');
    }
    activeCookies = () =>{
        if(navigator.cookieEnabled){
            localStorage.setItem('Cookies', 'Enable');
            this.hiddenModalCookies();
        }else{
            console.warn("storage not supported");
            new Popup().createCommonPopup({message: ALERT_COOKIES});
        }
    }
}
class SliderContentUpdate{
    constructor(){
        this.firstDepositMaxBonusPercentBlock = document.querySelectorAll('[data-replace="ftd-max-bonus-percent"]');
        this.welcomeTotalDepositBonusesBlock = document.querySelectorAll('[data-replace="total-bonus-amount"]');
        this.freeSpinsBlock = document.querySelectorAll('[data-replace="ftd-free-spins"]');

        this.firstDepositMaxBonusPercentValue = window.ftd_max_bonus_percent;
        this.welcomeTotalDepositBonusesValue = window.total_bonus_amount_cur;

        this.affilaiteFreeSpinsValue = window.free_spins;
        this.firstDepositFreeSpinsValue = window.ftd_free_spins;

        this.freeSpins = () => {
            if(this.affilaiteFreeSpinsValue > this.firstDepositFreeSpinsValue) {
                return this.affilaiteFreeSpinsValue;
            }
            return this.firstDepositFreeSpinsValue;
        }
    }
    updateSlider = () =>{
        this.updateEachBlocks(this.freeSpinsBlock, this.freeSpins());
        this.updateEachBlocks(this.firstDepositMaxBonusPercentBlock, this.firstDepositMaxBonusPercentValue);
        this.updateEachBlocks(this.welcomeTotalDepositBonusesBlock, this.welcomeTotalDepositBonusesValue);
    }
    updateEachBlocks = (block, text) => {
        if(block.length > 0 && text){
            if(block.length === 1){
                this.updateText(block[0], text);
                return;
            }
            block.forEach((block)=>{
                this.updateText(block, text);
            })
        }
    }
    updateText = (block, text)=>{
        block.innerText = text
    }
}

/**
 * This class controls the redirect to a specific language and
 * specifies the country, number, currency for the registration modal
 */
class LanguageController {
    constructor(code = 'FR') {
        // This class
        this.countrySelect = document.querySelector('#registration__country');
        this.currencySelect = document.querySelector('#registration__currency');
        this.DEFAULT_LANGUAGE = 'FR';
        this.DEFAULT_CURRENCY = 'EUR';
    }

    init = (code = this.DEFAULT_LANGUAGE) => {
        const initializeCode = code.toUpperCase();

        this.setSelectValueByParameters(initializeCode);
    }

    isExistValueInOptions = (code = this.DEFAULT_LANGUAGE) => {
        const $option = this.countrySelect.querySelector(`[data-iso-code="${code}"]`);
        RegistrationApi.countryCodeChange();
        if(!!$option) return $option;

        return this.countrySelect.querySelector(`[data-iso-code=${this.DEFAULT_LANGUAGE}]`);
    }

    isExistCurrencyInOptions = (code = this.DEFAULT_LANGUAGE) => {
        const initializeCurrency = this.countryCurrencyTemplate(code);
        const $option = this.currencySelect.querySelector(`[name=${initializeCurrency}]`);
        RegistrationApi.countryCodeChange();
        if(!!$option) return $option;

        return this.currencySelect.querySelector(`name=${this.DEFAULT_CURRENCY}`);
    }

    setSelectValueByParameters = (code = this.DEFAULT_LANGUAGE) => {
        this.countrySelect.value = this.isExistValueInOptions(code).value;
        this.currencySelect.value = this.isExistCurrencyInOptions(code).value;
    }

    countryCurrencyTemplate = (code = this.DEFAULT_LANGUAGE) => {
        const USD_COUNTRY_TEMPLATE = ['AR', 'BO', 'BR', 'BZ', 'CL', 'CO', 'CR', 'EC', 'GT', 'GY', 'HN',
            'MX', 'NI', 'PA', 'PY', 'SR', 'SV', 'UY', 'VE', 'JP', 'NZ', 'IS'];
        const GB_COUNTRY_TEMPLATE = ['GB'];

        if(USD_COUNTRY_TEMPLATE.includes(code)) return 'USD';
        if(GB_COUNTRY_TEMPLATE.includes(code)) return 'GB';
        return 'EUR';
    }

    isLanguageExist = () => {
        const languageLinks = document.querySelectorAll('[data-lang] a');

        return Array.from(languageLinks).map((lang) => {
            return lang.getAttribute('lng').toUpperCase();
        })
    }
}

const urlKeyOpenRegistration = () => {
    if(window.location.href.includes('registration')){
        new Handlers().showPopupRegistration();
        history.pushState(null, null, `/${lang}/${window.location.search}`);
    }
}
const HandlersApi = new Handlers();
const RegistrationApi = new Registration();
const LoginApi = new Login();
const ParametersApi = new Parameters();
const ModalCookiesApi = new ModalCookies();

HandlersApi.init();
RegistrationApi.init();
LoginApi.init();
ModalCookiesApi.init();
ParametersApi.init();
urlKeyOpenRegistration();

document.addEventListener('DOMContentLoaded', () => {
    const languageController = new LanguageController();

    languageController.init(COUNTRY_CODE);
})