<template>
  <footer class="position-relative bg-kenkata-blue-dark text-white">
      <a href="#" class="btn btn-kenkata-blue position-absolute">
          <img src="@/assets/icons/Arrow.png" alt="">
      </a>
      <div class="container py-5">          
          <div class="d-md-flex py-3 justify-content-center justify-content-lg-between text-center text-md-left">

            <div class="col-lg-3 mb-4">
                <a href="#"><img class="mb-4" src="@/assets/LogoLight.png"></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
                <div class="d-flex col-md-12 justify-content-center align-items-center mt-4 mx-auto mx-md-0 pl-0">
                    <h6 class="text-white font-weight-normal">Follow us</h6>
                    <hr class="d-none d-md-block bg-kenkata-blue">
                </div>
                <SocialMedias class="mx-auto mx-md-0" />
            </div>

            <div class="col-lg-3">
                <h5 class="mt-5 mt-md-0 mb-4">Contact Info</h5>
                <div>
                    <h6 class="h6-heading">Address:</h6>
                    <h6>Solna Business Park</h6>
                    <h6>Feni-2500, Stockholm</h6>
                </div>
                <div class="my-3">
                    <h6 class="h6-heading">Phone:</h6>
                    <h6>+08-123456789</h6>
                    <h6>+08-123456789</h6>
                </div>
                <div>
                    <h6 class="h6-heading">Email:</h6>
                    <h6>support@website.com</h6>
                    <h6>info@website.com</h6>
                </div>
            </div>

            <div class="col-lg-3">
                <h5 class="mt-5 mt-md-0 mb-md-4">Useful Links</h5>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
                <a href="#">Our Sitemap</a>
                <a href="#">Latest News</a>
                <a href="#">Returns</a>
            </div>

            <div class="d-none d-lg-block">
                <h5 class="mb-4 ml-1">Recent Instagram</h5>
                <div class="square-container d-flex align-items-stretch flex-wrap">
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4 bg-kenkata-blue d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                </div>               
            </div>            
          </div>
      </div>

        <div class="footer-bottom-row pt-3 py-md-3 text-center text-md-start">
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p class="m-0">Copyright 2020 KenKata</p>
                <div class="payments d-flex mt-3 mt-md-0 justify-content-between px-0 px-sm-5 px-md-0">
                    <img src="@/assets/icons/payment/Mastercard.png">
                    <img src="@/assets/icons/payment/PayPal.png">
                    <img src="@/assets/icons/payment/Visa.png">
                    <img src="@/assets/icons/payment/Payoneer.png">
                    <img src="@/assets/icons/payment/Discover.png">
                </div>
            </div>
        </div>
  </footer>
</template>

<script>
import SocialMedias from '@/components/SocialMedias'
export default {
    components: {
        SocialMedias
    }
}
</script>

<style scoped>
footer {
    min-height: 400px;
    border-top: 5px solid var(--kenkata-blue);
}
h5 {
    text-transform: uppercase;
    color: var(--kenkata-blue);
    font-size: 1.1rem;
}
h6 {
    font-weight: 300;
    font-size: 0.95rem;
}
a{
    display: block;
    color: white;
    margin-bottom: 0.7em;
    font-weight: 300;
}
a:hover {
    color: var(--kenkata-blue);
}
.h6-heading{
    font-weight: 400 !important;
    color: var(--kenkata-blue)
}
.btn-kenkata-blue {
    border-radius: 3px;
    padding: 8px 13px;
    border: none;
    right: 1.5em;
    top: 1.5em
}
.btn-kenkata-blue:hover {
    background-color: var(--kenkata-blue);
}
button img {
    transform: scale(0.8);
}
hr {
    width: 35px;
    margin-left: 2em;
    margin-bottom: 1.5em;
}
.square-container {
    height: 280px;
    width: 280px;
}
.square-container div{
    transform: scale(0.9);
    background: var(--kenkata-gray-light);
    border-radius: 5px;
}
.square-container i {
    margin: -10px 0;
    transform: scale(1.7);
}
.footer-bottom-row {
    background-color: #080C24;
}
.payments {
    width: 100vw;
    background: white;
}
@media (min-width: 768px) {
.payments img{
    margin-left: 0.5em;
}
.payments {
    width: unset;
    background: none;
}
}

</style>