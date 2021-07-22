const url = "https://developerfunnel.herokuapp.com/location";

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            // create option tag <option></option>
            var element = document.createElement('option');
            // get the text 'delhi'
            var text = document.createTextNode(item.city_name)
            // add text to option tag  <option>Delhi</option>
            element.appendChild(text)
            // add value to option  <option value='1'>Delhi</option>
            element.value = item._id
            //add element to select option
            /* <select>
                     <option>Delhi</option>
                </select>
            */
           document.getElementById('city').appendChild(element)
        })
    })
}


const getHotel = () => {
    var cityId = document.getElementById('city').value;
    var hotels = document.getElementById('hotels');
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`https://developerfunnel.herokuapp.com/hotels?city=${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(`${item.name}|${item.locality}`)
            element.appendChild(text)
            hotels.appendChild(element)
        })
    })
}