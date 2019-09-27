import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 登录注册
// function saveRegisterToStorage(state) {
//   localStorage.setItem('userState', JSON.stringify(state));
// }

// function loadLoginStateFromStorage() {
//   let user = localStorage.getItem('userState');
//   if (user) {
//     return JSON.parse(user);
//   }
//   return null;
// }


// 登录注册
// const RegisterModule = {
//   namespaced:true,
//   state:{
//     user_list:[
//       {
//         id:1,
//         name:'1234',
//         password:'123456',
//         passwordt:'123456',
//         phone:'123456789'
//       }
//     ]
//   }
// }

// const LoginModule = {
//   namespaced:true,
//   state:{
//     loginItems:[
//       {
//         id:1,
//         name:'1234',
//         password:'123456',
//         passwordt:'123456',
//         phone:'123456789'
//       }
//     ]
//   },

//   mutations:{
//     addToRegister(state,register){
//       let exist = false;
//       state.loginItems.forEach((item) => {
//         if (register.id === item.id) {
//           item.count++;
//           exist = true;
//         }
//       });
//       if (!exist){
//         state.loginItems.push({
//           ...register,
//           count: 1,
//         })
//       }
//     }
//   },

//   actions:{
//     addToRegister(context,register) {
//       // console.log(register);
//       context.commit('addToRegister', register);
//     }
//   }
// }




// 购物车
function saveCartToStorage(state) {
  localStorage.setItem('cartState', JSON.stringify(state));
}

function loadCartStateFromStorage() {
  let str = localStorage.getItem('cartState');
  if (str) {
    return JSON.parse(str);
  }
  return null;
}


// 购物车
const goodsModule = {
  namespaced: true,
  state: {
    goods_list:[
      {id:1,url:'http://image.xtep.com.cn/util/upload/product/201906151706/thumb/20196151761559000766DC4665ECBC4877909C55B9F737A.jpg',tit:'【动力巢X2】特步 专柜款 男子跑鞋 19夏新款网面动力巢缓震运动鞋981319110361',pro_size:'颜色尺码：深兰/42码',price:399,count:1},
      {id:2,url:'http://image.xtep.com.cn/util/upload/product/201906151706/thumb/20196151761559000766DC4665ECBC4877909C55B9F737A.jpg',tit:'【动力巢X2】特步 专柜款 男子跑鞋 19夏新款网面动力巢缓震运动鞋981319110361',pro_size:'颜色尺码：深兰/42码',price:399,count:1}
    ],
  },

};

const shoppingCart = {
    namespaced: true,
    state:loadCartStateFromStorage() || {
      cartItems:[
        // {id:1,url:'http://image.xtep.com.cn/util/upload/product/201906151706/thumb/20196151761559000766DC4665ECBC4877909C55B9F737A.jpg',tit:'【动力巢X2】特步 专柜款 男子跑鞋 19夏新款网面动力巢缓震运动鞋981319110361',pro_size:'颜色尺码：深兰/42码',price:399,count:1},
        // {id:2,url:'http://image.xtep.com.cn/util/upload/product/201906151706/thumb/20196151761559000766DC4665ECBC4877909C55B9F737A.jpg',tit:'【动力巢X2】特步 专柜款 男子跑鞋 19夏新款网面动力巢缓震运动鞋981319110361',pro_size:'颜色尺码：深兰/42码',price:399,count:1}
      ]
    },
  getters:{
    total_price(state){
      return state.cartItems.reduce((previous, item) => {
        return previous + (item.price * item.count);
      },0)
    }
  },
  mutations:{
    addToCart(state,goods){
      let exist = false;
      state.cartItems.forEach((item) => {
        if (goods.id === item.id) {
          item.count++;
          exist = true;
        }
      });
      if (!exist){
        state.cartItems.push({
          ...goods,
          count: 1,
        })
      }
      saveCartToStorage(state);
    },
    delItems(state,pid){
      state.cartItems = state.cartItems.filter( (item) => {
        return pid !== item.id
      });
      saveCartToStorage(state);
    },
    updateCount(state, payload){
      payload.carItem.count += payload.num;
      saveCartToStorage(state)
    }
  },

  actions:{
    addToCart(context, goods) {
      console.log(goods);
      context.commit('addToCart', goods);
    },
    delItems(context,pid){
      context.commit('delItems',pid)
    },
    updateCount(context, payload) {
      context.commit('updateCount', payload)
    }
  }

}

// const key = 'user'
// const usermodule = {
//   namespaced: true,
//   state(){
//     return{
//       user:null
//     }
//   },
//   getters:{
//     getStorage:function(state){
//       if(!state.user){
//         state.user = JSON.parse(localStorage.getItem(key))
//       }
//       return state.user
//     }
//   },
//   mutations:{
//     $_setStorage(state,value){
//       state.user = value
//       localStorage.setItem(key,JSON.stringify(value))
//     },
//     $_removeStorage(state){
//       state.user = null
//       localStorage.removeItem(key)
//     }
//   }
// }

const store = new Vuex.Store({

  //定义状态
  state:{

  },
  modules:{
    goods:goodsModule,
    cart:shoppingCart,
    // login:LoginModule,
    // register:RegisterModule
  }
});

export default store
