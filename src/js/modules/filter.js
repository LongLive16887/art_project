const filter  = (tagWrapper,tagBtns,tagNo) => {
    const images = document.querySelectorAll(tagWrapper),
          btns = document.querySelectorAll(tagBtns),
          portNO = document.querySelector(tagNo);

    btns.forEach(i => {
        i.addEventListener("click",() => {
            portNO.classList.remove("show");
            btns.forEach(item => {
                item.classList.remove("active");
            });
            i.classList.add("active");
            images.forEach(img => {
                img.style.display = "none";
                if(img.classList[2] === i.classList[0]){
                    img.style.display = "block";
                }
                else if(i.classList[0] === "all"){
                    img.style.display = "block";
                }
                else if(i.classList[0] === "grandmother" || i.classList[0] === "granddad"){
                    portNO.classList.add("show");
                }
                img.classList.add('animated','fadeIn');
            });
        });
    });
};

export default filter;



