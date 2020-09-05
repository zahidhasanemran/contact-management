let contact, singleContact, contact_img_wrapper, contact_img, contact_info_wrapper, namee, country, number, search;

let contacts = [
    {country: "Bangladesh",img: "./assets/image/1.jpg",name: "Abdullah Emran", number: "015874922"},
    {country: "Canada",img: "./assets/image/2.jpg",name: "Rabeya", number: "85475258"},
    {country: "Africa",img: "./assets/image/3.jpg",name: "Ayesha", number: "854588814"},
];

contact = document.querySelector(".contact"),
singleContact = document.querySelector(".single_contact"),
contact_img_wrapper = document.querySelector('.contact_img'),
contact_img = document.querySelector('.c_img'),
contact_info_wrapper = document.querySelector('.contact_info'),
namee = document.querySelector('.name').innerText,
country = document.querySelector('.country').innerText,
number = document.querySelector('.number').innerText;
search = document.getElementById('search');


function dataLoad(datas) {
    let conta = datas.map((con,index) => {
        // console.log(con.country);
        return `<div class="single_contact" id="si_${index}">
        <div class="contact_img">
            <img class="c_img" src="${con.img}" alt="">
        </div>
        <div class="contact_info">
            <h5 class="name">${con.name}</h5>
            <p class="country">${con.country}</p>
            <p class="number"><strong>${con.number}</strong></p>
        </div>
    </div>`;
    })
    
    contact.innerHTML = conta;
}
dataLoad(contacts);


search.addEventListener("keyup", function(){
    let keyword = search.value;
    console.log(keyword);
    let fil = contacts.filter((con) => {
        let nam =  new Set(con.name.toLowerCase().split(""));
        console.log(nam);
        if(nam.has(keyword) || con.name.toLowerCase() == keyword.toLowerCase() ){
            return con;
        }
    });
    keyword ? dataLoad(fil) : dataLoad(contacts);
})


// console.log(contact, singleContact, contact_img_wrapper, contact_img, contact_info_wrapper, namee, country, number);

// let sContact = {
//     name: namee,
//     img: contact_img.attributes.src.value,
//     number: number,
//     country: country
// }

// contacts.push(sContact)

// console.log(sContact);

// console.log(contacts);