let northAmerica = document.getElementById('NA')
northAmerica.addEventListener('click',North)
let Es = document.getElementById('EuropeSection')
function North(){
    Es.innerHTML = ''
    northAmerica.style.color = '#0071c2';
    northAmerica.style.borderBottomColor='#0071c2'

    let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/856744.jpg?k=8e88f1d59ccc1b8e88bfdacac7c4b59fb1c3402a6a1aae8e3f43a50beae1bee9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/349730.jpg?k=1682bc9fb350fe5b1a79e8a12946edc27374fd0ad711f8730747c5af8fa0e9f1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689611.jpg?k=fd3461d7228fb7154a9bdf78fd3f4c73c2bed5039c8ed25f0e92dbc17c713f12&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689380.jpg?k=e15e4f2427e10bf430a027bf93b5aed0913dd06f82c886292f937f8db226b2a0&o="]
    
    let card_values1 = ["NewYork 30 things to do","LasVegas 61 things to do","KeyWest 12 things to do","SanDiego 5 things to do",]
    for(let i = 0 ; i < urls1.length ; i++){
       
            let div = document.createElement('div')
            let img = document.createElement('img') 
            img.src = urls1[i]
            img.setAttribute('id','images');
            div.setAttribute('class','img-hover-zoom');
            let details = document.getElementById('pd1');
            
            let header = document.createElement('header');
            header.setAttribute('class','card_header');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
    
            h3.setAttribute('class', 'card_title')
            
            p.setAttribute('class', 'card_subtitle')

            let input = card_values1[i].split(' ')
            let county = input[0]
            let secondstr = ''
            for(let j = 1 ; j <= 4 ; j++){
                secondstr += input[j]+' '
            }
            h3.innerHTML = county;
            p.innerHTML = secondstr
            header.append(h3,p)
            div.append(img,header)
            details.append(div)
        } 
     

    let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/689595.jpg?k=66491bf6461716a3a2fa3229b7870d68ed5774b387df269ed5502452b1f00950&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972687.jpg?k=2bd248c0feee859c13709ba7409a2dc9e8e0ef615d2674dc5c1d42cff8a79744&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/620112.jpg?k=4783925a4e7befc535e70c48ad3b5fa9f6943b873414f3b8a889b8c1933d5da6&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689807.jpg?k=5e6553c46af3a9fc7904db903ee21dd595cb6039e9448ccf6b1e36fdc72553bf&o="]  ;

    let card_values2 = ["Miami 18 things to do","New Orleans 12 things to do","Orlando 23 things to do","Boston 4 things to do",]
    
    for(let i = 0 ; i < urls2.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls2[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd2')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values2[i].split(' ')
        let county = input[0]
        let secondstr = ''
        for(let j = 1 ; j <= 4 ; j++){
            secondstr += input[j]+' '
        }
        h3.innerHTML = county;
        p.innerHTML = secondstr
        header.append(h3,p)
        div.append(img,header)
        details.append(div)

        
    }    
    let urls3 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/689415.jpg?k=088ca4b6b3bb3c5ce681f328627db3289fc671dd47a851ea6fded39bff01a3ad&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/653291.jpg?k=4c1b15e11a80bbdf5459cacf4668679c25c676be9729483b4c0c3164da1643f1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689226.jpg?k=9c2b1d23c0890973ed48244a3d3ce1914ea1a292e1513f4e95ac8f5b5a5c007b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689541.jpg?k=2b21ebf3961203c96f51c03ac67058e55ed2b9ac41c00ad6a5cb00461e69886f&o="]
    let card_values3 = ["SanFrancisco 12 things to do","Vancouver 5 things to do","Phoenix 5 things to do","FortLauderdale 5 things to do"]

    for(let i = 0 ; i < urls3.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls3[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd3')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values3[i].split(' ')
        let county = input[0]
        let secondstr = ''
        for(let j = 1 ; j <= 4 ; j++){
            secondstr += input[j]+' '
        }
        h3.innerHTML = county;
        p.innerHTML = secondstr
        header.append(h3,p)
        div.append(img,header)
        details.append(div)
    }
    let urls4 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/620045.jpg?k=cefbedaa88e5d90ccb295bcdabe36939e7b82509dc75ed5541fb67bc7fa47504&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682566.jpg?k=7b013ecf3ba8ad26ed1a66680eb1ac41df934d7a4145652c034c5c57d11e5d25&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682799.jpg?k=8253b5e9434eaf9e82565f27f7ce1ba5a60c1d64ff8965904ec5dbce0fe14c75&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/689661.jpg?k=fe01188e46fb0c47739ee638d5578989dcabb80639f5117bf6c28fb871322eaa&o="]
    let card_values4 = ["LosAngeles 9 things to do","Cancun 13 things to do","Tulum 7 things to do","ST.Augustine 6 things to do",]

    for(let i = 0 ; i < urls4.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls4[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd4')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values4[i].split(' ')
        let county = input[0]
        let secondstr = ''
        for(let j = 1 ; j <= 4 ; j++){
            secondstr += input[j]+' '
        }
        h3.innerHTML = county;
        p.innerHTML = secondstr
        header.append(h3,p)
        div.append(img,header)
        details.append(div)
    }
    let urls5 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/689218.jpg?k=34b2e4e22c3f126dca249a5111d21dd3f3bd44b5c671a97f42c31acf7cf2d4f6&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/690130.jpg?k=2cb077e0b1f555429e1dbf720deaada304a6521b3408e811193e70339b213a16&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/690212.jpg?k=f65a0d12ea6938e9bc0ab8ada240c67dc50f342c42e5485e3b182005186fdd14&o="]
    let card_values5 = ["Sedona 11 things to do","Portland 5 things to do","Philadelphia 4 things to do"]

    for(let i = 0 ; i < urls5.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls5[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd5')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values5[i].split(' ')
        let county = input[0]
        let secondstr = ''
        for(let j = 1 ; j <= 4 ; j++){
            secondstr += input[j]+' '
        }
        h3.innerHTML = county;
        p.innerHTML = secondstr
        header.append(h3,p)
        div.append(img,header)
        details.append(div)
    }
}