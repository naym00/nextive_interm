<template>
  <div class="singlecard">
    <div class="image-container">
      <img
        class="responsive-image"
        src="../assets/images/newcourses/fb_banner_studyplex-banner21.png"
        alt="banner image"
      />
    </div>

    <div class="title-container">
      <div class="inner-title-container">
        <p>{{ singleInformation.title }}</p>
      </div>
    </div>

    <div class="offer-container">
      <div class="inner-offer-container">
        <div class="first-inner-offer-container" v-html="singleInformation.offer.offerType">
          
        </div>
        <div class="second-inner-offer-container">
          <p>{{ singleInformation.offer.status }}</p>
        </div>
      </div>
    </div>

    <div class="detail-container">
      <div class="inner-detail-container">
        <p>{{ singleInformation.details }}</p>
      </div>
    </div>
    <hr />
    <div class="price-container">
      <div class="inner-price-container">
        <div class="first-inner-price-container">
          <button class="detail-button">বিস্তারিত দেখুন</button>
        </div>
        <div class="second-inner-price-container">
          <p>{{ singleInformation.fee }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: ["singleInformation"],
  data() {
    return {};
  },
};
</script>

<style scoped>
    .title-container, .offer-container, .detail-container, .price-container{
        display: flex;
        justify-content: center;
        padding:1% 0%;
    }
    .inner-title-container{
        width: 90%;
    }
    .inner-title-container p{
        font-family: 'Hind Siliguri';
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: left;
    }

    .inner-offer-container{
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
    .first-inner-offer-container{
        width:60%;
    }
    .second-inner-offer-container{
        width:40%;
    }
    .second-inner-offer-container p{
        text-align: right;
    }

    .inner-detail-container{
        width: 90%;
    }
    .inner-detail-container p{
        text-align: left;
    }

    .inner-price-container{
        display: flex;
        justify-content: space-between;
        width: 90%;
    }

    .first-inner-price-container{
        
        width:50%;
    }
    .second-inner-price-container{
        padding-top: 15px;
        text-align: right;
        width:50%;
    }

    .second-inner-price-container p{
        text-align: right;
        font-weight: 600;
    }
    
    .responsive-image {
        
        width: 100%;
        height: auto;
    }
    .detail-button{
        font-family: 'Hind Siliguri';
        font-weight: 600;
        border: none;
        border-radius: 10px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16.16px;
        cursor: pointer;
        background-color: #0086AE;
    }
</style>
