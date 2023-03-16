function openDropdown() {
    document.querySelector("#timeDP").classList.toggle("show");
}

let myArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm0AXv9uGZD7IQKGrI10kmGPXytkQxo_t_gWCJvbt6QFL9VcWHCBnLT3sF2OXrv6xme4&usqp=CAU",
]

// function handleSelectImage(id) {
//     myArr.forEach((i, idx) => {
//       let img = document.querySelector(`#avatar${idx}`)
//       img.classList.remove('avatarImageSelected')
//     })
//     let newselect = document.querySelector(`#avatar${id}`)
//     newselect.classList.add('avatarImageSelected')
// }


// let dropdown = document.querySelector('.dropAvatars')
// for (let i = 0; i < myArr.length; i++) {
//     let item = `<img id='avatar${i}' onclick='handleSelectImage(${i})' class='dropdown-item' src='${myArr[i]}' />`
//     // avatarImgList.push(item)
//     dropdown.innerHTML += item
// }

const handlePicker = (inputType, value) => {
    if (inputType == 'hour'){
        let input = document.querySelector('#hourInput')
        input.value= value
    }else if(inputType == 'min'){
        let input = document.querySelector('#minInput')
        input.value = value
    }else if (inputType == "dayNight"){
        let input = document.querySelector('#dayNightInput')
        input.value = value
    }
}