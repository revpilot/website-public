<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
    <div class="container position-relative">
      <logo-colour size="240px" />

      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbar-collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end mt-2 mt-lg-0"
        id="navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <NuxtLink
              to="/"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              to="/about"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              About us
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              to="/solutions"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Solutions
            </NuxtLink>
          </li>
          <li class="nav-item ml-lg-3 mt-3 mt-lg-0">
            <NuxtLink
              to="/contact"
              class="nav-link"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Contact us
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- end .container -->
  </nav>
</template>