//==Change BackGround Header
const scrollHeader=()=>{
    const header=document.getElementById("header")
    //เมื่อ scroll มากกว่า 50 vh , ให้เพิ่ม scroll-header class
    this.scrollY>=50 ? header.classList.add('scroll-header'):header.classList.remove('scroll-header')
} 

window.addEventListener('scroll',scrollHeader)
//==Swiper Product
let swiperProducts = new Swiper(".products_container", {
    spaceBetween:32, //Bug พิมผิด speace
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto', //Bug พิมผิด sildePerView
    loop:true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1024: {
        spaceBetween:72,
      },
    },
  });

//==SCROLL SECTIONS ACTIVE LINK //เวลาลงหน้าจอ
const sections = document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollY=window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop= current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')          
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==SHOW SCROLL UP */ //แสดง scroll up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						          : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*= DARK LIGHT THEME =*/ 
const themeButton = document.getElementById('theme-button') //เข้าถึงปุ่ม icon
const darkTheme = 'dark-theme' //ตัวแปรเก็บชื่อคลาส
const iconTheme = 'ri-sun-line' //ตัวแปรเก็บชื่อไอคอน Mode Light

// Previously selected topic (if user selected) //เก็บโหมดที่ผู้ใช้เลือกคงอยู่ไว้ใน localStorage (ที่เลือกแล้ว)
const selectedTheme = localStorage.getItem('selected-theme') //getItem ที่เลือกแล้วมาใช้งาน
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class //เราได้รับธีมปัจจุบันที่อินเทอร์เฟซมีโดยการตรวจสอบคลาสธีมมืด
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' //ตัวแปรเปลี่ยนโหมด
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line' //ตัวแปรเปลี่ยนไอคอน

// We validate if the user previously chose a topic //เราตรวจสอบว่าผู้ใช้เลือกหัวข้อก่อนหน้านี้หรือไม่
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark //หากการตรวจสอบเป็นไปตามที่กำหนด เราจะถามว่าปัญหาคืออะไรเพื่อทราบว่าเราเปิดใช้งานหรือปิดใช้งานระบบมืด
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) //ถ้าเป็น dark ให้ add ไม่ใช่ ให้ลบ
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme) //ถ้าเป็น moon ให้ add ไม่ใช่ ให้ลบ
}

//== Activate and deactivate the theme manually with the button //จัดการสลับคลาสด้วยปุ่ม
themeButton.addEventListener('click', () => { //ทำการคลิก
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme) 
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose //เก็บที่ผู้ใช้เลือกไว้ใน localStorage
    localStorage.setItem('selected-theme', getCurrentTheme()) //setItem รับค่าที่เลือกมาเก็บ
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// <!-- ScrollReveal --> Animation
const sr = ScrollReveal({ //พิมชื่อผิด ScroollReveal s ตัวใหญ่
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true
})

sr.reveal(`.home_data, .products_container, .footer_container, .footer_info`)
sr.reveal(`.home_images`,{delay:600,origin:'bottom'})
sr.reveal(`.new_card, .brand_img`,{interval:100})
sr.reveal(`.collection_explore:nth-child(1)`,{origin:'right'})
sr.reveal(`.collection_explore:nth-child(2)`,{origin:'left'})