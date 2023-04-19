<template>
  <div class="shopping">
    <div class="shop">
      <div class="store">
        <h4>Store</h4>
        <div class="storeBox">
          <div class="content">
            <p>Forbidden Planet</p>
            <h4>Address:</h4>
            <p>179 Shaftesbury Ave, London WC2H 8JR</p>
            <div style="display: flex; align-items: flex-end">
              <div class="time">
                <h4>Time:</h4>
                <p>10:00 - 18:00, Mon - Fri</p>
                <p>12:00 - 17:00, Sat - Sun</p>
              </div>
              <el-button @click="navigateToStore1">Detail</el-button>
            </div>
          </div>

          <div class="content">
            <p>CEX</p>
            <h4>Address:</h4>
            <p>32 Rathbone Place, London W1T 1JJ</p>
            <div style="display: flex; align-items: flex-end">
              <div class="time">
                <h4>Time:</h4>
                <p>10:00 - 18:00, Mon - Fri</p>
                <p>12:00 - 17:00, Sat - Sun</p>
              </div>
              <el-button @click="navigateToStore2">Detail</el-button>
            </div>
          </div>

          <div class="content">
            <p>Orc's Nest</p>
            <h4>Address:</h4>
            <p>6 Earlham St, London WC2H 9RY</p>
            <div style="display: flex; align-items: flex-end">
              <div class="time">
                <h4>Time:</h4>
                <p>10:00 - 18:00, Mon - Fri</p>
                <p>12:00 - 17:00, Sat - Sun</p>
              </div>
              <el-button @click="navigateToStore3">Detail</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="showInMap">
        <h4>Show In Map</h4>
        <div class="image-border"></div>
      </div>
    </div>

    <div>
      <h4>Online Shopping</h4>
      <div class="onlineShopping">
        <div class="geekMarket" @click="navigateToExternal1"></div>
        <div class="geekGameShop" @click="navigateToExternal2"></div>
        <div class="bggStore" @click="navigateToExternal3"></div>
        <div class="ebay" @click="navigateToExternal4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkUrl1: 'https://forbiddenplanet.com/',
      linkUrl2: 'https://uk.webuy.com/',
      linkUrl3: 'https://www.orcsnest.com/',
      geekMarket_link: 'https://boardgamegeek.com/market?pageid=1',
      geekGameShop_link: 'https://geekgameshop.com/',
      bggStore_link: 'https://boardgamegeekstore.com/',
      ebay_link: 'https://www.ebay.co.uk/',
    };
  },
  methods: {
    navigateToStore1() {
      window.open(this.linkUrl1, '_blank', 'noopener,noreferrer');
    },
    navigateToStore2() {
      window.open(this.linkUrl2, '_blank', 'noopener,noreferrer');
    },
    navigateToStore3() {
      window.open(this.linkUrl3, '_blank', 'noopener,noreferrer');
    },
    navigateToExternal1() {
      window.open(this.geekMarket_link, '_blank', 'noopener,noreferrer');
    },
    navigateToExternal2() {
      window.open(this.geekGameShop_link, '_blank', 'noopener,noreferrer');
    },
    navigateToExternal3() {
      window.open(this.bggStore_link, '_blank', 'noopener,noreferrer');
    },
    navigateToExternal4() {
      window.open(this.ebay_link, '_blank', 'noopener,noreferrer');
    },
  }
}
</script>

<style scoped>

.shopping {
  width: 90%;
  margin-left: 3%;
  margin-top: 40px;
}
.shop, .onlineShopping {
  display: flex;
  justify-content: space-between;
}

.store {
  width: 30%;
}
.content {
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.content h4,
.content p {
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
}
.time {
  float: left;
  margin-right: 40px;
}
.showInMap {
  width: 50%;
  margin-left: 20%;
}
.image-border {
  border: 5px solid #D3D3D3;
  border-radius: 20px;
}
.showInMap div {
  width: 550px;
  height: 86.2%;
  margin-bottom: 20px;
  background: url("../../img/shoppings-map2.jpg") no-repeat;
  background-size: 100% 100%;
}
.onlineShopping {
  height: 130px;
}
.geekMarket {
  width: 23%;
  height: 86.2%;
  margin-bottom: 20px;
  background: url("../../img/geek.jpg") no-repeat;
  background-size: 100% 100%;
  border: 2px solid #D3D3D3;
  border-radius: 20px;
  cursor: pointer;
}
.geekGameShop {
  width: 23%;
  height: 86.2%;
  margin-bottom: 20px;
  background: url("../../img/GeekGameShop.jpg") no-repeat;
  background-size: 100% 100%;
  border: 2px solid #D3D3D3;
  border-radius: 20px;
  cursor: pointer;
}
.bggStore {
  width: 23%;
  height: 86.2%;
  margin-bottom: 20px;
  background: url("../../img/bgg.jpg") no-repeat;
  background-size: 100% 100%;
  border: 2px solid #D3D3D3;
  border-radius: 20px;
  cursor: pointer;
}
.ebay {
  width: 23%;
  height: 86.2%;
  margin-bottom: 20px;
  background: url("../../img/ebay.jpg") no-repeat;
  background-size: 100% 100%;
  border: 2px solid #D3D3D3;
  border-radius: 20px;
  cursor: pointer;
}
</style>