<template>
  <div class="wines-index">

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Filter
          ============================================= -->
          <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">

            <li class="activeFilter"><a href="#" data-filter="*">Show All</a></li>
            <li><a href="#" data-filter=".pf-icons">Icons</a></li>
            <li><a href="#" data-filter=".pf-illustrations">Illustrations</a></li>
            <li><a href="#" data-filter=".pf-uielements">UI Elements</a></li>
            <li><a href="#" data-filter=".pf-media">Media</a></li>
            <li><a href="#" data-filter=".pf-graphics">Graphics</a></li>

          </ul><!-- #portfolio-filter end -->

          <div class="clear"></div>

          <!-- Portfolio Items
          ============================================= -->
          <div id="portfolio" class="portfolio grid-container portfolio-2 portfolio-masonry clearfix">

            <article v-for="wine in wines" class="portfolio-item pf-media pf-icons">
              <router-link v-bind:to="'/wines/' + wine.id">
                <div class="portfolio-image">
                  <a href="portfolio-single.html">
                    <img :src="wine.image_url" :alt="wine.name">
                  </a>
                  <!-- hover effect with buttons -->
                  <div class="portfolio-overlay">
                    <a href="images/portfolio/full/1.jpg" class="left-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                    <a href="portfolio-single.html" class="right-icon"><i class="icon-line-ellipsis"></i></a>
                  </div>
                  <!-- hover effect with buttons end-->
                </div>
                <div class="portfolio-desc">
                  <h3><a href="portfolio-single.html">{{ wine.name }}</a></h3>
                  <span>{{ wine.description }}</span>
                </div>
              </router-link>
            </article>

          </div><!-- #portfolio end -->

        </div>

      </div>

    </section><!-- #content end -->


  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      wines: []
    };
  },
  created: function() {
    axios.get("/api/wines").then(response => {
      console.log(response.data);
      this.wines = response.data;
    });
  },
  methods: {}
};
</script>
