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
module.exports = {
  prorps: ['trellos']
}
</script>
