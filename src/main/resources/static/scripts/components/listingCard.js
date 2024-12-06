function ListingCard (props) {

    return (
        `<div class="col-sm-6 col-lg-4 mb-4">
            <div class="container-sm card listing-card">
                <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col col-md-auto">
                            <h5 class="card-title">${props.user.name}</h5>
                        </div>
                        <div class="col col-auto">
                            <span class="badge text-bg-secondary">$${props.rate}/h</span>
                        </div>
                    </div>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${props.classes}</h6>
                    <p class="card-text">${props.about}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=${"#" + props.id}>
                    More
                    </button>
                </div>
            </div>

            <div class="modal fade" id=${props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${props.user.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="fw-bold">Email:</p>
                        <p>${props.user.email}</p>
                        <p class="fw-bold">Contact info:</p>
                        <p>${props.contactInfo}</p>
                        <p class="fw-bold">Additional info:</p>
                        <p>${props.additionalInfo}</p>
                        <p class="fw-bold">Payment info:</p>
                        <p>${props.additionalInfo}</p>
                    </div>

                    </div>
                </div>
            </div>
        </div>`
    );
}

