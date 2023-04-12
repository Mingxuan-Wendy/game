<template>
  <div class="collection">
    <div class="collectionHeader">
      <h4 class="header">Hi {{ userName }}, Welcome back</h4>
      <h1 class="header">Your Games Collection</h1>
      <div class="filters">
        <el-button
            class="all-btn"
            size="medium"
            @click="clickAll"
            type="primary"
            >All</el-button>
        <el-select v-model="categories" placeholder="Category">
          <el-option
            v-for="item in categaryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="durations" placeholder="Duration">
          <el-option
            v-for="item in durationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="sizes" placeholder="Size">
          <el-option
            v-for="item in sizeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
          <el-select v-model="wishLists" placeholder="Wishlist">
            <el-option
              v-for="item in wishListOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="haves" placeholder="Have">
            <el-option
              v-for="item in haveOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
        </el-select>
      </div>
      <p> You totally added {{ totalCollectedGames }} games</p>

      <div class="operators">

      </div>
    </div>

    <div class="filter">

    </div>
  </div>
</template>

<script>

export default {
  name: "Collection",
  data() {
    return {
      userName: "XXX",
      categories: "Category",
      categaryOptions: [
        {
          value: "option1",
          label: "Adventure",
        },
        {
          value: "option2",
          label: "Medical",
        },
        {
          value: "option3",
          label: "Card Game",
        },
      ],
      totalCollectedGames: 16,
    };
  }
}
</script>

<style scoped>
.collection {
  margin-left: 60px;
}
.filters {
  display: flex;
}
/*.header, p{*/
/*  margin-left: 60px;*/
/*}*/
.all-btn {
  position: relative;
  float: right;
  margin-left: 10px;
  margin-right: 15px;
  background-color: #6c5dd3;
  color: #fff;
}
</style>