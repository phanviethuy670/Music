const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $(".playlist");

const app = {
  songs: [
    {
      name: "Cưới Đi",
      singer: "2T, ChangC",
      path: "./music/song1.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2020/08/27/8/e/c/f/1598516178659_500.jpg",
    },
    {
      name: "Sài Gòn Đau Lòng Quá",
      singer: " Hứa Kim Tuyền",
      path: "./music/song2.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/03/27/d/2/9/1/1616859493571_500.jpg",
    },
    {
      name: "Một Mình Có Buồn Không",
      singer: "Thiều Bảo Trâm, Lou Hoàng",
      path: "./music/song3.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2020/10/19/f/5/8/c/1603078556165_500.jpg",
    },
    {
      name: "Lỡ Say Bye Là Bye",
      singer: "Lemese, Changg",
      path: "./music/song4.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/01/21/5/c/9/9/1611199600529_500.jpg",
    },
    {
      name: "Hương",
      singer: "Văn Mai Hương, Negav",
      path: "./music/song5.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/01/22/9/f/2/1/1611280898757_500.jpg",
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path: "./music/song6.mp3",
      image:
        "https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/219394223_1466851590333701_3606370075101924204_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CoR4g8AuzJUAX_UiqJh&_nc_ht=scontent.fdad4-1.fna&oh=9598a236af99117130ccc35f10837aea&oe=61A56E8B",
    },
    {
      name: "Cưới Thôi",
      singer: " Masew, Masiu, B Ray, V.A",
      path: "./music/song7.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/09/09/f/c/f/d/1631181753902_500.jpg",
    },
    {
      name: "Dịu Dàng Là Ngày Em Đến",
      singer: " ERIK, NinjaZ",
      path: "./music/song8.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211_500.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
      <div class="song ">
          <div class="thumb"
              style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
      </div>
      `;
    });
    playlist.innerHTML = htmls.join("");
  },
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
    };
  },
  start: function () {
    this.handleEvents();
    this.render();
  },
};
app.start();
