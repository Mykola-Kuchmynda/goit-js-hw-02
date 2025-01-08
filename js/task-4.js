function getShippingCost(country) {
    let checkCountry = country.toLowerCase();
    let price;
    if (checkCountry === "australia") {
        price = 170;
    } else if (checkCountry === "china") {
        price = 100;
    } else if (checkCountry === "chile") {
        price = 250;
    } else if (checkCountry === "jamaica") {
        price = 120;
    };
    switch (checkCountry) {
        case "australia":
        case "china":
        case "chile":
        case "jamaica":
            return `"Shipping to ${country} will cost ${price} credits"`;
            break;     
        default:
            return `"Sorry, there is no delivery to your country"`;
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"