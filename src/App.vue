<template>
  <div id="app">
        

    <!-- Header
    ============================================= -->
    <header id="header" class="full-header dark">

      <div id="header-wrap">

        <div class="container clearfix">

          <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

          <!-- Logo
          ============================================= -->
          <div id="logo">
            <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo"></a>
            <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo"></a>
          </div><!-- #logo end -->

          <!-- Primary Navigation
          ============================================= -->
          <nav id="primary-menu">

            <ul>
              <li><a href="index.html"><div>Home</div></a>
              </li>
              <li><a href="#"><div>Features</div></a>
              </li>
            </ul>

            <!-- Featured Link
            ============================================= -->
            <div id="top-search">
              <a href="#" id="top-search-trigger">Signup</a>
            </div><!-- #featured-link end -->

          </nav><!-- #primary-menu end -->

        </div>

      </div>

    </header><!-- #header end -->


    <router-view/>

    <!-- Footer
    ============================================= -->
    <footer id="footer" class="dark">

      <!-- Copyrights
      ============================================= -->
      <div id="copyrights">

        <div class="container clearfix">

          <div class="col_half">
            <img src="images/footer-logo.png" alt="Footer Logo" class="footer-logo">

            Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.
          </div>

          <div class="col_half col_last tright">
            <div class="copyrights-menu copyright-links fright clearfix">
              <a href="#">Home</a>/<a href="#">About</a>/<a href="#">Features</a>/<a href="#">Portfolio</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
            </div>
            <div class="fright clearfix">
              <a href="#" class="social-icon si-small si-borderless nobottommargin si-facebook">
                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-twitter">
                <i class="icon-twitter"></i>
                <i class="icon-twitter"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-gplus">
                <i class="icon-gplus"></i>
                <i class="icon-gplus"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-pinterest">
                <i class="icon-pinterest"></i>
                <i class="icon-pinterest"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-vimeo">
                <i class="icon-vimeo"></i>
                <i class="icon-vimeo"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-github">
                <i class="icon-github"></i>
                <i class="icon-github"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-yahoo">
                <i class="icon-yahoo"></i>
                <i class="icon-yahoo"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless nobottommargin si-linkedin">
                <i class="icon-linkedin"></i>
                <i class="icon-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

      </div><!-- #copyrights end -->

    </footer><!-- #footer end -->

        

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  // created: function() {
  //   axios.get("/api/users/me").then(response => {
  //     this.user = response.data;
  //     console.log(this.user);
  //   });
  // },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
