const cardAnimalExtinted = (animal) => {
    return `
      <div class="card text-light container" style="background-color: #1B1D27;">
        <img id="imageSrc" src=${animal.imageSrc} class="card-img-top" alt="green iguana" style="height: 260px; width: 260px; object-fit: fill; border-radius: 50%; margin: 2em; margin: auto;"/>
        <div class="card-body">
          <h4 id="binomialName">
            ${animal.binomialName}
          </h4>
          <p id="location" class="card-text text-warning">
            ${animal.location}
          </p>
          <p id="shortDesc" class="card-text">
            ${animal.shortDesc}
          </p>
          <a id="wikiLink" href=${animal.wikiLink} class="card-text text-primary" style="cursor: pointer;">
            ${animal.wikiLink}
          </a>
        </div>
      </div>
    `
}