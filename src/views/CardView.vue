<template>
  <div class="cardview">
    <div class="container">
      <div class="inner-container">
        <div
          class="card-container"
          v-for="singleCourseInformation in newCoursesInformation"
          :key="singleCourseInformation.id"
        >
          <SingleCard :singleInformation="singleCourseInformation"></SingleCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleCard from "@/components/SingleCard.vue";
import newcourses from "../assets/jsonFiles/newCourses/newcourses.json";
export default {
  name: "CardView",
  components: {
    SingleCard,
  },
  data() {
    return {
      newCoursesInformation: JSON.parse(JSON.stringify(newcourses)),
    };
  },
};
</script>
''
<style scoped lang="scss">
    $classNames: ("container": ("display": flex, "justify-content": center, "background-color": bisque), "inner-container": ("display": flex, "justify-content": space-around, "width": 80%, "margin": 4% 0%), "card-container": ("display": flex, "flex-direction": column, "width": 32%, "border": 1px solid black, "border-radius": 20px));

    @each $className, $classProperties in $classNames {
        .#{$className}{
            @each $propertie, $value in $classProperties {
                #{$propertie}: $value;
            }
        }
    }



</style>
