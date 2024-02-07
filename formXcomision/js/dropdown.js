const phone = document.querySelector('.registration__phone-number');

PhoneInput.init(phone, {
    initialCountry: "fr",
    preferredCountries: [],
    hiddenInput: "mobile"
})

class DropdownWithSearch{
    constructor(){
        this.country = document.querySelector('.registration__country');
        this.galleryCountries = this.country.querySelectorAll('option');
        this.currency = document.querySelector('.registration__currency');
        this.popupRegistration = document.querySelector('.popup-registration');
        this.options = Array.from(this.galleryCountries);
        this.selectContainer = document.querySelector('.select-container');
        this.searchInput = document.getElementById("searchInput");
        this.dropdownBox = document.getElementById("dropdownBox");
        this.dropdown = document.getElementById("dropdown");
        this.fieldReg = document.querySelectorAll('.field.field--reg');
        this.select = document.getElementById("registration__country");
    }
    init = () => {
        this.selectContainer.addEventListener("click", () => {
            this.searchInput.focus();
        });

        this.searchInput.addEventListener("input", this.showOptions);

        this.fieldReg.forEach((field)=>{
            field.addEventListener("click", (e)=>{
                if(e.target !== this.selectContainer && e.target !== this.searchInput){
                    this.hideOptions(e);
                }
            });
        })

        this.popupRegistration.addEventListener("click", (e) => {
            if(e.target === this.searchInput && !this.selectContainer.classList.contains('active') ||
               e.target === this.selectContainer && !this.selectContainer.classList.contains('active')){
                this.showOptions()
                return;
            }
            this.hideOptions(e)
        })
        this.currency.addEventListener("focus", (e)=>{
            this.hideOptions(e)
        })

    }
    changeCountry = (country) => {
        this.galleryCountries.forEach((item) => {
            if(country === item.getAttribute('data-iso-code').toLowerCase()){
                item.selected = true;
                new Registration().currentCountry = item.getAttribute('data-iso-code');
                new Registration().countryCodeChange();
            }
        })

    }
    showOptions = () => {
        this.dropdown.innerHTML = "";

        const searchTerm = this.searchInput.value.toLowerCase();
        const matchedOptions = this.options.filter((option) => {
            return option.textContent.toLowerCase().includes(searchTerm);
        });

        if (matchedOptions.length > 0) {
            matchedOptions.forEach((option) => {
                const selectedCountry = this.galleryCountries[this.country.selectedIndex].getAttribute('data-iso-code');
                const optionElement = document.createElement("div");
                optionElement.className = "select-option";
                optionElement.textContent = option.textContent;
                optionElement.setAttribute("data-country", option.getAttribute("data-iso-code"))

                optionElement.addEventListener("click", (e) => {
                    this.changeCountry((e.target.getAttribute("data-country")).toLowerCase());
                    this.hideOptions(e);
                    new Registration().countryCodeChange();
                });
                this.dropdown.appendChild(optionElement);

                if(selectedCountry === optionElement.getAttribute("data-country")){
                    optionElement.classList.add("selected")
                    return;
                }
                optionElement.classList.remove("selected");
            });
        } else {
            const noResultsMessage = document.createElement("div");
            noResultsMessage.className = "no-results-message";
            noResultsMessage.textContent = `${SEARCH_NOT_MATCHED} "${this.searchInput.value}"`;
            this.dropdown.appendChild(noResultsMessage);
        }
        this.searchInput.classList.add('active');
        this.dropdown.classList.add('active');
        this.dropdownBox.classList.add('active');
        this.selectContainer.classList.add('active');
        this.select.classList.add("focus-input");
    }
    hideOptions = (e) => {
        if(e.target === this.searchInput ||
           e.target === this.selectContainer && !this.selectContainer.classList.contains('active')){
            return
        }
        this.searchInput.classList.remove('active');
        this.dropdown.classList.remove('active')
        this.dropdownBox.classList.remove('active');
        this.selectContainer.classList.remove('active');
        this.select.classList.remove("focus-input");
        this.searchInput.value = '';
    }
}
const dropdownWithSearch = new DropdownWithSearch();
dropdownWithSearch.init();