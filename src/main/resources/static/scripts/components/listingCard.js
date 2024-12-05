function ListingCard (props) {

    return (
        <div class="col-sm-6 col-lg-4 mb-4">
            <div class="container-sm card listing-card">
                <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col col-md-auto">
                            <h5 class="card-title">{props.name}</h5>
                        </div>
                        <div class="col col-auto">
                            <span class="badge text-bg-secondary">${props.rate}/h</span>
                        </div>
                    </div>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{props.subjects}</h6>
                    <p class="card-text">{props.bio}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
                    More
                    </button>
                </div>
            </div>

            <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

