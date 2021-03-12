

function Getdata(e){
    let search = document.getElementById('search').value

    e.preventDefault()
    if(search == 'london'){
        window.location.href = '/Attractions/london.html'

    }
}

document.getElementById('searchbutton').addEventListener('click',Getdata)


let europe = document.getElementById('E')
let northAmerica = document.getElementById('NA')
let africa = document.getElementById('AF')
let middleEast = document.getElementById('ME')
let asia = document.getElementById('AS')
let oceania = document.getElementById('OC')

europe.addEventListener('click',Europe)
// northAmerica.addEventListener('click',North)
// africa.addEventListener('click',Africa)
// middleEast.addEventListener('click',MiddleEast)
// asia.addEventListener('click',Asia)
// oceania.addEventListener('click',Oceania)


function Europe(){
    // placesdetails.innerHTML = ''
    let urls1 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972064.jpg?k=39ff2ed8a135b1a557a19306fbc4cc4bd99943077a33ea6e7882717e1e755e32&o="]
    
    let card_values1 = ["London 43 things to do","Istanbul 40 things to do","Paris 40 things to do","Hamburg 11 things to do",]
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
     

    let urls2 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/71365537.jpg?k=aab55a712d088602738a94f84e75bcf9954b5b6208343eef1e9f2f2a2a75b75e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619974.jpg?k=b6559eee3541cbeacc14fff159a46ca264a30730fb15513890df598efb61081c&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203988.jpg?k=28ea5ce3cfe20aa8732059ec8cadede64c0964848fc0f436594ba04c4939d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971378.jpg?k=7507de5787351052371d9e50901685a0092dc34bab445d780b5a2a550cc5f3e0&o="]  ;

    let card_values2 = ["Amsterdam 56 things to do","Lisbon 51 things to do","Rome 122 things to do","Athens 22 things to do",]
    
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
    let urls3 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204120.jpg?k=111c39b79aac9a364b9a993a86890d94abdb83916c15422c95151fa8b2391273&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203920.jpg?k=3ac5c879aed7f63f8cdd5cff59e76ff9c4335c86b783aa6a32e2d3ecdc6a7fe9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/626995.jpg?k=087d41cf908392f99bd914423fa81ee1ff0e3e88e18ff17a34521c805c82870b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645589.jpg?k=966c120cc17cdf382b41d151722a0e59d1714702388eb581601dd9593fe5d342&o="]
    let card_values3 = ["Berlin 31 things to do","Barcelona 89 things to do","Venice 12 things to do","Malaga 14 things to do",]

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
    let urls4 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203757.jpg?k=9bf4f4950e983ccc08599179cfd5b00ca5f0f0926c31791b6fdcaf5c98b157da&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971987.jpg?k=c736a27ad6f01169148fe12d17f05cebf5a243860f9ab9380c246128a2c4e363&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685809.jpg?k=1118febd1a6bed4b02742c8b4d8530a83d4ed8decd8dcde4cb035e2a3e017a93&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971357.jpg?k=561ae098e12302581c5aac611ecba9def5cd9bcc78bfc9107b8ce2b531be815c&o="]
    let card_values4 = ["Vienna 21 things to do","Porto 21 things to do","Stockholm 15 things to do","Madrid 49 things to do",]

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
    let urls5 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685101.jpg?k=eb80793d434f68f0c0452ccb5f209f07a0c85c08f4eb34c4cd902bd778cbe032&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645977.jpg?k=1ac5843d13fef9ab4cf21023e44bfde605ae2f0b300ef224b8e6450add37facf&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/652936.jpg?k=0b538b33c5e820da97199de6190c3f4d2aa56dcb7c0861777a563ab8efdb14e7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641107.jpg?k=3dd2586188d5ec6709d3b7c13ef93a08a5c79b966ab450b0355360b585199d8c&o="]
    let card_values5 = ["Armacaodepera 34 things to do","Seville 47 things to do","Krackow 33 things to do","Naples 46 things to do",]

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

    let urls6 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/971917.jpg?k=406c9c3f74d5e31fba2576697aa4362d8306f101174886f0454cd782a1a5cd7a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619669.jpg?k=58e8d85cfb4d8b9523d826ab432d58aeaeacda1164105f1255035f89c4be3f75&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971588.jpg?k=8c5839d5d0b39677f328b4d15a6608d3492f6afaf0b18685901b9f1af03bf03b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/968424.jpg?k=a7359f656b6b3f0de06a521e30f0ae86dbde6fe2d4f4245c35e299e9c6dcf3b0&o="]
    let card_values6 = ["Cordoba 15 things to do","Milan 38 things to do","Faro 27 things to do","Liverpool 10 things to do",]

    for(let i = 0 ; i < urls6.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls6[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd6')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values6[i].split(' ')
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






