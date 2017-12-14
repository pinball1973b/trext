<template>
  <article class="trello_card" v-for="trello in trellos"　:class="'cardid_'+trello.idList">
    <h4><a :href="trello.shortUrl">{{trello.name}}</a></h4>
    <div class="inner">
      <div class="label label_head">
        <a :href="'#article_'+trello.id" class="label_btn">
          <label class="card_btn_input" :for="'card_'+trello.id">
            <div class="label_box" :class="'id_'+trello.idList"></div>
            <div class="date">
              {{trello.dateLastActivity}}
            </div>
          </label>
        </a>
      </div>
      <input class="card_chk" type="checkbox" :id="'card_'+trello.id">
      <div class="display-none">
        <div class="desc">
          <div class="desc_inner">
            <h5><a :href="trello.shortUrl">{{trello.name}}</a></h5>
            <span class="label_box" :class="'id_'+trello.idList"></span>
            <div class="date">
              {{trello.dateLastActivity}}
            </div>
            <div class="desc_text">
              <p>{{trello.desc}}</p>
            </div>
            <div class="desc_btn_box">
              <div class="close_btn">
                  <label class="card_btn_input" :for="'card_'+trello.id">
                  閉じる
                  </label>
              </div>
              <div class="trello_link">
                <a :href="trello.shortUrl">trelloで編集</a>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
  </article>
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      trellos: [],
      trelloName: [],
      errors: []
    }
  },
  created () {
    axios.get(`https://api.trello.com/1/boards/5a2bc9321100b9a475a98412/cards/?limit=100&members=true&member_fields=fullName&key=2b2c09becd3934f69ea6e2d4fa53227c&token=d87a523b1f127abc9073c81f2cea05e598fb5f83245790083c9d903cb0eab59c`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.trellos = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    axios.get(`https://trello.com/1/boards/5a2bc9321100b9a475a98412/lists?key=2b2c09becd3934f69ea6e2d4fa53227c&token=d87a523b1f127abc9073c81f2cea05e598fb5f83245790083c9d903cb0eab59c&fields=name`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.trelloName = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    narrowing: function () {
      console.log(event.target)
    }
  }
}
</script>
