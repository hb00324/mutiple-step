const Tab = document.querySelectorAll('.Tab');
const btn = document.getElementById('pageToggleBtn');
const Name = document.getElementById('RegisterName');
const Email = document.getElementById('RegisterEmail');
let currentTab = 0;

function showTab(TabIndex) {
    //函式決定切換的tab的內容
    currentTab++
    Tab.forEach((Tab, index) => {
        if (index == TabIndex) {
            Tab.style.display = 'block';
            console.log(index); // index,TabIndex = 1
        } else {
            Tab.style.display = 'none';
        }
    });
}

function nextTab(currentTab) {
    if (invalidForm() == true) {
        //此函式決定切換頁面的排序
        if (currentTab < Tab.length - 1) {
            currentTab++;
            showTab(currentTab);
            console.log(Tab.length);
            console.log(currentTab);
        }
    }
}

function invalidForm() {
    //此函式讓輸入決定輸入框 是否為invalid; 10.19 做
    let invalidName = document.getElementById('invalidName'),
        invalidEmail = document.getElementById("invalidEmail");
    let errorIcon = document.getElementsByClassName('fa-solid');
    if (Email.value === "" && Name.value === "") {
        Name.className += " invalid"
        invalidName.innerText = 'Name is invalid or empty.'

        invalidEmail.innerText = 'Email is invalid or empty.'
        Email.className += " invalid"
        return false
    } else if (Email.value === "") {
        invalidEmail.innerText = 'Email is invalid or empty.'
        Email.className += " invalid"
        return false
    } else if (Name.value === "") {
        invalidName.innerText = 'Name is invalid or empty.'
        Name.className += " invalid"
        return false
    } else {
        return true
    }
}


function InnerRegisterInfo() {
    //輸入的值inner 在後面的資訊匡
    const NameWrap = document.getElementById('InfoName');
    const EmailWrap = document.getElementById('InfoEmail');
    NameWrap.innerText = Name.value;
    EmailWrap.innerText = Email.value;
}
//以下決定innerTopicInfo
let topicWrap = document.getElementById('InfoTopic1');
let topicWrap2 = document.getElementById('InfoTopic2');
let Topic1 = document.getElementById('Topic1'),
    Topic2 = document.getElementById('Topic2'),
    Topic3 = document.getElementById('Topic3');
let TopicArray = [];
let clickCount1 = 0,clickCount2 = 0,clickCount3 = 0;
console.log(TopicArray);


function TopicAdd() {
    const clickButton = event.currentTarget;
    if (clickButton === Topic1) {
        Topic1.className += " topicSelectored"
        clickCount1++;
        TopicArray.unshift(Topic1.value)
    } else if (clickButton === Topic2) {
        TopicArray.unshift(Topic2.value);
        Topic2.className += " topicSelectored"
        clickCount2++;
    } else {
        TopicArray.unshift(Topic3.value);
        Topic3.className += " topicSelectored"
        clickCount3++;
    }
    console.log(TopicArray);
    Innertopic();
    TopicLimit()
    cacelTopic();
}
console.log(Topic1.classList.value.includes("topic"))

function cacelTopic() {
    if (Topic1.classList.value.includes("topicSelectored") && clickCount1 %2 === 0 ) {
        Topic1.classList.remove("topicSelectored");
        click1--;
        console.log(Topic1.classList)

    } else if (Topic2.classList.value.includes("topicSelectored") && clickCount2 %2 === 0) {
        Topic2.classList.remove('topicSelectored');

    } else if (Topic3.classList.value.includes("topicSelectored") && clickCount3 %2 === 0){
        Topic3.classList.remove('topicSelectored');
    }
   
};

let TopicLimitText = document.getElementById("TopicLimitInfo")

function TopicLimit() {
    if (TopicArray.length >= 2) {
        TopicLimitText.innerText = 'You can only choose 2 options';
        TopicArray.pop();
    }
};

function Innertopic() {
    //此函式輸出選項的結果
    topicWrap.innerText = TopicArray[0];
    topicWrap2.innerText = TopicArray[1];
}