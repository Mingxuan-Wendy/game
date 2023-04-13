<template>
  <div class="FAQ">
    <div class="FAQContents" v-for="item in FAQList" :key="item.id">
      <div class="faqItem">
        <p class="question">Q: {{ item.question }}</p>
        <p class="answer">A: {{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      FAQList: [
        {
          id: 1,
          question: "What is the purpose of this website?\n",
          answer: "Our website is designed to help board game enthusiasts manage their collections, track their plays, and discover new games to play.",
        },
        {
          id: 2,
          question: "How do I create an account?\n",
          answer: "To create an account, simply click on the \"Sign Up\" button on the homepage and follow the prompts. You will need to provide a valid email address and create a password.",
        },
        {
          id: 3,
          question: "Can I add games to my collection?\n",
          answer: "Yes, you can add games to your collection by searching for them in our database and clicking the \"Add to Collection\" button. You can also manually add games that are not in our database.",
        },
        {
          id: 4,
          question: "Can I track my plays?",
          answer: "Yes, you can track your plays by clicking on the \"Log Play\" button for each game in your collection. You can record the date, location, and other details of each play.",
        },
        {
          id: 5,
          question: "Can I share my collection with others?",
          answer: "Yes, you can share your collection with others by creating a public profile and allowing others to view your collection. You can also create private collections for specific groups of people.",
        },
        {
          id: 6,
          question: "Can I discover new games to play?",
          answer: "Yes, you can discover new games to play by browsing our database, searching for games by category or keyword, and reading reviews from other users.",
        },
        {
          id: 7,
          question: "Is there a mobile app?",
          answer: "Yes, we have a mobile app for iOS and Android devices that allows you to manage your collection and track your plays on the go.",
        },
        {
          id: 8,
          question: "Is there a cost to use this website?",
          answer: "Basic features are free to use, but we offer a premium subscription that provides access to additional features and benefits. See our pricing page for more information.",
        },
        {
          id: 9,
          question: "How do I contact customer support?",
          answer: "You can contact our customer support team by clicking on the \"Contact Us\" button on the homepage and filling out the form. We typically respond within 24 hours.",
        },
      ]
    }
  },
};
</script>

<style scoped>
.FAQ {
  width: 90%;
  margin-left: 3%;
  margin-top: 40px;
}
.FAQContents {
  display: flex;
  flex-direction: column;
}
.faqItem {
  height: 100px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
}
</style>