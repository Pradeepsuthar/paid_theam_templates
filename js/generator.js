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

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

firebase.initializeApp(firebaseConfig);
//var id = "Yg0jIjIqTpX1FEGpT6BDZskZ4iL2"
var id = findGetParameter("id")

function createMenuItem(name, link) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = link;
    a.textContent = name;
    li.appendChild(a)
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
var menuItems = [
    { key: "Home", value: "index.html?id=" + id },
    { key: "Services", value: "services.html?id=" + id },
    { key: "Photo Gallery", value: "gallery.html?id=" + id },
    { key: "Video Gallery", value: "video_gallery.html?id=" + id },
    { key: "Products", value: "products.html?id=" + id },
    { key: "About Us", value: "about.html?id=" + id },
    { key: "Contact Us", value: "contact.html?id=" + id },
];

for (var i = 0; i < menuItems.length; i++) {
    menu.appendChild(createMenuItem(menuItems[i].key, menuItems[i].value))
}

var today = new Date();

class GenerateWeb {
    getUserData(userData) {
        if (document.getElementById('brand_logo')) {
            var brand_logo = document.getElementById('brand_logo');
            brand_logo.src = userData.brand_logo;
        }
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
            document.getElementById('email').innerHTML = userData.email
            if (userData.socialMedia.facebook && userData.socialMedia.instagram && userData.socialMedia.linkedin && userData.socialMedia.youtube && userData.socialMedia.pinterest && userData.socialMedia.tiktok && userData.socialMedia.twitter) {
                // Facebook
                var facebook_li = document.createElement('li');
                facebook_li.className = document.getElementById('socialLink_li').className;
                var facebook_a = document.createElement('a');
                facebook_a.className = document.getElementById('socialLink_a').className;
                facebook_a.href = `https://${userData.socialMedia.facebook}`;
                var facebook_icon = document.createElement('i');
                facebook_icon.className = 'fa fa-facebook';
                facebook_a.appendChild(facebook_icon);
                facebook_li.appendChild(facebook_a);
                document.getElementById('socialLinks_ul').appendChild(facebook_li);
                // Instagram
                var instagram_li = document.createElement('li');
                instagram_li.className = document.getElementById('socialLink_li').className;
                var instagram_a = document.createElement('a');
                instagram_a.className = document.getElementById('socialLink_a').className;
                instagram_a.href = `https://${userData.socialMedia.instagram}`;
                var instagram_icon = document.createElement('i');
                instagram_icon.className = 'fa fa-instagram';
                instagram_a.appendChild(instagram_icon);
                instagram_li.appendChild(instagram_a);
                document.getElementById('socialLinks_ul').appendChild(instagram_li);
                // Linkedin
                var linkedin_li = document.createElement('li');
                linkedin_li.className = document.getElementById('socialLink_li').className;
                var linkedin_a = document.createElement('a');
                linkedin_a.className = document.getElementById('socialLink_a').className;
                linkedin_a.href = `https://${userData.socialMedia.linkedin}`;
                var linkedin_icon = document.createElement('i');
                linkedin_icon.className = 'fa fa-linkedin';
                linkedin_a.appendChild(linkedin_icon);
                linkedin_li.appendChild(linkedin_a);
                document.getElementById('socialLinks_ul').appendChild(linkedin_li);
                // YouTube
                var youtube_li = document.createElement('li');
                youtube_li.className = document.getElementById('socialLink_li').className;
                var youtube_a = document.createElement('a');
                youtube_a.className = document.getElementById('socialLink_a').className;
                youtube_a.href = `https://${userData.socialMedia.youtube}`;
                var youtube_icon = document.createElement('i');
                youtube_icon.className = 'fa fa-youtube';
                youtube_a.appendChild(youtube_icon);
                youtube_li.appendChild(youtube_a);
                document.getElementById('socialLinks_ul').appendChild(youtube_li);
                // Pinterest
                var pinterest_li = document.createElement('li');
                pinterest_li.className = document.getElementById('socialLink_li').className;
                var pinterest_a = document.createElement('a');
                pinterest_a.className = document.getElementById('socialLink_a').className;
                pinterest_a.href = `https://${userData.socialMedia.pinterest}`;
                var pinterest_icon = document.createElement('i');
                pinterest_icon.className = 'fa fa-pinterest';
                pinterest_a.appendChild(pinterest_icon);
                pinterest_li.appendChild(pinterest_a);
                document.getElementById('socialLinks_ul').appendChild(pinterest_li);
                // Tiktok
                var tiktok_li = document.createElement('li');
                tiktok_li.className = document.getElementById('socialLink_li').className;
                var tiktok_a = document.createElement('a');
                tiktok_a.className = document.getElementById('socialLink_a').className;
                tiktok_a.href = `https://${userData.socialMedia.tiktok}`;
                var tiktok_icon = document.createElement('i');
                tiktok_icon.className = 'fa fa-music';
                tiktok_a.appendChild(tiktok_icon);
                tiktok_li.appendChild(tiktok_a);
                document.getElementById('socialLinks_ul').appendChild(tiktok_li);
                // Twitter
                var twitter_li = document.createElement('li');
                twitter_li.className = document.getElementById('socialLink_li').className;
                var twitter_a = document.createElement('a');
                twitter_a.className = document.getElementById('socialLink_a').className;
                twitter_a.href = `https://${userData.socialMedia.twitter}`;
                var twitter_icon = document.createElement('i');
                twitter_icon.className = 'fa fa-twitter';
                twitter_a.appendChild(twitter_icon);
                twitter_li.appendChild(twitter_a);
                document.getElementById('socialLinks_ul').appendChild(twitter_li);
            } else {
                console.log("Social media not found")
            }
            if (document.getElementById('call_now')) {
                var call_now = document.getElementById('call_now');
                call_now.href = "tel:" + userData.phoneNo;
            }
            if (document.getElementById('whatsapp_now')) {
                var whatsapp_now = document.getElementById('whatsapp_now');
                whatsapp_now.href = "https://wa.me/" + userData.whatsappNo;
            }
            if (document.getElementById('shopName')) {
                var shopName = document.getElementById('shopName');
                shopName.innerHTML = userData.shopName + " " + today.getFullYear();
            }
        }
        if (document.getElementById('address')) {

            if (userData.address.area && userData.address.city && userData.address.state && userData.address.zipCode && userData.address.country) {
                document.getElementById('address').innerHTML = userData.address.area + ", " + userData.address.city + ", (" + userData.address.state + ") - " + userData.address.zipCode + " - " + userData.address.country;
            } else {
                document.getElementById('address_info').style = "display:none";
            }
        }
        if (document.getElementById('phone_call')) {
            if (userData.phoneNo && userData.whatsappNo) {
                document.getElementById('phone_call').innerHTML = userData.phoneNo;
                document.getElementById('whatsapp_call').innerHTML = userData.whatsappNo;
            } else {
                document.getElementById('call_info').style = "display:none";
            }
            if (userData.email) {
                document.getElementById('mess_with_email').innerHTML = userData.email;
            } else {
                document.getElementById('message_info').style = "display:none";
            }
        }

    }

    getServices(serviceData) {
        if (document.getElementById("ourServices")) {
            if (serviceData) {
                let html = "";
                serviceData.forEach(function (siteTemplateData, i) {
                    html += ` 
                    <!-- ${siteTemplateData['title']} -->
                    <li class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ser-img"> <img class="img-responsive" src="${siteTemplateData['imgUrl']}" alt="${siteTemplateData['title']}" max-height="300">
                            <!-- Head -->
                            <h6 id="service-title" class="bg-dark px-4">${siteTemplateData['title']}</h6>
                        
                        </div>
                        <!-- Detail -->
                        <div class="detail-in px-4">
                            <p class="module line-clamp w-100">${siteTemplateData['desc']}</p>
                            <a href="#." class="go-btn text-white"><i class="ion-ios-arrow-thin-right"></i></a>
                        </div>
                    </li>`;
                });
                if (serviceData.length != 0) {
                    document.getElementById("ourServices").innerHTML = html;
                } else {
                    nodeElm.innerHTML = ``;
                }
            }
        }
    }

    getAllProducts(products) {
        if (document.getElementById('available_products')) {
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
        }
    }

    getCarousels(slides) {
        if (document.getElementById('carousel')) {
            var carousel_container = document.getElementById('carousel');
            var li = document.createElement('li');
            function iterate(item) {
                if (slides) {
                    var att1 = document.createAttribute("data-transition");
                    att1.value = 'random';
                    var att2 = document.createAttribute("data-slotamount");
                    att2.value = '7';
                    var att3 = document.createAttribute("data-masterspeed");
                    att3.value = '300';
                    var att4 = document.createAttribute("data-saveperformance");
                    att4.value = 'off';
                    var att5 = document.createAttribute("data-thumb");
                    att5.value = `${item.imgUrl}`;
                    li.setAttributeNode(att1);
                    li.setAttributeNode(att2);
                    li.setAttributeNode(att3);
                    li.setAttributeNode(att4);
                    li.setAttributeNode(att5);
                    var img = document.createElement('img');
                    img.src = `${item.imgUrl}`;
                    var att6 = document.createAttribute("data-bgposition");
                    att6.value = 'center top';
                    var att7 = document.createAttribute("data-bgfit");
                    att7.value = 'cover';
                    var att8 = document.createAttribute("data-bgrepeat");
                    att8.value = 'no-repeat';
                    img.setAttributeNode(att6);
                    img.setAttributeNode(att7);
                    img.setAttributeNode(att8);
                    li.appendChild(img);
                }
            }
            carousel_container.appendChild(li);
            slides.forEach(iterate)
        }
    }

    getGalleryPhotos(photos) {
        function iterate(item) {
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
        function iterate(item) {
            if (document.getElementById('gallery_li')) {
                var li = document.createElement('li');
                li.className = document.getElementById('gallery_li').className;
                var video_iframe = document.createElement('iframe');
                video_iframe.src = "https://www.youtube.com/embed/" + item.youTubeLink.slice(17);
                // console.log(item.youTubeLink.slice(17))
                // https://www.youtube.com/embed/8gy49l1byvg
                video_iframe.width = "100%";
                video_iframe.height = "100%";
                var att1 = document.createAttribute("frameborder");
                att1.value = '0';
                var att2 = document.createAttribute('allow')
                att2.value = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                var att3 = document.createAttribute('allowfullscreen')
                video_iframe.setAttributeNode(att1);
                video_iframe.setAttributeNode(att2);
                video_iframe.setAttributeNode(att3);
                li.appendChild(video_iframe);
                document.getElementById('video_gallery_row').appendChild(li)
            }
        }
        videos.forEach(iterate)
    }
}

