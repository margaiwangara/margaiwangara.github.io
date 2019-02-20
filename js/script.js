document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".f");
  const box = document.querySelector(".box-ref");
  // el.addEventListener("mouseover", () => {
  //   box.classList.add("box-active");
  // });

  // el.addEventListener("mouseout", () => {
  //   box.classList.remove("box-active");
  // });

  //   Tabs
  const tabs = Array.from(document.querySelectorAll(".tab"));

  tabs.forEach(tab => {
    //on click
    tab.addEventListener("click", e => {
      e.preventDefault();
      const eHolder = e.target;

      if (!eHolder.classList.contains("active")) {
        //loop through the list to remove class active
        tabs.forEach(value => {
          //remove active class from all
          if (value.classList.contains("active")) {
            document
              .querySelector(value.getAttribute("href"))
              .classList.remove("active");
            value.classList.remove("active");
          }
        });
        //add active class to clicked
        eHolder.classList.add("active");

        //grab id of content
        const contentTabId = document.querySelector(
          eHolder.getAttribute("href")
        );
        //add class active to tabcontent
        contentTabId.classList.add("active");
      }
    });
  });

  // Form handling
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = {};
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    // Assign to object
    formData.name = name;
    formData.email = email;
    formData.message = message;

    console.log(formData.name);
  });

  // Some Redux code here
  // Sample fetch request
});
