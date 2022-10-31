const productOfferCardTemplate = (cardImg, cardTitle, cardDescription) => `
	<article class="flip-card">
		<section class="flip-card-content">
			<section class="flip-card-content-front">
				<div class="flip-card-content-front-img">
					<img
						class="flip-card-content-front-img__file"
						src="${cardImg}"
						alt="" />
				</div>
				<div class="flip-card-content-front-title">
					<h5 class="flip-card-content-front-title__text">${cardTitle}</h5>
				</div>
			</section>
			<section class="flip-card-content-back">
				<div class="flip-card-content-back-img">
					<img
						class="flip-card-content-back-img__file"
						src="${cardImg}"
						alt="" />
				</div>
				<div class="flip-card-content-back-content">
					<h5 class="flip-card-content-back-content__title">${cardTitle}</h5>
					<p>${cardDescription}</p>
				</div>
			</section>
		</section>
	</article>
`;

const productCardTemplate = (cardImg, cardTitle, cardDescription, fasPrice, competitionPrice) => `
<article class="flip-card">
    <section class="flip-card-content">
        <section class="flip-card-content-front">
            <div class="flip-card-content-front-img">
                <img
                    class="flip-card-content-front-img__file"
                    src="${cardImg}"
                    alt="" />
            </div>
            <div class="flip-card-content-front-title">
                <h5 class="flip-card-content-front-title__text">${cardTitle}</h5>
            </div>
        </section>
        <section class="flip-card-content-back">
            <div class="flip-card-content-back-img">
                <img
                    class="flip-card-content-back-img__file"
                    src="${cardImg}"
                    alt="" />
            </div>
            <div class="flip-card-content-back-content">
                <h5 class="flip-card-content-back-content__title">${cardTitle}</h5>
                <p>${cardDescription}</p>
                <h6>Precio en Ángeles de la Salud</h6>
                <p>$${fasPrice}</p>
                <h6>Precio en la competencia</h6>
                <p>$${competitionPrice}</p>
            </div>
        </section>
    </section>
</article>
`;