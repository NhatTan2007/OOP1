let Mobile = function(name) {
      let battery = 0;
      this.ownerPhone = name;
      this.isPhoneOn = false;
      let draftMessage = [];
      let inboxMessage = [];
      let sentMessage = [];
      this.getBattery = function() {
            alert(`Dung lượng pin còn lại ${battery}%`);
            return battery;
      }
      this.turnOnOff = function() {
            if (this.isPhoneOn) {
                  this.phoneStatus = false;
            } else if(!this.isPhoneOn && battery > 1) {
                  this.isPhoneOn = true;
                  alert("Điện thoại đã được bật");
                  battery -= 1;
            } else if (!this.isPhoneOn && battery <= 1){
                  battery = 0;
                  alert("Bạn phải sạc điện thoại trước đã");
            }
      };
      this.checkPhoneStatus = function() {
            if (this.isPhoneOn) {
                  if (battery > 0) {
                        battery -= 1;
                  } else {
                        this.turnOnOff();
                  }
                  alert("Điện thoại đang bật");
            } else {
                  alert("Bạn cần bật điện thoại lên");
            }
      };
      this.chargeBattery = function(hours) {
            if (battery + hours * 40 >= 100) {
                  battery = 100;
            } else if (hours >= 0) {
                  battery += Math.floor(hours * 40);
            }
      };
      this.writeMessage = function() {
            let message;
            if (this.isPhoneOn) {
                  message = prompt(`Nhập nội dung cần gửi từ máy của ${this.ownerPhone}`);
                  draftMessage.unshift(message);
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            };
            
      };
      this.receiveMessage = function(message) {
            if (this.isPhoneOn) {
                  inboxMessage.unshift(message);
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            };
            
      };
      this.sendMassage = function(index, toSomebody) {
            if (this.isPhoneOn) {
                  this.writeMessage();
                  let message = draftMessage[index];
                  draftMessage.splice(index,1);
                  sentMessage.unshift({content: message, to: toSomebody.ownerPhone});
                  toSomebody.receiveMessage({content: message, from: this.ownerPhone});
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            } else {
                  alert("Điện thoại của bạn đang tắt");
            }

      };
      this.readDraftMessage = function(index) {
            if (this.isPhoneOn) {
                  document.write("<h3>DRAFT MESSAGES</h3>");
                  document.write(`Nội dung tin nhắn đã soạn: &quot;${draftMessage[index]}&quot;`);
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            } else {
                  alert("Điện thoại của bạn đang tắt");
            }
      };
      this.readInboxMessage = function(index) {
            if (this.isPhoneOn) {
                  document.write("<h3>INBOX</h3>");
                  document.write(`Nội dung tin nhắn: &quot;${inboxMessage[index].content}&quot;, người gửi: <strong>&quot;${inboxMessage[index].from}&quot;</strong>`);
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            } else {
                  alert("Điện thoại của bạn đang tắt");
            };
      };
      this.readSentMessage = function(index) {
            if (this.isPhoneOn) {
                  document.write("<h3>SENT MESSAGES</h3>");
                  document.write(`Nội dung tin nhắn đã gửi: &quot;${sentMessage[index].content}&quot;, người nhận: <strong>&quot;${sentMessage[index].to}&quot;</strong>`);
                  if (battery > 1) {
                        battery -= 1;
                  } else if (battery <= 1) {
                        battery = 0;
                        this.turnOnOff();
                  };
            } else {
                  alert("Điện thoại của bạn đang tắt");
            };
      }
}

let nokia = new Mobile("Nhật Tân");
let iphone = new Mobile("Thảo Ly");