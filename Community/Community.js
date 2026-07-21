
function toggleReview(button)
{

    // Current card
    const card = button.closest(".community-review-outer-card");

    // Review text
    const review = card.querySelector(".community-review-txt");

    if (card.classList.contains("expanded")) {

        // Collapse
        card.classList.remove("expanded");

        review.style.height = "80%";
        review.style.overflow = "hidden";

        button.textContent = "Read more";

    } else {

        // Expand
        card.classList.add("expanded");

        review.style.height = "auto";
        review.style.overflow = "scroll";

        button.textContent = "Read less";

    }
}
