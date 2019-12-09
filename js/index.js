const user = {
    id: 4,
    name: 'Charles Babbage',
    img: null
 }
 const message = [
    {
       id: 1,
       from: {
          id: 123,
          name: 'Ada Lovelace',
          img: null
       },
       time: {
          date: 1,
          month: 8,
          year: 1843,
          hour: 14,
          minute: 50
       },
       text: `You should check out this little script I just wrote. :joy: lol`
    }, {
        id: 2,
        from: {
           id: 234,
           name: 'Jeff smith',
           img: null
        },
        time: {
           date: 1,
           month: 8,
           year: 1843,
           hour: 15,
           minute: 10
        },
        text: `yes. :joy: lol`
     }, {
        id: 4,
        from: {
           id: 4,
           name: 'Charles Babbage',
           img: null
        },
        time: {
           date: 1,
           month: 8,
           year: 1843,
           hour: 14,
           minute: 59
        },
        text: `no. :joy: lol`
     }
 ]
 function getMessageAsHtml(msg) {
    let fromUser =`from-them`
    let fromMe = `from-me`
    if(msg.from.id==user.id){
        fromUser = `from-me`
     } else if (msg.from.id==user.id){
         fromMe = `from-them`
     }
    return `
    <article class="message ${fromUser}">
        <h2>${msg.from.name}:</h2>
        <p>${msg.text}</p>
        <p class="time">Sent ${msg.time.hour}:${msg.time.minute} </p>
    </article>
    `
 }

 function renderConversation(arr) {
    const sortedArr = arr.slice().sort((a, b) => (a.time.hour * 60 + a.time.minute) - (b.time.hour * 60 + b.time.minute));
    document.getElementById('message').innerHTML = sortedArr.map(getMessageAsHtml).join('');
 }
 renderConversation(message)
 document.getElementById(`btnOthers`).addEventListener('click', event => {
    document.getElementById(`others`).classList.toggle('open');
  });