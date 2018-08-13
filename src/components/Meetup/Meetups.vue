<template>
  <v-container>
    <v-layout
      row
      wrap
    > <v-flex xs12 sm10 md8 row offset-sm1 offset-md2>
        <!-- Card Section -->
        <v-card color="info">
          <v-container fluid>
            <v-layout>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="require('@/assets/newyork.jpg')"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h3 class="white--text mb-0">My Meetup</h3>
                    <div>
                      17th July 2017
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    flat
                    to="/meetups/1"
                  > <v-icon left light>
                      arrow_forward
                    </v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
