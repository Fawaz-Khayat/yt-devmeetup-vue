<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">My Meetup</h6>
          </v-card-title>
            <v-card-media
              :src="require('@/assets/newyork.jpg')"
              height="400px"
            ></v-card-media>
            <v-card-text>
              <div class="info--text">17th July 2017 - Where it takes place</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quasi vero a quisquam itaque at. Ipsam, quo deleniti quod reprehenderit illum sed cupiditate aut nostrum facere molestiae ad commodi dolorem.
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary">Register</v-btn>
              </v-card-actions>
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
