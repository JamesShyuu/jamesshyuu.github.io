export const MEMBERS: any = {
         1: {
           id: 1,
           seqNo: 0,
           userId: "test1",
           password: "1234",
           phone: "0911222333",
           userName: "測試1",
           email: "test1@gmail",
           address: "新北市新店區",
           company: "精ＸＸ誠",
           todayOrder: {
             createTime: "2019/05/16",
             1: { productKey: "1", productName: "便當", quantity: 10, price: 60, totalPrice: 600 },
             2: { productKey: "2", productName: "水果", quantity: 7, price: 30, totalPrice: 210 }
           },
           orderList: {
             1: {
               createTime: "2019/01/26",
               1: { productKey: "1", productName: "便當", quantity: 8, price: 60, totalPrice: 240 },
               2: { productKey: "2", productName: "水果", quantity: 4, price: 30, totalPrice: 120 }
             },
             2: {
               createTime: "2019/03/11",
               1: { productKey: "1", productName: "便當", quantity: 5, price: 60, totalPrice: 300},
               2: { productKey: "2", productName: "水果", quantity: 3, price: 30, totalPrice: 90 }
             }
           },
           todayReward: { createTime: "2019/05/16", reward: 130 },
           rewardList: {
             1: { createTime: "2019/01/26", reward: 100 },
             2: { createTime: "2019/03/11", reward: 50 }
           }
         },
         2: {
           id: 2,
           seqNo: 1,
           accountId: "test2",
           password: "1234",
           phone: "0911222333",
           name: "測試2",
           email: "test2@gmail",
           address: "台北內湖",
           company: "碩Ｘ",
           isManger: false,
           todayOrder: {
             createTime: "2019/05/16",
             1: { productKey: "1", quantity: 10, price: 600 },
             2: { productKey: "2", quantity: 7, price: 210 }
           },
           orderList: {
             1: {
               createTime: "2019/01/26",
               1: { productKey: "1", quantity: 8, price: 480 },
               2: { productKey: "2", quantity: 4, price: 120 }
             },
             2: {
               createTime: "2019/03/11",
               1: { productKey: "1", quantity: 5, price: 300 },
               2: { productKey: "2", quantity: 3, price: 90 }
             }
           },
           todayReward: { createTime: "2019/05/16", reward: 130 },
           rewardList: {
             1: { createTime: "2019/01/26", reward: 100 },
             2: { createTime: "2019/03/11", reward: 50 }
           }
         }
       };

export const MANGER: any = {

};


export const PRODUCTS: any = [
  { productKey: "1", productName: "福隆便當", productPrice: 65, show: true },
  { productKey: "2", productName: "現切水果", productPrice: 30, show: true }
]





export const adminSetting = {
  adminSettingList: {
    products: [
      { productKey: "1", productName: "福隆便當", productPrice: 65, show: true },
      { productKey: "2", productName: "現切水果", productPrice: 30, show: true }
    ],
    rewardRate: 0.05,
  }
  
}

export const user = {
  userInfo: {
    allUser: [
      {
        userId: "john1234@gmail.com",
        password: "1234",
        loginTime: "20190402",
        userNo: "AXcd23412",
        isAdmin: true,
      },
      {
        userId: "admin123@gmail.com",
        password: "1234",
        loginTime: "20190402",
        userNo: "admin231",
        isAdmin: true,

      }
    ]
  }
}


export const memberDataModel = {
  AXcd23412: {
    memberNo: "AXcd23412",
    userInfo: {
      userName: "李約瀚",
      birthday: "19901003",
      phone: "0911222333",
      gender: "1",
      company: "精X資訊",
      address: "台北市北投區承德路"
    },
    orderList: [
      {
        memberNo: "AXcd23412",
        name: "林喬伊",
        phone: "0922333111",
        address: "台北市內湖區瑞光路",
        reward: 40,
        createTime: "20190315",
        orders: [
          { productKey: "1", productName: "福隆便當", amount: 10, productPrice: 65 },
          { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
        ]
      },
      {
        memberNo: "AXcd23412",
        name: "李約瀚",
        phone: "0911222333",
        address: "台北市內湖區瑞光路",
        reward: 27,
        createTime: "20190402",
        orders: [
          { productKey: "1", productName: "福隆便當", amount: 6, productPrice: 65 },
          { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
        ]
      }
    ],
    todayOrder: {
      memberNo: "AXcd23412",
      name: "李約瀚",
      phone: "0911222333",
      address: "台北市內湖區瑞光路",
      reward: 27,
      createTime: "20190402",
      orders: [
        { productKey: "1", productName: "福隆便當", amount: 6, productPrice: 65 },
        { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
      ]
    }
  }
  
}


export const adminDataModel = {
  appData:{
   userNo: 'admin231',
    todayOrder: [
      {
        userNo: "AXcd23412",
        name: "李約瀚",
        phone: "0911222333",
        address: "台北市內湖區瑞光路",
        reward: 27,
        createTime: "20190402",
        orders: [
          { productKey: "1", productName: "福隆便當", amount: 6, productPrice: 65 },
          { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
        ]
      }
    ],
    orderList: [
      {
        userNo: "AXcd23412",
        name: "林喬伊",
        phone: "0922333111",
        address: "台北市內湖區瑞光路",
        reward: 40,
        createTime: "20190315",
        orders: [
          { productKey: "1", productName: "福隆便當", amount: 10, productPrice: 65 },
          { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
        ]
      },
      {
        userNo: "AXcd23412",
        name: "李約瀚",
        phone: "0911222333",
        address: "台北市內湖區瑞光路",
        reward: 27,
        createTime: "20190402",
        orders: [
          { productKey: "1", productName: "福隆便當", amount: 6, productPrice: 65 },
          { productKey: "2", productName: "現切水果", amount: 5, productPrice: 30 },
        ]
      }
    ]
  }
  


}