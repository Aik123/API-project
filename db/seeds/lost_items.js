/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("lost_items").del();
  await knex("lost_items").insert([
    {
      date_found: "2008-10-18",
      location_found: "小山台のバス停のベンチ",
      name: "ごはんですよ",
      category: "食品",
      description: "秋雨が　ごはんですよと　泣いている",
      img_url: "https://i.ibb.co/xgh7kpc/001-gohandesuyo.jpg",
    },
    {
      date_found: "2010-02-07",
      location_found: "自宅の前",
      name: "ねぎ",
      category: "食品",
      description: "帰宅して　妻からほしい　ねぎらいよ",
      img_url: "https://i.ibb.co/4T6S97d/002-negi.jpg",
    },
    {
      date_found: "2015-02-10",
      location_found: "溝口駅の改札前",
      name: "みかん",
      category: "食品",
      description: "今年こそ　こたつでほっこり　したかった",
      img_url: "https://i.ibb.co/WvL3BDD/003-mikan.jpg",
    },
    {
      date_found: "2016-03-20",
      location_found: "郡山駅のホーム",
      name: "急須",
      category: "日用品",
      description: "コレむしろ　誰かがネタで　置いただろ",
      img_url: "https://i.ibb.co/ZxfJRKc/004-kyusu.jpg",
    },
    {
      date_found: "2016-12-16",
      location_found: "スーパーサミットの前の通り",
      name: "梅宮辰夫",
      category: "顔",
      description: "ありがとう　あなたに元気を　もらったよ",
      img_url: "https://i.ibb.co/XZxV1th/005-umemiya.jpg",
    },
    {
      date_found: "2017-05-09",
      location_found: "電車の中",
      name: "ねぎ",
      category: "食品",
      description: "忘れ物　第一位は　ねぎだろう",
      img_url: "https://i.ibb.co/1KHvB2r/006-negi.jpg",
    },
    {
      date_found: "2018-01-18",
      location_found: "新宿西口",
      name: "福沢諭吉",
      category: "紙",
      description: "百万円　誰かが騙され　破ったか",
      img_url: "https://i.ibb.co/C5NkMx9/007-yukichi.jpg",
    },
    {
      date_found: "2019-07-19",
      location_found: "オックスフォードストリート",
      name: "Teeth",
      category: "歯",
      description: "次からは　接着剤を　多めでね",
      img_url: "https://i.ibb.co/jVFgRxC/008-teeth.jpg",
    },
    {
      date_found: "2019-08-18",
      location_found: "電車の中",
      name: "マクドナルド",
      category: "食品",
      description: "終点で　寝過ごしたことに　気が付いた",
      img_url: "https://i.ibb.co/nPNGw0B/009-mcdonalds.jpg",
    },
    {
      date_found: "2020-04-15",
      location_found: "ショッピンモールの廊下",
      name: "バケツ",
      category: "日用品",
      description: "黄色いよ　そうだねとても　黄色いよ",
      img_url: "https://i.ibb.co/G0Y71ZH/010-bucket.jpg",
    },
  ]);
};
