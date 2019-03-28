<template> 
  <div class="foods-index"> 

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Filter
          ============================================= -->
          <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">

            <li class="activeFilter"><a href="#" data-filter="*">Show All</a></li>
            <li><a href="#" @click="setCategory('Appetizers')">Appetizers</a></li>
            <li><a href="#" @click="setCategory('Salads')">Salads</a></li>
            <li><a href="#" @click="setCategory('Pasta')">Pasta</a></li>
            <li><a href="#" @click="setCategory('Meat')">Meat</a></li>
            <li><a href="#" @click="setCategory('Poultry')">Poultry</a></li>
            <li><a href="#" @click="setCategory('Fish & Seafood')">Fish & Seafood</a></li>
            <li><a href="#" @click="setCategory('Desserts')">Desserts</a></li>
          </ul> <!-- #portfolio-filter end -->

          <div class="clear"></div>

          <!-- Portfolio Items
          ============================================= -->
          <div id="portfolio" class="portfolio grid-container portfolio-3 portfolio-masonry clearfix">

            <article v-for="food in foods" class="portfolio-item pf-media pf-icons">
              <router-link v-bind:to="'/foods/' + food.id">
                <div class="portfolio-image">
                  <a href="portfolio-single.html">
                    <img :src="food.image_url" :alt="food.name">
                  </a>
                  <!-- hover effect with buttons -->
<!--                   <div class="portfolio-overlay">
                    <a href="images/portfolio/full/1.jpg" class="left-icon" data-lightbox="image"><i class="icon-line-plus"></i></a>
                    <a href="portfolio-single.html" class="right-icon"><i class="icon-line-ellipsis"></i></a>
                  </div> -->
                  <!-- hover effect with buttons end-->
                </div>
                <div class="portfolio-desc">
                  <h3><a href="portfolio-single.html">{{ food.name }}</a></h3>
                  <span>{{ food.description }}</span>
                </div>
              </router-link>
            </article>

          </div><!-- #portfolio end -->

        </div>

      </div>

    </section><!-- #content end -->

<!--     <h1>hi</h1> 
    <div v-for="food in foods">
      <router-link v-bind:to="'/foods/' + food.id"> 
        <h3>{{ food.name }}</h3>
      </router-link> 
      <p>{{ food.name }}</p> 
    </div>  -->
  </div> 
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      foods: []
    };
  },
  created: function() {
    axios.get("/api/foods").then(response => {
      console.log(response.data);
      this.foods = response.data;

      SEMICOLON.portfolio.gridInit($(".grid-container"));
    });
  },
  methods: {}
};
</script>
