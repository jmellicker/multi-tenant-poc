<template>
  <q-layout>
    <q-page-container>
      <q-page>
          <div class="row full-width layout-padding">
            showing components for route:
            <div class="text-purple">{{ currentRouteLink }}</div>
          </div>

          <component 
                v-if="eJSON.pageSections" 
                v-for="(section, index) in eJSON.pageSections"
                :is="section.component"
                :componentData="section.componentData"
                :sectionIndex="index"
                :key="index"
            />            
          
      </q-page>
      <!-- <router-view /> -->
    </q-page-container>
  </q-layout>
</template>

<style scoped>
</style>

<script>
    
    import c from '../js/logs'
    import { mapGetters } from 'vuex'
    
    export default {
        data() {
            return {
                eJSON: {},
                currentRouteLink: window.location.pathname
            }
        },
        computed: {
          // mix the getters into computed with object spread operator
            ...mapGetters([
                'store/getCompanyDetails'
            // ...
            ]),
            ViewComponent () {
              //return routes[this.currentRoute] || NotFound
            }  
        },
       
        created(){

            // code to get company details
            let compData = this['store/getCompanyDetails']
            
            let latCompanydata = []
            //let compData = this.$store.state.store.configArr
            
            let companyId = this.$route.query.e
            let currentRoute = this.$router.currentRoute

            // let currentComp = this.ViewComponent

            let companydata = compData.filter((item,index) => {    
                                        
                if(item[companyId]){
                    return item[companyId]
                }            
            })   
            
            if(companydata[0]){
                let mycode = companydata[0][companyId].routes
                
                let latCompanydata = mycode.filter((items,index) => {    
                    let currRouteData= items[this.currentRouteLink]
                                        
                    if(currRouteData){                        
                        this.eJSON = currRouteData 
                    }            
                })                 
            }             
        }
    }
</script>
