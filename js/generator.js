var firebaseConfig = {
    apiKey: "AIzaSyAJOm29FsjGtNiuj8g3m3G3S5iW5n69Oig",
    authDomain: "webbuilder081.firebaseapp.com",
    databaseURL: "https://webbuilder081.firebaseio.com",
    projectId: "webbuilder081",
    storageBucket: "webbuilder081.appspot.com",
    messagingSenderId: "142256510593",
    appId: "1:142256510593:web:8c1a07c0c50c3f31b1df80",
    measurementId: "G-2RR8FHSQL3"
};

firebase.initializeApp(firebaseConfig);

var id = "Yg0jIjIqTpX1FEGpT6BDZskZ4iL2"

class GenerateWeb {
    constructor() {
        console.log("Constructor called")
    }

    getUserData(userData) {
        console.log(userData);
        console.log("Full Name : ", userData.ownerName)
        console.log("Email : ", userData.email)
        console.log("Phone No. : ", userData.phoneNo)
        console.log("Whatsapp No. : ", userData.whatsappNo)
        console.log("Shop Name : ", userData.shopName)


        if (document.getElementById('about_section')) {

            if (userData.aboutUs.title && userData.aboutUs.description) {
                document.getElementById('about_title').style = "display:block";
                document.getElementById('about_desc').style = "display:block";
                document.getElementById('about_title').innerHTML = userData.aboutUs.title;
                document.getElementById('about_desc').innerHTML = userData.aboutUs.description;
            } else {
                document.getElementById('about_title').style = "display:none";
                document.getElementById('about_desc').style = "display:none";
            }
            if (userData.ownerName) {
                document.getElementById('shopOwnerName').style = "display:block";
                document.getElementById('shopOwnerName').innerHTML = userData.ownerName;
            } else {
                document.getElementById('shopOwnerName').style = "display:none";
            }
        }


        if (document.getElementById('footer_section')) {

            document.title = userData.shopName;
            document.getElementById('phone').innerHTML = userData.phoneNo
            // document.getElementById('whatsappNo').innerHTML = userData.whatsappNo
            document.getElementById('email').innerHTML = userData.email


            if (userData.socialMedia.facebook && userData.socialMedia.instagram && userData.socialMedia.linkedin && userData.socialMedia.youtube && userData.socialMedia.pinterest && userData.socialMedia.tiktok && userData.socialMedia.twitter) {
                // console.log("Facebook True")
                var facebook_li = document.createElement('li');
                facebook_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                facebook_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-facebook';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                facebook_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "Facebook";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.facebook}`;
                a.target = '_blank'
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'Facebook';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(facebook_li);

                // console.log("instagram True")
                var instagram_li = document.createElement('li');
                instagram_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                instagram_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-instagram';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                instagram_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "instagram";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.instagram}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'instagram';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(instagram_li);

                // console.log("linkedin True")
                var linkedin_li = document.createElement('li');
                linkedin_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                linkedin_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-linkedin';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                linkedin_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "linkedin";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.linkedin}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'linkedin';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(linkedin_li);

                // console.log("youtube True")
                var youtube_li = document.createElement('li');
                youtube_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                youtube_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-youtube';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                youtube_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "youtube";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.youtube}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'youtube';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(youtube_li);

                // console.log("pinterest True")
                var pinterest_li = document.createElement('li');
                pinterest_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                pinterest_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-pinterest';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                pinterest_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "pinterest";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.pinterest}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'pinterest';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(pinterest_li);

                // console.log("tiktok True")
                var tiktok_li = document.createElement('li');
                tiktok_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                tiktok_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-music';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                tiktok_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "tiktok";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.tiktok}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'tiktok';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(tiktok_li);

                // console.log("twitter True")
                var twitter_li = document.createElement('li');
                twitter_li.className = document.getElementById('socialLink_li').className;
                var media_left_div = document.createElement('div');
                media_left_div.className = document.getElementById('socialLink_li_media_left').className;
                twitter_li.appendChild(media_left_div);
                var icon_div = document.createElement('icon');
                icon_div.className = document.getElementById('socialLink_li_media_left_icon').className;
                media_left_div.appendChild(icon_div);
                var social_icon = document.createElement('i');
                social_icon.className = 'fa fa-twitter';
                icon_div.appendChild(social_icon);
                var media_body = document.createElement('div');
                media_body.className = document.getElementById('socialLink_li_media_body').className;
                twitter_li.appendChild(media_body);
                var h6 = document.createElement('h6');
                h6.innerHTML = "twitter";
                var p = document.createElement('p');
                var a = document.createElement('a');
                a.href = `${userData.socialMedia.twitter}`;
                a.className = document.getElementById('socialLink_li_media_body_a').className;
                a.innerHTML = 'twitter';
                p.appendChild(a);
                media_body.appendChild(h6);
                media_body.appendChild(p);
                document.getElementById('socialLinks').appendChild(twitter_li);
            } else {
                console.log("Social media not found")
            }

            // document.getElementById('facebook').innerHTML = userData.socialMedia.facebook
            // document.getElementById('instagram').innerHTML = userData.socialMedia.instagram
            // document.getElementById('linkedin').innerHTML = userData.socialMedia.linkedin
            // document.getElementById('youtube').innerHTML = userData.socialMedia.youtube
            // document.getElementById('pinterest').innerHTML = userData.socialMedia.pinterest
            // document.getElementById('tiktok').innerHTML = userData.socialMedia.tiktok
            // document.getElementById('twitter').innerHTML = userData.socialMedia.twitter
            // document.getElementById('aboutTitle').innerHTML = userData.aboutUs.title
            // document.getElementById('aboutDesc').innerHTML = userData.aboutUs.description
        }




        if (userData.address.area && userData.address.city && userData.address.state && userData.address.zipCode && userData.address.country) {
            // document.getElementById('address_info').style = "display:block";
            document.getElementById('address').innerHTML = userData.address.area + ", " + userData.address.city + ", (" + userData.address.state + ") - " + userData.address.zipCode + " - " + userData.address.country;
        } else {
            document.getElementById('address_info').style = "display:none";
        }

        if (userData.phoneNo && userData.whatsappNo) {
            // document.getElementById('call_info').style = "display:block";
            document.getElementById('phone_call').innerHTML = userData.phoneNo;
            document.getElementById('whatsapp_call').innerHTML = userData.whatsappNo;
        } else {
            document.getElementById('call_info').style = "display:none";
        }
        if (userData.email) {
            // document.getElementById('message_info').style = "display:block";
            document.getElementById('mess_with_email').innerHTML = userData.email;
        } else {
            document.getElementById('message_info').style = "display:none";
        }






    }

