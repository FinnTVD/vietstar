const itemtraining_content = document.querySelectorAll(".itemtraining_content");
const training_content = document.querySelectorAll(".training_content");
if (itemtraining_content && training_content) {
    itemtraining_content.forEach((item, index) => {
        item.addEventListener("click", () => {
            itemtraining_content.forEach((el) => {
                el.classList.remove("active");
            });
            training_content.forEach((el) => {
                el.classList.remove("active");
            });
            training_content[index].classList.add("active");
            item.classList.add("active");
        });
    });
}
