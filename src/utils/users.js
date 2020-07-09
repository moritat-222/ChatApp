const users = []

//addUser, removeUse, getUser, getUsersInRoom

const addUser = ({ id, username, room}) => {
    //Clean the data
    username= username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room){
      return {
        error: `Username and Room are required!`
      }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
      return user.room === room && user.username === username
    })

    //Validate username
    if(existingUser){
      return {
        error: 'Username is in use!'
      }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }
  }

  const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id) 
    //findIndex()は、()内の関数が初めてtrueを返した要素のインデックス番号を取得する
    
    if (index !== -1){　//マッチした時。findIndex()でtrueを見つけられなかったら-1
      return users.splice(index, 1)[0]　//index番目を１つ消す。splice()は、配列内の要素をn個置き換えるまたは消す
    }//[0]をつけるのは、このままだと配列がreturnされてしまうので、0番目を取得することでオブジェクトとしてreturnさせる
  }

  //getUserを作る
  const getUser = (id) => {
    return users.find((user) => user.id === id) 
}

  //getUsersInRoomを作る
  const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
  }

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}