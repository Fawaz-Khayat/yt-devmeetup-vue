<template>
  <v-container>
    <v-layout
      row
      wrap
      class="mb-2"
    > <v-flex
        xs12
        sm6
        class="text-sm-right text-xs-center"
      > <v-btn
          large
          to="/meetups"
          color="info"
        >Explore Meetups
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        sm6
        class="text-sm-left text-xs-center"
      > <v-btn
          large
          to="/meetup/new"
          color="info"
        >Organize Meetup
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout 
      row
      wrap
      class="mt-2"  
    > <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
          > <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
      class="mt-2"
    > <v-flex
        xs12
        class="text-xs-center"
      > <p>
          Join our awesome meetups!
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      meetups: [
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/03/11/12/31/new-york-668616_960_720.jpg', id: 'fadsfasdgaeqg', title: 'Meetup in New York'},
        { imageUrl: 'https://cdn.pixabay.com/photo/2014/06/01/09/25/paris-359503_960_720.jpg', id: 'dfasdfewqrfad', title: 'Meetup in Paris'}
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    margin:  0 auto;
    right:0;
    left: 0;
    width:max-content;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size:2em;
    padding: 20px;
  }
</style>