    getServices(serviceData) {
        console.log("Services : ", serviceData)

        if (serviceData) {
            let html = "";
            serviceData.forEach(function (siteTemplateData, i) {
                html += ` 
            <!-- ${siteTemplateData['title']} -->
              <li class="col-md-4 col-sm-6 col-xs-6">
                <article>
                  <div class="ser-img"> <img class="img-responsive" src="${siteTemplateData['imgUrl']}" alt="${siteTemplateData['title']}" max-height="300">
                    <!-- Head -->
                    <div class="ser-head">
                      <h6 id="service-title">${siteTemplateData['title']}</h6>
                    </div>
                  </div>
                  <!-- Detail -->
                  <div class="detail-in">
                    <p class="module line-clamp">${siteTemplateData['desc']}</p>
                    <a href="#." class="go-btn"><i class="ion-ios-arrow-thin-right"></i></a>
                  </div>
                </article>
              </li>`;
            });
            if (serviceData.length != 0) {
                document.getElementById("ourServices").innerHTML = html;
            } else {
                nodeElm.innerHTML = ``;
            }
        }
    }

    getAllProducts(products) {
        console.log("Products : ", products)

        if (products) {
            document.getElementById('available_products').style = "display:block";
            document.getElementById('not_available_products').style = "display:none";

            let html = "";
            products.forEach(function (siteTemplateData, i) {
                html += `
                <div class="col item my-2">
                    <article>
                        <div class="img-item">
                            <img class="img-responsive" src="${siteTemplateData['imgUrl']}" alt="${siteTemplateData['itemName']}" >
                        </div>
                        <div class="item-name"> 
                            <h4><strong>${siteTemplateData['itemName']}</strong></h4>
                            <h4>${siteTemplateData['itemCategory']}</h4> 
                            <span>Rs.${siteTemplateData['itemPrice']}</span> 
                        </div>
                    </article>
                </div>`;
            });
            if (products.length != 0) {
                document.getElementById("product_row").innerHTML = html;
            } else {
                nodeElm.innerHTML = ``;
            }

        } else {
            document.getElementById('available_products').style = "display:none";
            document.getElementById('not_available_products').style = "display:block";
        }


        // function iterate(item) {
        //     console.log(`${item.imgUrl}`);
        //     console.log(`${item.itemName}`);
        //     console.log(`${item.itemCategory}`);
        //     // document.getElementById('service-title').innerHTML = item.itemName
        //     console.log(`${item.itemPrice}`);
        // }
        // products.forEach(iterate)



    }

