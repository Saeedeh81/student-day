
document.addEventListener("DOMContentLoaded", function () {

    // حرکت به بخش‌های سایت با کلیک روی منو
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // ثبت آرزوهای دانش‌آموزان
    const wishForm = document.querySelector("#dreams form");

    if (wishForm) {
        wishForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const input = wishForm.querySelector("input, textarea");

            if (!input || input.value.trim() === "") {
                alert("لطفاً آرزوی خود را بنویسید.");
                return;
            }

            const wish = input.value.trim();

            let wishContainer = document.querySelector(
                ".wish-list, .wishes-list, .wishes-container"
            );

            if (!wishContainer) {
                wishContainer = document.createElement("div");
                wishContainer.className = "wish-list";

                wishForm.insertAdjacentElement(
                    "afterend",
                    wishContainer
                );
            }

            const wishCard = document.createElement("div");
            wishCard.className = "wish-card";

            const wishText = document.createElement("p");
            wishText.textContent = "✨ " + wish;

            wishCard.appendChild(wishText);
            wishContainer.appendChild(wishCard);

            input.value = "";

            alert("آرزوی شما با موفقیت ثبت شد! 🌟");
        });
    }


    // پنجره نمایش توضیحات
    function showModal(title, description) {

        let modal = document.querySelector("#site-modal");

        if (!modal) {
            modal = document.createElement("div");
            modal.id = "site-modal";

            modal.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close">×</button>
                    <h2 class="modal-title"></h2>
                    <p class="modal-description"></p>
                </div>
            `;

            document.body.appendChild(modal);

            modal.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(20, 10, 40, 0.75);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 20px;
            `;

            const content = modal.querySelector(".modal-content");

            content.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 20px;
                max-width: 500px;
                width: 100%;
                text-align: center;
                position: relative;
                color: #333;
            `;

            modal.querySelector(".modal-close").style.cssText = `
                position: absolute;
                top: 10px;
                right: 15px;
                border: none;
                background: none;
                font-size: 30px;
                cursor: pointer;
                color: #7c3aed;
            `;

            modal.querySelector(".modal-close").addEventListener(
                "click",
                function () {
                    modal.style.display = "none";
                }
            );

            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }

        modal.querySelector(".modal-title").textContent = title;
        modal.querySelector(".modal-description").textContent = description;

        modal.style.display = "flex";
    }


    // توضیحات کارت‌های آینده فناوری
    const futureCards = document.querySelectorAll(
        ".future-card, .technology-card, .future-item"
    );

    futureCards.forEach(function (card) {

        card.style.cursor = "pointer";

        card.addEventListener("click", function () {

            const titleElement = card.querySelector("h3, h2, h4");

            const title = titleElement
                ? titleElement.textContent.trim()
                : card.textContent.trim();

            let description = "";

            if (title.includes("هوش") || title.includes("AI")) {
                description =
                    "هوش مصنوعی یکی از فناوری‌های مهم آینده است. " +
                    "با کمک AI می‌توان تصویر تولید کرد، متن نوشت، " +
                    "ایده‌پردازی کرد و کارهای مختلف را آسان‌تر انجام داد.";
            }

            else if (title.includes("طراحی") || title.includes("سایت")) {
                description =
                    "طراحی سایت یعنی ساخت صفحات اینترنتی زیبا و کاربردی. " +
                    "با HTML، CSS و JavaScript می‌توان یک سایت جذاب ساخت.";
            }

            else if (title.includes("برنامه")) {
                description =
                    "برنامه‌نویسی به ما کمک می‌کند ایده‌هایمان را " +
                    "به نرم‌افزار و ابزارهای کاربردی تبدیل کنیم.";
            }

            else {
                description =
                    "فناوری و خلاقیت به دانش‌آموزان کمک می‌کنند " +
                    "تا آینده‌ای بهتر و هوشمندتر بسازند.";
            }

            showModal(title, description);
        });
    });


    // نمایش بزرگ عکس‌های خاطرات
    const memoryImages = document.querySelectorAll(
        "#memories img, .memory-card img"
    );

    memoryImages.forEach(function (img) {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {

            const caption = img.alt || "خاطرات زیبای مدرسه";

            showModal(
                "📸 " + caption,
                "این تصویر یادآور لحظات شیرین دوران دانش‌آموزی است."
            );
        });
    });

});
