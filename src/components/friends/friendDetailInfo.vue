<template>
  <div class="friendsDetailBox">
    <div class="about">About</div>
    <p style="margin-bottom: 30px">{{ information[friendIndex].content }}</p>
    <div class="connection">Connection</div>
    <i class="el-icon-phone" style="width: 180px; margin-bottom: 20px">：{{ information[friendIndex].phone }}</i>
    <br />
    <i class="el-icon-message" style="width: 180px; margin-bottom: 20px">：{{ information[friendIndex].email }}</i>
    <div class="collection">Collections</div>
    <div class="collectionContent">
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    friendIndex: {
      type: String,
    },
  },
  data() {
    return {
      information: [
        {
          content:
            "Hello everyone. This is Andy, a dedicated semaphore student with a passion for communication. I spend much of my time learning and practicing the art of semaphore signaling, honing my skills to become a master of the craft. And I often play board games with my friends.",
          phone: "+44 7913408763",
          email: "Andy@gmail.com",
        },
        {
          content:
            "Hello everyone. My name is Julie, and I'm a music enthusiast with a passion for games that test my knowledge of all things musical. I love to play games that challenge me to identify songs based on their melodies, lyrics, or even just a few notes. ",
          phone: "+44 7890287654",
          email: "Julie@gmail.com",
        },
        {
          content:
            "Hello everyone. This is Patrick, an avid chess player with a passion for strategy games. I spend much of my free time honing my skills and studying chess tactics and techniques. And I love to play against other chess enthusiasts and enjoys the challenge of outmaneuvering my opponents on the board.",
          phone: "+44 7807265486",
          email: "Patrick@gmail.com",
        },
        {
          content:
            "Hello everyone. My name is Monica, a social gamer who loves to play games with others rather than playing alone. I enjoy a variety of games, including board games, card games, and video games, and I always eager to learn new ones. For me, playing games is a way to connect with others and have fun together.",
          phone: "+44 7806990781",
          email: "Monica@gmail.com",
        },
      ],
    };
  },
};
</script>
<style scoped>
.friendsDetailBox {
  width: 97%;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
}
.about {
  width: 48px;
  border-bottom: 5px solid #3f8cff;
}
.friendsDetailBox p {
  word-break: break-all;
}
.connection {
  width: 88px;
  border-bottom: 5px solid #3f8cff;
  margin-bottom: 20px;
}
.collection {
  width: 84px;
  border-bottom: 5px solid #3f8cff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.collectionContent {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.box {
  width: calc((100% - 30px) / 4);
  overflow: hidden;
}
.pic {
  width: 40%;
  height: 150px;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
  float: left;
}
.info {
  width: 60%;
  float: left;
  height: 150px;
  background-color: #f9f9f9;
}
</style>
