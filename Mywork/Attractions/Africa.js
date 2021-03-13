let africa = document.getElementById('AF')
africa.addEventListener('click',Africa)


function Africa(){
    africa.style.color = '#0071c2';
    africa.style.borderBottomColor='#0071c2'

    let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/674552.jpg?k=d6b82405173e3e4fd614a5c11cbd4539375edf8f22550d260a941d050d60fac6&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/579743.jpg?k=4757ea973e597d2b1642c02c88ff31aa0b8366f5f118f0326f06ddd3cde8d87c&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/674558.jpg?k=0914a40c80396670eeb7c90a927e7dce37266b6f7dfa3a204d141223dd292752&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/674660.jpg?k=3c0ae7a875ccef7507a175d958fdd5dfd4b6fc632007164512244800a8de43ec&o="]
    
    let card_values1 = ["CapeTown 24 things to do","Marrakech 35 things to do","Durban 5 things to do","Johanesburg 12 things to do",]
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
     

    let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/635817.jpg?k=4d72265863d181e8fe2b987bcb0c057c888f9a712f6c5d523f28f28f501d2e6d&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/635824.jpg?k=49bd8dd633f681be6e7f06f044454a7a4a5e0e40a8cb1ebfcc331ef202a0a1f8&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/635838.jpg?k=a29c29a0f6a02a15913d1ef90437fcc9f85c9d106f9c907290fd0f23c3762498&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644370.jpg?k=1841f303e9bda7d0e316e0402af01ba0dcb2a08161bbb9ab5dabf50d6a33c139&o="]  ;

    let card_values2 = ["Casablanca 10 things to do","Agadir 9 things to do","Essaouira 5 things to do","Alexandra 6 things to do",]
    
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
    let urls3 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/644384.jpg?k=838b212563ff2ca74e66a10d4546636422f72234b753878283e10ebb67c38392&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644643.jpg?k=f16350941f4a015b0551a87f61c5c675509f2bf19499258a71f20845bcb86b6f&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/637118.jpg?k=6eaa091ec59f196f23a8921ea8fd264a92a77ba166dda20a22906b2ed017590a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644351.jpg?k=1cf0db07ccc853b019d811770ee3003d893b2e744154032e7b49dd0796643e2c&o="]
    let card_values3 = ["Cairo 7 things to do","SharmEISheikh 6 things to do","Fes 10 things to do","Hurghada 5 things to do"]

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
    
}