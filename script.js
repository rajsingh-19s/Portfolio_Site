console.log("script intiallizing......");


document.querySelector(".cross").style.display="none";

document.querySelector(".hamCross").addEventListener("click",()=>{

    document.querySelector(".sidebar").classList.toggle("sidebarGo");

    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){

        document.querySelector(".ham").style.display="inline";
        document.querySelector(".cross").style.display="none";
    
    }
    
    else{ setTimeout(() => {
        document.querySelector(".cross").style.display="inline";
        
    }, 450);
       
        document.querySelector(".ham").style.display="none";
    }
})



function toggleReadMore(button) {

  const parent = button.closest("div").parentElement;
  const dots = parent.querySelector(".dots");
  const moreText = parent.querySelector(".more");
 

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


document.querySelector("#contact").addEventListener("click",()=>{



    window.location.href = "contact.html";

});


document.getElementById("downloadCv").addEventListener("click", () =>{
    const link = document.createElement("a");
    link.href = "C:\Users\ilais\Documents\R.k with sbi11.pdf";
    link.download = "R.k with sbi11.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

