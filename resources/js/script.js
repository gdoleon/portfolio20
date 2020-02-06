const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero-mbc");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("header-scrolled")
    } else {
      header.classList.remove("header-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
