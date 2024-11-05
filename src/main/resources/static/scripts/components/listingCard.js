
function ListingCard (props) {

    return (
        <div>
            <div class="card listing-card m-3 mr-0">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{props.subjects}</h6>
                    <p class="card-text">{props.bio}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
                    More
                    </button>
                </div>
            </div>

            <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
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

