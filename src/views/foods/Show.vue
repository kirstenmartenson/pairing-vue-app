<template>
  <div class="foods-show">
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Single Image
          ============================================= -->
          <div class="col_two_third portfolio-single-image nobottommargin">
          <img :src="food.image_url" :alt="food.name">
          </div><!-- .portfolio-single-image end -->

          <!-- Portfolio Single Content
          ============================================= -->
          <div class="col_one_third portfolio-single-content col_last nobottommargin">

            <!-- Portfolio Single - Description
            ============================================= -->
            <div class="fancy-title title-bottom-border">
              <h2>{{ food.name }}</h2><router-link v-bind:to="'/foods/' + food.id + '/edit'">Edit Food</router-link><br>
            </div>
            <p>{{ food.description }}</p>

            <!-- Portfolio Single - Description End -->

            <div class="line"></div>

            <!-- Portfolio Single - Tasting Information
            ============================================= -->
            <ul class="portfolio-meta bottommargin">
            <li><span><i class="icon-user"></i>Category:</span> {{food.category}}</li>
            </ul>
            <!-- Portfolio Single - Tasting Information End-->

            <!-- Portfolio Single - Pairing
            ============================================= -->
            <div class="si-share clearfix">
              <span>Pairing:</span>
                <div v-for="pairing in food.pairings"> 
                  <p>Name: {{ pairing.wine.name }}
                    <button class="button button-mini" v-on:click="favoritePairing(pairing)">
                      Favorite
                    </button>
                  </p>
              </div>
            </div>
            <!-- Portfolio Single - Pairing End -->

          </div><!-- .portfolio-single-content end -->

          <div class="clear"></div>

          <div class="divider divider-center"><i class="icon-circle"></i></div>


        </div>

      </div>

    </section><!-- #content end -->
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      food: {}
    };
  },
  created: function() {
    axios.get("/api/foods/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.food = response.data;
    });
  },
  methods: {
    favoritePairing: function(pairing) {
      var params = {
        pairing_id: pairing.id
      };
      axios.post("/api/favorites/", params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
