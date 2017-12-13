<template>
  <section class="container content_page">
    <headerApp/>
    <div class="app_container">
      <!--
      <div class="sidebar">
        <sidebarApp></sidebarApp>
      </div>
    -->
      <div class="main_content">
        <section class="content_section">
          <h2 class="sub_title">{{title.head1}}</h2>
          <section class="list_box">
            <div class="list_col" v-for="list in trelloName">
              <div class="narrowing_btn" :class="'cardid_'+list.id" @click="narrowing">
                {{list.name}}
              </div>
            </div>
          </section>
          <section class="article_box">
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
          </section>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import headerApp from '~/components/headerApp.vue'
import sidebarApp from '~/components/sidebarApp.vue'
import axios from 'axios'
export default {
  components: {
    headerApp,
    sidebarApp
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }
    ]
  },
  data: function () {
    return {
      title: {
        head1: 'trello + Nuxt.js + GitHub Pagesで簡易ブログ'
      },
      link_lists: [
        {link_text: 'Nuxt.js', url: 'https://ja.nuxtjs.org/', text: 'フレームワーク'},
        {link_text: 'trello API', url: 'https://developers.trello.com/', text: 'trelloのAPI'},
        {link_text: 'Axios', url: 'https://github.com/axios/axios', text: 'Ajaxに利用'}
      ],
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

<style lang="scss">

.display-none {
  display: none;
}
.list_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
  .list_col {
    width: 23%;
    margin: 1%;
    text-align: center;
    .narrowing_btn {
      color: #fff;
      background: #6bbd5b;
      font-size: 1em;
      border-radius: 4px;
      padding: 5px;
      border-bottom: 2px solid #448437;
      border-right: 2px solid #448437;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.card_chk {
  display: none;
  &:checked {
    & + .display-none {
      display: block;
      width: 100%;
      height: 100%;
      .desc {
        background: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 800px;
        height: 600px;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        z-index: 2;
        .desc_inner {
          margin: 20px;
          .desc_text {
            height: 400px;
            overflow: auto;
            p {
              width: 100%;
              white-space: pre-wrap;
            }
          }
          .desc_btn_box {
            display: flex;
            width: 80%;
            margin: 20px auto;
            text-align: center;
            .close_btn {
              width: 48%;
              background: #aaa;
              color: #fff;
              padding-top: 10px;
              margin: 1%;
              label{
                display: block;
                width: 100%;
                height: 100%;
                &:hover {
                  cursor: pointer;
                }
              }
            }
            .trello_link {
              width: 48%;
              margin: 1%;
              a {
                display: block;
                width: 100%;
                height: 100%;
                background: #248fb2;
                color: #fff;
                padding-top: 10px;
                height: 40px;
              }
            }
          }
          .label_box {
            &:after {
              position: relative;
              top: -5px;
            }
            margin: 10px 0;
          }
          h5 {
            font-size: 1.2em;
            border-bottom: dotted 1px #ccc;
            padding: 5px 0;
            a {
              display: block;
            }
          }
        }
      }
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
      }
    }
  }
}
.card_btn {
  label {
    display: block;
    background: #af0000;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    padding: 5px;
  }
}
.article_box{
  display: flex;
  flex-wrap: wrap;
  .trello_card {
    width: 23%;
    margin: 1%;
    border: solid 1px #ccc;
    border-radius: 5px;
    padding: 5px;
    &:hover {
      box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);
    }
    h4 {
      margin: 0;
      padding: 5px;
      border-bottom: 1px dotted #ccc;
      font-size: 1em;
      a {
        display: block;
      }
    }
    .inner{
      margin-top: 5px;
      .label {
        display: block;
        margin: 5px 0;
        width: 100%;
        height: 40px;
        label{
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          &:hover {
            cursor: pointer;
          }
          .date {
            color: #999;
          }
        }
      }
    }
    .label_box {
      width: 120px;
      height: 20px;
      display: block;
      border-radius: 4px;
      padding: 5px;
      font-size: 1em;
      text-align: center;
      &.id_5a2bc9719e5bc2cede2657e2 {
        background: #6bbd5b;
        color: #fff;
        &:after {
          content: "引越し";
        }
      }
      &.id_5a2bc9943d3468be93508719 {
        background: #6bbd5b;
        color: #fff;
        &:after {
          content: "オレオレ開発";
        }
      }
      &.id_5a2bc99fb23990a45249168b {
        background: #6bbd5b;
        color: #fff;
        &:after {
          content: "ネタ";
        }
      }
      &.id_5a2bc9a74258f945d1b25598 {
        background: #6bbd5b;
        color: #fff;
        &:after {
          content: "雑記";
        }
      }
    }
  }
}

.sub_title_section {
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  font-size: 1.2em;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.orange_btn {
  background: #ffa500;
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  font-size: 1.4rem;
  &:hover {
    color: #fff;
  }
}
</style>
