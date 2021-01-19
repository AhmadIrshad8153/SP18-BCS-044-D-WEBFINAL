import Item1 from '../../images/d1.jpg'
import Item2 from '../../images/d2.jpg'
import Item3 from '../../images/d3.jpg'
import Item4 from '../../images/d5.jpg'
import Item5 from '../../images/d6.jpg'
import Item7 from '../../images/d8.jfif'
import Item8 from '../../images/d9.jfif'
import Item9 from '../../images/d10.jpg'
import Item10 from '../../images/d11.jfif'
import Item11 from '../../images/d12.png'
import Item12 from '../../images/d13.jpg'
import Item13 from '../../images/l1.jfif'
import Item14 from '../../images/l2.jfif'
import Item15 from '../../images/l3.jfif'
import Item16 from '../../images/u1.jfif'
import Item17 from '../../images/u2.jfif'
import Item18 from '../../images/u3.jfif'
import Item19 from '../../images/sb.jfif'
import Item20 from '../../images/gb.jpg'
import Item21 from '../../images/pb.jpg'
import Item22 from '../../images/b1.jfif'
import Item23 from '../../images/b2.png'
import Item24 from '../../images/b3.jfif'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Pistol', desc: "WAL 5100301 PPQ TAC 22LR 4IN BLK 12RD, ex.", price:80000,img:Item1},
        {id:2,title:'Pistol', desc: "WAL 5120338 P22MCA 22 LR MILITARY *CA, ex.", price:60000,img: Item2},
        {id:3,title:'Pistol', desc: "   SPG XD9802 CA 40 SC 3IN BLK, ex.",price:100000,img: Item3},
        {id:4,title:'Sniper', desc: " ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD, ex.", price:400000,img:Item4},
        {id:5,title:'AR Riffle', desc: "ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD, ex.", price:200000,img: Item5},
        {id:7,title:'AR Riffle', desc: "COLT MADE M16, ex.", price:300000,img:Item7},
        {id:8,title:'Rifle', desc: "Militry G3 RIFFLE, ex.", price:350000,img: Item8},
        {id:9,title:'Sniper', desc: "SAV 19734 116 TH XP 7MMREM W/NIK, ex.",price:370000,img: Item9},
        {id:10,title:'ShotGun', desc: "SHOT DUO, ex.", price:200000,img:Item10},
        {id:11,title:'ShotGun', desc: "AMERICAN SHOTSGUN, ex.", price:100000,img: Item11},
        {id:12,title:'ShotGun', desc: " RUSSIAN MONSTER, ex.",price:100000,img: Item12},
        {id:13,title:'Lower Reciver', desc: "COLT LOWER RECIEVER LOCAL FOR RIFFLE, ex.", price:25000,img:Item13},
        {id:14,title:'Lower Reciver', desc: "COLT LOWER RECIEVER IMPOERTED FOR RIFLE, ex.", price:37000,img: Item14},
        {id:15,title:'Lower Reciver', desc: "Colt lower reciever imported for pistol, ex.",price:15000,img: Item15},
        {id:16,title:'Upper Reciver', desc: "COLT MADE UPPER RECIEVER, ex.", price:15000,img:Item16},
        {id:17,title:'Upper Reciver', desc: "COLT MADE UPPER RECIEVER, ex.", price:27000,img: Item17},
        {id:18,title:'Upper Reciver', desc: "COLT MADE UPPER RECIEVER, ex.",price:21000,img: Item18},
        {id:19,title:'Sniper Bullets', desc: "COLT SNIPER BULLETS (IMPORTED), ex.", price:300,img:Item19},
        {id:20,title:'ShotGun Bullets', desc: "COLT KARTOOZ, ex.", price:50,img: Item20},
        {id:21,title:'Pistol Bullets', desc: "COLT PISTOL BULLET (IMPORTED), ex.",price:110,img: Item21},
        {id:22,title:'Black Powder', desc: " GOEX black powder, ex.", price:15000,img:Item19},
        {id:22,title:'Black Powder', desc: "LOCAL BLACK POWDER, ex.", price:8000,img: Item20},
        {id:24,title:'Black Powder', desc: "SWISS BLACK POWDER, ex.",price:16000,img: Item21}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 2000
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 2000
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer