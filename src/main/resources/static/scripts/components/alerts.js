function SucessAlert (props) {
    return (
        <div class="alert alert-success alert-dismissible d-flex align-items-center" role="alert">
            <i class="bi bi-check-circle-fill flex-shrink-0 me-2" aria-label="Success:"></i>
            <div>
                {props.text}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

function FailureAlert (props) {
    return (
        <div class="alert alert-danger alert-dismissible d-flex align-items-center" role="alert">
            <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" aria-label="Warning:"></i>
            <div>
                {props.text}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}