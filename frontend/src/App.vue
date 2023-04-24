<template>
    <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
        <div class="container">
            <div
                class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
            >
                <a
                    href="/"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                >
                    <svg class="bi me-2" width="40" height="32">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                    <span class="fs-4">AWS-CPM</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <router-link to="/"
                            ><a class="nav-link">Home</a></router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/about"
                            ><a class="nav-link">About</a></router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <router-view />
</template>

<style>
#app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a,
nav li,
.nav-link a,
.nav-item a {
    font-weight: normal;
    text-decoration: none;
}
</style>
