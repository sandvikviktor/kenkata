<template>
    <div>
        <form id="reviewForm" class="bg-kenkata-gray-light p-3 was-validated">
            <h5 class="text-kenkata-blue">Add a review</h5>
            <p class="text-muted">Your email address will not be published. Required fields are marked *</p>
            <p class="mt-3 mb-2">Your rating<span class="text-kenkata-blue mr-4">*</span>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="far fa-star text-kenkata-blue"></i>
            </p>
            <div class="mb-3">
                <label for="review">Your review<span class="text-kenkata-blue">*</span></label>
                <textarea class="form-control" id="review" autocomplete="off" required></textarea>
            <!-- <div class="invalid-feedback">
                Please enter a message in the textarea.
            </div> -->
            </div>
            <div class="mb-3">
                <label for="name">Name<span class="text-kenkata-blue">*</span></label>
                <input type="text" class="form-control" id="name" autocomplete="off" required>
            </div>
            <div class="mb-3">
                <label for="email">Email<span class="text-kenkata-blue">*</span></label>
                <input type="email" class="form-control" id="name" autocomplete="off" required>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="">
                <label class="form-check-label" for="savedetails">
                    Save my name, email and website in this browser for the next time I comment.
                </label>
            </div>
            <button type="submit" class="btn btn-kenkata-blue">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
form {
    border-radius: 5px;
}
form p, label, .form-control {
    font-size: 0.8rem;
    border: none;
    box-shadow: none;
}
.form-check-label {
    color: rgb(29, 29, 29) !important;
}
textarea {
    resize: none;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
    border: none;
    background-image: none;
    box-shadow: none;
}
button {
    padding: 10px 20px;
}
</style>