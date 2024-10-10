
// let url = new URLSearchParams(window.location.search)

// // if (url.get('lang') === 'ru') {
// //     document.getElementById('text').innerHTML = ''
// //     document.getElementById('text').innerHTML = 'Здравствуйте, как ваши дела'
// // }


// if (url.get('lang') === 'ru') {
//     document.querySelectorAll('p').forEach((item) => {
//         item.innerHTML = objRu[item.id]
//     })
// }
// else {
//     document.querySelectorAll('p').forEach((item) => {
//         item.innerHTML = objEng[item.id]
//     })
// }


// function changeUrl(url) {
//     let newUrl = `${window.location.pathname}?lang=${url}`
//     window.history.pushState({ path: newUrl }, "", newUrl)
// }



// goods.filer((item) => item.price > url.get('from') && item.price < url.get('to'))





let goods = [
    {
        product_name: "Kişi köynəyi",
        product_description: "Mavi rəngdə, 100% pamuk",
        product_price: 50,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın bluzası",
        product_description: "Dəri detallı, qara rəngdə",
        product_price: 60,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi pantolonu",
        product_description: "Qəhvəyi rəng, kənar cebi",
        product_price: 75,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın eteyi",
        product_description: "Qırmızı rəng, mini",
        product_price: 40,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi dəsmalı",
        product_description: "Nəqşdar dizayn",
        product_price: 20,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın çantası",
        product_description: "Əlgötürən, dəri",
        product_price: 90,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi botları",
        product_description: "Qış üçün, suya davamlı",
        product_price: 120,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın ayaqqabıları",
        product_description: "Yüksək tapan, lacivərt",
        product_price: 85,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi papağı",
        product_description: "Qara rəngdə, dəri",
        product_price: 45,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın şalvarı",
        product_description: "Göy rəngdə, kaşmir",
        product_price: 70,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Kişi palto",
        product_description: "Süət dəri, qara rəngdə",
        product_price: 250,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Qadın jaketi",
        product_description: "Uzun, qaşqır",
        product_price: 200,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Kişi kəməri",
        product_description: "Dəri, metal tokalı",
        product_price: 40,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Qadın badlonu",
        product_description: "Retro stil, qızıl rəngdə",
        product_price: 180,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Kişi şortu",
        product_description: "Spor stil, elastik",
        product_price: 60,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Qadın maykası",
        product_description: "Boyalı nəqş, pamuklu",
        product_price: 45,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Kişi saatı",
        product_description: "Qara rəngdə, analog",
        product_price: 150,
        store_name: "Zərif Moda",
        store_address: "Bakı şəhəri, 28 May kuçəsi 12",
    },
    {
        product_name: "Qadın bəzək",
        product_description: "Qızıl, komplekt",
        product_price: 220,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi atkısı",
        product_description: "Xəzəl rəng, uzun",
        product_price: 35,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın bantı",
        product_description: "Metal detallı, elastik",
        product_price: 50,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi kostyumu",
        product_description: "İki parçalı, qara rəngdə",
        product_price: 320,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın kombinezonu",
        product_description: "Yaz üçün, açıq rəng",
        product_price: 150,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi sviteri",
        product_description: "Düz rəng, yüngül",
        product_price: 70,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın ziyafət geyimi",
        product_description: "Düzənşən, yaz üçün",
        product_price: 95,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi sport formaları",
        product_description: "Spandex, idman üçün",
        product_price: 55,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın bikini",
        product_description: "Tropik nəqş, elastik",
        product_price: 45,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi çantası",
        product_description: "Dizayner, əsas bölməsi",
        product_price: 100,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın ətri",
        product_description: "Gül ətri, uzunömürlü",
        product_price: 80,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Kişi şalı",
        product_description: "Səliqəli, çoxrəngli",
        product_price: 25,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
    {
        product_name: "Qadın sutyeni",
        product_description: "Destəklənmiş, rahat",
        product_price: 65,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89",
    },
];




let ol = document.querySelector("ul");

const showList = (arr) => {
    ol.innerHTML = "";
    arr.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `<p>${item.product_name}</p> 
        <p>${item.product_description}</p> 
        <p>${item.product_price}</p> 
        <p>${item.store_name}</p> 
        <p>${item.store_address}</p>`;
        ol.appendChild(li);
    });
};

let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let btn = document.getElementById('go').addEventListener('click', () => {
    function changeUrl() {
        const newUrl = `${window.location.pathname}?from=${input1.value}&to=${input2.value}`
        window.history.pushState({ path: newUrl }, '', newUrl)
    }

    changeUrl()
    let url = new URLSearchParams(window.location.search);
    let filteredArr = goods.filter((item) =>
        item.product_price > +url.get('from') && item.product_price < +url.get('to')
    )

    showList(filteredArr);
})






let searchBtn = document.getElementById('searchBtn')
let inpSearch = document.getElementById('inpSearch')


searchBtn.addEventListener('click', () => {
    function changeUrl2() {
        const newUrl2 = `${window.localStorage.pathname}?from=${inpSearch.value}`
        window.history.pushState({ path: newUrl2 }, '', newUrl2)
    }
    changeUrl2()
    let url2 = new URLSearchParams(window.location.search);
    console.log(url2.get('from'));

    let searchArr = goods.filter((item) => item.product_name.includes(url2.get('from')))

    showList(searchArr);
})