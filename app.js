const url ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key="
const url1="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key="
const url2="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=200&api_key="
const url3="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
const api_key= config.NASA_API_KEY

const fetchNASAData = async() =>{
    try{
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log("NASA APOD Data", data)
        let cleanData = Object.values(data.photos)
        console.log(cleanData)
        displayData(cleanData)
        console.log(cleanData.length)
       } 
       catch(error) {
        console.log(error)
    }
}
fetchNASAData()

    let displayData = cleanData =>{
        
           
        let random_number = Math.floor(Math.random() * 2500);
        console.log(random_number);
            
        document.getElementById("title").innerHTML = "My name is"+" "+cleanData[random_number].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData[random_number].rover.status
        document.getElementById("date").innerHTML = "Date on Earth:"+" "+cleanData[random_number].earth_date
        document.getElementById("picture").src = cleanData[random_number].img_src
        document.getElementById("explanation").innerHTML = "This image was shot by my"+" "+cleanData[random_number].camera.full_name
        document.getElementById("button").addEventListener("click", function (e) {
            let target = e.target;
            target.classList.toggle("buttonB");
        }, false);
        
    } 

    const fetchNASAData1 = async() =>{
        try{
            const response = await fetch(`${url1}${api_key}`)
            const data1 = await response.json()
            console.log("NASA APOD Data", data1)
            let cleanData1 = Object.values(data1.photos)
            console.log(cleanData1)
            displayData1(cleanData1)
            console.log(cleanData1.length)
           } 
           catch(error) {
            console.log(error)
        }
    }
    fetchNASAData1()
    
        let displayData1 = cleanData1 =>{
            
               
            let random_number1 = Math.floor(Math.random() * 100);
            console.log(random_number1);
                
            document.getElementById("title1").innerHTML = "My name is"+" "+cleanData1[random_number1].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData1[random_number1].rover.status
            document.getElementById("date1").innerHTML = "Date on Earth:"+" "+cleanData1[random_number1].earth_date
            document.getElementById("picture1").src = cleanData1[random_number1].img_src
            document.getElementById("explanation1").innerHTML = "I took this picture with my"+" "+cleanData1[random_number1].camera.full_name
            document.getElementById("button1").addEventListener("click", function (e) {
                let target = e.target;
                target.classList.toggle("buttonB");
            }, false);
            
        }     

        const fetchNASAData2 = async() =>{
        try{
            const response = await fetch(`${url2}${api_key}`)
            const data2 = await response.json()
            console.log("NASA APOD Data", data2)
            let cleanData2 = Object.values(data2.photos)
            console.log(cleanData2)
            displayData2(cleanData2)
            console.log(cleanData2.length)
           } 
           catch(error) {
            console.log(error)
        }
    }
    fetchNASAData2()
    
        let displayData2 = cleanData2 =>{
            
               
            let random_number2 = Math.floor(Math.random() * 85);
            console.log(random_number2);
                
            document.getElementById("title2").innerHTML = "My name is"+" "+cleanData2[random_number2].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData2[random_number2].rover.status
            document.getElementById("date2").innerHTML = "Date on Earth:"+" "+cleanData2[random_number2].earth_date
            document.getElementById("picture2").src = cleanData2[random_number2].img_src
            document.getElementById("explanation2").innerHTML = "Here, I'm using my"+" "+cleanData2[random_number2].camera.full_name+" "+"to take this picture."
            document.getElementById("button2").addEventListener("click", function (e) {
                let target = e.target;
                target.classList.toggle("buttonB");
            }, false);
            
        }

    const fetchNASAData3 = async() =>{
        try{
            const response = await fetch(`${url2}${api_key}`)
            const data3 = await response.json()
            console.log("NASA APOD Data", data3)
            let cleanData3 = Object.values(data3.photos)
            console.log(cleanData3)
            displayData3(cleanData3)
            console.log(cleanData3.length)
            } 
            catch(error) {
            console.log(error)
        }
    }
    fetchNASAData3()
    
        let displayData3 = cleanData3 =>{
            
                
            let random_number3 = Math.floor(Math.random() * 85);
            console.log(random_number3);
                
            document.getElementById("title3").innerHTML = "My name is"+" "+cleanData3[random_number3].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData3[random_number3].rover.status
            document.getElementById("date3").innerHTML = "Date on Earth:"+" "+cleanData3[random_number3].earth_date
            document.getElementById("picture3").src = cleanData3[random_number3].img_src
            document.getElementById("explanation3").innerHTML = "This image is coming from my"+" "+cleanData3[random_number3].camera.full_name
            document.getElementById("button3").addEventListener("click", function (e) {
                let target = e.target;
                target.classList.toggle("buttonB");
            }, false);
            
        }
        
        const fetchNASAData4 = async() =>{
            try{
                const response = await fetch(`${url3}${api_key}`)
                const data4 = await response.json()
                console.log("NASA APOD Data", data4)
                let cleanData4 = Object.values(data4.photos)
                console.log(cleanData4)
                displayData4(cleanData4)
                console.log(cleanData4.length)
                } 
                catch(error) {
                console.log(error)
            }
        }
        fetchNASAData4()
        
            let displayData4 = cleanData4 =>{
                
                    
                let random_number4 = Math.floor(Math.random() * 850);
                console.log(random_number4);
                    
                document.getElementById("title4").innerHTML = "My name is"+" "+cleanData4[random_number4].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData4[random_number4].rover.status
                document.getElementById("date4").innerHTML = "Date on Earth:"+" "+cleanData4[random_number4].earth_date
                document.getElementById("picture4").src = cleanData4[random_number4].img_src
                document.getElementById("explanation4").innerHTML = "This is the view from my"+" "+cleanData4[random_number4].camera.full_name
                document.getElementById("button4").addEventListener("click", function (e) {
                    let target = e.target;
                    target.classList.toggle("buttonB");
                }, false);
                
            }

        const fetchNASAData5 = async() =>{
            try{
                const response = await fetch(`${url}${api_key}`)
                const data5 = await response.json()
                console.log("NASA APOD Data", data5)
                let cleanData5 = Object.values(data5.photos)
                console.log(cleanData5)
                displayData5(cleanData5)
                console.log(cleanData5.length)
                } 
                catch(error) {
                console.log(error)
            }
        }
        fetchNASAData5()
        
            let displayData5 = cleanData5 =>{
                
                    
                let random_number5 = Math.floor(Math.random() * 40);
                console.log(random_number5);
                    
                document.getElementById("title5").innerHTML = "My name is"+" "+cleanData5[random_number5].rover.name+"."+"<br>"+"My status on the day this picture was taken:"+cleanData5[random_number5].rover.status
                document.getElementById("date5").innerHTML = "Date on Earth:"+" "+cleanData5[random_number5].earth_date
                document.getElementById("picture5").src = cleanData5[random_number5].img_src
                document.getElementById("explanation5").innerHTML = "Look what I caught with my"+" "+cleanData5[random_number5].camera.full_name
                document.getElementById("button5").addEventListener("click", function (e) {
                    let target = e.target;
                    target.classList.toggle("buttonB");
                }, false);                
            }         
    
// fetchNASAData()