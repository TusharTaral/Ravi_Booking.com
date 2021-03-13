let middleEast = document.getElementById('ME')
middleEast.addEventListener('click',MiddleEast)
function MiddleEast(){
    middleEast.style.color = '#0071c2';
    middleEast.style.borderBottomColor='#0071c2'

    let urls1 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/349044.jpg?k=eeb53144ff0177dabb100a1ae707a052509ee11c53bbaec84f8de9847e1a78e3&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/690896.jpg?k=a4b4b9214c36a73705db04b45c12e69a5a044c7e39bb9b0725d8bf70557f8e3c&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/664068.jpg?k=3c02e2a7be3d091d160ce6df71241bc662a78b09bfd5a30fd1e61ead72367469&o="]
    
    let card_values1 = ["DUbai 97 things to do","AbuDhabi 97 things to do","Jerusalem 30 things to do","Amman 9 things to do",]
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
     

    let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/654905.jpg?k=77c1977744c45383796dcc5373683baa8e28a191b3febb9cf6c918038ce2aff7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654898.jpg?k=db9d267ced21fd1e3818fdb6de18e791c828612c54262197ca89a5203c1c057b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654849.jpg?k=b1f39043b80dafdaaa7ae91c45d93e0610b6e30c23bc6607cf51a33b076baca6&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688587.jpg?k=79c3ebc14cf7f591352a47705ef34b0f23336c0aeda5e3694cd0ad33e64469d6&o="]  ;

    let card_values2 = ["Muscat 21 things to do","Doha 22 things to do","TelAviv 12 things to do","Jeddah 5 things to do",]
    
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
    let urls3 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/654934.jpg?k=68923ac181e4d41ec757c6bec5e33e38fb384e3a17b9ddb3188d1a56c8910754&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/664006.jpg?k=30bdd3178604275cc18405e504e92c78567c4e6a307b42979d9465b994a8f164&o="]
    let card_values3 = ["Salalah 4 things to do","Aqaba 10 things to do"]

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