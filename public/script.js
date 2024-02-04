var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var user = { message: "" };

var arr = [
    { message: "hello", response: "hello, how can i help you?" },
    { message: "how are you?", response: "I'm good. How are you?" },
    { message: "what is your name", response: "I am Indie, i'll help you manage your orders!!" },
    { message: "how's the weather today", response: "It's a bright lovely day out" },
    { message: "what are your services", response:"I can help you with placing an order, return/exchange of an order and link you to customer-care"},
    { message:"place an order", response:"we sell the following categories of products:soaps,shampoo,conditioner,face wash,lip balms.etc"},
    { message:"return/exchange", response:"fetching your latest order details..."},
    { message:"customer care", response:"Connecting our advisor......Hold on a minute\nHello I am Nisha, How may I help you? "},
    { message:"track my order",response:"Your order will be arriving by tommorrow"},
    {message:"my order number",response:"Your order number is 60234090"},
    {message:"i want to return my order",response:"Sure, please provide me with your order number"},
    {message:"60234090",response:"Your package will be collect within 2 working days"},
    {message:"bye",response:"Glad to meet you byee"},
];

var chatcontainer = document.getElementById('chatContainer');

function sendmsg(usermsg) {
    var msgelement = document.createElement('div');
    msgelement.style.textAlign = "right";
    msgelement.style.margin = "10px";
    msgelement.innerHTML = "<span> You: </span>" + "<span>" + usermsg + "</span>";
    chatcontainer.appendChild(msgelement);
}

function chatbot(usermessage) {
    var chatbotmsg = "";
    if (usermessage.length > 2) {
        var result = arr.filter(val => val.message.includes(usermessage.toLowerCase()));
        console.log(result);
        if (result.length > 0) {
            var response = result[0].response;
            chatbotmsg = response;
        }
        else{
            chatbotmsg="Sorry i didnt understand";
        } 
    }
    else{
        chatbotmsg="Sorry i didnt understand";
    }
    
    var msg = document.createElement('div');
    msg.innerHTML = "<span>Chatbot: </span>" + "<span>" + chatbotmsg + "</span>";
    setTimeout(()=>{
        msg.animate([{easing: "ease-in", opacity: 0.4}, {opacity: 1}], {duration: 500});
        chatcontainer.appendChild(msg);// Replace 'chatcontainer' with the actual ID or reference to your container
     chatcontainer.scrollTop = chatcontainer.scrollHeight;

    },500);
}

sendBtn.addEventListener('click', function (e) {
    var usermsg = textbox.value;
    if (usermsg == "") {
        alert("Please type a message");
    } else {
        let text = usermsg.trim();
        user.message = text;
        textbox.value = "";
        sendmsg(text);
        chatbot(text);
    }
});