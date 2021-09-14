const getPosts = () => {
  const posts = [
    {
      postId: 0,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/189930390_1692543564288557_2006621993053692588_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p224ON4xNC8AX_mFfr3&_nc_ht=scontent.fjsr8-1.fna&oh=32105dbe488714a09e947f805198195e&oe=616482E3",
      userName: "Habibur Rahman",
      time: "1h",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      isLiked: false,
      isSetting: false,
      duration: "1h",
      prevLike: 43,
    },
    {
      postId: 1,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/71481182_2563211600578642_2301006433656766464_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lrb6LnDhT_sAX9Z4LKE&_nc_ht=scontent.fjsr8-1.fna&oh=3927a4a9d4849f4fe06e6fcd1f7b2b41&oe=6164580F",
      userName: "Farhad Bhuiyan",
      duration: "2h",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore quam porro alias deserunt obcaecati earum nam accusamus adipisci non laborum, architecto labore ipsum minima? Doloribus quo iusto distinctio inventore.",
      isLiked: false,
      isSetting: false,
      prevLike: 30,
    },
    {
      postId: 2,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/52293328_2327817017270109_6741223678156996608_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kktZuNrYsO8AX9BoM6o&_nc_ht=scontent.fjsr8-1.fna&oh=d32244ebacba55b7123f7ed64fbc2117&oe=61641C14",
      userName: "Pondit",
      duration: "50min",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora.",
      isLiked: false,
      isSetting: false,
      prevLike: 29,
    },
    {
      postId: 3,
      imageSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Faruque Ahmed",
      duration: "1 day ago",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore quam porro alias deserunt obcaecati earum nam accusamus adipisci non laborum, architecto labore ipsum minima?",
      isLiked: false,
      isSetting: false,
      prevLike: 27,
    },
    {
      postId: 4,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/189930390_1692543564288557_2006621993053692588_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p224ON4xNC8AX_mFfr3&_nc_ht=scontent.fjsr8-1.fna&oh=32105dbe488714a09e947f805198195e&oe=616482E3",
      userName: "Habibur Rahman",
      time: "1h",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      isLiked: false,
      isSetting: false,
      duration: "1h",
      prevLike: 43,
    },
    {
      postId: 5,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/71481182_2563211600578642_2301006433656766464_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lrb6LnDhT_sAX9Z4LKE&_nc_ht=scontent.fjsr8-1.fna&oh=3927a4a9d4849f4fe06e6fcd1f7b2b41&oe=6164580F",
      userName: "Farhad Bhuiyan",
      duration: "2h",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore quam porro alias deserunt obcaecati earum nam accusamus adipisci non laborum, architecto labore ipsum minima? Doloribus quo iusto distinctio inventore.",
      isLiked: false,
      isSetting: false,
      prevLike: 30,
    },
    {
      postId: 6,
      imageSrc:
        "https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/52293328_2327817017270109_6741223678156996608_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kktZuNrYsO8AX9BoM6o&_nc_ht=scontent.fjsr8-1.fna&oh=d32244ebacba55b7123f7ed64fbc2117&oe=61641C14",
      userName: "Pondit",
      duration: "50min",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora.",
      isLiked: false,
      isSetting: false,
      prevLike: 29,
    },
    {
      postId: 7,
      imageSrc:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      userName: "Faruque Ahmed",
      duration: "1 day ago",
      postContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores eius distinctio maiores veniam aspernatur voluptate velit voluptatum error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore quam porro alias deserunt obcaecati earum nam accusamus adipisci non laborum, architecto labore ipsum minima?",
      isLiked: false,
      isSetting: false,
      prevLike: 27,
    },
  ];

  return posts;
};

export { getPosts };
