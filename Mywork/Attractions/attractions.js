

function Getdata(e){
    let search = document.getElementById('search').value

    e.preventDefault()
    if(search == 'london'){
        window.location.href = './london.html'

    }
}

// document.getElementById('searchbutton').addEventListener('click',Getdata)

let country = document.getElementById('CountrySection')



let but = document.getElementById('buttonselected')

let europe = document.getElementById('E')
let northAmerica = document.getElementById('NA')

but.addEventListener("click", doSomething)
function doSomething(e){
    if(e.target.id == "E"){

        europe.addEventListener('click',Europe)
    }else if(e.target.id == "NA"){
        northAmerica.addEventListener('click',North)
        
    }
}
let Europesection = document.getElementById("EuropeSection")

let middleEast = document.getElementById('ME')
middleEast.addEventListener('click',MiddleEast)

let asia = document.getElementById('AS')
asia.addEventListener('click',Asia)


let africa = document.getElementById('AF')
africa.addEventListener('click',Africa)


let oceania = document.getElementById('OC')
oceania.addEventListener('click',Oceania)


let NA = document.getElementById('NorthAmerica')

function Europe(){
    europe.style.color = '#0071c2';
    europe.style.borderBottomColor='#0071c2'

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
    let urls7 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/643467.jpg?k=e1c10285c4e9876a0abec394a7eab1b8ceb992e7a0924a7e3a256a77770d61d7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/683184.jpg?k=eafb7fbf8bba67da18b90b7489bc50ad1f567fa583a15814646c6102870381cb&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619997.jpg?k=e0aea3348bc3fd665f299b4e16bb8c9fb8ea891108eb6085657cfdea1348f0e8&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619610.jpg?k=2bf9c735c9043dec9b46a9bc3a1c935ad586f2cb3b98a8c9daea14c913b65208&o="]
    let card_values7 = ["Turin 12 things to do","Munich 6 things to do","Moscow 32 things to do","Florence 30 things to do",]

    for(let i = 0 ; i < urls7.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls7[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd7')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values7[i].split(' ')
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
    
    let urls8 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/972659.jpg?k=f3bd66938512eed5aabf5d1a9be70ab2d98abead8819cbc59824005b13f89797&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685827.jpg?k=498ad7d3e5e66ea6bf2e06943aab31766bc4a1f062b24663c56d4b0239c54ea7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/620021.jpg?k=776dbebc2062c79634a50b92e7193ee4912f954814f41636e1ab611e3e95d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619907.jpg?k=7b2b5a78dab7091bcab790a48cd277f8b315da70298c25225052bf799701beda&o="]
    let card_values8 = ["Bologna 22 things to do","Gothenburg 9 things to do","SaintPetersburg 18 things to do","Budapest 12 things to do",]

    for(let i = 0 ; i < urls8.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls8[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd8')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values8[i].split(' ')
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

    let urls9 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/645293.jpg?k=b090f6e102074071fb4aa34b1f50c6a7880be4d88d4107bef386affd18ce4ff9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/681782.jpg?k=84a032e77cbf78c7f4696187dacfef96ba685a75f22689bbbf4948f1fc1225fb&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204076.jpg?k=b0eb04ff512e2e41e6cc1718c0478f009cff711e071b95dbd0486c77a380b672&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/973065.jpg?k=ab386c026860ec2fe48136a2e02fd41dbf066baf03a3209b5a7286bac67760ca&o="]
    let card_values9 = ["Granada 4 things to do","Marseille 10 things to do","Prague 25 things to do","Verona 7 things to do",]

    for(let i = 0 ; i < urls9.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls9[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd9')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values9[i].split(' ')
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
    let urls10 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/638122.jpg?k=41ed740d0b386667d49dd8708c05a710a7c3508cfd4eb805efb730e560b1bd02&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/684041.jpg?k=d8aa0e4b832729340fa4c3bb5ca47e19f13e27a50d9959d2f49d43a6142c433d&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644322.jpg?k=6ad9d7fa32c440f2a89db9bc4eed2dd77fa6386c4a0d3237a400b6408d2b66c5&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/646075.jpg?k=522f19a6584920b8ae463823a0770f4f48d2a19938480e29e1df8734d79573d0&o="]
    let card_values10 = ["Ljubljana 57 things to do","Innsbruck 8 things to do","Tromso 4 things to do","Valencia 8 things to do",]

    for(let i = 0 ; i < urls10.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls10[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd10')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values10[i].split(' ')
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
    let urls11 =["https://q-xx.bstatic.com/xdata/images/city/720x405/969980.jpg?k=b294e7fc8e917a500cbdbb196783675213e0983e4900b873f43895c54373ff67&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641623.jpg?k=3e33dad8ccb7d533e6484612cc445310b9e6da3946d7d152bd76de11af18eb22&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641314.jpg?k=22caea1896c301b1616b160f4ce20989a09a582d2684cd307c1aaf7cae10ae05&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/642086.jpg?k=935f5fd0b5f441cf137bfd222af9bcc80c6ab13463ddf227072679a10a35c5fb&o=" ]
    let card_values11 = ["TheHague 17 things to do","Pompei 47 things to do","Pisa 9 things to do","Sorrento 46 things to do",]

    for(let i = 0 ; i < urls11.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls11[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd11')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values11[i].split(' ')
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
    let urls12 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/688281.jpg?k=2b0e3bfff81f04899bce25e7e7d3d5aa3900c81c756b8b64e326ee833f9d6cfd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641188.jpg?k=0000ce4e3e7723b03a4823b9823917e05ab87d0074bd4ad44cf2d79cfaab6877&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644320.jpg?k=b1413a2d6100603b6feaa0739be29e86af6225530b18525699209107f12945c1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972771.jpg?k=ed0e30e9a93b392f165c056ed75a9dcec1820167575aa4fe3825a380c446b775&o="]
    let card_values12 = ["Copenhagen 27 things to do","Palemo 14 things to do","Oslo 11 things to do","Zadar 6 things to do",]

    for(let i = 0 ; i < urls12.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls12[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd12')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values12[i].split(' ')
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
    let urls13 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/656162.jpg?k=e554d074a94156a14220f7a89cf7c27d9f9f0e66aad27d720d066a70eec01e46&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/639300.jpg?k=7161c509c7a38237190cc1155494476a0a59bb65a637b275551a96ca311fe9fd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/638627.jpg?k=3c805126c47e56e2f2e29edf163f0269e210c7c4b5d8962953c860bf533b94b2&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/687763.jpg?k=2f35ffdb74ef75412a42ea2e3847e5870d78b23d62a2d2e2f6ccfb535ce4381c&o="]
    let card_values13 = ["Bratislava 9 things to do","Zagreb 12 things to do","Split 7 things to do","Tallin 11 things to do",]

    for(let i = 0 ; i < urls13.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls13[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd13')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values13[i].split(' ')
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
    let urls14 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/640997.jpg?k=abb891ea80e29e4cec19d75909c6e5b95ad419875f24e98ffe0efef56df67010&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/671737.jpg?k=55162c051613087e79819420e554c16f057de72d68ad002b154702c23a10979a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/681839.jpg?k=171bef15800abb68fa42ce891c752e19a8836b5448476e68743bcc1c2a8f20f1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/674848.jpg?k=43bedc332acfb71ce9bef581e66074a3ffdec42fe4ba25c27b97aa9ff13a32ff&o="]
    let card_values14 = ["Modena 22 things to do","Stavanger 6 things to do","Nice 32 things to do","Helsinki 22 things to do",]

    for(let i = 0 ; i < urls14.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls14[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd14')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values14[i].split(' ')
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

    let urls15 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203844.jpg?k=ac13b56ed122f9105ca861ba3045f55ed0f61c1d2732b382dcacf631f15e3166&o=","https://q-xx.bstatic.com/xdata/images/country/1680x560/85.jpg?k=b6ed58da55452ccf0c979cc0df75ce57c6dd985d58abcc6beb4efa2187b2b235&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/740873.jpg?k=d02ad03fe6e35d5443b218bdac26b7501f7c698a158a976a454368dacd67f4fd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/350631.jpg?k=31b2463ac5df0ec4181d68cabbd35f1a1765c2b7f2bed44f51bde3b80b1722e9&o="]
    let card_values15 = ["Edinburgh 10 things to do","Girona 4 things to do","Koper 28 things to do","SanSebastian 14 things to do",]

    for(let i = 0 ; i < urls15.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls15[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd15')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values15[i].split(' ')
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

    let urls16 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972064.jpg?k=39ff2ed8a135b1a557a19306fbc4cc4bd99943077a33ea6e7882717e1e755e32&o="]
    
    let card_values16 = ["London 43 things to do","Istanbul 40 things to do","Paris 40 things to do","Hamburg 11 things to do",]
    for(let i = 0 ; i < urls16.length ; i++){
       
            let div = document.createElement('div')
            let img = document.createElement('img') 
            img.src = urls16[i]
            img.setAttribute('id','images');
            div.setAttribute('class','img-hover-zoom');
            let details = document.getElementById('pd16');
            
            let header = document.createElement('header');
            header.setAttribute('class','card_header');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
    
            h3.setAttribute('class', 'card_title')
            
            p.setAttribute('class', 'card_subtitle')

            let input = card_values16[i].split(' ')
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
     

    let urls17 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/71365537.jpg?k=aab55a712d088602738a94f84e75bcf9954b5b6208343eef1e9f2f2a2a75b75e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619974.jpg?k=b6559eee3541cbeacc14fff159a46ca264a30730fb15513890df598efb61081c&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203988.jpg?k=28ea5ce3cfe20aa8732059ec8cadede64c0964848fc0f436594ba04c4939d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971378.jpg?k=7507de5787351052371d9e50901685a0092dc34bab445d780b5a2a550cc5f3e0&o="]  ;

    let card_values17 = ["Amsterdam 56 things to do","Lisbon 51 things to do","Rome 122 things to do","Athens 22 things to do",]
    
    for(let i = 0 ; i < urls17.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls17[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd17')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values17[i].split(' ')
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
    let urls18 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204120.jpg?k=111c39b79aac9a364b9a993a86890d94abdb83916c15422c95151fa8b2391273&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203920.jpg?k=3ac5c879aed7f63f8cdd5cff59e76ff9c4335c86b783aa6a32e2d3ecdc6a7fe9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/626995.jpg?k=087d41cf908392f99bd914423fa81ee1ff0e3e88e18ff17a34521c805c82870b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645589.jpg?k=966c120cc17cdf382b41d151722a0e59d1714702388eb581601dd9593fe5d342&o="]
    let card_values18 = ["Berlin 31 things to do","Barcelona 89 things to do","Venice 12 things to do","Malaga 14 things to do",]

    for(let i = 0 ; i < urls18.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls18[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd18')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values18[i].split(' ')
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
    let urls19 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203757.jpg?k=9bf4f4950e983ccc08599179cfd5b00ca5f0f0926c31791b6fdcaf5c98b157da&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971987.jpg?k=c736a27ad6f01169148fe12d17f05cebf5a243860f9ab9380c246128a2c4e363&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685809.jpg?k=1118febd1a6bed4b02742c8b4d8530a83d4ed8decd8dcde4cb035e2a3e017a93&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971357.jpg?k=561ae098e12302581c5aac611ecba9def5cd9bcc78bfc9107b8ce2b531be815c&o="]
    let card_values19 = ["Vienna 21 things to do","Porto 21 things to do","Stockholm 15 things to do","Madrid 49 things to do",]

    for(let i = 0 ; i < urls19.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls19[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd19')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values19[i].split(' ')
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
    let urls20 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685101.jpg?k=eb80793d434f68f0c0452ccb5f209f07a0c85c08f4eb34c4cd902bd778cbe032&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645977.jpg?k=1ac5843d13fef9ab4cf21023e44bfde605ae2f0b300ef224b8e6450add37facf&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/652936.jpg?k=0b538b33c5e820da97199de6190c3f4d2aa56dcb7c0861777a563ab8efdb14e7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641107.jpg?k=3dd2586188d5ec6709d3b7c13ef93a08a5c79b966ab450b0355360b585199d8c&o="]
    let card_values20 = ["Armacaodepera 34 things to do","Seville 47 things to do","Krackow 33 things to do","Naples 46 things to do",]

    for(let i = 0 ; i < urls20.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls20[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd20')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values20[i].split(' ')
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



function North(){
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





function Asia(){

    asia.style.color = "#0071c2"
    let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685560.jpg?k=f21648aa2f4e412c9950c9d683deb21dd7e69fecdcd1bf6717d4d5fa8520dc7e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688058.jpg?k=cfccb18a3a547d883cdce149ec955392ea4e4ad5bef313d70322e788956f7549&o=","https://q-xx.bstatic.com/xdata/images/country/1680x560/85.jpg?k=b6ed58da55452ccf0c979cc0df75ce57c6dd985d58abcc6beb4efa2187b2b235&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/664686.jpg?k=b97d7cae11fb6a494b16c656fe8350be53363382a1ff91d350b9bd047eccf689&o="]
       
    let card_values1 = ["KualaLumpur 4 things to do","Jakarta 13 things to do","Balian 9 things to do","SiemReap 7 things to do",]
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
     
   
    let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/620039.jpg?k=2382747eb502e907930246aa3225de83a7ab9d3dc9821c9b27feec09e8cd77fa&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688194.jpg?k=32095065be0a75b3b1e868b31766d89e748c6070025d215400ca8a2c89609541&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688876.jpg?k=01ff1efe767df1d042647ab8ec14a6df69c2a87fe7a843f4c3b17010fe9cd02d&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688673.jpg?k=c1e9cdd5a6bc7ae6475ae8a47cc7ecb1bf3ff08a316cfbc3b6dfec01e5a5166f&o="]  ;
   
    let card_values2 = ["Bangkok 10 things to do","Yogyakarta 14 things to do","HoiAn 6 things to do","ChiangMai 5 things to do",]
    
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
   }








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









function Oceania(){

    oceania.style.color = "#0071c2"
 let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/971406.jpg?k=b2f2045c0da2dbe4f94fcb0619a3ce00f002ad4e8eea927adfa404a3b1b04b7a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682193.jpg?k=98c95f614e901f685c378016a7cec05b198f23452928ddc27dd03354ea8d2706&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682568.jpg?k=9a30be5fc1531b4e26b451c4a03d782455f4583fc12ba0b925517007620f3082&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/967882.jpg?k=1973e7c47ac58d7adf6f43add201283189fe3509fdd527bd2406e628e017c0db&o="]
    
 let card_values1 = ["GoldCoast 16 things to do","Cairms 6 things to do","Sydney 6 things to do","Melbourne  things to do",]
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
  

 let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/682186.jpg?k=c44d0765b9982235a22c5ad4795aae57ac0055f8ac4e41e062b5f2b93cf5429c&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682260.jpg?k=fb4a02025eb11ec3bdd8617b35258434926cec9dee9a9439ea5cb661f458dd72&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682138.jpg?k=6c1332617fa37b5cf30710f56f98929f8cb0f522b80517fb9cdc6d914d41f804&o="]  ;

 let card_values2 = ["Adelaide 13 things to do","Perth 4 things to do","Auckland 8 things to do","ChiangMai 5 things to do",]
 
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
}


