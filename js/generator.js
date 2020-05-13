console.log("Work")

let siteTemplateData = {
    // Basic Info
    brandId:1,
    brandName:'Bhagyalaxmi',
    brandLogo:'https://pradeepsuthar.github.io/Bhagyalaxmi_Sweet_and_Bakery/images/Bhagyalaxmi_logo.jpg',
    socialMideaLinks: ['https://www.facebook.com/pradeepBhardwaj081', 'http://instagram.com/profile_name', 'https://twitter.com/username', 'https://www.tiktok.com/username'],
    phone_no: '9876543210',
    email: 'company@sitename.com',
    opening_hour: 'Mon - Sat : 9am to 7pm',
}


class BrandSite {
    constructor(siteObj){
        this.siteObj = siteObj
    }

    get onInit(){
        return this.brandInfo()
    }

    brandInfo(){
        return this.siteObj.brandName;
    }


}

const site = new BrandSite(siteTemplateData);

console.log(site.onInit)