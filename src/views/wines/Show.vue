<template>
  <div class="wines-show">

    <!-- Content
    ============================================= -->
    <section id="content">

      <div class="content-wrap">

        <div class="container clearfix">

          <!-- Portfolio Single Image
          ============================================= -->
          <div class="col_two_third portfolio-single-image nobottommargin">
          <img :src="wine.image_url" :alt="wine.name">
          </div><!-- .portfolio-single-image end -->

          <!-- Portfolio Single Content
          ============================================= -->
          <div class="col_one_third portfolio-single-content col_last nobottommargin">

            <!-- Portfolio Single - Description
            ============================================= -->
            <div class="fancy-title title-bottom-border">
              <h2>{{ wine.name }}</h2><router-link v-bind:to="'/wines/' + wine.id + '/edit'">Edit Wine</router-link><br>
            </div>
            <p>{{ wine.description }}</p>

            <!-- Portfolio Single - Description End -->

            <div class="line"></div>

            <!-- Portfolio Single - Tasting Information
            ============================================= -->
            <ul class="portfolio-meta bottommargin">
            <li><span><i class="icon-user"></i>Category:</span> {{wine.category}}</li>
            </ul>
            <!-- Portfolio Single - Tasting Information End-->

            <!-- Portfolio Single - Pairing
            ============================================= -->
            <div class="si-share clearfix">
              <span>Pairing:</span>
                <div v-for="pairing in wine.pairings"> 
                  <p>Name: {{ pairing.food.name }}
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
      wine: {},
      pairing: {}
    };
  },
  created: function() {
    axios.get("/api/wines/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.wine = response.data;
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
