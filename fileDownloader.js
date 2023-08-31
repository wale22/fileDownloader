let btn=document.querySelector('button')
let input =document.querySelector('input')


btn.addEventListener('click',()=>{
    let val = input.value 
    fetch(val).then(res=>res.blob()).then(blob=>{
        let url = URL.createObjectURL(blob)
        let atag= document.createElement('a')
        atag.href=url
        atag.download=val.replace(/^.*[\\\/]/, '')
        document.body.appendChild(atag)
        atag.click()     
        atag.remove()
    }).catch(()=>{
        alert('unable to download file')
    })
})