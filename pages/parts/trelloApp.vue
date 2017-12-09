<section class="content_section">
  <h2 class="sub_title">{{title.head1}}</h2>
  <h3 class="sub_title_section">{{title.head2}}</h3>
  <div class="article_box">
    <article class="trello_card" v-for="trello in trellos">
        <h4><a :href="trello.shortUrl">{{trello.name}}</a></h4>
        <div class="inner">
          <div class="label">
            <label class="card_btn_input" :for="'card_'+trello.id">
              <span class="label_box" :class="'id_'+trello.idList"></span>
            </label>
          </div>
          <div class="display-none">
            <div class="desc">
              <div class="desc_inner">
                <h5><a :href="trello.shortUrl">{{trello.name}}</a></h5>
                <span class="label_box" :class="'id_'+trello.idList"></span>
                <div class="desc_text">
                  {{trello.desc}}
                </div>
                <div class="desc_btn_box">
                  <div class="close_btn">閉じる</div>
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
  </div>
</section>
<section>
  <h3 class="sub_title_section">{{title.head3}}</h3>
  <ul>
    <li v-for="link_list in link_lists"><a :href="link_list.url">{{link_list.link_text}}</a> : {{link_list.text}}</li>
  </ul>
</section>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      title: {
        head1: '実際に作ってみた',
        head2: 'trello APIを叩いてカード一覧を出す',
        head3: '使ったもの'
      },
      link_lists: [
        {link_text: 'Nuxt.js', url: 'https://ja.nuxtjs.org/', text: 'フレームワーク'},
        {link_text: 'trello API', url: 'https://developers.trello.com/', text: 'trelloのAPI'},
        {link_text: 'Axios', url: 'https://github.com/axios/axios', text: 'Ajaxに利用'}
      ],
      trellos: [],
      errors: []
    }
  },
  created () {
    axios.get(`https://api.trello.com/1/boards/5a12c16cd46c6f47cfc3ddc3/cards/?limit=100&members=true&key=2b2c09becd3934f69ea6e2d4fa53227c&token=d87a523b1f127abc9073c81f2cea05e598fb5f83245790083c9d903cb0eab59c`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.trellos = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {

  }
}
</script>