    getCarousels(slides) {
        console.log("Slides : ", slides)
    }

    getGalleryPhotos(photos) {
        console.log("Photos : ", photos)

        function iterate(item) {
            console.log(`${item.imgUrl}`);
            if (document.getElementById('gallery_li')) {
                var li = document.createElement('li');
                li.className = document.getElementById('gallery_li').className;
                var gallery_item = document.createElement('div');
                gallery_item.className = document.getElementById('gallery_item').className;

                var img = document.createElement('img');
                img.className = document.getElementById('gallery_item_img').className;
                img.src = `${item.imgUrl}`;

                li.appendChild(gallery_item);
                gallery_item.appendChild(img);

                var open_gallery_img = document.createElement('div');
                open_gallery_img.className = document.getElementById('open_gallery_img').className;
                gallery_item.appendChild(open_gallery_img)

                var open_gallery_img_div = document.createElement('div');
                open_gallery_img_div.className = document.getElementById('open_gallery_img_div').className;
                open_gallery_img.appendChild(open_gallery_img_div);

                var anchor_img = document.createElement('a');
                var att = document.createAttribute("data-lighter");
                anchor_img.setAttributeNode(att);
                anchor_img.href = `${item.imgUrl}`;
                open_gallery_img_div.appendChild(anchor_img);

                var open_icon = document.createElement('i');
                open_icon.className = document.getElementById('open_icon').className;
                anchor_img.appendChild(open_icon);
                document.getElementById('img_gallery_row').appendChild(li)
            }


        }
        photos.forEach(iterate)


    }

    getGalleryVideos(videos) {
        console.log("Videos : ", videos)
    }
}

// Object of GenerateWeb class
var web = new GenerateWeb()

// fetch data form user collection
firebase.firestore().collection("users").doc(id).get().then(function (doc) {
    window.UsersDetails = doc.data()
    // console.log(UsersDetails)
    web.getUserData(UsersDetails)
})

// fetch data form user subcollection Service
firebase.firestore().collection("users").doc(id).collection("services").onSnapshot(function (snapshot) {
    window.Service = []
    snapshot.forEach(function (taskValue) {
        return window.Service.push(taskValue.data())
    })
    // console.log(window.Service)
    web.getServices(window.Service)
})

// fetch data form user subcollection Products
firebase.firestore().collection("users").doc(id).collection("products").onSnapshot(function (snapshot) {
    window.products = []
    snapshot.forEach(function (taskValue) {
        return window.products.push(taskValue.data())
    })
    // console.log(window.products)
    web.getAllProducts(window.products)
})

// fetch data form user subcollection carousel
firebase.firestore().collection("users").doc(id).collection("carousel").onSnapshot(function (snapshot) {
    window.carousels = []
    snapshot.forEach(function (taskValue) {
        return window.carousels.push(taskValue.data())
    })
    // console.log(window.carousels)
    web.getCarousels(window.carousels)
})

// fetch data form user subcollection videos
firebase.firestore().collection("users").doc(id).collection("videos").onSnapshot(function (snapshot) {
    window.videos = []
    snapshot.forEach(function (taskValue) {
        return window.videos.push(taskValue.data())
    })
    // console.log(window.videos)
    web.getGalleryVideos(window.videos)
})

// fetch data form user subcollection Gallery
firebase.firestore().collection("users").doc(id).collection("gallery").onSnapshot(function (snapshot) {
    window.gallery = []
    snapshot.forEach(function (taskValue) {
        return window.gallery.push(taskValue.data())
    })
    // console.log(window.gallery)
    web.getGalleryPhotos(window.gallery)
})

