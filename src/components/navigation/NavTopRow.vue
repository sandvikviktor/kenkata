<template>
<div>
    <div class="bg-kenkata-blue d-flex align-items-center justify-content-between">
        <div class="container d-flex justify-content-between align-items-center">
            <ul class="d-flex m-0">
                <li class="nav-item dropdown">
                    <a class="pl-lg-0 nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ENG<i class="fas fa-chevron-down mx-1"></i></a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle vr" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">USD<i class="fas fa-chevron-down mx-1"></i></a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
            </ul>
            <ul class="d-flex m-0">
                <li class="nav-item vr">
                    <a class="nav-link active" href="#">Newsletter</a>
                </li>
                <li class="nav-item vr">
                    <a class="nav-link" href="#">Contact us</a>
                </li>
                <li class="nav-item vr">
                    <a class="nav-link" href="#">FAQs</a>
                </li>
                <li class="nav-item px-2 d-flex align-items-center">
                    <SocialMedias />           
                </li>
            </ul>
    </div>
    </div>
</div>


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
a{
    color: white !important;
}
.vr {
    border-right: 2px solid rgba(255, 255, 255, 0.5);
}
</style>