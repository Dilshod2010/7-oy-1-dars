const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  swiper.on("slideChange", () => {
    const h2 = document.querySelector(".h2")
    const indexNum = swiper.realIndex;
    if(indexNum === 1){
      document.body.style.backgroundColor = "gray"
      h2.style.color = "white"
    }else if(indexNum === 2){
      document.body.style.backgroundColor = "lightgreen"
      h2.style.color = "white"
    }
    else if(indexNum === 3){
      document.body.style.backgroundColor = "firebrick"
        h2.style.color = "white"
    }else if(indexNum === 0){
      document.body.style.backgroundColor = "blanchedalmond"
      h2.style.color = "black"
    }
  })