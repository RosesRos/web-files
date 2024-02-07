/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 */

/**
 * International Telephone Input wrapper
 * https://github.com/jackocnr/intl-tel-input
 * https://intl-tel-input.com/
 *
 * @var BRAND string &master_page.tpl
 */
class PhoneInputService
{
    getStatus() {
        // BRAND.toLowerCase() === templateBrandNames.PLAYREGAL
        return true;
    }

    init(input, options) {
        let instance = this.getInstance(input);
        if (instance) {
            instance.destroy();
        }

        if (typeof options !== 'object') {
            options = {};
        }

        // Readme: https://github.com/jackocnr/intl-tel-input#initialisation-options
        options['separateDialCode'] = true;
        options['autoInsertDialCode'] = false;
        options['formatOnDisplay'] = false;
        options['autoPlaceholder'] = 'aggressive';
        options['utilsScript'] = '/assets/common/libraries/intl-tel-input/js/utils.js';
        options['dropdownContainer'] = document.getElementById('phone-country-dropdown-container');

        // let _input = this.getHtmlElement(input);
        // let number = _input.value.replace(/[+\s]/g, '');
        // if (number) {
        //     _input.value = number;
        // }

        window.intlTelInput(this.getHtmlElement(input), options);
    }

    /**
     * @param {HTMLElement|string} input
     */
    getNumber(input) {
        return this.getInstance(input).getNumber();
    }

    getInstance(input) {
        return window.intlTelInputGlobals.getInstance(this.getHtmlElement(input));
    }

    getHtmlElement(input) {
        return typeof input === 'object' ? input : document.getElementById(input);
    }

    setCountry(input, country) {
        let instance = this.getInstance(input);
        if (instance) {
            instance.setCountry(country);
        }
    }
}

let PhoneInput = new PhoneInputService();