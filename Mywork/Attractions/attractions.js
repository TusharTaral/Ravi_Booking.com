

function Getdata(e){
    let search = document.getElementById('search').value

    e.preventDefault()
    if(search == 'london'){
        window.location.href = '/Attractions/london.html'

    }
}

document.getElementById('searchbutton').addEventListener('click',Getdata)