// Object of GenerateWeb class
var web = new GenerateWeb()

// fetch data form user collection
firebase.firestore().collection("users").doc(id).get().then(function (doc) {
    window.UsersDetails = doc.data()
    web.getUserData(UsersDetails)
})

// fetch data form user subcollection Service
firebase.firestore().collection("users").doc(id).collection("services").onSnapshot(function (snapshot) {
    window.Service = []
    snapshot.forEach(function (taskValue) {
        return window.Service.push(taskValue.data())
    })
    web.getServices(window.Service)
})

// fetch data form user subcollection Products
firebase.firestore().collection("users").doc(id).collection("products").onSnapshot(function (snapshot) {
    window.products = []
    snapshot.forEach(function (taskValue) {
        return window.products.push(taskValue.data())
    })
    web.getAllProducts(window.products)
})

// fetch data form user subcollection carousel
firebase.firestore().collection("users").doc(id).collection("carousel").onSnapshot(function (snapshot) {
    window.carousels = []
    snapshot.forEach(function (taskValue) {
        return window.carousels.push(taskValue.data())
    })
    web.getCarousels(window.carousels)
})

// fetch data form user subcollection videos
firebase.firestore().collection("users").doc(id).collection("videos").onSnapshot(function (snapshot) {
    window.videos = []
    snapshot.forEach(function (taskValue) {
        return window.videos.push(taskValue.data())
    })
    web.getGalleryVideos(window.videos)
})

// fetch data form user subcollection Gallery
firebase.firestore().collection("users").doc(id).collection("gallery").onSnapshot(function (snapshot) {
    window.gallery = []
    snapshot.forEach(function (taskValue) {
        return window.gallery.push(taskValue.data())
    })
    web.getGalleryPhotos(window.gallery)
})

