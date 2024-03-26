<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div
                class="row d-flex justify-content-center align-items-center h-100"
            >
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid"
                        alt="Sample image"
                    />
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                        <div
                            class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
                        >
                            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button
                                type="button"
                                class="btn btn-primary btn-floating mx-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="5px"
                                    y="5px"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#039be5"
                                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                    ></path>
                                </svg>
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary btn-floating mx-1"
                            >
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button
                                type="button"
                                class="btn btn-primary btn-floating mx-1"
                            >
                                <i class="fab fa-linkedin-in"></i>
                            </button>
                        </div>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input
                                type="email"
                                id="form3Example3"
                                class="form-control form-control-lg"
                                placeholder="Enter a valid email address"
                            />
                            <label class="form-label" for="form3Example3"
                                >Email address</label
                            >
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input
                                type="password"
                                id="form3Example4"
                                class="form-control form-control-lg"
                                placeholder="Enter password"
                            />
                            <label class="form-label" for="form3Example4"
                                >Password</label
                            >
                        </div>

                        <div
                            class="d-flex justify-content-between align-items-center"
                        >
                            <!-- Checkbox -->
                            <div class="form-check mb-0">
                                <input
                                    class="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="form2Example3"
                                />
                                <label
                                    class="form-check-label"
                                    for="form2Example3"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a href="#!" class="text-body">Forgot password?</a>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                style="
                                    padding-left: 2.5rem;
                                    padding-right: 2.5rem;
                                "
                            >
                                Login
                            </button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account?
                                <router-link to="/registration">Register</router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
        >
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
                Copyright © 2020. All rights reserved.
            </div>
            <!-- Copyright -->

            <!-- Right -->
            <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <!-- Right -->
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}
.h-custom {
    height: calc(100% - 73px);
}
@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>
